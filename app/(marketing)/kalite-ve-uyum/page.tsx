import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Kalite, Lisans ve Uyum",
  description: "MammaPrint ve BluePrint testlerinin kalite, lisans ve regülasyon uyumu hakkında bilgi.",
};

export default function KaliteVeUyumPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Hakkımızda", path: "/hakkimizda" }, { name: "Kalite ve Uyum", path: "/kalite-ve-uyum" }]} />
      <PageHero title="Kalite, Lisans ve Uyum" intro="MammaPrint ve BluePrint testlerinin kalite ve regülasyon uyumu hakkında bilgi." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <p className="max-w-2xl text-text-muted">
          MammaPrint ve BluePrint testleri, ilgili kalite standartlarına ve regülasyon
          gerekliliklerine uygun olarak sunulmaktadır. Güncel sertifika ve lisans bilgileri talep
          üzerine paylaşılabilir.
        </p>
        <MedicalReviewFlag note="Güncel kalite sertifikaları, lisans belgeleri ve regülasyon statü metinleri (MammaPrint/BluePrint için ayrı ayrı) hukuk/regülasyon ekibi tarafından sağlanmalı ve onaylanmalıdır (bkz. gereksinim M-08)." />
      </section>
      <CtaBlock
        title="Sorularınız mı var?"
        primary={{ label: "İletişime Geçin", href: "/iletisim" }}
        secondary={{ label: "Hakkımızda", href: "/hakkimizda" }}
      />
    </div>
  );
}
