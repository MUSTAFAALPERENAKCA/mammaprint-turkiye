import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";
import { CookiePreferencesButton } from "@/components/consent/cookie-preferences-button";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Sitede kullanılan çerez kategorileri ve tercih değiştirme yöntemi.",
};

const cookieCategories = [
  { name: "Zorunlu çerezler", purpose: "Sitenin temel işlevlerini (ör. çerez tercihi hatırlama) sağlar.", duration: "Oturum / 1 yıl", canDisable: false },
  { name: "Analitik çerezler", purpose: "Site kullanımını anonim olarak ölçmeye yardımcı olur.", duration: "[HUKUKİ ONAY GEREKLİ]", canDisable: true },
];

export default function CerezPolitikasiPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Çerez Politikası", path: "/cerez-politikasi" }]} />
      <PageHero title="Çerez Politikası" intro="Zorunlu olmayan çerezler yalnızca tercihiniz doğrultusunda çalışır." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <div className="mb-6">
          <MedicalReviewFlag note="Analitik çerezlerin tam adı, süresi ve tarafı (ör. Google Analytics çerez adları) GA4 kullanımı hukuk onayından geçtikten sonra bu tabloya eklenmelidir (bkz. ADR-008)." />
        </div>
        <table className="w-full overflow-hidden rounded-card border border-border text-left text-sm">
          <thead className="bg-surface-muted">
            <tr>
              <th className="p-3">Kategori</th>
              <th className="p-3">Amaç</th>
              <th className="p-3">Süre</th>
            </tr>
          </thead>
          <tbody>
            {cookieCategories.map((category) => (
              <tr key={category.name} className="border-t border-border">
                <td className="p-3 font-medium">{category.name}</td>
                <td className="p-3 text-text-muted">{category.purpose}</td>
                <td className="p-3 text-text-muted">{category.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <CookiePreferencesButton />
        </div>
      </section>
    </div>
  );
}
