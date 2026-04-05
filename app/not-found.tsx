import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/design-system";
import NotFoundRedirect from "@/components/not-found-redirect";

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 text-center">
      <NotFoundRedirect />
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page not found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you requested does not exist or has been moved.
      </p>
      <Button asChild variant="default">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
