import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

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
      <PageHero
        title="STO-3 Çalışması"
        intro="Tekrarlama riski son derece düşük olan meme kanseri türlerini bulmaya yönelik Stockholm Tamoksifen Denemesi (STO-3)."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="STO-3 (Stockholm Tamoksifen Denemesi)"
          studyDesign="Adjuvan tamoksifen tedavisinin etkinliğini değerlendiren klinik çalışma; JAMA Oncology'de yayınlanan retrospektif MammaPrint analizi ile genişletildi"
          patientPopulation="Menopoz sonrası kadınlar; 20 yıllık takip verilerine sahip hasta örnekleri"
          followUpDuration="20 yıllık takip verisi"
          finding="Stockholm Tamoksifen Denemesi'nin (STO-3) amacı, menopoz sonrası kadınlarda adjuvan tedavi olarak tamoksifenin etkinliğini değerlendirmekti. JAMA Oncology'de Esserman ve diğerlerinin yayınladığı makalede, bu çalışmadan elde edilen 20 yıllık takip verilerine sahip hasta örneklerinin analizinde MammaPrint kullanılarak, tam kür endokrin tedavisine ihtiyaç duymayan son derece yavaş ilerleyen kanserlerin tespit edilip edilemeyeceği araştırıldı. Bu analiz, MammaPrint'in tanıdan 20 yıl sonra kanser nüksü riski son derece düşük olan bir hasta alt grubunu doğru bir şekilde belirleyebildiğini göstermiştir. Endokrin tedavisi almayan hastalar ile 2 yıllık veya standart 5 yıllık endokrin tedavisi alan hastalar arasında sonuçlar açısından istatistiksel olarak anlamlı bir fark bulunmamıştır."
          clinicalImplication="UltraLow risk kavramı, hekiminizin diğer klinik faktörlerle birlikte değerlendirdiği ek bir bilgi katmanıdır; bireysel tedavi kararı yerine geçmez."
          limitations="Analiz, menopoz sonrası kadın hasta grubuna ve retrospektif veri setine dayanır; bireysel sonuç garantisi anlamına gelmez."
          sourceCitation="Esserman ve ark., JAMA Oncology; bkz. agendia.com/landmark-trials/#STO"
        />
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
