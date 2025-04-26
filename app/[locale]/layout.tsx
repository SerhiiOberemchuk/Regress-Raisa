import type React from "react"
import "../globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import CookieConsent from "@/components/cookie-consent"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"

// Імпортуємо конфігурацію з i18n.config.js
const i18nConfig = require("@/i18n.config.js")
const { locales } = i18nConfig

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  variable: "--font-inter",
})

// Компонент для відображення завантаження
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg">Завантаження...</p>
      </div>
    </div>
  )
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Отримуємо локаль з параметрів
  const locale = params.locale

  // Перевіряємо, чи підтримується локаль
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Завантажуємо повідомлення для поточної локалі
  let messages
  try {
    messages = (await import(`@/messages/${locale}/index.ts`)).default
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error)
    notFound()
  }

  // Використовуємо фіксоване значення для URL сайту
  const baseUrl = "https://raisaregress.online"
  const alternateUrls = {
    uk: baseUrl,
    en: `${baseUrl}/en`,
    it: `${baseUrl}/it`,
  }

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preload критичних зображень */}
        <link rel="preload" href="/og-image.jpg" as="image" />

        {/* Додаємо мета-теги hreflang для SEO */}
        <link rel="alternate" hrefLang="x-default" href={alternateUrls.uk} />
        <link rel="alternate" hrefLang="uk" href={alternateUrls.uk} />
        <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
        <link rel="alternate" hrefLang="it" href={alternateUrls.it} />
      </head>

      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Kiev">
          <ThemeProvider attribute="class" defaultTheme="light">
            <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
            <Analytics />
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
