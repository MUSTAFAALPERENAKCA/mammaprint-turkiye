"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Teknik ayrıntı yalnızca sunucu loglarına yazılır; kullanıcıya güvenli/genel
    // bir mesaj gösterilir (gereksinim T-17).
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-danger">Hata</p>
      <h1 className="mt-2 text-h1 font-semibold text-primary-900">Bir şeyler ters gitti</h1>
      <p className="mt-4 max-w-md text-text-muted">
        Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya ana sayfaya
        dönün.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="rounded-button bg-primary-900 px-5 py-3 text-sm font-medium text-white"
        >
          Tekrar Dene
        </button>
        <Link href="/" className="rounded-button border border-border px-5 py-3 text-sm font-medium hover:bg-surface-muted">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
