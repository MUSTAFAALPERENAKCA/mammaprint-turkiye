# Gereksinim İzlenebilirlik Matrisi — MammaPrint Türkiye

Kaynak: [`strategy-source.md`](./strategy-source.md) (MammaPrint_Turkiye_Web_Sitesi_Strateji_Dokumani_2026.docx).
Bu doküman Faz 0 çıktısıdır ve geliştirme ilerledikçe "Güncel durum" sütunu güncellenmelidir.

Öncelik tanımı:
- **P0** — Lansman için zorunlu (MVP kabul kriterlerinde açıkça yer alıyor veya medikal/hukuki risk taşıyor).
- **P1** — Lansmandan hemen sonraki büyüme fazında gerekli, MVP'yi bloklamaz.
- **P2** — Olgunlaşma/genişleme fazı, opsiyonel veya veri/onaya bağlı.

Durum kısaltmaları: **Beklemede** (henüz başlanmadı) · **Devam ediyor** · **Tamamlandı** · **Onay bekliyor** (üçüncü taraf/hukuk/medikal onayı gerekiyor).

---

## 1. İş hedefleri

| # | Gereksinim | Kaynak bölüm | Öncelik | Sayfa/Modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| B-01 | Siteyi "iki ürün broşürü"nden hasta+hekim odaklı güvenilir bilgi platformuna dönüştürmek | §1 Yönetici Özeti | P0 | Tüm site | Tüm IA (bkz. §6) + içerik modeli | Site haritasındaki tüm P0 sayfalar yayında | Beklemede |
| B-02 | Marka aramalarında tekil, doğru, güncel sayfaların görünmesi | §1, §9.4 | P0 | Teknik SEO | Canonical + 301 + duplicate `/en/` temizliği | Search Console'da tekil indekslenen URL seti | Beklemede |
| B-03 | "MammaPrint nedir", "meme kanseri nüks testi" vb. bilgi aramalarında konu otoritesi kurmak | §1, §9.2 | P0 | Pillar sayfalar + blog kümeleri | Pillar-cluster iç link mimarisi | Hedef kümelerin her biri için pillar sayfa + ≥3 cluster içerik yayında | Beklemede |
| B-04 | Hasta ve hekimin 2-3 tıklamada doğru kaynağa/iletişime ulaşması | §1, §5 | P0 | Navigasyon, ana sayfa | IA + mega menü + ana sayfa yönlendirme kartları | Kullanılabilirlik testi: hedef görev ≤3 tıklama ile tamamlanıyor | Beklemede |
| B-05 | Her medikal içeriğin yazar/medikal inceleyen/kaynak/güncelleme tarihi ile yayınlanması | §1, §14 | P0 | CMS içerik modeli | `reviewedBy`, `publishedAt`, `updatedAt`, `references` alanları zorunlu | CMS'te bu alanlar boşken yayın engelleniyor | Beklemede |
| B-06 | Core Web Vitals ve WCAG 2.2 AA hedeflerine ulaşmak | §1, §13 | P0 | Tüm site | Bkz. performans/erişilebilirlik bölümleri | Lighthouse + axe otomatik testler CI'da geçiyor | Beklemede |
| B-07 | Organik trafik, nitelikli iletişim, kaynak indirme, hekim etkileşimini ölçmek | §1, §15 | P1 | Analytics | GA4/consent-mode uyumlu olay planı | `docs/analytics-event-plan.md` olayları prod'da tetikleniyor | Beklemede |
| B-08 | Rakip testleri (Oncotype DX, Prosigna, EndoPredict) kötülemeden fark/otorite kurmak | §3.3 | P1 | Karşılaştırma içerikleri, blog | Editoryal ton kuralı (bkz. medikal içerik bölümü) | Medikal/hukuk incelemesi onaylı | Onay bekliyor |

## 2. Hedef kullanıcılar

| # | Persona | Kaynak bölüm | Öncelik | Sayfa/Modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| U-01 | Yeni tanı almış hasta | §5 Persona tablosu | P0 | `/hastalar-icin/*` | Hasta içerik tipi + basit dil tonu | İçerik okunabilirlik incelemesi (medikal + editoryal) | Beklemede |
| U-02 | Hasta yakını | §5 | P0 | `/hastalar-icin/*`, indirilebilir kontrol listesi | Resource içerik tipi (PDF/HTML) | İndirilebilir rehber erişilebilir ve güncel | Beklemede |
| U-03 | Medikal onkolog | §5 | P0 | `/saglik-profesyonelleri/*`, `/klinik-kanit/*` | HCP içerik tipi + yayın filtreleme | Filtrelenebilir yayın kütüphanesi çalışıyor | Beklemede |
| U-04 | Meme cerrahı | §5 | P1 | `/saglik-profesyonelleri/numune-ve-lojistik/` | Aynı HCP içerik tipi, süreç şeması | Sayfa yayında, süreç adımları görsel | Beklemede |
| U-05 | Patolog / laboratuvar | §5 | P1 | `/saglik-profesyonelleri/numune-ve-lojistik/` | Teknik numune rehberi (Resource) | FFPE gereksinimleri belgelenmiş | Beklemede |
| U-06 | Hastane satın alma / yönetim | §5 | P2 | `/hakkimizda/*`, `/kalite-ve-uyum/` | Kurumsal sayfa içerik tipi | Yetki/kalite belgeleri sayfada | Beklemede |
| U-07 | Basın / akademik kullanıcı | §5 | P2 | `/hakkimizda/`, `/yayinlar/` | Publication içerik tipi | Basın materyali ve yayın kütüphanesi erişilebilir | Beklemede |
| U-08 | Navigasyonun ilk seviyede Hasta/HCP ayrımı yapması (dışlamak için değil, doğru içeriğe hızlı ulaşım için) | §5.2 kutu | P0 | Header, ana sayfa | İki ana yol bileşeni (persona-switch) | IA testinde kullanıcı doğru yola 1 tıklamada ulaşıyor | Beklemede |

