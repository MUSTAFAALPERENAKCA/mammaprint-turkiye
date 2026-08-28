import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, SafetyNote } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Risk Sonuçlarını Anlamak",
  description: "MammaPrint sonuçlarındaki risk terimlerinin genel açıklaması.",
};

export default function SonuclariAnlamakPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Hastalar İçin", path: "/hastalar-icin" },
        { name: "Sonuçları Anlamak", path: "/hastalar-icin/sonuclari-anlamak" },
      ]} />
      <PageHero title="MammaPrint Sonuçlarını Anlamak" intro="Risk terimlerinin genel açıklaması; kişisel yorum için hekiminize danışın." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <p className="max-w-2xl text-text-muted">
          MammaPrint sonucu, &quot;MammaPrint Index&quot; adı verilen bir skala üzerinde sayısal
          olarak hesaplanır ve hekiminize aşağıdaki iki kategoriden biri olarak raporlanır.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-card border border-border bg-surface p-6 shadow-card">
            <h2 className="font-semibold text-primary-900">Low Risk (Düşük Risk)</h2>
            <p className="mt-2 text-sm text-text-muted">
              Genel olarak daha düşük bir uzak nüks riski sınıflandırmasını ifade eder.
            </p>
          </div>
          <div className="rounded-card border border-border bg-surface p-6 shadow-card">
            <h2 className="font-semibold text-primary-900">High Risk (Yüksek Risk)</h2>
            <p className="mt-2 text-sm text-text-muted">
              Genel olarak daha yüksek bir uzak nüks riski sınıflandırmasını ifade eder.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <SafetyNote>
            Bu sonuçlar tek başına bir tedavi kararı değildir ve kesin bir sonuç garantisi
            vermez. Sonuç yalnızca hekiminiz tarafından diğer klinik faktörlerle birlikte
            yorumlanır.
          </SafetyNote>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Doktorunuzla görüşmeye hazırlanın"
        primary={{ label: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
        secondary={{ label: "Sık Sorulan Sorular", href: "/hastalar-icin/sik-sorulan-sorular" }}
      />
    </div>
  );
}
