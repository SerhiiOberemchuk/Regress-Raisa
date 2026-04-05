import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { Link } from "@/i18n/navigation";
import type { SupportedLocale } from "@/lib/site-content-schema";
import { FooterYear } from "@/components/footer-year";

type FooterProps = {
  locale: SupportedLocale;
  footerBackgroundImage: string;
};

export default async function Footer({
  locale,
  footerBackgroundImage,
}: FooterProps) {
  const tcontact = await getTranslations({ locale, namespace: "contact" });
  const tlinks = await getTranslations({ locale, namespace: "links" });
  const tfooter = await getTranslations({ locale, namespace: "footer" });
  const tcommon = await getTranslations({ locale, namespace: "common" });

  const primaryLinks = [
    { href: "/#about", label: tlinks("about") },
    { href: "/#results", label: tlinks("results") },
    { href: "/#examples", label: tlinks("examples") },
    { href: "/#requirements", label: tlinks("requirements") },
    { href: "/#faq", label: tlinks("faq") },
    { href: "/#services", label: tlinks("services") },
    { href: "/#contact", label: tlinks("contact") },
  ];

  const seoLinks = [
    { href: "/what-is-regressive-hypnosis", label: tlinks("whatIsHypnosisGuide") },
    { href: "/regression-session-online", label: tlinks("sessionGuide") },
    { href: "/regressologist-online", label: tlinks("regressologistGuide") },
    { href: "/regression-hypnosis-online", label: tlinks("hypnosisGuide") },
    { href: "/regression-therapy-price", label: tlinks("pricingGuide") },
    { href: "/regression-therapy-safety", label: tlinks("safetyGuide") },
  ];

  return (
    <footer className="relative overflow-hidden px-4 py-16 md:px-0 md:py-20">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url("${footerBackgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(244,237,227,0.55),rgba(238,228,216,0.92))]" />

      <div className="container relative z-10 mx-auto">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/60 bg-[rgba(255,251,246,0.84)] shadow-[0_40px_100px_-62px_rgba(54,36,25,0.52)] backdrop-blur-sm">
          <div className="grid grid-cols-1 border-b border-border/60 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="absolute -left-12 top-10 h-36 w-36 rounded-full bg-[rgba(126,154,140,0.1)] blur-3xl" />
              <Link href="/" className="flex flex-col leading-none text-primary">
                <span className="font-serif text-[2.2rem] font-semibold tracking-[-0.03em]">
                  RaisaRegress
                </span>
                <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary/60">
                  {tcommon("practiceLabel")}
                </span>
              </Link>
              <p className="relative mt-6 max-w-xl text-lg text-muted-foreground">
                {tfooter("tagline")}
              </p>
              <div className="relative mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary/60">
                    Phone
                  </p>
                  <a
                    href="tel:+380971768196"
                    className="mt-2 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    +380 97 176 81 96
                  </a>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary/60">
                    Email
                  </p>
                  <a
                    href="mailto:265840@gmail.com"
                    className="mt-2 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    265840@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary/60">
                    Hours
                  </p>
                  <p className="mt-2 text-muted-foreground">{tcontact("workHoursText")}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-10 p-8 md:grid-cols-2 md:p-10 lg:p-12">
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary/65">
                  {tfooter("navigation")}
                </h3>
                <ul className="space-y-3">
                  {primaryLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary/65">
                  {tfooter("seoPages")}
                </h3>
                <ul className="space-y-3">
                  {seoLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10 lg:px-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <p className="text-sm text-muted-foreground">
                &copy;{" "}
                <Suspense fallback={null}>
                  <FooterYear />
                </Suspense>{" "}
                RaisaRegress. {tfooter("rights")}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">
                  {tfooter("createdBy")}:
                </span>
                <a
                  href="https://www.linkedin.com/in/serhii-oberemchuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Serhii Oberemchuk
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.4v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {tfooter("privacyPolicy")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {tfooter("termsOfUse")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
