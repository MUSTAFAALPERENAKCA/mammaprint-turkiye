import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MammaPrintBadge, BluePrintBadge } from "@/components/illustrations/product-badges";
import { CtaBlock } from "@/components/content/cta-block";

export const metadata: Metadata = {
  title: "Testlere Genel Bakış",
  description:
    "MammaPrint 70 gen nüks riski testi ve BluePrint 80 gen moleküler alt tipleme testi hakkında genel bakış.",
};

export default function TestlerPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Testler", path: "/testler" }]} />
      <PageHero
        title="MammaPrint ve BluePrint Testleri"
        intro="Meme kanserinin biyolojisini daha iyi anlamaya yardımcı iki tamamlayıcı genomik test. Sonuçlar hekiminiz tarafından diğer klinik faktörlerle birlikte yorumlanır."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-8 md:grid-cols-3">
        <Link href="/mammaprint" className="rounded-card border border-border bg-surface p-6 shadow-card hover:border-mammaprint-accent">
          <MammaPrintBadge />
          <h2 className="mt-4 text-h3 font-semibold text-primary-900">MammaPrint 70 Gen Testi</h2>
          <p className="mt-2 text-sm text-text-muted">Nüks riski değerlendirmesine yardımcı olur.</p>
        </Link>
        <Link href="/blueprint" className="rounded-card border border-border bg-surface p-6 shadow-card hover:border-blueprint-accent">
          <BluePrintBadge />
          <h2 className="mt-4 text-h3 font-semibold text-primary-900">BluePrint 80 Gen Testi</h2>
          <p className="mt-2 text-sm text-text-muted">Moleküler alt tipleme değerlendirmesine yardımcı olur.</p>
        </Link>
        <Link href="/mammaprint-blueprint" className="rounded-card border border-border bg-surface p-6 shadow-card hover:border-primary-900">
          <div className="flex gap-1">
            <MammaPrintBadge />
            <BluePrintBadge />
          </div>
          <h2 className="mt-4 text-h3 font-semibold text-primary-900">Birlikte Kullanım</h2>
          <p className="mt-2 text-sm text-text-muted">Tamamlayıcı içgörü için birlikte değerlendirme.</p>
        </Link>
      </section>
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-8">
          <h2 className="text-h3 font-semibold text-primary-900">Genomik test kavramına yeni misiniz?</h2>
          <p className="mt-2 text-text-muted">
            <Link href="/genomik-test-nedir" className="underline">
              Genomik test nedir?
            </Link>{" "}
            sayfamızdan başlayabilirsiniz.
          </p>
        </div>
      </section>
      <CtaBlock
        title="Doktorunuzla konuşmaya hazır mısınız?"
        primary={{ label: "Hastalar İçin Bilgi", href: "/hastalar-icin" }}
        secondary={{ label: "Sağlık Profesyonelleri", href: "/saglik-profesyonelleri" }}
      />
    </div>
  );
}
