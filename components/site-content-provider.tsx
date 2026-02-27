"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  defaultSiteContent,
  type SiteContent,
} from "@/lib/site-content-schema";

const SiteContentContext = createContext<SiteContent>(defaultSiteContent);

type SiteContentProviderProps = {
  children: ReactNode;
};

export function SiteContentProvider({ children }: SiteContentProviderProps) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/admin/content", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as SiteContent;
        setContent(payload);
      } catch {
        // Keep defaults when the endpoint is temporarily unavailable.
      }
    };

    void load();
  }, []);

  return (
    <SiteContentContext.Provider value={content}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
