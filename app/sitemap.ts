import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { absoluteUrl } from "@/lib/seo";

// Yayınlanan içerik değiştikçe güncel kalmalı; build-time'da statik
// üretilirse DB'siz build ortamlarında (ör. Docker) hata verir.
export const dynamic = "force-dynamic";

/**
 * Gereksinim S-04: yalnızca indekslenebilir (noindex=false, published) URL'ler.
 * Faz 2/3'te Page/BlogPost içerikleri eklendikçe bu liste otomatik büyür.
 */
const STATIC_ROUTES = [
  "/",
  "/testler",
  "/hastalar-icin",
  "/saglik-profesyonelleri",
  "/klinik-kanit",
  "/bilgi-merkezi",
  "/blog",
  "/hakkimizda",
  "/iletisim",
  "/gizlilik",
  "/cerez-politikasi",
  "/kullanim-kosullari",
  "/tibbi-bilgilendirme",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, blogPosts] = await Promise.all([
    db.page.findMany({
      where: { status: "published", noindex: false },
      select: { slug: true, updatedAt: true },
    }),
    db.blogPost.findMany({
      where: { status: "published", noindex: false },
      select: { slug: true, updatedAt: true },
    }),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
  }));

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified: page.updatedAt,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt,
  }));

  return [...staticEntries, ...pageEntries, ...blogEntries];
}
