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

/**
 * `request.nextUrl`/`request.url`, container/standalone ortamlarında iç
 * hostname'e (ör. Docker container ID) sızabiliyor. İstemcinin gerçekten
 * eriştiği origin'i her zaman gelen `Host` başlığından (ve varsa
 * `x-forwarded-proto`'dan) kurmak daha güvenilir.
 */
function externalOrigin(request: NextRequest): string {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");
  return `${proto}://${host}`;
}

export async function GET(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname.replace(/\/+$/, "") || "/en";
  const redirects = await db.redirect.findMany();

  const match = redirects.find((redirect) => pathnameOf(redirect.sourceUrl) === requestedPath);
  const origin = externalOrigin(request);

  if (match) {
    return NextResponse.redirect(`${origin}${pathnameOf(match.destinationUrl)}`, match.statusCode);
  }

  // Bilinmeyen /en/* yolları için en yakın karşılık ana sayfadır (bkz. §16.3 — yalnızca
  // eşleşme bulunamadığında, toplu yönlendirme yerine son çare olarak kullanılır).
  return NextResponse.redirect(origin, 301);
}
