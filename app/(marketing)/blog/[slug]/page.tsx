import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { MedicalDisclaimer } from "@/components/content/medical-disclaimer";
import { db } from "@/lib/db";
import { articleJsonLd, getSiteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  return db.blogPost.findFirst({
    where: { slug, status: "published", noindex: false },
    include: { category: true, author: true },
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.seoTitle, description: post.metaDescription };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const schema = articleJsonLd({
    headline: post.h1,
    url: `${getSiteUrl()}/blog/${post.slug}`,
    authorName: post.author?.name ?? "MammaPrint Türkiye Editoryal Ekibi",
    datePublished: (post.publishedAt ?? post.createdAt).toISOString(),
    dateModified: post.updatedAt.toISOString(),
  });

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[
        { name: "Blog", path: "/blog" },
        { name: post.category.name, path: `/blog/kategori/${post.category.slug}` },
        { name: post.h1, path: `/blog/${post.slug}` },
      ]} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8">
        <h1 className="text-h1 font-semibold text-primary-900">{post.h1}</h1>
        <p className="mt-2 text-sm text-text-muted">
          {post.author?.name ?? "MammaPrint Türkiye Editoryal Ekibi"} ·{" "}
          {(post.publishedAt ?? post.createdAt).toLocaleDateString("tr-TR")}
        </p>
        <p className="mt-6 text-body-lg text-text-muted">{post.excerpt}</p>
        <div className="mt-8">
          <MedicalDisclaimer />
        </div>
      </div>
    </article>
  );
}