## 3. Sayfa ve içerik gereksinimleri

### 3.1 Site haritası (§6.2 tam URL listesi — otorite kaynak)

| # | URL | Sayfa | Öncelik | Kaynak bölüm | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| P-01 | `/` | Ana Sayfa | P0 | §7 | RSC sayfa, 12 blok | Tüm 12 blok yayında, Lighthouse ≥90 | Devam ediyor — hero, iki temel soru, hasta/hekim yolu, test süreci, klinik kanıt, son CTA blokları eklendi; kalan bloklar ve medikal onay Faz 2 |
| P-02 | `/testler/` | Testlere Genel Bakış | P1 | §6.1-6.2 | Statik sayfa | İçerik yayında | Beklemede |
| P-03 | `/mammaprint/` | MammaPrint 70 Gen Testi | P0 | §8.1 | Product içerik tipi + MedicalWebPage schema | §8.1 bölümlerinin tamamı mevcut | Beklemede |
| P-04 | `/blueprint/` | BluePrint 80 Gen Testi | P0 | §8.2 | Product içerik tipi | §8.2 bölümlerinin tamamı mevcut | Beklemede |
| P-05 | `/mammaprint-blueprint/` | Birlikte Kullanım | P0 | §4.3, §7.1 blok 4 | Statik sayfa | Tamamlayıcı kullanım anlatımı, sınırlılıklar bölümü var | Beklemede |
| P-06 | `/genomik-test-nedir/` | Genomik Test Nedir? | P0 | §8.3 | Eğitim sayfası + GlossaryTerm linkleri | Sözlük terimlerine bağlantı çalışıyor | Beklemede |
| P-07 | `/genomik-test-genetik-test-farki/` | Genomik/Genetik Test Farkı | P0 | §8.3, Ek B | Eğitim sayfası | BRCA karışıklığını netleştiren bölüm var | Beklemede |
| P-08 | `/hastalar-icin/` | Hasta Merkezi | P0 | §8.4 | Hub sayfası | §8.4 tablosundaki tüm bölümler | Beklemede |
| P-09 | `/hastalar-icin/kimler-icin-uygun/` | Uygunluk | P0 | §8.4, §5.1 | Kontrol listesi bileşeni | Hekim değerlendirmesi vurgusu var | Beklemede |
| P-10 | `/hastalar-icin/test-nasil-yapilir/` | Test Süreci | P0 | §5.1, §7.1 blok 6 | 4 adımlı süreç bileşeni | Adımlar görsel akış ile net | Beklemede |
| P-11 | `/hastalar-icin/sonuclari-anlamak/` | Sonuçları Anlamak | P0 | §8.4, §8.1 | Risk terimleri açıklaması | "Kesin tedavi kararı değildir" notu var | Beklemede |
| P-12 | `/hastalar-icin/doktorla-konusma-rehberi/` | Doktor Görüşmesi Rehberi | P0 | §5.1, §8.4 | İndirilebilir PDF/HTML Resource | 8-10 soruluk rehber indirilebilir | Beklemede |
| P-13 | `/hastalar-icin/sik-sorulan-sorular/` | Hasta SSS | P0 | §7.1 blok 10 | FAQ içerik tipi + FAQPage schema | Schema görünür içerikle birebir | Beklemede |
| P-14 | `/saglik-profesyonelleri/` | Hekim Merkezi | P0 | §8.5 | Hub sayfası | §8.5 maddelerinin tamamı | Beklemede |
| P-15 | `/saglik-profesyonelleri/klinik-uygunluk/` | Klinik Uygunluk | P0 | §8.5 | Uygunluk matrisi bileşeni | Resmi kullanım amacı ile tutarlı | Beklemede |
| P-16 | `/saglik-profesyonelleri/numune-ve-lojistik/` | Numune ve Lojistik | P0 | §8.5 | Teknik rehber sayfası | FFPE/gönderim/takip bilgisi eksiksiz | Beklemede |
| P-17 | `/saglik-profesyonelleri/ornek-raporlar/` | Örnek Raporlar | P0 | §8.5, §12.1 | Yetkiye göre erişim + Resource | Rol bazlı erişim çalışıyor | Beklemede |
| P-18 | `/saglik-profesyonelleri/test-talebi/` | Test Talep Süreci | P1 | §8.5 | Süreç sayfası | İçerik yayında | Beklemede |
| P-19 | `/saglik-profesyonelleri/medikal-bilgi/` | Medikal Bilgi Talebi | P0 | §8.5, §8.7 | HCP iletişim formu | Form KVKK onayı ile çalışıyor | Beklemede |
| P-20 | `/klinik-kanit/` | Klinik Kanıt Merkezi | P0 | §8.6 | ClinicalStudy listesi | Kanıt kartı şablonu (§8.6 tablo) uygulanmış | Beklemede |
| P-21 | `/klinik-kanit/mindact/` | MINDACT | P0 | §8.6, MVP kapsamı | ClinicalStudy detay sayfası | Kanıt kartı alanlarının tamamı dolu | Beklemede |
| P-22 | `/klinik-kanit/nbrst/` | NBRST | P0 | §8.6, MVP kapsamı | ClinicalStudy detay sayfası | Kanıt kartı alanlarının tamamı dolu | Beklemede |
| P-23 | `/klinik-kanit/sto-3/` | STO-3 | P1 | §8.6 | ClinicalStudy detay sayfası | İçerik yayında | Beklemede |
| P-24 | `/klinik-kanit/nsabp-b42/` | NSABP B-42 | P1 | §8.6 | ClinicalStudy detay sayfası | İçerik yayında | Beklemede |
| P-25 | `/yayinlar/` | Yayın Kütüphanesi | P0 | §8.5, §9.4 | Publication listesi + filtre | Filtreleme indeks şişmesi yaratmıyor (noindex parametreler) | Beklemede |
| P-26 | `/kilavuzlar/` | Kılavuzlar | P1 | §6.1 | Resource listesi | İçerik yayında | Beklemede |
| P-27 | `/bilgi-merkezi/` | Bilgi Merkezi (hub) | P1 | §6.1 | Hub sayfası | Blog/sözlük/video/kaynak linkleri | Beklemede |
| P-28 | `/blog/` | Blog | P0 | §10 | Blog listesi + kategori/etiket/arama | Sayfalama + filtre SEO-güvenli | Beklemede |
| P-29 | `/sozluk/` | Terimler Sözlüğü | P1 | §8.3 | GlossaryTerm listesi | ER/PR/HER2/FFPE vb. terimler tanımlı | Beklemede |
| P-30 | `/kaynaklar/` | İndirilebilir Kaynaklar | P0 | §8.4, §8.5 | Resource listesi | Dosya türü/boyut/sürüm görünür | Beklemede |
| P-31 | `/videolar/` | Videolar | P2 | §6.1 | VideoObject schema | Altyazı/transkript altyapısı var | Beklemede |
| P-32 | `/hakkimizda/` | MammaPrint Türkiye Hakkında | P0 | §6.1, §14.4 | Kurumsal sayfa | Agendia/Omnigen ilişkisi açık | Beklemede |
| P-33 | `/agendia/` | Agendia Hakkında | P1 | §6.1 | Kurumsal sayfa | İçerik yayında | Beklemede |
| P-34 | `/omnigen/` | Omnigen ve Türkiye Operasyonu | P1 | §6.1 | Kurumsal sayfa | Türkiye rolü net anlatılmış | Beklemede |
| P-35 | `/kalite-ve-uyum/` | Kalite, Lisans ve Uyum | P1 | §6.1 | Kurumsal sayfa | İçerik yayında | Beklemede |
| P-36 | `/iletisim/` | İletişim | P0 | §8.7 | 3 form türü | §8.7 maddelerinin tamamı | Beklemede |
| P-37 | `/gizlilik/` | Gizlilik ve KVKK | P0 | §14.4 | Hukuki sayfa | Hukuk onaylı, aydınlatma metni eksiksiz | Onay bekliyor |
| P-38 | `/cerez-politikasi/` | Çerez Politikası | P0 | §14.2, §14.4 | Hukuki sayfa + çerez tablosu | Kategori/süre/taraf bilgisi tam | Onay bekliyor |
| P-39 | `/kullanim-kosullari/` | Kullanım Koşulları | P0 | §14.4 | Hukuki sayfa | Hukuk onaylı | Onay bekliyor |
| P-40 | `/tibbi-bilgilendirme/` | Tıbbi Bilgilendirme | P0 | §14.4 | Hukuki sayfa | "Tanı/tedavi yerine geçmez" ifadesi net | Onay bekliyor |
| P-41 | Erişilebilirlik Bildirimi (sayfa/URL kesinleşmemiş) | §14.4 | P1 | Footer/legal | Hukuki/erişilebilirlik sayfası | Hedef standart + geri bildirim kanalı var | Beklemede |
| P-42 | Marka Bildirimi (sayfa/URL kesinleşmemiş) | §14.4 | P1 | Footer/legal | Hukuki sayfa | Marka ilişkisi netleşmiş | Onay bekliyor |

