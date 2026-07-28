import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-8">
      <h1 className="text-h1 font-semibold text-primary-900">
        Meme kanserinin biyolojisini daha iyi anlamaya yardımcı genomik testler
      </h1>
      <p className="mt-4 text-lg text-text-muted">
        MammaPrint nüks riski ve BluePrint moleküler alt tip hakkında tamamlayıcı içgörü sağlar.
        Sonuçlar hekiminiz tarafından diğer klinik faktörlerle birlikte yorumlanır.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/testler"
          className="rounded-button bg-primary-900 px-5 py-3 text-sm font-medium text-white"
        >
          Testleri Keşfedin
        </Link>
        <Link
          href="/hastalar-icin"
          className="rounded-button border border-border px-5 py-3 text-sm font-medium"
        >
          Hastalar İçin Bilgi
        </Link>
      </div>
      <p className="mt-16 text-xs text-text-muted">
        [MEDİKAL ONAY GEREKLİ] Bu sayfanın tam içeriği (§7 — 12 blok: iki temel soru, test süreci,
        klinik kanıt, güven/yetki, bilgi merkezi, SSS) Faz 2 kapsamında medikal/SEO onayından
        geçtikten sonra yayınlanacaktır. Bkz. docs/content-gaps.md.
      </p>
    </div>
  );
}
