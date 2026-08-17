/**
 * MammaPrint risk skoru skalası — kaynak: Agendia risk sınıflandırma verisi
 * (müşteri geri bildirim dokümanı, showpad kaynağı). Sayısal aralıklar
 * bilimsel/klinik veridir; tedavi kararı önerisi içermez.
 */
const segments = [
  { label: "HIGH 2 (H2)", range: "-1.000 – -0.570", colorClass: "bg-red-700" },
  { label: "HIGH 1 (H1)", range: "-0.569 – 0.000", colorClass: "bg-red-400" },
  { label: "LOW", range: "+0.001 – +0.355", colorClass: "bg-green-500" },
  { label: "ULTRALOW", range: "+0.356 – +1.000", colorClass: "bg-green-300" },
];

export function RiskScale() {
  return (
    <div className="rounded-card border border-border bg-surface p-6 shadow-card">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-text-muted">
        <span>High Risk</span>
        <span>Low Risk</span>
      </div>
      <div className="mt-2 flex h-3 overflow-hidden rounded-full" role="img" aria-label="MammaPrint risk skoru skalası: -1'den High 2, High 1, Low, +1'e kadar UltraLow">
        {segments.map((segment) => (
          <div key={segment.label} className={`flex-1 ${segment.colorClass}`} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {segments.map((segment) => (
          <div key={segment.label} className="text-center">
            <p className="text-xs font-semibold text-primary-900">{segment.label}</p>
            <p className="text-xs text-text-muted">{segment.range}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-muted">
        Skor aralıkları güncel rapor sürümüne göre değişebilir; sonuç yalnızca hekiminiz tarafından
        diğer klinik faktörlerle birlikte yorumlanır.
      </p>
    </div>
  );
}
