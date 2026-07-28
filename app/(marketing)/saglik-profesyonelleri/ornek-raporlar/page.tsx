import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Örnek Raporları",
  description: "Rapor formatı ve alan açıklamaları.",
};

export default function OrnekRaporlarPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Sağlık Profesyonelleri", path: "/saglik-profesyonelleri" },
        { name: "Örnek Raporlar", path: "/saglik-profesyonelleri/ornek-raporlar" },
      ]} />
      <PageHero title="Örnek Raporlar" intro="Rapor alanlarının açıklaması. Tam örnek raporlar yetkili sağlık profesyonellerine sunulur." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <p className="max-w-2xl text-text-muted">
          MammaPrint ve BluePrint raporları; hasta/numune bilgisi, test sonucu, risk
          sınıflandırması ve yöntem açıklaması gibi bölümler içerir. Güncel örnek rapor dosyaları
          yetkiye göre erişilebilir kaynak olarak sunulacaktır.
        </p>
        <MedicalReviewFlag note="Gerçek örnek rapor PDF'leri (sürüm/tarih bilgisiyle) medikal ekip tarafından sağlanmalı ve Resource içerik tipi olarak yüklenmelidir (bkz. docs/content-model.md)." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Örnek rapor talebi"
        primary={{ label: "Medikal Bilgi Talebi", href: "/saglik-profesyonelleri/medikal-bilgi" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
