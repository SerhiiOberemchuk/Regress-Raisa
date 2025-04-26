import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./i18n"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// Функція для визначення локалі на основі заголовків запиту
function getLocale(request: Request): string {
  // Отримуємо заголовок Accept-Language
  const negotiatorHeaders = {
    "accept-language": request.headers.get("accept-language") || undefined,
  }

  // Використовуємо Negotiator для отримання списку мов
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // Використовуємо intl-localematcher для вибору найкращої локалі
  return match(languages, locales, defaultLocale)
}

export default createMiddleware({
  // Список доступних локалей
  locales,
  // Локаль за замовчуванням
  defaultLocale,
  // Локаль буде першим сегментом шляху
  localePrefix: "as-needed",
  // Функція для визначення локалі
  localeDetection: true,
  // Власна функція для визначення локалі
  localeNegotiation: {
    getLocale,
  },
})

export const config = {
  // Перехоплюємо всі маршрути, крім тих, що починаються з /api, /_next, /images, /favicon.ico
  matcher: ["/((?!api|_next|images|favicon.ico|.*\\..*).*)"],
}
