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
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

const content = {
  uk: {
    title: "Регресивний гіпноз онлайн | RaisaRegress",
    description:
      "Регресивний гіпноз онлайн з Раїсою Оберемчук: консультація, безпечний формат роботи, опрацювання тривоги, внутрішніх блоків і повторюваних життєвих сценаріїв.",
    keywords:
      "регресивний гіпноз онлайн, сеанс регресії онлайн, регресивна терапія онлайн, запис на регресію",
    heading: "Регресивний гіпноз онлайн",
    intro:
      "Це основна сторінка послуги для тих, хто розглядає регресивний гіпноз онлайн як практичний формат роботи зі своїм запитом. Якщо коротко, йдеться не про шоу-гіпноз і не про красиві обіцянки швидкого чуда, а про структуровану роботу з емоційними реакціями, внутрішніми блоками, повторюваними життєвими сценаріями та переживаннями, які залишаються емоційно незавершеними. Мета такої сесії не в тому, щоб нав’язати людині “приховану істину”, а в тому, щоб допомогти їй глибше зрозуміти себе, прожити значущий матеріал у безпечному темпі та вийти з процесу більш зібрано й усвідомлено.",
    sections: [
      {
        title: "Для яких запитів цей формат може бути доречним",
        paragraphs: [
          "Найчастіше люди звертаються з темами тривоги, внутрішньої напруги, емоційного виснаження, болісних повторів у стосунках, складнощів із самоцінністю, страху змін, відчуття застою або реакцій, які здаються непропорційно сильними до поточної ситуації.",
          "У таких випадках важливим стає не лише інтелектуальне розуміння проблеми, а й можливість дістатися до її емоційного ядра. Саме тут регресивний формат може бути корисним, якщо він використовується обережно, етично й з урахуванням стану людини.",
        ],
      },
      {
        title: "Що таке онлайн-сеанс у реальності",
        paragraphs: [
          "Онлайн-сеанс це повноцінна професійна робота, а не “спрощена версія” очної сесії. За умови стабільного зв’язку, приватного простору, достатнього часу й правильної підготовки дистанційний формат може бути глибоким, зосередженим і безпечним.",
          "Перевага онлайн-формату в тому, що людина залишається у звичному середовищі, де їй часто легше розслабитися і відчути контроль. Але саме тому важлива попередня оцінка: якщо простір, стан або життєва ситуація не дають відчуття опори, формат може бути недоречним саме зараз.",
        ],
      },
      {
        title: "Як побудована робота",
        paragraphs: [
          "Робота починається з уточнення запиту та оцінки доречності формату. Якщо все підходить, далі йде м’який вхід у більш спокійний і сфокусований стан через голос, дихання, образи або інші техніки наведення. Після цього увага спрямовується до переживань, образів, тілесних реакцій і значущих епізодів, пов’язаних із запитом.",
          "Якісний процес не повинен будуватися на тиску або драматизації. Людина не втрачає контроль, а фахівець не “читає істину”, а супроводжує дослідження внутрішнього матеріалу, зберігаючи темп, межі й опору на безпеку.",
        ],
      },
      {
        title: "Що можна вважати реалістичним результатом",
        paragraphs: [
          "Реалістичний результат такої роботи це не магічне зникнення всіх труднощів за одну зустріч. Частіше йдеться про краще розуміння власних реакцій, зниження внутрішньої напруги, зміну ставлення до важкого досвіду, ясніше бачення повторюваних патернів і появу більшої внутрішньої опори.",
          "Для когось це відчувається як сильний зсув уже після першої сесії, для когось як поступовий процес, у якому зміни дозрівають протягом часу. Саме такий опис є чесним і професійним, бо не створює завищених очікувань.",
        ],
      },
      {
        title: "Чому важлива консультація перед записом",
        paragraphs: [
          "Консультація потрібна не для формальності, а для безпеки й точності вибору. На ній можна зрозуміти, чи підходить людині саме регресивний формат, який рівень інтенсивності доречний, чи є ризики, протипоказання або причини спершу звернутися по інший тип допомоги.",
          "Для частини людей консультація вже сама по собі є цінною, бо дає ясність і зменшує тривогу перед роботою. А для інших вона допомагає перейти до сесії без зайвої ідеалізації або страху.",
        ],
      },
      {
        title: "Коли краще не поспішати",
        paragraphs: [
          "Якщо є тяжкі психіатричні симптоми, гостра криза, судомні стани, недавня сильна травма без достатньої стабілізації або серйозні сумніви щодо безпеки, до такого формату потрібно ставитися дуже обережно. У деяких випадках спершу більш доречною буде консультація лікаря, психіатра або ліцензованого психотерапевта.",
          "Відповідальна практика не підміняє собою належну медичну або психотерапевтичну допомогу. Її сила не в тому, що вона “для всіх”, а в тому, що вона може бути корисною для правильно підібраного запиту й у відповідних межах.",
        ],
      },
    ],
    benefitsTitle: "Коли послуга може бути корисною",
    benefits: [
      "тривожність, внутрішня напруга, емоційне виснаження",
      "повторювані сценарії у стосунках чи роботі",
      "страхи, блоки, відчуття застою або самосаботажу",
      "потреба глибше зрозуміти свою реакцію на значущий досвід",
    ],
    processTitle: "Як проходить робота",
    process: [
      "попередня консультація та оцінка доречності формату",
      "підготовка простору, техніки та внутрішнього фокусу",
      "основна сесія у безпечному темпі з супроводом спеціаліста",
      "завершення, коротка інтеграція і рекомендації після зустрічі",
    ],
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Чи потрібно одразу записуватися на повноцінний сеанс?",
        answer:
          "Не обов’язково. Якщо є сумнів щодо формату, емоційного стану або запиту, консультація часто є кращим і безпечнішим першим кроком.",
      },
      {
        question: "Чи підходить онлайн-формат для глибокої роботи?",
        answer:
          "Так, для багатьох людей підходить. Але лише за умови нормальної підготовки, стабільного контакту, приватного простору і правильно підібраного рівня навантаження.",
      },
      {
        question: "Чи можна очікувати результат уже після першої зустрічі?",
        answer:
          "Іноді так, але не варто робити з цього обіцянку. Для когось одна сесія стає сильним поштовхом, для когось зміни розгортаються поступово.",
      },
    ],
    relatedTitle: "Корисно перед записом",
    relatedLinks: [
      {
        href: "/what-is-regressive-hypnosis",
        label: "Що таке регресивний гіпноз",
      },
      {
        href: "/regression-session-online",
        label: "Як проходить сеанс регресії онлайн",
      },
      {
        href: "/regressologist-online",
        label: "Коли варто звернутися до регресолога онлайн",
      },
    ],
    ctaTitle: "Готові почати роботу із запитом?",
    ctaText:
      "Запишіться на консультацію, щоб оцінити доречність формату, обговорити ваш запит і спокійно підготуватися до подальшої роботи.",
    ctaButton: "Записатися на сеанс",
    backLabel: "На головну",
  },
  en: {
    title: "Online Regression Hypnosis | RaisaRegress",
    description:
      "Online regression hypnosis with Raisa Oberemchuk: consultation, safe session structure, and focused work with anxiety, inner blocks, and repeating patterns.",
    keywords:
      "online regression hypnosis, regression session online, regression therapy online, book regression session",
    heading: "Online Regression Hypnosis",
    intro:
      "This is the main service page for people considering online regression hypnosis as a practical way of working with an important personal issue. The aim is not theatrical hypnosis or dramatic promises of instant transformation, but structured work with emotional reactions, inner blocks, repeated patterns, and experiences that still carry unresolved charge.",
    sections: [
      {
        title: "What kinds of requests this format may suit",
        paragraphs: [
          "People most often seek this work because of anxiety, chronic inner tension, emotional exhaustion, painful relationship patterns, low self-worth, fear of change, feeling stuck, or reactions that seem disproportionately strong.",
          "In these cases, the goal is often not only to understand the problem intellectually but to work with its emotional core in a more focused and contained way.",
        ],
      },
      {
        title: "What an online session actually is",
        paragraphs: [
          "An online session is not a weaker version of in-person work. With good preparation, privacy, stable connection, and enough uninterrupted time, it can be a full and meaningful therapeutic format.",
          "For some people, being in their own environment actually helps them feel safer and more in control. At the same time, this format still requires proper assessment to make sure it is suitable.",
        ],
      },
      {
        title: "How the work is structured",
        paragraphs: [
          "The process starts with clarifying the request and assessing whether this format is appropriate. If it is, the session moves into a calmer and more focused state through voice, breathing, imagery, or other gentle hypnotic techniques.",
          "From there, attention is guided toward relevant emotional material, recurring patterns, images, sensations, or significant experiences related to the request. The pace should remain manageable and safe rather than dramatic or forced.",
        ],
      },
      {
        title: "What a realistic result looks like",
        paragraphs: [
          "A realistic result is not instant healing. More grounded outcomes may include better emotional insight, reduced tension, a clearer sense of repeating patterns, and a stronger internal sense of orientation.",
          "For some people this feels noticeable after one session. For others, change unfolds gradually. A responsible service page should describe that honestly.",
        ],
      },
      {
        title: "Why consultation matters before booking",
        paragraphs: [
          "Consultation is not a formality. It helps determine whether regression-oriented work fits the person’s condition, goals, and level of stability. It also allows room to discuss expectations, risks, and whether another kind of help may be more appropriate.",
          "For some people, consultation alone already brings useful clarity. For others, it prepares the ground for a deeper session without unnecessary idealization or fear.",
        ],
      },
      {
        title: "When not to rush into this format",
        paragraphs: [
          "Severe psychiatric symptoms, acute crisis, seizure-related concerns, very recent trauma without stabilization, or serious safety doubts are all reasons to proceed carefully. In some cases, medical or licensed mental health support should come first.",
          "Responsible practice does not replace appropriate medical or psychotherapeutic care. Its value lies in being useful for the right request, under the right conditions.",
        ],
      },
    ],
    benefitsTitle: "When this service may help",
    benefits: [
      "anxiety, inner tension, emotional exhaustion",
      "repeating relationship or work patterns",
      "fears, blocks, feeling stuck, or self-sabotage",
      "a wish to understand deeper emotional roots of a current issue",
    ],
    processTitle: "How the work usually unfolds",
    process: [
      "preliminary consultation and assessment of fit",
      "preparation of space, technology, and internal focus",
      "core session work at a manageable and safe pace",
      "closing, brief integration, and practical after-session guidance",
    ],
    faqTitle: "Common Questions",
    faqs: [
      {
        question: "Do I need to book a full session right away?",
        answer:
          "Not necessarily. If there is uncertainty about the format, your condition, or the request itself, consultation is often the safer first step.",
      },
      {
        question: "Can the online format still be deep and effective?",
        answer:
          "Yes, for many people it can. But that depends on preparation, privacy, stable connection, and whether the format is genuinely appropriate for the person.",
      },
      {
        question: "Should I expect a result after one session?",
        answer:
          "Sometimes people notice a meaningful shift quickly, but that should not be promised as a rule. For others, change is more gradual.",
      },
    ],
    relatedTitle: "Helpful pages before booking",
    relatedLinks: [
      {
        href: "/what-is-regressive-hypnosis",
        label: "What is regression hypnosis",
      },
      {
        href: "/regression-session-online",
        label: "How an online regression session works",
      },
      {
        href: "/regressologist-online",
        label: "When to work with an online regression therapist",
      },
    ],
    ctaTitle: "Ready to begin working with your request?",
    ctaText:
      "Book a consultation to assess whether this format is appropriate, discuss your request, and prepare for the next step in a grounded way.",
    ctaButton: "Book a session",
    backLabel: "Back to home",
  },
  it: {
    title: "Ipnosi Regressiva Online | RaisaRegress",
    description:
      "Ipnosi regressiva online con Raisa Oberemchuk: consulenza, struttura sicura della seduta e lavoro focalizzato su ansia, blocchi interiori e schemi ricorrenti.",
    keywords:
      "ipnosi regressiva online, sessione regressiva online, terapia regressiva online, prenota regressione",
    heading: "Ipnosi Regressiva Online",
    intro:
      "Questa è la pagina principale del servizio per chi sta valutando l'ipnosi regressiva online come formato pratico di lavoro su una richiesta importante. L'obiettivo non è l'ipnosi spettacolare né la promessa di un cambiamento istantaneo, ma un lavoro strutturato con reazioni emotive, blocchi interiori, schemi ripetitivi ed esperienze ancora cariche sul piano emotivo.",
    sections: [
      {
        title: "Per quali richieste questo formato può essere utile",
        paragraphs: [
          "Le richieste più frequenti riguardano ansia, tensione interiore cronica, esaurimento emotivo, schemi dolorosi nelle relazioni, bassa autostima, paura del cambiamento, sensazione di stallo o reazioni che sembrano troppo forti rispetto al presente.",
          "In questi casi l'obiettivo non è solo capire il problema con la mente, ma lavorare con il suo nucleo emotivo in modo più focalizzato e contenuto.",
        ],
      },
      {
        title: "Cosa significa davvero una sessione online",
        paragraphs: [
          "Una sessione online non è una versione più debole del lavoro in presenza. Con buona preparazione, privacy, connessione stabile e tempo sufficiente senza interruzioni, può essere un formato completo e significativo.",
          "Per alcune persone lavorare nel proprio ambiente aumenta il senso di sicurezza e controllo. Allo stesso tempo, il formato richiede comunque una valutazione iniziale per capire se è davvero adatto.",
        ],
      },
      {
        title: "Come è strutturato il lavoro",
        paragraphs: [
          "Il processo comincia con la chiarificazione della richiesta e la valutazione dell'adeguatezza del formato. Se il formato è adatto, la seduta accompagna gradualmente la persona verso uno stato più calmo e focalizzato attraverso voce, respiro, immagini o altre tecniche dolci.",
          "Da lì l'attenzione viene orientata verso materiale emotivo rilevante, schemi ricorrenti, immagini, sensazioni o esperienze significative collegate alla richiesta. Il ritmo deve restare gestibile e sicuro, non drammatico o forzato.",
        ],
      },
      {
        title: "Quale risultato è realistico aspettarsi",
        paragraphs: [
          "Un risultato realistico non è una guarigione immediata. Esiti più concreti possono essere una comprensione emotiva più chiara, minore tensione, maggiore consapevolezza dei propri schemi e un senso più stabile di orientamento interno.",
          "Per alcune persone questo si percepisce già dopo una seduta. Per altre il cambiamento si sviluppa gradualmente. Una pagina seria del servizio dovrebbe dirlo con chiarezza.",
        ],
      },
      {
        title: "Perché la consulenza è importante prima della prenotazione",
        paragraphs: [
          "La consulenza non è una formalità. Serve a capire se il lavoro regressivo è adatto alla condizione della persona, ai suoi obiettivi e al suo livello di stabilità. È anche lo spazio in cui parlare di aspettative, rischi e dell'eventuale bisogno di un altro tipo di aiuto.",
          "Per alcune persone la consulenza è già di per sé molto utile. Per altre prepara il terreno a una seduta più profonda senza idealizzazioni o timori inutili.",
        ],
      },
      {
        title: "Quando è meglio non avere fretta",
        paragraphs: [
          "Sintomi psichiatrici importanti, crisi acute, rischio di convulsioni, trauma molto recente senza stabilizzazione o dubbi seri sulla sicurezza sono tutti motivi per procedere con cautela. In alcuni casi è più appropriato rivolgersi prima a un medico o a un professionista della salute mentale abilitato.",
          "Una pratica responsabile non sostituisce cure mediche o psicoterapeutiche appropriate. Il suo valore sta nell'essere utile per la richiesta giusta, nelle condizioni giuste.",
        ],
      },
    ],
    benefitsTitle: "Quando il servizio può essere utile",
    benefits: [
      "ansia, tensione interiore, esaurimento emotivo",
      "schemi ripetitivi nelle relazioni o nel lavoro",
      "paure, blocchi, sensazione di stallo o autosabotaggio",
      "desiderio di capire più a fondo le radici emotive di un problema attuale",
    ],
    processTitle: "Come si svolge di solito il lavoro",
    process: [
      "consulenza preliminare e valutazione dell'adeguatezza",
      "preparazione dello spazio, della parte tecnica e del focus interiore",
      "lavoro centrale della seduta a un ritmo gestibile e sicuro",
      "chiusura, breve integrazione e indicazioni pratiche dopo la seduta",
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "Devo prenotare subito una seduta completa?",
        answer:
          "Non necessariamente. Se c'è incertezza sul formato, sulla condizione personale o sulla richiesta, la consulenza è spesso il primo passo più prudente.",
      },
      {
        question: "Il formato online può essere comunque profondo ed efficace?",
        answer:
          "Sì, per molte persone può esserlo. Ma dipende dalla preparazione, dalla privacy, dalla stabilità tecnica e dal fatto che il formato sia davvero adatto al caso specifico.",
      },
      {
        question: "Devo aspettarmi un risultato già dalla prima seduta?",
        answer:
          "A volte si percepisce un cambiamento significativo già presto, ma non va promesso come regola generale. Per altre persone il cambiamento è più graduale.",
      },
    ],
    relatedTitle: "Pagine utili prima della prenotazione",
    relatedLinks: [
      {
        href: "/what-is-regressive-hypnosis",
        label: "Che cos'è l'ipnosi regressiva",
      },
      {
        href: "/regression-session-online",
        label: "Come si svolge una sessione di regressione online",
      },
      {
        href: "/regressologist-online",
        label: "Quando rivolgersi a una regressologa online",
      },
    ],
    ctaTitle: "Vuoi iniziare a lavorare sulla tua richiesta?",
    ctaText:
      "Prenota una consulenza per valutare se questo formato è adatto, chiarire la tua richiesta e preparare con calma il passo successivo.",
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
  const canonicalPath = getLocalizedPath(locale, "regression-hypnosis-online");
  const canonicalUrl = getAbsoluteUrl(canonicalPath);

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: copy.heading,
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

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{copy.relatedTitle}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {copy.relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border p-4 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
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
