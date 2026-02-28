import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { readSiteContent } from "@/lib/site-content";

export const SITE_CONTENT_TAG = "site-content";

export async function getCachedSiteContent() {
  "use cache";

  cacheTag(SITE_CONTENT_TAG);
  cacheLife("max");

  return readSiteContent();
}
