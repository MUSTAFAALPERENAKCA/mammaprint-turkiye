import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { DnaHelixIllustration } from "@/components/illustrations/dna-helix";

export const metadata: Metadata = {
  title: "Genomik Test Nedir? | Meme Kanserinde Gen İfadesi",
  description: "Genomik testlerin meme kanserinde ne ölçtüğü, kalıtsal genetik testlerden farkı ve diğer tanı yöntemleriyle ilişkisi.",
};

export default function GenomikTestNedirPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Genomik Test Nedir?", path: "/genomik-test-nedir" }]} />
      <PageHero
        title="Genomik Test Nedir?"
        intro="Genomik testler, tümör dokusundaki genlerin ne kadar aktif olduğunu (gen ekspresyonu) ölçerek tümörün biyolojisi hakkında ek bilgi sağlar."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-8 lg:grid-cols-2">
        <div className="space-y-4 text-text-muted">
          <p>
            Genlerimiz, hücrelerimizin nasıl davranacağına dair talimatlar taşır. Bir tümördeki
            genlerin ne kadar &quot;aktif&quot; (ifade edilmiş) olduğunu ölçmek, o tümörün büyüme
            ve yayılma eğilimi hakkında ek bilgi verebilir.
          </p>
          <p>
            Genomik testler, patoloji ve görüntüleme yöntemlerinin yerine geçmez; bu yöntemleri
            tamamlayan ek bir bilgi katmanı sunar. Testler tek başına tanı veya tedavi kararı
            vermez.
          </p>
        </div>
        <DnaHelixIllustration className="mx-auto h-auto w-full max-w-xs text-primary-900" />
      </section>
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-8">
          <h2 className="text-h3 font-semibold text-primary-900">Kalıtsal genetik testle karıştırılmamalı</h2>
          <p className="mt-2 text-text-muted">
            Genomik tümör testleri, kalıtsal yatkınlık testleriyle (ör. BRCA) aynı şey değildir.
          </p>
          <Link href="/genomik-test-genetik-test-farki" className="mt-4 inline-block text-sm font-medium underline">
            Farkı öğrenin →
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="MammaPrint ve BluePrint hakkında bilgi edinin"
        primary={{ label: "Testleri İnceleyin", href: "/testler" }}
        secondary={{ label: "Terimler Sözlüğü", href: "/sozluk" }}
      />
    </div>
  );
}
