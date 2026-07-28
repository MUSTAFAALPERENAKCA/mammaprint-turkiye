# Tasarım Sistemi

Kaynak: strateji dokümanı §11 (Görsel Tasarım Sistemi), kullanıcı promptu §4. Bu doküman `tailwind.config`/CSS custom property'lerinin insan tarafından okunabilir kaynağıdır.

Yön: premium medikal, bilimsel, sakin, güven verici. Klinik laboratuvar kadar güvenilir, hasta iletişimi kadar sıcak. Aşırı pembe "farkındalık kampanyası" estetiği, yoğun molekül/stok görselleri, dramatik/korkutucu kanser görselleri **kullanılmaz**.

## 1. Renk tokenları

| Token | Değer (öneri) | Kullanım |
|---|---|---|
| `--color-primary-900` | `#0B1F3A` (derin lacivert) | Ana marka rengi, header, başlıklar |
| `--color-primary-700` | `#173357` | Hover/ikincil vurgu |
| `--color-mammaprint-accent` | `#C6357A` (kontrollü fuşya/gül) | MammaPrint CTA, veri vurgusu — **yalnız MammaPrint bağlamında** |
| `--color-blueprint-accent` | `#1E6FA8` (temiz medikal mavi) | BluePrint CTA, alt tip ayrımı — **yalnız BluePrint bağlamında** |
| `--color-surface` | `#FFFFFF` | Zemin |
| `--color-surface-muted` | `#F4F6F8` (açık gri) | Bölüm arka planı |
| `--color-surface-tint-rose` | `#FDF3F7` (çok açık pembe) | MammaPrint bölüm zemin tonu |
| `--color-surface-tint-blue` | `#EFF6FB` (çok açık mavi) | BluePrint bölüm zemin tonu |
| `--color-text-primary` | `#111827` | Gövde metni |
| `--color-text-muted` | `#4B5563` | İkincil metin |
| `--color-border` | `#E5E7EB` | Kart/form kenarlığı |
| `--color-success` | `#15803D` | Başarı durumu |
| `--color-warning` | `#B45309` | Uyarı kutusu |
| `--color-danger` | `#B91C1C` | Hata durumu |
| `--color-focus-ring` | `#2563EB` | Klavye focus göstergesi (WCAG kontrast doğrulanmış) |

Kural: Fuşya/mavi vurgular yalnızca ilgili ürün bağlamında (MammaPrint/BluePrint) kullanılır; genel kurumsal sayfalarda ana lacivert + nötr tonlar esastır.

## 2. Tipografi ölçeği

Font ailesi: Inter (grotesk, geniş dil desteği, aktif bakımlı, ücretsiz).

| Token | Boyut (masaüstü / mobil) | Kullanım |
|---|---|---|
| `--text-display` | 44px / 32px | Hero H1 |
| `--text-h1` | 36px / 28px | Sayfa H1 |
| `--text-h2` | 28px / 22px | Bölüm başlığı |
| `--text-h3` | 22px / 19px | Alt başlık |
| `--text-body-lg` | 18px / 17px | Gövde metni (strateji §11.1 hedefi) |
| `--text-body` | 16px / 16px | İkincil gövde |
| `--text-small` | 14px / 14px | Meta bilgi, dipnot |

Satır yüksekliği: başlıklarda 1.2, gövde metninde 1.6 (okunabilirlik için).

## 3. Grid ve boşluk sistemi

- 12 kolonlu grid, container max-width 1280px, kenar boşluğu mobilde 16px / masaüstünde 32px.
- Boşluk ölçeği (4px taban): 4, 8, 12, 16, 24, 32, 48, 64, 96px — Tailwind'in varsayılan spacing scale'i ile hizalı, özel token gerektirmez.

## 4. Border radius ve gölge

| Token | Değer |
|---|---|
| `--radius-card` | 14px (12-16px aralığında, strateji §11.1) |
| `--radius-button` | 10px |
| `--radius-input` | 8px |
| `--shadow-card` | `0 1px 2px rgba(17,24,39,0.06), 0 4px 12px rgba(17,24,39,0.06)` (sınırlı, düşük kontrastlı gölge) |

## 5. Bileşenler (bkz. `docs/component-inventory.md` için tam liste)

### Buton çeşitleri
`primary` (lacivert dolgu), `secondary` (outline), `mammaprint` (fuşya vurgu, yalnız ürün bağlamı), `blueprint` (mavi vurgu, yalnız ürün bağlamı), `ghost` (link benzeri, düşük vurgu). Tüm butonlar: min 44x44px dokunma alanı, görünür focus ring, disabled durumu.

