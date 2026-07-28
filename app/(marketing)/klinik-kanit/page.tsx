import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Klinik Çalışmaları ve Bilimsel Kanıt",
  description: "MINDACT, NBRST, STO-3 ve NSABP B-42 gibi landmark çalışmalar.",
};

const studies = [
  { title: "MINDACT", href: "/klinik-kanit/mindact", description: "MammaPrint'in klinik doğrulamasında landmark çalışma." },
  { title: "NBRST", href: "/klinik-kanit/nbrst", description: "BluePrint moleküler alt tipleme ile ilişkili çalışma." },
  { title: "STO-3", href: "/klinik-kanit/sto-3", description: "UltraLow risk kavramıyla ilişkili çalışma." },
  { title: "NSABP B-42", href: "/klinik-kanit/nsabp-b42", description: "MammaPrint ile ilişkili klinik çalışma." },
];

export default function KlinikKanitPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Bilimsel Kanıt", path: "/klinik-kanit" }]} />
      <PageHero
        title="Klinik Kanıt Merkezi"
        intro="MammaPrint ve BluePrint, 20+ yıllık klinik doğrulama geçmişine sahip landmark çalışmalarla desteklenir. Her bulgu; hasta grubu, takip süresi ve sınırlılıklarıyla birlikte sunulur."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {studies.map((study) => (
            <Link key={study.href} href={study.href} className="rounded-card border border-border bg-surface p-6 shadow-card hover:border-primary-900">
              <h2 className="text-h3 font-semibold text-primary-900">{study.title}</h2>
              <p className="mt-2 text-sm text-text-muted">{study.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Yayın kütüphanesi ve kılavuzlar"
        primary={{ label: "Yayınlar", href: "/yayinlar" }}
        secondary={{ label: "Kılavuzlar", href: "/kilavuzlar" }}
      />
    </div>
  );
}
