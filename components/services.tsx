import Link from "next/link";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeading from "./section-heading";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/design-system";
import {
  SERVICE_KEYS,
  SUPPORTED_LOCALES,
  type ServiceKey,
  type SiteContent,
  type SupportedLocale,
} from "@/lib/site-content-schema";

type Service = {
  name: string;
  price: string;
  features: Record<string, string>;
};

type ServicesProps = {
  locale: SupportedLocale;
  siteContent: SiteContent;
};

export default async function Services({ locale, siteContent }: ServicesProps) {
  const t = await getTranslations({ locale, namespace: "services" });
  const serviceMap = t.raw("services") as Record<string, Service>;
  const localeKey: SupportedLocale = SUPPORTED_LOCALES.includes(locale)
    ? locale
    : "uk";

  const services = Object.entries(serviceMap).map(([key, service]) => {
    const serviceKey = key as ServiceKey;
    const configuredPrice = SERVICE_KEYS.includes(serviceKey)
      ? siteContent.prices[serviceKey][localeKey]
      : undefined;

    return {
      key,
      name: service.name,
      price: configuredPrice ?? service.price,
      features: Object.values(service.features),
    };
  });

  return (
    <section id="services" className="py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.key}>
              <Card className="group flex h-full flex-col overflow-hidden border-white/70 bg-[linear-gradient(160deg,rgba(255,252,248,0.92),rgba(245,236,226,0.78))] shadow-[0_34px_90px_-64px_rgba(54,36,25,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_44px_110px_-68px_rgba(54,36,25,0.62)]">
                <CardHeader className="pb-4">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary/65">
                      {t("formatLabel")}
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-4xl font-semibold text-primary md:text-[2.8rem]">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="max-w-[14ch] text-[2rem] leading-[1.02] md:text-[2.35rem]">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-5 h-px w-full bg-gradient-to-r from-primary/20 via-border/70 to-transparent" />
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("includes")}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-[1.35rem] border border-white/60 bg-white/62 px-4 py-3 shadow-[0_12px_26px_-22px_rgba(54,36,25,0.42)]"
                      >
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button asChild className="w-full">
                    <Link href="/#contact">{t("button")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2.2rem] border border-primary/15 bg-[linear-gradient(145deg,rgba(126,154,140,0.12),rgba(255,250,245,0.9))] p-8 text-center shadow-[0_30px_74px_-56px_rgba(54,36,25,0.42)] md:p-10">
          <h3 className="mx-auto mb-4 max-w-[16ch] text-3xl leading-tight font-semibold md:text-[2.25rem]">
            {t("individualApproach.title")}
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("individualApproach.text")}
          </p>
        </div>
      </div>
    </section>
  );
}
