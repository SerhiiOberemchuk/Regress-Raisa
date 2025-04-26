"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const tcontact = useTranslations("contact");
  const tlinks = useTranslations("links");
  const tfooter = useTranslations("footer");
  return (
    <footer className="relative py-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/footer-background.jpg")',
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
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#results"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("results")}
                </Link>
              </li>
              <li>
                <Link
                  href="#examples"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("examples")}
                </Link>
              </li>
              <li>
                <Link
                  href="#requirements"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("requirements")}
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {tlinks("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
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
              © {currentYear} RaisaRegress. {tfooter("rights")}.
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
                <Linkedin className="h-4 w-4" />
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
