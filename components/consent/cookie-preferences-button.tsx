"use client";

import { openCookiePreferences } from "@/components/consent/cookie-consent";

export function CookiePreferencesButton() {
  return (
    <button type="button" onClick={openCookiePreferences} className="inline-block py-1.5 underline hover:text-white">
      Çerez ayarlarını değiştir
    </button>
  );
}
