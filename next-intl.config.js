import { getRequestConfig } from "next-intl/server"
import { locales } from "./i18n.config"

// Кеш для перекладів
const messagesCache = {}

export default getRequestConfig(async ({ locale }) => {
  // Перевіряємо, чи підтримується локаль
  if (!locales.includes(locale)) {
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
