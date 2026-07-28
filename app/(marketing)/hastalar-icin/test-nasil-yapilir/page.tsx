import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { DoctorReviewIcon, TissueSampleIcon, LabAnalysisIcon, ResultReviewIcon } from "@/components/illustrations/process-steps";

export const metadata: Metadata = {
  title: "MammaPrint Testi Nasıl Yapılır?",
  description: "MammaPrint test süreci: hekim değerlendirmesi, mevcut doku örneği, laboratuvar analizi ve sonuçların değerlendirilmesi.",
};

const steps = [
  { icon: DoctorReviewIcon, title: "Hekim değerlendirmesi", description: "Hekiminiz klinik uygunluğunuzu değerlendirir." },
  { icon: TissueSampleIcon, title: "Mevcut doku örneği", description: "Ek bir cerrahi işlem gerekmeden mevcut biyopsi veya ameliyat dokusu kullanılır." },
  { icon: LabAnalysisIcon, title: "Laboratuvar analizi", description: "Doku örneği gen ekspresyonu açısından analiz edilir." },
  { icon: ResultReviewIcon, title: "Sonuçların değerlendirilmesi", description: "Rapor hekiminize ulaşır ve sizinle birlikte değerlendirilir." },
];

export default function TestNasilYapilirPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Hastalar İçin", path: "/hastalar-icin" },
        { name: "Test Nasıl Yapılır?", path: "/hastalar-icin/test-nasil-yapilir" },
      ]} />
      <PageHero title="MammaPrint Test Süreci" intro="Ek bir invaziv işlem gerekmeden mevcut doku örneğinizle ilerleyen dört adımlı bir süreç." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-card border border-border bg-surface p-5 shadow-card">
              <div className="flex items-center gap-3 text-primary-900">
                <step.icon />
                <span className="text-sm font-semibold text-text-muted">Adım {index + 1}</span>
              </div>
              <h2 className="mt-3 font-semibold text-primary-900">{step.title}</h2>
              <p className="mt-1 text-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Sonraki adım"
        primary={{ label: "Sonuçları Anlamak", href: "/hastalar-icin/sonuclari-anlamak" }}
        secondary={{ label: "Sık Sorulan Sorular", href: "/hastalar-icin/sik-sorulan-sorular" }}
      />
    </div>
  );
}
