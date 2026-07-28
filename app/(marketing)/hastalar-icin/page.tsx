import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Hastalar ve Yakınları İçin MammaPrint Rehberi",
  description: "Süreç, uygunluk ve sonuçlar hakkında sade, kaygıyı artırmayan bilgiler.",
};

const links = [
  { title: "Kimler İçin Uygun?", href: "/hastalar-icin/kimler-icin-uygun", description: "MammaPrint testinin değerlendirilebileceği genel kriterler." },
  { title: "Test Nasıl Yapılır?", href: "/hastalar-icin/test-nasil-yapilir", description: "Ek bir cerrahi işlem olmadan mevcut doku örneğiyle süreç." },
  { title: "Sonuçları Anlamak", href: "/hastalar-icin/sonuclari-anlamak", description: "Risk terimlerinin genel açıklaması." },
  { title: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi", description: "Doktorunuza sorabileceğiniz sorular." },
  { title: "Sık Sorulan Sorular", href: "/hastalar-icin/sik-sorulan-sorular", description: "Hastaların en çok merak ettiği konular." },
];

export default function HastalarIcinPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Hastalar İçin", path: "/hastalar-icin" }]} />
      <PageHero
        title="Hastalar ve Yakınları İçin MammaPrint Rehberi"
        intro="Tanı sonrası belirsizliği kabul eden, kaygıyı artırmayan ve doktorunuzla görüşmenize hazırlanmanıza yardımcı olan bir rehber."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <h2 className="text-h3 font-semibold text-primary-900">Tanı sonrası ilk sorular</h2>
        <p className="mt-2 max-w-2xl text-text-muted">
          &quot;Hangi evredeyim?&quot;, &quot;Tümörün özellikleri ne?&quot;, &quot;Tedavi
          seçenekleri neler?&quot; ve &quot;Genomik test benim için değerlendirilebilir mi?&quot;
          gibi sorular doğaldır — bu sorular en iyi şekilde hekiminizle görüşmede yanıtlanır.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-card border border-border bg-surface p-5 shadow-card hover:border-mammaprint-accent">
              <h3 className="font-semibold text-primary-900">{link.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Kişisel tıbbi sorularınız için"
        description="Bu sayfalar genel bilgilendirme amaçlıdır; kişisel tedavi önerisi veremeyiz. Kişisel sorularınız için lütfen hekiminize danışın."
        primary={{ label: "Doktor Görüşmesi Rehberini İndirin", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
