import { getRequestConfig } from "next-intl/server"

// Визначаємо доступні локалі
export const locales = ["uk", "en", "it"]
export const defaultLocale = "uk"

// Кеш для перекладів
const messagesCache: Record<string, any> = {}

export default getRequestConfig(async ({ locale }) => {
  // Перевіряємо, чи підтримується локаль
  if (!locales.includes(locale as any)) {
    return { messages: {} }
  }

  // Перевіряємо, чи є переклади в кеші
  if (!messagesCache[locale]) {
    try {
      messagesCache[locale] = (await import(`./messages/${locale}/index.ts`)).default
    } catch (error) {
      console.error(`Failed to load messages for locale ${locale}:`, error)
      messagesCache[locale] = {}
    }
  }

  return {
    messages: messagesCache[locale],
    timeZone: "Europe/Kiev",
    now: new Date(),
  }
})
