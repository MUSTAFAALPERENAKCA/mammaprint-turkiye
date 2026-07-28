const TURKISH_CHAR_MAP: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  I: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

/**
 * Türkçe metinleri tutarlı, URL-güvenli slug'a dönüştürür.
 * Gereksinim T-20 (docs/requirements-matrix.md): slug dönüşümü tutarlı olmalı.
 */
export function slugify(input: string): string {
  const normalized = input
    .split("")
    .map((char) => TURKISH_CHAR_MAP[char] ?? char)
    .join("");

  return normalized
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
