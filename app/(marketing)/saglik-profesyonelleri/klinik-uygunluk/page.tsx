import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Klinik Uygunluk",
  description: "Klinik uygunluk matrisi ve resmi kullanım amacı.",
};

export default function KlinikUygunlukPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Sağlık Profesyonelleri", path: "/saglik-profesyonelleri" },
        { name: "Klinik Uygunluk", path: "/saglik-profesyonelleri/klinik-uygunluk" },
      ]} />
      <PageHero title="Klinik Uygunluk" intro="Resmi kullanım amacı ve klinik uygunluk kriterleri." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="max-w-2xl space-y-4 text-text-muted">
          <p>
            MammaPrint ve BluePrint testlerinin klinik uygunluk kriterleri; tümör evresi, hormon
            reseptörü durumu, lenf nodu tutulumu ve diğer patolojik özelliklere göre değerlendirilir.
          </p>
        </div>
        <MedicalReviewFlag note="Resmi kullanım amacı (endikasyon) metni ve tam uygunluk matrisi tablosu medikal/regülasyon ekibi tarafından sağlanmalı ve onaylanmalıdır." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Sonraki adım"
        primary={{ label: "Numune ve Lojistik", href: "/saglik-profesyonelleri/numune-ve-lojistik" }}
        secondary={{ label: "Klinik Kanıt Merkezi", href: "/klinik-kanit" }}
      />
    </div>
  );
}
