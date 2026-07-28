import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-mammaprint-accent">404</p>
      <h1 className="mt-2 text-h1 font-semibold text-primary-900">Bu sayfa bulunamadı</h1>
      <p className="mt-4 max-w-md text-text-muted">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam
        edebilirsiniz.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="rounded-button bg-primary-900 px-5 py-3 text-sm font-medium text-white">
          Ana Sayfaya Dön
        </Link>
        <Link href="/testler" className="rounded-button border border-border px-5 py-3 text-sm font-medium hover:bg-surface-muted">
          Testleri İnceleyin
        </Link>
        <Link href="/iletisim" className="rounded-button border border-border px-5 py-3 text-sm font-medium hover:bg-surface-muted">
          İletişime Geçin
        </Link>
      </div>
    </div>
  );
}
