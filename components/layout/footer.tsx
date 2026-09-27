import Image from "next/image";
import Link from "next/link";
import { footerLegalLinks } from "@/lib/nav-data";
import { CookiePreferencesButton } from "@/components/consent/cookie-preferences-button";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/brand/mammaprint-mark.png" alt="" width={24} height={21} aria-hidden="true" />
              <Image src="/brand/blueprint-mark.png" alt="" width={24} height={21} aria-hidden="true" />
              <p className="font-semibold text-primary-900">MammaPrint Türkiye</p>
            </div>
            <p className="mt-2 text-sm text-text-muted">
              MammaPrint® ve BluePrint® testleri hakkında hasta ve sağlık profesyonelleri için
              bilgilendirme amaçlı içerik sunar.
            </p>
          </div>
          <div>
            <p className="font-semibold">Hızlı bağlantılar</p>
            <ul className="mt-2 space-y-1 text-sm text-text-muted">
              <li>
                <Link href="/mammaprint">MammaPrint</Link>
              </li>
              <li>
                <Link href="/blueprint">BluePrint</Link>
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
                <CookiePreferencesButton />
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
