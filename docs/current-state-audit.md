# Mevcut Durum Denetimi

## 1. Repository durumu

Bu çalışma dizini (`/Users/alperen/Desktop/iş/hakan abi/mammaprint`) bir **git repository değildir** ve strateji dokümanı dışında hiçbir dosya içermemektedir:

```
.
./MammaPrint_Turkiye_Web_Sitesi_Strateji_Dokumani_2026.docx
```

Sonuç: **kod tabanı tamamen greenfield (sıfırdan)**. Aşağıdaki bölümlerin çoğu ("yeniden kullanılabilecek kod", "teknik borç", "yinelenen kod", "güvenlik açığı taraması") bu nedenle **geçerli değildir** — denetlenecek kod yok. Bunun yerine bu doküman:

- Strateji dokümanının işaret ettiği **canlı üretim sitesini** (kod erişimi olmadan, yalnızca dokümandaki bulgulara dayanarak) özetler,
- Sıfırdan kurulacak repository için başlangıç yapısını ve dikkat edilmesi gereken noktaları tanımlar.

## 2. Referans alınan canlı site (mammaprintturkiye.com)

Strateji dokümanı (Ek D, §S1–S4) aşağıdaki canlı URL'leri kaynak olarak gösteriyor. Bu bilgiler dokümanın 2.1–2.3 bölümlerindeki denetim bulgularına dayanır; repository'de bu siteye ait kod bulunmuyor, dolayısıyla aşağıdaki bulgular **ikincil kaynak** (strateji dokümanı) üzerinden aktarılmıştır, doğrudan kod incelemesi değildir:

| URL | Durum (dokümana göre) |
|---|---|
| `https://mammaprintturkiye.com/` | Mevcut, yeniden tasarlanacak |
| `https://mammaprintturkiye.com/en/` | Türkçe içerik için yanlış kullanılan İngilizce dizin — kaldırılmalı |
| `https://mammaprintturkiye.com/mammaprint/` | Mevcut, URL korunacak, içerik medikal güncellenecek |
| `https://mammaprintturkiye.com/en/mammaprint/` | Duplicate — 301 ile `/mammaprint/`'e yönlendirilecek |
| `https://mammaprintturkiye.com/blueprint/` | Mevcut, URL korunacak, içerik medikal güncellenecek |
| `https://mammaprintturkiye.com/en/blueprint/` | Duplicate — 301 ile `/blueprint/`'e yönlendirilecek |
| `.../docs/*.pdf` | Sürüm/geçerlilik denetimi gerekiyor |

### Güçlü yönler (§2.1)
- MammaPrint/BluePrint ürünleri ana navigasyonda görünür.
- MammaPrint sayfasında uygunluk kriterleri, risk sınıfları, klinik çalışma referansı, örnek rapor bağlantısı mevcut.
- BluePrint sayfası Luminal/HER2/Bazal alt tiplerini ve NBRST verisini içeriyor.
- Bilgilendirme amaçlı kullanım uyarısı sayfalarda mevcut.

### Kritik sorunlar (§2.2, öncelik sırasıyla)
1. **Kritik — Dil/URL yapısı:** Ana alan adı `/en/` dizinine yönleniyor; Türkçe içerik İngilizce dizinde ve "Breast Cancer Testing" başlığıyla sunuluyor.
2. **Kritik — Duplicate URL:** Aynı MammaPrint içeriği hem `/mammaprint/` hem `/en/mammaprint/` adresinde indeksli — otorite bölünmesi ve canonical karmaşası riski.
3. **Kritik — Medikal terminoloji:** "FDA onaylı" ifadesi Agendia'nın güncel "FDA-cleared" terminolojisiyle uyumlu hale getirilmeli.
4. **Yüksek — İçerik derinliği:** Hasta kaynakları, hekim kaynakları, test süreci, klinik çalışmalar, yayınlar, kurumsal güven, blog, iletişim sayfaları eksik.
5. **Yüksek — Arama niyeti karşılığı yok:** "genomik/genetik test farkı", "kimler için uygun", "sonuç nasıl yorumlanır", "numune nasıl gönderilir" gibi sorulara ayrı sayfa yok.
6. **Yüksek — Güven sinyalleri eksik:** Yazar, medikal inceleyen, son güncelleme, kaynak sürümü görünür değil.
7. **Yüksek — Dönüşüm akışı belirsiz:** Hasta/hekim için ayrı ve net CTA yolları yok.
8. **Orta — Kurumsal görünürlük:** Omnigen/Türkiye operasyonu, distribütörlük, destek modeli açıklanmıyor.
9. **Orta — Erişilebilirlik:** Görseller arama sonuçlarında "image" olarak görünüyor → alt metin eksikliğine işaret.
10. **Orta — İç link:** Konu kümeleri ve bağlamsal iç link yapısı yok.

