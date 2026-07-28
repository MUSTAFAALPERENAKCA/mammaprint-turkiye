"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/lib/nav-data";

export function Header() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSection(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenSection(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link href="/" className="text-lg font-semibold text-primary-900">
          MammaPrint Türkiye
        </Link>

        <nav ref={navRef} aria-label="Ana navigasyon" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((section) => {
              const isOpen = openSection === section.label;
              return (
                <li key={section.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`nav-panel-${section.label}`}
                    onClick={() => setOpenSection(isOpen ? null : section.label)}
                    className="rounded-button px-3 py-2 text-sm font-medium text-text-primary hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                  >
                    {section.label}
                  </button>
                  {isOpen ? (
                    <div
                      id={`nav-panel-${section.label}`}
                      role="menu"
                      className="absolute left-0 top-full z-20 mt-2 w-64 rounded-card border border-border bg-surface p-2 shadow-card"
                    >
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          onClick={() => setOpenSection(null)}
                          className="block rounded-input px-3 py-2 text-sm text-text-primary hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/hastalar-icin"
            className="rounded-button px-3 py-2 text-sm font-medium text-mammaprint-accent hover:bg-surface-tint-rose"
          >
            Hastalar İçin
          </Link>
          <Link
            href="/saglik-profesyonelleri"
            className="rounded-button px-3 py-2 text-sm font-medium text-blueprint-accent hover:bg-surface-tint-blue"
          >
            Sağlık Profesyonelleri
          </Link>
          <Link
            href="/iletisim"
            className="rounded-button bg-primary-900 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
          >
            İletişim
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Menüyü kapat" : "Menüyü aç"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-nav" aria-label="Mobil navigasyon" className="border-t border-border lg:hidden">
          <ul className="divide-y divide-border">
            {primaryNav.map((section) => (
              <li key={section.label}>
                <details>
                  <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{section.label}</summary>
                  <ul className="pb-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-6 py-2 text-sm text-text-muted"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li>
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-primary-900"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
