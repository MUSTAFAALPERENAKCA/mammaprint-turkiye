# İçerik Boşlukları

Kullanıcı promptu §22 gereği: strateji dokümanında tam metni bulunmayan sayfalar için yayınlanabilir
tıbbi içerik üretilmemiştir. Faz 1'de yalnızca sayfa yapısı ve güvenli/genel arayüz metinleri
kurulmuştur. Bu dosya, Faz 2/3'te doldurulması gereken içerik boşluklarını izler.

Durum kuralı: aşağıdaki tüm içerikler `[MEDİKAL ONAY GEREKLİ]` etiketiyle CMS'te
`medical_review` durumunda oluşturulacak ve ilgili onaylar (editoryal, medikal, SEO) tamamlanmadan
`published` durumuna geçemeyecektir (bkz. `docs/content-model.md` §2).

## Faz 1'de kurulan iskelet (yer tutucu metinle)

| Sayfa | Şu anki durum | Not |
|---|---|---|
| `/` (Ana Sayfa) | Kısa yer tutucu hero + CTA'lar | §7.1'deki 12 bloğun yalnızca hero'su var; kalan 11 blok (iki temel soru, test süreci, MammaPrint+BluePrint ilişkisi, klinik kanıt, güven/yetki, bilgi merkezi, SSS, son CTA) eksik |
| `/login`, `/admin` | Tam işlevsel (içerik değil, sistem sayfası) | Medikal onay gerekmez |

## Faz 2 öncelikli içerik boşlukları (P0 sayfalar)

Aşağıdaki tablo örnek olarak üç sayfayı detaylandırır; kalan tüm P0 sayfalar için aynı şablon
`docs/requirements-matrix.md` §3.1'deki liste üzerinden uygulanmalıdır (her satırın "Güncel durum"
sütunu bu dosya ile senkron tutulmalıdır).

### Ana Sayfa — kalan 11 blok

- **Hedef kullanıcı:** Hasta + sağlık profesyoneli (genel giriş noktası)
- **Amaç:** MammaPrint/BluePrint'i tanıtmak, doğru derinlik sayfasına yönlendirmek
- **Önerilen başlık yapısı:** Strateji dokümanı §7.1 tablosundaki 12 blok sırası (bu doküman otorite kaynaktır)
- **Gereken kaynaklar:** MINDACT/NBRST özet verisi (bağlamlı, kaynak dipnotlu), Agendia/Omnigen ilişki metni
- **Onaylaması gereken rol:** Medikal İnceleyici (klinik kanıt bloğu, hero istatistikleri) + SEO Editörü

### `/mammaprint/` — MammaPrint 70 Gen Testi

- **Hedef kullanıcı:** Hasta ve sağlık profesyoneli (sekmeli/ayrı bölümler)
- **Amaç:** Testin ne olduğunu, kimler için değerlendirilebileceğini, sonuç kategorilerini anlatmak
- **Önerilen başlık yapısı:** §8.1'deki tam liste (30 saniyede MammaPrint, kimler için değerlendirilebilir, nasıl çalışır, sonuçlar, klinik kanıt, SSS)
- **Gereken kaynaklar:** MINDACT, STO-3, NSABP B-42 yayın künyeleri; Agendia'nın güncel "FDA-cleared" terminolojisi
- **Onaylaması gereken rol:** Medikal İnceleyici (regülasyon statüsü ifadesi kritik, bkz. gereksinim M-02, M-03)

### `/blueprint/` — BluePrint 80 Gen Testi

- **Hedef kullanıcı:** Hasta ve sağlık profesyoneli
- **Amaç:** Moleküler alt tipleme kavramını ve MammaPrint ile ilişkisini anlatmak
- **Önerilen başlık yapısı:** §8.2'deki tam liste (Luminal/HER2/Basal kartları, NBRST verisi, regülasyon notu)
- **Gereken kaynaklar:** NBRST yeniden sınıflandırma verisi (hangi veri setinin kullanıldığı belirtilerek, bkz. gereksinim M-05)
- **Onaylaması gereken rol:** Medikal İnceleyici (BluePrint'in MammaPrint'ten farklı regülasyon statüsü, bkz. gereksinim M-03)

## Kalan tüm P0/P1 sayfalar

`docs/requirements-matrix.md` §3.1 tablosundaki P-02'den P-42'ye kadar tüm satırlar (Faz 2 ve Faz 3
kapsamı) bu şablonla ele alınacaktır. Blog için ilk 30 başlık `docs/content-inventory.md` §4'te
listelenmiştir; her biri Faz 3'te aynı `[MEDİKAL ONAY GEREKLİ]` kuralına tabidir.

## Yasal sayfalar (ayrı onay gerektirir)

KVKK Aydınlatma, Çerez Politikası, Gizlilik Politikası, Kullanım Koşulları, Tıbbi Bilgilendirme,
Marka Bildirimi, Erişilebilirlik Bildirimi — bu sayfalar medikal inceleme yerine **hukuk
danışmanı onayı** gerektirir (bkz. `docs/architecture-decision-record.md` özet tablosu ve
kullanıcı promptu §14). Faz 2'de yapısal iskelet kurulacak, nihai metin hukuk onayı olmadan
yayınlanmayacaktır.
