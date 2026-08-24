import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Kılavuzlar",
  description: "Meme kanseri tedavi kılavuzlarında genomik testlerin yeri.",
};

const guidelineOrganizations = [
  "NABON",
  "EGTM",
  "AJCC",
  "AGO (Arbeitsgemeinschaft Gynäkologische Onkologie)",
  "ASCO",
  "St. Gallen Oncology",
  "ESMO",
];

export default function KilavuzlarPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Kılavuzlar", path: "/kilavuzlar" }]} />
      <PageHero title="Kılavuzlar" intro="Meme kanseri tedavi kılavuzlarında genomik testlerin yeri hakkında kaynaklar." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <h2 className="text-h3 font-semibold text-primary-900">Uzman Klinik Uygulama Kılavuzları Tarafından Önerilir</h2>
        <p className="mt-3 max-w-3xl text-text-muted">
          MammaPrint, dünyaca tanınan kanser bakım kuruluşları tarafından geliştirilen çeşitli
          klinik uygulama kılavuzlarında yer almaktadır. Klinik rehberler, hastaların yönetiminde
          yer alan sağlık çalışanları için kanıta dayalı tavsiyelerdir. Kılavuzlar, en güncel
          hakemli belgelere dayanarak bakım ve hizmetlerin kalitesini iyileştirmeyi amaçlamaktadır.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {guidelineOrganizations.map((org) => (
            <span key={org} className="rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium text-primary-900">
              {org}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-text-muted">
          Kuruluş logoları burada gösterilmez; yalnızca isimleri referans amacıyla listelenmiştir.
        </p>
        <div className="mt-6 max-w-3xl rounded-card border border-border bg-surface-tint-blue p-5">
          <p className="text-sm text-primary-900">
            2026 NCCN Klinik Uygulama Kılavuzu güncellemesi, MammaPrint&apos;i hormon reseptörü
            pozitif, HER2 negatif (HR+/HER2-) erken evre meme kanserinde antrasiklin bazlı
            kemoterapi kullanımını kişiselleştirmek için tanınan tek genomik test olarak
            nitelendirmektedir.
          </p>
          <p className="mt-2 text-xs text-text-muted">
            Kaynak: Agendia basın açıklaması, 21 Mayıs 2026 (agendia.com), 2026 NCCN Kılavuz
            güncellemesine atıfla. Bu ifade yalnızca antrasiklin kullanım kararı ve HR+/HER2-
            hasta grubu için geçerlidir; diğer hasta gruplarına veya klinik kararlara
            genellenemez.
          </p>
        </div>
        <MedicalReviewFlag note="NCCN dahil güncel kılavuz referanslarının tam listesi ve doğrudan kaynak bağlantıları medikal/regülasyon ekibi tarafından tamamlanmalıdır. ASCO'nun lenf nodu pozitif hastalar için MammaPrint'i 'türünün tek testi' olarak onayladığı iddiası Agendia'nın kendi resmi sitesinde doğrulanamadı; bu iddia siteye eklenmemiştir." />
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