> Not: Kullanıcının orijinal promptundaki "Sonuçları Anlama" ve "Test Süreci" üst düzey menü öğeleri, strateji dokümanında `/hastalar-icin/` altında alt sayfa olarak modellenmiştir (P-10, P-11). Doküman otorite kaynak kabul edilerek IA bu şekilde uygulanacaktır; kullanıcı promptundaki üst düzey listeleme ile çelişki bilinçli olarak dokümana göre çözülmüştür (bkz. `architecture-decision-record.md`).

### 3.2 Her sayfa için ortak alan gereksinimleri

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| PC-01 | Tek ve anlamlı H1 | §9.3 | P0 | Page içerik modeli | `h1` zorunlu alan | Otomatik test: sayfa başına tek `<h1>` | Beklemede |
| PC-02 | SEO title, meta açıklama, canonical, OG alanları | §9.4, Ek A | P0 | Page/BlogPost/Publication modeli | `seoTitle`, `metaDescription`, `canonicalUrl`, `ogImage` | Metadata testleri geçiyor | Beklemede |
| PC-03 | Uygun schema türü (Organization/WebSite/WebPage/Article/FAQPage/BreadcrumbList/MedicalWebPage) | §8.1, §9.4 | P0 | Şema katmanı | JSON-LD üretim fonksiyonları | Rich Results Test + görünür içerikle birebir | Beklemede |
| PC-04 | İlk yayın / son güncelleme tarihi, editör, medikal inceleyen | §1, §12.2 | P0 | CMS içerik modeli | `publishedAt`, `updatedAt`, `author`, `medicalReviewer` | Sayfada görünür, boşsa yayın engellenir | Beklemede |
| PC-05 | Kaynakça / bilimsel referans alanı | §8.6, §9.3 | P0 | Page/ClinicalStudy/Publication modeli | `references[]` | Her iddia için kaynak linki mevcut | Beklemede |
| PC-06 | Sorumluluk reddi (tıbbi bilgilendirme) | §14.3, §14.4 | P0 | Tüm medikal sayfalar | Ortak `MedicalDisclaimer` bileşeni | Her medikal sayfada görünür | Beklemede |
| PC-07 | İlgili içerikler / iç bağlantılar (3-5 bağlamsal link) | §9.3, §9.5 | P0 | Page/BlogPost modeli | `relatedContent[]` + pillar-cluster linkleme | Sayfa sonunda 3-5 ilgili link var | Beklemede |
| PC-08 | Birincil/ikincil CTA | §7.1, §8.1-8.7 | P0 | Page modeli | `primaryCta`, `secondaryCta` | Her P0 sayfada tanımlı CTA var | Beklemede |
| PC-09 | Hasta ve HCP içeriğinin ayrı üretilmesi (aynı metnin küçük değişikliklerle tekrarı değil) | Kullanıcı promptu §5, strateji §3.2, §5 | P0 | İçerik modeli | `targetAudience` alanı + ayrı content tipi/bölüm şablonları | Editoryal inceleme: iki versiyon bağımsız yazılmış | Beklemede |

