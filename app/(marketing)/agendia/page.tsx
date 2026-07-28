import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { CtaBlock } from "@/components/content/cta-block";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Agendia Hakkında",
  description: "MammaPrint ve BluePrint testlerinin geliştiricisi Agendia hakkında bilgi.",
};

export default function AgendiaPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Hakkımızda", path: "/hakkimizda" }, { name: "Agendia", path: "/agendia" }]} />
      <PageHero title="Agendia" intro="MammaPrint ve BluePrint testlerinin geliştiricisi." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <p className="max-w-2xl text-text-muted">
          Agendia, MammaPrint ve BluePrint moleküler tanı testlerini geliştiren şirkettir. Bu
          testler, 20 yılı aşkın klinik doğrulama geçmişine dayanır.
        </p>
        <MedicalReviewFlag note="Agendia kurumsal bilgisi, marka ilişkisi ve güncel regülasyon statüsü metinleri Agendia/Omnigen tarafından onaylanmalıdır." />
      </section>
      <CtaBlock
        title="Omnigen ve Türkiye operasyonu"
        primary={{ label: "Omnigen Sayfasına Git", href: "/omnigen" }}
        secondary={{ label: "Klinik Kanıt Merkezi", href: "/klinik-kanit" }}
      />
    </div>
  );
}
