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

  return (
    <footer className="relative py-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("${footerBackgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              RaisaRegress
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              {tfooter("tagline")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{tfooter("navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#results"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("results")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#examples"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("examples")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#requirements"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("requirements")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/what-is-regressive-hypnosis"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("whatIsHypnosisGuide")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regression-session-online"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("sessionGuide")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regressologist-online"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("regressologistGuide")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regression-hypnosis-online"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("hypnosisGuide")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regression-therapy-price"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("pricingGuide")}
                </Link>
              </li>
              <li>
                <Link
                  href="/regression-therapy-safety"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("safetyGuide")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{tfooter("contact")}</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  {tcontact("phoneLabel")}:
                </span>
                <br />
                <a
                  href="tel:+380971768196"
                  className="hover:text-primary transition-colors"
                >
                  +380 97 176 81 96
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>
                <br />
                <a
                  href="mailto:265840@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  265840@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  {tcontact("workingHoursLabel")}:
                </span>
                <br />
                {tcontact("workHoursText")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
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
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {tfooter("privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {tfooter("termsOfUse")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
