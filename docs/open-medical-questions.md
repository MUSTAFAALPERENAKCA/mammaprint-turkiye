# Açık Medikal Sorular

v2 master prompt §52 gereği: bu sorular medikal onay olmadan kapatılmamalı. Onay gelene kadar
ilgili sayfalarda yalnızca genel/muhafazakâr ifadeler kullanılır.

## OPEN-MEDICAL-001 — MammaPrint hasta uygunluk kriterleri

**Soru:** Evre I/II, ER+, HER2-, tümör ≤5cm, lenf nodu N0/1-3(N1) kriterleri sitede açık biçimde
listelenecek mi?
**Kaynak:** Müşteri PDF'i, ancak PDF'in kendisi bu bölümü "Hakan Bey'e sorulacak" notuyla
işaretlemiş — yani PDF yazarı da bunu henüz karara bağlanmamış kabul ediyor.
**Durum:** MEDICAL_REVIEW_REQUIRED
**Etki alanı:** `/hastalar-icin/kimler-icin-uygun`
**Şu anki geçici public metin:** Genel ifade — "Kesin uygunluk; tümör evresi, hormon reseptörü
durumu, lenf nodu tutulumu gibi klinik faktörlere bağlıdır ve hekiminiz tarafından belirlenir."
(spesifik eşik değerleri olmadan)

## OPEN-MEDICAL-002 — MammaPrint metodolojisinde NGS terminolojisi

**Soru:** MammaPrint'in metodolojisi anlatılırken "yeni nesil sekanslama (NGS)" ifadesi
kullanılacak mı, yoksa güncel resmi Agendia terminolojisi farklı mı (ör. mikroarray tabanlı gen
ekspresyon analizi)?
**Kaynak:** Müşteri PDF'i bu soruyu doğrudan açık bırakıyor: "Bir cümle daha iyi olabilir??
(yeni nesil sekanslama metoduna değinmek gerekir mi?)"
**Durum:** MEDICAL_REVIEW_REQUIRED
**Etki alanı:** `/mammaprint` hero metni
**Şu anki geçici public metin:** NGS ifadesi kaldırıldı; genel "genomik profil analizi" ifadesi
kullanılıyor, spesifik sekanslama teknolojisi belirtilmiyor.

## OPEN-MEDICAL-003 — MammaPrint sonuç sınıflandırması ve skala sunumu

**Soru:** Güncel resmi risk kategorileri nelerdir (Low/High mi, yoksa High2/High1/Low/UltraLow
dörtlü sınıflandırma mı) ve sayısal skor aralıkları (-1.000 ile +1.000 arası) resmi kaynaktan
doğrulanmış mı?
**Kaynak:** Müşteri PDF'i bir Agendia showpad bağlantısı gösteriyor ama kendisi de "Bu skala
konulabilir... showpad'de buradan aldım" diyerek kesinleşmemiş kabul ediyor.
**Durum:** SOURCE_REQUIRED
**Etki alanı:** `/mammaprint` "Sonuçlar" bölümü
**Şu anki geçici public metin:** Sayısal skala kaldırıldı; yalnızca genel "Low Risk / High Risk
kategorilerinde sunulur, kesin tedavi önerisi değildir" ifadesi kullanılıyor.

## OPEN-MEDICAL-004 — ASCO/NCCN/ESMO kılavuz ifadeleri

**Soru:** "Türünün tek testi", "sadece MammaPrint önerilmektedir", "Kategori 1 seviyesinde
sadece MammaPrint" gibi güçlü ifadeler güncel kılavuz versiyonu, doğru hasta grubu ve doğru
klinik bağlamla doğrulanabiliyor mu?
**Kaynak:** Müşteri PDF'i
**Durum:** MEDICAL_REVIEW_REQUIRED
**Etki alanı:** `/kilavuzlar`
**Şu anki geçici public metin:** Konservatif ifadeye çevrildi — "MammaPrint, çeşitli uluslararası
klinik uygulama kılavuzlarında yer almaktadır" (üstünlük/teklik iddiası olmadan).

## Kapatma süreci

Bu dört soru, ilgili kaynak (Agendia resmi dokümanı, hakemli yayın veya Hakan bey/medikal
ekipten yazılı onay) sağlandığında `docs/medical-claims-register.md`'de `VERIFIED` veya
`APPROVED` olarak güncellenir ve bu dosyadan kaldırılır (veya "kapatıldı" olarak işaretlenir).
