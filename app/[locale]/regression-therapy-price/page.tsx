import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import type { ServiceKey } from "@/lib/site-content-schema";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedPath,
  type SupportedSeoLocale,
} from "@/lib/seo";

const content = {
  uk: {
    title: "Ціни на регресивну терапію онлайн | RaisaRegress",
    description:
      "Актуальні ціни на сеанси регресивної терапії онлайн: консультація, регресія, прогресія та терапія свідомості.",
    keywords:
      "ціна регресивної терапії, скільки коштує регресія, регресивний гіпноз ціна, консультація регресолога",
    heading: "Ціни на регресивну терапію онлайн",
    intro:
      "Нижче наведені актуальні вартості послуг. Формат підбирається індивідуально залежно від вашого запиту.",
    tableServiceLabel: "Послуга",
    tablePriceLabel: "Вартість",
    noteTitle: "Що входить у вартість",
    noteItems: [
      "Попереднє узгодження запиту та цілей",
      "Супровід під час сеансу у безпечному темпі",
      "Рекомендації після сесії для інтеграції результату",
    ],
    ctaTitle: "Потрібна допомога з вибором формату?",
    ctaText:
      "Напишіть у форму зворотного зв'язку, і ми підберемо оптимальний варіант саме під ваш запит.",
    ctaButton: "Записатися",
    backLabel: "На головну",
    serviceNames: {
      consultation: "Консультація",
      regression: "Повноцінний сеанс регресії",
      progression: "Прогресія",
      consciousness: "Терапія свідомості",
    },
  },
  en: {
    title: "Regression Therapy Pricing Online | RaisaRegress",
    description:
      "Current pricing for online regression therapy sessions: consultation, regression, progression, and consciousness therapy.",
    keywords:
      "regression therapy price, online regression session cost, regression hypnosis pricing, regression consultation",
    heading: "Online Regression Therapy Pricing",
    intro:
      "Below are the current service prices. The right format is selected individually based on your request.",
    tableServiceLabel: "Service",
    tablePriceLabel: "Price",
    noteTitle: "What is included",
    noteItems: [
      "Initial clarification of your request and goals",
      "Guided and safe session support",
      "Post-session recommendations for integration",
    ],
    ctaTitle: "Need help choosing the right option?",
    ctaText:
      "Send a request through the contact form and we will recommend the best format for your goal.",
    ctaButton: "Book now",
    backLabel: "Back to home",
    serviceNames: {
      consultation: "Consultation",
      regression: "Full regression session",
      progression: "Progression",
      consciousness: "Consciousness therapy",
    },
  },
  it: {
    title: "Prezzi Terapia Regressiva Online | RaisaRegress",
    description:
      "Prezzi aggiornati per sessioni online di terapia regressiva: consulenza, regressione, progressione e terapia della coscienza.",
    keywords:
      "prezzo terapia regressiva, costo sessione regressiva online, ipnosi regressiva prezzi, consulenza regressiva",
    heading: "Prezzi della Terapia Regressiva Online",
    intro:
      "Di seguito trovi i prezzi attuali dei servizi. Il formato viene scelto in modo personalizzato in base alla tua richiesta.",
    tableServiceLabel: "Servizio",
    tablePriceLabel: "Prezzo",
    noteTitle: "Cosa include il prezzo",
    noteItems: [
      "Definizione iniziale della richiesta e degli obiettivi",
      "Accompagnamento sicuro durante la sessione",
      "Indicazioni post-sessione per consolidare il risultato",
    ],
    ctaTitle: "Vuoi aiuto nella scelta del formato?",
    ctaText:
      "Compila il modulo di contatto e ti consiglieremo la soluzione più adatta al tuo obiettivo.",
    ctaButton: "Prenota ora",
    backLabel: "Torna alla home",
    serviceNames: {
      consultation: "Consulenza",
      regression: "Sessione completa di regressione",
      progression: "Progressione",
      consciousness: "Terapia della coscienza",
    },
  },
} as const;

const orderedServices: ServiceKey[] = [
  "consultation",
  "regression",
  "progression",
  "consciousness",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = content[locale];
  const canonicalPath = getLocalizedPath(locale, "regression-therapy-price");
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
      ...getLanguageAlternates("regression-therapy-price"),
    },
  };
}

export default async function RegressionTherapyPricePage({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const copy = content[locale];
  const siteContent = await getCachedSiteContent();

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

        <section className="overflow-hidden rounded-xl border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="p-4 text-left text-sm font-semibold">
                  {copy.tableServiceLabel}
                </th>
                <th className="p-4 text-left text-sm font-semibold">
                  {copy.tablePriceLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedServices.map((service) => (
                <tr key={service} className="border-b last:border-b-0">
                  <td className="p-4 font-medium">{copy.serviceNames[service]}</td>
                  <td className="p-4 text-muted-foreground">
                    {siteContent.prices[service][locale]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.noteTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            {copy.noteItems.map((item) => (
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
