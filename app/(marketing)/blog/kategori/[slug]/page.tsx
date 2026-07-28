import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/content/page-hero";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = await db.blogCategory.findUnique({ where: { slug } });
  if (!category) return {};
  return { title: category.name, description: `${category.name} kategorisindeki blog yazıları.` };
}

export default async function BlogKategoriPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await db.blogCategory.findUnique({ where: { slug } });
  if (!category) notFound();

  const posts = await db.blogPost.findMany({
    where: { status: "published", noindex: false, categoryId: category.id },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div>
      <Breadcrumb items={[{ name: "Blog", path: "/blog" }, { name: category.name, path: `/blog/kategori/${category.slug}` }]} />
      <PageHero title={category.name} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        {posts.length === 0 ? (
          <div className="rounded-card border border-dashed border-border p-8 text-center text-text-muted">
            <p>Bu kategoride henüz yayınlanmış bir yazı bulunmuyor.</p>
            <Link href="/blog" className="mt-2 inline-block text-sm underline">
              Tüm blog yazılarına dön
            </Link>
          </div>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.id} className="rounded-card border border-border bg-surface p-5 shadow-card">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-semibold text-primary-900">{post.h1}</h2>
                  <p className="mt-2 text-sm text-text-muted">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
