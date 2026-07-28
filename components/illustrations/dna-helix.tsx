/**
 * Özgün, soyut gen ekspresyonu / DNA sarmalı illüstrasyonu.
 * Bkz. docs/media-credits.md — üçüncü taraf telif hakkı taşımaz.
 * DNA motifi yalnızca dekoratif bağlamdır; "genomik test" anlatımı bağlamsız
 * kullanılmaz (bkz. design-system.md §7 görsel ilkeleri).
 */
export function DnaHelixIllustration({ className }: { className?: string }) {
  const rungs = Array.from({ length: 7 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 320 400"
      className={className}
      role="img"
      aria-label="Gen ekspresyonunu simgeleyen soyut DNA sarmalı illüstrasyonu"
    >
      <defs>
        <linearGradient id="strandA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1f3a" />
          <stop offset="100%" stopColor="#1e6fa8" />
        </linearGradient>
        <linearGradient id="strandB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c6357a" />
          <stop offset="100%" stopColor="#0b1f3a" />
        </linearGradient>
      </defs>

      <path
        d="M 80 10 C 180 60, 20 100, 120 150 C 220 200, 60 240, 160 290 C 240 330, 120 360, 80 390"
        fill="none"
        stroke="url(#strandA)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 240 10 C 140 60, 300 100, 200 150 C 100 200, 260 240, 160 290 C 80 330, 200 360, 240 390"
        fill="none"
        stroke="url(#strandB)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.85"
      />

      {rungs.map((i) => {
        const y = 40 + i * 50;
        return (
          <line
            key={i}
            x1={90 + Math.sin(i) * 60}
            y1={y}
            x2={230 - Math.sin(i) * 60}
            y2={y}
            stroke="#e5e7eb"
            strokeWidth="3"
            opacity="0.6"
          />
        );
      })}

      {rungs.map((i) => (
        <circle key={`dot-${i}`} cx={90 + Math.sin(i) * 60} cy={40 + i * 50} r="5" fill="#c6357a" />
      ))}
      {rungs.map((i) => (
        <circle key={`dot2-${i}`} cx={230 - Math.sin(i) * 60} cy={40 + i * 50} r="5" fill="#1e6fa8" />
      ))}
    </svg>
  );
}
