export function MedicalDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-text-muted">
        Bu içerik yalnızca genel bilgilendirme amaçlıdır; tanı veya tedavi yerine geçmez.
      </p>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface-muted p-6 text-sm text-text-muted">
      <p>
        Bu sayfadaki bilgiler yalnızca genel bilgilendirme amaçlıdır ve tanı veya tedavi yerine
        geçmez. Kişisel sağlık durumunuzla ilgili kararlar için lütfen hekiminize danışın. Test
        sonuçları yalnızca hekiminiz tarafından diğer klinik faktörlerle birlikte yorumlanır.
      </p>
    </div>
  );
}

/** "Bu bilgi ne anlama gelmez?" güvenlik kutusu — strateji dokümanı §10.4. */
export function SafetyNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card border border-warning/30 bg-warning/5 p-4 text-sm">
      <p className="font-semibold text-warning">Bu bilgi ne anlama gelmez?</p>
      <div className="mt-1 text-text-muted">{children}</div>
    </div>
  );
}
