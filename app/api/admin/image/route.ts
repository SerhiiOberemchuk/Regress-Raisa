import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Use admin server actions instead of this endpoint" },
    { status: 405 }
  );
}
