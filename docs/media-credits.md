# Medya Kaynak ve Lisans Kaydı

Gereksinim D-08 (`docs/requirements-matrix.md`): "Görsellerde lisans/kalite/alt metin incelemesi —
Yeni medya kütüphanesi". Bu dosya her yüklenen görselin kaynağını ve lisansını izler.

## Marka kısıtı (2026-07-29 tarihli müşteri geri bildirimiyle güncellendi)

Müşteri geri bildirim dokümanı (`mammaprint web sitesi.pdf`) açıkça şunu belirtiyor: **"Agendia'nın
kendi logoları dışında başka görsel koyamıyoruz."** Bu, Agendia'nın marka/lisans sözleşmesinden
kaynaklanan bir kısıttır.

Bu nedenle daha önce eklenen 3 adet Pexels lisanslı stok fotoğraf (laboratuvar, hasta-hekim
görüşmesi, soyut DNA görseli) **kaldırılmıştır**. Görsel zenginlik yalnızca aşağıdaki iki yoldan
sağlanır:

1. **Özgün SVG illüstrasyonlar** (`components/illustrations/`) — bu proje için özgün olarak
   oluşturulmuştur, üçüncü taraf telif hakkı taşımaz, Agendia marka varlığı değildir ve bu nedenle
   marka kısıtına takılmaz.
2. **Agendia'nın kendi logoları** — yalnızca resmi olarak sağlandığında ve kullanım izniyle
   birlikte eklenebilir. Şu anda repo'da Agendia'nın resmi logo dosyası bulunmuyor; eklenmesi
   gerekirse Agendia/Omnigen'den resmi marka varlıkları talep edilmelidir.

## Kılavuz/dernek isimleri (metin, logo değil)

`/kilavuzlar/` sayfasında ASCO, NCCN, ESMO, NABON, EGTM, AJCC, AGO gibi klinik kılavuz
kuruluşlarından bahsedilir. Bu kuruluşların **logo görselleri kullanılmaz** — yalnızca isimleri
metin olarak, atıf/referans bağlamında geçer. Gerçek logo grafiklerinin kullanılması ayrı izin
gerektirir.

## Güncelleme kuralı

Yeni bir görsel eklenmeden önce bu dosyadaki marka kısıtı gözden geçirilmelidir. Agendia'nın kendi
logoları dışında hiçbir fotoğraf/illüstrasyon/üçüncü taraf görsel eklenmemelidir; yalnızca özgün
SVG illüstrasyon üretimi serbesttir.
