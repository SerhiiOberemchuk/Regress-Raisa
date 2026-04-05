import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/design-system";
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
    title: "Чи безпечна регресія: протипоказання, межі методу і підготовка | RaisaRegress",
    description:
      "Чи безпечна регресія, кому може підходити формат, які є протипоказання, що потрібно врахувати перед онлайн-сеансом і чому важлива попередня оцінка стану.",
    keywords:
      "чи безпечна регресія, протипоказання регресивного гіпнозу, безпека регресії онлайн, кому не підходить регресія",
    heading: "Безпека, протипоказання і підготовка",
    intro:
      "Питання безпеки в регресивній роботі є важливішим за будь-які красиві обіцянки. Сам по собі гіпноз часто описують як відносно безпечний інструмент, але реальна безпека залежить не від слова “гіпноз”, а від трьох речей: правильного відбору клієнтів, компетентності спеціаліста і чесного розуміння меж методу. Саме тому ця сторінка пояснює не лише кому формат може підходити, а й коли краще не поспішати або обрати інший вид допомоги.",
    sections: [
      {
        title: "Що означає “безпечний формат” на практиці",
        paragraphs: [
          "Безпечний формат це не просто приємна атмосфера або м’який голос спеціаліста. Це ситуація, у якій клієнт достатньо стабільний для внутрішньої роботи, фахівець розуміє межі своєї компетенції, а сам процес будується без тиску, драматизації та нав’язування інтерпретацій.",
          "Інакше кажучи, безпека в регресивній роботі починається ще до сесії. Якщо спеціаліст не ставить запитань про стан людини, не цікавиться ризиками, не пояснює межі формату і не говорить про протипоказання, це вже поганий знак незалежно від того, наскільки “духовно” або впевнено звучить його подача.",
        ],
      },
      {
        title: "Кому формат може підходити",
        paragraphs: [
          "Регресивна робота частіше буває доречною для дорослих людей, які перебувають у достатньо стабільному стані, можуть підтримувати контакт із собою в емоційному процесі і хочуть глибше дослідити коріння тривоги, страхів, внутрішніх блоків або повторюваних життєвих сценаріїв.",
          "Також важливо, щоб людина мала реалістичні очікування. Якщо клієнт розуміє, що йдеться не про магічне вирішення всіх проблем, а про уважну внутрішню роботу, шанси на безпечний і корисний процес значно вищі.",
        ],
      },
      {
        title: "Коли потрібна особлива обережність",
        items: [
          "гострі психіатричні стани або тяжкі психічні симптоми",
          "сильна дестабілізація, гостра криза, виражена дезорієнтація",
          "епілепсія чи інші стани, де потрібна окрема медична оцінка",
          "нещодавня тяжка травма без достатнього ресурсу для стабілізації",
          "алкогольне або наркотичне сп'яніння",
          "ситуації, де людині спершу потрібен лікар або ліцензований психотерапевт",
        ],
      },
      {
        title: "Чому попередня оцінка є частиною безпеки",
        paragraphs: [
          "Одна з найважливіших ознак відповідального підходу це попередня консультація або принаймні оцінка стану людини до основної сесії. На цьому етапі з’ясовується не лише запит, а й те, чи підходить людині саме цей формат, чи є медичні або психологічні ризики, чи не буде занадто інтенсивною така робота саме зараз.",
          "Якщо спеціаліст готовий одразу проводити “глибоку регресію” без жодних уточнень, це не виглядає професійно. Безпека починається з уміння вчасно сказати: спершу потрібно розібратися, чи доречно це саме для вас.",
        ],
      },
      {
        title: "Чому важливо не перебільшувати можливості методу",
        paragraphs: [
          "Регресивний гіпноз не є універсальним лікуванням і не повинен підміняти належну медичну або психотерапевтичну допомогу. Це важливо проговорювати прямо, бо саме перебільшені обіцянки найчастіше створюють ризик для людини, яка перебуває у вразливому стані.",
          "Найбезпечніша позиція це чесно визнавати: метод може бути корисним у певних випадках, але не є відповіддю на все. Такий підхід не знецінює роботу, а навпаки робить її більш дорослою й надійною.",
        ],
      },
      {
        title: "Як підготуватися до безпечного онлайн-сеансу",
        paragraphs: [
          "Підготовка починається з простих речей: тихе місце без переривань, стабільний інтернет, навушники, вода поруч, достатньо часу без поспіху після сесії. Але технічна підготовка це лише половина справи.",
          "Не менш важливо заздалегідь повідомити про значущі медичні стани, психіатричний анамнез, сильні реакції на стрес, недавні кризи або будь-які сумніви щодо формату. Для фахівця це не “зайва інформація”, а база для безпечного рішення.",
        ],
      },
      {
        title: "Що вважати реально безпечним результатом",
        paragraphs: [
          "Безпечний результат це не обов’язково сильний катарсис або драматичне переживання. Часто набагато здоровішою ознакою є те, що людина виходить із процесу більш зібраною, з кращим розумінням себе, без перевантаження і без відчуття, що її “розкрили” сильніше, ніж вона могла витримати.",
          "У хорошій практиці глибина не повинна суперечити стабільності. Якщо після сесії людина почувається повністю вибитою, дезорієнтованою або покинутою без опори, це вже питання не лише до її чутливості, а й до якості ведення процесу.",
        ],
      },
    ],
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Чи є гіпноз сам по собі небезпечним?",
        answer:
          "Не обов’язково. Але безпека залежить від стану людини, якості попередньої оцінки, кваліфікації спеціаліста і того, чи не використовується метод поза межами його реальних можливостей.",
      },
      {
        question: "Чи можна приховати важливі медичні або психологічні обставини?",
        answer:
          "Не варто. Інформація про ваш стан потрібна не для формальності, а для того, щоб зрозуміти, чи доречний формат і як не нашкодити.",
      },
      {
        question: "Що робити, якщо є сумнів, чи підходить мені цей формат?",
        answer:
          "Найрозумніший перший крок це консультація. Саме вона допомагає оцінити ризики, очікування і можливість безпечної роботи саме у вашому випадку.",
      },
    ],
    serviceBoxTitle: "Основна сторінка послуги",
    serviceBoxText:
      "Ця сторінка присвячена безпеці та межам методу. Для опису самого формату сеансу і запису перейдіть на основну сторінку послуги.",
    serviceBoxLink: "Перейти до послуги",
    ctaTitle: "Маєте сумніви щодо безпеки саме у вашій ситуації?",
    ctaText:
      "Почніть із консультації, щоб обговорити стан, ризики, протипоказання і доречність формату до запису на сесію.",
    ctaButton: "Записатися на консультацію",
    backLabel: "На головну",
  },
  en: {
    title: "Is Regression Safe? Contraindications, Limits, and Preparation | RaisaRegress",
    description:
      "Is regression work safe, who the format may suit, what the main contraindications are, and how to think about safety before an online session.",
    keywords:
      "is regression safe, regression hypnosis contraindications, online hypnosis safety, who should avoid regression work",
    heading: "Safety, Contraindications, and Preparation",
    intro:
      "Questions about safety matter more than attractive promises. Hypnosis is often described as a relatively safe tool, but real safety depends less on the word itself and more on three things: appropriate screening, practitioner competence, and a realistic understanding of the method’s limits. That is what this page is designed to explain.",
    sections: [
      {
        title: "What a safe format means in practice",
        paragraphs: [
          "A safe format is not just a calm voice or a pleasant atmosphere. It means the client is stable enough for inner work, the practitioner understands the limits of their competence, and the process is guided without pressure, dramatization, or imposed interpretation.",
          "In other words, safety begins before the session itself. If a practitioner does not ask about relevant risks, current condition, or contraindications, that is already a concern regardless of how confident or polished their presentation may seem.",
        ],
      },
      {
        title: "Who the format may suit",
        paragraphs: [
          "Regression-oriented work may be more appropriate for adults who are sufficiently stable, able to remain in contact with themselves during emotional work, and interested in exploring the roots of anxiety, fears, inner blocks, or repeated life patterns.",
          "It also helps when the person has realistic expectations. If they understand that this is not a magical cure but a structured form of inner work, the process is much more likely to remain both useful and safe.",
        ],
      },
      {
        title: "When extra caution is needed",
        items: [
          "acute psychiatric states or severe mental health symptoms",
          "strong destabilization, crisis, or severe disorientation",
          "epilepsy or conditions that require separate medical review",
          "recent overwhelming trauma without enough stabilization resources",
          "alcohol or substance intoxication",
          "situations in which a physician or licensed psychotherapist should come first",
        ],
      },
      {
        title: "Why screening is part of safety",
        paragraphs: [
          "One of the strongest signs of responsible practice is preliminary consultation or at least a meaningful pre-session assessment. This should clarify not only the request but also whether the format is appropriate, whether there are medical or psychological risks, and whether the timing is right.",
          "If someone is willing to move straight into a deep session without asking these questions, that does not look professionally careful. Safety starts with the ability to say: first we need to assess whether this is appropriate for you.",
        ],
      },
      {
        title: "Why the method’s limits should not be exaggerated",
        paragraphs: [
          "Regression hypnosis is not a universal treatment and should not replace appropriate medical or psychotherapeutic care. It is important to say this clearly because exaggerated claims are often what create risk for vulnerable clients.",
          "The safest stance is a realistic one: the method may be helpful in some circumstances, but it is not the answer to everything. That does not weaken the work. It makes it more credible and professionally grounded.",
        ],
      },
      {
        title: "How to prepare for a safer online session",
        paragraphs: [
          "Practical preparation includes a quiet place, stable internet, headphones, water nearby, and enough time after the session so you do not need to rush back into obligations. But technical readiness is only part of the picture.",
          "It is equally important to share relevant medical conditions, psychiatric history, stress-related reactions, recent crises, or any doubts about the format. For a responsible practitioner, this is not extra detail. It is part of safe decision-making.",
        ],
      },
      {
        title: "What a safe outcome looks like",
        paragraphs: [
          "A safe outcome does not have to mean dramatic catharsis. In many cases, a healthier sign is that the person leaves the process more oriented, more self-aware, and not emotionally overwhelmed beyond their capacity.",
          "Good work does not confuse intensity with quality. If a person leaves feeling completely uncontained, disorganized, or unsupported, that raises questions not only about their sensitivity but also about the way the process was led.",
        ],
      },
    ],
    faqTitle: "Common Questions",
    faqs: [
      {
        question: "Is hypnosis dangerous by itself?",
        answer:
          "Not necessarily. But safety depends on the person’s condition, the quality of screening, the practitioner’s competence, and whether the method is being used within appropriate limits.",
      },
      {
        question: "Should I hide important medical or psychological information?",
        answer:
          "No. Sharing relevant information is important because it helps determine whether the format is appropriate and how to reduce risk.",
      },
      {
        question: "What if I am unsure whether this format is right for me?",
        answer:
          "The most reasonable first step is consultation. That is where risks, expectations, and appropriateness can be assessed more carefully.",
      },
    ],
    serviceBoxTitle: "Main service page",
    serviceBoxText:
      "This page is focused on safety and the limits of the method. For the practical structure of the session and booking path, use the main service page.",
    serviceBoxLink: "Open service page",
    ctaTitle: "Unsure about safety in your specific situation?",
    ctaText:
      "Start with a consultation to discuss your condition, possible risks, contraindications, and whether the format is appropriate before booking a session.",
    ctaButton: "Book a consultation",
    backLabel: "Back to home",
  },
  it: {
    title: "La Regressione è Sicura? Controindicazioni, Limiti e Preparazione | RaisaRegress",
    description:
      "La regressione è sicura, per chi il formato può essere adatto, quali sono le principali controindicazioni e come valutare la sicurezza prima di una sessione online.",
    keywords:
      "regressione sicura, controindicazioni ipnosi regressiva, sicurezza ipnosi online, chi dovrebbe evitare regressione",
    heading: "Sicurezza, Controindicazioni e Preparazione",
    intro:
      "Le domande sulla sicurezza contano più di qualsiasi promessa attraente. L'ipnosi viene spesso descritta come uno strumento relativamente sicuro, ma la sicurezza reale dipende meno dalla parola stessa e molto di più da tre fattori: una buona valutazione iniziale, la competenza della professionista e una comprensione realistica dei limiti del metodo. È questo che la pagina vuole chiarire.",
    sections: [
      {
        title: "Cosa significa un formato sicuro nella pratica",
        paragraphs: [
          "Un formato sicuro non è solo una voce calma o un'atmosfera piacevole. Significa che la persona è sufficientemente stabile per il lavoro interiore, che la professionista conosce i limiti della propria competenza e che il processo viene condotto senza pressione, drammatizzazione o interpretazioni imposte.",
          "In altre parole, la sicurezza comincia prima ancora della seduta. Se una professionista non chiede nulla su rischi, stato attuale o controindicazioni, questo è già un problema indipendentemente da quanto la sua presentazione appaia sicura o convincente.",
        ],
      },
      {
        title: "Per chi il formato può essere adatto",
        paragraphs: [
          "Il lavoro regressivo può essere più adatto ad adulti abbastanza stabili, capaci di restare in contatto con se stessi durante un processo emotivo e interessati a esplorare radici di ansia, paure, blocchi interiori o schemi ripetitivi.",
          "Aiuta anche avere aspettative realistiche. Quando una persona comprende che non si tratta di una soluzione magica ma di un lavoro interiore strutturato, il processo ha molte più probabilità di restare utile e sicuro.",
        ],
      },
      {
        title: "Quando serve particolare cautela",
        items: [
          "stati psichiatrici acuti o sintomi mentali gravi",
          "forte destabilizzazione, crisi o grave disorientamento",
          "epilessia o condizioni che richiedono una valutazione medica separata",
          "trauma recente molto intenso senza risorse sufficienti di stabilizzazione",
          "intossicazione da alcol o sostanze",
          "situazioni in cui dovrebbe intervenire prima un medico o uno psicoterapeuta abilitato",
        ],
      },
      {
        title: "Perché la valutazione iniziale fa parte della sicurezza",
        paragraphs: [
          "Uno dei segni più forti di pratica responsabile è una consulenza preliminare o almeno una valutazione significativa prima della seduta. Questo passaggio dovrebbe chiarire non solo la richiesta, ma anche se il formato è adatto, se esistono rischi medici o psicologici e se il momento è corretto.",
          "Se qualcuno è disposto a entrare subito in una seduta profonda senza fare queste domande, non sta mostrando vera prudenza professionale. La sicurezza comincia con la capacità di dire: prima dobbiamo capire se questo è adatto a te.",
        ],
      },
      {
        title: "Perché non bisogna esagerare i limiti del metodo",
        paragraphs: [
          "L'ipnosi regressiva non è un trattamento universale e non dovrebbe sostituire cure mediche o psicoterapeutiche appropriate. È importante dirlo chiaramente perché le promesse eccessive sono spesso ciò che crea rischio per persone già vulnerabili.",
          "La posizione più sicura è quella realistica: il metodo può essere utile in alcune circostanze, ma non è la risposta a tutto. Questo non indebolisce il lavoro. Lo rende più credibile e più serio.",
        ],
      },
      {
        title: "Come prepararsi a una sessione online più sicura",
        paragraphs: [
          "La preparazione pratica include un luogo tranquillo, connessione stabile, cuffie, acqua vicino e tempo sufficiente dopo la seduta per non dover rientrare subito negli impegni. Ma la preparazione tecnica è solo una parte.",
          "È altrettanto importante condividere condizioni mediche rilevanti, storia psichiatrica, reazioni intense allo stress, crisi recenti o qualsiasi dubbio sul formato. Per una professionista responsabile questi dettagli non sono secondari: fanno parte della decisione sicura.",
        ],
      },
      {
        title: "Quale risultato si può considerare sicuro",
        paragraphs: [
          "Un risultato sicuro non deve per forza coincidere con un'esperienza drammatica o catartica. Spesso un segnale più sano è che la persona esca dal processo più orientata, più consapevole di sé e non travolta oltre la propria capacità di tenuta.",
          "Un buon lavoro non confonde l'intensità con la qualità. Se una persona esce completamente disorganizzata, senza contenimento o senza sostegno, questo pone domande non solo sulla sua sensibilità ma anche sul modo in cui la seduta è stata condotta.",
        ],
      },
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "L'ipnosi è pericolosa di per sé?",
        answer:
          "Non necessariamente. Ma la sicurezza dipende dalla condizione della persona, dalla qualità della valutazione iniziale, dalla competenza della professionista e dall'uso del metodo entro limiti appropriati.",
      },
      {
        question: "È meglio non parlare di aspetti medici o psicologici delicati?",
        answer:
          "No. Condividere informazioni rilevanti è importante perché aiuta a capire se il formato è adatto e come ridurre i rischi.",
      },
      {
        question: "Cosa fare se non sono sicuro che questo formato faccia per me?",
        answer:
          "Il primo passo più ragionevole è la consulenza. È lì che si possono valutare con più attenzione rischi, aspettative e adeguatezza del percorso.",
      },
    ],
    serviceBoxTitle: "Pagina principale del servizio",
    serviceBoxText:
      "Questa pagina è dedicata alla sicurezza e ai limiti del metodo. Per la struttura pratica della seduta e il percorso di prenotazione, usa la pagina principale del servizio.",
    serviceBoxLink: "Apri la pagina del servizio",
    ctaTitle: "Hai dubbi sulla sicurezza nel tuo caso specifico?",
    ctaText:
      "Inizia con una consulenza per parlare della tua condizione, dei possibili rischi, delle controindicazioni e dell'adeguatezza del formato prima di prenotare.",
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
  const canonicalPath = getLocalizedPath(locale, "regression-therapy-safety");
  const canonicalUrl = getAbsoluteUrl(canonicalPath);

  return (
    <main className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
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
      <article className="mx-auto max-w-4xl space-y-10 rounded-[2rem] border border-border/70 bg-[rgba(255,251,246,0.82)] p-6 shadow-[0_34px_90px_-60px_rgba(54,36,25,0.42)] md:p-10">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {copy.backLabel}
          </Link>
        </Button>

        <header className="space-y-5">
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.26em] text-primary/65">
            Safety guide
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
