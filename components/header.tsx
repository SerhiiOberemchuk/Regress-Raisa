"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Про метод", href: "/#about" },
  { name: "Послуги і ціни", href: "/#services" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(20,18,38,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-3xl font-semibold tracking-tight text-primary"
          >
            RaisaRegress
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-[0.08em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-full bg-primary px-6 hover:bg-primary/90 shadow-[0_12px_24px_rgba(124,58,237,0.22)]"
            >
              <Link href="/#contact">Записатися</Link>
            </Button>
          </nav>

          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        ref={mobileMenuRef}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 w-full">
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              Записатися
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
