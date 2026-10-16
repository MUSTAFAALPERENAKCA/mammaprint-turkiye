import Image from "next/image";
import Link from "next/link";
import { AnimatedWords } from "@/components/content/animated-words";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary-900 px-4 text-center text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 70% at 20% 10%, rgba(198,53,122,0.4), transparent 62%), radial-gradient(45% 65% at 85% 90%, rgba(30,111,168,0.4), transparent 62%)",
        }}
      />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />
      <div className="float-y">
        <Image src="/brand/mammaprint-mark.png" alt="" width={329} height={289} aria-hidden="true" className="h-auto w-28 opacity-90" />
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">404</p>
      <h1 className="mt-2 text-4xl font-semibold sm:text-6xl">
        <AnimatedWords text="Bu sayfa bulunamadı" startDelay={100} />
      </h1>
      <p className="word-in mt-5 block! max-w-md text-white/75" style={{ animationDelay: "700ms" }}>
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam
        edebilirsiniz.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="rounded-full bg-mammaprint-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow-rose transition-transform duration-300 hover:scale-105">
          Ana Sayfaya Dön
        </Link>
        <Link href="/mammaprint" className="glass-panel-dark rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-white/15">
          MammaPrint
        </Link>
        <Link href="/blueprint" className="glass-panel-dark rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-white/15">
          BluePrint
        </Link>
        <Link href="/iletisim" className="rounded-full px-6 py-3 text-sm font-medium text-white/80 underline-offset-4 hover:underline">
          İletişim
        </Link>
      </div>
    </div>
  );
}
