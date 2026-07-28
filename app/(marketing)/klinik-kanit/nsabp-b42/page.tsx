import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "NSABP B-42 Çalışması",
  description: "MammaPrint ile ilişkili NSABP B-42 klinik çalışması hakkında bilgi.",
};

export default function NsabpB42Page() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Bilimsel Kanıt", path: "/klinik-kanit" },
        { name: "NSABP B-42", path: "/klinik-kanit/nsabp-b42" },
      ]} />
      <PageHero title="NSABP B-42 Çalışması" intro="MammaPrint ile ilişkilendirilen klinik çalışmalardan biri." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="NSABP B-42"
          studyDesign="[MEDİKAL ONAY GEREKLİ — tam çalışma tasarımı]"
          patientPopulation="[MEDİKAL ONAY GEREKLİ — hasta grubu tanımı]"
          followUpDuration="[MEDİKAL ONAY GEREKLİ]"
          finding="[MEDİKAL ONAY GEREKLİ — kesin bulgu metni]"
          clinicalImplication="Sonuçlar, hekiminizin diğer klinik faktörlerle birlikte değerlendirdiği ek bir bilgi katmanıdır."
          limitations="[MEDİKAL ONAY GEREKLİ — sınırlılıklar]"
          sourceCitation="[MEDİKAL ONAY GEREKLİ — DOI/PubMed bağlantısı eklenecek]"
        />
        <MedicalReviewFlag note="Bu çalışma strateji dokümanında yalnızca isim olarak geçiyor; tam içerik medikal ekip tarafından sağlanmalıdır." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Tüm klinik kanıtları inceleyin"
        primary={{ label: "Klinik Kanıt Merkezi", href: "/klinik-kanit" }}
        secondary={{ label: "Tüm Yayınlar", href: "/yayinlar" }}
      />
    </div>
  );
}
