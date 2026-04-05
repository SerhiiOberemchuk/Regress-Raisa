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

type SessionStep = {
  title: string;
  text: string;
};

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
    title: "Як проходить сеанс регресії онлайн | RaisaRegress",
    description:
      "Як проходить сеанс регресії онлайн: попередня консультація, підготовка простору, етапи роботи, безпека, обмеження формату та чого реально очікувати після сесії.",
    keywords:
      "як проходить сеанс регресії онлайн, онлайн сеанс регресії, підготовка до регресивного гіпнозу, формат регресії онлайн",
    heading: "Як проходить сеанс регресії онлайн",
    intro:
      "Онлайн-сеанс регресії це не спрощена версія очної роботи, а повноцінний формат, який вимагає хорошої підготовки, стабільного контакту та чітких меж безпеки. Практична цінність цієї сторінки в тому, щоб чесно пояснити, як виглядає процес: від першої розмови й технічної підготовки до самої сесії, завершення та періоду інтеграції після роботи.",
    sections: [
      {
        title: "Коли онлайн-формат може бути доречним",
        paragraphs: [
          "Онлайн-робота підходить не всім, але для багатьох людей вона є реально зручною й ефективною. Якщо клієнт може забезпечити приватний простір, стабільний зв’язок, достатньо часу без переривань і почувається досить зібрано для внутрішньої роботи, дистанційний формат цілком може бути робочим.",
          "Перевага онлайн-сеансу в тому, що людина залишається у знайомому середовищі. Для частини клієнтів це знижує напругу, допомагає швидше розслабитися і дає більше відчуття контролю. Але саме тому фахівець має окремо оцінювати, чи не стане домашній простір додатковим джерелом ризику або відволікань.",
        ],
      },
      {
        title: "Що відбувається до основної сесії",
        paragraphs: [
          "Якісна робота починається не з індукції, а з розмови про запит, стан клієнта та межі формату. На попередньому етапі важливо зрозуміти, з чим саме людина звертається, які симптоми її турбують, чи є психіатричні або неврологічні ризики, чи був досвід гострої травми, і чи доречно взагалі обирати гіпнотичний формат у цій ситуації.",
          "Цей етап також потрібен для узгодження очікувань. Відповідальний спеціаліст не обіцяє “миттєве зцілення” і не підштовхує клієнта до драматичних сценаріїв. Навпаки, він пояснює структуру роботи, можливі реакції під час сеансу, межі методу і те, що онлайн-формат потребує активної співпраці з боку самої людини.",
        ],
      },
      {
        title: "Як підготувати простір і техніку",
        paragraphs: [
          "Для онлайн-сеансу потрібне місце, де вас ніхто не буде турбувати щонайменше дві-три години. Бажано попередньо вимкнути сповіщення, попросити близьких не заходити, підготувати воду, навушники, ковдру або все, що допомагає почуватися стабільно й спокійно.",
          "Не менш важлива технічна частина: стабільний інтернет, заряджений телефон або ноутбук, резервний спосіб зв’язку на випадок збою, нормальний звук і камера, яка дозволяє фахівцю бачити, як ви реагуєте. У серйозній роботі технічна надійність це не дрібниця, а частина безпеки.",
        ],
      },
      {
        title: "Як зазвичай структурована сама сесія",
        paragraphs: [
          "Після короткого входу в роботу людина переходить у більш спокійний і зосереджений стан через голосові інструкції, дихання, образи або інші техніки м’якого наведення. У цей момент важливо розуміти, що клієнт не “зникає” з процесу: він чує, відчуває, реагує і залишається в контакті.",
          "Далі фахівець супроводжує людину в дослідженні переживань, асоціацій, образів, тілесних реакцій або значущих спогадів, які пов’язані з її запитом. Темп має бути керованим, без тиску і без навідних тверджень. Якщо емоційна напруга зростає, коректна робота полягає не в тому, щоб продавити процес, а в тому, щоб стабілізувати людину і не втратити відчуття безпеки.",
        ],
      },
      {
        title: "Що відбувається після активної частини",
        paragraphs: [
          "Після завершення глибокої частини сесії важливо не стрибати одразу в побутові справи. Потрібен час на повернення до звичайного стану, коротке обговорення досвіду, фіксацію важливих спостережень і м’яке завершення процесу.",
          "У деяких людей після сесії може бути відчуття полегшення, ясності або спокою. В інших навпаки може з’явитися втома, емоційна чутливість, потреба в тиші або бажання ще певний час побути наодинці. Саме тому хороший фахівець дає рекомендації щодо найближчих годин і наступних днів, а не завершує контакт однією фразою “на цьому все”.",
        ],
      },
      {
        title: "Чого реально очікувати від онлайн-сеансу",
        paragraphs: [
          "Реалістичне очікування це не магічний перелом життя за одну зустріч. Для одних людей сесія може дати сильне відчуття зрушення вже одразу, для інших результат проявляється поступово через нові усвідомлення, зміну емоційної реакції або краще розуміння власних патернів.",
          "Корисно заздалегідь прийняти, що онлайн-сеанс це частина процесу, а не ідеальний “момент істини”. Його якість залежить від підготовки, від стану клієнта, від безпеки контакту зі спеціалістом і від того, наскільки обережно та професійно побудована робота.",
        ],
      },
      {
        title: "Коли варто бути особливо обережними",
        paragraphs: [
          "Якщо у людини є важка дестабілізація, гостра криза, психіатричні симптоми, нещодавня сильна травма, епілепсія або інші стани, що потребують окремого медичного контролю, рішення про такий формат потрібно приймати дуже обережно. У деяких ситуаціях спершу доречніша консультація лікаря або ліцензованого спеціаліста з психічного здоров’я.",
          "Онлайн-формат не повинен підміняти належну медичну чи психотерапевтичну допомогу. Його сила не в універсальності, а в тому, що він може бути корисним інструментом у правильно підібраних умовах і з кваліфікованим супроводом.",
        ],
      },
    ],
    stepsTitle: "Типова структура онлайн-сеансу",
    steps: [
      {
        title: "1. Попередня консультація",
        text: "Уточнення запиту, оцінка стану, розмова про безпеку, межі формату та реалістичні очікування.",
      },
      {
        title: "2. Підготовка простору",
        text: "Приватне місце, стабільний інтернет, навушники, вода, достатньо часу без переривань і резервний канал зв’язку.",
      },
      {
        title: "3. Основна робота",
        text: "М’яке наведення, дослідження переживань, образів, тілесних реакцій або значущих спогадів у керованому темпі.",
      },
      {
        title: "4. Завершення та інтеграція",
        text: "Повернення до звичайного стану, коротке обговорення досвіду, рекомендації на найближчий час після сесії.",
      },
    ],
    faqTitle: "Поширені запитання",
    faqs: [
      {
        question: "Чи онлайн-сеанс слабший за очний формат?",
        answer:
          "Не обов’язково. Для багатьох людей онлайн-формат може бути цілком робочим, якщо є тиша, стабільний зв’язок, безпечний простір і коректно побудований процес.",
      },
      {
        question: "Скільки часу варто закладати на сесію?",
        answer:
          "Зазвичай потрібно закладати не лише час на саму глибоку роботу, а й на вхід у процес та завершення. Практично це означає мати кілька годин без поспіху й зовнішніх справ одразу після зустрічі.",
      },
      {
        question: "Що робити, якщо під час сесії стане занадто емоційно?",
        answer:
          "Саме тому важливий кваліфікований супровід. Завдання спеціаліста не форсувати переживання, а допомогти людині зберегти орієнтацію, стабілізуватися й рухатися в безпечному темпі.",
      },
    ],
    serviceBoxTitle: "Основна сторінка послуги",
    serviceBoxText:
      "Ця сторінка пояснює, як виглядає процес. Якщо ви вже готові перейти від опису формату до самої послуги, на основній сторінці зібрано практичну інформацію про сеанс і запис.",
    serviceBoxLink: "До сторінки послуги",
    ctaTitle: "Потрібно оцінити, чи підходить вам онлайн-формат?",
    ctaText:
      "Напишіть у форму зворотного зв’язку, щоб обговорити ваш запит, ризики, очікування і підготовку до сесії.",
    ctaButton: "Обговорити формат",
    backLabel: "На головну",
  },
  en: {
    title: "How an Online Regression Session Works | RaisaRegress",
    description:
      "How an online regression session is usually structured, how to prepare your space, what to expect during the process, and where the limits of the format are.",
    keywords:
      "how an online regression session works, online regression session format, preparing for hypnotherapy online, what to expect in regression session",
    heading: "How an Online Regression Session Works",
    intro:
      "An online regression session is not simply a video call version of in-person work. When done properly, it is a structured therapeutic format that depends on preparation, privacy, technical stability, and a clear sense of safety. This page is meant to explain what the process usually looks like before, during, and after the session.",
    sections: [
      {
        title: "When the online format may be appropriate",
        paragraphs: [
          "Online work can be practical and effective for many people, but it is not automatically suitable for everyone. It tends to work best when the client can ensure privacy, stable internet, enough uninterrupted time, and a calm enough internal state to stay engaged in the process.",
          "For some people, being in their own space actually makes it easier to relax and stay grounded. At the same time, the practitioner needs to consider whether that same environment could create risks, distractions, or a weaker sense of containment.",
        ],
      },
      {
        title: "What happens before the main session",
        paragraphs: [
          "Good work begins before any hypnotic induction. A proper preliminary conversation clarifies the client’s request, emotional state, expectations, and any important safety concerns such as severe instability, neurological issues, recent trauma, or mental health risks.",
          "This stage also helps prevent unrealistic expectations. A responsible practitioner should explain the structure of the session, the limits of the method, and the fact that hypnosis is not a shortcut that replaces appropriate medical or psychological care.",
        ],
      },
      {
        title: "How to prepare your space and technology",
        paragraphs: [
          "You need a private place where no one will interrupt you for at least two to three hours. It helps to mute notifications, tell others not to disturb you, keep water nearby, and use comfortable headphones if possible.",
          "Technical reliability matters more than people often assume. A stable connection, charged device, working camera, clear sound, and a backup way to reconnect are all part of the safety structure of online work.",
        ],
      },
      {
        title: "How the session itself is usually structured",
        paragraphs: [
          "After a brief settling-in phase, the practitioner guides the client into a calmer and more focused state through voice, breathing, imagery, or other gentle techniques. The client does not disappear into the process. They remain engaged, responsive, and able to communicate.",
          "From there, the work may involve emotionally significant experiences, images, sensations, remembered situations, or recurring inner reactions linked to the request. In careful practice, the pace should remain manageable and the practitioner should avoid pressure, dramatization, or leading interpretation.",
        ],
      },
      {
        title: "What happens after the active part of the session",
        paragraphs: [
          "A session should not end abruptly the moment intense material has been explored. There needs to be time to return to an ordinary state, reflect briefly on the experience, and identify what feels most important or unfinished.",
          "Some people feel lighter or clearer afterward. Others may feel tired, emotionally open, or in need of quiet time. That variation is normal, which is why post-session recommendations matter.",
        ],
      },
      {
        title: "What to realistically expect",
        paragraphs: [
          "A realistic expectation is not instant transformation. For some people, one session may create a noticeable shift. For others, the effect is more gradual and shows up as increased insight, emotional relief, or a change in how certain patterns are experienced.",
          "The quality of the outcome depends on preparation, the client’s current condition, the practitioner’s competence, and how carefully the process is held. Online work can be meaningful, but it is still real psychological work, not a quick dramatic fix.",
        ],
      },
      {
        title: "When extra caution is needed",
        paragraphs: [
          "If someone is in acute crisis, highly unstable, experiencing severe psychiatric symptoms, has a seizure history, or has unresolved safety concerns, online hypnosis should be approached very carefully. In some cases, a medical or licensed mental health consultation should come first.",
          "The online format should never be presented as a universal answer. Its strength is that it can be useful in the right conditions with an appropriately trained practitioner.",
        ],
      },
    ],
    stepsTitle: "Typical structure of an online session",
    steps: [
      {
        title: "1. Preliminary consultation",
        text: "Clarifying the request, assessing safety, discussing expectations, and deciding whether the format is appropriate.",
      },
      {
        title: "2. Space preparation",
        text: "Private room, stable connection, headphones, water, uninterrupted time, and a backup communication option.",
      },
      {
        title: "3. Core session work",
        text: "Gentle induction followed by structured exploration of emotions, images, sensations, and relevant experiences.",
      },
      {
        title: "4. Closing and integration",
        text: "Returning to an ordinary state, reflecting briefly on the experience, and receiving guidance for the hours after the session.",
      },
    ],
    faqTitle: "Common Questions",
    faqs: [
      {
        question: "Is an online session weaker than in-person work?",
        answer:
          "Not necessarily. For many people it can work well if privacy, technical stability, and emotional safety are in place.",
      },
      {
        question: "How much time should I set aside?",
        answer:
          "It is best to allow enough time not only for the session itself but also for settling in and winding down afterward. In practice, that usually means blocking several uninterrupted hours.",
      },
      {
        question: "What if I become very emotional during the session?",
        answer:
          "That is one reason professional guidance matters. The goal is not to force intensity, but to help you stay oriented, regulated, and supported throughout the process.",
      },
    ],
    serviceBoxTitle: "Main service page",
    serviceBoxText:
      "This page explains the structure of the process. If you are ready to move from understanding the format to booking the actual service, the main page covers the practical next steps.",
    serviceBoxLink: "Go to service page",
    ctaTitle: "Need to assess whether the online format is right for you?",
    ctaText:
      "Use the contact form to discuss your request, expectations, possible risks, and how to prepare safely.",
    ctaButton: "Discuss the format",
    backLabel: "Back to home",
  },
  it: {
    title: "Come Si Svolge una Sessione di Regressione Online | RaisaRegress",
    description:
      "Come si struttura di solito una sessione di regressione online, come preparare lo spazio, cosa aspettarsi durante il processo e quali sono i limiti del formato.",
    keywords:
      "come funziona una sessione di regressione online, formato sessione regressiva online, preparazione ipnosi online, cosa aspettarsi regressione",
    heading: "Come Si Svolge una Sessione di Regressione Online",
    intro:
      "Una sessione di regressione online non è semplicemente una videochiamata che sostituisce il lavoro in presenza. Quando è impostata bene, è un formato strutturato che richiede preparazione, privacy, stabilità tecnica e un chiaro contenitore di sicurezza. Questa pagina serve a spiegare come si svolge il processo prima, durante e dopo la seduta.",
    sections: [
      {
        title: "Quando il formato online può essere adatto",
        paragraphs: [
          "Il lavoro online può essere pratico ed efficace per molte persone, ma non è adatto automaticamente a tutti. Funziona meglio quando il cliente può garantire privacy, connessione stabile, tempo sufficiente senza interruzioni e uno stato interno abbastanza stabile per restare nel processo.",
          "Per alcune persone essere nel proprio ambiente rende più facile rilassarsi e sentirsi al sicuro. Allo stesso tempo il professionista deve valutare se quello stesso ambiente possa creare rischi, distrazioni o minore contenimento.",
        ],
      },
      {
        title: "Cosa accade prima della seduta principale",
        paragraphs: [
          "Un lavoro serio comincia prima di qualsiasi induzione. Un buon colloquio preliminare chiarisce la richiesta del cliente, il suo stato emotivo, le aspettative e gli eventuali aspetti di sicurezza, come forte instabilità, problemi neurologici, trauma recente o rischi psicologici rilevanti.",
          "Questa fase serve anche a evitare aspettative irrealistiche. Un professionista responsabile spiega la struttura della seduta, i limiti del metodo e il fatto che l'ipnosi non sostituisce cure mediche o psicologiche appropriate.",
        ],
      },
      {
        title: "Come preparare lo spazio e la parte tecnica",
        paragraphs: [
          "Serve un luogo privato dove nessuno ti interrompa per almeno due o tre ore. Aiuta silenziare le notifiche, avvisare chi vive con te, tenere acqua vicino e usare cuffie comode se possibile.",
          "L'affidabilità tecnica è parte della sicurezza. Connessione stabile, dispositivo carico, videocamera funzionante, audio chiaro e un modo alternativo per ristabilire il contatto in caso di problemi sono tutti elementi importanti del formato online.",
        ],
      },
      {
        title: "Come è strutturata di solito la seduta",
        paragraphs: [
          "Dopo una breve fase iniziale, il professionista accompagna la persona verso uno stato più calmo e focalizzato attraverso voce, respiro, immagini o altre tecniche dolci. Il cliente non sparisce dal processo: resta presente, può rispondere e mantenere il contatto.",
          "Da lì il lavoro può coinvolgere esperienze emotivamente significative, immagini, sensazioni, situazioni ricordate o reazioni interiori ricorrenti legate alla richiesta. In una pratica accurata il ritmo deve restare gestibile e il professionista deve evitare pressione, drammatizzazione o interpretazioni guidanti.",
        ],
      },
      {
        title: "Cosa accade dopo la parte più intensa",
        paragraphs: [
          "La seduta non dovrebbe finire bruscamente nel momento in cui è emerso materiale importante. Serve tempo per tornare a uno stato ordinario, dare un senso iniziale all'esperienza e individuare ciò che appare più rilevante o ancora aperto.",
          "Alcune persone si sentono più leggere o più lucide. Altre possono sentirsi stanche, emotivamente sensibili o avere bisogno di quiete. Anche questo è normale, ed è per questo che le indicazioni post-seduta sono importanti.",
        ],
      },
      {
        title: "Cosa aspettarsi in modo realistico",
        paragraphs: [
          "Un'attesa realistica non è una trasformazione immediata. Per alcune persone una seduta può produrre un cambiamento percepibile già da subito. Per altre l'effetto è più graduale e si manifesta come maggiore chiarezza, sollievo emotivo o cambiamento nel modo di vivere certi schemi.",
          "La qualità del risultato dipende dalla preparazione, dalla condizione del cliente, dalla competenza del professionista e da quanto il processo viene contenuto con cura. Il lavoro online può essere significativo, ma resta un lavoro psicologico reale, non una soluzione rapida e spettacolare.",
        ],
      },
      {
        title: "Quando serve particolare cautela",
        paragraphs: [
          "Se una persona è in crisi acuta, molto instabile, presenta sintomi psichiatrici importanti, ha una storia di crisi convulsive o dubbi seri sulla sicurezza, l'ipnosi online va valutata con grande attenzione. In alcuni casi è più appropriato consultare prima un medico o un professionista della salute mentale abilitato.",
          "Il formato online non dovrebbe mai essere presentato come risposta universale. Il suo valore sta nel poter essere utile nelle giuste condizioni e con un accompagnamento qualificato.",
        ],
      },
    ],
    stepsTitle: "Struttura tipica di una sessione online",
    steps: [
      {
        title: "1. Consulenza preliminare",
        text: "Definizione della richiesta, valutazione della sicurezza, chiarimento delle aspettative e decisione sull'idoneità del formato.",
      },
      {
        title: "2. Preparazione dello spazio",
        text: "Stanza privata, connessione stabile, cuffie, acqua, tempo senza interruzioni e un'opzione di contatto di riserva.",
      },
      {
        title: "3. Lavoro centrale della seduta",
        text: "Induzione dolce seguita da esplorazione strutturata di emozioni, immagini, sensazioni ed esperienze rilevanti.",
      },
      {
        title: "4. Chiusura e integrazione",
        text: "Ritorno a uno stato ordinario, breve riflessione sull'esperienza e indicazioni utili per le ore successive.",
      },
    ],
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        question: "La sessione online è più debole di quella in presenza?",
        answer:
          "Non necessariamente. Per molte persone può funzionare bene, se sono presenti privacy, stabilità tecnica e senso di sicurezza emotiva.",
      },
      {
        question: "Quanto tempo conviene tenere libero?",
        answer:
          "È meglio prevedere tempo non solo per la seduta, ma anche per l'ingresso nel processo e il rientro successivo. In pratica conviene bloccare alcune ore senza altri impegni immediati.",
      },
      {
        question: "Cosa succede se durante la seduta emergono emozioni forti?",
        answer:
          "Proprio per questo è importante una guida qualificata. L'obiettivo non è forzare l'intensità, ma aiutare la persona a restare orientata, regolata e sostenuta nel processo.",
      },
    ],
    serviceBoxTitle: "Pagina principale del servizio",
    serviceBoxText:
      "Questa pagina spiega il processo. Se vuoi passare dalla comprensione del formato alla prenotazione del servizio, nella pagina principale trovi i passaggi pratici successivi.",
    serviceBoxLink: "Vai alla pagina del servizio",
    ctaTitle: "Vuoi capire se il formato online è adatto al tuo caso?",
    ctaText:
      "Usa il modulo di contatto per parlare della tua richiesta, delle aspettative, dei possibili rischi e della preparazione più sicura.",
    ctaButton: "Parliamo del formato",
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
  const canonicalPath = getLocalizedPath(locale, "regression-session-online");
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
      ...getLanguageAlternates("regression-session-online"),
    },
  };
}

export default async function RegressionSessionOnlinePage({
  params,
}: {
  params: Promise<{ locale: SupportedSeoLocale }>;
}) {
  const { locale } = await params;
  const copy = content[locale];
  const canonicalPath = getLocalizedPath(locale, "regression-session-online");
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
              "@type": "HowTo",
              name: copy.heading,
              description: copy.description,
              step: copy.steps.map((step) => ({
                "@type": "HowToStep",
                name: step.title,
                text: step.text,
              })),
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
            Session guide
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
            <div className="space-y-4 text-muted-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">{copy.stepsTitle}</h2>
          {copy.steps.map((step: SessionStep) => (
            <div
              key={step.title}
              className="rounded-[1.5rem] border border-border/60 bg-white/55 p-5"
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.text}</p>
            </div>
          ))}
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
