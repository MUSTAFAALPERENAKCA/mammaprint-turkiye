import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

const redirects = [
  {
    sourceUrl: "https://mammaprintturkiye.com/en/",
    destinationUrl: "https://mammaprintturkiye.com/",
    statusCode: 301,
    note: "Duplicate Turkish content wrongly served under /en/; consolidate to root per strategy doc S6.3",
  },
  {
    sourceUrl: "https://mammaprintturkiye.com/en/mammaprint/",
    destinationUrl: "https://mammaprintturkiye.com/mammaprint/",
    statusCode: 301,
    note: "Duplicate MammaPrint page under /en/; single-hop redirect to canonical Turkish URL",
  },
  {
    sourceUrl: "https://mammaprintturkiye.com/en/blueprint/",
    destinationUrl: "https://mammaprintturkiye.com/blueprint/",
    statusCode: 301,
    note: "Duplicate BluePrint page under /en/; single-hop redirect to canonical Turkish URL",
  },
];

const blogCategories = [
  { slug: "meme-kanserini-anlamak", name: "Meme Kanserini Anlamak" },
  { slug: "genomik-testleri-anlamak", name: "Genomik Testleri Anlamak" },
  { slug: "mammaprint-rehberi", name: "MammaPrint Rehberi" },
  { slug: "blueprint-rehberi", name: "BluePrint Rehberi" },
  { slug: "tedavi-karari", name: "Tedavi Kararı" },
  { slug: "klinik-arastirmalar", name: "Klinik Araştırmalar" },
  { slug: "hekim-kaynaklari", name: "Hekim Kaynakları" },
  { slug: "mammaprint-turkiye-haberleri", name: "MammaPrint Türkiye Haberleri" },
];

// Genel, yerleşik tıbbi terminoloji tanımları (bkz. strateji dokümanı §8.3 sözlük bağlantıları).
// MammaPrint'e özgü iddia içermez; standart kısaltmaların genel açıklamasıdır.
const glossaryTerms = [
  {
    slug: "er",
    term: "ER (Östrojen Reseptörü)",
    simpleDefinition: "Tümör hücrelerinin östrojen hormonuna duyarlı olup olmadığını gösteren bir belirteç.",
    technicalDefinition: "Immünohistokimyasal (IHC) yöntemle değerlendirilen östrojen reseptörü ifadesi; hormon reseptörü durumunu belirler.",
  },
  {
    slug: "pr",
    term: "PR (Progesteron Reseptörü)",
    simpleDefinition: "Tümör hücrelerinin progesteron hormonuna duyarlı olup olmadığını gösteren bir belirteç.",
    technicalDefinition: "IHC ile değerlendirilen progesteron reseptörü ifadesi; genellikle ER ile birlikte raporlanır.",
  },
  {
    slug: "her2",
    term: "HER2",
    simpleDefinition: "Bazı meme kanseri hücrelerinin büyümesini hızlandırabilen bir protein.",
    technicalDefinition: "İnsan epidermal büyüme faktörü reseptörü 2; IHC veya FISH ile değerlendirilir.",
  },
  {
    slug: "ffpe",
    term: "FFPE",
    simpleDefinition: "Doku örneğinin incelenmek üzere özel olarak korunmuş hâli.",
    technicalDefinition: "Formalin ile Sabitlenmiş, Parafine Gömülü (Formalin-Fixed Paraffin-Embedded) doku örneği; genomik testlerde sıkça kullanılan standart numune formatıdır.",
  },
  {
    slug: "nuks",
    term: "Nüks",
    simpleDefinition: "Tedavi sonrası kanserin aynı veya yakın bölgede tekrar ortaya çıkması.",
    technicalDefinition: "Lokal, bölgesel veya uzak nüks olarak sınıflandırılabilir.",
  },
  {
    slug: "metastaz",
    term: "Metastaz",
    simpleDefinition: "Kanserin vücudun başka bir bölgesine yayılması.",
    technicalDefinition: "Tümör hücrelerinin birincil bölgeden uzak organ veya dokulara yayılması.",
  },
  {
    slug: "prognostik",
    term: "Prognostik (belirteç/test)",
    simpleDefinition: "Hastalığın genel gidişatı hakkında bilgi veren bir belirteç.",
    technicalDefinition: "Tedaviden bağımsız olarak hastalık seyri veya nüks olasılığı hakkında bilgi sağlayan belirteç/test türü.",
  },
  {
    slug: "prediktif",
    term: "Prediktif (belirteç/test)",
    simpleDefinition: "Belirli bir tedaviye yanıt verme olasılığı hakkında bilgi veren bir belirteç.",
    technicalDefinition: "Hastanın belirli bir tedaviye yanıt verme olasılığını öngörmeye yardımcı olan belirteç/test türü.",
  },
];

async function main() {
  for (const redirect of redirects) {
    await db.redirect.upsert({
      where: { sourceUrl: redirect.sourceUrl },
      update: redirect,
      create: redirect,
    });
  }

  for (const category of blogCategories) {
    await db.blogCategory.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }

  for (const term of glossaryTerms) {
    await db.glossaryTerm.upsert({
      where: { slug: term.slug },
      update: term,
      create: term,
    });
  }

  // Yerel geliştirme için tek seed admin hesabı. Production'da bu şifre
  // ilk girişte değiştirilmelidir; bkz. docs/security-checklist.md (Faz 5).
  const devAdminPassword = process.env.SEED_ADMIN_PASSWORD ?? "changeme123";
  await db.user.upsert({
    where: { email: "admin@mammaprintturkiye.com" },
    update: {},
    create: {
      name: "Süper Admin (yerel)",
      email: "admin@mammaprintturkiye.com",
      passwordHash: await bcrypt.hash(devAdminPassword, 12),
      role: "super_admin",
    },
  });

  console.log(`Seeded ${redirects.length} redirects and ${blogCategories.length} blog categories.`);
  console.log("Seeded local admin user: admin@mammaprintturkiye.com (see SEED_ADMIN_PASSWORD env var)");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
