import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Kılavuzlar",
  description: "Meme kanseri tedavi kılavuzlarında genomik testlerin yeri.",
};

export default function KilavuzlarPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Kılavuzlar", path: "/kilavuzlar" }]} />
      <PageHero title="Kılavuzlar" intro="Meme kanseri tedavi kılavuzlarında genomik testlerin yeri hakkında kaynaklar." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="rounded-card border border-dashed border-border p-8 text-center text-text-muted">
          <p>Güncel kılavuz referansları (ör. NCCN) yakında burada yer alacaktır.</p>
        </div>
        <MedicalReviewFlag note="Kılavuz logoları/isimleri kullanım izni ve güncellik açısından medikal/regülasyon ekibi tarafından kontrol edilmelidir (bkz. strateji dokümanı §14.3)." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Klinik kanıt merkezini inceleyin"
        primary={{ label: "Klinik Kanıt Merkezi", href: "/klinik-kanit" }}
        secondary={{ label: "Yayınlar", href: "/yayinlar" }}
      />
    </div>
  );
}
