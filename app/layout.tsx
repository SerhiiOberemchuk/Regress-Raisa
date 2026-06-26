import "./globals.css";
import type React from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@/components/analytics";
import CookieConsent from "@/components/cookie-consent";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import { defaultDescription, defaultTitle, metadataBaseUrl } from "@/lib/seo";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  applicationName: "RaisaRegress",
  metadataBase: metadataBaseUrl,
  title: defaultTitle,
  description: defaultDescription,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteContent = await getCachedSiteContent();

  return (
    <html
      lang="uk"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${display.variable}`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        {children}
        <Footer footerBackgroundImage={siteContent.images.footerBackground} />
        <ScrollToTop />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
