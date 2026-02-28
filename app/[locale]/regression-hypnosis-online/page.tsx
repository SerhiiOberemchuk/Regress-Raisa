import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedPath,
  type SupportedSeoLocale,
} from "@/lib/seo";

const content = {
  uk: {
    title: "Регресивний гіпноз онлайн | RaisaRegress",
    description:
      "Регресивний гіпноз онлайн з Раїсою Оберемчук: робота з тривогою, емоційними блоками та повторюваними життєвими сценаріями.",
    keywords:
      "регресивний гіпноз онлайн, сеанс регресії онлайн, регресолог онлайн, регресивна терапія",
    heading: "Регресивний гіпноз онлайн",
    intro:
      "Онлайн-формат дозволяє пройти повноцінний сеанс у безпечній та комфортній обстановці. Підхід орієнтований на пошук першопричин станів і м'яке опрацювання через підсвідомість.",
    benefitsTitle: "Коли це може бути корисно",
    benefits: [
      "Тривожність, напруга, емоційне виснаження",
      "Повторювані життєві сценарії у стосунках чи роботі",
      "Внутрішні блоки, страхи, відчуття застрягання",
      "Потреба глибше зрозуміти себе та свої реакції",
    ],
    processTitle: "Як проходить онлайн-сеанс",
    process: [
      "Попередня консультація та формулювання запиту",
      "Занурення у змінений стан свідомості з супроводом спеціаліста",
      "Опрацювання ключових епізодів і інтеграція результату",
      "Рекомендації після сеансу для закріплення змін",
    ],
    ctaTitle: "Готові почати роботу із запитом?",
    ctaText:
      "Запишіться на консультацію, щоб обрати оптимальний формат і глибину опрацювання.",
    ctaButton: "Записатися на сеанс",
    backLabel: "На головну",
  },
  en: {
    title: "Online Regression Hypnosis | RaisaRegress",
    description:
      "Online regression hypnosis with Raisa Oberemchuk to work through anxiety, emotional blocks, and repeating life patterns.",
    keywords:
      "online regression hypnosis, regression session online, regression therapist online, regression therapy",
    heading: "Online Regression Hypnosis",
    intro:
      "A full session can be conducted online in a safe, private environment. The method focuses on identifying root causes and processing them through guided subconscious work.",
    benefitsTitle: "Who this can help",
    benefits: [
      "Anxiety, stress, emotional overload",
      "Repeating relationship or career patterns",
      "Inner blocks, fears, feeling stuck",
      "A need for deeper self-understanding",
    ],
    processTitle: "How an online session works",
    process: [
      "Initial consultation and request clarification",
      "Guided transition into an altered state of consciousness",
      "Work with key episodes and emotional integration",
      "Post-session recommendations to support progress",
    ],
    ctaTitle: "Ready to work with your request?",
    ctaText:
      "Book a consultation to choose the right format and session depth for your goal.",
    ctaButton: "Book a session",
    backLabel: "Back to home",
  },
  it: {
    title: "Ipnosi Regressiva Online | RaisaRegress",
    description:
      "Ipnosi regressiva online con Raisa Oberemchuk per lavorare su ansia, blocchi emotivi e schemi di vita ripetitivi.",
    keywords:
      "ipnosi regressiva online, sessione regressiva online, regressologa online, terapia regressiva",
    heading: "Ipnosi Regressiva Online",
    intro:
      "Una sessione completa può essere svolta online in un ambiente sicuro e riservato. Il lavoro è orientato alla ricerca delle cause profonde e alla loro elaborazione guidata.",
    benefitsTitle: "Quando può essere utile",
    benefits: [
      "Ansia, tensione, sovraccarico emotivo",
      "Schemi ripetitivi nelle relazioni o nel lavoro",
      "Blocchi interiori, paure, sensazione di stallo",
      "Desiderio di maggiore consapevolezza personale",
    ],
    processTitle: "Come si svolge una sessione online",
    process: [
      "Consulenza iniziale e definizione della richiesta",
      "Ingresso guidato in uno stato di coscienza modificato",
      "Lavoro sugli episodi chiave e integrazione emotiva",
      "Indicazioni post-sessione per consolidare i risultati",
    ],
    ctaTitle: "Vuoi iniziare a lavorare sul tuo tema?",
    ctaText:
      "Prenota una consulenza per scegliere il formato più adatto al tuo obiettivo.",
    ctaButton: "Prenota una sessione",
    backLabel: "Torna alla home",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = content[locale];
  const canonicalPath = getLocalizedPath(locale, "regression-hypnosis-online");
  const canonicalUrl = getAbsoluteUrl(canonicalPath);

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      type: "article",
    },
    alternates: {
      canonical: canonicalPath,
      ...getLanguageAlternates("regression-hypnosis-online"),
    },
  };
}

export default async function RegressionHypnosisOnlinePage({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const copy = content[locale];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <article className="mx-auto max-w-4xl space-y-10">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {copy.backLabel}
          </Link>
        </Button>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">{copy.heading}</h1>
          <p className="text-lg text-muted-foreground">{copy.intro}</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.benefitsTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            {copy.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.processTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            {copy.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">{copy.ctaTitle}</h2>
          <p className="mt-3 text-muted-foreground">{copy.ctaText}</p>
          <Button asChild className="mt-5">
            <Link href="/#contact">{copy.ctaButton}</Link>
          </Button>
        </section>
      </article>
    </main>
  );
}
