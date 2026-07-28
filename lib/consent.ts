/**
 * Çerez tercih durumu — gereksinim M-16: zorunlu olmayan çerezler
 * kullanıcı tercihinden önce çalışmaz. Analytics script'i yalnızca
 * `analytics: true` durumunda yüklenmelidir (bkz. ADR-008 — GA4 kullanımı
 * ayrıca hukuk onayı bekliyor; bu mekanizma altyapıyı hazırlar).
 */
export interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
}

export const CONSENT_STORAGE_KEY = "mammaprint-cookie-consent";

// useSyncExternalStore, getSnapshot'ın değişmediği sürece aynı referansı
// döndürmesini gerektirir; her çağrıda JSON.parse ile yeni nesne üretmek
// sonsuz render döngüsüne yol açar ("Maximum update depth exceeded").
let cachedRaw: string | null = null;
let cachedValue: ConsentPreferences | null = null;

export function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (raw === cachedRaw) return cachedValue;

  cachedRaw = raw;
  try {
    cachedValue = raw ? (JSON.parse(raw) as ConsentPreferences) : null;
  } catch {
    cachedValue = null;
  }
  return cachedValue;
}

export function storeConsent(preferences: ConsentPreferences) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("consent-updated", { detail: preferences }));
}
