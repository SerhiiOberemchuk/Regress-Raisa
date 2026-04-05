import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/design-system";
import { getCachedSiteContent } from "@/lib/site-content-cache";
import type { ServiceKey } from "@/lib/site-content-schema";
import {
  getAbsoluteUrl,
  getDefaultSocialImageUrl,
  getLanguageAlternates,
  getLocalizedPath,
  type SupportedSeoLocale,
} from "@/lib/seo";

type ContentSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const content = {
  uk: {
    title: "Ціна регресії онлайн: від чого залежить вартість | RaisaRegress",
    description:
      "Ціна регресії онлайн, консультації та інших форматів роботи. Від чого залежить вартість, що входить у ціну і як обрати відповідний формат без помилки.",
    keywords:
      "ціна регресії, скільки коштує регресія онлайн, вартість регресивного гіпнозу, консультація регресолога ціна",
    heading: "Ціна регресії онлайн",
    intro:
      "Сторінка про ціну має бути корисною не лише тоді, коли людина шукає конкретну цифру. Насправді більшість клієнтів хочуть зрозуміти ширше: чому один формат коштує дорожче за інший, що саме входить у вартість, чи потрібно починати з консультації і як не помилитися, обираючи сесію тільки за ціною. Саме це тут і пояснюється.",
    sections: [
      {
        title: "Чому вартість не зводиться до однієї цифри",
        paragraphs: [
          "Ціна регресії онлайн залежить не лише від тривалості сесії, а й від формату роботи, складності запиту, потреби в попередній оцінці стану, глибини опрацювання та подальшого супроводу. Тому відповідальний підхід до вартості це не продаж “одного універсального пакета”, а підбір формату під реальну ситуацію людини.",
          "Для одних клієнтів достатньо консультації, щоб зрозуміти наступні кроки і не йти одразу в глибоку роботу. Іншим потрібен повноцінний сеанс або інший формат супроводу. Саме тому ціна має сенс лише разом із поясненням, що стоїть за кожним варіантом.",
        ],
      },
      {
        title: "За що людина фактично платить",
        paragraphs: [
          "Коли мова йде про якісну психологічно чутливу роботу, людина платить не лише за час “у дзвінку”. Вона платить за підготовку фахівця, за вміння безпечно тримати процес, за якість скринінгу перед сесією, за здатність не форсувати переживання і за коректне завершення та інтеграцію.",
          "Інакше кажучи, вартість послуги пов’язана не лише з годинами, а з професійною відповідальністю. Дешева ціна не завжди означає вигоду, якщо за нею стоїть поспіх, відсутність меж або слабка увага до безпеки клієнта.",
        ],
      },
      {
        title: "Коли варто починати саме з консультації",
        paragraphs: [
          "Консультація особливо доречна, якщо людина ще не впевнена, чи підходить їй регресивний формат, має складний або багатошаровий запит, переживає нестабільний емоційний стан або просто не хоче одразу йти в інтенсивну роботу. Це не “зайвий крок”, а спосіб уникнути помилкового вибору формату.",
          "Саме на консультації можна розібрати, яка мета роботи, які є ризики, чого реально очікувати і чи не буде корисніше інший вид допомоги. Часто це економить і гроші, і сили, і нервову систему клієнта.",
        ],
      },
      {
        title: "Чому не варто обирати тільки за ціною",
        paragraphs: [
          "Найдешевший варіант не завжди є найвигіднішим, якщо формат вам не підходить або спеціаліст працює поверхово. І навпаки, дорожча опція не має сенсу, якщо вона не відповідає вашому запиту. Розумний вибір починається не з порівняння цифр, а з розуміння, що саме вам потрібно зараз.",
          "Тому корисніше ставити інше питання: який формат буде достатнім і доречним саме для мене? Саме така логіка допомагає не переплачувати і водночас не обирати сесію, яка виявиться занадто поверховою або занадто інтенсивною.",
        ],
      },
      {
        title: "Що входить у вартість",
        items: [
          "уточнення запиту та цілей роботи",
          "оцінка доречності формату в конкретній ситуації",
          "супровід під час сесії у безпечному темпі",
          "час на завершення процесу і коротку інтеграцію досвіду",
          "рекомендації після зустрічі, якщо вони потрібні",
        ],
      },
      {
        title: "Як інтерпретувати таблицю цін нижче",
        paragraphs: [
          "Таблиця цін не означає, що дорожчий формат завжди кращий. Вона лише допомагає зорієнтуватися в межах вартості різних форматів роботи. Основне рішення краще приймати після розмови про ваш запит, а не тільки дивлячись на прайс.",
          "Практично це означає просте правило: якщо є сумнів, із чого почати, безпечніше почати з консультації. Це дає змогу вибрати формат усвідомлено, а не навмання.",
        ],
      },
    ],
    tableServiceLabel: "Послуга",
    tablePriceLabel: "Вартість",
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Чи потрібно одразу записуватися на повноцінний сеанс?",
        answer:
          "Не обов’язково. Якщо є сумнів щодо формату або запит складний, консультація часто є більш розумним і безпечним першим кроком.",
      },
      {
        question: "Чому вартість різних форматів відрізняється?",
        answer:
          "Тому що відрізняються тривалість, глибина роботи, складність ведення процесу та обсяг професійної відповідальності з боку спеціаліста.",
      },
      {
        question: "Чи означає дорожчий формат кращий результат?",
        answer:
          "Ні. Кращий результат дає не вища цифра сама по собі, а відповідність формату вашому реальному запиту й стану.",
      },
    ],
    serviceBoxTitle: "Основна сторінка послуги",
    serviceBoxText:
      "Ця сторінка допомагає зрозуміти логіку вартості. Для опису самого формату роботи, структури сесії та запису перейдіть на основну сторінку послуги.",
    serviceBoxLink: "Перейти до послуги",
    ctaTitle: "Потрібна допомога з вибором формату?",
    ctaText:
      "Напишіть у форму зворотного зв’язку, щоб зрозуміти, чи варто починати з консультації, повної сесії або іншого формату.",
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
    title: "Regression Session Pricing: What the Cost Depends On | RaisaRegress",
    description:
      "Current pricing for online regression work, what affects the cost, what is included, and how to choose the right format without relying on price alone.",
    keywords:
      "regression session price, online regression cost, hypnosis pricing, consultation cost regression therapist",
    heading: "Regression Session Pricing",
    intro:
      "A useful pricing page should do more than list numbers. Most people also want to understand why one format costs more than another, what is included, whether they should begin with consultation, and how not to choose a session by price alone. That is the goal of this page.",
    sections: [
      {
        title: "Why cost is not just one number",
        paragraphs: [
          "The price of online regression work depends not only on session length but also on the structure of the format, the complexity of the request, the need for preliminary assessment, the depth of the work, and the amount of professional support involved.",
          "For some people, consultation is the most appropriate starting point. Others may be ready for a full session or a different format. That is why pricing only makes sense when it is paired with an explanation of what each option is actually for.",
        ],
      },
      {
        title: "What a person is really paying for",
        paragraphs: [
          "In emotionally sensitive work, payment is not only for time spent on a call. It also reflects training, the ability to hold a process safely, the quality of screening, and the skill required to regulate pace instead of forcing intensity.",
          "In that sense, price is tied to professional responsibility. A cheaper option is not automatically better value if it comes with rushed work, weak boundaries, or poor attention to safety.",
        ],
      },
      {
        title: "When consultation is the better first step",
        paragraphs: [
          "Consultation is especially useful when a person is unsure whether regression-oriented work is appropriate, has a layered request, feels emotionally unstable, or simply does not want to move directly into an intensive session.",
          "A careful consultation can clarify goals, risks, expectations, and whether another kind of support might be more appropriate. In many cases, that saves both money and emotional strain.",
        ],
      },
      {
        title: "Why price alone should not decide the format",
        paragraphs: [
          "The cheapest option is not always the most useful if the format does not match your actual need. At the same time, a more expensive option is not automatically the right one simply because it sounds more comprehensive.",
          "A better question is: which format is appropriate for my request right now? That is usually a more intelligent starting point than comparing prices in isolation.",
        ],
      },
      {
        title: "What is included in the cost",
        items: [
          "clarification of the request and goals",
          "assessment of whether the format is appropriate",
          "guided support during the session at a safe pace",
          "time for closing and initial integration",
          "post-session recommendations when needed",
        ],
      },
      {
        title: "How to read the pricing table below",
        paragraphs: [
          "The table does not mean that the more expensive format is always better. It is meant to help you understand the range of formats and their costs. The actual decision should ideally follow a conversation about your request, not just a look at the numbers.",
          "In practical terms, if you are unsure where to begin, consultation is often the safest first choice.",
        ],
      },
    ],
    tableServiceLabel: "Service",
    tablePriceLabel: "Price",
    faqTitle: "Common Questions",
    faqs: [
      {
        question: "Do I need to book a full session right away?",
        answer:
          "Not necessarily. If the format is still unclear or the request is complex, consultation is often the safer and more useful first step.",
      },
      {
        question: "Why do different formats have different prices?",
        answer:
          "Because they differ in duration, depth, structure, and the level of professional responsibility involved.",
      },
      {
        question: "Does a higher price mean a better result?",
        answer:
          "No. Better outcomes depend more on whether the format matches your actual request and condition than on the number alone.",
      },
    ],
    serviceBoxTitle: "Main service page",
    serviceBoxText:
      "This page explains the logic behind pricing. For the full service format, session structure, and booking flow, use the main service page.",
    serviceBoxLink: "Open service page",
    ctaTitle: "Need help choosing the right format?",
    ctaText:
      "Use the contact form to decide whether to begin with consultation, a full session, or another format.",
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
    title: "Prezzo della Regressione Online: Da Cosa Dipende il Costo | RaisaRegress",
    description:
      "Prezzi aggiornati per il lavoro regressivo online, fattori che influenzano il costo, cosa è incluso e come scegliere il formato giusto senza basarsi solo sul prezzo.",
    keywords:
      "prezzo regressione online, costo regressione, prezzo ipnosi regressiva, consulenza regressiva costo",
    heading: "Prezzo della Regressione Online",
    intro:
      "Una buona pagina sui prezzi non dovrebbe limitarsi a mostrare cifre. La maggior parte delle persone vuole capire anche perché un formato costa più di un altro, cosa è incluso, se conviene iniziare da una consulenza e come evitare di scegliere la seduta solo in base al prezzo. Questo è l'obiettivo della pagina.",
    sections: [
      {
        title: "Perché il costo non è solo una cifra",
        paragraphs: [
          "Il prezzo del lavoro regressivo online dipende non solo dalla durata della seduta, ma anche dalla struttura del formato, dalla complessità della richiesta, dalla necessità di una valutazione preliminare, dalla profondità del lavoro e dal livello di supporto professionale coinvolto.",
          "Per alcune persone la consulenza è il punto di partenza più adatto. Per altre può essere indicata una seduta completa o un altro formato. Per questo il prezzo ha senso solo se accompagnato da una spiegazione di ciò che ogni opzione rappresenta.",
        ],
      },
      {
        title: "Per cosa si paga davvero",
        paragraphs: [
          "Nel lavoro psicologicamente sensibile non si paga solo il tempo passato in videochiamata. Si paga anche la formazione, la capacità di tenere il processo in sicurezza, la qualità della valutazione iniziale e l'abilità di regolare il ritmo senza forzare l'intensità.",
          "In questo senso il prezzo è collegato alla responsabilità professionale. Un'opzione meno costosa non è automaticamente più conveniente se comporta fretta, confini deboli o poca attenzione alla sicurezza.",
        ],
      },
      {
        title: "Quando è meglio iniziare con una consulenza",
        paragraphs: [
          "La consulenza è particolarmente utile quando la persona non è sicura che il formato regressivo sia adatto, ha una richiesta complessa, vive una certa instabilità emotiva o semplicemente non vuole entrare subito in un lavoro intenso.",
          "Una consulenza fatta bene aiuta a chiarire obiettivi, rischi, aspettative e l'eventuale bisogno di un altro tipo di supporto. In molti casi questo fa risparmiare sia denaro sia fatica emotiva.",
        ],
      },
      {
        title: "Perché non conviene scegliere solo in base al prezzo",
        paragraphs: [
          "L'opzione più economica non è sempre la più utile, se il formato non corrisponde al tuo bisogno reale. Allo stesso tempo, una soluzione più costosa non è automaticamente quella giusta solo perché sembra più completa.",
          "Una domanda migliore è: quale formato è adatto alla mia richiesta in questo momento? Di solito questo porta a una scelta più intelligente rispetto al semplice confronto tra cifre.",
        ],
      },
      {
        title: "Cosa include il costo",
        items: [
          "chiarimento della richiesta e degli obiettivi",
          "valutazione dell'adeguatezza del formato",
          "supporto guidato durante la seduta in un ritmo sicuro",
          "tempo per la chiusura e la prima integrazione",
          "indicazioni dopo la seduta, se necessarie",
        ],
      },
      {
        title: "Come leggere la tabella prezzi qui sotto",
        paragraphs: [
          "La tabella non significa che il formato più costoso sia sempre migliore. Serve a orientarsi tra le diverse opzioni e i relativi costi. La decisione vera dovrebbe nascere idealmente da una conversazione sulla richiesta, non solo dai numeri.",
          "In pratica, se non sai da dove iniziare, la consulenza è spesso la scelta più prudente.",
        ],
      },
    ],
    tableServiceLabel: "Servizio",
    tablePriceLabel: "Prezzo",
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "Devo prenotare subito una seduta completa?",
        answer:
          "Non necessariamente. Se il formato non è ancora chiaro o la richiesta è complessa, la consulenza è spesso il primo passo più utile e sicuro.",
      },
      {
        question: "Perché i vari formati hanno prezzi diversi?",
        answer:
          "Perché cambiano durata, profondità, struttura del lavoro e livello di responsabilità professionale richiesto.",
      },
      {
        question: "Un prezzo più alto garantisce un risultato migliore?",
        answer:
          "No. Il risultato dipende molto di più da quanto il formato è adatto alla tua richiesta e alla tua condizione reale.",
      },
    ],
    serviceBoxTitle: "Pagina principale del servizio",
    serviceBoxText:
      "Questa pagina spiega la logica dei prezzi. Per il formato completo del servizio, la struttura della seduta e la prenotazione, usa la pagina principale.",
    serviceBoxLink: "Apri la pagina del servizio",
    ctaTitle: "Hai bisogno di aiuto per scegliere il formato giusto?",
    ctaText:
      "Usa il modulo di contatto per capire se iniziare con una consulenza, una seduta completa o un altro formato.",
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
  const socialImageUrl = getDefaultSocialImageUrl();

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      type: "article",
      images: [{ url: socialImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [socialImageUrl],
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
  const canonicalPath = getLocalizedPath(locale, "regression-therapy-price");
  const canonicalUrl = getAbsoluteUrl(canonicalPath);

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "OfferCatalog",
              name: copy.heading,
              description: copy.description,
              url: canonicalUrl,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: copy.faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]),
        }}
      />
      <article className="mx-auto max-w-4xl space-y-10 rounded-[2rem] border border-border/70 bg-[rgba(255,251,246,0.82)] p-6 shadow-[0_34px_90px_-60px_rgba(54,36,25,0.42)] md:p-10">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {copy.backLabel}
          </Link>
        </Button>

        <header className="space-y-5">
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.26em] text-primary/65">
            Pricing guide
          </div>
          <h1 className="text-4xl font-semibold leading-[0.95] md:text-5xl">{copy.heading}</h1>
          <p className="text-lg text-muted-foreground md:text-[1.08rem]">{copy.intro}</p>
        </header>

        {copy.sections.map((section: ContentSection) => (
          <section
            key={section.title}
            className="space-y-4 rounded-[1.5rem] border border-border/60 bg-white/55 p-6"
          >
            <h2 className="text-3xl font-semibold">{section.title}</h2>
            {section.paragraphs ? (
              <div className="space-y-4 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {section.items ? (
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white/60">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-[rgba(126,154,140,0.10)]">
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
                <tr key={service} className="border-b border-border/60 last:border-b-0">
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
          <h2 className="text-3xl font-semibold">{copy.faqTitle}</h2>
          <div className="space-y-4">
            {copy.faqs.map((item: FaqItem) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-border/60 bg-white/55 p-5"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-3 text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-border/70 bg-white/60 p-6 md:p-8">
          <h2 className="text-3xl font-semibold">{copy.serviceBoxTitle}</h2>
          <p className="mt-3 text-muted-foreground">{copy.serviceBoxText}</p>
          <Button asChild variant="outline" className="mt-5">
            <Link href="/regression-hypnosis-online">{copy.serviceBoxLink}</Link>
          </Button>
        </section>

        <section className="rounded-[1.75rem] border border-primary/20 bg-[linear-gradient(145deg,rgba(126,154,140,0.10),rgba(255,250,245,0.82))] p-6 md:p-8">
          <h2 className="text-3xl font-semibold">{copy.ctaTitle}</h2>
          <p className="mt-3 text-muted-foreground">{copy.ctaText}</p>
          <Button asChild className="mt-5">
            <Link href="/#contact">{copy.ctaButton}</Link>
          </Button>
        </section>
      </article>
    </main>
  );
}
