import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { replaceSiteImage } from "@/lib/site-content";
import {
  IMAGE_KEYS,
  SUPPORTED_LOCALES,
  type ImageKey,
} from "@/lib/site-content-schema";

const adminToken = process.env.ADMIN_TOKEN;

const isImageKey = (value: string): value is ImageKey =>
  IMAGE_KEYS.includes(value as ImageKey);

export async function POST(request: Request) {
  if (!adminToken) {
    return NextResponse.json(
      { error: "ADMIN_TOKEN is not configured on the server" },
      { status: 500 }
    );
  }

  const token = request.headers.get("x-admin-token");
  if (token !== adminToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const slotRaw = formData.get("slot");
  const fileRaw = formData.get("file");
  if (typeof slotRaw !== "string" || !isImageKey(slotRaw)) {
    return NextResponse.json({ error: "Invalid image slot" }, { status: 400 });
  }
  if (!(fileRaw instanceof File)) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  try {
    const saved = await replaceSiteImage(slotRaw, fileRaw);

    for (const locale of SUPPORTED_LOCALES) {
      revalidatePath(`/${locale}`);
    }

    return NextResponse.json(saved);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to replace image";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
