# İçerik Modeli

Kaynak gereksinimler: `docs/requirements-matrix.md` §6 (Blog ve CMS), strateji dokümanı §12.2-12.4. Bu doküman `prisma/schema.prisma`'nın insan tarafından okunabilir karşılığıdır — şema değiştiğinde bu dosya da güncellenmelidir.

## 1. Ortak alanlar (tüm yayınlanabilir içerik tipleri)

Her `Page`, `BlogPost`, `ClinicalStudy`, `Publication`, `Resource`, `FAQ` kaydı şu alanları taşır (gereksinim PC-01 – PC-09):

| Alan | Tip | Zorunlu | Açıklama |
|---|---|---|---|
| `id` | UUID | evet | — |
| `slug` | string | evet | Türkçe karakterden arındırılmış, tutarlı slug (bkz. `lib/slug.ts`) |
| `status` | `ContentStatus` enum | evet | Aşağıdaki 8 durumlu iş akışı |
| `targetAudience` | `patient \| hcp \| general` | evet | Hasta/HCP içerik ayrımını zorunlu kılar (PC-09) |
| `seoTitle` | string | evet | 50-60 karakter hedef, zorunlu değil ama CMS uyarır |
| `metaDescription` | string | evet | — |
| `canonicalUrl` | string | evet (auto) | Otomatik üretilir, override edilebilir |
| `ogImage` | string (media ref) | evet | 1200x630 |
| `h1` | string | evet | Sayfa başına tek H1 |
| `author` | Person ref | evet | Yazar |
| `medicalReviewer` | Person ref | koşullu | Tıbbi iddia içeren her içerikte zorunlu (C-03) |
| `references` | Reference[] | koşullu | Sayısal/klinik iddia varsa zorunlu (C-04, M-05) |
| `publishedAt` | datetime | koşullu | `status = published` olunca zorunlu |
| `updatedAt` | datetime | evet (auto) | — |
| `scheduledPublishAt` | datetime? | hayır | Planlı yayın (C-09) |
| `scheduledReviewAt` | datetime? | hayır | Planlı gözden geçirme (§10.3 madde 8) |
| `relatedContentIds` | string[] | hayır | Pillar-cluster iç link (S-13, PC-07) |
| `noindex` | boolean | evet (default false) | Filtre/parametre sayfaları için (S-08) |

## 2. `ContentStatus` enum (8 durum, kullanıcı promptu §8 + strateji §12.4)

```
draft                     -- Taslak
editorial_review          -- Editoryal incelemede
medical_review             -- Medikal incelemede
seo_review                 -- SEO incelemesinde
approved                   -- Onaylandı
scheduled                  -- Planlandı
published                  -- Yayında
archived                   -- Arşivlendi
```

