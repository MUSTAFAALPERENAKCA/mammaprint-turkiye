"use client";

import { openCookiePreferences } from "@/components/consent/cookie-consent";

export function CookiePreferencesButton() {
  return (
    <button type="button" onClick={openCookiePreferences} className="underline">
      Çerez ayarlarını değiştir
    </button>
  );
}
