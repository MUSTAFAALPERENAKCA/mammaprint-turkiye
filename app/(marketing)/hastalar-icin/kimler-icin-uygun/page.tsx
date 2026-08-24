import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "MammaPrint Kimler İçin Değerlendirilebilir?",
  description: "MammaPrint testinin değerlendirilebileceği genel klinik kriterler hekiminiz tarafından belirlenir.",
};

const criteria = [
  "Erken evre meme kanseri olmalı (Evre I veya Evre II)",
  "Lenf nodu tutulumu negatif ya da 1-3 pozitif lenf nodu (N1) olmalı",
  "Tümör çapı 5 cm ya da daha küçük olmalı",
];

export default function KimlerIcinUygunPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: "Hastalar İçin", path: "/hastalar-icin" },
        { name: "Kimler İçin Uygun?", path: "/hastalar-icin/kimler-icin-uygun" },
      ]} />
      <PageHero
        title="MammaPrint Testi Kimler İçin Uygun Olabilir?"
        intro="Uygunluk, resmi kullanım amacı ve yerel koşullar çerçevesinde hekiminiz tarafından değerlendirilir."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <div className="max-w-2xl space-y-4 text-text-muted">
          <p>
            MammaPrint, genel olarak erken evre meme kanseri tanısı almış ve tedavi kararı için ek
            bilgiye ihtiyaç duyulan hastalarda değerlendirilebilir. Kesin uygunluk; tümör evresi,
            hormon reseptörü durumu, lenf nodu tutulumu gibi klinik faktörlere bağlıdır ve
            hekiminiz tarafından belirlenir.
          </p>
          <p>
            Kişisel uygunluğunuz yalnızca hekiminiz tarafından, tüm klinik verileriniz birlikte
            değerlendirilerek belirlenebilir. Kesin uygunluk kriterleri hakkında güncel ve size özel
            bilgi için hekiminizle görüşün.
          </p>
        </div>
        <div className="mt-6 max-w-2xl rounded-card border border-border bg-surface p-6 shadow-card">
          <p className="font-semibold text-primary-900">Düzenleyici kurumlarca tanımlanan genel klinik kullanım kriterleri</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            {criteria.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-mammaprint-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-text-muted">
            Kaynak: agendia.com/mammaprint (FDA ve CE kullanım kriterleri özeti, 2026-08-24
            tarihinde doğrulandı). Bu liste genel bir bilgilendirmedir; hormon reseptörü ve HER2
            durumu gibi ek klinik faktörler de dahil olmak üzere kişisel uygunluğunuz yalnızca
            hekiminiz tarafından belirlenebilir.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <MedicalDisclaimer />
      </section>
      <CtaBlock
        title="Sonraki adım"
        primary={{ label: "Test Süreci", href: "/hastalar-icin/test-nasil-yapilir" }}
        secondary={{ label: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi" }}
      />
    </div>
  );
}
