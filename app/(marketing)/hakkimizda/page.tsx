import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Türkiye Hakkında",
  description: "MammaPrint Türkiye; Agendia ve Omnigen ile ilişkisi hakkında bilgi.",
};

export default function HakkimizdaPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Hakkımızda", path: "/hakkimizda" }]} />
      <PageHero
        title="MammaPrint Türkiye"
        intro="MammaPrint ve BluePrint testleri hakkında Türkiye'deki hasta ve sağlık profesyonellerine güvenilir bilgi ve destek sağlama misyonuyla çalışıyoruz."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/agendia" className="rounded-card border border-border bg-surface p-6 shadow-card hover:border-primary-900">
            <h2 className="font-semibold text-primary-900">Agendia</h2>
            <p className="mt-2 text-sm text-text-muted">MammaPrint ve BluePrint testlerinin geliştiricisi.</p>
          </Link>
          <Link href="/omnigen" className="rounded-card border border-border bg-surface p-6 shadow-card hover:border-primary-900">
            <h2 className="font-semibold text-primary-900">Omnigen</h2>
            <p className="mt-2 text-sm text-text-muted">Türkiye operasyonu ve yetkili destek modeli.</p>
          </Link>
        </div>
        <MedicalReviewFlag note="Kurumsal misyon metni, tarihçe ve yetkili distribütörlük ifadeleri hukuk/regülasyon ekibi tarafından onaylanmalıdır (bkz. strateji dokümanı §14.4)." />
      </section>
      <CtaBlock
        title="Kalite ve uyum bilgileri"
        primary={{ label: "Kalite ve Uyum", href: "/kalite-ve-uyum" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
