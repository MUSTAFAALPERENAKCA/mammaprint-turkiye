/**
 * "Kanıt kartı" şablonu — strateji dokümanı §8.6 zorunlu alanlar.
 */
export interface EvidenceCardProps {
  studyName: string;
  studyDesign: string;
  patientPopulation: string;
  followUpDuration: string;
  finding: string;
  clinicalImplication: string;
  limitations: string;
  sourceCitation: string;
}

export function EvidenceCard({
  studyName,
  studyDesign,
  patientPopulation,
  followUpDuration,
  finding,
  clinicalImplication,
  limitations,
  sourceCitation,
}: EvidenceCardProps) {
  return (
    <article className="rounded-card border border-border bg-surface p-6 shadow-card">
      <h3 className="text-h3 font-semibold text-primary-900">{studyName}</h3>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase text-text-muted">Çalışma tasarımı</dt>
          <dd className="mt-1 text-sm">{studyDesign}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase text-text-muted">Hasta grubu</dt>
          <dd className="mt-1 text-sm">{patientPopulation}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase text-text-muted">Takip süresi</dt>
          <dd className="mt-1 text-sm">{followUpDuration}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase text-text-muted">Bulgu</dt>
          <dd className="mt-1 text-sm">{finding}</dd>
        </div>
      </dl>
      <div className="mt-4 rounded-input bg-surface-tint-blue p-4">
        <p className="text-sm font-semibold text-primary-900">Bu sonuç ne anlama gelir?</p>
        <p className="mt-1 text-sm text-text-muted">{clinicalImplication}</p>
      </div>
      <div className="mt-3 rounded-input bg-surface-muted p-4">
        <p className="text-sm font-semibold text-primary-900">Sınırlılıklar</p>
        <p className="mt-1 text-sm text-text-muted">{limitations}</p>
      </div>
      <p className="mt-4 text-xs text-text-muted">Kaynak: {sourceCitation}</p>
    </article>
  );
}
