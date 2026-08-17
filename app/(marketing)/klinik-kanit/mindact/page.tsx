import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MINDACT Çalışması",
  description: "MammaPrint'in klinik doğrulamasında landmark çalışma MINDACT hakkında bilgi.",
};

export default function MindactPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Bilimsel Kanıt", path: "/klinik-kanit" },
        { name: "MINDACT", path: "/klinik-kanit/mindact" },
      ]} />
      <PageHero
        title="MINDACT Çalışması"
        intro="MINDACT çalışması, meme kanseri nüks testi (MammaPrint) için prospektif, randomize ve faz III bir klinik çalışmadır."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="MINDACT"
          studyDesign="Prospektif, randomize, faz III klinik çalışma"
          patientPopulation="2007-2011 yılları arasında 9 ülkede erken evre meme kanseri ameliyatı olan 6.693 kadın"
          followUpDuration="5 yıllık takip verisi; yaklaşık 9 yıllık ortalama takip süresiyle elde edilen uzun vadeli veriler ASCO 2020'de sunuldu"
          finding="Çalışmanın amacı, MammaPrint testinin erken evre meme kanseri olan yüksek riskli hastalarda kemoterapi tedavisini, sonuçlarını olumsuz etkilemeden güvenli bir şekilde azaltmak için kullanılıp kullanılamayacağını belirlemekti. İlk veriler 2016 yılında New England Journal of Medicine'de yayınlandı ve klinik olarak yüksek riskli, MammaPrint Düşük Riskli hastaların sonuçlarından ödün vermeden kemoterapiden kaçınabileceğini gösterdi."
          clinicalImplication="MammaPrint sonucu, hekiminizin diğer klinik faktörlerle (klinik risk, evre, yaş vb.) birlikte değerlendirdiği ek bir bilgi kaynağıdır; tek başına tedavi kararı vermez."
          limitations="Çalışma sonuçları belirli bir hasta popülasyonuna (2007-2011, 9 ülke, erken evre meme kanseri) dayanır; her hasta için doğrudan genellenemez."
          sourceCitation="New England Journal of Medicine (2016); ASCO 2020 uzun vadeli takip sunumu. Bkz. agendia.com/landmark-trials/#mindact ve omnigen.com.tr/mindact-trial/"
        />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Diğer çalışmalar"
        primary={{ label: "NBRST Çalışması", href: "/klinik-kanit/nbrst" }}
        secondary={{ label: "Tüm Yayınlar", href: "/yayinlar" }}
      />
    </div>
  );
}
