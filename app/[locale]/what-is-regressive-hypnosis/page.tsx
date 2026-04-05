import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  getAbsoluteUrl,
  getDefaultSocialImageUrl,
  getLanguageAlternates,
  getLocalizedPath,
  type SupportedSeoLocale,
} from "@/lib/seo";

type ContentSection = {
  title: string;
  paragraphs: readonly string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const content = {
  uk: {
    title: "Що таке регресивний гіпноз | RaisaRegress",
    description:
      "Що таке регресивний гіпноз, як проходить така робота, кому метод може підходити, які є обмеження та чому важлива обережність у роботі зі спогадами.",
    keywords:
      "що таке регресивний гіпноз, як працює регресивний гіпноз, регресія в гіпнозі, метод регресивної терапії",
    heading: "Що таке регресивний гіпноз",
    intro:
      "Регресивний гіпноз зазвичай описують як формат роботи у стані глибокого розслаблення та сфокусованої уваги, коли людина разом із фахівцем досліджує переживання, внутрішні реакції, образи та спогади, пов’язані з актуальним запитом. У професійному середовищі важливо говорити про цей підхід обережно: гіпноз не є магічним станом і не позбавляє людину контролю, а робота зі спогадами потребує делікатності, бо пам’ять не є ідеальним записом подій.",
    sections: [
      {
        title: "Як це зазвичай пояснюють у практиці",
        paragraphs: [
          "Сучасні медичні й психологічні джерела описують гіпноз як стан підвищеної концентрації, сфокусованої уваги та розслаблення. У цьому стані людина не “відключається”, а навпаки залишається залученою до процесу, чує фахівця, може зупинити роботу та зазвичай пам’ятає, що відбувалося під час сесії.",
          "У регресивному форматі увагу спрямовують не лише на симптом, а й на його можливі емоційні джерела. Це може бути важлива життєва подія, повторюваний внутрішній сценарій, тілесна реакція, сильний образ або ранній досвід, який досі впливає на самопочуття людини.",
        ],
      },
      {
        title: "Що відбувається на такій сесії",
        paragraphs: [
          "Робота зазвичай починається з формулювання запиту: наприклад, тривога, повторювані конфлікти, страх близькості, хронічна напруга, труднощі з самооцінкою або відчуття внутрішнього застою. Після цього фахівець допомагає людині перейти у більш спокійний і зосереджений стан через голос, дихання, уявні образи або інші техніки м’якого наведення.",
          "Далі увага послідовно спрямовується до значущих переживань, пов’язаних із запитом. Практична ціль такої роботи не в тому, щоб “витягнути приховану істину”, а в тому, щоб краще зрозуміти власну реакцію, побачити зв’язки, які людина раніше не помічала, і безпечніше опрацювати складний досвід.",
        ],
      },
      {
        title: "Чим це відрізняється від звичайної розмовної консультації",
        paragraphs: [
          "У звичайній розмові людина більше спирається на логічне пояснення свого стану: що сталося, як вона це інтерпретує, які висновки вже зробила. У гіпнотичному форматі фокус часто зміщується з аналізу на безпосереднє переживання: відчуття в тілі, емоційний тон, образи, асоціації та фрагменти досвіду.",
          "Саме тому регресивний гіпноз іноді сприймається як “глибший” метод. Але це не означає, що він автоматично кращий або універсальний. Для одних людей такий формат може бути корисним доповненням, а для інших більш доречною буде класична психотерапія, медичний супровід або комбінований підхід.",
        ],
      },
      {
        title: "Чому потрібно обережно говорити про пам’ять і регресію",
        paragraphs: [
          "Наукові джерела давно показують, що людська пам’ять є пластичною та вразливою до навіювання. Саме тому робота зі спогадами в гіпнозі потребує особливої обережності: сильні навідні запитання, готові інтерпретації або тиск з боку спеціаліста можуть підвищувати ризик неточних або сконструйованих спогадів.",
          "Практично це означає просте правило: коректний фахівець не повинен нав’язувати людині “правильну версію” того, що вона нібито пережила. Безпечніше розглядати матеріал сесії як суб’єктивний психологічний досвід, з яким можна працювати дбайливо, а не як безпомилковий фактологічний запис минулого.",
        ],
      },
      {
        title: "Кому метод може підходити, а кому ні",
        paragraphs: [
          "Найчастіше такий формат шукають люди, які хочуть краще зрозуміти емоційне коріння своєї тривоги, страхів, внутрішніх блоків або повторюваних життєвих сценаріїв. Для частини клієнтів це може бути корисним способом глибше дослідити переживання, якщо робота ведеться обережно та в межах компетентності фахівця.",
          "Водночас гіпноз не є універсальним рішенням. Якщо є тяжкі психічні симптоми, виражена нестабільність стану, епілепсія, гостра криза або сумніви щодо безпеки формату, доцільно спершу обговорити це з лікарем або ліцензованим спеціалістом з психічного здоров’я.",
        ],
      },
      {
        title: "Що реально можна вважати корисним результатом",
        paragraphs: [
          "Реалістичний результат такої роботи це не “чудесне стирання проблем”, а краще розуміння власних реакцій, зниження емоційної напруги, поява нового погляду на давній досвід і відчуття більшої внутрішньої опори. Саме такі формулювання є професійно чесними й не створюють завищених очікувань.",
          "Якщо говорити просто, цінність методу полягає не в містичних обіцянках, а в уважному контакті з переживанням. Коли людина почувається в безпеці, не поспішає, і її не підштовхують до готових висновків, така робота може стати важливим етапом особистого та терапевтичного процесу.",
        ],
      },
    ],
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Чи людина втрачає контроль під час гіпнозу?",
        answer:
          "Ні. У коректній практиці людина залишається у контакті з процесом, чує фахівця і може зупинити сесію. Поширений міф про повну втрату контролю більше пов’язаний із шоу-образами, ніж із терапевтичною роботою.",
      },
      {
        question: "Чи все, що пригадується під час регресії, є точним фактом?",
        answer:
          "Не обов’язково. Пам’ять може бути неточною, а навіювання здатне впливати на те, як людина переживає й описує досвід. Тому відповідальний підхід полягає в обережній роботі з матеріалом сесії без категоричних тверджень про абсолютну достовірність.",
      },
      {
        question: "Чи можна вважати регресивний гіпноз заміною лікування?",
        answer:
          "Ні. Його не варто розглядати як заміну належної медичної чи психотерапевтичної допомоги. Якщо є виражені симптоми, криза або психіатричні ризики, насамперед потрібна консультація профільного спеціаліста.",
      },
    ],
    serviceBoxTitle: "Основна сторінка послуги",
    serviceBoxText:
      "Якщо вам уже зрозуміло, як виглядає метод, і ви хочете перейти до практичного формату роботи, на основній сторінці послуги зібрано опис онлайн-сеансу, структури сесії та способу запису.",
    serviceBoxLink: "Перейти до сторінки послуги",
    ctaTitle: "Хочете зрозуміти, чи доречний цей формат саме для вашого запиту?",
    ctaText:
      "Почніть з консультації, щоб безпечно оцінити цілі роботи, межі методу і відповідний для вас формат.",
    ctaButton: "Записатися на консультацію",
    backLabel: "На головну",
  },
  en: {
    title: "What Is Regression Hypnosis | RaisaRegress",
    description:
      "What regression hypnosis is, how sessions usually work, who the method may suit, and why caution matters when working with memories and suggestion.",
    keywords:
      "what is regression hypnosis, how regression hypnosis works, hypnosis and memory, regression therapy method",
    heading: "What Is Regression Hypnosis",
    intro:
      "Regression hypnosis is often described as a way of exploring emotionally significant experiences in a state of focused attention and deep relaxation. It’s important to explain the method carefully: hypnosis is not mind control, and memory is not a perfect recording. A responsible practitioner treats material that appears in session with caution rather than presenting it as unquestionable fact.",
    sections: [
      {
        title: "How the method is commonly understood",
        paragraphs: [
          "Authoritative health sources generally describe hypnosis as a state of concentrated attention, heightened focus, and relaxation. In therapeutic settings, people typically remain aware of what is happening, hear the practitioner’s voice, and can stop the process if needed.",
          "In regression-oriented work, attention is guided toward experiences, emotions, images, and associations that may be connected to the client’s current concern. The purpose is not to produce dramatic revelations, but to understand emotional patterns more clearly and work with them in a structured way.",
        ],
      },
      {
        title: "What usually happens during a session",
        paragraphs: [
          "A session normally begins with clarifying the request: anxiety, repeated relationship difficulties, chronic tension, self-worth issues, emotional overwhelm, or a recurring inner pattern. The practitioner then uses voice, breathing, imagery, or other gentle techniques to help the client become calmer and more focused.",
          "From there, the work may move toward emotionally meaningful experiences, inner images, bodily sensations, or remembered situations linked to the request. In a careful therapeutic frame, the goal is not to force a conclusion but to help the person observe, process, and reinterpret difficult material more safely.",
        ],
      },
      {
        title: "How this differs from ordinary talk-based work",
        paragraphs: [
          "Traditional conversation-based work often relies more heavily on explanation, reflection, and conscious analysis. Hypnotic work can shift some of that focus toward direct experience: what the body feels, what emotions arise, what images appear, and what patterns feel familiar.",
          "That doesn’t make hypnosis automatically deeper or better. It is simply a different mode of working. For some people it may be useful, while for others a more conventional psychotherapy format may be more appropriate.",
        ],
      },
      {
        title: "Why memory must be treated carefully",
        paragraphs: [
          "Research on memory and suggestion shows that recollection can be influenced by context, expectation, and leading questions. That means any work involving memory retrieval or “regression” should be handled with real caution.",
          "A responsible practitioner should avoid imposing interpretations or pushing the client toward a supposed hidden truth. A safer stance is to treat what emerges in session as meaningful subjective material, while being careful not to overclaim factual certainty.",
        ],
      },
      {
        title: "Who the method may suit",
        paragraphs: [
          "People often seek this type of work when they want to understand the emotional roots of anxiety, inner blocks, fears, repeated life patterns, or unresolved experiences that still affect them. In a careful setting, hypnosis may help some clients explore these themes with more focus and less defensiveness.",
          "At the same time, it should not be presented as universally suitable. Severe psychiatric symptoms, high instability, seizures, acute crisis, or uncertainty about safety are all reasons to seek appropriate medical or licensed mental health guidance first.",
        ],
      },
      {
        title: "What a realistic benefit looks like",
        paragraphs: [
          "A realistic outcome is not a miracle cure. More grounded benefits include better emotional insight, reduced tension, clearer awareness of patterns, and a stronger sense of internal stability.",
          "That is where the real value of this kind of work usually lies: not in sensational claims, but in helping a person relate to their inner experience with more clarity, care, and structure.",
        ],
      },
    ],
    faqTitle: "Common Questions",
    faqs: [
      {
        question: "Do you lose control during hypnosis?",
        answer:
          "No. In therapeutic hypnosis, people typically remain aware of the process, hear the practitioner, and can interrupt the session if needed.",
      },
      {
        question: "Are all memories recalled in regression accurate facts?",
        answer:
          "Not necessarily. Memory is reconstructive and can be influenced by suggestion. That’s why responsible work avoids absolute claims about factual certainty.",
      },
      {
        question: "Can regression hypnosis replace proper treatment?",
        answer:
          "No. It should not be treated as a substitute for appropriate medical or psychological care, especially when symptoms are serious or safety is uncertain.",
      },
    ],
    serviceBoxTitle: "Main service page",
    serviceBoxText:
      "If the method makes sense to you and you want to move from explanation to actual session work, the main service page covers the online format, structure, and booking path.",
    serviceBoxLink: "Open service page",
    ctaTitle: "Want to see whether this format fits your request?",
    ctaText:
      "Start with a consultation to assess goals, limits of the method, and whether this kind of work is appropriate for you.",
    ctaButton: "Book a consultation",
    backLabel: "Back to home",
  },
  it: {
    title: "Che Cos'è l'Ipnosi Regressiva | RaisaRegress",
    description:
      "Che cos'è l'ipnosi regressiva, come si svolge di solito una seduta, per chi può essere utile e perché serve cautela quando si lavora con memoria e suggestione.",
    keywords:
      "cos'è ipnosi regressiva, come funziona ipnosi regressiva, memoria e ipnosi, metodo regressivo",
    heading: "Che Cos'è l'Ipnosi Regressiva",
    intro:
      "L'ipnosi regressiva viene spesso descritta come un modo per esplorare vissuti emotivamente significativi in uno stato di attenzione focalizzata e rilassamento profondo. È importante parlarne con precisione: l'ipnosi non è controllo mentale e la memoria non è una registrazione perfetta. Un professionista serio tratta ciò che emerge in seduta con cautela, senza presentarlo come verità incontestabile.",
    sections: [
      {
        title: "Come viene generalmente compreso il metodo",
        paragraphs: [
          "Le fonti sanitarie autorevoli descrivono l'ipnosi come uno stato di concentrazione, attenzione focalizzata e rilassamento. In ambito terapeutico la persona di solito resta consapevole, ascolta il professionista e può interrompere il processo se necessario.",
          "Nel lavoro regressivo, l'attenzione viene orientata verso esperienze, emozioni, immagini e associazioni che possono essere collegate al problema attuale. Lo scopo non è creare rivelazioni spettacolari, ma comprendere meglio i modelli emotivi e lavorarci in modo strutturato.",
        ],
      },
      {
        title: "Cosa accade di solito durante una seduta",
        paragraphs: [
          "La seduta inizia normalmente con la definizione della richiesta: ansia, difficoltà relazionali ricorrenti, tensione cronica, problemi di autostima, sovraccarico emotivo o schemi interiori ripetitivi. Il professionista usa poi voce, respiro, immagini guidate o altre tecniche dolci per favorire calma e focalizzazione.",
          "Da lì il lavoro può spostarsi verso esperienze emotivamente significative, immagini interiori, sensazioni corporee o ricordi collegati alla richiesta. In un contesto accurato, l'obiettivo non è forzare una conclusione, ma aiutare la persona a osservare, elaborare e reinterpretare il materiale in modo più sicuro.",
        ],
      },
      {
        title: "In cosa differisce da una consulenza solo verbale",
        paragraphs: [
          "Il lavoro basato solo sul dialogo si appoggia maggiormente alla riflessione cosciente e all'analisi. Il lavoro ipnotico può spostare il focus verso l'esperienza diretta: ciò che il corpo sente, le emozioni che emergono, le immagini che appaiono e gli schemi che sembrano familiari.",
          "Questo non significa che l'ipnosi sia automaticamente più profonda o migliore. È semplicemente una modalità diversa. Per alcune persone può essere utile, per altre può essere più adatto un percorso psicoterapeutico più classico.",
        ],
      },
      {
        title: "Perché la memoria va trattata con cautela",
        paragraphs: [
          "La ricerca su memoria e suggestione mostra che il ricordo può essere influenzato dal contesto, dalle aspettative e dalle domande guidanti. Per questo ogni lavoro che coinvolga recupero di ricordi o regressione richiede particolare prudenza.",
          "Un professionista responsabile evita di imporre interpretazioni o di spingere la persona verso una presunta verità nascosta. L'approccio più sicuro è considerare ciò che emerge come materiale soggettivo significativo, senza trasformarlo automaticamente in certezza fattuale.",
        ],
      },
      {
        title: "Per chi può essere utile il metodo",
        paragraphs: [
          "Molte persone cercano questo tipo di lavoro quando vogliono comprendere le radici emotive di ansia, blocchi interiori, paure, schemi ripetitivi o esperienze non risolte che continuano a influenzarle. In un contesto attento, l'ipnosi può aiutare alcuni clienti a esplorare questi temi con più focalizzazione e meno difese.",
          "Non dovrebbe però essere presentata come adatta a tutti. Sintomi psichiatrici gravi, forte instabilità, crisi acute, convulsioni o dubbi sulla sicurezza sono motivi per consultare prima un medico o un professionista della salute mentale qualificato.",
        ],
      },
      {
        title: "Quale beneficio è realistico aspettarsi",
        paragraphs: [
          "Un risultato realistico non è una guarigione miracolosa. Benefici più concreti possono essere una migliore comprensione emotiva, minore tensione, maggiore chiarezza sui propri schemi e una sensazione più stabile di appoggio interno.",
          "È qui che sta di solito il valore reale di questo lavoro: non nelle promesse sensazionalistiche, ma nell'aiutare la persona a stare con la propria esperienza interna con più chiarezza, cura e struttura.",
        ],
      },
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "Si perde il controllo durante l'ipnosi?",
        answer:
          "No. Nell'ipnosi terapeutica la persona di solito resta consapevole del processo, ascolta il professionista e può interrompere la seduta se necessario.",
      },
      {
        question: "Tutti i ricordi emersi in regressione sono fatti accurati?",
        answer:
          "Non necessariamente. La memoria è ricostruttiva e può essere influenzata dalla suggestione. Per questo un approccio serio evita affermazioni assolute sulla certezza dei fatti.",
      },
      {
        question: "L'ipnosi regressiva può sostituire cure adeguate?",
        answer:
          "No. Non dovrebbe sostituire cure mediche o psicologiche appropriate, soprattutto quando i sintomi sono seri o la sicurezza è incerta.",
      },
    ],
    serviceBoxTitle: "Pagina principale del servizio",
    serviceBoxText:
      "Se il metodo ti è chiaro e vuoi passare dalla spiegazione al lavoro concreto in seduta, nella pagina principale trovi il formato online, la struttura della sessione e il percorso di prenotazione.",
    serviceBoxLink: "Apri la pagina del servizio",
    ctaTitle: "Vuoi capire se questo formato è adatto alla tua richiesta?",
    ctaText:
      "Inizia con una consulenza per valutare obiettivi, limiti del metodo e adeguatezza del percorso per la tua situazione.",
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
  const canonicalPath = getLocalizedPath(locale, "what-is-regressive-hypnosis");
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
      ...getLanguageAlternates("what-is-regressive-hypnosis"),
    },
  };
}

export default async function WhatIsRegressiveHypnosisPage({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const copy = content[locale];
  const canonicalPath = getLocalizedPath(locale, "what-is-regressive-hypnosis");
  const canonicalUrl = getAbsoluteUrl(canonicalPath);

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: getAbsoluteUrl(getLocalizedPath(locale)),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: copy.heading,
                  item: canonicalUrl,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: copy.heading,
              description: copy.description,
              url: canonicalUrl,
              inLanguage: locale,
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

        {copy.sections.map((section: ContentSection) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <div className="space-y-4 text-muted-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.faqTitle}</h2>
          <div className="space-y-4">
            {copy.faqs.map((item: FaqItem) => (
              <div key={item.question} className="rounded-xl border p-5">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-3 text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border p-6 md:p-8">
          <h2 className="text-2xl font-semibold">{copy.serviceBoxTitle}</h2>
          <p className="mt-3 text-muted-foreground">{copy.serviceBoxText}</p>
          <Button asChild variant="outline" className="mt-5">
            <Link href="/regression-hypnosis-online">{copy.serviceBoxLink}</Link>
          </Button>
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
