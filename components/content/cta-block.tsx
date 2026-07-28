import Link from "next/link";

export function CtaBlock({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-border bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-8">
        <h2 className="text-h2 font-semibold">{title}</h2>
        {description ? <p className="mx-auto mt-2 max-w-xl text-white/80">{description}</p> : null}
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={primary.href} className="rounded-button bg-white px-5 py-3 text-sm font-medium text-primary-900">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="rounded-button border border-white/40 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
