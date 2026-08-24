# Açık Medikal Sorular

v2 master prompt §52 gereği: bu sorular medikal onay olmadan kapatılmamalı. Onay gelene kadar
ilgili sayfalarda yalnızca genel/muhafazakâr ifadeler kullanılır.

## OPEN-MEDICAL-001 — MammaPrint hasta uygunluk kriterleri — KISMEN KAPANDI (2026-08-24)

**Soru:** Evre I/II, ER+, HER2-, tümör ≤5cm, lenf nodu N0/1-3(N1) kriterleri sitede açık biçimde
listelenecek mi?
**Kaynak (orijinal):** Müşteri PDF'i, ancak PDF'in kendisi bu bölümü "Hakan Bey'e sorulacak"
notuyla işaretlemiş.
**Yeni kaynak (2026-08-24):** agendia.com/mammaprint resmi sayfası, FDA ve CE kullanım kriterleri
özeti doğrudan WebFetch ile çekilip doğrulandı: "erken evre (Evre I/II), lenf nodu negatif veya
1-3 pozitif lenf nodu, tümör ≤5cm" — bu 3 kriter (5 kriterden 4'ü, "Evre I/II" ve "lenf nodu"
tek madde sayılırsa) resmi kaynakla **doğrulandı ve eklendi**.
**Durum:** 3 kriter VERIFIED (agendia.com), ER+ / HER2- kriteri hâlâ MEDICAL_REVIEW_REQUIRED
**Etki alanı:** `/hastalar-icin/kimler-icin-uygun`
**Güncel public metin:** Evre I/II, lenf nodu N0/1-3(N1), tümör ≤5cm listelendi (kaynak:
agendia.com/mammaprint). **ER+ / HER2- kriteri eklenmedi** — Agendia'nın kendi resmi sayfasında
bu kısıtlama açıkça belirtilmiyor; eklemek gerçekte var olmayan bir kısıtlamayı ima edebilir.
Bu kısım kapanmadı; Hakan bey veya medikal ekip onayı gerekiyor.

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

## OPEN-MEDICAL-003 — MammaPrint sonuç sınıflandırması ve skala sunumu — KISMEN KAPANDI (2026-08-24)

**Soru:** Güncel resmi risk kategorileri nelerdir (Low/High mi, yoksa High2/High1/Low/UltraLow
dörtlü sınıflandırma mı) ve sayısal skor aralıkları (-1.000 ile +1.000 arası) resmi kaynaktan
doğrulanmış mı?
**Kaynak (orijinal):** Müşteri PDF'i bir Agendia showpad bağlantısı gösteriyor ama kendisi de "Bu
skala konulabilir... showpad'de buradan aldım" diyerek kesinleşmemiş kabul ediyor.
**Yeni kaynak (2026-08-24):** agendia.com/mammaprint resmi sayfası WebFetch ile doğrudan kontrol
edildi. Sayfa dörtlü (High2/High1/Low/UltraLow) sayısal skalayı **içermiyor**; bunun yerine iki
kategorili, doğrudan nüks olasılığı yüzdesi gösteriyor: "Low Risk: %1,3 nüks olasılığı", "High
Risk: %11,7 nüks olasılığı".
**Durum:** Dörtlü sayısal skala (-1.000/+1.000) hâlâ **SOURCE_REQUIRED** (showpad dışında resmi
kaynakta bulunamadı, siteye eklenmedi). İki kategorili yüzde verisi ise VERIFIED ve eklendi.
**Etki alanı:** `/mammaprint` "Sonuçlar" bölümü
**Güncel public metin:** Low Risk %1,3 / High Risk %11,7 nüks olasılığı örneği, agendia.com
kaynak gösterilerek eklendi. Dörtlü HIGH2/HIGH1/LOW/ULTRALOW skalası hâlâ eklenmedi.

## OPEN-MEDICAL-004 — ASCO/NCCN/ESMO kılavuz ifadeleri — KISMEN KAPANDI (2026-08-24)

**Soru:** "Türünün tek testi", "sadece MammaPrint önerilmektedir", "Kategori 1 seviyesinde
sadece MammaPrint" gibi güçlü ifadeler güncel kılavuz versiyonu, doğru hasta grubu ve doğru
klinik bağlamla doğrulanabiliyor mu?
**Kaynak (orijinal):** Müşteri PDF'i
**Yeni kaynak (2026-08-24):** agendia.com üzerinde ASCO'ya dair PDF'teki iddia (lenf nodu
pozitif hastalar için "türünün tek testi") **doğrulanamadı** — resmi sitede bu ifade
bulunmuyor. Ancak agendia.com'da 21 Mayıs 2026 tarihli bir basın açıklaması bulundu: "2026 NCCN
Kılavuz güncellemesi, MammaPrint'i HR+/HER2- erken evre meme kanserinde antrasiklin bazlı
kemoterapi kullanımını kişiselleştirmek için tanınan tek genomik test olarak nitelendiriyor."
Bu, PDF'teki orijinal iddiadan **farklı ve daha dar kapsamlı** bir iddiadır (lenf nodu pozitif
genel popülasyon değil, spesifik olarak antrasiklin kullanım kararı + HR+/HER2- popülasyonu).
**Durum:** ASCO'nun "türünün tek testi" iddiası hâlâ **MEDICAL_REVIEW_REQUIRED** (eklenmedi).
NCCN'in antrasiklin-spesifik tanınması VERIFIED ve dar kapsamıyla eklendi.
**Etki alanı:** `/kilavuzlar`
**Güncel public metin:** Genel konservatif paragraf + ayrı bir kutuda, doğru kapsamla
sınırlandırılmış NCCN/antrasiklin ifadesi, kaynak ve tarih belirtilerek eklendi.

## Kapatma süreci

Bu dört soru, ilgili kaynak (Agendia resmi dokümanı, hakemli yayın veya Hakan bey/medikal
ekipten yazılı onay) sağlandığında `docs/medical-claims-register.md`'de `VERIFIED` veya
`APPROVED` olarak güncellenir ve bu dosyadan kaldırılır (veya "kapatıldı" olarak işaretlenir).