## 4. SEO gereksinimleri

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| S-01 | Türkçe ana sürüm kök dizinde; `/en/` Türkçe içerik için kullanılmamalı | §6.3 | P0 | Routing | App Router kök locale = tr | `/en/*` eski URL'ler artık Türkçe içerik sunmuyor | Tamamlandı — app/en/[[...slug]]/route.ts + kök locale tr |
| S-02 | Eski `/en/mammaprint/`, `/en/blueprint/` → yeni Türkçe canonical'a 301 | §6.3, §16.1 | P0 | Redirect modülü | `redirect-map.csv` + middleware/next.config redirects | Redirect testleri: tek adım, 301, döngü yok | Tamamlandı — Redirect tablosu + route handler ile doğrulandı (301, tek adım) |
| S-03 | Self-canonical + http/https, www/non-www, trailing slash tekilleştirme | §9.4 | P0 | Middleware/SEO helper | Canonical URL normalizasyon fonksiyonu | Otomatik test: her sayfa `<link rel="canonical">` doğru | Devam ediyor — lib/seo.ts absoluteUrl() hazır; sayfa bazlı <link rel=canonical> Faz 2'de |
| S-04 | Sitemap index + sayfa/blog/yayın/video alt sitemap'leri, yalnız indekslenebilir URL | §9.4 | P0 | `/sitemap.xml` | Next.js `sitemap.ts` dinamik üretim | Sitemap'teki tüm URL'ler 200 dönüyor | Tamamlandı — app/sitemap.ts (statik + DB) çalışıyor |
| S-05 | Robots.txt: yönetim/önizleme/arama parametreleri engelli, sitemap belirtilmiş | §9.4 | P0 | `/robots.txt` | Next.js `robots.ts` | Admin ve preview path'leri disallow | Tamamlandı — app/robots.ts çalışıyor |
| S-06 | Hreflang yalnızca eksiksiz İngilizce sürüm varsa | §6.3, §9.4 | P2 | i18n modülü | Koşullu hreflang üretimi | EN içerik yoksa hreflang üretilmiyor | Beklemede (varsayım: EN kapsam dışı, bkz. açık varsayımlar) |
| S-07 | Silinen içerik 410/404, yönlendirilen 301, soft-404 yok | §9.4 | P0 | Redirect/error modülü | Custom 404/410 handler | Durum kodu testleri geçiyor | Beklemede |
| S-08 | Pagination/filtre sayfalarında indeks şişmesi önleme | §9.4, blog gereksinimleri | P0 | Blog/Publication filtre | `noindex` + canonical stratejisi filtreli URL'lerde | Filtreli URL'ler sitemap'te yok, noindex header/tag var | Beklemede |
| S-09 | Organization, WebSite, BreadcrumbList, Article/BlogPosting, Person, FAQPage, VideoObject, Dataset/ScholarlyArticle şemaları | §9.4 | P0/P1 | Şema katmanı | Sayfa tipine göre JSON-LD üretimi | Schema.org validator + Rich Results Test | Devam ediyor — Organization/WebSite eklendi; Article/FAQPage/BreadcrumbList helper hazır, sayfalarda kullanımı Faz 2/3 |
| S-10 | Her sayfada özgün OG başlık/açıklama + 1200x630 paylaşım görseli | §9.4 | P0 | Page/BlogPost modeli | `ogImage`, `ogTitle`, `ogDescription` | OG etiketleri her sayfada benzersiz | Beklemede |
| S-11 | Search Console: domain property, sitemap, URL denetimi | §9.4 | P0 | Operasyon (kod dışı) | — | Search Console kurulumu tamamlanmış | Beklemede |
| S-12 | Log analizi: bot tarama, 404, redirect, crawl budget | §9.4 | P2 | Monitoring | Sunucu log pipeline | Aylık log raporu üretiliyor | Beklemede |
| S-13 | Pillar-cluster iç link mimarisi | §9.5 | P0 | İçerik modeli + UI | `relatedContent` + otomatik "ilgili içerik" bileşeni | Her pillar sayfa ≥5 cluster'a bağlı, her cluster pillar'a geri bağlı | Beklemede |
| S-14 | AI arama görünürlüğü: doğrudan/kısa/kaynaklı yanıt blokları | §9.6 | P1 | İçerik şablonu | "Kısa yanıt" bileşeni (ilk 100-150 kelime) | Blog/pillar şablonunda kısa yanıt bloğu var | Beklemede |
| S-15 | On-page standart: title 50-60 karakter, tek H1, ilk 150 kelimede yanıt | §9.3 | P0 | Editoryal + CMS validasyon | CMS karakter sayacı + uyarı | CMS kaydı title uzunluğu için uyarı veriyor | Beklemede |
| S-16 | Görsellerde anlamlı dosya adı ve alt metin; dekoratif görsel boş alt | §9.3, kullanıcı promptu §16 | P0 | Medya modülü | Image component + zorunlu `alt` alanı (dekoratif hariç) | Otomatik test: `alt` eksik görsel yok | Tamamlandı — next/image + anlamlı Türkçe dosya adları + açıklayıcı alt metin (bkz. docs/media-credits.md) |
| S-17 | Anahtar kelime kümelerinin sayfalara eşlenmesi, keyword stuffing yok | Ek B | P0 | Editoryal süreç | Kümeleme haritası (bkz. content-inventory) | Her P0 sayfa bir kümeyle eşleşmiş | Beklemede |
| S-18 | Redirect zinciri/döngü önleme | §9.4, §16.3 | P0 | Redirect modülü | Tek adım redirect validasyon script'i | CI'da redirect chain testi geçiyor | Beklemede |