### İçerik güncellik sorunu (§2.3)
Farklı yıllara ait MINDACT/PROMIS gibi çalışma verileri, hangi hasta grubuna/sonlanım noktasına/takip süresine ait olduğu belirtilmeden bir arada sunuluyor. Düzeltilmesi gereken terminoloji: "NCNN" → "NCCN"; "her erken evre hasta" gibi geniş ifadeler klinik bağlama göre daraltılmalı.

## 3. Marka öğeleri — korunması gerekenler

- MammaPrint® ve BluePrint® ürün adları ve ana navigasyondaki görünürlükleri.
- Mevcut ana ürün URL'leri: `/mammaprint/`, `/blueprint/` (§16.1 geçiş matrisi — bu URL'ler korunacak, yalnızca içerik güncellenecek).
- Alan adının (mammaprintturkiye.com) taşıdığı marka/ülke niyeti.

## 4. Teknik borç ve yinelenen kod

Yok — repository boş. Yeni kod tabanı kurulurken önceden bilinen riskler:
- Mevcut sitenin `/en/` yanlış kullanımı yeni mimaride **tekrarlanmamalı** (bkz. gereksinim S-01, S-02).
- Mevcut sitenin PDF/doküman URL yapısı sürüm/dil/tip bilgisi taşımıyor; yeni `Resource` içerik modelinde bu zorunlu alan olarak ele alınacak (bkz. gereksinim C-06).

## 5. Güvenlik açığı değerlendirmesi

Kod erişimi olmadığından mevcut sitenin güvenlik taraması yapılamamıştır. Yeni kod tabanı için güvenlik gereksinimleri `docs/requirements-matrix.md` §8 (Teknik) ve ilerleyen fazda `docs/security-checklist.md`'de ele alınacaktır.

## 6. SEO ve erişilebilirlik sorunları (mevcut siteden aktarılan, doğrulanmamış)

Bkz. yukarıdaki kritik sorunlar listesi madde 1, 2, 9, 10. Bunlar strateji dokümanının bulgularıdır; yeni site canlıya alınmadan önce gerçek Search Console/Lighthouse verisiyle doğrulanmalıdır (bkz. `docs/implementation-plan.md` Faz 4 ve Faz 5).

## 7. Sonuç: Geçiş yaklaşımı

Mevcut mimari (kod erişimi olmayan, yalnızca doküman üzerinden bilinen) proje hedeflerini karşılamıyor (içerik derinliği, hedef kitle ayrımı, teknik SEO, CMS/onay akışı yok). Bu nedenle **kontrollü geçiş** değil, **sıfırdan yeni kod tabanı + URL-seviyesinde geriye dönük uyumluluk** yaklaşımı uygulanacaktır:

- Yeni kod tabanı, seçilen mimari (bkz. `architecture-decision-record.md`) ile sıfırdan kurulur.
- Ana ürün URL'leri (`/mammaprint/`, `/blueprint/`) korunur; içerik yeniden yazılır.
- Duplicate `/en/*` URL'leri kalıcı 301 ile yeni Türkçe canonical'a yönlendirilir (bkz. `redirect-map.csv`).
- Mevcut canlı sitenin gerçek şu anki HTML/meta/durum kodu envanteri, lansman öncesi Faz 6'da (Geçiş ve Lansman) ayrıca canlı üzerinden crawl edilerek doğrulanmalıdır — bu doküman yalnızca strateji brifindeki ikincil bulgulara dayanmaktadır.

## Açık soru — kullanıcı onayı gerekli

Mevcut mammaprintturkiye.com sitesinin **barındırma erişimi, DNS yönetimi ve mevcut CMS/hosting bilgileri** bu oturumda mevcut değildir. Geçiş ve DNS kesintisiz devir planı (`docs/deployment-guide.md`, Faz 6) için bu erişimlerin proje sahibi tarafından sağlanması gerekecektir.
