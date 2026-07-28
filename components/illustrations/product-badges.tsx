/**
 * MammaPrint / BluePrint ürün rozet ikonları — özgün, sade vektörler.
 * Renk kodlaması design-system.md ile birebir (fuşya = MammaPrint, mavi = BluePrint).
 */
export function MammaPrintBadge() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#fdf3f7" stroke="#c6357a" strokeWidth="2" />
      <path
        d="M20 40c0-10 5-18 12-18s12 8 12 18"
        fill="none"
        stroke="#c6357a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="22" r="4" fill="#c6357a" />
    </svg>
  );
}

export function BluePrintBadge() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#eff6fb" stroke="#1e6fa8" strokeWidth="2" />
      <rect x="18" y="18" width="12" height="12" rx="2" fill="none" stroke="#1e6fa8" strokeWidth="2.5" />
      <rect x="34" y="18" width="12" height="12" rx="2" fill="none" stroke="#1e6fa8" strokeWidth="2.5" opacity="0.7" />
      <rect x="26" y="34" width="12" height="12" rx="2" fill="#1e6fa8" opacity="0.15" stroke="#1e6fa8" strokeWidth="2.5" />
    </svg>
  );
}
