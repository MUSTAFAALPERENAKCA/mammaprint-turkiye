import Image from "next/image";
import Link from "next/link";
import { footerLegalLinks } from "@/lib/nav-data";
import { CookiePreferencesButton } from "@/components/consent/cookie-preferences-button";

const linkClass =
  "group relative inline-block py-1.5 text-white/70 transition-colors duration-300 hover:text-white";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
      <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-mammaprint-accent to-blueprint-accent transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-primary-900 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 80% at 0% 0%, rgba(198,53,122,0.28), transparent 60%), radial-gradient(40% 70% at 100% 100%, rgba(30,111,168,0.3), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/brand/mammaprint-mark.png" alt="" width={36} height={32} aria-hidden="true" />
              <Image src="/brand/blueprint-mark.png" alt="" width={36} height={32} aria-hidden="true" />
            </div>
            <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">MammaPrint Türkiye</p>
            <p className="mt-2 max-w-xs text-sm text-white/65">
              MammaPrint® ve BluePrint® testleri hakkında hasta ve sağlık profesyonelleri için
              bilgilendirme amaçlı içerik sunar.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/90">Hızlı bağlantılar</p>
            <ul className="mt-3 text-sm">
              <li>
                <FooterLink href="/mammaprint">MammaPrint</FooterLink>
              </li>
              <li>
                <FooterLink href="/blueprint">BluePrint</FooterLink>
              </li>
              <li>
                <FooterLink href="/iletisim">İletişim</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/90">Yasal</p>
            <ul className="mt-3 text-sm">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
              <li className="text-white/70">
                <CookiePreferencesButton />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/55">
            Bu sitedeki içerikler yalnızca genel bilgilendirme amaçlıdır; tanı veya tedavi yerine
            geçmez. Kişisel sağlık kararları için lütfen hekiminize danışın. MammaPrint® ve
            BluePrint® Agendia&apos;nın tescilli markalarıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
