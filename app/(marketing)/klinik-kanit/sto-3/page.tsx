import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "STO-3 Çalışması",
  description: "UltraLow risk kavramıyla ilişkili STO-3 çalışması hakkında bilgi.",
};

export default function Sto3Page() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Bilimsel Kanıt", path: "/klinik-kanit" },
        { name: "STO-3", path: "/klinik-kanit/sto-3" },
      ]} />
      <PageHero title="STO-3 Çalışması" intro="UltraLow risk kavramıyla ilişkili veriler sunan çalışma." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="STO-3"
          studyDesign="[MEDİKAL ONAY GEREKLİ — tam çalışma tasarımı]"
          patientPopulation="[MEDİKAL ONAY GEREKLİ — hasta grubu tanımı]"
          followUpDuration="[MEDİKAL ONAY GEREKLİ]"
          finding="UltraLow risk sınıflandırmasının uzun dönem takip verileriyle ilişkisini değerlendirmiştir (kesin bulgu metni medikal onay bekliyor)"
          clinicalImplication="UltraLow risk kavramı, hekiminizin diğer klinik faktörlerle birlikte değerlendirdiği ek bir bilgi katmanıdır."
          limitations="Uzun dönem takip verileri belirli bir hasta grubuna dayanır; bireysel sonuç garantisi anlamına gelmez."
          sourceCitation="[MEDİKAL ONAY GEREKLİ — DOI/PubMed bağlantısı eklenecek]"
        />
        <MedicalReviewFlag note="UltraLow risk verilerinin nasıl okunması gerektiği (bkz. strateji dokümanı Ek C) medikal inceleyici tarafından doğrulanmalıdır." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Diğer çalışmalar"
        primary={{ label: "NSABP B-42 Çalışması", href: "/klinik-kanit/nsabp-b42" }}
        secondary={{ label: "MammaPrint Sayfasına Git", href: "/mammaprint" }}
      />
    </div>
  );
}
