import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const sitePricesTable = pgTable("site_prices", {
  id: text("id").primaryKey(),
  service: text("service").notNull(),
  locale: text("locale").notNull(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull(),
});
