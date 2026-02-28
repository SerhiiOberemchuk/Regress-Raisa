import { NextResponse } from "next/server";
import { readSiteContent } from "@/lib/site-content";

export async function GET() {
  const content = await readSiteContent();
  return NextResponse.json(content, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
