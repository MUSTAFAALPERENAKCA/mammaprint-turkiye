import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "NBRST Çalışması",
  description: "BluePrint moleküler alt tipleme ile ilişkili NBRST çalışması hakkında bilgi.",
};

export default function NbrstPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Bilimsel Kanıt", path: "/klinik-kanit" },
        { name: "NBRST", path: "/klinik-kanit/nbrst" },
      ]} />
      <PageHero title="NBRST Çalışması" intro="BluePrint moleküler alt tipleme ve yeniden sınıflandırma verisiyle ilişkili çalışma." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="NBRST"
          studyDesign="[MEDİKAL ONAY GEREKLİ — tam çalışma tasarımı]"
          patientPopulation="[MEDİKAL ONAY GEREKLİ — hasta grubu tanımı]"
          followUpDuration="[MEDİKAL ONAY GEREKLİ]"
          finding="BluePrint moleküler alt tipleme ile geleneksel patoloji sınıflandırması arasındaki ilişkiyi değerlendirmiştir (kesin bulgu oranları veri seti sürümüne göre değişebilir; medikal onay bekliyor)"
          clinicalImplication="BluePrint sonucu, hekimin patoloji ve diğer klinik bilgilerle birlikte değerlendirdiği tamamlayıcı bir bilgi kaynağıdır."
          limitations="Yeniden sınıflandırma oranları kullanılan veri setine göre değişebilir; hangi veri setinin kaynak alındığı açıkça belirtilmelidir."
          sourceCitation="[MEDİKAL ONAY GEREKLİ — DOI/PubMed bağlantısı eklenecek]"
        />
        <MedicalReviewFlag note="NBRST yeniden sınıflandırma oranları (ör. %22-23 aralığı gibi bağlama bağlı değerler) hangi veri setine ait olduğu belirtilerek medikal inceleyici tarafından doğrulanmalıdır (bkz. strateji dokümanı §8.2)." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Diğer çalışmalar"
        primary={{ label: "STO-3 Çalışması", href: "/klinik-kanit/sto-3" }}
        secondary={{ label: "BluePrint Sayfasına Git", href: "/blueprint" }}
      />
    </div>
  );
}