## 5. Tasarım gereksinimleri

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| D-01 | Premium medikal, sakin, bilimsel, insan odaklı estetik; korkutucu/dramatik görsel yok | §11.1, §11.3 | P0 | Design system | Renk/görsel kullanım kuralları | Editoryal + tasarım incelemesi | Devam ediyor — tokenlar uygulandı, editoryal/tasarım incelemesi bekliyor |
| D-02 | Ana renk derin lacivert; MammaPrint fuşya/gül vurgu; BluePrint medikal mavi vurgu | §11.1 tablo | P0 | Design tokens | CSS custom properties / Tailwind theme | `design-system.md` token tablosu ile birebir | Tamamlandı — app/globals.css tokenları |
| D-03 | Tipografi: modern grotesk (Inter/Lato/Source Sans), gövde 17-18px masaüstü / 16-17px mobil | §11.1 tablo | P0 | Design tokens | Tailwind font-size scale | İnceleme ile ölçek doğrulanmış | Tamamlandı — Inter + tipografi ölçeği uygulandı |
| D-04 | Kartlar: yüksek kontrast, bol boşluk, sınırlı gölge, 12-16px radius | §11.1 tablo | P1 | Component library | Card component tokens | Görsel QA | Beklemede |
| D-05 | Yavaş/işlevsel mikro animasyon + `prefers-reduced-motion` desteği | §11.1 tablo, kullanıcı promptu §16 | P0 | Global CSS/animasyon katmanı | `prefers-reduced-motion` media query desteği | Otomatik + manuel a11y testi | Beklemede |
| D-06 | Bileşen kütüphanesi: header/mega menü/mobil menü, hero varyantları, ürün kartı, klinik veri kartı, kanıt özeti kartı, CTA paneli, SSS accordion, kaynak kartı, yazar/inceleyen kartı, uyarı kutuları, filtre/arama, breadcrumb, pagination | §11.2 | P0 | Component library | React bileşen seti | `component-inventory.md` ile birebir eşleşme | Devam ediyor — header/mega menü/mobil menü/footer tamamlandı; kalan bileşenler Faz 2/3 |
| D-07 | Tüm bileşenler klavye ile kullanılabilir ve ekran okuyucu uyumlu | Kullanıcı promptu §4, strateji §13.2 | P0 | Component library | ARIA + focus yönetimi | axe-core sıfır kritik ihlal | Devam ediyor — header/footer doğrulandı (klavye+ARIA); axe-core otomasyonu Faz 5 |
| D-08 | Görsellerde lisans/model izni/kaynak kaydı | §11.3 | P0 | Medya yönetim süreci | Medya metadata alanı (`license`, `credit`) | Her yüklenen görselde lisans alanı dolu | Tamamlandı — docs/media-credits.md tüm görsellerin kaynak/lisans/fotoğrafçı bilgisini tutuyor |
| D-09 | Grafiklerde eksen/zaman/hasta grubu/kaynak gösterimi | §11.3 | P0 | Veri görselleştirme bileşeni | Chart component + zorunlu context alanları | Yüzde/istatistik içeren her grafik bağlam gösteriyor | Beklemede |

