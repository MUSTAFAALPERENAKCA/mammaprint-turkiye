import Image from "next/image";

/**
 * Resmi MammaPrint + BluePrint marka bloğu — Agendia'nın sağladığı vektör logo
 * dosyalarından çıkarılmıştır (bkz. docs/asset-policy.md, "ONAYLANDI").
 */
export function BrandLockup({ tagline = "Tümör Biyolojisini Aydınlatan Genomik Testler" }: { tagline?: string }) {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Image src="/brand/mammaprint-logo.png" alt="MammaPrint" width={220} height={50} priority />
        <span className="text-2xl font-light text-white/50">+</span>
        <Image src="/brand/blueprint-logo.png" alt="BluePrint" width={200} height={52} priority />
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-white/70">{tagline}</p>
    </div>
  );
}
