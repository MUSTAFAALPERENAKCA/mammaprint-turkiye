import type { ReactNode } from "react";
import { auth, signOut } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-surface-muted">
      <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
        <span className="font-semibold text-primary-900">MammaPrint Türkiye — Yönetim Paneli</span>
        <div className="flex items-center gap-4 text-sm">
          <span>
            {session?.user?.name} ({session?.user?.role})
          </span>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button type="submit" className="underline">
              Çıkış yap
            </button>
          </form>
        </div>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