## 6. Blog ve CMS gereksinimleri

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| C-01 | İçerik tipleri: Page, BlogPost, ClinicalStudy, Publication, Resource, FAQ, GlossaryTerm, Person, Organization, Redirect, FormSubmission | §12.2 | P0 | Prisma şeması | Her tip için model + migration | `content-model.md` ile birebir | Tamamlandı — prisma/schema.prisma + migration uygulandı |
| C-02 | Roller: Yazar, SEO editörü, Medikal inceleyen, Regülasyon/hukuk, Yayın yöneticisi, Sistem yöneticisi | §12.3 | P0 | RBAC | Rol tablosu + yetki matrisi | Her rol için erişim testi geçiyor | Tamamlandı — UserRole enum + lib/rbac.ts + birim testleri |
| C-03 | Medikal onaylayan + onay tarihi boşsa klinik içerik yayımlanamaz | §12.4 | P0 | Yayın iş akışı | Publish guard (server-side validation) | Boş alanla yayın denemesi reddediliyor (test) | Beklemede |
| C-04 | Kaynak gerektiren iddia için referans alanı zorunlu | §12.4 | P0 | İçerik validasyon | Zod şema kuralı | Kaynaksız sayısal iddia kaydı reddediliyor | Beklemede |
| C-05 | Title/meta/canonical/OG/alt metin kontrolleri yayın öncesi | §12.4 | P0 | CMS yayın kontrolü | Pre-publish checklist validator | Eksik metadata ile yayın engelleniyor | Beklemede |
| C-06 | Belge yüklemede sürüm ve geçerlilik tarihi zorunlu | §12.4 | P0 | Resource modeli | `version`, `validUntil` zorunlu alan | Eksik alanla yükleme reddediliyor | Beklemede |
| C-07 | Durumlar: taslak/incelemede/yayında/arşiv (+kullanıcı promptunda 8 durumlu genişletilmiş akış) | §12.4, kullanıcı promptu §8 | P0 | İçerik durum makinesi | Status enum + geçiş kuralları | Durum geçiş testleri (state machine) geçiyor | Devam ediyor — ContentStatus enum tanımlandı; yayın engelleme guard'ı Faz 2/3 |
| C-08 | Değişiklik geçmişi ve geri alma | §12.4 | P1 | Revizyon modeli | `ContentRevision` tablosu | Önceki sürüme geri dönülebiliyor | Beklemede |
| C-09 | Planlı yayın ve planlı gözden geçirme tarihi | §12.4, §10.3 | P1 | Zamanlama | Cron/scheduled job | Planlı tarihte otomatik yayın/hatırlatma | Beklemede |
| C-10 | Kırık link ve eski kaynak uyarıları | §12.4 | P2 | İçerik kalite job'ı | Link checker cron | Aylık rapor üretiliyor | Beklemede |
| C-11 | Editoryal iş akışı: konu önerisi → kaynak → taslak → medikal → hukuk/regülasyon → SEO → yayın → periyodik gözden geçirme | §10.3 | P0 | Yayın iş akışı | Workflow state machine | Uçtan uca akış testi (E2E) geçiyor | Beklemede |
| C-12 | Blog kategorileri: Meme Kanserini Anlamak, Genomik Testleri Anlamak, MammaPrint Rehberi, BluePrint Rehberi, Tedavi Kararı, Klinik Araştırmalar, Hekim Kaynakları, MT Haberleri | §10.2 | P0 | Category taxonomy | Category modeli + seed data | 8 kategori CMS'te tanımlı | Beklemede |
| C-13 | Blog şablonu: H1+kısa yanıt, özet, sade terim açıklaması, H2/H3, tablo/adım, "ne anlama gelmez" kutusu, kaynaklar, yazar/inceleyen, 3-5 iç link, tıbbi bilgilendirme | §10.4 | P0 | BlogPost şablonu | Blok tabanlı içerik şablonu | Yeni yazı şablonu tüm blokları içeriyor | Beklemede |
| C-14 | Yayın sıklığı: lansman öncesi 12 evergreen + 6 pillar; ilk 3 ay ayda 4 | §10.5 | P1 | İçerik takvimi (operasyon) | — | İçerik takvimi dokümante edilmiş | Beklemede |
| C-15 | Blog özellikleri: kategori/etiket/yazar/medikal inceleyen sayfaları, arama, filtre, sayfalama, ilgili yazılar, otomatik içindekiler, okuma süresi, RSS, sitemap entegrasyonu | Kullanıcı promptu §8 | P0 | Blog modülü | Next.js dynamic routes + RSS route + sitemap | Her özellik için fonksiyonel test | Beklemede |
| C-16 | Taslak önizleme (draft preview) | Kullanıcı promptu §8 | P1 | CMS preview | Next.js Draft Mode | Yayınlanmamış içerik önizleme linkiyle görülebiliyor | Beklemede |

## 7. Medikal içerik ve hukuki gereksinimler

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| M-01 | Ana marka cümlesi: "kemoterapiyi önler/kesin tedavi seçer/her hasta için uygundur" gibi ifadelerden kaçınma | §4.1 | P0 | Tüm medikal metin | Editoryal stil kılavuzu | Medikal/hukuk incelemesi | Onay bekliyor |
| M-02 | "FDA onaylı" yerine Agendia'nın güncel "FDA-cleared" terminolojisiyle uyumlu Türkçe karşılık | §2.2, §14.3 | P0 | Ürün sayfaları | Editoryal terim sözlüğü | Regülasyon onaylı terim kullanılmış | Onay bekliyor |
| M-03 | MammaPrint ve BluePrint regülasyon statüleri karıştırılmamalı | §8.2, §14.3 | P0 | Ürün sayfaları | İçerik incelemesi | Ayrı regülasyon notu her sayfada doğru | Onay bekliyor |
| M-04 | "Kemoterapi gereksizdir/gerekmez" gibi kesin bireysel tedavi sonucu dili yasak | §14.3 | P0 | Tüm medikal metin | Editoryal kural + medikal inceleme gate | Yayın öncesi otomatik anahtar kelime taraması + manuel onay | Onay bekliyor |
| M-05 | Yüzdeler hasta grubu/takip süresi/karşılaştırma bağlamı olmadan sunulamaz | §8.2, §8.6, §14.3 | P0 | ClinicalStudy/istatistik bileşenleri | Zorunlu `context` alanı (Zod) | Bağlamsız yüzde içeren kayıt reddediliyor | Beklemede |
| M-06 | Hasta hikâyeleri sonuç garantisi gibi sunulamaz | §11.3, §14.3 | P1 | Testimonial/hikaye içerikleri (varsa) | Editoryal kural + "genellenemez" notu zorunlu | İçerik incelemesi | Onay bekliyor |
| M-07 | Kılavuz logoları/marka isimleri kullanım izni kontrolü | §14.3 | P1 | Marka varlıkları | Marka izin kaydı (metadata) | Her logo için izin belgesi referanslı | Onay bekliyor |
| M-08 | Türkiye'de geçerli reklam/tanıtım ve tıbbi cihaz/IVD mevzuatı hukuk/regülasyon onayı | §14.3 | P0 | Tüm site (lansman öncesi) | — (operasyonel süreç) | Hukuk/regülasyon sorumlusu yazılı onayı | Onay bekliyor |
| M-09 | Terminoloji düzeltmeleri: "NCNN"→"NCCN", "her erken evre hasta" gibi geniş ifadelerin daraltılması | §2.3 | P0 | Mevcut/yeni içerik | Editoryal düzeltme listesi | Medikal ekip onaylı düzeltme uygulanmış | Onay bekliyor |
| M-10 | Kaynağı doğrulanmamış içerik `[MEDİKAL ONAY GEREKLİ]` etiketiyle işaretlenip yayına kapalı tutulmalı | Kullanıcı promptu §12, §22 | P0 | CMS içerik durumu | Content status = `medical_review_required`, `noindex` + yayın engeli | Bu statüdeki içerik public route'ta 404/gizli | Beklemede |
| M-11 | KVKK Aydınlatma, Çerez Politikası, Gizlilik Politikası, Kullanım Koşulları, Tıbbi Bilgilendirme, Marka Bildirimi, Erişilebilirlik Bildirimi sayfaları | §14.4 | P0 | Legal sayfa modülü | Statik/CMS sayfa + hukuk onay alanı | Hukuk ekibi son onayı verilmiş | Onay bekliyor |
| M-12 | Veri minimizasyonu: standart formlarda tanı/rapor/genetik sonuç/numune no istenmemeli | §14.1 | P0 | İletişim formları | Form şeması sağlık alanı içermez | Form alan denetimi: yasak alan yok | Beklemede |
| M-13 | Form mesaj alanında "sağlık/genetik veri paylaşmayın" uyarısı | §14.1, §8.7 | P0 | İletişim formu UI | Uyarı bileşeni | Her formda görünür | Beklemede |
| M-14 | Kişisel sağlık verisi gerektiren ayrı süreç varsa hukuki işleme şartı/erişim/aktarım/saklama ayrıca tasarlanmalı | §14.1 | P2 | (Kapsam dışı varsayılan) | — | Talep gelirse ayrı gereksinim dokümanı açılır | Beklemede (varsayım: mevcut kapsamda yok) |
| M-15 | Yurt dışına veri aktarımı varsa güncel KVKK mekanizmaları hukuk ile değerlendirilmeli | §14.1 | P1 | Altyapı seçimi (hosting/CDN) | Veri akış haritası | Hukuk onayı | Onay bekliyor |
| M-16 | Çerez: zorunlu olmayan analitik/pazarlama çerezleri tercihten önce çalışmamalı; opt-in eşit görünürlükte | §14.2 | P0 | Çerez tercih merkezi | Consent Mode + gate'lenmiş script yükleme | Analitik script, onay verilmeden network'te görünmüyor (test) | Beklemede |
| M-17 | Editoryal politika, düzeltme politikası, kaynak kullanım politikası, medikal inceleme politikası sayfaları/alanları | Kullanıcı promptu §11 | P1 | Kurumsal/legal sayfa | İçerik sayfası | Sayfalar yayında | Beklemede |
| M-18 | Test her hasta için uygunmuş gibi sunulamaz; kişisel teşhis/tedavi önerisi verilemez | Kullanıcı promptu §12, strateji §14.3 | P0 | Tüm medikal içerik | Editoryal kural + disclaimer bileşeni | İçerik incelemesi + disclaimer her sayfada | Onay bekliyor |

