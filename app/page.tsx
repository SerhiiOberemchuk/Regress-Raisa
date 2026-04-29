import type { Metadata } from "next";
import AboutMethod from "@/components/about-method";
import Contact from "@/components/contact";
import Examples from "@/components/examples";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Requirements from "@/components/requirements";
import Results from "@/components/results";
import Services from "@/components/services";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import { getAbsoluteUrl, getLanguageAlternates, getLocaleTag } from "@/lib/seo";

export function generateMetadata(): Metadata {
  const canonicalUrl = getAbsoluteUrl("/");
  const localeTag = getLocaleTag("uk");

  return {
    title: "RaisaRegress | Регресивний гіпноз онлайн",
    description:
      "Онлайн-регресія з Раїсою Оберемчук: тривога, емоційні блоки, життєві сценарії.",
    keywords:
      "регресивний гіпноз, регресивна терапія, регресологія, Раїса Оберемчук, онлайн сеанси, регресія",
    openGraph: {
      title: "RaisaRegress | Регресивний гіпноз онлайн",
      description:
        "Регресивний гіпноз онлайн з Раїсою Оберемчук для емоційного зцілення, самопізнання та стійких змін.",
      url: canonicalUrl,
      siteName: "RaisaRegress",
      locale: localeTag.replace("-", "_"),
      type: "website",
      images: [
        {
          url: getAbsoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: "Раїса Оберемчук",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "RaisaRegress | Регресивний гіпноз онлайн",
      description:
        "Регресивний гіпноз онлайн з Раїсою Оберемчук для емоційного зцілення та особистісного зростання.",
      images: [getAbsoluteUrl("/og-image.jpg")],
    },
    alternates: {
      canonical: "/",
      ...getLanguageAlternates(),
    },
  };
}

export default async function HomePage() {
  const siteContent = await getCachedSiteContent();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "RaisaRegress",
      url: getAbsoluteUrl("/"),
      inLanguage: ["uk-UA"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Raisa Oberemchuk",
      jobTitle: "Regression therapist",
      url: getAbsoluteUrl("/"),
      image: getAbsoluteUrl(siteContent.images.hero),
    },
  ];

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero imageSrc={siteContent.images.hero} />
      <AboutMethod />
      <Results imageSrc={siteContent.images.results} />
      <Examples />
      <Requirements />
      <Faq />
      <Services siteContent={siteContent} />
      <Contact />
    </main>
  );
}
