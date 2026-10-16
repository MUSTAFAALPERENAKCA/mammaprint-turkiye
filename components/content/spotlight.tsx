"use client";

import { useRef, type ReactNode } from "react";

/** Fare konumunu izleyen yumuşak bir ışık efekti; dokunmatik cihazlarda devre dışıdır. */
export function Spotlight({
  children,
  className = "",
  color = "rgba(198, 53, 122, 0.16)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight relative ${className}`}
      style={{ ["--spot" as string]: color }}
    >
      {children}
      <div className="spotlight-glow" aria-hidden="true" />
    </div>
  );
}
