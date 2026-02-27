"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  SERVICE_KEYS,
  SUPPORTED_LOCALES,
  type ServiceKey,
  type SupportedLocale,
} from "@/lib/site-content-schema";
import { useSiteContent } from "@/components/site-content-provider";

type Service = {
  name: string;
  price: string;
  features: Record<string, string>;
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const siteContent = useSiteContent();
  const locale = useLocale();
  const t = useTranslations("services");
  const serviceMap = t.raw("services") as Record<string, Service>;
  const localeKey: SupportedLocale = SUPPORTED_LOCALES.includes(
    locale as SupportedLocale
  )
    ? (locale as SupportedLocale)
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {services.map((service) => (
            <motion.div key={service.key} variants={itemVariants}>
              <Card className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 font-medium">{t("includes")}:</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="#contact">{t("button")}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-semibold mb-4">
            {t("individualApproach.title")}
          </h3>
          <p className="text-muted-foreground">
            {t("individualApproach.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
