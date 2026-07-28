import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { DoctorReviewIcon, TissueSampleIcon, LabAnalysisIcon, ResultReviewIcon } from "@/components/illustrations/process-steps";

export const metadata: Metadata = {
  title: "MammaPrint Test Talep Süreci",
  description: "Test istem ve numune gönderim süreci.",
};

const steps = [
  { icon: DoctorReviewIcon, title: "Klinik uygunluk değerlendirmesi" },
  { icon: TissueSampleIcon, title: "Numune istem formu ve gönderim" },
  { icon: LabAnalysisIcon, title: "Laboratuvar analiz süreci" },
  { icon: ResultReviewIcon, title: "Rapor teslimi" },
];

export default function TestTalebiPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Sağlık Profesyonelleri", path: "/saglik-profesyonelleri" },
        { name: "Test Talep Süreci", path: "/saglik-profesyonelleri/test-talebi" },
      ]} />
      <PageHero title="Test Talep Süreci" intro="Test istem ve numune gönderim sürecine genel bakış." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-card border border-border bg-surface p-5 shadow-card">
              <div className="flex items-center gap-3 text-primary-900">
                <step.icon />
                <span className="text-sm font-semibold text-text-muted">Adım {index + 1}</span>
              </div>
              <p className="mt-3 font-semibold text-primary-900">{step.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Numune ve lojistik detayları"
        primary={{ label: "Numune ve Lojistik", href: "/saglik-profesyonelleri/numune-ve-lojistik" }}
        secondary={{ label: "Medikal Bilgi Talebi", href: "/saglik-profesyonelleri/medikal-bilgi" }}
      />
    </div>
  );
}
