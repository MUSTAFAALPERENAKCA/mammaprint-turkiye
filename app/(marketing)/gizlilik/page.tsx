import type { Metadata } from "next";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";

export const metadata: Metadata = {
  title: "Gizlilik ve KVKK Aydınlatma Metni",
  description: "Kişisel verilerin işlenmesine ilişkin aydınlatma metni ve gizlilik politikası.",
};

const sections = [
  {
    title: "Veri Sorumlusu",
    body: "Bu internet sitesi üzerinden paylaştığınız kişisel verileriniz, veri sorumlusu sıfatıyla MammaPrint Türkiye tarafından işlenir. Veri sorumlusuyla ilgili sorularınız için İletişim sayfamızdaki kanalları kullanabilirsiniz.",
  },
  { title: "Kişisel Verilerin İşlenme Amacı", body: "İletişim formları aracılığıyla iletilen ad, iletişim bilgisi ve mesaj içeriği; talebinizi yanıtlamak amacıyla işlenir." },
  {
    title: "İşlemenin Hukuki Sebebi",
    body: "Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında açık rızanız ve/veya talebinizin yerine getirilmesi için gerekli olması hukuki sebebine dayanılarak işlenir.",
  },
  {
    title: "Kişisel Verilerin Aktarılması",
    body: "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.",
  },
  {
    title: "Saklama Süresi",
    body: "Kişisel verileriniz, talebinizin işlenmesi için gerekli olan süre boyunca ve ilgili mevzuatın öngördüğü azami süreler dahilinde saklanır; bu sürelerin sonunda silinir veya anonim hale getirilir.",
  },
  { title: "İlgili Kişinin Hakları", body: "KVKK madde 11 kapsamındaki haklarınızı kullanmak için İletişim sayfamızdaki kanallardan bize ulaşabilirsiniz." },
];

export default function GizlilikPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: "Gizlilik ve KVKK", path: "/gizlilik" }]} />
      <PageHero title="Gizlilik ve KVKK Aydınlatma Metni" />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
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
