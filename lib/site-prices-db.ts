import "server-only";

import { sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { sitePricesTable } from "@/lib/db-schema";
import {
  SERVICE_KEYS,
  SUPPORTED_LOCALES,
  defaultSiteContent,
  type ServiceKey,
  type SiteContent,
  type SupportedLocale,
} from "@/lib/site-content-schema";

type SitePrices = SiteContent["prices"];
type SitePricesState = Pick<SiteContent, "prices" | "updatedAt">;

let ensureTablePromise: Promise<void> | null = null;

const isServiceKey = (value: string): value is ServiceKey => {
  return SERVICE_KEYS.includes(value as ServiceKey);
};

const isSupportedLocale = (value: string): value is SupportedLocale => {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
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
  return SERVICE_KEYS.flatMap((service) =>
    SUPPORTED_LOCALES.map((locale) => ({
      id: `${service}:${locale}`,
      service,
      locale,
      value: prices[service][locale],
      updatedAt,
    })),
  );
};

async function ensurePricesTable(): Promise<void> {
  if (!ensureTablePromise) {
    ensureTablePromise = db
      .execute(sql`
        create table if not exists site_prices (
          id text primary key,
          service text not null,
          locale text not null,
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

    const prices: SitePrices = {
      regression: { ...defaultSiteContent.prices.regression },
      progression: { ...defaultSiteContent.prices.progression },
      consciousness: { ...defaultSiteContent.prices.consciousness },
      consultation: { ...defaultSiteContent.prices.consultation },
    };

    for (const row of rows) {
      if (!isServiceKey(row.service) || !isSupportedLocale(row.locale)) {
        continue;
      }
      prices[row.service][row.locale] = row.value;
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
