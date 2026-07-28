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
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-card sm:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">
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
              className="rounded-button bg-primary-900 px-4 py-2 text-sm font-medium text-white"
            >
              Tercihleri Kaydet
            </button>
          </div>
        ) : (
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => accept({ necessary: true, analytics: false })}
              className="rounded-button border border-border px-4 py-2 text-sm font-medium hover:bg-surface-muted"
            >
              Reddet
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="rounded-button border border-border px-4 py-2 text-sm font-medium hover:bg-surface-muted"
            >
              Tercihler
            </button>
            <button
              type="button"
              onClick={() => accept({ necessary: true, analytics: true })}
              className="rounded-button bg-primary-900 px-4 py-2 text-sm font-medium text-white"
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
