"use server";

import { updateTag } from "next/cache";
import {
  isAdminAuthenticated,
  signInAdmin,
  signOutAdmin,
} from "@/lib/admin-auth";
import {
  readSiteContent,
  replaceSiteImage,
  writeSiteContent,
} from "@/lib/site-content";
import { SITE_CONTENT_TAG } from "@/lib/site-content-cache";
import {
  IMAGE_KEYS,
  normalizeSiteContent,
  type ImageKey,
  type SiteContent,
} from "@/lib/site-content-schema";

type ActionResult<T = undefined> = {
  ok: boolean;
  error?: string;
  data?: T;
};

export async function loginAdminAction(input: {
  login: string;
  password: string;
}): Promise<ActionResult> {
  const result = await signInAdmin(input.login, input.password);
  if (!result.ok) {
    return { ok: false, error: result.error ?? "Sign in failed" };
  }

  return { ok: true };
}

export async function logoutAdminAction(): Promise<ActionResult> {
  try {
    await signOutAdmin();
    return { ok: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sign out failed";
    return { ok: false, error: message };
  }
}

export async function savePricesAction(
  payload: SiteContent
): Promise<ActionResult<SiteContent>> {
  if (!(await isAdminAuthenticated())) {
    return { ok: false, error: "Unauthorized" };
  }

  try {
    const current = await readSiteContent();
    const normalized = normalizeSiteContent(payload);
    const saved = await writeSiteContent({
      ...current,
      prices: normalized.prices,
      images: current.images,
    });

    updateTag(SITE_CONTENT_TAG);
    return { ok: true, data: saved };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Save failed";
    return { ok: false, error: message };
  }
}

export async function replaceImageAction(input: {
  slot: ImageKey;
  file: File;
}): Promise<ActionResult<SiteContent>> {
  if (!(await isAdminAuthenticated())) {
    return { ok: false, error: "Unauthorized" };
  }

  if (!IMAGE_KEYS.includes(input.slot)) {
    return { ok: false, error: "Invalid image slot" };
  }

  try {
    const saved = await replaceSiteImage(input.slot, input.file);
    updateTag(SITE_CONTENT_TAG);
    return { ok: true, data: saved };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Image upload failed";
    return { ok: false, error: message };
  }
}
