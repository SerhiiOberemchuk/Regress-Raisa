"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type Language = "uk" | "en" | "it";

export default function LanguageSwitcher() {
  const currentLanguage = useLocale() as Language;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-md p-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{currentLanguage}</span>
      </button>

      <AnimatedDropdown isOpen={isOpen}>
        <div className="absolute right-0 top-full z-50 mt-1 flex min-w-[120px] flex-col overflow-hidden rounded-md bg-white shadow-md">
          <Link
            href={pathname}
            locale="uk"
            className={`w-full px-4 py-2 text-left text-sm ${
              currentLanguage === "uk"
                ? "bg-primary/10 font-medium text-primary"
                : "hover:bg-muted/50"
            }`}
            onClick={closeDropdown}
          >
            Українська
          </Link>
          <Link
            href={pathname}
            locale="en"
            className={`w-full px-4 py-2 text-left text-sm ${
              currentLanguage === "en"
                ? "bg-primary/10 font-medium text-primary"
                : "hover:bg-muted/50"
            }`}
            onClick={closeDropdown}
          >
            English
          </Link>
          <Link
            href={pathname}
            locale="it"
            className={`w-full px-4 py-2 text-left text-sm ${
              currentLanguage === "it"
                ? "bg-primary/10 font-medium text-primary"
                : "hover:bg-muted/50"
            }`}
            onClick={closeDropdown}
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
