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
