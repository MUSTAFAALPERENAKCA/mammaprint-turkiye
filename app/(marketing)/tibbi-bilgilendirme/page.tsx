import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Tıbbi Bilgilendirme ve Sorumluluk Reddi",
  description: "Site içeriğinin tanı veya tedavi yerine geçmediğine dair tıbbi bilgilendirme.",
};

export default function TibbiBilgilendirmePage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Tıbbi Bilgilendirme", path: "/tibbi-bilgilendirme" }]} />
      <PageHero title="Tıbbi Bilgilendirme ve Sorumluluk Reddi" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-text-muted sm:px-8">
        <p>
          Bu web sitesinde yer alan tüm içerikler yalnızca genel bilgilendirme amaçlıdır. Bu
          içerikler; tıbbi tanı, tedavi veya profesyonel sağlık danışmanlığının yerine geçmez.
        </p>
        <p>
          MammaPrint ve BluePrint test sonuçları, yalnızca hekiminiz tarafından diğer klinik
          faktörlerle (patoloji, evre, yaş, lenf nodu durumu ve diğer ilgili bilgiler) birlikte
          yorumlanır. Bu sonuçlar tek başına bir tedavi kararı vermez ve kesin bir sonuç garantisi
          içermez.
        </p>
        <p>
          Kişisel sağlık durumunuzla ilgili her türlü soru ve karar için lütfen bir sağlık
          profesyoneline danışın. Acil bir durumdaysanız derhal en yakın sağlık kuruluşuna
          başvurun.
        </p>
        <div className="pt-4">
          <MedicalReviewFlag note="Bu sayfadaki tıbbi bilgilendirme metni genel bir taslaktır; nihai metin medikal ve hukuk ekibi tarafından onaylanmalıdır (bkz. strateji dokümanı §14.4)." />
        </div>
      </section>
    </div>
  );
}
