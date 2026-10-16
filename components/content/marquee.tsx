/** Sonsuz kayan, üzerine gelince duran bilgi şeridi (CSS transform). */
export function Marquee({ items }: { items: string[] }) {
  const row = (suffix: string) =>
    items.map((item) => (
      <span key={`${item}-${suffix}`} className="flex items-center gap-8 whitespace-nowrap pr-8">
        <span className="text-sm font-medium tracking-wide text-white/85 sm:text-base">{item}</span>
        <span aria-hidden="true" className="text-mammaprint-accent">
          ✦
        </span>
      </span>
    ));

  return (
    <div className="marquee overflow-hidden" role="group" aria-label="Öne çıkan bilgiler">
      <div className="marquee-track">
        <div className="flex">{row("a")}</div>
        <div className="flex" aria-hidden="true">
          {row("b")}
        </div>
      </div>
    </div>
  );
}
