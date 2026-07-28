/**
 * Test süreci adım ikonları — özgün, sade çizgi ikon seti.
 * Bkz. strateji dokümanı §7.1 blok 6 (4 adım): hekim değerlendirmesi →
 * mevcut doku örneği → laboratuvar analizi → sonuçların hekimle değerlendirilmesi.
 */
function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function DoctorReviewIcon() {
  return (
    <IconWrapper>
      <circle cx="24" cy="14" r="7" />
      <path d="M10 40c0-8 6-13 14-13s14 5 14 13" />
      <path d="M18 24l4 4 8-8" opacity="0.6" />
    </IconWrapper>
  );
}

export function TissueSampleIcon() {
  return (
    <IconWrapper>
      <rect x="14" y="8" width="20" height="28" rx="4" />
      <line x1="18" y1="16" x2="30" y2="16" />
      <line x1="18" y1="22" x2="30" y2="22" />
      <line x1="18" y1="28" x2="26" y2="28" />
      <path d="M20 36v4M28 36v4" />
    </IconWrapper>
  );
}

export function LabAnalysisIcon() {
  return (
    <IconWrapper>
      <path d="M20 6h8" />
      <path d="M22 6v10l-9 18a4 4 0 0 0 4 6h14a4 4 0 0 0 4-6l-9-18V6" />
      <line x1="16" y1="30" x2="32" y2="30" />
    </IconWrapper>
  );
}

export function ResultReviewIcon() {
  return (
    <IconWrapper>
      <rect x="10" y="6" width="28" height="36" rx="3" />
      <line x1="16" y1="14" x2="32" y2="14" />
      <line x1="16" y1="20" x2="32" y2="20" />
      <line x1="16" y1="26" x2="24" y2="26" />
      <path d="M26 32l4 4 6-6" opacity="0.7" />
    </IconWrapper>
  );
}
