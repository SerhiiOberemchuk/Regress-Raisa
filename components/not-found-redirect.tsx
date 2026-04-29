"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const REDIRECT_DELAY_MS = 6000;

export default function NotFoundRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.replace("/");
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [router]);

  return null;
}
