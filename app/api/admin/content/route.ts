import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { readSiteContent, writeSiteContent } from "@/lib/site-content";
import { SUPPORTED_LOCALES, normalizeSiteContent } from "@/lib/site-content-schema";

const adminToken = process.env.ADMIN_TOKEN;

export async function GET() {
  const content = await readSiteContent();
  return NextResponse.json(content, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function PUT(request: Request) {
  if (!adminToken) {
    return NextResponse.json(
      { error: "ADMIN_TOKEN is not configured on the server" },
      { status: 500 }
    );
  }

  const token = request.headers.get("x-admin-token");
  if (token !== adminToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const current = await readSiteContent();
  const normalized = normalizeSiteContent(payload);
  const saved = await writeSiteContent({
    ...current,
    prices: normalized.prices,
    images: current.images,
  });

  for (const locale of SUPPORTED_LOCALES) {
    revalidatePath(`/${locale}`);
  }

  return NextResponse.json(saved);
}
