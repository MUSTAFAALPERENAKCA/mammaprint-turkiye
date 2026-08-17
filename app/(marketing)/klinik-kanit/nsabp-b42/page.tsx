import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

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
      <PageHero title="NSABP B-42 Çalışması" intro="Uzun süreli endokrin tedavi faydasını değerlendirmeye yönelik translasyonel bir çalışma." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="NSABP B-42"
          studyDesign="ER+ hastalarda uzun süreli letrozol tedavisinin etkisini inceleyen çalışma; genomik testlerle yürütülen translasyonel bir alt çalışma içerir"
          patientPopulation="ER+ (östrojen reseptörü pozitif) erken evre meme kanseri hastaları"
          followUpDuration="Uzatılmış (5 yıl sonrası ek) endokrin tedavi dönemini kapsayan takip"
          finding="NSABP B-42 çalışması, ER+ hastalarında uzun süreli letrozol tedavisi ile hastalıksız sağkalımda (DFS) küçük bir iyileşme olduğunu göstermiştir; ancak çalışma, uzun süreli endokrin tedavisi için en iyi adayları belirleyebilecek herhangi bir hasta veya tümör özelliği sağlamamıştır. Bunun üzerine NSABP, uzun süreli endokrin tedavisinden fayda sağlayıp sağlayamayacağını belirlemek için çeşitli genomik testlerle translasyonel bir çalışma yürütmüştür. Bu translasyonel analiz, MammaPrint'in erken evre meme kanseri olan kadınlarda uzatılmış endokrin tedaviden fayda görme olasılığını doğru bir şekilde tahmin edebildiğini göstermiştir. Düşük riskli hastalar, 5 yıllık ek hormon tedavisiyle önemli ölçüde daha iyi sonuçlar elde ederken, yüksek ve ultra düşük riskli hastalar uzatılmış endokrin tedaviden fayda görmemektedir."
          clinicalImplication="MammaPrint risk sonucu, hekiminizin uzatılmış endokrin tedavinin faydalı olup olmayacağını değerlendirirken göz önünde bulundurabileceği ek bir bilgi kaynağıdır."
          limitations="Bulgular ER+ hasta grubuna ve translasyonel alt çalışma tasarımına dayanır; bireysel tedavi kararı yerine geçmez."
          sourceCitation="Bkz. agendia.com/landmark-trials/#b42"
        />
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
