import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { FaqAccordion } from "@/components/content/faq-accordion";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";
import { medicalWebPageJsonLd, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "BluePrint 80 Gen Moleküler Alt Tipleme Testi",
  description: "BluePrint, tümörün büyümesini yönlendiren moleküler alt tipi değerlendirmeye yardımcı olur.",
};

const subtypes = [
  { name: "Luminal", description: "Hormon reseptörü yolakları ile ilişkili moleküler alt tip." },
  { name: "HER2", description: "HER2 sinyal yolağıyla ilişkili moleküler alt tip." },
  { name: "Basal", description: "Bazal benzeri gen ekspresyon profiliyle ilişkili moleküler alt tip." },
];

export default function BluePrintPage() {
  const schema = medicalWebPageJsonLd({
    name: "BluePrint 80 Gen Moleküler Alt Tipleme Testi",
    url: `${getSiteUrl()}/blueprint`,
    description: "BluePrint, tümörün büyümesini yönlendiren moleküler alt tipi değerlendirmeye yardımcı olur.",
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ name: "Testler", path: "/testler" }, { name: "BluePrint", path: "/blueprint" }]} />
      <PageHero
        logo={<Image src="/brand/blueprint-logo-80gen.png" alt="BluePrint" width={280} height={72} priority />}
        title="BluePrint® 80 Gen Moleküler Alt Tipleme Testi"
        intro="Temel soru: Tümörün büyümesini hangi biyolojik yol yönlendiriyor? BluePrint, moleküler alt tipi değerlendirmeye yardımcı olur."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <h2 className="text-h3 font-semibold text-primary-900">Moleküler alt tipler</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {subtypes.map((subtype) => (
            <div key={subtype.name} className="rounded-card border border-border bg-surface-tint-blue p-5 shadow-card">
              <p className="font-semibold text-primary-900">{subtype.name}</p>
              <p className="mt-1 text-sm text-text-muted">{subtype.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-text-muted">
          BluePrint, IHC/FISH gibi geleneksel patoloji yöntemlerinin yerine geçmez; tamamlayıcı bir
          moleküler değerlendirme sunar.
        </p>
        <MedicalReviewFlag note="NBRST yeniden sınıflandırma verisi (hasta grubu, veri seti sürümü ile birlikte) ve BluePrint'in MammaPrint'ten farklı regülasyon statüsü medikal inceleyici tarafından doğrulanmalıdır." />
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
          <h2 className="text-h3 font-semibold text-primary-900">Sık Sorulan Sorular</h2>
          <div className="mt-6 max-w-3xl">
            <FaqAccordion
              items={[
                {
                  question: "BluePrint ile patoloji sonucu (IHC/FISH) aynı şey mi?",
                  answer: "Hayır. BluePrint, geleneksel patolojinin yerine geçmez; tamamlayıcı bir moleküler değerlendirme sunar.",
                },
                {
                  question: "BluePrint ile MammaPrint birlikte mi kullanılır?",
                  answer: "Evet, birlikte kullanıldıklarında risk ve tümör biyolojisi hakkında tamamlayıcı bilgi sağlayabilirler.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>

      <CtaBlock
        title="MammaPrint ile birlikte kullanım"
        description="BluePrint ve MammaPrint birlikte, risk ve tümör biyolojisi hakkında tamamlayıcı içgörü sağlayabilir."
        primary={{ label: "MammaPrint + BluePrint", href: "/mammaprint-blueprint" }}
        secondary={{ label: "Hekim Kaynakları", href: "/saglik-profesyonelleri" }}
      />
      <p className="sr-only">
        <Link href="/mammaprint">MammaPrint sayfasına dön</Link>
      </p>
    </div>
  );
}
