/**
 * Özgün marka bloğu — MammaPrint (fuşya) + BluePrint (mavi) kelime işareti ve
 * alt slogan. Agendia'nın gerçek "fingerprint" logosunu izlemez/kopyalamaz;
 * yalnızca tipografi ve marka renkleriyle kurulmuş özgün bir tasarımdır.
 * Gerçek Agendia logo dosyası (SVG/PNG) sağlanırsa bu bileşenin yerine
 * doğrudan kullanılabilir.
 */
export function BrandLockup({ tagline = "Tümör Biyolojisini Aydınlatan Genomik Testler" }: { tagline?: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="text-mammaprint-accent">MammaPrint</span>
        <span className="mx-1 text-white/60">+</span>
        <span className="text-blueprint-accent">BluePrint</span>
      </p>
      <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-white/70">{tagline}</p>
    </div>
  );
}
