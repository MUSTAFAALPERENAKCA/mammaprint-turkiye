import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-mammaprint-accent">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-h1 font-semibold text-primary-900">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-body-lg text-text-muted">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
