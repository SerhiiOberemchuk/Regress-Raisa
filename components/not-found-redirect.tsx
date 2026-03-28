"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SUPPORTED_LOCALES = new Set(["uk", "en", "it"]);
const REDIRECT_DELAY_MS = 6000;

export default function NotFoundRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const [, maybeLocale] = window.location.pathname.split("/");
      const target = SUPPORTED_LOCALES.has(maybeLocale)
        ? `/${maybeLocale}`
        : "/";

      router.replace(target);
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [router]);

  return null;
}
