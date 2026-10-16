import Image from "next/image";
import Link from "next/link";
import { AnimatedWords } from "@/components/content/animated-words";
import { CountUp } from "@/components/content/count-up";
import { Marquee } from "@/components/content/marquee";
import { Parallax } from "@/components/content/parallax";
import { Reveal } from "@/components/content/reveal";
import { Spotlight } from "@/components/content/spotlight";
import { BrandLockup } from "@/components/illustrations/brand-lockup";

const trustItems = [
  "FDA onaylı test",
  "NCCN Kategori 1 seviyesinde öneri",
  "70 gen + 465 referans gen analizi",
  "80 gen moleküler alt tipleme",
  "MINDACT çalışması",
  "ASCO 2020 uzun dönem takip verileri",
  "NBRST çalışması",
];

const heroChips = [
  { value: "%46", text: "yüksek riskli vakalarda kemoterapi gerekmedi", pos: "left-0 top-[8%]", delay: "0s" },
  { value: "%64", text: "MINDACT'ta düşük riskli saptandı", pos: "right-0 top-[34%]", delay: "1.4s" },
  { value: "FDA", text: "onaylı test", pos: "left-[6%] bottom-[8%]", delay: "2.6s" },
];

const figures = [
  {
    value: 46,
    tone: "rose" as const,
    text: "Avrupa'daki araştırmada, erken teşhis edilen yüksek riskli meme kanseri vakalarının %46'sında kemoterapiye ihtiyaç olmadığı görüldü.",
    ref: "N Engl J Med 2016",
  },
  {
    value: 64,
    tone: "blue" as const,
    text: "MINDACT çalışmasında tüm erken evre meme kanseri hastalarının %64'ü MammaPrint ile düşük riskli saptandı.",
    ref: "MINDACT",
  },
  {
    value: 22,
    tone: "rose" as const,
    text: "NBRST çalışmasında geleneksel yöntemlerle sınıflandırılan vakaların %22'si BluePrint ile yeniden sınıflandırıldı.",
    ref: "Ann Surg Oncol 2017",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(55% 75% at 8% 8%, rgba(198,53,122,0.5), transparent 60%), radial-gradient(50% 65% at 92% 28%, rgba(30,111,168,0.45), transparent 60%), radial-gradient(60% 60% at 50% 115%, rgba(198,53,122,0.28), transparent 60%)",
          }}
        />
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-8 sm:pt-14">
          <BrandLockup />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <h1 className="text-[2.4rem] font-semibold leading-[1.04] tracking-tight sm:text-[3.6rem] lg:text-[4.4rem]">
              <AnimatedWords text="Meme Kanseri Tedavisinde" startDelay={150} />{" "}
              <AnimatedWords
                text="Gereksiz Kemoterapiye Son"
                startDelay={500}
                className="text-shimmer bg-gradient-to-r from-[#e0529a] via-[#4a9bd6] to-[#e0529a] bg-clip-text italic text-transparent"
              />
            </h1>
            <p className="word-in mt-6 block! max-w-xl text-body-lg text-white/80" style={{ animationDelay: "1100ms" }}>
              MammaPrint ve BluePrint genomik testleri, meme kanseri tedavi kararınızda gereksiz
              kemoterapi almamanız için hekimlere net sonuç veren testlerdir.
            </p>
            <div className="word-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "1300ms", display: "flex" }}>
              <Link
                href="/mammaprint"
                className="group relative overflow-hidden rounded-full bg-mammaprint-accent px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-glow-rose transition-transform duration-300 hover:scale-[1.04]"
              >
                <span className="relative z-10">MammaPrint&apos;i İnceleyin</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/blueprint"
                className="glass-panel-dark rounded-full px-7 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/15"
              >
                BluePrint&apos;i İnceleyin
              </Link>
            </div>
          </div>

          <Parallax speed={-0.06} className="relative mx-auto h-[22rem] w-full max-w-[26rem] sm:h-[28rem]">
            <div className="absolute inset-4 rounded-full glass-panel-dark" />
            <div className="spin-slow absolute inset-8 rounded-full border border-dashed border-white/20" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="float-y absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="pulse-soft absolute h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(198,53,122,0.5),transparent_68%)]" />
                <Image src="/brand/mammaprint-mark.png" alt="" width={329} height={289} priority aria-hidden="true" className="relative -mr-8 h-auto w-32 sm:w-40" />
                <Image src="/brand/blueprint-mark.png" alt="" width={374} height={328} priority aria-hidden="true" className="relative -ml-8 mt-10 h-auto w-32 sm:w-40" />
              </div>
            </div>
            {heroChips.map((chip) => (
              <div
                key={chip.value}
                className={`float-y glass-panel-dark absolute ${chip.pos} max-w-[11rem] rounded-2xl px-4 py-3 shadow-soft-lg`}
                style={{ animationDelay: chip.delay }}
              >
                <p className="text-2xl font-semibold leading-none">{chip.value}</p>
                <p className="mt-1 text-xs text-white/70">{chip.text}</p>
              </div>
            ))}
          </Parallax>
        </div>

        <div className="border-t border-white/10 bg-black/20 py-4 backdrop-blur-sm">
          <Marquee items={trustItems} />
        </div>
      </section>

      {/* Test kartları */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-5xl">
              İki test, <span className="italic text-mammaprint-accent">tek örnek</span>, net sonuç
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Spotlight className="h-full rounded-3xl" color="rgba(198,53,122,0.18)">
                <Link
                  href="/mammaprint"
                  className="group block h-full rounded-3xl border border-border bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-rose sm:p-10"
                >
                  <Image
                    src="/brand/mammaprint-logo.png"
                    alt="MammaPrint"
                    width={220}
                    height={50}
                    className="h-auto w-48 transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="mt-6 text-xl font-semibold tracking-tight text-primary-900 sm:text-2xl">70 GEN MEME KANSERİ NÜKS TESTİ</p>
                  <ul className="mt-5 space-y-2 text-sm text-text-muted">
                    <li className="flex gap-2"><span className="text-mammaprint-accent">✓</span> 70 gen ve 465 referans gen analizi</li>
                    <li className="flex gap-2"><span className="text-mammaprint-accent">✓</span> Düşük Risk / Yüksek Risk sonucu</li>
                    <li className="flex gap-2"><span className="text-mammaprint-accent">✓</span> FDA onaylı, NCCN Kategori 1 önerisi</li>
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-mammaprint-accent">
                    MammaPrint&apos;i inceleyin
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              </Spotlight>
            </Reveal>
            <Reveal delay={120}>
              <Spotlight className="h-full rounded-3xl" color="rgba(30,111,168,0.18)">
                <Link
                  href="/blueprint"
                  className="group block h-full rounded-3xl border border-border bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-blue sm:p-10"
                >
                  <Image
                    src="/brand/blueprint-logo.png"
                    alt="BluePrint"
                    width={200}
                    height={52}
                    className="h-auto w-44 transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="mt-6 text-xl font-semibold tracking-tight text-primary-900 sm:text-2xl">80 GEN MOLEKÜLER ALT TİPLEME TESTİ</p>
                  <ul className="mt-5 space-y-2 text-sm text-text-muted">
                    <li className="flex gap-2"><span className="text-blueprint-accent">✓</span> 80 gen analizi</li>
                    <li className="flex gap-2"><span className="text-blueprint-accent">✓</span> Luminal, HER2 ve Bazal alt tip belirleme</li>
                    <li className="flex gap-2"><span className="text-blueprint-accent">✓</span> IHC/FISH ile sınıflananların %22&apos;si yeniden sınıflandı</li>
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blueprint-accent">
                    BluePrint&apos;i inceleyin
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rakamlarla */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-5xl">
            Klinik çalışmalardan <span className="italic text-blueprint-accent">rakamlar</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {figures.map((figure, index) => (
            <Reveal key={figure.value} delay={index * 100}>
              <Spotlight
                className="h-full rounded-3xl"
                color={figure.tone === "rose" ? "rgba(198,53,122,0.2)" : "rgba(30,111,168,0.2)"}
              >
                <div
                  className={`h-full rounded-3xl border border-border p-8 shadow-card transition-transform duration-300 hover:-translate-y-1 ${
                    figure.tone === "rose" ? "bg-surface-tint-rose" : "bg-surface-tint-blue"
                  }`}
                >
                  <CountUp
                    target={figure.value}
                    prefix="%"
                    className={`block font-[family-name:var(--font-display)] text-7xl font-semibold tabular-nums ${
                      figure.tone === "rose" ? "text-mammaprint-accent" : "text-blueprint-accent"
                    }`}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-primary-900">{figure.text}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-text-muted">{figure.ref}</p>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold sm:text-5xl">MammaPrint Testi ile Tanışın</h2>
            <div className="relative mt-10">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2.5rem] opacity-60 blur-2xl"
                style={{ background: "linear-gradient(120deg, rgba(198,53,122,0.25), rgba(30,111,168,0.25))" }}
              />
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-border shadow-soft-lg">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/zFEYJaBrbDk"
                  title="MammaPrint Testi ile Meme Kanserinde Gereksiz Kemoterapiye Son"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kapanış CTA */}
      <section className="relative isolate overflow-hidden bg-primary-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 90% at 15% 0%, rgba(198,53,122,0.4), transparent 60%), radial-gradient(45% 80% at 90% 100%, rgba(30,111,168,0.4), transparent 60%)",
          }}
        />
        <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-5xl">
              MammaPrint ve BluePrint Testleri <span className="italic text-[#e0529a]">Benim için Uygun mu?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Erken evre, ER pozitif, HER2 negatif ve tümör çapı 5 cm veya daha küçükse sizin için
              uygun olabilir. Ayrıntılı kriterleri inceleyin.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <span className="border-flow inline-block rounded-full p-[2px]">
                <Link
                  href="/mammaprint#uygunluk"
                  className="block rounded-full bg-primary-900 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-primary-700"
                >
                  Uygunluk Kriterlerini Görün
                </Link>
              </span>
              <Link href="/iletisim" className="rounded-full px-6 py-3.5 text-sm font-medium text-white/85 underline-offset-4 hover:underline">
                İletişime Geçin
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bilgilendirme */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-8">
          <p className="text-sm text-text-muted">
            Bu sitedeki bilgiler sadece <span className="font-semibold text-primary-900">bilgilendirme amaçlıdır</span>,
            tanı ve tedavi için mutlaka doktorunuza başvurunuz.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Bir{" "}
            <a href="https://omnigen.com.tr/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-900 underline">
              Omnigen
            </a>{" "}
            hizmetidir. MammaPrint® ve BluePrint® Agendia&apos;nın tescilli markalarıdır.
          </p>
        </div>
      </section>
    </div>
  );
}
