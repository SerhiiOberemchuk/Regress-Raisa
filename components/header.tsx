"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/design-system";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tlinks = useTranslations("links");
  const theader = useTranslations("header");
  const tcommon = useTranslations("common");

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: tlinks("about"), href: "/#about" },
    { name: tlinks("services"), href: "/#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(250,245,238,0.84)] shadow-[0_14px_44px_-34px_rgba(54,36,25,0.48)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex flex-col leading-none text-primary">
            <span className="font-serif text-[2rem] font-semibold tracking-[-0.03em]">
              RaisaRegress
            </span>
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-primary/60">
              {tcommon("practiceLabel")}
            </span>
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-[0.08em] text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/#contact">{tlinks("signup")}</Link>
            </Button>
          </nav>

          <button
            className="text-muted-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? theader("closeMenu") : theader("openMenu")}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`overflow-hidden bg-[rgba(251,246,239,0.97)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "translate-y-0 max-h-[28rem] opacity-100"
            : "-translate-y-2 max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2 text-base font-semibold tracking-[0.06em] text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <Button asChild className="w-full">
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              {tlinks("signup")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