## 8. Teknik gereksinimler

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| T-01 | SSR/SSG destekli modern frontend framework | §12.1 | P0 | Mimari | Next.js App Router + RSC | ADR onaylı, proje bu framework ile kuruluyor | Tamamlandı |
| T-02 | Rol/iş akışı destekli headless CMS (dahili CMS olarak yorumlanmıştır — bkz. ADR) | §12.1 | P0 | CMS | Prisma + PostgreSQL + dahili admin panel | ADR'de karar gerekçeli | Devam ediyor — veri modeli + admin auth kuruldu; içerik yönetim UI'ları Faz 2/3 |
| T-03 | Ayrı güvenli form/API endpoint, rate limit, spam koruması | §12.1, §13.3 | P0 | Form API | Next.js Route Handlers + rate limiter + honeypot/CAPTCHA | Form güvenlik testleri geçiyor | Beklemede |
| T-04 | Arama: başlangıçta yerel indeks, büyüdükçe Algolia/Meilisearch benzeri | §12.1 | P1 | Arama modülü | PostgreSQL full-text search (başlangıç) | Blog/yayın araması çalışıyor | Beklemede |
| T-05 | Hosting: CDN, edge cache, otomatik yedek, WAF | §12.1 | P0 | Altyapı | Deployment platformu (karar bekliyor, bkz. açık varsayımlar) | Yedekleme prosedürü test edilmiş | Beklemede |
| T-06 | Medya: optimize görsel pipeline, WebP/AVIF, responsive image, PDF sürüm takibi | §12.1, §11.3 | P0 | Medya modülü | Next/Image + S3 uyumlu depolama | Görsel format/boyut testleri geçiyor | Beklemede |
| T-07 | Analytics: GA4 veya gizlilik odaklı alternatif + Search Console + consent mode | §12.1 | P0 | Analytics | GA4 + Consent Mode entegrasyonu | Consent olmadan veri gönderilmiyor | Beklemede |
| T-08 | Monitoring: uptime, hata, form teslimi, CWV RUM | §12.1 | P1 | Observability | Uptime monitor + error tracking + web-vitals RUM | Dashboard aktif | Beklemede |
| T-09 | HTTPS, HSTS, TLS, otomatik sertifika yenileme | §13.3 | P0 | Altyapı | Hosting platformu TLS yönetimi | SSL Labs testi A/A+ | Beklemede |
| T-10 | CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy | §13.3 | P0 | HTTP headers | Next.js `headers()` config | securityheaders.com testi geçiyor | Devam ediyor — temel güvenlik header'ları next.config.ts'te; CSP Faz 5 |
| T-11 | CMS'te MFA, rol ayrımı, IP/risk bazlı erişim, audit log | §13.3 | P0 | Admin auth | Auth.js/benzeri + audit log tablosu | MFA zorunlu, audit log kayıt tutuyor | Devam ediyor — rol ayrımı + audit log şeması var; MFA ve log yazımı Faz 5 |
| T-12 | Form CSRF, rate limiting, bot koruması, sunucu tarafı doğrulama | §13.3 | P0 | Form modülü | CSRF token + Zod server validation | Güvenlik testleri geçiyor | Beklemede |
| T-13 | Dosya yükleme yalnız admin panelde, MIME/virüs kontrolü | §13.3 | P0 | Medya yükleme | MIME whitelist + boyut limiti + tarama | Zararlı/yanlış tip dosya reddediliyor | Beklemede |
| T-14 | Bağımlılık/CMS güncellemeleri için aylık bakım penceresi | §13.3 | P2 | Operasyon | Dependabot/Renovate | Otomatik PR akışı aktif | Beklemede |
| T-15 | Günlük yedek, geri dönüş testi, ayrı dev/staging/prod ortamları | §13.3 | P0 | Altyapı | DB backup cron + restore test script | Restore testi başarılı (tatbikat) | Beklemede |
| T-16 | Staging noindex + parola/IP koruması | §13.3 | P0 | Staging config | Basic Auth + `X-Robots-Tag: noindex` | Staging arama motorlarına kapalı | Beklemede |
| T-17 | Hata mesajlarında kişisel/sistem bilgisi sızdırılmaması | §13.3 | P0 | Error handling | Generic error page (prod) | Prod hata sayfası stack trace göstermiyor | Beklemede |
| T-18 | Form/analitik verisi için saklama ve silme politikası | §13.3, §14.1 | P0 | Veri yönetişimi | Retention job + politika dokümanı | Politika + otomatik silme job'ı var | Beklemede |
| T-19 | TypeScript strict mode, `any` yasağı, domain modelleri açık isimlendirme | Kullanıcı promptu §21 | P0 | Kod kalitesi | `tsconfig.json strict:true` + lint kuralı | CI'da tip/lint hatası yok | Tamamlandı |
| T-20 | Türkçe slug dönüşümü tutarlı, `tr-TR` tarih/sayı biçimlendirme | Kullanıcı promptu §21 | P0 | Utility katmanı | Slug helper (Türkçe karakter haritası) + `Intl` `tr-TR` | Birim testleri geçiyor | Tamamlandı — lib/slug.ts + birim testleri |
| T-21 | Docker, CI/CD, Playwright E2E, Vitest birim/entegrasyon | Kullanıcı promptu §3 | P0 | DevOps | `Dockerfile`, `docker-compose.yml`, CI pipeline, test süitleri | CI pipeline yeşil | Devam ediyor — Docker/CI/Vitest tamam; Playwright E2E Faz 5 |

