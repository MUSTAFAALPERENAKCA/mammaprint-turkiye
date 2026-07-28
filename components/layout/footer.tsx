import Link from "next/link";
import { footerLegalLinks } from "@/lib/nav-data";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-primary-900">MammaPrint Türkiye</p>
            <p className="mt-2 text-sm text-text-muted">
              MammaPrint® ve BluePrint® testleri hakkında hasta ve sağlık profesyonelleri için
              bilgilendirme amaçlı içerik sunar.
            </p>
          </div>
          <div>
            <p className="font-semibold">Hızlı bağlantılar</p>
            <ul className="mt-2 space-y-1 text-sm text-text-muted">
              <li>
                <Link href="/hastalar-icin">Hastalar İçin</Link>
              </li>
              <li>
                <Link href="/saglik-profesyonelleri">Sağlık Profesyonelleri</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Yasal</p>
            <ul className="mt-2 space-y-1 text-sm text-text-muted">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <button type="button" className="underline">
                  Çerez ayarlarını değiştir
                </button>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-text-muted">
          Bu sitedeki içerikler yalnızca genel bilgilendirme amaçlıdır; tanı veya tedavi yerine
          geçmez. Kişisel sağlık kararları için lütfen hekiminize danışın. MammaPrint® ve
          BluePrint® Agendia&apos;nın tescilli markalarıdır.
        </p>
      </div>
    </footer>
  );
}
