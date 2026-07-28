/**
 * SEO yardımcıları — gereksinim S-03 (canonical), S-09 (schema).
 * Tüm sayfa metadata ve JSON-LD üretimi buradan geçmelidir; her sayfada
 * ayrı ayrı tekrarlanmamalıdır (bkz. docs/requirements-matrix.md §4).
 */

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

/** Trailing slash ve host'u standartlaştırılmış canonical URL üretir (gereksinim S-03). */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

interface OrganizationJsonLdInput {
  name: string;
  url: string;
  logoUrl?: string;
}

export function organizationJsonLd({ name, url, logoUrl }: OrganizationJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logoUrl ? { logo: logoUrl } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MammaPrint Türkiye",
    url: getSiteUrl(),
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Bkz. gereksinim S-09. `items` sayfada gerçekten görünen breadcrumb ile birebir eşleşmelidir. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface FaqJsonLdInput {
  /** Yalnızca sayfada gerçekten görünen ve schemaEligible=true olan sorular. */
  questions: { question: string; answer: string }[];
}

/** Gereksinim: FAQ schema yalnızca sayfada görünen içerikle eşleşmelidir (kullanıcı promptu §9). */
export function faqJsonLd({ questions }: FaqJsonLdInput) {
  if (questions.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}

export interface MedicalWebPageJsonLdInput {
  name: string;
  url: string;
  description: string;
  lastReviewed?: string;
}

export function medicalWebPageJsonLd({ name, url, description, lastReviewed }: MedicalWebPageJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    url,
    description,
    ...(lastReviewed ? { lastReviewed } : {}),
  };
}

export interface ArticleJsonLdInput {
  headline: string;
  url: string;
  authorName: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

export function articleJsonLd({ headline, url, authorName, datePublished, dateModified, image }: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    ...(image ? { image } : {}),
  };
}
