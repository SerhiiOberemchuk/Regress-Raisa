import type React from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@/components/analytics";
import CookieConsent from "@/components/cookie-consent";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { metadataBaseUrl } from "@/lib/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import type { SupportedLocale } from "@/lib/site-content-schema";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

  setRequestLocale(locale);
  const siteContent = await getCachedSiteContent();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
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
        className={`${manrope.variable} ${cormorant.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer
            locale={locale as SupportedLocale}
            footerBackgroundImage={siteContent.images.footerBackground}
          />
          <ScrollToTop />
          <Analytics />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  applicationName: "RaisaRegress",
  metadataBase: metadataBaseUrl,
};
