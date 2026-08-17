import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Doktor Görüşmesi Rehberi",
  description: "Meme kanseri tanısından sonra doktorunuza sorabileceğiniz sorular.",
};

const questions = [
  "Hangi evredeyim ve tümörümün özellikleri neler?",
  "Tedavi seçeneklerim neler?",
  "Genomik test (MammaPrint/BluePrint) benim için değerlendirilebilir mi?",
  "Bu test için ek bir işlem gerekiyor mu?",
  "Sonuç kaç günde çıkar ve bana nasıl iletilir?",
  "Sonucu nasıl yorumlayacaksınız?",
  "Bu sonuç tedavi kararımı nasıl etkileyebilir?",
  "Başka hangi klinik faktörler dikkate alınacak?",
  "Sorularım olursa kiminle iletişime geçebilirim?",
];

export default function DoktorlaKonusmaRehberiPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Hastalar İçin", path: "/hastalar-icin" },
        { name: "Doktorla Konuşma Rehberi", path: "/hastalar-icin/doktorla-konusma-rehberi" },
      ]} />
      <PageHero
        title="Doktor Görüşmesi İçin Soru Listesi"
        intro="Meme kanseri tanısından sonra doktorunuza sorabileceğiniz sorular. Bu listeyi yazdırabilir veya notlarınıza ekleyebilirsiniz."
      />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
        <ol className="space-y-3">
          {questions.map((question, index) => (
            <li key={question} className="flex gap-3 rounded-card border border-border bg-surface p-4 shadow-card">
              <span className="font-semibold text-mammaprint-accent">{index + 1}.</span>
              <span className="text-text-muted">{question}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-text-muted">
          Bu liste genel bir başlangıç noktasıdır; durumunuza özgü ek sorularınız olabilir.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Daha fazla bilgiye mi ihtiyacınız var?"
        primary={{ label: "Sık Sorulan Sorular", href: "/hastalar-icin/sik-sorulan-sorular" }}
        secondary={{ label: "İletişime Geçin", href: "/iletisim" }}
      />
    </div>
  );
}
