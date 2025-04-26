import type React from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { Suspense } from "react";
import CookieConsent from "@/components/cookie-consent";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${inter.className} min-h-screen bg-background antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Suspense>{children}</Suspense>
            <Analytics />
            <CookieConsent />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  generator: "v0.dev",
};
