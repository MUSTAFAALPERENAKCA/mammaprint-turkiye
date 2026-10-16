import Image from "next/image";

/**
 * Resmi MammaPrint + BluePrint marka bloğu — Agendia'nın sağladığı vektör logo
 * dosyalarından çıkarılmıştır (bkz. docs/asset-policy.md, "ONAYLANDI").
 */
export function BrandLockup({ tagline = "Tümör Biyolojisini Aydınlatan Genomik Testler" }: { tagline?: string }) {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        <Image src="/brand/mammaprint-logo.png" alt="MammaPrint" width={220} height={50} priority className="h-auto w-44 sm:w-[220px]" />
        <span className="text-xl font-light leading-none text-white/50 sm:text-2xl">+</span>
        <Image src="/brand/blueprint-logo.png" alt="BluePrint" width={200} height={52} priority className="h-auto w-40 sm:w-[200px]" />
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/70 sm:text-sm sm:tracking-[0.2em]">{tagline}</p>
    </div>
  );
}
