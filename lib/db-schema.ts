import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const sitePricesTable = pgTable("site_prices", {
  service: text("service").notNull(),
  locale: text("locale"),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
});