### Form alanları
Kalıcı label (placeholder-only değil), zorunlu alan işareti, satır içi hata mesajı (`aria-describedby` ile bağlı), başarı durumu, yardım metni. Kontrast AA.

### İçerik kartları
Ürün kartı (MammaPrint/BluePrint renk kodlu), klinik veri kartı (sayı + bağlam + kaynak dipnotu — bağlamsız yüzde yasak, bkz. M-05), kanıt özeti kartı (çalışma tasarımı + sınırlılık alanı zorunlu).

### Blog kartları
Görsel, kategori etiketi, başlık, özet, yazar, okuma süresi, güncelleme tarihi.

### Bilgi ve uyarı kutuları
4 varyant: `medical-info` (tıbbi bilgilendirme, mavi/nötr ton), `safety` ("bu ne anlama gelmez" — turuncu ton), `freshness` (güncellik notu — gri ton), `kvkk` (KVKK uyarısı formlar için — nötr ton, ikon farklı). Renk kodlaması ciddiyet hiyerarşisi yaratmaz (hepsi bilgilendirici, alarm/korku tonunda değildir).

### Breadcrumb, sekmeler, accordion
Breadcrumb: `BreadcrumbList` schema ile senkron. Sekmeler: Hasta/HCP içerik geçişinde kullanılır (§8.1 "sekmeli anlatım"), klavye ok tuşlarıyla gezinme (`role="tablist"`). Accordion: SSS için, `aria-expanded`/`aria-controls` doğru uygulanmış, tek/çoklu açık mod.

### Kaynak ve yayın kartları
Dosya türü ikonu, dil, sürüm, tarih, dosya boyutu (kullanıcı promptu §16 "dosya türü ve boyutu" gereksinimi).

### Hasta içerik bileşenleri vs. HCP içerik bileşenleri
Görsel olarak ayırt edilebilir ama tutarlı: hasta bileşenlerinde `surface-tint-rose`/nötr zemin ve sade dil vurgusu; HCP bileşenlerinde teknik tablo/veri yoğun düzen ve `Publication`/`ClinicalStudy` referans linkleri öne çıkar.

### CTA şablonları
`patient-guide` (doktorla konuşma rehberi indirme), `hcp-contact` (medikal bilgi talebi), `explore-tests` (ana sayfa üst CTA).

### Header / Mega menü / Mobil navigasyon
Header: logo + üst düzey menü (Testler, Hastalar İçin, Sağlık Profesyonelleri, Bilimsel Kanıt, Bilgi Merkezi, Hakkımızda) + sağda İletişim + Hasta/HCP hızlı geçiş. Mega menü: `docs/requirements-matrix.md` §6.1 navigasyon tablosuna birebir. Mobil: hamburger + accordion alt menü, `Escape` ile kapanır, focus trap.

### Footer
Hızlı linkler, yasal metin linkleri (KVKK, Çerez, Gizlilik, Kullanım Koşulları, Tıbbi Bilgilendirme), iletişim, telif/marka bildirimi, çerez ayarlarını değiştir linki.

### Loading / Skeleton / Empty / Error durumları
Skeleton: kart ve liste görünümleri için gri blok animasyonu (`prefers-reduced-motion` durumunda statik). Empty state: arama sonucu yok, yayın filtresi sonuç yok — nötr ikon + öneri linki. Error state (404/410/500): kullanıcıyı ana kategori sayfalarına yönlendiren nazik mesaj, teknik detay göstermez (T-17).

## 6. Erişilebilirlik kuralı (tüm bileşenler için ortak)

Her bileşen: klavye ile tam erişilebilir, görünür focus, doğru ARIA rolü, ekran okuyucu ile anlamlı sıralama. `prefers-reduced-motion: reduce` durumunda animasyon/geçişler devre dışı veya anında tamamlanır.

## 7. Fotoğraf ve illüstrasyon ilkeleri (§11.3)

- Gerçek, doğal hekim-hasta etkileşimi; dramatize edilmemiş klinik ortam; çeşitlilik.
- Saç dökülmesi, yoğun tedavi görüntüsü, ağlayan hasta gibi klişeler kullanılmaz.
- DNA sarmalı tek başına "genomik test" anlatımı sayılmaz — bağlam/açıklama zorunlu.
- Her görsel için lisans, model izni, kaynak kaydı `Resource`/medya modelinde tutulur.
