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
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
