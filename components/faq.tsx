"use client";

import SectionHeading from "./section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/design-system";
import { useTranslations } from "next-intl";

type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq() {
  const t = useTranslations("faq");
  const faqs = Object.values(t.raw("questions")) as FaqItem[];

  return (
    <section id="faq" className="py-18 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="motion-safe:animate-soft-fade-up mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-[2rem] border border-border/70 bg-[rgba(255,251,247,0.82)] px-6 py-2 shadow-[0_34px_80px_-58px_rgba(58,40,28,0.45)]"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="py-6 text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="motion-safe:animate-soft-fade-up motion-safe:animation-delay-150 mt-12 text-center">
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("contactNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
