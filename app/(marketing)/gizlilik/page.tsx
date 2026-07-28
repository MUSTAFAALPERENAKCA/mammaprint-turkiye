import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MedicalReviewFlag } from "@/components/content/medical-disclaimer";

export const metadata: Metadata = {
  title: "Gizlilik ve KVKK Aydınlatma Metni",
  description: "Kişisel verilerin işlenmesine ilişkin aydınlatma metni ve gizlilik politikası.",
};

const sections = [
  { title: "Veri Sorumlusu", body: "[HUKUKİ ONAY GEREKLİ] Veri sorumlusunun tam unvan ve iletişim bilgileri buraya eklenecektir." },
  { title: "Kişisel Verilerin İşlenme Amacı", body: "İletişim formları aracılığıyla iletilen ad, iletişim bilgisi ve mesaj içeriği; talebinizi yanıtlamak amacıyla işlenir." },
  { title: "İşlemenin Hukuki Sebebi", body: "[HUKUKİ ONAY GEREKLİ] KVKK'nın ilgili maddesi (ör. m.5/2) hukuk ekibi tarafından belirlenip eklenecektir." },
  { title: "Kişisel Verilerin Aktarılması", body: "[HUKUKİ ONAY GEREKLİ] Yurt içi/yurt dışı aktarım mekanizmaları (varsa) hukuk ekibi tarafından değerlendirilip eklenecektir." },
  { title: "Saklama Süresi", body: "[HUKUKİ ONAY GEREKLİ] Form verilerinin saklama ve silme politikası hukuk ekibi tarafından belirlenecektir." },
  { title: "İlgili Kişinin Hakları", body: "KVKK madde 11 kapsamındaki haklarınızı kullanmak için İletişim sayfamızdaki kanallardan bize ulaşabilirsiniz." },
];

export default function GizlilikPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Gizlilik ve KVKK", path: "/gizlilik" }]} />
      <PageHero title="Gizlilik ve KVKK Aydınlatma Metni" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
        <div className="mb-6">
          <MedicalReviewFlag note="Bu sayfadaki metin genel bir yapı taslağıdır; nihai KVKK aydınlatma metni hukuk danışmanı tarafından onaylanmadan resmi olarak yayınlanmamalıdır (bkz. strateji dokümanı §14.4)." />
        </div>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-semibold text-primary-900">{section.title}</h2>
              <p className="mt-1 text-sm text-text-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
