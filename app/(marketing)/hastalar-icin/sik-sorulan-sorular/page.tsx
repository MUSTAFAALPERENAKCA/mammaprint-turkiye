import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { FaqAccordion } from "@/components/content/faq-accordion";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hasta Sık Sorulan Sorular",
  description: "MammaPrint ve BluePrint testleri hakkında hastaların en çok sorduğu sorular.",
};

const faqs = [
  { question: "MammaPrint testi ağrılı mı, ek bir işlem gerektiriyor mu?", answer: "Hayır. Test, mevcut biyopsi veya ameliyat dokunuzdan çalışılır; ayrıca bir invaziv işlem gerekmez." },
  { question: "Test sonucunu kim yorumlayacak?", answer: "Sonucunuz hekiminiz tarafından diğer klinik bilgilerinizle birlikte yorumlanır." },
  { question: "Bu test kemoterapi almam gerekip gerekmediğine kesin olarak karar verir mi?", answer: "Hayır. Test, hekiminizin değerlendirmesine yardımcı olan ek bir bilgi kaynağıdır; kesin tedavi kararı tek başına bu teste dayanmaz." },
  { question: "MammaPrint ile genetik (kalıtsal) test aynı mı?", answer: "Hayır, farklıdır. Detaylar için Genomik/Genetik Test Farkı sayfamıza bakabilirsiniz." },
  { question: "Sonuçlarımı nasıl öğrenirim?", answer: "Sonuçlar laboratuvardan hekiminize ulaşır; hekiminiz sizinle görüşerek paylaşır." },
];

export default function HastaSssPage() {
  const schema = faqJsonLd({ questions: faqs });

  return (
    <div>
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
      <Breadcrumb items={[
        { name: "Hastalar İçin", path: "/hastalar-icin" },
        { name: "Sık Sorulan Sorular", path: "/hastalar-icin/sik-sorulan-sorular" },
      ]} />
      <PageHero title="Hastalar İçin Sık Sorulan Sorular" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
        <FaqAccordion items={faqs} />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Sorunuzu bulamadınız mı?"
        primary={{ label: "İletişime Geçin", href: "/iletisim" }}
        secondary={{ label: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
      />
    </div>
  );
}
