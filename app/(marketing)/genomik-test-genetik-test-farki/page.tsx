import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Genomik Test ve Genetik Test Arasındaki Fark",
  description: "Genomik tümör testi ile kalıtsal genetik test (ör. BRCA) aynı şey midir? Farkları nedir?",
};

const comparison = [
  {
    title: "Genomik tümör testi (MammaPrint)",
    points: [
      "Mevcut tümör dokusundaki gen ekspresyonunu ölçer",
      "Nüks riski değerlendirmesine yardımcı olur",
      "Kalıtsal değildir; yalnızca o tümöre özgüdür",
    ],
  },
  {
    title: "Kalıtsal genetik test (ör. BRCA)",
    points: [
      "Kandan veya tükürükten kalıtsal gen varyantlarını inceler",
      "Kanser gelişim riskini (yatkınlığı) değerlendirir",
      "Aile bireylerini de ilgilendirebilir",
    ],
  },
];

export default function GenomikGenetikFarkiPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Genomik/Genetik Test Farkı", path: "/genomik-test-genetik-test-farki" }]} />
      <PageHero
        title="Genomik Tümör Testi ile Kalıtsal Genetik Test Aynı mı?"
        intro="Hayır. Bu iki test türü farklı sorulara cevap verir ve farklı örneklerden çalışılır."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {comparison.map((item) => (
            <div key={item.title} className="rounded-card border border-border bg-surface p-6 shadow-card">
              <h2 className="font-semibold text-primary-900">{item.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="MammaPrint hakkında bilgi edinin"
        primary={{ label: "MammaPrint Sayfasına Git", href: "/mammaprint" }}
        secondary={{ label: "Genomik Test Nedir?", href: "/genomik-test-nedir" }}
      />
    </div>
  );
}
