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
    title: "Регресолог онлайн: коли звертатися і як обрати спеціаліста | RaisaRegress",
    description:
      "Хто такий регресолог онлайн, з якими запитами він працює, як обрати спеціаліста, на що звернути увагу перед консультацією та коли потрібен інший формат допомоги.",
    keywords:
      "регресолог онлайн, консультація регресолога, як обрати регресолога, з якими запитами працює регресолог",
    heading: "Регресолог онлайн",
    intro:
      "Коли людина шукає регресолога онлайн, вона зазвичай шукає не просто назву професії, а відповідь на практичні питання: чи підходить їй цей формат, чи безпечно працювати дистанційно, чи можна довіряти конкретному спеціалісту і з якими темами справді варто приходити на таку роботу. Саме тому корисна сторінка про регресолога має пояснювати не “хто це в теорії”, а як відрізнити уважного фахівця від людини з небезпечними або завищеними обіцянками.",
    sections: [
      {
        title: "Хто такий регресолог у практичному сенсі",
        paragraphs: [
          "У найзагальнішому сенсі регресолог це фахівець, який працює з гіпнотичними або близькими до гіпнотерапії техніками, щоб допомогти людині дослідити емоційно значущі переживання, внутрішні реакції, образи й повторювані патерни. Але сама назва ще нічого не гарантує: значення мають підготовка, етичні межі, спосіб ведення процесу і ставлення до безпеки клієнта.",
          "Надійний спеціаліст не будує роботу на тиску, не підміняє медичну допомогу, не обіцяє містичного всезнання і не нав’язує готових трактувань. Його цінність у тому, що він може створити структурований, уважний і психологічно безпечний процес, у якому людина поступово розуміє власний стан глибше.",
        ],
      },
      {
        title: "З якими запитами звертаються найчастіше",
        paragraphs: [
          "Найчастіше до такого спеціаліста звертаються з темами тривоги, внутрішньої напруги, емоційного виснаження, повторюваних сценаріїв у стосунках, труднощів із самоповагою, страхом близькості, відчуттям застою або болісними реакціями, які ніби повторюються всупереч здоровому глузду.",
          "У цих ситуаціях людина зазвичай не шукає просто розмови, а хоче глибше зрозуміти, чому її реакції такі сильні й чому старі патерни знову повертаються. Саме тут регресивний формат може бути корисним, якщо він використовується обережно і в межах компетентності.",
        ],
      },
      {
        title: "Як зрозуміти, що спеціаліст працює відповідально",
        items: [
          "пояснює метод просто і без містичних обіцянок",
          "починає з консультації та оцінки вашого стану, а не одразу продає “глибоку сесію”",
          "не нав’язує інтерпретації й не говорить за вас, що ви “точно пережили”",
          "прямо говорить про межі методу, протипоказання і випадки, коли потрібна інша допомога",
          "не обіцяє гарантованого результату після однієї зустрічі",
          "уважно ставиться до стабільності клієнта, післясеансової інтеграції та етичних меж контакту",
        ],
      },
      {
        title: "Коли варто насторожитися",
        paragraphs: [
          "Тривожний сигнал це фахівець, який одразу обіцяє “розкрити всі відповіді”, тисне авторитетом, драматизує процес або подає власні версії подій як абсолютну істину. Так само небезпечно, коли спеціаліст ігнорує медичні чи психіатричні ризики і переконує, що його метод підходить абсолютно всім.",
          "Обережність особливо важлива в темах пам’яті, травми та сильних емоційних станів. Людська пам’ять пластична, а навіювання може впливати на те, як людина переживає й описує свій досвід. Тому етичний регресолог не повинен “вкладати” клієнту готові висновки.",
        ],
      },
      {
        title: "Коли краще шукати інший формат допомоги",
        paragraphs: [
          "Є ситуації, коли головним фахівцем має бути не регресолог, а лікар, психіатр або ліцензований психотерапевт. Якщо є виражена дестабілізація, гострі психіатричні симптоми, судомні стани, недавня тяжка травма, саморуйнівні імпульси або серйозні сумніви щодо безпеки, спершу потрібна профільна оцінка.",
          "Відповідальний регресолог не буде сприймати це як “втрату клієнта”. Навпаки, здатність не втручатися поза межами своєї компетенції це одна з ознак професійної зрілості.",
        ],
      },
      {
        title: "Що реально можна отримати від роботи",
        paragraphs: [
          "Реалістичний результат це не чарівне зникнення всіх труднощів, а ясніше розуміння себе, зниження емоційного напруження, новий спосіб бачити повторюваний сценарій і відчуття більшої внутрішньої опори. Для багатьох людей цього вже достатньо, щоб змінити свій спосіб реагування і побачити більше свободи у власних рішеннях.",
          "Саме тому найкращий регресолог не продає фантазію про миттєве спасіння. Він допомагає людині рухатися глибше, але при цьому залишатися в контакті з реальністю, тілом, межами і безпекою.",
        ],
      },
    ],
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Чи можна обрати регресолога лише за сторінкою в соцмережах?",
        answer:
          "Недостатньо. Соцмережі можуть показати стиль подачі, але рішення краще приймати після розмови про підхід, межі методу, безпеку та ваш запит.",
      },
      {
        question: "Чи повинен регресолог обіцяти результат?",
        answer:
          "Ні. Етичний спеціаліст може пояснити можливу користь формату, але не повинен гарантувати однаковий результат для всіх людей.",
      },
      {
        question: "Чи нормально починати не з сесії, а з консультації?",
        answer:
          "Так, це скоріше ознака зрілого підходу. Саме консультація допомагає оцінити доречність формату, ризики і реалістичні очікування.",
      },
    ],
    serviceBoxTitle: "Основна сторінка послуги",
    serviceBoxText:
      "Якщо ви вже розумієте, з якими запитами працює регресолог, і хочете перейти до практичного формату роботи, на основній сторінці послуги зібрано опис сеансу та спосіб запису.",
    serviceBoxLink: "Перейти до послуги",
    ctaTitle: "Хочете обговорити ваш запит перед записом?",
    ctaText:
      "Почніть з консультації, щоб оцінити, чи підходить вам регресивний формат і як безпечно побудувати подальшу роботу.",
    ctaButton: "Записатися",
    backLabel: "На головну",
  },
  en: {
    title: "Online Regression Therapist: When to Reach Out and How to Choose One | RaisaRegress",
    description:
      "What an online regression therapist does, which concerns people usually bring, how to evaluate a practitioner, and when another kind of support may be more appropriate.",
    keywords:
      "online regression therapist, how to choose regression therapist, regression consultation online, what regression therapist helps with",
    heading: "Online Regression Therapist",
    intro:
      "When people look for an online regression therapist, they are usually not looking for a dictionary definition. They want to know whether the format could help them, whether it is safe, and how to tell a careful professional from someone making exaggerated or unsafe claims. That is the practical purpose of this page.",
    sections: [
      {
        title: "What this role means in practice",
        paragraphs: [
          "In broad terms, a regression therapist works with hypnosis-based or related focused-attention methods to help clients explore emotionally significant experiences, inner reactions, images, and repeating patterns. But the title alone guarantees very little. What matters is training, ethics, safety awareness, and how the practitioner handles memory, interpretation, and emotional intensity.",
          "A reliable practitioner does not position themselves as an all-knowing authority. Their value lies in creating a structured, attentive, and psychologically safe process that helps the client understand themselves more clearly.",
        ],
      },
      {
        title: "What people commonly seek help with",
        paragraphs: [
          "People often reach out because of anxiety, chronic inner tension, emotional exhaustion, repeating relationship patterns, low self-worth, fear of closeness, feeling stuck, or reactions that seem stronger than the current situation alone would explain.",
          "In these cases, the person is often not looking only for conversation. They want to understand why certain reactions keep repeating and what emotional roots may be sustaining them.",
        ],
      },
      {
        title: "Signs that a practitioner is working responsibly",
        items: [
          "explains the method clearly without mystical overclaiming",
          "begins with consultation and assessment instead of pushing directly into an intense session",
          "does not impose interpretations or claim certainty about what you “really experienced”",
          "speaks openly about limits, contraindications, and when another form of care is needed",
          "does not promise guaranteed results after a single meeting",
          "takes emotional stability, post-session integration, and boundaries seriously",
        ],
      },
      {
        title: "When caution is justified",
        paragraphs: [
          "A warning sign is a practitioner who immediately promises to reveal hidden truths, uses pressure, dramatizes the process, or treats their own interpretations as unquestionable facts. It is also risky when someone ignores psychiatric or medical concerns and presents the method as suitable for everyone.",
          "Extra caution is especially important in any work involving memory, trauma, and high emotional intensity. Memory is suggestible, and a responsible practitioner should avoid leading questions or confident claims that go beyond what can safely be known.",
        ],
      },
      {
        title: "When another kind of support may be better",
        paragraphs: [
          "There are situations in which the primary professional should not be a regression therapist but a physician, psychiatrist, or licensed mental health clinician. Severe instability, acute crisis, major psychiatric symptoms, seizure-related concerns, recent overwhelming trauma, or serious safety doubts all call for careful professional assessment first.",
          "A trustworthy practitioner should not treat that as failure. Knowing when not to proceed is part of professional maturity.",
        ],
      },
      {
        title: "What a realistic benefit looks like",
        paragraphs: [
          "A realistic outcome is not magical transformation. More grounded benefits include clearer self-understanding, reduced emotional pressure, new awareness of repeated patterns, and a stronger sense of internal stability.",
          "That is often where the real value of the work lies: not in dramatic promises, but in helping a person relate to themselves with more clarity and less confusion.",
        ],
      },
    ],
    faqTitle: "Common Questions",
    faqs: [
      {
        question: "Can I choose a regression therapist based only on social media?",
        answer:
          "It is better not to rely on that alone. Social media may show communication style, but a consultation is much more useful for assessing approach, boundaries, and safety awareness.",
      },
      {
        question: "Should a therapist promise results?",
        answer:
          "No. A responsible professional can explain possible benefits, but should not guarantee the same outcome for every person.",
      },
      {
        question: "Is it normal to start with consultation instead of a full session?",
        answer:
          "Yes. In fact, that is usually a healthier sign. Consultation helps determine whether the format fits your request and whether it can be approached safely.",
      },
    ],
    serviceBoxTitle: "Main service page",
    serviceBoxText:
      "If you already understand what this kind of specialist does and want to move into the practical session format, the main service page covers the structure of the work and the booking path.",
    serviceBoxLink: "Open service page",
    ctaTitle: "Want to discuss your request before booking?",
    ctaText:
      "Start with a consultation to assess whether regression-oriented work is appropriate and how to approach it safely.",
    ctaButton: "Book now",
    backLabel: "Back to home",
  },
  it: {
    title: "Regressologa Online: Quando Rivolgersi e Come Scegliere il Professionista | RaisaRegress",
    description:
      "Chi è una regressologa online, con quali richieste lavora, come valutare una professionista e quando può essere più adatto un altro tipo di aiuto.",
    keywords:
      "regressologa online, come scegliere regressologa, consulenza regressiva online, con quali richieste lavora regressologa",
    heading: "Regressologa Online",
    intro:
      "Quando una persona cerca una regressologa online, di solito non cerca una definizione teorica, ma risposte pratiche: se questo formato può essere utile, se è sicuro e come distinguere una professionista attenta da qualcuno che fa promesse esagerate o rischiose. È questo lo scopo concreto della pagina.",
    sections: [
      {
        title: "Cosa significa questo ruolo nella pratica",
        paragraphs: [
          "In senso ampio, una regressologa lavora con tecniche basate sull'ipnosi o su stati di attenzione focalizzata per aiutare il cliente a esplorare vissuti emotivamente significativi, reazioni interiori, immagini e schemi ricorrenti. Però il titolo da solo non garantisce molto. Contano davvero la formazione, l'etica, l'attenzione alla sicurezza e il modo in cui vengono trattati memoria, interpretazione e intensità emotiva.",
          "Una professionista affidabile non si presenta come autorità onnisciente. Il suo valore sta nel creare un processo strutturato, attento e psicologicamente sicuro che aiuti il cliente a comprendersi con più chiarezza.",
        ],
      },
      {
        title: "Con quali richieste le persone si rivolgono più spesso",
        paragraphs: [
          "Le richieste più frequenti riguardano ansia, tensione interiore cronica, esaurimento emotivo, schemi relazionali ripetitivi, bassa autostima, paura della vicinanza, sensazione di stallo o reazioni che sembrano eccessive rispetto alla situazione presente.",
          "In questi casi la persona spesso non cerca soltanto una conversazione, ma vuole capire perché certe reazioni continuano a ripetersi e quali radici emotive le sostengono.",
        ],
      },
      {
        title: "Segnali di un lavoro svolto in modo responsabile",
        items: [
          "spiega il metodo in modo chiaro senza promesse mistiche",
          "inizia con una consulenza e una valutazione invece di spingere subito verso una seduta intensa",
          "non impone interpretazioni e non afferma con certezza cosa hai “davvero vissuto”",
          "parla apertamente di limiti, controindicazioni e casi in cui serve un altro tipo di supporto",
          "non promette risultati garantiti dopo un solo incontro",
          "prende sul serio stabilità emotiva, integrazione post-seduta e confini professionali",
        ],
      },
      {
        title: "Quando è giusto essere cauti",
        paragraphs: [
          "Un segnale d'allarme è una professionista che promette subito di rivelare verità nascoste, usa pressione, drammatizza il processo o presenta le proprie interpretazioni come fatti assoluti. È rischioso anche chi ignora aspetti psichiatrici o medici e presenta il metodo come adatto a tutti.",
          "Serve particolare cautela in qualsiasi lavoro che coinvolga memoria, trauma e forte intensità emotiva. La memoria è influenzabile, e una professionista responsabile evita domande guidanti o affermazioni sicure oltre ciò che si può conoscere in modo prudente.",
        ],
      },
      {
        title: "Quando può essere meglio un altro tipo di aiuto",
        paragraphs: [
          "Ci sono situazioni in cui il professionista di riferimento non dovrebbe essere una regressologa ma un medico, uno psichiatra o uno psicoterapeuta abilitato. Instabilità severa, crisi acuta, sintomi psichiatrici importanti, rischio di convulsioni, trauma recente travolgente o dubbi seri sulla sicurezza richiedono prima una valutazione adeguata.",
          "Una professionista affidabile non vive questo come una perdita. Sapere quando non procedere è parte della maturità professionale.",
        ],
      },
      {
        title: "Quale beneficio è realistico aspettarsi",
        paragraphs: [
          "Un esito realistico non è una trasformazione magica. Benefici più concreti possono essere una comprensione più chiara di sé, meno pressione emotiva, maggiore consapevolezza dei propri schemi e una sensazione più stabile di appoggio interno.",
          "È spesso qui che si trova il valore reale del lavoro: non nelle promesse spettacolari, ma nell'aiutare la persona a relazionarsi con se stessa in modo più lucido e meno confuso.",
        ],
      },
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "Posso scegliere una regressologa solo in base ai social?",
        answer:
          "Meglio di no. I social possono mostrare lo stile comunicativo, ma una consulenza è molto più utile per capire approccio, confini e attenzione alla sicurezza.",
      },
      {
        question: "Una professionista dovrebbe promettere risultati?",
        answer:
          "No. Una professionista seria può spiegare i possibili benefici, ma non dovrebbe garantire lo stesso risultato per tutte le persone.",
      },
      {
        question: "È normale iniziare con una consulenza invece che con una seduta completa?",
        answer:
          "Sì. Anzi, spesso è un segnale più sano. La consulenza aiuta a capire se il formato è adatto alla tua richiesta e se può essere affrontato in sicurezza.",
      },
    ],
    serviceBoxTitle: "Pagina principale del servizio",
    serviceBoxText:
      "Se hai già chiaro cosa fa questo tipo di professionista e vuoi passare al formato pratico della seduta, nella pagina principale trovi struttura del lavoro e modalità di prenotazione.",
    serviceBoxLink: "Apri la pagina del servizio",
    ctaTitle: "Vuoi parlare della tua richiesta prima di prenotare?",
    ctaText:
      "Inizia con una consulenza per valutare se il lavoro regressivo è adatto e come impostarlo in modo sicuro.",
    ctaButton: "Prenota",
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
  const canonicalPath = getLocalizedPath(locale, "regressologist-online");
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
      ...getLanguageAlternates("regressologist-online"),
    },
  };
}

export default async function RegressologistOnlinePage({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const copy = content[locale];
  const canonicalPath = getLocalizedPath(locale, "regressologist-online");
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
