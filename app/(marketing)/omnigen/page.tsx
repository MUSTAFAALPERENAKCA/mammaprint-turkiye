import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Omnigen ve Türkiye Operasyonu",
  description: "Omnigen'in Türkiye'deki rolü ve destek modeli hakkında bilgi.",
};

export default function OmnigenPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Hakkımızda", path: "/hakkimizda" }, { name: "Omnigen", path: "/omnigen" }]} />
      <PageHero title="Omnigen ve Türkiye Operasyonu" intro="Omnigen, MammaPrint ve BluePrint testlerinin Türkiye'deki bilgi ve destek sürecini yürütür." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <p className="max-w-2xl text-text-muted">
          Omnigen, Agendia ile birlikte Türkiye&apos;deki hasta ve sağlık profesyonellerine bilgi
          ve destek sağlamaktadır.
        </p>
        <MedicalReviewFlag note="Yetkili distribütörlük statüsü, hizmet modeli ve iletişim sorumluluğu metinleri hukuk/regülasyon ekibi tarafından onaylanmalıdır (bkz. strateji dokümanı §2.2 kritik sorunlar tablosu)." />
      </section>
      <CtaBlock
        title="Kalite ve uyum bilgileri"
        primary={{ label: "Kalite ve Uyum", href: "/kalite-ve-uyum" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
