import Link from "next/link";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = breadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }, ...items]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 text-sm text-text-muted sm:px-8">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-primary-900 hover:underline">
              Ana Sayfa
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-1">
              <span aria-hidden="true">/</span>
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-text-primary">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary-900 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
