import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type BreadcrumbItem = {
  href: string;
  label: string;
};

type RelatedItem = {
  href: string;
  label: string;
};

type SeoPageNavProps = {
  breadcrumbs: readonly BreadcrumbItem[];
  relatedTitle: string;
  relatedLinks: readonly RelatedItem[];
};

export default function SeoPageNav({
  breadcrumbs,
  relatedTitle,
  relatedLinks,
}: SeoPageNavProps) {
  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <ChevronRight className="h-3.5 w-3.5" /> : null}
                {isLast ? (
                  <span className="font-medium text-foreground">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{relatedTitle}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border p-4 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
