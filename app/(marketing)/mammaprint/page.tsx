import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { Reveal } from "@/components/content/reveal";
import { CountUp } from "@/components/content/count-up";
import { medicalWebPageJsonLd, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "MammaPrint 70 Gen Meme Kanseri Nüks Testi",
  description: "MammaPrint testi, erken teşhis edilen her meme kanseri hastasının gereksiz kemoterapiye ihtiyacı olmadığını ortaya koyar.",
};

const eligibility = [
  "Kanseriniz erken evredeyse (Evre 1 veya Evre 2)",
  "Östrojen Reseptörünüz (ER) Pozitifse",
  "HER2 (cerb-B2) Negatif türündeyseniz",
  "Tümör çapınız 5 cm ya da daha küçükse",
  "Lenf nodu tutulumunuz negatif ya da 1-3 pozitifse",
  "Menopoz öncesi, sonrası ya da menopozdaysanız",
];

const sampleReports = [
  { label: "High Risk Luminal Örnek Sonuç", href: "https://mammaprintturkiye.com/docs/MA_High_1_Luminal_SAMPLE.pdf" },
  { label: "High Risk Basal Örnek Sonuç", href: "https://mammaprintturkiye.com/docs/MA_High_2_Basal_SAMPLE.pdf" },
  { label: "Ultra Low Luminal Örnek Sonuç", href: "https://mammaprintturkiye.com/docs/MA_UltraLow_Luminal_SAMPLE.pdf" },
  { label: "Low Luminal Örnek Sonuç", href: "https://mammaprintturkiye.com/docs/MA_Low_Risk_Luminal_SAMPLE.pdf" },
];

