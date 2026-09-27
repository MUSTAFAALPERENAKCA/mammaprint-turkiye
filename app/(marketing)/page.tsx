import Image from "next/image";
import Link from "next/link";
import { DnaHelixIllustration } from "@/components/illustrations/dna-helix";
import { BrandLockup } from "@/components/illustrations/brand-lockup";
import { Reveal } from "@/components/content/reveal";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero — katmanlı gradient mesh + cam panel */}
      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 75% at 10% 10%, rgba(198,53,122,0.45), transparent 60%), radial-gradient(50% 65% at 90% 30%, rgba(30,111,168,0.4), transparent 60%), radial-gradient(60% 60% at 50% 110%, rgba(198,53,122,0.25), transparent 60%)",
          }}
        />
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(198,53,122,0.6), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(30,111,168,0.6), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-8">
          <BrandLockup />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h1 className="text-h1 font-bold leading-[1.05] tracking-tight sm:text-mega">
              Meme Kanseri Tedavisinde{" "}
              <span className="bg-gradient-to-r from-mammaprint-accent to-blueprint-accent bg-clip-text text-transparent">
                Gereksiz Kemoterapiye Son
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-white/80">
              MammaPrint ve BluePrint genomik testleri, meme kanseri tedavi kararınızda gereksiz
              kemoterapi almamanız için hekimlere net sonuç veren testlerdir.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/mammaprint"
                className="group relative overflow-hidden rounded-full bg-mammaprint-accent px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-glow-rose transition-transform duration-300 hover:scale-[1.03]"
              >
                MammaPrint&apos;i İnceleyin
              </Link>
              <Link
                href="/blueprint"
                className="glass-panel-dark rounded-full px-7 py-3.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-white/15"
              >
                BluePrint&apos;i İnceleyin
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full glass-panel-dark sm:h-[26rem] sm:w-[26rem]">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <DnaHelixIllustration className="h-auto w-full max-w-[240px] text-white sm:max-w-xs" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Test kartları */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-8 md:grid-cols-2">
          <Reveal>
            <Link
              href="/mammaprint"
              className="group block h-full rounded-3xl border border-border bg-surface p-10 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-rose"
            >
              <Image src="/brand/mammaprint-logo.png" alt="MammaPrint" width={220} height={50} className="mx-auto h-auto w-48" />
              <p className="mt-6 text-lg font-bold tracking-tight text-primary-900">70 GEN MEME KANSERİ NÜKS TESTİ</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-mammaprint-accent">
                MammaPrint&apos;i inceleyin
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/blueprint"
              className="group block h-full rounded-3xl border border-border bg-surface p-10 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-blue"
            >
              <Image src="/brand/blueprint-logo.png" alt="BluePrint" width={200} height={52} className="mx-auto h-auto w-44" />
              <p className="mt-6 text-lg font-bold tracking-tight text-primary-900">80 GEN MOLEKÜLER ALT TİPLEME TESTİ</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blueprint-accent">
                BluePrint&apos;i inceleyin
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-8">
        <Reveal>
          <h2 className="text-center text-h2 font-bold tracking-tight text-primary-900">MammaPrint Testi ile Tanışın</h2>
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bilgilendirme + partnerler */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-8">
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
