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
import {
  contactEmail,
  contactPhone,
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocaleTag,
  socialLinks,
} from "@/lib/seo";

export function generateMetadata(): Metadata {
  const canonicalUrl = getAbsoluteUrl("/");
  const localeTag = getLocaleTag("uk");

  return {
    title: "RaisaRegress | Регресивний гіпноз онлайн",
    description:
      "Регресивний гіпноз онлайн з Раїсою Оберемчук: індивідуальні сеанси регресивної терапії для роботи з тривогою, емоційними блоками та життєвими сценаріями.",
    keywords:
      "регресивний гіпноз онлайн, регресивна терапія онлайн, регресологія, регресолог Раїса Оберемчук, онлайн сеанс регресії, регресія",
    openGraph: {
      title: "RaisaRegress | Регресивний гіпноз онлайн",
      description:
        "Онлайн-сеанси регресивної терапії з Раїсою Оберемчук для самопізнання, емоційного розвантаження та роботи з повторюваними життєвими сценаріями.",
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
        "Регресивний гіпноз онлайн з Раїсою Оберемчук: консультації, сеанси регресії, прогресія та терапія свідомості.",
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
  const offers = [
    {
      name: "Консультація регресолога",
      price: siteContent.prices.consultation,
      url: getAbsoluteUrl("/regression-therapy-price"),
    },
    {
      name: "Повноцінний сеанс регресії",
      price: siteContent.prices.regression,
      url: getAbsoluteUrl("/regression-hypnosis-online"),
    },
    {
      name: "Прогресія",
      price: siteContent.prices.progression,
      url: getAbsoluteUrl("/regression-therapy-price"),
    },
    {
      name: "Терапія свідомості",
      price: siteContent.prices.consciousness,
      url: getAbsoluteUrl("/regression-therapy-price"),
    },
  ];
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
      name: "Раїса Оберемчук",
      alternateName: "Raisa Oberemchuk",
      jobTitle: "Регресолог, регресивний терапевт",
      url: getAbsoluteUrl("/"),
      image: getAbsoluteUrl(siteContent.images.hero),
      ...(socialLinks.length ? { sameAs: socialLinks } : {}),
      worksFor: {
        "@type": "ProfessionalService",
        name: "RaisaRegress",
        url: getAbsoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "RaisaRegress",
      url: getAbsoluteUrl("/"),
      image: getAbsoluteUrl(siteContent.images.hero),
      description:
        "Онлайн-сеанси регресивного гіпнозу та регресивної терапії з Раїсою Оберемчук.",
      areaServed: {
        "@type": "Country",
        name: "Україна",
      },
      availableLanguage: ["uk"],
      email: contactEmail,
      telephone: contactPhone,
      ...(socialLinks.length ? { sameAs: socialLinks } : {}),
      founder: {
        "@type": "Person",
        name: "Раїса Оберемчук",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Послуги регресивної терапії",
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            serviceType: "Регресивна терапія онлайн",
            areaServed: "Україна",
          },
          price: offer.price.replace(/\D/g, ""),
          priceCurrency: "UAH",
          availability: "https://schema.org/InStock",
          url: offer.url,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Чи безпечна регресивна терапія?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Так, за умови роботи з кваліфікованим спеціалістом. Під час сеансу ви зберігаєте контроль над процесом і можете зупинитися в будь-який момент.",
          },
        },
        {
          "@type": "Question",
          name: "Чи можна не згадати нічого під час сеансу?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Таке трапляється, але це не означає, що робота була неефективною. Іноді результат проявляється пізніше у вигляді інсайтів, снів або змін стану.",
          },
        },
        {
          "@type": "Question",
          name: "Скільки сеансів потрібно?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Це залежить від запиту. Деякі теми вирішуються за 1-2 сеанси, інші потребують довшої роботи. Після першої зустрічі можна точніше оцінити обсяг.",
          },
        },
        {
          "@type": "Question",
          name: "Чи проводяться сеанси онлайн?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Так. Для цього достатньо стабільного інтернету, якісного звуку та спокійного місця, де вас ніхто не турбуватиме.",
          },
        },
        {
          "@type": "Question",
          name: "Чи є протипоказання?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Так. Регресивна терапія не рекомендується при важких психічних розладах, епілепсії та в стані алкогольного або наркотичного сп'яніння.",
          },
        },
      ],
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
