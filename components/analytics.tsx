"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  return (
    <>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      <VercelAnalytics />
    </>
  );
}
