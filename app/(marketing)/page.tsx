import Link from "next/link";
import { DnaHelixIllustration } from "@/components/illustrations/dna-helix";
import { MammaPrintBadge, BluePrintBadge } from "@/components/illustrations/product-badges";
import { BrandLockup } from "@/components/illustrations/brand-lockup";
import {
  DoctorReviewIcon,
  TissueSampleIcon,
  LabAnalysisIcon,
  ResultReviewIcon,
} from "@/components/illustrations/process-steps";

const processSteps = [
  { icon: DoctorReviewIcon, title: "Hekim değerlendirmesi", description: "Klinik uygunluk hekiminiz tarafından değerlendirilir." },
  { icon: TissueSampleIcon, title: "Mevcut doku örneği", description: "Ek bir invaziv işlem gerekmeden mevcut biyopsi veya ameliyat dokusu kullanılır." },
  { icon: LabAnalysisIcon, title: "Laboratuvar analizi", description: "Doku örneği genomik profili açısından analiz edilir." },
  { icon: ResultReviewIcon, title: "Sonuçların değerlendirilmesi", description: "Sonuçlar hekiminiz tarafından diğer klinik faktörlerle birlikte yorumlanır." },
];

export default function HomePage() {
  return (
    <div>
      {/* 2. Hero — Agendia referansından esinlenilmiş, marka renklerinde degrade panel
          (fotoğraf yerine; "Agendia'nın kendi logoları dışında görsel koyamıyoruz" kısıtına uygun). */}
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
              Meme kanserinin biyolojisini daha iyi anlamaya yardımcı genomik testler
            </h1>
            <p className="mt-4 text-body-lg text-white/85">
              MammaPrint meme kanseri nüks riskini ve BluePrint tümörün moleküler alt tiplendirmesi
              hakkında tamamlayıcı bilgiler sağlar. Sonuçlar hekiminiz tarafından diğer klinik
              faktörlerle birlikte yorumlanır.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/testler" className="rounded-full bg-mammaprint-accent px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg hover:opacity-90">
                Testleri Keşfedin
              </Link>
              <Link href="/hastalar-icin" className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-medium text-white hover:bg-white/10">
                Hastalar İçin Bilgi
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm sm:h-96 sm:w-96">
            <div className="absolute inset-6 rounded-full border border-white/15" />
            <DnaHelixIllustration className="h-auto w-full max-w-[220px] text-white sm:max-w-xs" />
          </div>
        </div>
      </section>

      {/* 3. İki temel soru */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-8 md:grid-cols-2">
          <Link
            href="/mammaprint"
            className="group rounded-card border border-border bg-surface p-6 shadow-card transition-colors hover:border-mammaprint-accent"
          >
            <MammaPrintBadge />
            <h2 className="mt-4 text-h3 font-semibold text-primary-900">Meme kanserinin tekrarlama riski nedir?</h2>
            <p className="mt-2 text-sm text-text-muted">
              MammaPrint, erken evre meme kanseri tümörünün genomik profilini analiz ederek nüks
              riskinin değerlendirilmesine yardımcı olur.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-mammaprint-accent">MammaPrint&apos;i inceleyin →</span>
          </Link>
          <Link
            href="/blueprint"
            className="group rounded-card border border-border bg-surface p-6 shadow-card transition-colors hover:border-blueprint-accent"
          >
            <BluePrintBadge />
            <h2 className="mt-4 text-h3 font-semibold text-primary-900">Tümörün büyümesini ne yönlendiriyor?</h2>
            <p className="mt-2 text-sm text-text-muted">
              BluePrint, tümörün büyümesini yönlendiren moleküler alt tipi değerlendirmeye
              yardımcı olur.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-blueprint-accent">BluePrint&apos;i inceleyin →</span>
          </Link>
        </div>
      </section>

      {/* 5. Hasta / hekim yolu */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-border bg-surface p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-tint-rose text-mammaprint-accent">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.5-4 8-8 11z" />
                </svg>
              </div>
              <h2 className="mt-4 text-h3 font-semibold text-primary-900">Tanı aldım, bilgi arıyorum</h2>
              <p className="mt-2 text-sm text-text-muted">
                Süreç, uygunluk ve sonuçlar hakkında sade, kaygıyı artırmayan bilgiler; doktorunuzla
                görüşmenize hazırlanmanıza yardımcı olur.
              </p>
              <Link href="/hastalar-icin" className="mt-4 inline-block text-sm font-medium text-primary-900 underline">
                Hastalar İçin Rehbere Git
              </Link>
            </div>
            <div className="rounded-card border border-border bg-surface p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-tint-blue text-blueprint-accent">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 3h6l1 4h4v4l-4 1v6a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-6l-4-1V7h4z" />
                </svg>
              </div>
              <h2 className="mt-4 text-h3 font-semibold text-primary-900">Sağlık profesyoneliyim</h2>
              <p className="mt-2 text-sm text-text-muted">
                Klinik uygunluk, numune/lojistik, örnek raporlar ve klinik kanıt kütüphanesine
                erişin.
              </p>
              <Link href="/saglik-profesyonelleri" className="mt-4 inline-block text-sm font-medium text-primary-900 underline">
                Sağlık Profesyonelleri Merkezine Git
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Test süreci */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
          <h2 className="text-h2 font-semibold text-primary-900">Test süreci</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-card border border-border bg-surface p-5 shadow-card">
                <div className="flex items-center gap-3 text-primary-900">
                  <step.icon />
                  <span className="text-sm font-semibold text-text-muted">Adım {index + 1}</span>
                </div>
                <h3 className="mt-3 font-semibold text-primary-900">{step.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Klinik kanıt (kaynaklı, abartısız) */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h2 className="text-h2 font-semibold text-primary-900">Bilimsel güven</h2>
        <p className="mt-2 max-w-2xl text-text-muted">
          MINDACT ve NBRST gibi landmark çalışmalar, MammaPrint ve BluePrint&apos;in klinik
          doğrulama geçmişini oluşturur. Her bulgu; hasta grubu, takip süresi ve sınırlılıklarıyla
          birlikte sunulur.
        </p>
        <Link href="/klinik-kanit" className="mt-4 inline-block text-sm font-medium text-primary-900 underline">
          Klinik Kanıt Merkezine Git
        </Link>
      </section>

      {/* 9. Bilgi merkezi + 11. Son CTA */}
      <section className="border-t border-border bg-primary-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-8">
          <h2 className="text-h2 font-semibold">Doktorunuzla konuşmaya hazır mısınız?</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/80">
            Doktorunuza sorabileceğiniz soruları indirin veya sağlık profesyoneli iseniz medikal
            bilgi için iletişime geçin.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/hastalar-icin/doktorla-konusma-rehberi" className="rounded-button bg-white px-5 py-3 text-sm font-medium text-primary-900">
              Doktor Görüşmesi Rehberini İndirin
            </Link>
            <Link href="/iletisim" className="rounded-button border border-white/40 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-text-muted sm:px-8">
        [MEDİKAL ONAY GEREKLİ] Bu sayfadaki bilimsel/klinik ifadeler strateji dokümanının editoryal
        taslağına dayanır; nihai yayın öncesi medikal inceleyici ve SEO editörü onayı gerekir. Bkz.
        docs/content-gaps.md.
      </p>
    </div>
  );
}
