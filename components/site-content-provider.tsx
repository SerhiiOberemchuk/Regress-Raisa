"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  defaultSiteContent,
  type SiteContent,
} from "@/lib/site-content-schema";

const SiteContentContext = createContext<SiteContent>(defaultSiteContent);

type SiteContentProviderProps = {
  initialContent: SiteContent;
  children: ReactNode;
};

export function SiteContentProvider({
  initialContent,
  children,
}: SiteContentProviderProps) {
  return (
    <SiteContentContext.Provider value={initialContent}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
