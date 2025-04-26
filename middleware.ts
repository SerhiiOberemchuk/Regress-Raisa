import createMiddleware from "next-intl/middleware"
import { locales, defaultLocale } from "./i18n"

export default createMiddleware({
  // Список доступних локалей
  locales,
  // Локаль за замовчуванням
  defaultLocale,
  // Локаль буде першим сегментом шляху
  localePrefix: "as-needed",
})

export const config = {
  // Перехоплюємо всі маршрути, крім тих, що починаються з /api, /_next, /images, /favicon.ico
  matcher: ["/((?!api|_next|images|favicon.ico|.*\\..*).*)"],
}
