export function ResourceCard({
  title,
  documentType,
  language,
  version,
  fileSize,
  href,
}: {
  title: string;
  documentType: string;
  language: string;
  version: string;
  fileSize: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 rounded-card border border-border bg-surface p-5 shadow-card transition-colors hover:border-primary-900"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 shrink-0 text-primary-900" aria-hidden="true">
        <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M14 3v5h5" />
      </svg>
      <div>
        <p className="font-semibold text-primary-900">{title}</p>
        <p className="mt-1 text-xs text-text-muted">
          {documentType} · {language} · Sürüm {version} · {fileSize}
        </p>
      </div>
    </a>
  );
}
