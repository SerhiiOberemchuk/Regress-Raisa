import type { Metadata } from "next";
import AdminPanel from "@/components/admin-panel";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <AdminPanel />
    </main>
  );
}
