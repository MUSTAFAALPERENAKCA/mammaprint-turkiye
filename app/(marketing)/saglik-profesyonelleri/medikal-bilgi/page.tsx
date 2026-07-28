import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Medikal Bilgi Talebi",
  description: "Sağlık profesyonelleri için medikal bilgi talep formu.",
};

export default function MedikalBilgiPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Sağlık Profesyonelleri", path: "/saglik-profesyonelleri" },
        { name: "Medikal Bilgi Talebi", path: "/saglik-profesyonelleri/medikal-bilgi" },
      ]} />
      <PageHero title="Medikal Bilgi Talebi" intro="Kurum bilginizi ve sorunuzu paylaşın; medikal ekibimiz size dönüş yapacaktır." />
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-8">
        <ContactForm formType="hcp" />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
    </div>
  );
}
