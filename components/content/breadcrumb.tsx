import Link from "next/link";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

export function Breadcrumb({ items, onDark = false }: { items: BreadcrumbItem[]; onDark?: boolean }) {
  const schema = breadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }, ...items]);
  const muted = onDark ? "text-white/60" : "text-text-muted";
  const hover = onDark ? "hover:text-white" : "hover:text-primary-900";
  const current = onDark ? "text-white" : "text-text-primary";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className={`text-sm ${muted}`}>
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className={`${hover} hover:underline`}>
              Ana Sayfa
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-1">
              <span aria-hidden="true">/</span>
              {index === items.length - 1 ? (
                <span aria-current="page" className={current}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={`${hover} hover:underline`}>
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
