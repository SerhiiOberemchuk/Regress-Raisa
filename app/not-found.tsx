import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFoundRedirect from "@/components/not-found-redirect";

export const metadata: Metadata = {
  title: "Сторінку не знайдено | RaisaRegress",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
      <NotFoundRedirect />
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-6 text-2xl font-semibold">Сторінку не знайдено</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        Сторінка, яку ви шукаєте, не існує або була переміщена.
      </p>
      <Button asChild variant="default">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Повернутися на головну
        </Link>
      </Button>
    </div>
  );
}
