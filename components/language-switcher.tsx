"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export type Language = "uk" | "en" | "it";

export default function LanguageSwitcher() {
  const language = useLocale();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-md"
        aria-label="Змінити мову"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLanguage}</span>
      </button>

      <AnimatedDropdown isOpen={isOpen}>
        <div className="absolute top-full flex flex-col right-0 mt-1 bg-white rounded-md shadow-md overflow-hidden min-w-[120px] z-50">
          <Link
            href="uk"
            className={`w-full text-left px-4 py-2 text-sm ${
              currentLanguage === "uk"
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/50"
            }`}
            onClick={() => toggleLanguage("uk")}
          >
            Українська
          </Link>
          <Link
            href="en"
            className={`w-full text-left px-4 py-2 text-sm ${
              currentLanguage === "en"
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/50"
            }`}
            onClick={() => toggleLanguage("en")}
          >
            English
          </Link>
          <Link
            href="it"
            className={`w-full text-left px-4 py-2 text-sm ${
              currentLanguage === "en"
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/50"
            }`}
            onClick={() => toggleLanguage("it")}
          >
            Italiano
          </Link>
        </div>
      </AnimatedDropdown>
    </div>
  );
}

function AnimatedDropdown({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.2 }}
      style={{ overflow: "hidden", pointerEvents: isOpen ? "auto" : "none" }}
    >
      {children}
    </motion.div>
  );
}