## 9. Analitik ve ölçümleme gereksinimleri

| # | Gereksinim | Kaynak bölüm | Öncelik | Uygulanacağı modül | Teknik karşılık | Test/kabul kriteri | Güncel durum |
|---|---|---|---|---|---|---|---|
| A-01 | KPI seti: organik görünürlük, içerik kalitesi, hasta/hekim etkileşimi, teknik kalite, editoryal kalite, güvenlik/uyum | §15.1 | P1 | Analytics dashboard | GA4 + Search Console entegrasyon raporları | Dashboard'lar yayında | Beklemede |
| A-02 | Olaylar: `cta_testleri_kesfet`, `cta_hasta_merkezi`, `cta_hekim_merkezi`, `download_*`, `contact_submit_*`, `medical_info_request`, `faq_open`, `glossary_term_view`, `internal_search`, `publication_filter`, `publication_outbound_click`, `video_start/complete`, `consent_update`, `form_error/success` | §15.2 | P0 | Analytics event katmanı | `docs/analytics-event-plan.md` + GA4 custom events | Her olay GA4 DebugView'de doğrulanmış | Beklemede |
| A-03 | Mesaj içeriği/kişisel sağlık verisi analitiğe gönderilmemeli | §15.2, kullanıcı promptu §18 | P0 | Analytics event katmanı | Event payload allowlist (PII scrubbing) | Network inceleme: PII yok | Beklemede |
| A-04 | Dashboard: yönetim özeti, SEO, içerik, hekim, teknik | §15.3 | P2 | Raporlama | GA4/Looker Studio dashboard | Dashboard'lar erişilebilir | Beklemede |

---

## Çelişki ve netleştirme notları

1. **Kullanıcı promptu §6 IA vs. strateji dokümanı §6.2** — Kullanıcının promptu "Test Süreci" ve "Sonuçları Anlama"yı üst düzey menü öğesi olarak listeliyor; strateji dokümanı bunları `/hastalar-icin/` altında alt sayfa yapıyor. **Karar:** Strateji dokümanı (proje birincil kaynağı) esas alınacak; `implementation-plan.md`'de gerekçelendirilecek.
2. **CMS teknolojisi** — Strateji dokümanı "headless CMS veya iyi yapılandırılmış WordPress" seçeneğini açık bırakıyor; kullanıcının teknik prompt'u (§3) dahili CMS + Prisma + PostgreSQL istiyor. **Karar:** Dahili CMS (Prisma/PostgreSQL) — WordPress, rol bazlı medikal onay akışı ve TypeScript tip güvenliği gereksinimleriyle uyumsuz. ADR'de detaylandırılacak.
3. **`/en/` gereksinimi** — Strateji dokümanı çok dilli desteği yalnızca "gerçekten yönetilecekse" öneriyor (Varsayımlar, §6.3). MVP kapsamında (§17.2) İngilizce sürüm yok. **Karar:** EN sürüm P2/kapsam dışı; sadece eski `/en/*` URL'leri 301 ile Türkçe karşılığa yönlendirilecek.
4. **Ödemeli 3. taraf servisler** (arama motoru — Algolia/Meilisearch, hosting/CDN/WAF, GA4) — kullanıcı onayı gerektiren yüksek etkili kararlar; bkz. Faz 0 özeti ve `architecture-decision-record.md`.
