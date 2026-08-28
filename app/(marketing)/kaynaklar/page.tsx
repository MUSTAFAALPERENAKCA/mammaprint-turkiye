import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { db } from "@/lib/db";
import { ResourceCard } from "@/components/content/resource-card";

export const metadata: Metadata = {
  title: "İndirilebilir Kaynaklar",
  description: "Doktor görüşmesi rehberi ve diğer indirilebilir kaynaklar.",
};

export const dynamic = "force-dynamic";

export default async function KaynaklarPage() {
  const resources = await db.resource.findMany({ where: { status: "published", noindex: false } });

  return (
    <div>
      <Breadcrumb items={[{ name: "İndirilebilir Kaynaklar", path: "/kaynaklar" }]} />
      <PageHero title="İndirilebilir Kaynaklar" intro="Rehberler ve dokümanlar." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        {resources.length === 0 ? (
          <div className="rounded-card border border-dashed border-border p-8 text-center text-text-muted">
            <p>
              İndirilebilir PDF kaynaklar hazırlanıyor. Şu an için Doktor Görüşmesi Rehberi&apos;ni
              web sayfası olarak görüntüleyebilirsiniz.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                documentType={resource.documentType}
                language={resource.language}
                version={resource.version}
                fileSize={`${Math.round(resource.fileSizeBytes / 1024)} KB`}
                href={resource.fileUrl}
              />
            ))}
          </div>
        )}
      </section>
      <CtaBlock
        title="Doktor görüşmesi rehberi"
        primary={{ label: "Rehberi Görüntüleyin", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
        secondary={{ label: "Bilgi Merkezi", href: "/bilgi-merkezi" }}
      />
    </div>
  );
}
