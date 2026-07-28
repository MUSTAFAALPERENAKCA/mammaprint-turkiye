# İçerik Envanteri

Kaynak: `docs/strategy-source.md` §6 (Bilgi Mimarisi ve Site Haritası), §16.1 (İçerik envanteri ve karar matrisi), Ek A/B/C.

## 1. Mevcut varlık → karar → yeni hedef (strateji dokümanı §16.1, otorite kaynak)

| Mevcut varlık | Karar | Yeni hedef |
|---|---|---|
| `/` | Yeniden yaz / tasarla | `/` |
| `/en/` | 301 yönlendir | `/` |
| `/mammaprint/` | İçeriği medikal güncelle, URL'yi koru | `/mammaprint/` |
| `/en/mammaprint/` | 301 yönlendir | `/mammaprint/` |
| `/blueprint/` | İçeriği medikal güncelle, URL'yi koru | `/blueprint/` |
| `/en/blueprint/` | 301 yönlendir | `/blueprint/` |
| `/docs/*.pdf` | Sürüm ve geçerlilik denetimi | `/kaynaklar/` veya kontrollü dosya URL'leri |
| Görseller | Lisans/kalite/alt metin incelemesi | Yeni medya kütüphanesi |

> Not: Mevcut sitenin gerçek tam URL/dosya envanteri (ör. tüm PDF adları) bu oturumda erişilebilir değildi. Lansman öncesi Faz 6'da canlı site crawl edilerek bu tablo genişletilmelidir (bkz. `current-state-audit.md` açık soru).

## 2. Yeni site — tam sayfa envanteri (35 sayfa, §6.2)

Ayrıntılı öncelik/kaynak/durum eşlemesi için bkz. `docs/requirements-matrix.md` §3.1. Aşağıda yalnızca hiyerarşi ve içerik türü özetlenmiştir.

### Testler
- `/testler/` — Testlere Genel Bakış
- `/mammaprint/` — MammaPrint 70 Gen Nüks Riski Testi
- `/blueprint/` — BluePrint 80 Gen Moleküler Alt Tipleme Testi
- `/mammaprint-blueprint/` — Birlikte Kullanım
- `/genomik-test-nedir/` — Genomik Test Nedir?
- `/genomik-test-genetik-test-farki/` — Genomik/Genetik Test Farkı

### Hastalar İçin
- `/hastalar-icin/` (hub)
- `/hastalar-icin/kimler-icin-uygun/`
- `/hastalar-icin/test-nasil-yapilir/`
- `/hastalar-icin/sonuclari-anlamak/`
- `/hastalar-icin/doktorla-konusma-rehberi/`
- `/hastalar-icin/sik-sorulan-sorular/`

### Sağlık Profesyonelleri
- `/saglik-profesyonelleri/` (hub)
- `/saglik-profesyonelleri/klinik-uygunluk/`
- `/saglik-profesyonelleri/numune-ve-lojistik/`
- `/saglik-profesyonelleri/ornek-raporlar/`
- `/saglik-profesyonelleri/test-talebi/`
- `/saglik-profesyonelleri/medikal-bilgi/`

### Bilimsel Kanıt
- `/klinik-kanit/` (hub)
- `/klinik-kanit/mindact/`
- `/klinik-kanit/nbrst/`
- `/klinik-kanit/sto-3/`
- `/klinik-kanit/nsabp-b42/`
- `/yayinlar/`
- `/kilavuzlar/`

### Bilgi Merkezi
- `/bilgi-merkezi/` (hub)
- `/blog/` (+ kategori/etiket/yazar/medikal inceleyici alt rotaları — dinamik)
- `/sozluk/`
- `/kaynaklar/`
- `/videolar/`

### Hakkımızda
- `/hakkimizda/`
- `/agendia/`
- `/omnigen/`
- `/kalite-ve-uyum/`

### İletişim
- `/iletisim/` (genel + HCP + kurumsal, tek sayfada 3 yol)

### Yasal
- `/gizlilik/`
- `/cerez-politikasi/`
- `/kullanim-kosullari/`
- `/tibbi-bilgilendirme/`
- Marka Bildirimi, Erişilebilirlik Bildirimi (URL kesinleşmemiş — Faz 1'de footer/legal grubu altında karar verilecek)

## 3. Blog kategorileri (§10.2)

1. Meme Kanserini Anlamak
2. Genomik Testleri Anlamak
3. MammaPrint Rehberi
4. BluePrint Rehberi
5. Tedavi Kararı
6. Klinik Araştırmalar
7. Hekim Kaynakları
8. MammaPrint Türkiye Haberleri

## 4. İlk 30 blog başlığı (Ek C — taslak konu listesi, metin değil)

Bkz. `docs/strategy-source.md` "Ek C — İlk 30 Blog İçeriği" tablosu. Bu başlıklar Faz 3'te CMS'e **taslak** olarak, `[MEDİKAL ONAY GEREKLİ]` etiketiyle kaydedilecek; hiçbiri medikal/SEO/regülasyon onayı olmadan yayınlanmayacak.

## 5. Anahtar kelime kümeleri → sayfa eşlemesi (Ek B özet)

| Küme | Birincil hedef sayfa |
|---|---|
| MammaPrint marka | `/mammaprint/` |
| Nüks riski | `/mammaprint/`, `/hastalar-icin/sonuclari-anlamak/` |
| Kemoterapi kararı | Blog: "Genomik testler kemoterapi kararına nasıl yardımcı olur?" |
| Genomik eğitim | `/genomik-test-nedir/` |
| Genomik/genetik farkı | `/genomik-test-genetik-test-farki/` |
| Uygunluk | `/hastalar-icin/kimler-icin-uygun/` |
| Süreç | `/hastalar-icin/test-nasil-yapilir/` |
| Sonuçlar | `/hastalar-icin/sonuclari-anlamak/` |
| BluePrint | `/blueprint/` |
| Klinik kanıt | `/klinik-kanit/mindact/`, `/klinik-kanit/nbrst/` |
| Hekim aramaları | `/saglik-profesyonelleri/*` |

Tam liste ve arama hacmi önceliklendirmesi lansman öncesi Search Console/Keyword Planner verisiyle güncellenmelidir (dokümanın kendi notu, Ek B sonu).

## 6. Eksik/onay bekleyen içerik

Ayrıntılı liste için bkz. `docs/content-gaps.md` (Faz 2/3'te, sayfa iskeletleri kurulurken doldurulacak).
