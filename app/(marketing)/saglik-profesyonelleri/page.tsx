import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Sağlık Profesyonelleri Kaynak Merkezi",
  description: "Klinik uygunluk, numune ve lojistik, örnek raporlar, test talep süreci ve medikal bilgi talebi.",
};

const links = [
  { title: "Klinik Uygunluk", href: "/saglik-profesyonelleri/klinik-uygunluk", description: "Resmi kullanım amacı ve klinik uygunluk matrisi." },
  { title: "Numune ve Lojistik", href: "/saglik-profesyonelleri/numune-ve-lojistik", description: "FFPE blok/lam gereksinimleri, gönderim ve takip." },
  { title: "Örnek Raporlar", href: "/saglik-profesyonelleri/ornek-raporlar", description: "Rapor formatı ve alan açıklamaları." },
  { title: "Test Talep Süreci", href: "/saglik-profesyonelleri/test-talebi", description: "Test istem ve numune gönderim süreci." },
  { title: "Medikal Bilgi Talebi", href: "/saglik-profesyonelleri/medikal-bilgi", description: "Medikal bilgi talebi formu." },
  { title: "Klinik Kanıt Merkezi", href: "/klinik-kanit", description: "MINDACT, NBRST ve diğer landmark çalışmalar." },
];

export default function SaglikProfesyonelleriPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Sağlık Profesyonelleri", path: "/saglik-profesyonelleri" }]} />
      <PageHero
        eyebrow="Sağlık Profesyonelleri İçin"
        title="Sağlık Profesyonelleri Kaynak Merkezi"
        intro="Klinik uygunluk, numune/lojistik gereksinimleri, örnek raporlar ve klinik kanıt kütüphanesine erişin."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-card border border-border bg-surface p-5 shadow-card hover:border-blueprint-accent">
              <h2 className="font-semibold text-primary-900">{link.title}</h2>
              <p className="mt-1 text-sm text-text-muted">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Medikal bilgi mi gerekiyor?"
        primary={{ label: "Medikal Bilgi Talebi", href: "/saglik-profesyonelleri/medikal-bilgi" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
