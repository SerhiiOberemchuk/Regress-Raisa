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

let ensureTablePromise: Promise<void> | null = null;

const isServiceKey = (value: string): value is ServiceKey => {
  return SERVICE_KEYS.includes(value as ServiceKey);
};

const isSupportedLocale = (value: string): value is SupportedLocale => {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
};

const normalizePriceValue = (value: unknown, fallback: string): string => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
};

const toRowId = (service: ServiceKey, locale: SupportedLocale): string => {
  return `${service}:${locale}`;
};

const toRows = (prices: SitePrices) => {
  const now = new Date();

  return SERVICE_KEYS.flatMap((service) =>
    SUPPORTED_LOCALES.map((locale) => ({
      id: toRowId(service, locale),
      service,
      locale,
      value: prices[service][locale],
      updatedAt: now,
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

const mergeWithFallback = (rows: Array<{
  service: string;
  locale: string;
  value: string;
}>, fallback: SitePrices): SitePrices => {
  const next: SitePrices = {
    regression: { ...fallback.regression },
    progression: { ...fallback.progression },
    consciousness: { ...fallback.consciousness },
    consultation: { ...fallback.consultation },
  };

  for (const row of rows) {
    if (!isServiceKey(row.service) || !isSupportedLocale(row.locale)) {
      continue;
    }

    next[row.service][row.locale] = normalizePriceValue(
      row.value,
      fallback[row.service][row.locale],
    );
  }

  return next;
};

export async function writePricesToDb(prices: SitePrices): Promise<void> {
  await ensurePricesTable();
  const rows = toRows(prices);

  await db.delete(sitePricesTable);
  await db.insert(sitePricesTable).values(rows);
}

export async function readPricesFromDb(): Promise<SitePrices> {
  const fallback = defaultSiteContent.prices;
  const rows = await db.select().from(sitePricesTable);
  if (rows.length === 0) {
    return fallback;
  }

  const normalized = mergeWithFallback(rows, fallback);
  const validRowsCount = rows.filter(
    (row) => isServiceKey(row.service) && isSupportedLocale(row.locale),
  ).length;

  return validRowsCount > 0 ? normalized : fallback;
}
