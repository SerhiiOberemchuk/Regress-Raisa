import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { SupportedLocale } from "@/lib/site-content-schema";

type HubItem = {
  href: string;
  title: string;
  description: string;
};

const hubItems: Record<SupportedLocale, HubItem[]> = {
  uk: [
    {
      href: "/what-is-regressive-hypnosis",
      title: "Що таке регресивний гіпноз",
      description:
        "Пояснення методу, кому він підходить і чим регресія відрізняється від звичайної релаксації.",
    },
    {
      href: "/regression-session-online",
      title: "Як проходить сеанс регресії онлайн",
      description:
        "Етапи онлайн-сеансу, підготовка, тривалість та що відбувається після завершення роботи.",
    },
    {
      href: "/regressologist-online",
      title: "Регресолог онлайн",
      description:
        "Коли варто звертатися до регресолога, з якими запитами працює спеціаліст і як вибрати формат.",
    },
    {
      href: "/regression-hypnosis-online",
      title: "Регресивний гіпноз онлайн",
      description:
        "Основна сторінка послуги з описом формату, користі методу та записом на консультацію.",
    },
    {
      href: "/regression-therapy-price",
      title: "Ціни на регресивну терапію",
      description:
        "Актуальна вартість консультації, регресії, прогресії та супровідних форматів роботи.",
    },
    {
      href: "/regression-therapy-safety",
      title: "Безпека та протипоказання",
      description:
        "Кому підходить метод, які є обмеження та як підготуватися до безпечного сеансу онлайн.",
    },
  ],
  en: [
    {
      href: "/regression-hypnosis-online",
      title: "Online Regression Hypnosis",
      description:
        "Main service page with method overview, online format details, and session booking.",
    },
    {
      href: "/regression-therapy-price",
      title: "Regression Therapy Pricing",
      description:
        "Current prices for consultation, regression sessions, and related formats.",
    },
    {
      href: "/regression-therapy-safety",
      title: "Safety and Contraindications",
      description:
        "Who the method is suitable for, preparation guidelines, and key safety notes.",
    },
  ],
  it: [
    {
      href: "/regression-hypnosis-online",
      title: "Ipnosi Regressiva Online",
      description:
        "Pagina principale del servizio con descrizione del metodo e prenotazione.",
    },
    {
      href: "/regression-therapy-price",
      title: "Prezzi Terapia Regressiva",
      description:
        "Tariffe aggiornate per consulenza, regressione e altri formati di lavoro.",
    },
    {
      href: "/regression-therapy-safety",
      title: "Sicurezza e Controindicazioni",
      description:
        "Indicazioni, limiti del metodo e preparazione a una sessione online sicura.",
    },
  ],
};

export default async function SeoContentHub({
  locale,
}: {
  locale: SupportedLocale;
}) {
  const t = await getTranslations({ locale, namespace: "seoHub" });
  const items = hubItems[locale];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="text-xl font-semibold transition-colors group-hover:text-primary">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-5 text-sm font-medium text-primary">
                {t("readMore")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
