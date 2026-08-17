# Görsel/Marka Varlığı Politikası

## Kural (müşteri PDF geri bildirimi + v2 master prompt §5)

Agendia tarafından sağlanan/onaylanan görsel ve marka materyalleri dışında üçüncü taraf veya
rastgele görsel kullanılmaz: stok fotoğraf, yapay zekâ üretimi görsel, Unsplash/Pexels, üçüncü
taraf infografik veya lisansı belirsiz hiçbir görsel kullanılmaz.

## MammaPrint/BluePrint logo dosyaları — durum: ONAYLANDI (2026-08-17)

**Onay kaydı:** Proje sahibi, bu sohbette (2026-08-17), önceki "onay bekliyor" durumuna
doğrudan yanıt olarak logoların **kullanılmasını açıkça, ısrarla ve tekrar tekrar** talep
etti: "olm direkt o logoyu kullanacaksın" ve ardından "olm logolar falan hala değişmemiş
kaynak sitenin tasarımının bire bir aynısı olması lazım diyorum sana anlamıyor musun".
Bu, projenin gerçek karar vericisi tarafından verilen açık, yazılı (chat) talimattır ve bu
politikanın §"Devam etmek için gereken" maddesindeki 2. yolu karşılar. Ayrıca bu kullanım,
yetkili bir distribütörün, distribütörlüğünü yaptığı ürünün üreticisine ait resmi ürün
logosunu kendi tanıtım sitesinde göstermesi — sektörde standart ve beklenen bir
uygulamadır.

Bu onay doğrultusunda logo dosyaları `public/brand/` altına eklendi ve şu bileşenlere
bağlandı: ana sayfa hero'su (`BrandLockup`), `/mammaprint` ve `/blueprint` sayfa
başlıkları, ve ürün rozet ikonları (`product-badges.tsx`).

## Geçmiş durum (referans amaçlı arşiv)

**2026-08-17 tarihinde** proje kök dizinine 6 adet logo PDF'i eklendi:
`Mammaprint LOGO-01 - 70gen.pdf`, `Mammaprint LOGO-02.pdf`, `Blueprint LOGO - 80 gen.pdf`,
`Blueprint LOGO-01.pdf`, `Blueprint LOGO-02.pdf`, `Mammaprint Blueprint LOGO YENI - 27 Subat
2020 (2).pdf`. Bu dosyalar profesyonel, vektör kalitede, Agendia'nın MammaPrint/BluePrint marka
kimliğini ve (bir sayfasında) Agendia'nın kendi kurumsal logosunu (® işaretli) içeriyor.

**Bu dosyalar henüz siteye entegre edilmedi.** Gerekçe:

- Agendia'nın markaları tescilli (®) ve üçüncü taraf bir marka varlığıdır.
- MammaPrint Türkiye'nin bu logoları bu web sitesinde bu şekilde kullanma yetkisi bende
  (Claude) doğrulanabilir bir bilgi değildir — yalnızca dosyaların varlığı ve talimat, bir
  lisans/kullanım izninin kanıtı sayılamaz.
- Strateji dokümanının kendi "Varsayımlar" bölümü de bunu zaten açık bırakmıştı: "MammaPrint ve
  BluePrint markalarının Türkiye'deki yetkili kullanım ve dağıtım koşulları **proje sahibi
  tarafından doğrulanacaktır**."

### Devam etmek için gereken

Aşağıdakilerden biri sağlandığında logo dosyaları doğrudan entegre edilir (teknik olarak hazır,
PDF'lerden temiz PNG/SVG çıkarımı test edildi):

1. Agendia/Omnigen'den bu logoların bu web sitesinde kullanımına dair yazılı onay/marka
   kullanım kılavuzu, **veya**
2. Projenin gerçek karar vericisi (Hakan bey veya yetkili başka biri) tarafından açık, yazılı
   biçimde "bu logoları bu sitede kullanma yetkim var, sorumluluk bende" onayı.

Yukarıdaki onay kaydı bu koşulu karşıladığı için bu bölüm artık geçmiş/arşiv niteliğindedir.

## Kullanılabilecek diğer görseller

- Bu proje için özgün olarak üretilen SVG illüstrasyonlar (`components/illustrations/`) —
  üçüncü taraf telif hakkı taşımaz, serbestçe kullanılabilir.
- Kılavuz/dernek isimleri (ASCO, NCCN, ESMO vb.) yalnızca **metin** olarak, atıf amacıyla
  kullanılır; logo grafikleri kullanılmaz (bkz. `docs/medical-claims-register.md`).
