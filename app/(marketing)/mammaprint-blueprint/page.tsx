import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { MammaPrintBadge, BluePrintBadge } from "@/components/illustrations/product-badges";

export const metadata: Metadata = {
  title: "MammaPrint + BluePrint Testleri | Tamamlayıcı İçgörü",
  description: "MammaPrint ve BluePrint birlikte, risk ve tümör biyolojisi hakkında tamamlayıcı bilgi sağlayabilir.",
};

export default function MammaPrintBluePrintPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Testler", path: "/testler" }, { name: "MammaPrint + BluePrint", path: "/mammaprint-blueprint" }]} />
      <PageHero
        title="MammaPrint ve BluePrint Birlikte Ne Sağlar?"
        intro="Tek bir doku örneğinden, risk ve tümör biyolojisi hakkında tamamlayıcı bir değerlendirme; her zaman diğer klinik faktörlerle birlikte yorumlanır."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-card border border-border bg-surface-tint-rose p-6">
            <MammaPrintBadge />
            <h2 className="mt-3 font-semibold text-primary-900">MammaPrint</h2>
            <p className="mt-1 text-sm text-text-muted">Uzak nüks riskinin değerlendirilmesine yardımcı olur.</p>
          </div>
          <div className="rounded-card border border-border bg-surface-tint-blue p-6">
            <BluePrintBadge />
            <h2 className="mt-3 font-semibold text-primary-900">BluePrint</h2>
            <p className="mt-1 text-sm text-text-muted">Moleküler alt tipi değerlendirmeye yardımcı olur.</p>
          </div>
        </div>
        <h2 className="mt-10 text-h3 font-semibold text-primary-900">Sınırlılıklar</h2>
        <p className="mt-2 max-w-2xl text-text-muted">
          Bu testler tek başına tanı veya tedavi kararı vermez; ek bir bilgi kaynağı olarak
          hekiminiz tarafından diğer klinik faktörlerle (patoloji, evre, yaş, lenf nodu durumu vb.)
          birlikte değerlendirilir.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Devam edin"
        primary={{ label: "Hastalar İçin İçerikler", href: "/hastalar-icin" }}
        secondary={{ label: "Sağlık Profesyonelleri İçin", href: "/saglik-profesyonelleri" }}
      />
    </div>
  );
}
