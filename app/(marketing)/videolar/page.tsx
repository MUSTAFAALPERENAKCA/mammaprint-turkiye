import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";

export const metadata: Metadata = {
  title: "Videolar",
  description: "MammaPrint ve BluePrint hakkında görsel anlatım içerikleri.",
};

export default function VideolarPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Videolar", path: "/videolar" }]} />
      <PageHero title="Videolar" intro="Görsel anlatım içerikleri yakında burada yer alacaktır." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="rounded-card border border-dashed border-border p-8 text-center text-text-muted">
          <p>Video içerikleri hazırlanma aşamasındadır.</p>
          <p className="mt-2 text-sm">
            Videolar yayınlandığında altyazı ve transkript sağlanacaktır (bkz.
            docs/accessibility-checklist.md).
          </p>
        </div>
      </section>
      <CtaBlock
        title="Bilgi merkezini keşfedin"
        primary={{ label: "Blog", href: "/blog" }}
        secondary={{ label: "Terimler Sözlüğü", href: "/sozluk" }}
      />
    </div>
  );
}
