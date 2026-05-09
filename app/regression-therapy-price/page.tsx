import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import { getAbsoluteUrl, getDefaultSocialImageUrl, getLanguageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ціни на регресивну терапію | RaisaRegress",
  description:
    "Ціни на регресивну терапію онлайн: консультація, повноцінний сеанс регресії, прогресія та терапія свідомості з Раїсою Оберемчук.",
  alternates: {
    canonical: "/regression-therapy-price",
    ...getLanguageAlternates("regression-therapy-price"),
  },
  openGraph: {
    title: "Ціни на регресивну терапію | RaisaRegress",
    description:
      "Актуальні ціни на онлайн-консультації, сеанси регресивного гіпнозу, прогресію та терапію свідомості RaisaRegress.",
    url: getAbsoluteUrl("/regression-therapy-price"),
    type: "article",
    images: [{ url: getDefaultSocialImageUrl() }],
  },
};

export default async function RegressionTherapyPricePage() {
  const siteContent = await getCachedSiteContent();
  const rows = [
    ["Консультація", siteContent.prices.consultation],
    ["Повноцінний сеанс регресії", siteContent.prices.regression],
    ["Прогресія", siteContent.prices.progression],
    ["Терапія свідомості", siteContent.prices.consciousness],
  ] as const;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Ціни на регресивну терапію RaisaRegress",
      url: getAbsoluteUrl("/regression-therapy-price"),
      itemListElement: rows.map(([label, price]) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: label,
          provider: {
            "@type": "Person",
            name: "Раїса Оберемчук",
          },
          serviceType: "Регресивна терапія онлайн",
        },
        price: price.replace(/\D/g, ""),
        priceCurrency: "UAH",
        availability: "https://schema.org/InStock",
        url: getAbsoluteUrl("/regression-therapy-price"),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Головна",
          item: getAbsoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ціни на регресивну терапію",
          item: getAbsoluteUrl("/regression-therapy-price"),
        },
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="mx-auto max-w-4xl space-y-10">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            На головну
          </Link>
        </Button>
        <header className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">Ціни на регресивну терапію</h1>
          <p className="text-lg text-muted-foreground">
            Нижче наведені актуальні вартості послуг. Формат роботи та оптимальна
            глибина сеансу підбираються індивідуально залежно від вашого запиту.
          </p>
        </header>
        <section className="overflow-hidden rounded-xl border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="p-4 text-left text-sm font-semibold">Послуга</th>
                <th className="p-4 text-left text-sm font-semibold">Вартість</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, price]) => (
                <tr key={label} className="border-b last:border-b-0">
                  <td className="p-4 font-medium">{label}</td>
                  <td className="p-4 text-muted-foreground">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}
