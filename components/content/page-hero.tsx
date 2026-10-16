import Image from "next/image";
import type { ReactNode } from "react";
import { AnimatedWords } from "@/components/content/animated-words";
import { Breadcrumb } from "@/components/content/breadcrumb";
import { Parallax } from "@/components/content/parallax";
import type { BreadcrumbItem } from "@/lib/seo";

export function PageHero({
  breadcrumb,
  logo,
  eyebrow,
  title,
  intro,
  accent = "rose",
  children,
}: {
  breadcrumb?: BreadcrumbItem[];
  logo?: ReactNode;
  eyebrow?: string;
  title: string;
  intro?: string;
  accent?: "rose" | "blue";
  children?: ReactNode;
}) {
  const mark = accent === "blue" ? "/brand/blueprint-mark.png" : "/brand/mammaprint-mark.png";
  const glow = accent === "blue" ? "rgba(30,111,168,0.45)" : "rgba(198,53,122,0.45)";
  const glow2 = accent === "blue" ? "rgba(198,53,122,0.28)" : "rgba(30,111,168,0.3)";

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-primary-900 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(50% 75% at 8% 0%, ${glow}, transparent 62%), radial-gradient(45% 65% at 95% 100%, ${glow2}, transparent 62%)`,
        }}
      />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <Parallax speed={0.18} className="pointer-events-none absolute -right-10 top-4 -z-10 sm:right-8 sm:top-6">
        <div className="float-y relative">
          <div
            className="pulse-soft absolute inset-0 rounded-full"
            style={{ background: `radial-gradient(circle, ${glow}, transparent 68%)` }}
          />
          <Image
            src={mark}
            alt=""
            width={329}
            height={289}
            aria-hidden="true"
            priority
            className="relative h-auto w-44 opacity-25 sm:w-72 sm:opacity-30 lg:w-96"
          />
        </div>
      </Parallax>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20">
        {breadcrumb ? (
          <div className="mb-8">
            <Breadcrumb items={breadcrumb} onDark />
          </div>
        ) : null}
        {logo ? <div className="mb-5">{logo}</div> : null}
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 max-w-3xl text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.25rem]">
          <AnimatedWords text={title} startDelay={120} />
        </h1>
        {intro ? (
          <p
            className="word-in block! mt-5 max-w-2xl text-body-lg text-white/85"
            style={{ animationDelay: "650ms" }}
          >
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
