"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/nav-data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary-900">
          <Image src="/brand/mammaprint-mark.png" alt="" width={28} height={25} aria-hidden="true" />
          MammaPrint Türkiye
        </Link>

        <nav aria-label="Ana navigasyon" className="hidden items-center gap-1 sm:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-0.5 scale-x-0 bg-gradient-to-r from-mammaprint-accent to-blueprint-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link
            href="/iletisim"
            className="ml-2 rounded-full bg-primary-900 px-5 py-2 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-primary-700"
          >
            İletişim
          </Link>
        </nav>

        <button
          type="button"
          className="sm:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Menüyü kapat" : "Menüyü aç"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-nav" aria-label="Mobil navigasyon" className="border-t border-border sm:hidden">
          <ul className="divide-y divide-border">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-text-primary"
                >
                  {link.label}
                </Link>
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
