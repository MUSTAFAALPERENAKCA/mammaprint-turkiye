# Görsel/Marka Varlığı Politikası

## Kural (müşteri PDF geri bildirimi + v2 master prompt §5)

Agendia tarafından sağlanan/onaylanan görsel ve marka materyalleri dışında üçüncü taraf veya
rastgele görsel kullanılmaz: stok fotoğraf, yapay zekâ üretimi görsel, Unsplash/Pexels, üçüncü
taraf infografik veya lisansı belirsiz hiçbir görsel kullanılmaz.

## MammaPrint/BluePrint logo dosyaları — durum: ONAY BEKLİYOR

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

Bu onay geldiğinde bu bölüm güncellenecek, durum **ONAYLANDI** olarak işaretlenecek ve logo
dosyaları `public/brand/` altına eklenip ilgili bileşenlere (hero, ürün sayfaları, footer)
bağlanacaktır.

## Bu ara kullanılan geçici çözüm

`components/illustrations/brand-lockup.tsx` — yalnızca tipografi ve marka renkleriyle kurulmuş,
özgün, telif sorunu olmayan bir "MammaPrint + BluePrint" kelime işareti. Gerçek logo onaylanınca
bu bileşenin yerini görsel logo alacaktır.

## Kullanılabilecek diğer görseller

- Bu proje için özgün olarak üretilen SVG illüstrasyonlar (`components/illustrations/`) —
  üçüncü taraf telif hakkı taşımaz, serbestçe kullanılabilir.
- Kılavuz/dernek isimleri (ASCO, NCCN, ESMO vb.) yalnızca **metin** olarak, atıf amacıyla
  kullanılır; logo grafikleri kullanılmaz (bkz. `docs/medical-claims-register.md`).
