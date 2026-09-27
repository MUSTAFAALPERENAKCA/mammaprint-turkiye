import Image from "next/image";
import Link from "next/link";
import { DnaHelixIllustration } from "@/components/illustrations/dna-helix";
import { BrandLockup } from "@/components/illustrations/brand-lockup";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 15% 20%, rgba(198,53,122,0.35), transparent 60%), radial-gradient(55% 70% at 85% 80%, rgba(30,111,168,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-8">
          <BrandLockup />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-h1 font-semibold sm:text-display">
              Meme Kanseri Tedavisinde <span className="text-mammaprint-accent">Gereksiz Kemoterapiye Son</span>
            </h1>
            <p className="mt-4 text-body-lg text-white/85">
              MammaPrint ve BluePrint genomik testleri, meme kanseri tedavi kararınızda gereksiz
              kemoterapi almamanız için hekimlere net sonuç veren testlerdir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/mammaprint" className="rounded-full bg-mammaprint-accent px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg hover:opacity-90">
                MammaPrint&apos;i İnceleyin
              </Link>
              <Link href="/blueprint" className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-medium text-white hover:bg-white/10">
                BluePrint&apos;i İnceleyin
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm sm:h-96 sm:w-96">
            <div className="absolute inset-6 rounded-full border border-white/15" />
            <DnaHelixIllustration className="h-auto w-full max-w-[220px] text-white sm:max-w-xs" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-8 md:grid-cols-2">
          <Link
            href="/mammaprint"
            className="group rounded-card border border-border bg-surface p-8 text-center shadow-card transition-colors hover:border-mammaprint-accent"
          >
            <Image src="/brand/mammaprint-logo.png" alt="MammaPrint" width={220} height={50} className="mx-auto h-auto w-48" />
            <p className="mt-5 text-lg font-bold text-primary-900">70 GEN MEME KANSERİ NÜKS TESTİ</p>
            <span className="mt-4 inline-block text-sm font-medium text-mammaprint-accent">MammaPrint&apos;i inceleyin →</span>
          </Link>
          <Link
            href="/blueprint"
            className="group rounded-card border border-border bg-surface p-8 text-center shadow-card transition-colors hover:border-blueprint-accent"
          >
            <Image src="/brand/blueprint-logo.png" alt="BluePrint" width={200} height={52} className="mx-auto h-auto w-44" />
            <p className="mt-5 text-lg font-bold text-primary-900">80 GEN MOLEKÜLER ALT TİPLEME TESTİ</p>
            <span className="mt-4 inline-block text-sm font-medium text-blueprint-accent">BluePrint&apos;i inceleyin →</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <h2 className="text-center text-h2 font-semibold text-primary-900">MammaPrint Testi ile Tanışın</h2>
        <div className="mt-8 aspect-video overflow-hidden rounded-card border border-border shadow-card">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/zFEYJaBrbDk"
            title="MammaPrint Testi ile Meme Kanserinde Gereksiz Kemoterapiye Son"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-8">
          <p className="text-sm text-text-muted">
            Bu sitedeki bilgiler sadece <span className="font-semibold text-primary-900">bilgilendirme amaçlıdır</span>,
            tanı ve tedavi için mutlaka doktorunuza başvurunuz.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Bir <a href="https://omnigen.com.tr/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-900 underline">Omnigen</a> hizmetidir. MammaPrint® ve BluePrint® Agendia&apos;nın tescilli markalarıdır.
          </p>
        </div>
      </section>
    </div>
  );
}
