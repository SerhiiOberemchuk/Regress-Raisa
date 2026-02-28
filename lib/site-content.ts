import "server-only";

import {
  defaultSiteContent,
  type SiteContent,
} from "@/lib/site-content-schema";
import { readPricesFromDb } from "@/lib/site-prices-db";

export async function readSiteContent(): Promise<SiteContent> {
  const state = await readPricesFromDb();

  return {
    updatedAt: state.updatedAt,
    images: defaultSiteContent.images,
    prices: state.prices,
  };
}
