"use client";

import { useEffect, useState } from "react";

export interface SectionNavItem {
  id: string;
  label: string;
}

/** Uzun sayfalarda yapışkan, aktif bölümü vurgulayan "bu sayfada" çubuğu. */
export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Bu sayfada"
      className="sticky top-[57px] z-20 border-b border-border bg-surface/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 sm:text-sm ${
                isActive
                  ? "bg-primary-900 text-white shadow-soft-lg"
                  : "text-text-muted hover:bg-surface-muted hover:text-primary-900"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
