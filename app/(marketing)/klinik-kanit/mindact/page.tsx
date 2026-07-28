import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { EvidenceCard } from "@/components/content/evidence-card";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

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
      <PageHero title="MINDACT Çalışması" intro="MammaPrint'in klinik doğrulamasında kullanılan landmark prospektif çalışmalardan biri." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <EvidenceCard
          studyName="MINDACT"
          studyDesign="Prospektif, randomize klinik çalışma (tam tasarım detayı medikal onay bekliyor)"
          patientPopulation="Erken evre meme kanseri hastaları (kesin sayı ve kriterler medikal onay bekliyor)"
          followUpDuration="[MEDİKAL ONAY GEREKLİ]"
          finding="MammaPrint'in klinik risk değerlendirmesine tamamlayıcı bilgi sağladığı gösterilmiştir (kesin bulgu metni medikal onay bekliyor)"
          clinicalImplication="MammaPrint sonucu, hekimin diğer klinik faktörlerle birlikte değerlendirdiği bir bilgi kaynağıdır."
          limitations="Çalışma sonuçları belirli bir hasta popülasyonuna dayanır; her hasta için doğrudan genellenemez."
          sourceCitation="[MEDİKAL ONAY GEREKLİ — DOI/PubMed bağlantısı eklenecek]"
        />
        <MedicalReviewFlag note="Bu sayfadaki çalışma tasarımı, hasta sayısı, takip süresi ve bulgu detayları strateji dokümanında yer almıyor; medikal inceleyici tarafından yayın künyesi ile doğrulanmalı ve tamamlanmalıdır." />
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
