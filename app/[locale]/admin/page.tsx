import type { Metadata } from "next";
import { Suspense } from "react";
import AdminPanel from "@/components/admin-panel";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { readSiteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

async function AdminPageContent() {
  const [content, authenticated] = await Promise.all([
    readSiteContent(),
    isAdminAuthenticated(),
  ]);

  return (
    <AdminPanel
      initialContent={content}
      initialAuthenticated={authenticated}
    />
  );
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-muted/30 pt-24">
      <Suspense fallback={<div className="p-6 text-sm">Loading admin...</div>}>
        <AdminPageContent />
      </Suspense>
    </main>
  );
}
