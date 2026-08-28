import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Site içeriğinin kullanımına ilişkin koşullar ve sorumluluk sınırları.",
};

const sections = [
  { title: "Fikri Mülkiyet", body: "Bu sitedeki tüm içerik, marka ve görseller MammaPrint Türkiye ve/veya ilgili hak sahiplerine aittir. MammaPrint® ve BluePrint®, Agendia'nın tescilli markalarıdır." },
  { title: "İçerik Kullanımı", body: "Site içeriği yalnızca kişisel ve bilgilendirme amaçlı kullanım için sunulmaktadır; önceden yazılı izin olmadan ticari amaçla çoğaltılamaz." },
  {
    title: "Sorumluluk Sınırları",
    body: "Site içeriği genel bilgilendirme amaçlıdır; tıbbi tavsiye, tanı veya tedavi yerine geçmez. Bu siteyi kullanarak, sunulan bilgilerin genel nitelikte olduğunu ve kişisel sağlık kararlarınız için bir sağlık profesyoneline danışmanız gerektiğini kabul etmiş olursunuz. MammaPrint Türkiye, sitedeki bilgilerin doğruluğu için makul özeni gösterir; ancak sitenin kullanımından doğabilecek zararlardan, yürürlükteki mevzuatın izin verdiği ölçüde sorumlu tutulamaz.",
  },
];

export default function KullanimKosullariPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Kullanım Koşulları", path: "/kullanim-kosullari" }]} />
      <PageHero title="Kullanım Koşulları" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-semibold text-primary-900">{section.title}</h2>
              <p className="mt-1 text-sm text-text-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
