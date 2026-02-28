import "server-only";

import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import {
  defaultSiteContent,
  normalizeSiteContent,
  type ImageKey,
  type SiteContent,
} from "@/lib/site-content-schema";
import { readPricesFromDb, writePricesToDb } from "@/lib/site-prices-db";

const dataFilePath = path.join(process.cwd(), "data", "site-content.json");
const publicDirPath = path.join(process.cwd(), "public");
const uploadsDirPath = path.join(publicDirPath, "uploads");
const resolvedPublicRoot = path.resolve(publicDirPath);

type SiteContentFile = Pick<SiteContent, "updatedAt" | "images">;

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MIME_TO_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

const resolvePublicFilePath = (publicPath: string): string | null => {
  if (!publicPath.startsWith("/")) {
    return null;
  }

  const relativePath = publicPath.replace(/^\/+/, "");
  const absolutePath = path.resolve(publicDirPath, relativePath);
  const rootWithSeparator = `${resolvedPublicRoot}${path.sep}`;
  const isInsidePublic =
    absolutePath === resolvedPublicRoot ||
    absolutePath.startsWith(rootWithSeparator);

  return isInsidePublic ? absolutePath : null;
};

const tryDeleteFile = async (filePath: string): Promise<boolean> => {
  try {
    await fs.unlink(filePath);
    return true;
  } catch (error) {
    const maybeError = error as NodeJS.ErrnoException;
    if (maybeError.code === "ENOENT" || maybeError.code === "EPERM") {
      return false;
    }
    return false;
  }
};

const getFileExtension = (file: File): string | null => {
  if (file.type in MIME_TO_EXT) {
    return MIME_TO_EXT[file.type];
  }

  const name = file.name.toLowerCase();
  const extension = name.split(".").pop();
  if (!extension) {
    return null;
  }

  const normalized = extension === "jpeg" ? "jpg" : extension;
  return ["jpg", "png", "webp", "gif"].includes(normalized) ? normalized : null;
};

export async function readSiteContent(): Promise<SiteContent> {
  let baseContent: SiteContentFile = {
    updatedAt: defaultSiteContent.updatedAt,
    images: defaultSiteContent.images,
  };

  try {
    const file = await fs.readFile(dataFilePath, "utf8");
    const normalized = normalizeSiteContent(JSON.parse(file));
    baseContent = {
      updatedAt: normalized.updatedAt,
      images: normalized.images,
    };
  } catch {
    // Keep defaults when file does not exist or is invalid.
  }

  try {
    const dbPrices = await readPricesFromDb();
    return {
      ...baseContent,
      prices: dbPrices,
    };
  } catch {
    return {
      ...baseContent,
      prices: defaultSiteContent.prices,
    };
  }
}

export async function writeSiteContent(input: unknown): Promise<SiteContent> {
  const normalized = normalizeSiteContent(input);
  const payload: SiteContent = {
    ...normalized,
    updatedAt: new Date().toISOString(),
  };

  await writePricesToDb(payload.prices);

  const filePayload: SiteContentFile = {
    updatedAt: payload.updatedAt,
    images: payload.images,
  };

  await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
  await fs.writeFile(
    dataFilePath,
    `${JSON.stringify(filePayload, null, 2)}\n`,
    "utf8",
  );

  return payload;
}

export async function replaceSiteImage(
  slot: ImageKey,
  file: File,
): Promise<SiteContent> {
  if (file.size <= 0) {
    throw new Error("File is empty");
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File is too large. Max size is 10MB");
  }

  const extension = getFileExtension(file);
  if (!extension) {
    throw new Error("Unsupported file format");
  }

  const current = await readSiteContent();
  const previousPath = current.images[slot];

  const nextFileName = `${slot}-${Date.now()}-${randomUUID()}.${extension}`;
  const nextPublicPath = `/uploads/${nextFileName}`;
  const nextAbsolutePath = path.join(uploadsDirPath, nextFileName);

  await fs.mkdir(uploadsDirPath, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(nextAbsolutePath, buffer);

  try {
    const saved = await writeSiteContent({
      ...current,
      images: {
        ...current.images,
        [slot]: nextPublicPath,
      },
    });

    if (previousPath !== nextPublicPath) {
      const previousAbsolutePath = resolvePublicFilePath(previousPath);
      if (previousAbsolutePath) {
        await tryDeleteFile(previousAbsolutePath);
      }
    }

    return saved;
  } catch (error) {
    await tryDeleteFile(nextAbsolutePath);
    throw error;
  }
}
