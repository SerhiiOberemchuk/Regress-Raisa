"use client";

import { useTranslations } from "next-intl";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  const tcommon = useTranslations("common");

  return (
    <div
      className={`mb-14 max-w-3xl space-y-6 ${centered ? "mx-auto text-center" : ""}`}
    >
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/45" />
        <div
          className={`text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-primary/70 ${centered ? "" : "pl-1"}`}
        >
          {tcommon("sectionEyebrow")}
        </div>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/45" />
      </div>
      <h2 className="text-4xl font-semibold leading-[0.95] md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-[1.1rem]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
