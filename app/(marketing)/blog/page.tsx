import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Blog",
  description: "Meme kanseri ve genomik testler hakkında bilgi merkezi ve blog.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    db.blogPost.findMany({
      where: { status: "published", noindex: false },
      orderBy: { publishedAt: "desc" },
      include: { category: true },
    }),
    db.blogCategory.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div>
      <Breadcrumb items={[{ name: "Blog", path: "/blog" }]} />
      <PageHero title="Bilgi Merkezi ve Blog" intro="Meme kanseri, genomik testler ve klinik gelişmeler hakkında güncel yazılar." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Kategoriler</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/kategori/${category.slug}`}
              className="rounded-button border border-border px-3 py-1.5 text-sm hover:bg-surface-muted"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="mt-10">
          {posts.length === 0 ? (
            <div className="rounded-card border border-dashed border-border p-8 text-center text-text-muted">
              <p>Henüz yayınlanmış bir blog yazısı bulunmuyor.</p>
              <p className="mt-2 text-sm">
                İlk 30 blog konusu taslak olarak planlanmıştır (bkz. docs/content-inventory.md);
                yayın için editoryal, medikal ve SEO onay akışından geçmeleri gerekir.
              </p>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.id} className="rounded-card border border-border bg-surface p-5 shadow-card">
                  <Link href={`/blog/${post.slug}`}>
                    <p className="text-xs font-semibold uppercase text-mammaprint-accent">{post.category.name}</p>
                    <h3 className="mt-2 font-semibold text-primary-900">{post.h1}</h3>
                    <p className="mt-2 text-sm text-text-muted">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
