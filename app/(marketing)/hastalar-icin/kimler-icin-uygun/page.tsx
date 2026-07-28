import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Kimler İçin Değerlendirilebilir?",
  description: "MammaPrint testinin değerlendirilebileceği genel klinik kriterler hekiminiz tarafından belirlenir.",
};

export default function KimlerIcinUygunPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Hastalar İçin", path: "/hastalar-icin" },
        { name: "Kimler İçin Uygun?", path: "/hastalar-icin/kimler-icin-uygun" },
      ]} />
      <PageHero
        title="MammaPrint Testi Kimler İçin Uygun Olabilir?"
        intro="Uygunluk, resmi kullanım amacı ve yerel koşullar çerçevesinde hekiminiz tarafından değerlendirilir."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="max-w-2xl space-y-4 text-text-muted">
          <p>
            MammaPrint, genel olarak erken evre meme kanseri tanısı almış ve tedavi kararı için ek
            bilgiye ihtiyaç duyulan hastalarda değerlendirilebilir. Kesin uygunluk; tümör evresi,
            hormon reseptörü durumu, lenf nodu tutulumu gibi klinik faktörlere bağlıdır ve
            hekiminiz tarafından belirlenir.
          </p>
          <p>Bu sayfa genel bir bilgilendirmedir; kişisel uygunluğunuz yalnızca hekiminiz tarafından değerlendirilebilir.</p>
        </div>
        <MedicalReviewFlag note="Resmi kullanım amacı (endikasyon) metni ve klinik kriter listesi medikal/regülasyon ekibi tarafından sağlanmalı ve onaylanmalıdır." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Sonraki adım"
        primary={{ label: "Test Süreci", href: "/hastalar-icin/test-nasil-yapilir" }}
        secondary={{ label: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
      />
    </div>
  );
}
