import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { Tabs } from "@/components/content/tabs";
import { FaqAccordion } from "@/components/content/faq-accordion";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { RiskScale } from "@/components/content/risk-scale";
import { medicalWebPageJsonLd, faqJsonLd, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "MammaPrint 70 Gen Meme Kanseri Nüks Riski Testi",
  description:
    "MammaPrint, erken evre meme kanseri tümörünün gen ekspresyonunu analiz ederek nüks riskinin değerlendirilmesine yardımcı olur.",
};

const faqs = [
  {
    question: "MammaPrint testi için ek bir biyopsi gerekir mi?",
    answer:
      "Hayır. Test, ek bir invaziv işlem gerekmeden mevcut biyopsi veya ameliyat dokusundan çalışılabilir; uygunluk hekiminiz tarafından doğrulanır.",
  },
  {
    question: "Sonuç kaç günde çıkar?",
    answer:
      "Süre laboratuvar sürecine göre değişir; güncel süre bilgisi için hekiminizle veya laboratuvarla iletişime geçin.",
  },
  {
    question: "Sonucu kim yorumlar?",
    answer: "Sonuç, hekiminiz tarafından patoloji, evre ve diğer klinik faktörlerle birlikte yorumlanır.",
  },
  {
    question: "Genomik test ile kalıtsal genetik test aynı mı?",
    answer:
      "Hayır. MammaPrint, tümör dokusundaki genetiği değerlendiren bir genomik testtir; BRCA gibi kalıtsal genetik testlerden farklıdır.",
  },
];

export default function MammaPrintPage() {
  const schema = medicalWebPageJsonLd({
    name: "MammaPrint 70 Gen Meme Kanseri Nüks Riski Testi",
    url: `${getSiteUrl()}/mammaprint`,
    description:
      "MammaPrint, erken evre meme kanseri tümörünün gen ekspresyonunu analiz ederek nüks riskinin değerlendirilmesine yardımcı olur.",
  });
  const faqSchema = faqJsonLd({ questions: faqs.map((f) => ({ question: f.question, answer: f.answer })) });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}
      <Breadcrumb items={[{ name: "Testler", path: "/testler" }, { name: "MammaPrint", path: "/mammaprint" }]} />
      <PageHero
        eyebrow="MammaPrint®"
        title="MammaPrint® 70 Gen Meme Kanseri Nüks Riski Testi"
        intro="Erken evre meme kanserinde, yeni nesil sekanslama (NGS) teknolojisi kullanılarak 70 hedef gen ve 465 referans genin analiz edilmesi, tümörün genomik özelliklerinin değerlendirilmesine ve hastanın kemoterapi gereksiniminin belirlenmesine yönelik klinik karar sürecinin desteklenmesine yardımcı olur. Ayrıca uzak metastaz olmaksızın nüks riskinin değerlendirilmesine katkı sağlar."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <h2 className="text-h3 font-semibold text-primary-900">30 saniyede MammaPrint</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { q: "Ne ölçer?", a: "Tümör dokusundaki 70 genin genomik profilini." },
            { q: "Kim değerlendirebilir?", a: "Uygunluk hekiminiz tarafından klinik kriterlere göre değerlendirilir." },
            { q: "Hangi dokudan çalışılır?", a: "Mevcut biyopsi veya ameliyat dokusundan; ek işlem gerekmez." },
            { q: "Sonuç ne sağlar?", a: "Nüks riski hakkında hekiminizin yorumlayacağı ek bir içgörü." },
          ].map((item) => (
            <div key={item.q} className="rounded-card border border-border bg-surface p-5 shadow-card">
              <p className="font-semibold text-primary-900">{item.q}</p>
              <p className="mt-1 text-sm text-text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
          <Tabs
            tabs={[
              {
                label: "Hastalar İçin",
                content: (
                  <div className="max-w-2xl space-y-4 text-text-muted">
                    <p>
                      MammaPrint, doktorunuzun tedavi kararınızı değerlendirirken göz önünde
                      bulundurabileceği ek bir bilgi sağlar. Test, kesin bir tedavi kararı vermez;
                      hekiminizin diğer klinik bilgilerle birlikte yorumladığı bir araçtır.
                    </p>
                    <Link href="/hastalar-icin/kimler-icin-uygun" className="inline-block underline">
                      Kimler için değerlendirilebilir?
                    </Link>
                  </div>
                ),
              },
              {
                label: "Sağlık Profesyonelleri",
                content: (
                  <div className="max-w-2xl space-y-4 text-text-muted">
                    <p>
                      Klinik uygunluk kriterleri, numune gereksinimleri ve örnek rapor formatı
                      için Sağlık Profesyonelleri Merkezi&apos;ni inceleyin.
                    </p>
                    <Link href="/saglik-profesyonelleri/klinik-uygunluk" className="inline-block underline">
                      Klinik uygunluk detayları
                    </Link>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <h2 className="text-h3 font-semibold text-primary-900">Sonuçlar</h2>
        <p className="mt-2 max-w-2xl text-text-muted">
          MammaPrint sonuçları Low Risk (düşük risk) ve High Risk (yüksek risk) kategorilerinde
          sunulur; güncel rapor kapsamına göre Low kategorisi UltraLow kategorisi olarak da
          sınıflandırılabilir. Bu kategoriler kesin bir tedavi önerisi değildir — hekiminiz
          tarafından diğer klinik faktörlerle birlikte yorumlanır.
        </p>
        <div className="mt-6 max-w-2xl">
          <RiskScale />
        </div>
        <Link href="/hastalar-icin/sonuclari-anlamak" className="mt-4 inline-block text-sm underline">
          Sonuçları anlamak hakkında daha fazla bilgi
        </Link>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
          <h2 className="text-h3 font-semibold text-primary-900">Sık Sorulan Sorular</h2>
          <div className="mt-6 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>

      <CtaBlock
        title="MammaPrint hakkında daha fazla bilgi"
        primary={{ label: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
        secondary={{ label: "Örnek Rapor / Test Süreci", href: "/saglik-profesyonelleri/ornek-raporlar" }}
      />
    </div>
  );
}
