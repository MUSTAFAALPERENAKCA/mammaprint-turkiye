import type { ReactNode } from "react";

export function PageHero({
  logo,
  eyebrow,
  title,
  intro,
  children,
}: {
  logo?: ReactNode;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary-900 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(50% 70% at 10% 0%, rgba(198,53,122,0.35), transparent 60%), radial-gradient(45% 60% at 90% 100%, rgba(30,111,168,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        {logo ? <div className="mb-5">{logo}</div> : null}
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 max-w-3xl text-h1 font-bold tracking-tight sm:text-display">{title}</h1>
        {intro ? <p className="mt-5 max-w-2xl text-body-lg text-white/85">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
