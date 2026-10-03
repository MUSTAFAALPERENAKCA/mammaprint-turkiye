import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { Tabs } from "@/components/content/tabs";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { Reveal } from "@/components/content/reveal";
import { CountUp } from "@/components/content/count-up";
import { medicalWebPageJsonLd, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "BluePrint 80 Gen Moleküler Alt Tipleme Testi",
  description: "BluePrint Moleküler Alt Tipleme Testi, meme kanserinin Luminal Tip, Bazal Tip veya HER2 tiplerinden hangisi olduğunu belirler.",
};

export default function BluePrintPage() {
  const schema = medicalWebPageJsonLd({
    name: "BluePrint 80 Gen Moleküler Alt Tipleme Testi",
    url: `${getSiteUrl()}/blueprint`,
    description: "BluePrint Moleküler Alt Tipleme Testi, meme kanserinin Luminal Tip, Bazal Tip veya HER2 tiplerinden hangisi olduğunu belirler.",
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ name: "BluePrint", path: "/blueprint" }]} />
      <PageHero
        logo={<Image src="/brand/blueprint-logo-80gen.png" alt="BluePrint" width={280} height={72} priority />}
        title="BluePrint 80 Gen Moleküler Alt Tipleme Testi"
        intro="BluePrint Moleküler Alt Tipleme Testi, meme kanserinin Luminal Tip (A veya B), Bazal Tip veya HER2 tiplerinden hangisi olduğunu belirler."
      />

      <section className="mx-auto max-w-4xl space-y-6 px-4 py-16 text-lg leading-relaxed text-text-muted sm:px-8">
        <Reveal>
          <p>
            Meme kanseri tedavisinde, meme kanserinin alt tipi uzun vadeli sonuç, agresif tümör
            derecesi ve kemoterapiye yanıt bakımından farklıdır. BluePrint testi, 80 geni analiz
            ederek meme kanserinin moleküler alt tipini belirler. Böylece tümörü, uzun vadeli
            prognoz ve sistemik tedaviye yanıt hakkında en doğru şekilde sınıflandırır.
          </p>
        </Reveal>
        <Reveal>
          <p>
            Geleneksel alt tiplemeler (IHC ya da FISH gibi) hücre yüzey reseptörlerinin özelliklerine
            bakarak bir tümörün davranışı hakkında yeterli bilgi vermezken, moleküler alt tipleme
            testi BluePrint hangi genlerin gerçekten tümörün davranışını harekete geçirdiğini
            belirleyerek tümörün nasıl davranacağı hakkında derinlemesine bilgi verir. BluePrint
            tarafından sağlanan alt tip bilgisi sayesinde, doktorlar bir hastanın özel tedavi
            seçenekleri hakkında karar vermeleri ve böylece tedavilerini kişiselleştirmeleri
            konusunda daha iyi bilgi sahibi olurlar.
          </p>
        </Reveal>
        <Reveal>
          <p>
            2017 yılında yapılan NBRST çalışmasında<sup>4</sup>, MammaPrint testinin yanında
            BluePrint moleküler alt tipleme testinin yapılması ile, hastanın prognozunun daha iyi
            tahmin edildiği ve IHC/FISH gibi geleneksel yöntemlerle karşılaştırıldığında tedavi
            seçimine daha fazla katkısı olduğu anlaşılmıştır.
          </p>
        </Reveal>

        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface-tint-blue p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-1">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blueprint-accent opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />
            <CountUp target={22} prefix="%" className="relative block text-6xl font-extrabold tracking-tight tabular-nums text-blueprint-accent" />
            <p className="relative mt-3 text-sm leading-relaxed text-primary-900">
              NBRST çalışmasında, geleneksel (IHC veya FISH) yöntemler ile sınıflandırılan vakalara
              BluePrint testi yapıldığında, hastaların %22&apos;si yeniden sınıflandırıldı ve bu da
              hastanın moleküler profiline göre tedaviyi kişiselleştirme fırsatını ortaya
              koydu.<sup>4</sup>
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
          <Reveal>
            <h2 className="text-h2 font-bold tracking-tight text-primary-900">Moleküler Alt Tipler</h2>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <Tabs
              tabs={[
                {
                  label: "Luminal-Tip",
                  content: (
                    <p className="text-text-muted">
                      Luminal-Tip kanserler öncelikle östrojen ve progesteron hormon yollarıyla
                      yönlendirilir. Bu alt tip, MammaPrint kullanılarak Luminal A-Tipi kanserler
                      (Düşük Risk) ve Luminal B-Tipi kanserler (Yüksek Risk) olarak daha da
                      sınıflandırılır. Bu luminal alt tiplerin belirgin şekilde farklı sonuçları
                      vardır ve bu nedenle bu bilgi, hastanızı iyileştirme olasılığını en üst
                      düzeye çıkarmak için tedavi planlamasına dahil edilmelidir.
                    </p>
                  ),
                },
                {
                  label: "HER2-Tipi",
                  content: (
                    <p className="text-text-muted">
                      HER2-Tip kanserler öncelikle HER2 yoluyla yönlendirilir. Bu moleküler alt tip
                      her zaman IHC veya FISH HER2 sonuçlarıyla uyuşmaz; ancak HER2-Tip hastalar
                      neoadjuvan ortamda HER2 hedefli tedavilere mükemmel yanıt verir. Terapötiklerdeki
                      ilerlemelerle, HER2-Tip hastalar HER2 hedefli ajanlarla tedavi edildiğinde iyi
                      uzun vadeli sonuçlara sahiptir.
                    </p>
                  ),
                },
                {
                  label: "Bazal-Tip",
                  content: (
                    <p className="text-text-muted">
                      Bazal Tip tümörler ER, PR veya HER2 yollarıyla yönlendirilmez ve klinik olarak
                      üçlü negatif tümörlere daha çok benzerdir. Bu moleküler alt tip daha
                      agresiftir ve hastalar üçlü negatif meme kanserleri için standart veya yeni
                      tedavilerden faydalanabilir. Bu tümörlerin agresif doğası göz önüne
                      alındığında, uygun hastalar adjuvan tedaviden ziyade neoadjuvan tedaviden
                      faydalanabilir.
                    </p>
                  ),
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-h3 font-bold tracking-tight text-primary-900">Detaylı Analiz, Daha Etkili Tedavi</h2>
          <p className="mt-3 text-text-muted">
            MammaPrint ve BluePrint&apos;in klinik faktörlerle birleştirilmiş sonuçları sayesinde,
            hekimler prognozu ve belirli tedavilerin faydasını tahmin etmek için daha kapsamlı bir
            bilgi sahibi olmaktadır.
          </p>
          <Link href="/mammaprint" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mammaprint-accent">
            MammaPrint&apos;i inceleyin <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-4 py-8 text-xs text-text-muted sm:px-8">
          <p className="font-semibold text-primary-900">Referanslar</p>
          <ol className="mt-2 list-inside list-decimal space-y-1">
            <li>Krijgsman O, Roepman P, Zwart W, et al. A diagnostic gene profile for molecular subtyping of breast cancer associated with treatment response. Breast Cancer Res Treat. 2012; 133:37-47.</li>
            <li>Groenendijk FH, et al. NPJ Breast Cancer. 2019;5:15.</li>
            <li>Rong P et al. Cancer Res 2018;78(13 Suppl):Abstract nr 2612.</li>
            <li>Whitworth, et al. Ann Surg Oncol (2017) 24:669–675.</li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
    </div>
  );
}
