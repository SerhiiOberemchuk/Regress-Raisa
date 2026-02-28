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
    title: "Безпека та протипоказання регресивної терапії | RaisaRegress",
    description:
      "Кому підходить регресивна терапія, які є протипоказання та як підготуватися до безпечного онлайн-сеансу.",
    keywords:
      "протипоказання регресивної терапії, чи безпечна регресія, регресивний гіпноз безпека",
    heading: "Безпека і протипоказання",
    intro:
      "Регресивна терапія є м'яким методом самодослідження за умови коректного відбору клієнтів і дотримання рекомендацій до сесії.",
    suitableTitle: "Кому підходить метод",
    suitableItems: [
      "Дорослим, які готові до усвідомленої внутрішньої роботи",
      "Людям із запитами на емоційне пропрацювання і самопізнання",
      "Клієнтам, які можуть перебувати у стабільному психологічному стані під час сесії",
    ],
    contraindicationsTitle: "Коли варто утриматися",
    contraindicationsItems: [
      "Гострі психіатричні стани та важкі психічні розлади",
      "Епілепсія та інші стани, що потребують окремого медичного контролю",
      "Стан алкогольного або наркотичного сп'яніння",
    ],
    preparationTitle: "Підготовка до безпечного онлайн-сеансу",
    preparationItems: [
      "Забезпечте тихе місце без переривань на 2-3 години",
      "Підготуйте стабільний інтернет і зручні навушники",
      "Заздалегідь повідомте про важливі медичні обмеження",
    ],
    ctaTitle: "Маєте сумніви щодо безпеки у вашому випадку?",
    ctaText:
      "Почніть з консультації, щоб оцінити доцільність формату саме для вашої ситуації.",
    ctaButton: "Записатися на консультацію",
    backLabel: "На головну",
  },
  en: {
    title: "Regression Therapy Safety & Contraindications | RaisaRegress",
    description:
      "Who regression therapy is suitable for, key contraindications, and how to prepare for a safe online session.",
    keywords:
      "regression therapy contraindications, is regression hypnosis safe, online regression session safety",
    heading: "Safety and Contraindications",
    intro:
      "Regression therapy is a gentle self-exploration method when client screening and preparation guidelines are properly followed.",
    suitableTitle: "Who this method is suitable for",
    suitableItems: [
      "Adults ready for conscious inner work",
      "People seeking emotional processing and self-understanding",
      "Clients able to stay psychologically stable during sessions",
    ],
    contraindicationsTitle: "When to avoid sessions",
    contraindicationsItems: [
      "Acute psychiatric conditions and severe mental disorders",
      "Epilepsy or conditions requiring specific medical supervision",
      "Alcohol or drug intoxication",
    ],
    preparationTitle: "How to prepare for a safe online session",
    preparationItems: [
      "Prepare a quiet place without interruptions for 2-3 hours",
      "Use a stable internet connection and comfortable headphones",
      "Share relevant medical limitations before the session",
    ],
    ctaTitle: "Not sure if this is safe for your case?",
    ctaText:
      "Start with a consultation to evaluate whether this format is appropriate for your situation.",
    ctaButton: "Book a consultation",
    backLabel: "Back to home",
  },
  it: {
    title: "Sicurezza e Controindicazioni Terapia Regressiva | RaisaRegress",
    description:
      "Per chi è adatta la terapia regressiva, principali controindicazioni e preparazione per una sessione online sicura.",
    keywords:
      "controindicazioni terapia regressiva, ipnosi regressiva sicura, sicurezza sessione regressiva online",
    heading: "Sicurezza e Controindicazioni",
    intro:
      "La terapia regressiva è un metodo delicato di auto-esplorazione quando vengono rispettati criteri di idoneità e preparazione.",
    suitableTitle: "Per chi è indicato il metodo",
    suitableItems: [
      "Adulti pronti a un lavoro interiore consapevole",
      "Persone con richieste di elaborazione emotiva e conoscenza di sé",
      "Clienti in condizione psicologica stabile durante la sessione",
    ],
    contraindicationsTitle: "Quando è meglio evitare la sessione",
    contraindicationsItems: [
      "Stati psichiatrici acuti e disturbi mentali gravi",
      "Epilessia o condizioni che richiedono controllo medico dedicato",
      "Stato di intossicazione da alcol o sostanze",
    ],
    preparationTitle: "Preparazione a una sessione online sicura",
    preparationItems: [
      "Organizza un ambiente tranquillo senza interruzioni per 2-3 ore",
      "Assicurati una connessione stabile e cuffie comode",
      "Comunica in anticipo eventuali limiti medici rilevanti",
    ],
    ctaTitle: "Hai dubbi sulla sicurezza nel tuo caso?",
    ctaText:
      "Inizia con una consulenza per valutare se questo formato è adatto alla tua situazione.",
    ctaButton: "Prenota una consulenza",
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
  const canonicalPath = getLocalizedPath(locale, "regression-therapy-safety");
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
      ...getLanguageAlternates("regression-therapy-safety"),
    },
  };
}

export default async function RegressionTherapySafetyPage({
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
          <h2 className="text-2xl font-semibold">{copy.suitableTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            {copy.suitableItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.contraindicationsTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            {copy.contraindicationsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.preparationTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            {copy.preparationItems.map((item) => (
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
