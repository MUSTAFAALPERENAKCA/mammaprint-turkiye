import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Kimler İçin Değerlendirilebilir?",
  description: "MammaPrint testinin değerlendirilebileceği genel klinik kriterler hekiminiz tarafından belirlenir.",
};

const criteria = [
  "Erken evre meme kanseri olmalı (Evre 1 veya Evre 2)",
  "ER (Östrojen Reseptörü) pozitif olmalı",
  "HER2 (cerb-B2) negatif olmalı",
  "Tümör çapı 5 cm ya da daha küçük olmalı",
  "Lenf nodu tutulumu negatif ya da 1-3 (N1) pozitife kadar olmalı",
];

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
        </div>
        <div className="mt-6 max-w-2xl rounded-card border border-border bg-surface p-6 shadow-card">
          <p className="font-semibold text-primary-900">Genel klinik uygunluk kriterleri</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            {criteria.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-mammaprint-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-text-muted">
            Bu liste genel bir bilgilendirmedir; kişisel uygunluğunuz yalnızca hekiminiz tarafından,
            tüm klinik verileriniz birlikte değerlendirilerek belirlenebilir.
          </p>
        </div>
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
