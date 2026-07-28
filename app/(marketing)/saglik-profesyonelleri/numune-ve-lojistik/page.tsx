import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";
import { TissueSampleIcon } from "@/components/illustrations/process-steps";

export const metadata: Metadata = {
  title: "Numune ve Lojistik Gereksinimleri",
  description: "FFPE blok/lam gereksinimleri, doku kalitesi, paketleme, gönderim ve takip.",
};

const requirements = [
  "FFPE (formalin ile sabitlenmiş, parafine gömülü) blok veya lam örnekleri",
  "Yeterli tümör hücresi içeriği ve doku kalitesi",
  "Uygun paketleme ve etiketleme standartları",
  "Gönderim sonrası numune takibi",
];

export default function NumuneVeLojistikPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Sağlık Profesyonelleri", path: "/saglik-profesyonelleri" },
        { name: "Numune ve Lojistik", path: "/saglik-profesyonelleri/numune-ve-lojistik" },
      ]} />
      <PageHero title="Numune ve Lojistik Gereksinimleri" intro="FFPE blok/lam gereksinimleri, doku kalitesi, paketleme, gönderim ve takip." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="flex items-start gap-4">
          <TissueSampleIcon />
          <ul className="space-y-2 text-text-muted">
            {requirements.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <MedicalReviewFlag note="Tam teknik numune rehberi (blok/lam sayısı, minimum tümör yüzdesi, paketleme talimatı, kargo/soğuk zincir gereksinimleri) laboratuvar/medikal ekip tarafından sağlanmalıdır." />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Test talep sürecine devam edin"
        primary={{ label: "Test Talep Süreci", href: "/saglik-profesyonelleri/test-talebi" }}
        secondary={{ label: "Medikal Bilgi Talebi", href: "/saglik-profesyonelleri/medikal-bilgi" }}
      />
    </div>
  );
}
