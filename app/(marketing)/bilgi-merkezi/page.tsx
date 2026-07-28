import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";

export const metadata: Metadata = {
  title: "Bilgi Merkezi",
  description: "Blog, terimler sözlüğü, videolar ve indirilebilir kaynaklar.",
};

const links = [
  { title: "Blog", href: "/blog", description: "Meme kanseri, genomik testler ve klinik gelişmeler hakkında yazılar." },
  { title: "Terimler Sözlüğü", href: "/sozluk", description: "Sık kullanılan tıbbi terimlerin sade ve teknik açıklamaları." },
  { title: "Videolar", href: "/videolar", description: "Görsel anlatım içerikleri." },
  { title: "İndirilebilir Kaynaklar", href: "/kaynaklar", description: "Rehberler ve dokümanlar." },
];

export default function BilgiMerkeziPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Bilgi Merkezi", path: "/bilgi-merkezi" }]} />
      <PageHero title="Bilgi Merkezi" intro="Blog, terimler sözlüğü, videolar ve indirilebilir kaynaklara buradan ulaşabilirsiniz." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-card border border-border bg-surface p-5 shadow-card hover:border-primary-900">
              <h2 className="font-semibold text-primary-900">{link.title}</h2>
              <p className="mt-1 text-sm text-text-muted">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBlock
        title="Testler hakkında bilgi edinin"
        primary={{ label: "Testleri İnceleyin", href: "/testler" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
