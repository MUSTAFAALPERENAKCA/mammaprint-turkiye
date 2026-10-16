"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { getStoredConsent, storeConsent, type ConsentPreferences } from "@/lib/consent";

function subscribeToConsent(callback: () => void) {
  window.addEventListener("consent-updated", callback);
  return () => window.removeEventListener("consent-updated", callback);
}

function getServerConsentSnapshot() {
  return null;
}

export function CookieConsent() {
  // localStorage'daki onay durumunu SSR-güvenli biçimde okur (gereksinim M-16).
  const consent = useSyncExternalStore(subscribeToConsent, getStoredConsent, getServerConsentSnapshot);
  const [forceOpen, setForceOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    function handleOpenPreferences() {
      setForceOpen(true);
      setShowPreferences(true);
    }
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  function accept(preferences: ConsentPreferences) {
    storeConsent(preferences);
    setForceOpen(false);
    setShowPreferences(false);
  }

  const visible = forceOpen || consent === null;
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-4xl rounded-2xl border border-border bg-surface/95 p-4 shadow-soft-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
          Zorunlu çerezler siteyi çalıştırmak için kullanılır. Analitik çerezler yalnızca izniniz
          ile çalışır.{" "}
          <a href="/cerez-politikasi" className="underline">
            Çerez Politikası
          </a>
          .
        </p>

        {showPreferences ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked disabled />
              Zorunlu çerezler
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(event) => setAnalyticsEnabled(event.target.checked)}
              />
              Analitik çerezler
            </label>
            <button
              type="button"
              onClick={() => accept({ necessary: true, analytics: analyticsEnabled })}
              className="rounded-full bg-primary-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Tercihleri Kaydet
            </button>
          </div>
        ) : (
          <div className="flex w-full shrink-0 gap-2 sm:w-auto">
            <button
              type="button"
              onClick={() => accept({ necessary: true, analytics: false })}
              className="flex-1 rounded-full border border-border px-4 py-2.5 text-xs font-medium transition-colors hover:bg-surface-muted sm:flex-none sm:text-sm"
            >
              Reddet
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="flex-1 rounded-full border border-border px-4 py-2.5 text-xs font-medium transition-colors hover:bg-surface-muted sm:flex-none sm:text-sm"
            >
              Tercihler
            </button>
            <button
              type="button"
              onClick={() => accept({ necessary: true, analytics: true })}
              className="flex-1 rounded-full bg-primary-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-primary-700 sm:flex-none sm:text-sm"
            >
              Kabul Et
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
}
