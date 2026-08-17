import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

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
          studyName="NBRST (NCT01479101)"
          studyDesign="MammaPrint ve BluePrint'in ameliyat öncesi (neoadjuvan) tedavi faydasını göstermek amacıyla tasarlanmış çalışma"
          patientPopulation="Neoadjuvan endokrin tedavisi veya neoadjuvan kemoterapi tedavisi gören hastalar"
          followUpDuration="Başlangıç yanıt verileri ve uzun vadeli sonuçlar için 5 yıl takip"
          finding="Çalışma sonuçları, MammaPrint ve BluePrint'in ameliyat öncesi dönemde geniş bir kullanım yelpazesine sahip olduğunu gösterdi. Hem MammaPrint hem de BluePrint, neoadjuvan tedaviye patolojik tam yanıt (pCR) olasılığını doğru bir şekilde tahmin etti. Ayrıca BluePrint, hastaları patolojik alt tiplerinden farklı bir moleküler alt tipe tutarlı bir şekilde yeniden sınıflandırdı. Daha uzun süreli takip ile NBRST, MammaPrint ve BluePrint'in hastaları önemli ölçüde değişken sonuçlara sahip farklı alt gruplara ayırdığını gösterdi."
          clinicalImplication="BluePrint sonucu, hekiminizin patoloji ve diğer klinik bilgilerle birlikte değerlendirdiği tamamlayıcı bir bilgi kaynağıdır."
          limitations="Yeniden sınıflandırma oranları kullanılan veri setine ve rapor sürümüne göre değişebilir; güncel değerler için kaynağa bakılmalıdır."
          sourceCitation="ClinicalTrials.gov NCT01479101; bkz. agendia.com/landmark-trials/#NBRST"
        />
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
