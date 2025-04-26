import type { Metadata } from "next"
import { getTranslations } from "next-intl"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutMethod from "@/components/about-method"
import Results from "@/components/results"
import Examples from "@/components/examples"
import Requirements from "@/components/requirements"
import Faq from "@/components/faq"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" })

  // Використовуємо фіксоване значення для URL сайту
  const baseUrl = "https://raisaregress.online"
  const alternateUrls = {
    uk: baseUrl,
    en: `${baseUrl}/en`,
    it: `${baseUrl}/it`,
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL(baseUrl), // Додано metadataBase для Next.js 15
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: alternateUrls[locale as keyof typeof alternateUrls] || baseUrl,
      siteName: "RaisaRegress",
      locale: locale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("og.imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: alternateUrls[locale as keyof typeof alternateUrls] || baseUrl,
      languages: {
        uk: alternateUrls.uk,
        en: alternateUrls.en,
        it: alternateUrls.it,
      },
    },
  }
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <AboutMethod />
      <Results />
      <Examples />
      <Requirements />
      <Faq />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
