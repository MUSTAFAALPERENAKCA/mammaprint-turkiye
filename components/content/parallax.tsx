"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Kaydırmayla birlikte hafifçe kayan dekoratif katman (tek rAF'lı scroll dinleyici). */
export function Parallax({
  children,
  speed = 0.12,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    function update() {
      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${Math.round(window.scrollY * speed)}px, 0)`;
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
