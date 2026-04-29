import "server-only";

import { sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { sitePricesTable } from "@/lib/db-schema";
import {
  SERVICE_KEYS,
  defaultSiteContent,
  type ServiceKey,
  type SiteContent,
} from "@/lib/site-content-schema";

type SitePrices = SiteContent["prices"];
type SitePricesState = Pick<SiteContent, "prices" | "updatedAt">;

let ensureTablePromise: Promise<void> | null = null;

const isServiceKey = (value: string): value is ServiceKey => {
  return SERVICE_KEYS.includes(value as ServiceKey);
};

const getLatestUpdatedAt = (
  rows: Array<{ updatedAt: Date | string }>,
  fallback: string,
): string => {
  const timestamps = rows
    .map((row) =>
      row.updatedAt instanceof Date
        ? row.updatedAt.getTime()
        : Date.parse(row.updatedAt),
    )
    .filter((value) => Number.isFinite(value));

  if (timestamps.length === 0) {
    return fallback;
  }

  return new Date(Math.max(...timestamps)).toISOString();
};

const toRows = (prices: SitePrices, updatedAt: Date) => {
  return SERVICE_KEYS.map((service) => ({
    service,
    locale: "uk",
    value: prices[service],
    updatedAt,
  }));
};

async function ensurePricesTable(): Promise<void> {
  if (!ensureTablePromise) {
    ensureTablePromise = db
      .execute(sql`
        create table if not exists site_prices (
          service text not null,
          locale text,
          value text not null,
          updated_at timestamptz not null default now()
        )
      `)
      .then(() => undefined)
      .catch((error) => {
        ensureTablePromise = null;
        throw error;
      });
  }

  await ensureTablePromise;
}

export async function readPricesFromDb(): Promise<SitePricesState> {
  try {
    const rows = await db.select().from(sitePricesTable);
    if (rows.length === 0) {
      return {
        prices: defaultSiteContent.prices,
        updatedAt: defaultSiteContent.updatedAt,
      };
    }

    const prices: SitePrices = { ...defaultSiteContent.prices };

    for (const row of rows) {
      if (!isServiceKey(row.service)) {
        continue;
      }
      prices[row.service] = row.value;
    }

    return {
      prices,
      updatedAt: getLatestUpdatedAt(rows, defaultSiteContent.updatedAt),
    };
  } catch {
    return {
      prices: defaultSiteContent.prices,
      updatedAt: defaultSiteContent.updatedAt,
    };
  }
}

export async function writePricesToDb(prices: SitePrices): Promise<string> {
  await ensurePricesTable();

  const updatedAt = new Date();
  const rows = toRows(prices, updatedAt);

  await db.delete(sitePricesTable);
  await db.insert(sitePricesTable).values(rows);

  return updatedAt.toISOString();
}
