import { Bed, Clock, Headphones, Wifi } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/design-system";
import { arrayKeys } from "@/lib/array-keys-nextintl";
import type { SupportedLocale } from "@/lib/site-content-schema";

type RequirementsProps = {
  locale: SupportedLocale;
};

export default async function Requirements({ locale }: RequirementsProps) {
  const t = await getTranslations({ locale, namespace: "requirements" });

  const requirements = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: t("items.time.title"),
      description: t("items.time.description"),
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: t("items.headphones.title"),
      description: t("items.headphones.description"),
    },
    {
      icon: <Bed className="h-10 w-10 text-primary" />,
      title: t("items.place.title"),
      description: t("items.place.description"),
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: t("items.internet.title"),
      description: t("items.internet.description"),
    },
  ];

  const additionalList = arrayKeys(t.raw("additional.list"));

  return (
    <section id="requirements" className="py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="motion-safe:animate-soft-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="group h-full overflow-hidden border-white/70 bg-[linear-gradient(155deg,rgba(255,252,248,0.9),rgba(246,239,231,0.76))] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_-58px_rgba(54,36,25,0.52)]">
                  <CardContent className="flex h-full gap-4 p-7">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                      {requirement.icon}
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="text-[1.35rem] leading-tight font-semibold">
                          {requirement.title}
                        </h3>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/45">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{requirement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-300 rounded-[2.2rem] border border-primary/15 bg-[linear-gradient(145deg,rgba(126,154,140,0.11),rgba(255,251,246,0.9))] p-8 shadow-[0_30px_74px_-56px_rgba(54,36,25,0.4)] md:p-9">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-primary/65">
              {t("panelLabel")}
            </p>
            <h3 className="mt-4 text-3xl leading-tight font-semibold">
              {t("additional.title")}
            </h3>
            <ul className="mt-6 space-y-4">
              {additionalList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/55" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
