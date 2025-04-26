import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

// Визначаємо доступні локалі
export const locales = ["uk", "en", "it"]
export const defaultLocale = "uk"

export default getRequestConfig(async ({ locale }) => {
  // Перевіряємо, чи підтримується локаль
  if (!locales.includes(locale as any)) notFound()

  // Завантажуємо повідомлення для поточної локалі
  const messages = (await import(`./messages/${locale}/index.ts`)).default

  return {
    messages,
    timeZone: "Europe/Kiev",
    now: new Date(),
  }
})
