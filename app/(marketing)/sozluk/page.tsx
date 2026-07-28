import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Terimler Sözlüğü",
  description: "Meme kanseri ve genomik testlerle ilgili sık kullanılan terimlerin sade ve teknik açıklamaları.",
};

export const dynamic = "force-dynamic";

export default async function SozlukPage() {
  const terms = await db.glossaryTerm.findMany({ orderBy: { term: "asc" } });

  return (
    <div>
      <Breadcrumb items={[{ name: "Terimler Sözlüğü", path: "/sozluk" }]} />
      <PageHero title="Terimler Sözlüğü" intro="Meme kanseri ve genomik testlerle ilgili sık kullanılan terimlerin sade ve teknik açıklamaları." />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
        <dl className="divide-y divide-border rounded-card border border-border bg-surface">
          {terms.map((term) => (
            <div key={term.id} className="p-5">
              <dt className="font-semibold text-primary-900">{term.term}</dt>
              <dd className="mt-2 text-sm text-text-muted">
                <span className="font-medium text-text-primary">Sade tanım: </span>
                {term.simpleDefinition}
              </dd>
              <dd className="mt-1 text-sm text-text-muted">
                <span className="font-medium text-text-primary">Teknik tanım: </span>
                {term.technicalDefinition}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <CtaBlock
        title="Genomik test nedir?"
        primary={{ label: "Genomik Test Nedir?", href: "/genomik-test-nedir" }}
        secondary={{ label: "Testleri İnceleyin", href: "/testler" }}
      />
    </div>
  );
}
