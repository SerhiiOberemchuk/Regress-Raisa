"use client";

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
  return (
    <div
      className={`space-y-4 max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}
    >
      <h2 className="font-display text-4xl md:text-5xl font-semibold leading-none text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-balance">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
