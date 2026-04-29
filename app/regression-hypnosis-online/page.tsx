import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAbsoluteUrl, getDefaultSocialImageUrl, getLanguageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Регресивний гіпноз онлайн | RaisaRegress",
  description: "Онлайн-сеанси регресивного гіпнозу з Раїсою Оберемчук у безпечному та комфортному форматі.",
  alternates: {
    canonical: "/regression-hypnosis-online",
    ...getLanguageAlternates("regression-hypnosis-online"),
  },
  openGraph: {
    title: "Регресивний гіпноз онлайн | RaisaRegress",
    description: "Онлайн-сеанси регресивного гіпнозу з Раїсою Оберемчук у безпечному та комфортному форматі.",
    url: getAbsoluteUrl("/regression-hypnosis-online"),
    type: "article",
    images: [{ url: getDefaultSocialImageUrl() }],
  },
};

export default function RegressionHypnosisOnlinePage() {
  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <article className="mx-auto max-w-4xl space-y-10">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            На головну
          </Link>
        </Button>
        <header className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">Регресивний гіпноз онлайн</h1>
          <p className="text-lg text-muted-foreground">
            Онлайн-формат дозволяє пройти повноцінний сеанс у спокійній приватній
            обстановці без потреби їхати в інший простір. Це зручно, делікатно і
            добре підходить для глибокої внутрішньої роботи.
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Коли це може бути корисно</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Тривожність, напруга, емоційне виснаження.</li>
            <li>Повторювані сценарії у стосунках, кар'єрі чи самосприйнятті.</li>
            <li>Внутрішні блоки, страхи та відчуття застрягання.</li>
            <li>Потреба глибше зрозуміти себе і причини власних реакцій.</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Як проходить сеанс</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Попередня розмова, уточнення запиту та домовленість про фокус роботи.</li>
            <li>Поступове входження в розслаблений стан під супроводом терапевта.</li>
            <li>Дослідження ключових епізодів, образів і відчуттів, пов'язаних із запитом.</li>
            <li>Інтеграція результату та рекомендації після завершення сеансу.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
