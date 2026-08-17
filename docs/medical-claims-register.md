# Medikal İddia Kaydı

v2 master prompt §4 gereği: her medikal iddia kaynak, doğrulama durumu ve yayın durumuyla
izlenir. Kaynağı/doğruluğu kesinleşmemiş hiçbir ifade yayınlanabilir metin olarak eklenmez.

Durumlar: `VERIFIED` · `MEDICAL_REVIEW_REQUIRED` · `SOURCE_REQUIRED` · `APPROVED` · `DO_NOT_PUBLISH`

| Claim | Kaynak | Güncel doğrulama | Medikal onay | Yayın durumu |
|---|---|---|---|---|
| "MammaPrint meme kanseri nüks riskinin, BluePrint tümörün moleküler alt tiplendirmesinin değerlendirilmesine yardımcı olur; sonuçlar hekim tarafından diğer klinik faktörlerle birlikte yorumlanır" | Müşteri PDF geri bildirimi (2026-08) | Genel/muhafazakâr ifade, resmi Agendia terminolojisiyle çelişmiyor | MEDICAL_REVIEW_REQUIRED | Yayında (düşük risk — genel çerçeve ifadesi) |
| "Erken evre meme kanserinde, yeni nesil sekanslama (NGS) teknolojisi kullanılarak 70 hedef gen ve 465 referans genin analiz edilmesi..." | Müşteri PDF geri bildirimi, ancak PDF'in kendisi bu ifadeyi soru işaretiyle bırakıyor ("Bir cümle daha iyi olabilir?? / yeni nesil sekanslama metoduna değinmek gerekir mi?") | **Doğrulanmadı** — v2 master prompt §13 açıkça "NGS ifadesini otomatik biçimde yayınlama" diyor | MEDICAL_REVIEW_REQUIRED | **GERİ ÇEKİLDİ** — bkz. OPEN-MEDICAL-002, genel ifadeye döndürüldü |
| "Tümör dokusundaki 70 genin genomik profilini [ölçer]" | Müşteri PDF geri bildirimi (highlight edilmiş) | "genomik profil" mi "gen ekspresyonu" mü, resmi terim netleşmedi | MEDICAL_REVIEW_REQUIRED | Yayında (PDF'in doğrudan önerisi, düşük risk — tek kelimelik terim seçimi) |
| MammaPrint risk skoru skalası: HIGH2 (-1.000/-0.570), HIGH1 (-0.569/0.000), LOW (+0.001/+0.355), ULTRALOW (+0.356/+1.000) | Müşteri PDF'inde bir Agendia showpad bağlantısı referans gösteriliyor; PDF'in kendisi "Bu skala konulabilir... showpad'de buradan aldım" diyor — yani PDF yazarı da bunu kesinleşmiş kabul etmiyor | **Doğrulanmadı** — showpad kaynağına erişim/doğrulama yapılmadı; v2 master prompt §15 açıkça "kendi klinik skalanı tasarlayıp değer uydurma" ve "güncel rapor sınıflandırmasını resmi kaynak üzerinden doğrulamadan uygulama" diyor | SOURCE_REQUIRED | **GERİ ÇEKİLDİ** — bkz. OPEN-MEDICAL-003, sayfadan kaldırıldı |
| "MammaPrint, lenf nodu pozitif hastalar için ASCO tarafından onaylanan türünün tek testidir... NCCN Kılavuzu... Kategori 1 Seviyesinde sadece MammaPrint'i göstermektedir" | Müşteri PDF geri bildirimi | **Doğrulanmadı** — güncel kılavuz versiyonu/tarihiyle teyit edilmedi | MEDICAL_REVIEW_REQUIRED | **GERİ ÇEKİLDİ** — bkz. OPEN-MEDICAL-004, konservatif ifadeyle değiştirildi |
| MammaPrint uygunluk kriterleri: Evre I/II, ER+, HER2-, tümör ≤5cm, lenf nodu N0 veya 1-3 (N1) | Müşteri PDF'i, ancak PDF'in kendisi "Hakan Bey'e sorulacak" notuyla işaretlemiş | **Doğrulanmadı**, açık soru olarak bırakılmış | MEDICAL_REVIEW_REQUIRED | **GERİ ÇEKİLDİ** — bkz. OPEN-MEDICAL-001, genel ifadeye döndürüldü |
| MINDACT: 6.693 hasta, 9 ülke, 2007-2011, 2016 NEJM yayını, ASCO 2020 uzun vadeli takip | Müşteri PDF geri bildirimi (omnigen.com.tr/mindact-trial/ ve agendia.com/landmark-trials referanslı) | Resmi yayın/kaynak üzerinden birebir doğrulanmadı (yalnızca PDF metninden alındı) | MEDICAL_REVIEW_REQUIRED | Yayında — kaynak bağlantıları sayfada görünür, ancak sayılar resmi yayından teyit edilmeli |
| NBRST, STO-3, NSABP B-42 çalışma özetleri | Müşteri PDF geri bildirimi | Resmi yayın üzerinden birebir doğrulanmadı | MEDICAL_REVIEW_REQUIRED | Yayında — aynı şekilde kaynak bağlantılı, sayılar teyit bekliyor |

## Not

Bu kayıt canlı bir belgedir; her yeni medikal iddia eklendiğinde (blog, yeni sayfa, güncelleme)
buraya bir satır eklenmeden yayınlanmamalıdır.