Geçiş kuralları (durum makinesi, `lib/content/workflow.ts`'te uygulanacak):
- `draft → editorial_review → medical_review → seo_review → approved → (scheduled |) published → archived`
- Medikal onayı bozabilecek bir düzenleme yapılırsa (örn. iddia/istatistik/kaynak değişikliği), içerik otomatik olarak `medical_review`'e geri döner (strateji §10.3 madde son kural).
- `medical_review` durumundaki veya `medicalReviewer`/`references` alanı boş olan hiçbir kayıt `published` olamaz (C-03, C-04 — server-side guard, CMS UI'da değil).
- Kaynağı doğrulanmamış/yeni oluşturulan tüm iskelet içerik `status = medical_review`, etiket `[MEDİKAL ONAY GEREKLİ]` ile başlar (kullanıcı promptu §12, §22).

## 3. İçerik tipleri

### Page
Statik/yarı-statik sayfalar (`/mammaprint/`, `/hastalar-icin/*` vb.). Ortak alanlara ek: `hero` (JSON blok), `sections` (blok dizisi), `primaryCta`, `secondaryCta`, `schemaType` (`WebPage | MedicalWebPage | ...`).

### BlogPost
Ortak alanlara ek: `categoryId`, `tagIds[]`, `excerpt`, `featuredImage`, `featuredImageAlt`, `tableOfContents` (otomatik üretilir), `readingTimeMinutes` (otomatik), `body` (zengin metin/blok).

### ClinicalStudy
"Kanıt kartı" şablonu (strateji §8.6 tablo — zorunlu alanlar): `studyName`, `studyDesign`, `objective`, `patientPopulation`, `primaryEndpoint`, `followUpDuration`, `finding`, `clinicalImplication` ("ne anlama gelir"), `limitations` ("ne anlama gelmez"), `sourceCitation` (DOI/PubMed), `lastMedicalReviewDate`.

### Publication
`citation`, `year`, `topic`, `relatedTest` (`mammaprint | blueprint | both`), `type`, `doiOrPubmedUrl`, `summary`. Filtrelenebilir liste (§8.5).

### Resource
`documentType`, `language`, `file` (media ref), `version`, `validUntil`, `targetAudience`, `fileSizeBytes`, `mimeType`. `version`+`validUntil` zorunlu (C-06).

### FAQ
`question`, `shortAnswer`, `longAnswer`, `targetAudience`, `relatedPageIds[]`. Yalnızca `schemaEligible = true` ve sayfada gerçekten görünür olan FAQ'lar FAQPage şemasına dahil edilir (kullanıcı promptu §9).

### GlossaryTerm
`term`, `simpleDefinition` (hasta dili), `technicalDefinition` (HCP dili), `relatedTermIds[]`.

### Person
`name`, `title`, `expertise`, `bio`, `role` (`author | medical_reviewer | both`), `photo`.

### Organization
`name` (Agendia | Omnigen | MammaPrint Türkiye), `relationshipDescription`, `logo`.

### Redirect
`sourceUrl`, `destinationUrl`, `statusCode` (301|302|410), `note`, `createdAt`. Seed verisi `docs/redirect-map.csv`'den yüklenir.

### FormSubmission
`formType` (`general | hcp | corporate`), `name`, `contactValue` (email/telefon), `userType`, `subject`, `message`, `consentGiven`, `consentTimestamp`, `submittedAt`. **Hiçbir sağlık/genetik veri alanı yoktur** (M-12) — şema seviyesinde bu alanlar yoktur, sonradan eklenmesi ayrı bir hukuki/teknik onay gerektirir.

### ContentRevision
Her yayınlanabilir içerik tipi için `entityType`, `entityId`, `snapshot` (JSON), `editedBy`, `editedAt`, `changeSummary`. Geri alma (C-08) bu tablo üzerinden yapılır.

## 4. Roller (User/Role)

`super_admin | content_editor | medical_reviewer | seo_editor | publisher | system_admin` (§12.3). Yetki matrisi:

| Rol | Taslak oluştur | Yayınla | Medikal onay ver | Meta/SEO düzenle | Kullanıcı/sistem yönetimi |
|---|---|---|---|---|---|
| İçerik Editörü (Yazar) | ✅ | ❌ | ❌ | ❌ | ❌ |
| SEO Editörü | ❌ (düzenler) | ❌ | ❌ | ✅ | ❌ |
| Medikal İnceleyici | ❌ | ❌ | ✅ | ❌ | ❌ |
| Yayın Yöneticisi (Publisher) | ❌ | ✅ (onaylar tamamsa) | ❌ | ❌ | ❌ |
| Sistem Yöneticisi | ❌ | ❌ | ❌ | ❌ | ✅ |
| Super Admin | ✅ | ✅ | ✅ | ✅ | ✅ |

## 5. Public/Admin ayrımı

- Public tarafta yalnızca `status = published` (ve `scheduledPublishAt <= now()` geçmiş `scheduled` kayıtlar) sorgulanabilir — bu kural veri erişim katmanında (`lib/db/queries.ts`) merkezi olarak uygulanır, her route'ta ayrı ayrı tekrarlanmaz.
- Admin route group (`app/(admin)/`) tüm durumları görebilir; ayrı auth middleware ile korunur (bkz. görev #14).
