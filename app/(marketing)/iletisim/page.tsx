import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { Tabs } from "@/components/content/tabs";
import { ContactForm } from "@/components/forms/contact-form";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Türkiye İletişim",
  description: "Genel iletişim, sağlık profesyoneli desteği ve kurumsal/basın iletişimi.",
};

export default function IletisimPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "İletişim", path: "/iletisim" }]} />
      <PageHero title="Bize Ulaşın" intro="Genel bilgi, sağlık profesyoneli desteği veya kurumsal/basın iletişimi için aşağıdaki formlardan uygun olanı seçin." />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
        <Tabs
          tabs={[
            { label: "Genel İletişim", content: <ContactForm formType="general" /> },
            { label: "Sağlık Profesyoneli", content: <ContactForm formType="hcp" /> },
            { label: "Kurumsal / Basın", content: <ContactForm formType="corporate" /> },
          ]}
        />
        <div className="mt-10">
          <MedicalReviewFlag note="Açık adres, telefon numarası, çalışma saatleri ve yanıt süresi beklentisi kurumsal ekip tarafından sağlanmalıdır (bkz. strateji dokümanı §8.7)." />
        </div>
      </section>
    </div>
  );
}
