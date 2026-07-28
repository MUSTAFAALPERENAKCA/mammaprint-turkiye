import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

/**
 * Gereksinim S-02: eski /en/* URL'leri Türkçe canonical'a 301 ile yönlendirir.
 * Bkz. docs/redirect-map.csv (kaynak veri prisma/seed.ts ile Redirect tablosuna yüklenir).
 */
function pathnameOf(url: string): string {
  try {
    return new URL(url).pathname.replace(/\/+$/, "") || "/";
  } catch {
    return url.replace(/\/+$/, "") || "/";
  }
}

export async function GET(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname.replace(/\/+$/, "") || "/en";
  const redirects = await db.redirect.findMany();

  const match = redirects.find((redirect) => pathnameOf(redirect.sourceUrl) === requestedPath);

  if (match) {
    return NextResponse.redirect(new URL(pathnameOf(match.destinationUrl), request.url), match.statusCode);
  }

  // Bilinmeyen /en/* yolları için en yakın karşılık ana sayfadır (bkz. §16.3 — yalnızca
  // eşleşme bulunamadığında, toplu yönlendirme yerine son çare olarak kullanılır).
  return NextResponse.redirect(new URL("/", request.url), 301);
}