function StatTile({ value, children, tone = "rose" }: { value: number; children: React.ReactNode; tone?: "rose" | "blue" }) {
  const isRose = tone === "rose";
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 ${
        isRose ? "bg-surface-tint-rose" : "bg-surface-tint-blue"
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30 ${
          isRose ? "bg-mammaprint-accent" : "bg-blueprint-accent"
        }`}
      />
      <CountUp
        target={value}
        prefix="%"
        className={`relative block text-6xl font-extrabold tracking-tight tabular-nums ${isRose ? "text-mammaprint-accent" : "text-blueprint-accent"}`}
      />
      <p className="relative mt-3 text-sm leading-relaxed text-primary-900">{children}</p>
    </div>
  );
}

export default function MammaPrintPage() {
  const schema = medicalWebPageJsonLd({
    name: "MammaPrint 70 Gen Meme Kanseri Nüks Testi",
    url: `${getSiteUrl()}/mammaprint`,
    description: "MammaPrint testi, erken teşhis edilen her meme kanseri hastasının gereksiz kemoterapiye ihtiyacı olmadığını ortaya koyar.",
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ name: "MammaPrint", path: "/mammaprint" }]} />
      <PageHero
        logo={<Image src="/brand/mammaprint-logo-70gen.png" alt="MammaPrint" width={280} height={64} priority />}
        title="MammaPrint 70 Gen Meme Kanseri Nüks Testi"
        intro="Erken Teşhis Edilen Her Meme Kanseri Hastasına Kemoterapi Gerekmiyor"
      />

      <section className="mx-auto max-w-4xl space-y-6 px-4 py-16 text-lg leading-relaxed text-text-muted sm:px-8">
        <Reveal>
          <p>
            MammaPrint ve BluePrint genomik testleri, meme kanseri tedavi kararınızda gereksiz
            kemoterapi almamanız için hekimlere net sonuç veren testlerdir. MammaPrint testi erken
            teşhis edilen her meme kanseri hastasının, ciddi yan etkileri olan kemoterapiye ihtiyacı
            olmadığını ortaya koyar.
          </p>
        </Reveal>
        <Reveal>
          <p>
            Meme kanserinin erken aşamasında tespit edilen ve meme tümörü 5 cm&apos;den küçük olan
            kadınlar, standart uygulama olarak ameliyattan sonra hastanın klinik tablosuna göre
            kemoterapi ve/veya beraberinde diğer tedavileri de görebilmektedir. Bunun nedeni ise
            kanserin tekrarlama ve metastaz riskini ortadan kaldırmaktır.
          </p>
        </Reveal>
        <Reveal>
          <p>
            MammaPrint testi, tümörün genetiğini mercek altına alır. 70 gen ve 465 referans gen
            analiz edilerek, hangi meme kanseri hastasının gereksiz kemoterapi almasına gerek
            olmadığı tespit edilir.
          </p>
        </Reveal>

        <Reveal>
          <StatTile value={46} tone="rose">
            Avrupa&apos;da MammaPrint testi kullanılarak yapılan araştırmada, erken teşhis edilen
            yüksek riskli meme kanseri vakalarının %46&apos;sında kemoterapiye ihtiyaç olmadığı
            sonucuna varılmıştır.<sup>1</sup>
          </StatTile>
        </Reveal>

        <Reveal>
          <p>
            Yapılan klinik değerlendirmelerde tümörün tekrarlama riskinin yüksek olduğu sonucu
            çıkması ancak MammaPrint testi düşük riske işaret etmesi durumunda hastaya kemoterapi
            önerilmemektedir.
          </p>
        </Reveal>
        <Reveal>
          <p>
            BluePrint moleküler alt tipleme testi ile 80 gen analiz edilerek meme kanserinin Luminal
            tip (A veya B), Bazal tip veya HER2 tiplerinden hangisi olduğu belirlenir. Bu sayede
            meme kanseri hastasının en uygun tedavileri alması sağlanır.
          </p>
        </Reveal>

        <Reveal>
          <StatTile value={64} tone="blue">
            MINDACT çalışmasında tüm erken evre meme kanseri hastalarının %64&apos;ü MammaPrint
            testi ile düşük riskli saptanmıştır.
          </StatTile>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
          <Reveal>
            <h2 className="text-h2 font-bold tracking-tight text-primary-900">MammaPrint ve BluePrint Testleri Benim için Uygun mu?</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {eligibility.map((item, index) => (
              <Reveal key={item} delay={index * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mammaprint-accent to-blueprint-accent text-sm font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm text-text-muted">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-h2 font-bold tracking-tight text-primary-900">Meme Kanseri Tedavi Planlaması</h2>
          <p className="mt-3 text-text-muted">
            Sonuçlar; Düşük Risk veya Yüksek Risk olarak raporlanmaktadır (Gri Alan &amp; Orta Risk
            sonucu yoktur).
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface p-7 shadow-card">
              <span className="inline-block rounded-full bg-mammaprint-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-mammaprint-accent">
                Low Risk — Düşük Risk
              </span>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                MammaPrint testinin sonucuna göre düşük riskliyseniz; kanser nüksü açısından düşük
                risk altındasınız ve kemoterapiden önemli bir fayda sağlamayacaksınız.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                MammaPrint Düşük Risk (LOW) sonuçları olan hastalarda, sadece endokrin ve
                radyoterapi ile 5 yılda kanserin nüks etmeme oranı %94,4 iken tedaviye kemoterapi
                eklendiğinde bu oran %95,9 olmuştur. Aradaki %1,5&apos;lik fark istatistiksel olarak
                anlamlı değildir.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                ASCO 2020 toplantısında MINDACT çalışmasının uzun dönem takip verileri sunulmuştur.
                Yaklaşık 9 yıllık takip verileriyle aradaki %1,5&apos;lik fark %0,9&apos;a düşmüştür.
                Bu veriler ışığında MammaPrint Düşük Risk sonucuna sahip hastaların gereksiz
                kemoterapi almasının ve yan etki görmesinin önüne geçilmiştir.<sup>2</sup>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-surface p-7 shadow-card">
              <span className="inline-block rounded-full bg-primary-900/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-900">
                High Risk — Yüksek Risk
              </span>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                MammaPrint testinin sonucuna göre yüksek riskliyseniz, tedavinize kemoterapi
                eklenebileceği ve kemoterapiden muhtemel fayda görebileceğiniz anlamına gelir.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                MammaPrint testinin (Düşük Risk–Yüksek Risk) sonuçları, diğer genomik testlerde
                görülen ve %39&apos;a kadar karşılaşılabilen Orta Risk (Gri Alan) belirsizliğini
                ortadan kaldırır.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                ASCO 2016&apos;da sunulan prospektif PROMIS çalışması sonuçlarına göre; diğer
                genomik test yapılan ve Intermediate (Gri Zon) sonucu çıkan 840 erken evre meme
                kanseri hastasına MammaPrint testi yapılmış ve bu hastaların %45&apos;i düşük,
                %55&apos;i yüksek riskli çıkmıştır. MammaPrint testi hastalara kesin sonuçlar
                vermektedir.<sup>3</sup>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl space-y-8 px-4 py-16 sm:px-8">
          <Reveal>
            <div>
              <h2 className="text-h3 font-bold tracking-tight text-primary-900">MammaPrint testi FDA onaylıdır</h2>
              <p className="mt-2 text-text-muted">
                Parafin tümör bloğundan çalışılan MammaPrint testi, FDA (Amerikan Gıda ve İlaç
                Dairesi) onaylı bir testtir.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h2 className="text-h3 font-bold tracking-tight text-primary-900">
                NCCN Kılavuzu Kategori 1 seviyesinde (en üst seviye) MammaPrint testini önermektedir
              </h2>
              <p className="mt-2 text-text-muted">
                NCCN; ER pozitif, lenf nodu negatif veya lenf nodu pozitif (LN +1/+3) hastalar dahil
                olmak üzere, erken evre meme kanseri hastaları için Kategori 1 seviyesinde MammaPrint
                Meme Kanseri Nüks Testini önermektedir.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <h2 className="text-h3 font-bold tracking-tight text-primary-900">Uzman Klinik Uygulama Kılavuzları Tarafından Önerilir</h2>
              <p className="mt-2 text-text-muted">
                MammaPrint, dünyaca tanınan kanser kuruluşları tarafından geliştirilen sayısız klinik
                uygulama kılavuzuna dahil edilmiştir. Klinik kılavuzlar, hastaların yönetiminde yer
                alan sağlık çalışanları için kanıta dayalı tedavi yönergeleridir. Kılavuzlar, en
                güncel hakemli belgelere dayanarak bakım ve hizmetlerin kalitesini iyileştirmeyi
                amaçlamaktadır.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-h3 font-bold tracking-tight text-primary-900">Örnek Test Sonuçlarımız</h2>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {sampleReports.map((report, index) => (
            <Reveal key={report.href} delay={index * 60}>
              <a
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 text-sm font-medium text-primary-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-mammaprint-accent hover:shadow-glow-rose"
              >
                {report.label}
                <span aria-hidden="true">↓</span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-2xl text-text-muted">
            BluePrint Moleküler Alt Tipleme Testi, meme kanserinin Luminal Tip (A veya B), Bazal Tip
            veya HER2 tiplerinden hangisi olduğunu belirler.
          </p>
          <Link href="/blueprint" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blueprint-accent">
            BluePrint&apos;i inceleyin <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-4 py-8 text-xs text-text-muted sm:px-8">
          <p className="font-semibold text-primary-900">Referanslar</p>
          <ol className="mt-2 list-inside list-decimal space-y-1">
            <li>Cardoso F, van&apos;t Veer LJ, Bogaerts J et al. 70-Gene Signature as an Aid to Treatment Decisions in Early-Stage Breast Cancer. N Engl J Med 2016; 375:717-29.</li>
            <li>Wuerstlein R, et al. Results of multigene assay (MammaPrint®) and molecular subtyping (BluePrint®) substantially impact treatment decision making in early breast cancer: Final analysis of the WSG PRIMe Decision Impact Study. Poster presented at San Antonio Breast Cancer Symposium. December 2016; San Antonio, Texas.</li>
            <li>Tsai M., et al. The 70-gene signature provides risk stratification and treatment guidance for patients classified as intermediate by the 21-gene assay (PROMIS). Poster; ASCO 2016.</li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
    </div>
  );
}
