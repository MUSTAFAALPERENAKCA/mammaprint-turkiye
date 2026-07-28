# Uygulama Planı

Bu plan `docs/requirements-matrix.md` ve `docs/architecture-decision-record.md` ile birlikte okunmalıdır. Fazlar strateji dokümanı §17.1 ile kullanıcı promptu §20'deki faz yapısını birleştirir.

## Faz 0 — Analiz (bu doküman seti ile tamamlanıyor)

**Kapsam:** Strateji dokümanı çıkarımı, gereksinim matrisi, mevcut durum denetimi, mimari kararlar, site haritası kesinleştirme, redirect haritası, içerik envanteri.

**Çıktılar (bu oturumda üretildi):**
- ✅ `docs/strategy-source.md`
- ✅ `docs/requirements-matrix.md`
- ✅ `docs/current-state-audit.md`
- ✅ `docs/architecture-decision-record.md`
- ✅ `docs/implementation-plan.md` (bu dosya)
- ✅ `docs/content-inventory.md`
- ✅ `docs/redirect-map.csv`

**Faz 0 riskleri (Faz 1'e taşınacak):**
1. GA4/consent mode devreye alma hukuk onayı bekliyor (ADR-008) — geliştirme entegrasyon noktasını hazırlar, prod script'i onaysız yüklenmez.
2. Object storage ve hosting/CDN/WAF sağlayıcısı seçimi kullanıcı onayı gerektiriyor (ADR-006, T-05) — Faz 1 başlamadan netleştirilmeli, aksi halde `.env.example` ve Docker yapılandırması placeholder ile ilerler.
3. Tüm medikal metinler `[MEDİKAL ONAY GEREKLİ]` etiketiyle üretilecek ve yayına kapalı tutulacak (bkz. `docs/content-gaps.md` — Faz 2/3'te oluşturulacak) — bu, lansımın gecikme riskidir ve proje sahibine baştan bildirilmelidir.
4. mammaprintturkiye.com'un DNS/hosting erişimi yok — Faz 6 (Lansman) bu erişim olmadan tamamlanamaz.

---

## Faz 1 — Temel altyapı

**Kapsam:** Proje iskeleti, tasarım tokenları, veritabanı şeması, kimlik doğrulama, rol sistemi, CMS veri modeli, SEO yardımcı fonksiyonları, layout/header/footer/navigasyon, loading/error durumları.

**Yapılacaklar:**
- Next.js App Router + TypeScript (strict) + Tailwind CSS proje iskeleti.
- `docs/design-system.md`, `docs/component-inventory.md`, `docs/page-wireframes.md` üretimi.
- Prisma şeması: Page, BlogPost, ClinicalStudy, Publication, Resource, FAQ, GlossaryTerm, Person, Organization, Redirect, FormSubmission, ContentRevision, Role/User (bkz. `docs/content-model.md`).
- Auth.js kurulumu + rol tabanlı middleware.
- SEO yardımcıları: canonical normalizasyon, JSON-LD üretici fonksiyonlar, sitemap/robots route'ları.
- Header (mega menü, Hasta/HCP ayrımı), footer, mobil navigasyon, breadcrumb.
- Global loading/skeleton/empty/error state bileşenleri.
- Docker + docker-compose (app + postgres), CI iskeleti (lint/typecheck/test).

**Kabul kriteri:** Boş ama çalışan bir site iskeleti; admin login çalışıyor; veritabanı migration'ları uygulanabiliyor; CI yeşil.

---

## Faz 2 — Ana sayfalar

**Kapsam:** Ana Sayfa, MammaPrint, BluePrint, MammaPrint+BluePrint, Genomik Test Nedir, Genomik/Genetik Farkı, Hastalar İçin (hub + alt sayfalar), Sağlık Profesyonelleri İçin (hub + alt sayfalar), Hakkımızda, İletişim.

**Yapılacaklar:**
- `requirements-matrix.md` §3.1'deki P0 sayfalar (P-01, P-03 – P-17, P-32, P-36) uygulanır.
- Her sayfa gerçek yapı + arayüz metinleriyle kurulur; tıbbi iddia gerektiren metinler `[MEDİKAL ONAY GEREKLİ]` etiketiyle işaretlenip yayına kapalı tutulur (kullanıcı promptu §22).
- 3 iletişim formu (genel, HCP, kurumsal) + KVKK onay kutusu + rate limiting.
- Eksik/onay bekleyen içerik `docs/content-gaps.md`'ye işlenir.

**Kabul kriteri:** MVP kapsamındaki (§17.2) sayfa iskeletleri gezilebilir durumda; onaylı içerik yayında, onaysız içerik noindex+gizli.

---

## Faz 3 — Bilimsel içerik ve blog

**Kapsam:** Blog sistemi, kategoriler, etiketler, yazarlar, medikal inceleyiciler, yayınlar, klinik çalışmalar, kaynak kütüphanesi, arama, filtreleme.

**Yapılacaklar:**
- Blog modülü: liste, kategori/etiket/yazar sayfaları, RSS, otomatik içindekiler, okuma süresi.
- Editoryal iş akışı (durum makinesi): taslak → editoryal → medikal → SEO → onaylandı → planlandı → yayında → arşiv (C-07, C-11).
- ClinicalStudy (MINDACT, NBRST + iskelet: STO-3, NSABP B-42) ve Publication modelleri + filtre UI.
- `/kaynaklar/`, `/sozluk/` sayfaları.
- Ek C'deki 30 blog konusu başlık/yapı olarak CMS'e taslak kaydedilir (metin değil — bkz. içerik üretim kuralı).

**Kabul kriteri:** Editör kod yazmadan taslak oluşturabiliyor; medikal inceleyici onay/red verebiliyor; onaysız içerik yayınlanamıyor (test edilmiş).

---

## Faz 4 — SEO ve migration

**Kapsam:** Metadata, schema, sitemap, robots, canonical, redirect'ler, iç linkler, 404/410, eski URL testleri.

**Yapılacaklar:**
- `redirect-map.csv`'deki tüm kayıtlar middleware/config redirect olarak uygulanır.
- JSON-LD: Organization, WebSite, BreadcrumbList, MedicalWebPage, Article/BlogPosting, FAQPage (yalnız görünür FAQ içeriğiyle), Person.
- Sitemap index + alt sitemap'ler; robots.txt.
- Pillar-cluster iç link otomasyonu (`relatedContent`).
- Redirect zinciri/döngü testi (script).

**Kabul kriteri:** Tüm eski indeksli URL'ler tek adım 301 ile yeni karşılığa gidiyor; Rich Results Test/Schema validator hatasız; sitemap yalnız 200 dönen canonical URL içeriyor.

---

## Faz 5 — Kalite

**Kapsam:** Performans, erişilebilirlik, güvenlik, otomatik testler, görsel regresyon, içerik kalite kontrolü, medikal onay kontrolleri, analitik doğrulama.

**Yapılacaklar:**
- `docs/performance-budget.md`, `docs/accessibility-checklist.md`, `docs/security-checklist.md`, `docs/test-plan.md`, `docs/analytics-event-plan.md` üretimi ve uygulanması.
- Lighthouse CI, axe-core otomasyonu, Playwright E2E (kritik yolculuklar, bkz. test-plan), Vitest birim/entegrasyon.
- Güvenlik: CSP/headers, rate limiting, dosya yükleme MIME kontrolü, audit log.
- Consent Mode doğrulaması: onaysız durumda analytics network isteği yok.

**Kabul kriteri:** Kritik erişilebilirlik ihlali yok; kritik/yüksek güvenlik açığı yok; CWV lab testlerinde hedefe yakın (saha verisi lansman sonrası izlenir).

---

## Faz 6 — Deployment

**Kapsam:** Docker, CI/CD, staging, production checklist, veritabanı migration, yedekleme, izleme, rollback planı.

**Yapılacaklar:**
- `docs/deployment-guide.md` üretimi: staging (noindex+auth) ve production ortam kurulumu.
- Günlük yedek + restore tatbikatı.
- Uptime/error/CWV RUM monitoring.
- Lansman günü: DNS kesintisiz geçiş planı (mammaprintturkiye.com erişimi gerektirir — bkz. açık risk), Search Console sitemap gönderimi, ilk 30 gün günlük / sonraki 60 gün haftalık 404-indeks-trafik takibi (§16.2).

**Kabul kriteri:** `docs/requirements-matrix.md` içindeki tüm P0 satırları "Tamamlandı"; strateji dokümanı §17.3 lansman kabul kriterlerinin tamamı işaretli.

---

## Faz 7 — Büyüme (kapsam dışı, referans amaçlı)

Blog/içerik güncelleme ritmi (§10.5), CRO, yeni kaynaklar, İngilizce sürüm değerlendirmesi (ADR-010), arama motorunun Meilisearch'e taşınması (ADR-007). Bu faz mevcut geliştirme sözleşmesi kapsamında değildir; yalnızca yol haritası bütünlüğü için listelenmiştir.

---

## Her faz sonunda tekrarlanacak adımlar

1. Tamamlanan işleri listele.
2. `docs/requirements-matrix.md`'deki ilgili satırların "Güncel durum" sütununu güncelle.
3. Test paketini çalıştır (lint, typecheck, unit, e2e ilgili kapsamda).
4. Hataları gider.
5. Sonraki fazın risklerini bu dokümanın ilgili faz bölümüne ekle.
6. Çalışan bir commit oluştur, anlamlı mesaj yaz.

## İlk uygulanacak küçük ve güvenli iş paketi (Faz 1 başlangıcı)

Kullanıcı onayından sonra önerilen ilk somut iş paketi:
1. Next.js + TypeScript + Tailwind proje iskeletini oluştur (`create-next-app` temelli, App Router, strict TS).
2. Prisma + PostgreSQL bağlantısını Docker Compose ile kur (yerel geliştirme).
3. Temel Page/BlogPost/Person Prisma modellerini ve ilk migration'ı oluştur.
4. Header/Footer/temel layout + boş ana sayfa route'unu oluştur (içerik yok, yalnız iskelet).
5. CI pipeline'ı (lint + typecheck) ekle.

Bu paket düşük risklidir, geri alınabilir, ve hiçbir medikal/hukuki/marka kararı içermez — bu nedenle onay beklemeden başlatılabilir.
