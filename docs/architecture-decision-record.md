# Mimari Karar Kaydı (ADR)

Bu doküman, Faz 0 kapsamında verilen bağlayıcı mimari kararları ve gerekçelerini listeler. Format: her karar bir ADR girişi olarak `Bağlam / Karar / Gerekçe / Alternatifler / Sonuç` şeklinde yazılmıştır.

---

## ADR-001: Greenfield kod tabanı (mevcut koda geçiş değil)

**Bağlam:** Repository boş; strateji dokümanının denetlediği canlı site (mammaprintturkiye.com) için kod erişimi yok.
**Karar:** Yeni kod tabanı sıfırdan kurulur. Geçiş yalnızca URL seviyesinde (301 redirect'ler) sağlanır, kod seviyesinde değil.
**Gerekçe:** Denetlenecek/yeniden kullanılacak kod yok; strateji dokümanı mevcut sitenin mimari olarak yetersiz olduğunu (CMS yok, hedef kitle ayrımı yok, teknik SEO eksik) açıkça belirtiyor.
**Sonuç:** `current-state-audit.md` bkz.

---

## ADR-002: Frontend — Next.js App Router + TypeScript + React Server Components

**Bağlam:** Strateji dokümanı §12.1 "SSR/SSG destekli modern frontend framework" istiyor; kullanıcı promptu doğrudan Next.js App Router öneriyor.
**Karar:** Next.js (App Router, RSC, TypeScript strict mode) kullanılacak.
**Gerekçe:**
- Kritik içerik ve linklerin sunucu tarafında HTML olarak gelmesi gereksinimini (S-01/§9.4 render kuralı) doğal olarak karşılıyor.
- Aktif bakımlı, geniş ekosistem, statik + dinamik sayfa üretimini (SSG/ISR/SSR) tek çatı altında sağlıyor.
- Next.js `sitemap.ts`/`robots.ts`/metadata API'leri SEO gereksinimlerini (S-03, S-04, S-05) framework seviyesinde karşılıyor.
**Alternatifler:** Remix (benzer yetenekte, ekosistem daha küçük), Nuxt/Vue (ekip deneyimi varsayımı yok), saf Astro (CMS/rol tabanlı admin panel için ek framework gerektirir).
**Sonuç:** Onaylandı, düşük riskli varsayım olarak işaretlendi.

---

## ADR-003: CMS — Dahili (Prisma + PostgreSQL) headless CMS, WordPress değil

**Bağlam:** Strateji dokümanı §12.1 "rol/iş akışı destekli headless CMS **veya** iyi yapılandırılmış WordPress" seçeneğini açık bırakıyor.
**Karar:** Dahili, uygulama içi CMS (Next.js admin route grubu + Prisma/PostgreSQL) kullanılacak; WordPress veya üçüncü taraf headless CMS SaaS (Contentful/Sanity vb.) kullanılmayacak.
**Gerekçe:**
- Strateji dokümanının istediği çok adımlı medikal onay iş akışı (§10.3, §12.3, §12.4) ve kullanıcı promptunun 8 durumlu yayın akışı (taslak → editoryal → medikal → SEO → onaylandı → planlandı → yayında → arşiv) standart WordPress eklentileriyle güvenilir biçimde modellenemez; özel durum makinesi ve rol tabanlı yetkilendirme gerektirir.
- TypeScript uçtan uca tip güvenliği (Zod + Prisma) CMS içerik modelini API sözleşmesiyle senkron tutar; WordPress REST/GraphQL katmanı bu garantiyi vermez.
- Tek kod tabanında hem public site hem admin panel; ayrı bir CMS altyapısının bakım/güvenlik yükü (WordPress'in kendi güvenlik açığı geçmişi) alınmaz.
**Alternatifler:** WordPress (hızlı kurulum ama iş akışı/tip güvenliği zayıf), Sanity/Contentful (rol modeli hazır ama medikal onay durum makinesi yine özel kod gerektirir + ek aylık maliyet — ödemeli 3. taraf servis, kullanıcı onayı gerektirir).
**Sonuç:** Onaylandı. **Not:** Bu, kullanıcı promptunun "ücretli üçüncü taraf servisler" için açık onay isteme talimatı kapsamında bilgilendirici bir karardır — dahili CMS seçilerek ek SaaS maliyeti şimdilik önlenmiştir.

---

## ADR-004: Veritabanı — PostgreSQL + Prisma ORM

**Bağlam:** Kullanıcı promptu doğrudan bu yığını öneriyor; strateji dokümanı içerik modeli (§12.2) ilişkisel veri gerektiriyor (Page↔FAQ↔Publication↔ClinicalStudy çapraz referanslar).
**Karar:** PostgreSQL + Prisma ORM.
**Gerekçe:** İlişkisel bütünlük (foreign key), migration disiplini, tip güvenli sorgular. Aktif bakımlı, stabil.
**Alternatifler:** MySQL (eşdeğer, ekip tercihi yok), MongoDB (ilişkisel içerik modeli için uygun değil).
**Sonuç:** Onaylandı.

---

## ADR-005: Kimlik doğrulama ve yetkilendirme — Auth.js (NextAuth) + rol tabanlı erişim

**Bağlam:** Admin panelde MFA, rol ayrımı, audit log gerekiyor (§13.3, T-11).
**Karar:** Auth.js (credentials + opsiyonel MFA) ile kimlik doğrulama, uygulama içi rol tablosu (Super Admin, İçerik Editörü, Medikal İnceleyici, SEO Editörü, Yayıncı) ile yetkilendirme.
**Gerekçe:** Aktif bakımlı, Next.js ile birinci sınıf entegrasyon, self-hosted (üçüncü taraf kimlik SaaS'ına bağımlılık yok — KVKK veri aktarımı riskini azaltır, bkz. M-15).
**Alternatifler:** Clerk/Auth0 (hızlı ama ücretli SaaS + olası yurt dışı veri aktarımı — KVKK incelemesi gerektirir).
**Sonuç:** Onaylandı (self-hosted varsayılan); ücretli SaaS alternatifi yalnız performans/ölçek ihtiyacı doğarsa yeniden değerlendirilecek.

---

## ADR-006: Medya depolama — S3 uyumlu object storage

**Bağlam:** Görsel/PDF/rapor dosyaları için CDN destekli, sürüm takipli depolama gerekiyor (§11.3, C-06, T-06).
**Karar:** S3 API uyumlu object storage (sağlayıcı seçimi altyapı kararına bağlı — bkz. açık varsayımlar).
**Gerekçe:** Next/Image ve CDN entegrasyonu için endüstri standardı; sağlayıcıdan bağımsız (S3 API) taşınabilirlik.
**Sonuç:** Onaylandı; **somut sağlayıcı (AWS S3 / Cloudflare R2 / DigitalOcean Spaces vb.) kullanıcı onayı gerektiren açık bir karardır** — maliyet ve veri lokasyonu (KVKK yurt dışı aktarım riski) içerir.

---

## ADR-007: Arama — PostgreSQL full-text search (MVP), Meilisearch'e geçiş kapısı açık

**Bağlam:** §12.1 "başlangıçta yerel indeks; büyüdüğünde Algolia/Meilisearch benzeri" öneriyor.
**Karar:** MVP'de PostgreSQL `tsvector`/`pg_trgm` tabanlı arama; blog/yayın hacmi büyüdüğünde (T-04) Meilisearch'e (self-hosted, ücretsiz) geçiş değerlendirilir.
**Gerekçe:** Ek altyapı/maliyet olmadan yeterli; Algolia ücretli SaaS olduğundan MVP'de tercih edilmemiştir.
**Sonuç:** Onaylandı.

---

## ADR-008: Analytics — GA4 + Google Consent Mode

**Bağlam:** §12.1, §14.2, M-16 — çerez onayına bağlı, KVKK uyumlu analitik gerekiyor.
**Karar:** GA4, Google Consent Mode v2 ile entegre; onay verilmeden hiçbir analitik/pazarlama çerezi tetiklenmez.
**Gerekçe:** Endüstri standardı, Search Console entegrasyonu doğal, consent mode desteği hazır.
**Alternatifler:** Plausible/Fathom (gizlilik odaklı, KVKK riski daha düşük ama ücretli SaaS + Search Console entegrasyonu yok).
**Sonuç:** **Kullanıcı onayı gerektiren açık karar** — GA4 verilerinin ABD sunucularına aktarımı KVKK açısından hukuk ekibi tarafından değerlendirilmelidir (bkz. M-15). Onay alınana kadar GA4 entegrasyonu **onay bekliyor** statüsündedir; geliştirme, entegrasyon noktasını hazırlar ama üretim script'ini yüklemez.

---

## ADR-009: IA çelişkisi çözümü — strateji dokümanı otorite kaynak

**Bağlam:** Kullanıcı promptunun §6 sayfa listesi ("Test Süreci", "Sonuçları Anlama" üst düzey) ile strateji dokümanının §6.2 site haritası (bu sayfalar `/hastalar-icin/` altında) arasında yapısal fark var.
**Karar:** Strateji dokümanının §6.2 site haritası birebir uygulanır; kullanıcı promptundaki üst düzey sayfa isimleri kavramsal kategori olarak korunur ama URL/hiyerarşi strateji dokümanına göre kurulur.
**Gerekçe:** Kullanıcı talimatı açıkça "Strateji dokümanındaki site haritasını esas al" diyor (kullanıcı promptu §5).
**Sonuç:** Onaylandı, düşük riskli.

---

## ADR-010: Çoklu dil (İngilizce) — MVP kapsamı dışında

**Bağlam:** Strateji dokümanı Varsayımlar bölümü: "İngilizce içerik ancak gerçekten yönetilecekse ayrı ve eksiksiz dil sürümü olarak yayımlanacaktır." MVP kapsamı (§17.2) İngilizceyi içermiyor.
**Karar:** MVP'de yalnızca Türkçe. Mimari gelecekte çoklu dile açık kurulur (Next.js i18n routing altyapısı hazır bırakılır, içerik modeli `locale` alanı taşır) ama İngilizce içerik üretilmez.
**Gerekçe:** Yarım/eksik İngilizce sürüm, mevcut sitenin ana sorunlarından biri olan duplicate/karışık dil URL sorununu tekrar yaratır (bkz. current-state-audit.md kritik sorun #1-2).
**Sonuç:** Onaylandı, düşük riskli varsayım.

---

## Özet: Kullanıcı onayı bekleyen açık kararlar

| ADR | Konu | Neden onay gerekli |
|---|---|---|
| ADR-006 | Object storage sağlayıcısı | Maliyet + veri lokasyonu/KVKK |
| ADR-008 | GA4 kullanımı ve consent mode devreye alma | Yurt dışı veri aktarımı, KVKK hukuk onayı |
| — | Hosting/CDN/WAF sağlayıcısı (T-05) | Maliyet + production altyapı kararı |
| — | mammaprintturkiye.com DNS/hosting erişimi | Lansman/geçiş için üçüncü taraf/production erişim gerekiyor |
| — | Marka/medikal/hukuki metinler (§7 medikal içerik güvenliği) | Nihai onay Agendia/Omnigen medikal-hukuk ekibinde |

Bu maddeler `docs/implementation-plan.md` içinde Faz 0 riskleri olarak da işaretlenmiştir.
