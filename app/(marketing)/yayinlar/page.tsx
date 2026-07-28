import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer, MedicalReviewFlag } from "@/components/content/medical-disclaimer";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Yayın Kütüphanesi",
  description: "MammaPrint ve BluePrint ile ilgili bilimsel yayınlar.",
};

export const dynamic = "force-dynamic";

export default async function YayinlarPage() {
  const publications = await db.publication.findMany({
    where: { status: "published", noindex: false },
    orderBy: { year: "desc" },
  });

  return (
    <div>
      <Breadcrumb items={[{ name: "Yayınlar", path: "/yayinlar" }]} />
      <PageHero title="Yayın Kütüphanesi" intro="MammaPrint ve BluePrint ile ilgili bilimsel yayınlar ve özetleri." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        {publications.length === 0 ? (
          <div className="rounded-card border border-dashed border-border p-8 text-center text-text-muted">
            <p>Henüz yayınlanmış bir yayın kaydı bulunmuyor.</p>
            <MedicalReviewFlag note="Yayın kütüphanesi içeriği (künye, DOI/PubMed bağlantıları, özetler) medikal ekip tarafından sağlanıp CMS'e Publication içerik tipi olarak yüklenmelidir." />
          </div>
        ) : (
          <ul className="space-y-4">
            {publications.map((publication) => (
              <li key={publication.id} className="rounded-card border border-border bg-surface p-5 shadow-card">
                <p className="font-semibold text-primary-900">{publication.citation}</p>
                <p className="mt-1 text-sm text-text-muted">{publication.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Klinik kanıt merkezini inceleyin"
        primary={{ label: "Klinik Kanıt Merkezi", href: "/klinik-kanit" }}
        secondary={{ label: "Kılavuzlar", href: "/kilavuzlar" }}
      />
    </div>
  );
}
