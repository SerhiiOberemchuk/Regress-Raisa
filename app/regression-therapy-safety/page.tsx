import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAbsoluteUrl, getDefaultSocialImageUrl, getLanguageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Безпека та протипоказання | RaisaRegress",
  description:
    "Безпека регресивної терапії: кому підходить метод, які є протипоказання та коли варто утриматися від онлайн-сеансу регресії.",
  alternates: {
    canonical: "/regression-therapy-safety",
    ...getLanguageAlternates("regression-therapy-safety"),
  },
  openGraph: {
    title: "Безпека та протипоказання | RaisaRegress",
    description:
      "Кому підходить регресивна терапія онлайн, базові правила безпеки та протипоказання до сеансу регресії.",
    url: getAbsoluteUrl("/regression-therapy-safety"),
    type: "article",
    images: [{ url: getDefaultSocialImageUrl() }],
  },
};

export default function RegressionTherapySafetyPage() {
  const structuredData = {
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
        name: "Безпека та протипоказання",
        item: getAbsoluteUrl("/regression-therapy-safety"),
      },
    ],
  };

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
          <h1 className="text-3xl font-bold md:text-4xl">Безпека і протипоказання</h1>
          <p className="text-lg text-muted-foreground">
            Регресивна терапія може бути м'яким і глибоким методом самодослідження,
            якщо вона проводиться з урахуванням стану людини, її запиту та базових
            правил безпеки.
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Кому підходить метод</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Дорослим, які готові до усвідомленої внутрішньої роботи.</li>
            <li>Людям із запитами на емоційне пропрацювання та самопізнання.</li>
            <li>Клієнтам, які можуть залишатися у стабільному психологічному стані під час сеансу.</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Коли варто утриматися</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Гострі психіатричні стани та тяжкі психічні розлади.</li>
            <li>Епілепсія або інші стани, які потребують окремого медичного контролю.</li>
            <li>Стан алкогольного чи наркотичного сп'яніння.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
