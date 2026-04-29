"use server";

import { updateTag } from "next/cache";
import { isAdminAuthenticated, signInAdmin, signOutAdmin } from "@/lib/admin-auth";
import { defaultSiteContent, type SiteContent } from "@/lib/site-content-schema";
import { writePricesToDb } from "@/lib/site-prices-db";
import { SITE_CONTENT_TAG } from "@/lib/site-content-cache";

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
  prices: SiteContent["prices"],
): Promise<ActionResult<SiteContent>> {
  if (!(await isAdminAuthenticated())) {
    return { ok: false, error: "Unauthorized" };
  }

  try {
    const updatedAt = await writePricesToDb(prices);
    const saved: SiteContent = {
      updatedAt,
      images: defaultSiteContent.images,
      prices,
    };

    updateTag(SITE_CONTENT_TAG);
    return { ok: true, data: saved };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Save failed";
    return { ok: false, error: message };
  }
}
