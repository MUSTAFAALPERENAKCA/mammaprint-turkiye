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

// Klinik kanıt sayfalarında (bkz. app/(marketing)/klinik-kanit/) zaten kaynak gösterilen
// çalışmaların yayın kütüphanesi kayıtları. Yazar listesi/cilt-sayfa numarası gibi teyit
// edilmemiş bibliyografik ayrıntılar eklenmedi; yalnızca doğrulanmış dergi/yıl/çalışma
// kimliği kullanıldı (bkz. docs/medical-claims-register.md, docs/revision-decisions.md).
const publications = [
  {
    slug: "mindact-nejm-2016",
    status: "published" as const,
    citation: "Cardoso F, ve ark. 70-Gene Signature as an Aid to Treatment Decisions in Early-Stage Breast Cancer. New England Journal of Medicine, 2016.",
    year: 2016,
    topic: "MINDACT çalışması — MammaPrint ile kemoterapi kararının desteklenmesi",
    relatedTest: "mammaprint" as const,
    type: "Randomize kontrollü çalışma (Faz III)",
    doiOrPubmedUrl: "https://agendia.com/landmark-trials/#mindact",
    summary:
      "6.693 hastalık, 9 ülkeden, prospektif randomize MINDACT çalışmasının ilk verileri; klinik olarak yüksek riskli, MammaPrint Düşük Riskli hastaların sonuçlarından ödün vermeden kemoterapiden kaçınabileceğini gösterdi.",
  },
  {
    slug: "mindact-asco-2020",
    status: "published" as const,
    citation: "MINDACT çalışması uzun vadeli takip verileri. ASCO Annual Meeting, 2020.",
    year: 2020,
    topic: "MINDACT çalışması — uzun vadeli (yaklaşık 9 yıl) takip sonuçları",
    relatedTest: "mammaprint" as const,
    type: "Konferans sunumu",
    doiOrPubmedUrl: "https://agendia.com/landmark-trials/#mindact",
    summary: "2016 NEJM bulgularını doğrulayan ve genişleten, yaklaşık 9 yıllık ortalama takip süresiyle elde edilen uzun vadeli MINDACT verileri.",
  },
  {
    slug: "nbrst-nct01479101",
    status: "published" as const,
    citation: "NBRST çalışması (NCT01479101). JCO Precision Oncology / Annals of Surgical Oncology, 2022.",
    year: 2022,
    topic: "NBRST çalışması — MammaPrint ve BluePrint'in ameliyat öncesi (neoadjuvan) kullanımı",
    relatedTest: "both" as const,
    type: "Prospektif kohort çalışması",
    doiOrPubmedUrl: "https://clinicaltrials.gov/study/NCT01479101",
    summary:
      "MammaPrint ve BluePrint'in neoadjuvan tedaviye patolojik tam yanıt (pCR) olasılığını tahmin edebildiğini ve BluePrint'in tümörleri farklı bir moleküler alt tipe yeniden sınıflandırabildiğini gösteren çalışma.",
  },
  {
    slug: "sto3-jama-oncology",
    status: "published" as const,
    citation: "Esserman LJ, ve ark. Stockholm Tamoxifen (STO-3) Trial — MammaPrint UltraLow risk analizi. JAMA Oncology.",
    year: 2017,
    topic: "STO-3 çalışması — UltraLow risk kavramı ve 20 yıllık takip",
    relatedTest: "mammaprint" as const,
    type: "Retrospektif analiz",
    doiOrPubmedUrl: "https://agendia.com/landmark-trials/#STO",
    summary:
      "20 yıllık takip verilerine sahip hasta örneklerinin MammaPrint ile analizinde, kanser nüksü riski son derece düşük olan bir hasta alt grubunun (UltraLow) doğru şekilde belirlenebildiğini gösteren çalışma.",
  },
  {
    slug: "nsabp-b42-jco-2024",
    status: "published" as const,
    citation: "NSABP B-42 çalışması, translasyonel genomik analiz. Journal of Clinical Oncology, 2024.",
    year: 2024,
    topic: "NSABP B-42 — uzatılmış endokrin tedavi faydası ve MammaPrint risk sonucu",
    relatedTest: "mammaprint" as const,
    type: "Translasyonel alt çalışma",
    doiOrPubmedUrl: "https://agendia.com/landmark-trials/#b42",
    summary:
      "MammaPrint Düşük Riskli hastaların 5 yıllık ek hormon tedavisiyle anlamlı ölçüde daha iyi sonuçlar elde ettiğini; Yüksek ve Ultra Düşük Riskli hastaların ise uzatılmış endokrin tedaviden fayda görmediğini gösteren translasyonel analiz.",
  },
];

async function main() {
  for (const publication of publications) {
    await db.publication.upsert({
      where: { slug: publication.slug },
      update: publication,
      create: publication,
    });
  }

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

  console.log(`Seeded ${redirects.length} redirects, ${blogCategories.length} blog categories, and ${publications.length} publications.`);
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
