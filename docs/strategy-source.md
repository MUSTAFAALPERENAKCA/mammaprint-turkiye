<!--
Kaynak: MammaPrint_Turkiye_Web_Sitesi_Strateji_Dokumani_2026.docx
Çıkarım yöntemi: python-docx ile paragraf/tablo sırası korunarak Markdown'a dönüştürüldü.
Bu dosya orijinal dokümanın birebir metin içeriğidir; yorum veya özetleme eklenmemiştir.
Kategorize edilmiş analiz için bkz. docs/requirements-matrix.md
-->

MammaPrint Türkiye
Yeni Web Sitesi Strateji, UX, İçerik, SEO ve Teknik Mimari Dokümanı
Mevcut Türkiye sitesi ve Agendia global ekosistemi karşılaştırmalı olarak incelenmiştir.

| Proje sahibi | MammaPrint Türkiye / Omnigen |
| --- | --- |
| Doküman türü | Uygulanabilir ürün ve geliştirme brifi |
| Araştırma tarihi | 27 Temmuz 2026 |


| Temel hedef MammaPrint Türkiye’yi yalnızca iki ürünün tanıtıldığı bir web sitesinden; hastaların ve sağlık profesyonellerinin güvenilir, güncel, kolay anlaşılır bilgiye ulaştığı; organik aramada görünür; kurumsal ve ölçülebilir bir dijital sağlık platformuna dönüştürmek. |
| --- |

Gizlilik notu: Bu doküman proje planlaması amacıyla hazırlanmıştır.
Doküman Kullanım Notu
Bu çalışma; strateji, tasarım, içerik, SEO, yazılım geliştirme ve yayın süreçlerinin ortak referans dokümanıdır.

## Araştırma kapsamı

- MammaPrint Türkiye ana sayfası, MammaPrint ve BluePrint ürün sayfalarının içerik ve indeks görünümü incelendi. [S1–S4]
- Agendia global ana sayfa, MammaPrint, BluePrint, hasta kaynakları, klinik kanıt, kaynak merkezi, blog ve kurumsal sayfaları karşılaştırmalı olarak değerlendirildi. [S5–S12]
- Google Search Central’ın kullanıcı odaklı içerik, taranabilirlik ve yapılandırılmış veri önerileri; Core Web Vitals; WCAG 2.2 ve KVKK kaynakları teknik gereksinimlere yansıtıldı. [S13–S22]
- Bu dokümandaki tıbbi içerik önerileri yayın metni değil, içerik mimarisi ve editoryal gereksinimdir. Nihai metinler Agendia/Omnigen medikal, regülasyon ve hukuk onayından geçmelidir.

## Varsayımlar

- MammaPrint ve BluePrint markalarının Türkiye’deki yetkili kullanım ve dağıtım koşulları proje sahibi tarafından doğrulanacaktır.
- Site bir e-ticaret sitesi olmayacak; bilgi verme, hekim/hasta iletişimi ve test sürecine yönlendirme işlevleri taşıyacaktır.
- Hasta veya genetik/sağlık verisi toplanması zorunlu değilse iletişim formlarında bu alanlar istenmeyecektir.
- Türkçe ana dil olacak; İngilizce içerik ancak gerçekten yönetilecekse ayrı ve eksiksiz dil sürümü olarak yayımlanacaktır.

| Kritik yayın ilkesi Sağlık alanındaki içerik SEO için “çok içerik” üretmek yerine; doğrulanabilir kaynak, hekim/medikal inceleme, açık yazar ve güncelleme tarihi, doğru terminoloji ve kullanıcıya zarar vermeyen anlatım üzerine kurulmalıdır. Google da güvenilir ve insanlar için üretilmiş içeriği önceliklendirdiğini belirtmektedir. [S13–S14] |
| --- |


## İçindekiler

- 1. Yönetici Özeti
- 2. Mevcut Site Denetimi
- 3. Agendia Benchmark ve Öğrenimler
- 4. Marka ve Dijital Konumlandırma
- 5. Hedef Kitleler ve Kullanıcı Yolculukları
- 6. Bilgi Mimarisi ve Site Haritası
- 7. Ana Sayfa Detaylı Planı
- 8. Sayfa Bazlı İçerik ve UX Şablonları
- 9. SEO Stratejisi
- 10. Blog ve Editoryal Sistem
- 11. Görsel Tasarım Sistemi
- 12. Teknik Mimari ve CMS
- 13. Performans, Erişilebilirlik ve Güvenlik
- 14. KVKK, Hukuk ve Medikal Uyum
- 15. Ölçümleme ve KPI Sistemi
- 16. Geçiş ve Lansman Planı
- 17. Yol Haritası ve Kabul Kriterleri
- Ek A. URL ve Meta Planı
- Ek B. Anahtar Kelime Kümeleri
- Ek C. İlk 30 Blog İçeriği
- Ek D. Kaynaklar

# 1. Yönetici Özeti

Mevcut MammaPrint Türkiye sitesi, marka ve test adlarını görünür kılmakla birlikte dijital büyüme için gerekli içerik derinliğine, hedef kitle ayrımına, güven unsurlarına ve teknik SEO yapısına sahip değildir. Ana sayfa temelde MammaPrint ve BluePrint bağlantılarından oluşmakta; hasta kaynakları, hekim merkezi, test süreci, klinik çalışmalar, yayınlar, kurumsal bilgi, blog ve kapsamlı iletişim akışı bulunmamaktadır. [S1–S4]
Agendia’nın küresel dijital yapısı ise ürün sayfalarını; hasta eğitim içerikleri, örnek raporlar, klinik çalışmalar, yayınlar, sık sorulan sorular, kaynak merkezi ve blogla desteklemektedir. Bu ekosistem güven oluştururken aynı zamanda çok sayıda arama niyetine cevap veren organik görünürlük alanı yaratmaktadır. [S5–S12]

## Önerilen stratejik dönüşüm


| Alan | Mevcut durum | Hedef durum |
| --- | --- | --- |
| Konumlandırma | İki testin kısa tanıtımı | Türkiye’nin MammaPrint ve BluePrint konusunda güvenilir bilgi ve yönlendirme merkezi |
| Hedef kitle | Tek anlatım | Hasta/yakınları ve sağlık profesyonelleri için ayrılmış yolculuklar |
| İçerik | 3–4 indekslenebilir ana URL | 30+ kalıcı sayfa, klinik kaynak merkezi ve düzenli blog |
| SEO | Yinelenen kök ve /en/ URL’leri, İngilizce slug ve başlıklar | Tekil Türkçe URL yapısı, canonical/hreflang, konu kümeleri ve yapılandırılmış veri |
| Tasarım | Sınırlı kurumsal hikâye ve içerik hiyerarşisi | Premium medikal, sakin, güven veren, erişilebilir tasarım sistemi |
| Dönüşüm | Belirsiz sonraki adım | Doktorla konuşma rehberi, hekim iletişimi, test süreci ve kaynak indirme CTA’ları |
| Yönetim | Statik içerik ağırlığı | Rol bazlı CMS, medikal onay akışı, sürüm ve güncelleme kayıtları |


## Başarı tanımı

- Marka aramalarında doğru ve güncel sayfaların tekil biçimde görünmesi.
- “MammaPrint nedir?”, “meme kanseri nüks testi”, “kemoterapi gerekli mi?”, “genomik test nedir?” gibi bilgi aramalarında konu otoritesi kurulması.
- Hasta ve hekimlerin 2–3 tıklamada doğru kaynağa veya iletişim kanalına ulaşması.
- Yayınlanan her tıbbi içeriğin yazar, medikal inceleyen, kaynak ve güncelleme tarihiyle sunulması.
- Core Web Vitals hedeflerinin karşılanması ve WCAG 2.2 AA odaklı erişilebilirlik.
- Organik trafik, nitelikli iletişim, kaynak indirme ve hekim etkileşiminin ölçülmesi.

| En önemli karar Yeni site “ürün broşürünün dijital hali” olarak değil, kullanıcıların meme kanserinde genomik testleri anlayıp hekimleriyle bilinçli konuşmalarına yardımcı olan bir bilgi mimarisi olarak tasarlanmalıdır. |
| --- |


# 2. Mevcut Site Denetimi


## 2.1 Güçlü yönler

- MammaPrint ve BluePrint ürünleri ana navigasyonda doğrudan görünür.
- Mevcut MammaPrint sayfasında uygunluk kriterleri, risk sınıfları, klinik çalışma referansları ve örnek rapor bağlantıları bulunuyor. [S2]
- BluePrint sayfası Luminal, HER2 ve Bazal moleküler alt tipleri açıklıyor ve NBRST yeniden sınıflandırma verisine yer veriyor. [S4]
- Bilgilendirme amaçlı kullanım ve doktora başvuru uyarısı sayfalarda bulunuyor.
- Alan adı marka ve ülke niyetini açık biçimde taşıyor.

## 2.2 Kritik sorunlar ve riskler


| Öncelik | Alan | Bulgular / etkisi |
| --- | --- | --- |
| Kritik | Dil ve URL yapısı | Ana alan adının /en/ dizinine yönlenmesi; Türkçe içerik için İngilizce dizin ve “Breast Cancer Testing” başlığı kullanılması. |
| Kritik | Yinelenen URL | Aynı MammaPrint içeriğinin hem /mammaprint/ hem /en/mammaprint/ adreslerinde arama sonuçlarında görünmesi; otoritenin bölünmesi ve canonical karmaşası riski. [S2–S3] |
| Kritik | Medikal ifade hassasiyeti | “FDA onaylı” gibi ifadeler, global Agendia sayfasındaki “FDA-cleared” terminolojisiyle birebir uyumlu hale getirilmeli. [S5] |
| Yüksek | İçerik derinliği | Hasta kaynakları, hekim kaynakları, test süreci, klinik çalışmalar, yayınlar, kurumsal güven, blog ve iletişim sayfaları yok. |
| Yüksek | Arama niyeti | Kullanıcıların “genomik test ile kalıtsal genetik test farkı”, “kimler için uygun”, “sonuç nasıl yorumlanır”, “örnek nasıl gönderilir” sorularına ayrı sayfalar yok. |
| Yüksek | Güven sinyalleri | Yazar, medikal inceleyen, son güncelleme, kaynak sürümü ve içerik metodolojisi görünür değil. |
| Yüksek | Dönüşüm akışı | Hastanın doktoruyla konuşması veya hekimin test sürecini başlatması için farklı ve açık CTA yolları bulunmuyor. |
| Orta | Kurumsal görünürlük | Omnigen bağlantısı footer’da olsa da Türkiye operasyonu, yetkili distribütörlük, destek modeli ve iletişim sorumluluğu açıklanmıyor. |
| Orta | Erişilebilirlik | Görsellerin arama çıktılarında “image” şeklinde görünmesi alt metin ve içerik bağlamının iyileştirilmesi gerektiğine işaret ediyor. |
| Orta | İç bağlantı | İki ürün sayfası dışında konu kümeleri ve bağlamsal iç link yapısı yok. |


## 2.3 İçerik doğruluğu ve güncellik yönetimi

Mevcut içeriklerde farklı yıllardan MINDACT, PROMIS ve diğer çalışma sonuçları birlikte sunuluyor. Bu verilerin kullanımı mümkün olsa da her iddianın hangi hasta grubuna, sonlanım noktasına ve takip süresine ait olduğu açıkça gösterilmelidir. Global Agendia sayfası 2025–2026 yayınlarını ve güncel örnek rapor yaklaşımını öne çıkarıyor; Türkiye sitesinde de “son güncelleme” ve “kaynak sürümü” sistemi kurulmalıdır. [S5, S8, S11]

| Düzeltilecek terminoloji örnekleri “NCNN” yazımı “NCCN” olarak düzeltilmeli; “FDA onaylı” yerine doğrulanmış resmi statüye uygun Türkçe karşılık kullanılmalı; “her erken evre hasta” gibi geniş ve kesin ifadeler, endikasyon ve klinik bağlama göre medikal ekip tarafından yeniden yazılmalıdır. |
| --- |


# 3. Agendia Benchmark ve Öğrenimler


## 3.1 Agendia ekosisteminin yapısal gücü


| Bileşen | Agendia’da gözlenen yaklaşım | Türkiye sitesine uyarlama |
| --- | --- | --- |
| Ürün anlatımı | MammaPrint ve BluePrint için ayrı, uzun form, istatistik, FAQ ve CTA içeren sayfalar. [S5–S6] | Türkçe, hasta ve hekim sekmeleriyle sadeleştirilmiş fakat bilimsel kaynağı güçlü sayfalar. |
| Hasta merkezi | Genomik test nedir, doktorla konuşma rehberi, broşürler, hasta hikâyeleri. [S7] | “Hastalar ve Yakınları İçin” merkezi; tanı sonrası sorular, test süreci, indirilebilir rehber. |
| Klinik kanıt | Landmark çalışmalar, devam eden araştırmalar, yayınlar ve kongre verileri. [S10–S11] | MINDACT, NBRST, STO-3 vb. için özet + yayın bağlantısı; hekim dilinde filtrelenebilir kütüphane. |
| Kaynak merkezi | Örnek raporlar, istem formları, kullanım talimatları, kılavuz bağlantıları. [S8] | Yetkiye göre erişim; herkese açık örnek raporlar ve hekimlere özel operasyonel belgeler. |
| Blog | Hasta sorularına ve güncel klinik verilere dayalı düzenli içerik. [S9] | Türkçe arama niyetlerine göre konu kümeleri; medikal inceleme ve güncelleme tarihi. |
| Kurumsal güven | Misyon, tarihçe, ekip, ödüller, lisanslar, hukuk ve uyum sayfaları. [S12] | Agendia ve Omnigen ilişkisini açık anlatan kurumsal ve yasal sayfalar. |
| Dönüşüm | Order a Test, contact, portal ve kaynak indirme CTA’ları. | Türkiye iş akışına uygun “Test süreci”, “Hekim desteği”, “Doktorla konuşma rehberi” CTA’ları. |


## 3.2 Birebir kopyalanmaması gereken noktalar

- Agendia’nın Amerika merkezli sigorta, fiyatlandırma ve sipariş akışları Türkiye’ye aynen taşınmamalıdır.
- Global sayfadaki uzun ve teknik metinler Türkçe kullanıcı için doğrudan çeviri yerine yerelleştirilmelidir.
- Hasta ve sağlık profesyoneli içerikleri aynı sayfada birbirine karışmamalıdır.
- İddialar Türkiye’de geçerli ürün statüsü, distribütörlük ve kullanım koşullarıyla uyumlu hale getirilmelidir.
- Global sitedeki her yeni yayın otomatik olarak Türkiye sitesine alınmamalı; klinik önemi ve yerel kullanım bağlamı değerlendirilmelidir.

## 3.3 Türkiye için fırsat

Türkçe arama sonuçlarında kullanıcılar MammaPrint, Oncotype DX, Prosigna ve EndoPredict gibi testleri karşılaştıran; “kemoterapi gerekli mi?” sorusuna cevap arayan; genomik testleri kalıtsal BRCA testleriyle karıştıran içeriklerle karşılaşıyor. [S23–S26] MammaPrint Türkiye, rakipleri kötüleyen bir dil kullanmadan, testlerin amaç ve kapsam farklarını bilimsel ve anlaşılır biçimde açıklayarak konu otoritesi kurabilir.

# 4. Marka ve Dijital Konumlandırma


## 4.1 Önerilen marka vaadi


| Ana marka cümlesi Meme kanserinin biyolojisini daha iyi anlamaya ve tedavi kararlarını kişiselleştirmeye yardımcı olan genomik içgörüler. |
| --- |

Bu cümle “kemoterapiyi önler”, “kesin tedavi seçer” veya “her hasta için uygundur” gibi aşırı ve riskli vaatlerden kaçınır. Testlerin hekim kararını destekleyen, klinik faktörlerle birlikte yorumlanan araçlar olduğu açık tutulur.

## 4.2 Ton ve anlatım ilkeleri


| İlke | Uygulama | Kaçınılacak yaklaşım |
| --- | --- | --- |
| Sakin ve destekleyici | Tanı sonrası belirsizliği kabul eden, yargısız dil | Korku, panik, dramatik hastalık görselleri |
| Bilimsel ama anlaşılır | Tıbbi terimi kısa açıklamayla birlikte kullanmak | Yoğun jargon veya aşırı basitleştirme |
| Kesinlik sınırlarını koruyan | “Yardımcı olur”, “hekim değerlendirmesiyle” | “Kesin olarak gösterir”, “garanti eder” |
| Kişiye saygılı | “Meme kanseri tanısı alan kişiler/kadınlar” bağlama göre | Hastayı yalnızca hastalığıyla tanımlayan dil |
| Kaynaklı | Her klinik sayı için dip kaynak ve tarih | Kaynağı belirsiz büyük yüzdeler |
| Yerelleştirilmiş | Türkiye’deki test süreci ve iletişim modeli | ABD sigorta ve sipariş modelinin kopyası |


## 4.3 Ana mesaj hiyerarşisi

1.  MammaPrint, erken evre meme kanseri tümörünün gen ekspresyonunu analiz ederek nüks riskinin değerlendirilmesine yardımcı olur.
2.  BluePrint, tümörün büyümesini yönlendiren moleküler alt tipi değerlendirmeye yardımcı olur.
3.  Sonuçlar; patoloji, evre, yaş, lenf nodu ve diğer klinik faktörlerle birlikte hekim tarafından yorumlanır.
4.  Test ek bir invaziv işlem gerektirmeden mevcut biyopsi veya ameliyat dokusundan çalışılabilir; süreç ve uygunluk hekim tarafından doğrulanır. [S5]
5.  MammaPrint ve BluePrint birlikte, risk ve tümör biyolojisi hakkında tamamlayıcı bilgi sağlayabilir. [S5–S6]

# 5. Hedef Kitleler ve Kullanıcı Yolculukları


| Persona | Temel sorular | Site çözümü |
| --- | --- | --- |
| Yeni tanı alan hasta | “Kemoterapi almam gerekir mi?”, “Bu test bana uygun mu?”, “Ek işlem yapılacak mı?” | Anlaşılır özet, uygunluk, süreç, doktorla konuşma rehberi, sık sorulan sorular |
| Hasta yakını | “Doğru soruları nasıl sorabiliriz?”, “Güvenilir kaynak hangisi?” | Basit açıklamalar, indirilebilir kontrol listesi, iletişim kanalı |
| Medikal onkolog | Endikasyon, klinik kanıt, sonuç yorumu, örnek rapor, lojistik | Hekim merkezi, çalışma özetleri, yayınlar, istem/numune süreci |
| Meme cerrahı | Ameliyat öncesi/sonrası zamanlama, doku örneği, karar süreci | Test akış şeması, numune gereksinimleri, iletişim |
| Patolog / laboratuvar | FFPE blok/lam gereksinimleri, gönderim ve kalite | Teknik numune rehberi, form ve destek |
| Hastane satın alma / yönetim | Yetkili distribütör, hizmet modeli, iletişim | Kurumsal sayfa, yetki ve kalite belgeleri, doğrudan kurumsal iletişim |
| Basın / akademik kullanıcı | Güncel yayın, çalışma, marka bilgisi | Haberler, yayın kütüphanesi, basın materyali |


## 5.1 Hasta yolculuğu

1.  Arama sonucu: “MammaPrint nedir?” veya “meme kanseri nüks testi”.
2.  Kısa ve güvenli yanıt: Testin amacı, neyi ölçtüğü ve neyi ölçmediği.
3.  Uygunluk sayfası: Klinik kriterlerin hekim değerlendirmesi gerektirdiğini anlatan kontrol listesi.
4.  Test süreci: Mevcut tümör dokusu, laboratuvar, rapor ve hekim görüşmesi adımları.
5.  Sonuçları anlama: Low Risk, High Risk ve uygun olduğu bağlamda UltraLow kavramlarının genel açıklaması.
6.  Eylem: “Doktorunuza sorabileceğiniz 8 soru” rehberini indirme veya genel bilgi için iletişim.

## 5.2 Hekim yolculuğu

1.  Hekimler için giriş sayfasından klinik uygunluk ve kanıt özetine erişim.
2.  MammaPrint/BluePrint ürün detayında endikasyon, örnek rapor ve sonuç terminolojisi.
3.  Landmark çalışmalar ve güncel yayınların filtrelenebilir kütüphanesi.
4.  Numune/lojistik gereksinimleri ve test talep süreci.
5.  Medikal bilgi talebi veya yerel temsilciyle iletişim.

| Navigasyon prensibi Ana menüde “Hastalar İçin” ve “Sağlık Profesyonelleri İçin” yolları ilk seviyede ayrılmalıdır. Bu ayrım kullanıcıyı dışlamak için değil, doğru dil ve içeriğe daha hızlı ulaştırmak içindir. |
| --- |


# 6. Bilgi Mimarisi ve Site Haritası


## 6.1 Önerilen ana navigasyon


| Menü | Alt sayfalar |
| --- | --- |
| Testler | MammaPrint • BluePrint • MammaPrint + BluePrint • Genomik Test Nedir? • Genomik ve Kalıtsal Genetik Test Farkı |
| Hastalar İçin | Tanı Sonrası İlk Sorular • Kimler İçin Uygun? • Test Nasıl Yapılır? • Sonuçları Anlamak • Doktorla Konuşma Rehberi • SSS |
| Sağlık Profesyonelleri | Klinik Uygunluk • Numune ve Test Süreci • Örnek Raporlar • Klinik Kanıt • Yayınlar • Medikal Bilgi Talebi |
| Bilimsel Kanıt | MINDACT • NBRST • STO-3 • NSABP B-42 • Güncel Yayınlar • Kılavuzlar |
| Bilgi Merkezi | Blog • Terimler Sözlüğü • Videolar • İndirilebilir Kaynaklar |
| Hakkımızda | MammaPrint Türkiye • Agendia • Omnigen • Yetkili Distribütörlük • Kalite ve Uyum |
| İletişim | Genel İletişim • Sağlık Profesyoneli İletişimi • Kurumsal İletişim |


## 6.2 Tam URL önerisi


| URL | Sayfa |
| --- | --- |
| / | Ana Sayfa |
| /testler/ | Testlere Genel Bakış |
| /mammaprint/ | MammaPrint 70 Gen Nüks Riski Testi |
| /blueprint/ | BluePrint 80 Gen Moleküler Alt Tipleme Testi |
| /mammaprint-blueprint/ | Birlikte Kullanım ve Tamamlayıcı İçgörüler |
| /genomik-test-nedir/ | Genomik Test Nedir? |
| /genomik-test-genetik-test-farki/ | Genomik Tümör Testi ve Kalıtsal Genetik Test Farkı |
| /hastalar-icin/ | Hasta Merkezi |
| /hastalar-icin/kimler-icin-uygun/ | Uygunluk |
| /hastalar-icin/test-nasil-yapilir/ | Test Süreci |
| /hastalar-icin/sonuclari-anlamak/ | Sonuçları Anlamak |
| /hastalar-icin/doktorla-konusma-rehberi/ | Doktor Görüşmesi Rehberi |
| /hastalar-icin/sik-sorulan-sorular/ | Hasta SSS |
| /saglik-profesyonelleri/ | Hekim Merkezi |
| /saglik-profesyonelleri/klinik-uygunluk/ | Klinik Uygunluk |
| /saglik-profesyonelleri/numune-ve-lojistik/ | Numune ve Lojistik |
| /saglik-profesyonelleri/ornek-raporlar/ | Örnek Raporlar |
| /saglik-profesyonelleri/test-talebi/ | Test Talep Süreci |
| /saglik-profesyonelleri/medikal-bilgi/ | Medikal Bilgi Talebi |
| /klinik-kanit/ | Klinik Kanıt Merkezi |
| /klinik-kanit/mindact/ | MINDACT |
| /klinik-kanit/nbrst/ | NBRST |
| /klinik-kanit/sto-3/ | STO-3 |
| /klinik-kanit/nsabp-b42/ | NSABP B-42 |
| /yayinlar/ | Yayın Kütüphanesi |
| /kilavuzlar/ | Kılavuzlar |
| /bilgi-merkezi/ | Bilgi Merkezi |
| /blog/ | Blog |
| /sozluk/ | Terimler Sözlüğü |
| /kaynaklar/ | İndirilebilir Kaynaklar |
| /videolar/ | Videolar |
| /hakkimizda/ | MammaPrint Türkiye Hakkında |
| /agendia/ | Agendia Hakkında |
| /omnigen/ | Omnigen ve Türkiye Operasyonu |
| /kalite-ve-uyum/ | Kalite, Lisans ve Uyum |
| /iletisim/ | İletişim |
| /gizlilik/ | Gizlilik ve KVKK |
| /cerez-politikasi/ | Çerez Politikası |
| /kullanim-kosullari/ | Kullanım Koşulları |
| /tibbi-bilgilendirme/ | Tıbbi Bilgilendirme ve Sorumluluk Reddi |


## 6.3 URL kuralları

- Türkçe ana sürüm kök dizinde çalışmalı; /en/ Türkçe sayfalara tahsis edilmemeli.
- URL’ler küçük harf, kısa, Türkçe karakter içermeyen ve kalıcı olmalı.
- Eski /en/mammaprint/ ve /en/blueprint/ URL’leri tek adım 301 ile yeni Türkçe canonical URL’lere yönlenmeli.
- Her sayfa tek bir canonical URL üretmeli; http/https, www/non-www ve sondaki slash standardı tekilleştirilmeli.
- İngilizce sürüm yapılırsa /en/ altında tam içerik seti oluşturulmalı ve hreflang tr-TR/en ile karşılıklı bağlanmalı.
- PDF ve doküman URL’lerinde sürüm, dil ve doküman tipi anlaşılır olmalı; eski örnek raporlar arşivlenmeli veya güncel sürüme yönlendirilmelidir.

# 7. Ana Sayfa Detaylı Planı


## 7.1 Ana sayfanın görevi

Ana sayfa tek başına bütün tıbbi bilgiyi anlatmamalıdır. Kullanıcının kim olduğunu ve hangi soruya cevap aradığını hızlıca anlamasını sağlamalı; güveni kurmalı ve doğru derinlik sayfasına yönlendirmelidir.

| Blok | İçerik ve amaç |
| --- | --- |
| 1. Üst bilgi ve navigasyon | Logo, Testler, Hastalar İçin, Sağlık Profesyonelleri, Klinik Kanıt, Bilgi Merkezi, Hakkımızda; sağda “İletişim” ve kitle seçimi. |
| 2. Hero | H1: “Meme kanserinin biyolojisini daha iyi anlamaya yardımcı genomik testler.” Alt metin: MammaPrint nüks riski, BluePrint moleküler alt tip hakkında tamamlayıcı içgörü sağlar. CTA: “Testleri Keşfedin” + “Hastalar İçin Bilgi”. |
| 3. İki temel soru | Kart 1: “Kanserin tekrarlama riski nedir?” → MammaPrint. Kart 2: “Tümörün büyümesini ne yönlendiriyor?” → BluePrint. |
| 4. MammaPrint + BluePrint | Tek doku örneğinden risk ve biyoloji hakkında tamamlayıcı değerlendirme; klinik faktörlerle birlikte yorumlanır. |
| 5. Hasta / hekim yolu | İki büyük panel: “Tanı aldım, bilgi arıyorum” ve “Sağlık profesyoneliyim”. |
| 6. Test süreci | 4 adım: Hekim değerlendirmesi → mevcut doku örneği → laboratuvar analizi → sonuçların hekimle değerlendirilmesi. |
| 7. Klinik kanıt | MINDACT, NBRST ve 20+ yıllık klinik doğrulama yaklaşımını kaynaklı ve abartısız gösteren bölüm. [S10] |
| 8. Güven ve yetki | Agendia, MammaPrint/BluePrint marka ilişkisi; Omnigen’in Türkiye rolü; kalite ve uyum bağlantıları. |
| 9. Bilgi merkezi | Son 3 blog yazısı, sözlük, doktorla konuşma rehberi ve örnek raporlar. |
| 10. SSS | Ana sayfada 5 kısa soru; tam SSS’ye link. FAQ yapılandırılmış verisi yalnızca görünür ve güncel içerikle. |
| 11. Son CTA | Hasta: “Doktorunuza sorabileceğiniz soruları indirin.” Hekim: “Medikal bilgi veya test süreci için iletişime geçin.” |
| 12. Footer | Hızlı linkler, yasal metinler, iletişim, telif/marka bildirimi, tıbbi bilgilendirme, çerez ayarları. |


## 7.2 Ana sayfa SEO brifi


| Öğe | Öneri |
| --- | --- |
| Birincil arama niyeti | MammaPrint Türkiye, meme kanseri genomik test, meme kanseri nüks testi |
| Title | MammaPrint Türkiye | Meme Kanserinde Genomik Testler |
| Meta açıklama | MammaPrint 70 gen nüks riski ve BluePrint 80 gen moleküler alt tipleme testleri hakkında hasta ve sağlık profesyonelleri için güvenilir bilgiler. |
| H1 | Meme kanserinin biyolojisini daha iyi anlamaya yardımcı genomik testler |
| Schema | Organization, WebSite, WebPage, BreadcrumbList; gerekiyorsa SiteNavigationElement |
| İç link hedefleri | MammaPrint, BluePrint, genomik test nedir, hasta merkezi, hekim merkezi, klinik kanıt, blog |
| Görsel SEO | Anlamlı dosya adları, Türkçe alt metin, WebP/AVIF, width/height, preload yalnızca hero görselinde |


# 8. Sayfa Bazlı İçerik ve UX Şablonları


## 8.1 MammaPrint ürün sayfası

- H1: “MammaPrint® 70 Gen Meme Kanseri Nüks Riski Testi”.
- Hero alt mesajı: Testin erken evre meme kanseri tümöründeki gen ekspresyonunu analiz ederek uzak nüks riskini değerlendirmeye yardımcı olduğu; sonucun hekim tarafından diğer klinik faktörlerle birlikte yorumlandığı.
- “30 saniyede MammaPrint”: Ne ölçer? Kim değerlendirebilir? Hangi dokudan çalışılır? Sonuç ne sağlar?
- Hasta ve sağlık profesyoneli için sekmeli veya sayfa içi ayrı anlatım.
- Kimler için değerlendirilebilir? Resmi kullanım amacı ve yerel koşullarla medikal onaylı kriterler.
- Nasıl çalışır? Gen ekspresyonu → risk sınıflandırması → klinik değerlendirme görsel akışı.
- Sonuçlar: Low Risk, High Risk ve güncel rapor kapsamına göre UltraLow/High 1/High 2 kavramları; kesin tedavi önerisi gibi sunulmamalı.
- Klinik kanıt: MINDACT, STO-3, NSABP B-42 ve güncel yayınlardan seçilmiş, bağlamı açıklanan kartlar. [S5, S10]
- Sık sorulan sorular: invazivlik, örnek türü, sonuç süresi, kim yorumlar, genomik/genetik farkı. [S5]
- CTA: Hasta için doktorla konuşma rehberi; hekim için örnek rapor/test süreci.

### MammaPrint sayfası için yapılandırılmış veri

MedicalWebPage/MedicalTest kullanımı schema.org kapsamında değerlendirilebilir; Google rich result beklentisi yaratmadan semantik anlam için uygulanmalıdır. Ayrıca BreadcrumbList, FAQPage (Google’ın güncel uygunluk politikalarına göre) ve Organization bağlantıları kullanılabilir. Tüm işaretlenen bilgi görünür sayfa içeriğiyle eşleşmelidir. [S15–S16]

## 8.2 BluePrint ürün sayfası

- H1: “BluePrint® 80 Gen Moleküler Alt Tipleme Testi”.
- Temel soru: “Tümörün büyümesini hangi biyolojik yol yönlendiriyor?”
- Luminal, HER2 ve Basal tiplerin kartlarla açıklanması; MammaPrint ile Luminal A/B ayrımının bağlamı.
- IHC/FISH ile aynı şey olmadığı, geleneksel patolojinin yerine geçmediği ve tamamlayıcı değerlendirme sunduğu açıkça anlatılmalı.
- NBRST yeniden sınıflandırma verisi, hasta grubu ve kaynak dipnotuyla sunulmalı. Agendia güncel sayfası 22% ve daha yeni analizlerde 23% gibi bağlama bağlı değerler gösterdiği için hangi veri setinin kullanıldığı belirtilmeli. [S6, S10]
- BluePrint’in ABD FDA statüsü MammaPrint ile karıştırılmamalı; Agendia güncel sayfasındaki regülasyon notu referans alınmalı. [S6]
- CTA: MammaPrint + BluePrint birlikte kullanım sayfası ve hekim kaynakları.

## 8.3 “Genomik test nedir?” eğitim sayfası

- Genom, gen ekspresyonu ve tümör biyolojisini sade bir illüstrasyonla açıklama.
- Genomik testlerin “kalıtsal yatkınlık testi” ile aynı olmadığını netleştirme.
- Patoloji testleri, görüntüleme ve genomik testlerin birbirini tamamlayan rolleri.
- Testlerin tek başına tanı veya tedavi kararı vermediğini vurgulama.
- Sözlük bağlantıları: ER, PR, HER2, FFPE, nüks, metastaz, prognostik, prediktif.

## 8.4 Hasta merkezi


| Bölüm | İçerik |
| --- | --- |
| Tanı sonrası ilk sorular | “Hangi evredeyim?”, “Tümörün özellikleri ne?”, “Tedavi seçenekleri neler?”, “Genomik test benim için değerlendirilebilir mi?” |
| Test süreci | Ek cerrahi işlem gerekip gerekmediği, mevcut doku, laboratuvar analizi ve raporun hekime ulaşması. |
| Sonuçları anlamak | Risk terimlerinin genel açıklaması; kişisel yorum için hekime yönlendirme. |
| Doktorla görüşme | Yazdırılabilir/indirilebilir 8–10 soruluk rehber. |
| Duygusal ton | Korku yerine netlik ve destek; tıbbi bilgi ile psikososyal destek kaynaklarını birbirine karıştırmama. |
| İletişim | Genel ürün bilgisi; kişisel tıbbi yorum veya tedavi önerisi verilemeyeceğini açık belirtme. |


## 8.5 Sağlık profesyonelleri merkezi

- Klinik uygunluk matrisi ve resmi kullanım amacı.
- Numune kabul kriterleri, FFPE blok/lam, doku kalitesi, paketleme, gönderim ve takip.
- Rapor örnekleri ve rapor alanlarının açıklaması.
- Klinik çalışma kütüphanesi: çalışma tasarımı, hasta sayısı, takip süresi, ana bulgu, sınırlılıklar.
- Yayın filtreleri: test, tedavi evresi, tümör alt tipi, çalışma tipi, yıl.
- Medikal bilgi talep formu; kullanıcı rolü ve kurum bilgisi, ancak hasta tanımlayıcı veri istenmemesi.
- Operasyonel dokümanlarda sürüm numarası, yayın tarihi ve geçerlilik durumu.

## 8.6 Klinik kanıt merkezi

Her çalışma sayfasında standart bir “kanıt kartı” kullanılmalıdır: çalışma adı, tasarım, amaç, dahil edilen hasta grubu, ana sonlanım noktası, takip süresi, bulgu, klinik anlam ve sınırlılıklar. Agendia’nın landmark trials sayfası 20+ yıllık doğrulama ve MINDACT/NBRST/STO-3 gibi çalışmaları ayrı özetler halinde sunuyor. [S10]

| Alan | Zorunlu içerik |
| --- | --- |
| Kaynak kimliği | Tam yayın künyesi, DOI/PubMed veya yayıncı bağlantısı |
| Bağlam | Adjuvan/neoadjuvan/endokrin; hangi hasta grubu |
| Veri | Mutlak oran, karşılaştırma grubu, takip süresi |
| Yorum | “Bu sonuç ne anlama gelir?” ve “ne anlama gelmez?” |
| Güncellik | Son medikal inceleme tarihi ve yeni veri varsa güncelleme notu |
| CTA | İlgili ürün, örnek rapor veya medikal bilgi talebi |


## 8.7 İletişim sayfası

- Üç ayrı yol: Genel bilgi, sağlık profesyoneli desteği, kurumsal/basın.
- Formda minimum alan: ad-soyad, e-posta/telefon, kullanıcı tipi, konu, mesaj, KVKK aydınlatma onayı.
- “Lütfen hasta adı, TC kimlik, rapor veya genetik/sağlık verisi paylaşmayın” uyarısı.
- Kişisel tedavi sorularında hekime yönlendirme.
- Açık adres, telefon, çalışma saatleri, yanıt süresi beklentisi ve spam koruması.
- Gönderim sonrası takip numarası veya net başarı mesajı; e-posta bildirimleri kişisel sağlık verisi içermemeli.

# 9. SEO Stratejisi


## 9.1 SEO yaklaşımı: konu otoritesi + güven + teknik temizlik

Google’ın temel yaklaşımı; arama motorunu manipüle etmek için değil, kullanıcının ihtiyacını karşılayan güvenilir içerik üretmektir. Sağlık gibi hassas konularda kaynak, yazar/inceleyen, güncellik ve doğru kapsam özellikle önemlidir. [S13–S14]

## 9.2 Ana konu kümeleri


| Küme | Örnek arama niyetleri |
| --- | --- |
| Marka | MammaPrint, MammaPrint Türkiye, MammaPrint testi, 70 gen testi |
| Nüks ve tedavi kararı | meme kanseri nüks testi, kemoterapi gerekli mi, kemoterapi kararı genomik test |
| Genomik eğitim | genomik test nedir, gen ekspresyon testi, tümör genomik profili |
| Karışıklığı giderme | genomik test ve genetik test farkı, MammaPrint BRCA farkı, kalıtsal test mi |
| Uygunluk | MammaPrint kimlere yapılır, erken evre meme kanseri genomik test, lenf nodu MammaPrint |
| Süreç | MammaPrint nasıl yapılır, tümör bloğu testi, FFPE nedir, sonuç kaç günde çıkar |
| Sonuç | MammaPrint düşük risk, yüksek risk, ultralow risk, sonuç nasıl yorumlanır |
| BluePrint | BluePrint testi, moleküler alt tipleme, Luminal HER2 Basal |
| Klinik kanıt | MINDACT çalışması, NBRST, STO-3, MammaPrint yayınları |
| Hekim aramaları | MammaPrint örnek rapor, numune gönderimi, test istem formu, klinik uygunluk |


## 9.3 On-page SEO standardı

- Her URL tek bir birincil arama niyetine sahip olmalı; aynı anahtar kelime için birden fazla sayfa rekabet etmemeli.
- Title 50–60 karakteri hedeflemeli fakat zorunlu sınır gibi kullanılmamalı; en önemli konu başta yer almalı.
- Meta açıklama kullanıcıya sayfanın değerini ve kapsamını anlatmalı; tıbbi vaat içermemeli.
- Her sayfada tek ve açıklayıcı H1; H2/H3 hiyerarşisi mantıksal olmalı.
- İlk 100–150 kelimede sorunun kısa yanıtı; devamında detay ve kaynak.
- Kaynaklara bağlamsal bağlantı; harici linkler yeni sekme zorunluluğu olmadan erişilebilir biçimde.
- Görsellerde özgün alt metin; dekoratif görseller boş alt niteliği.
- İçerik sahibinin adı, medikal inceleyen uzman, yayın ve güncelleme tarihi.
- Sayfa sonunda ilgili içerikler: kullanıcı yolculuğunu sürdüren 3–5 bağlamsal iç link.

## 9.4 Teknik SEO gereksinimleri


| Konu | Gereksinim |
| --- | --- |
| Render | Kritik metin ve linkler sunucu tarafında veya statik HTML olarak gelmeli; sadece istemci JavaScript’ine bağlı olmamalı. |
| Sitemap | Sayfa, blog, yayın ve video için dinamik XML sitemap; yalnız canonical ve indexlenebilir URL’ler. |
| Robots | Yönetim, önizleme, arama parametreleri ve teknik dizinler engellenmeli; sitemap adresi belirtilmeli. |
| Canonical | Tüm sayfalarda self-canonical; yinelenen dil ve parametre URL’leri tekilleştirme. |
| Redirect | Eski URL → en yakın yeni karşılık; redirect chain ve 404 üretilmemeli. |
| Hreflang | Yalnız eksiksiz İngilizce sürüm varsa tr-TR/en karşılıklı etiketler. |
| Durum kodu | Silinen içerik 410/404; yönlendirilen içerik 301; soft-404 önlenmeli. |
| Pagination/filter | Yayın filtreleri indeks şişmesi yaratmamalı; canonical ve noindex stratejisi. |
| Structured data | Organization, WebSite, BreadcrumbList, Article/BlogPosting, Person, FAQPage uygunluğu, VideoObject, Dataset/ScholarlyArticle bağlantıları. |
| Open Graph | Her sayfada özgün sosyal başlık, açıklama ve 1200×630 paylaşım görseli. |
| Search Console | Domain property, sitemap, URL denetimi, performans ve indeks raporları. |
| Log analizi | Bot taramaları, 404, yönlendirme ve crawl budget sorunlarının periyodik kontrolü. |


## 9.5 İç link mimarisi

Pillar–cluster modeli kullanılmalıdır. Örneğin “MammaPrint” ana sayfası; “kimler için uygun”, “nasıl yapılır”, “sonuçları anlama”, “MINDACT”, “örnek rapor” ve ilgili blog yazılarına bağlanır. Bu alt içeriklerin tamamı da doğal bağlamda MammaPrint ana sayfasına geri bağlanır. Google, taranabilir linklerin yeni sayfaları bulma ve bağlamı anlama açısından önemli olduğunu belirtir. [S17]

## 9.6 AI arama görünürlüğü

- Sorulara doğrudan, kısa ve kaynaklı yanıt blokları oluşturmak.
- Tanımlar, süreçler ve karşılaştırmaları tablo/numaralı adımlarla yapılandırmak.
- Her iddiayı görünür kaynakla desteklemek; yapılandırılmış veriyi görünür içerikle eşleştirmek.
- Marka, kurum, ürün ve uzman ilişkilerini Organization/Person/Article şemalarıyla açıklaştırmak.
- Güncel tarih ve sürüm yönetimi; eski içeriklerin sessizce bırakılmaması.
- Google’ın generative AI özellikleri için de mevcut temel SEO ve kullanıcı odaklı içerik ilkelerini önerdiği dikkate alınmalı. [S18]

# 10. Blog ve Editoryal Sistem


## 10.1 Blogun amacı

Blog yalnızca haber paylaşmak için değil; kullanıcı sorularını yanıtlayan konu kümeleri üretmek, klinik gelişmeleri açıklamak, site içi bağlantı ağını güçlendirmek ve markanın güncel bilgi sorumluluğunu göstermek için kullanılmalıdır. Agendia blogunda biyopsi, genomik test ve tedavi kararı gibi somut hasta soruları ile güncel klinik veri içerikleri birlikte yer alıyor. [S9]

## 10.2 Kategoriler


| Kategori | Hedef kitle | Örnek içerik |
| --- | --- | --- |
| Meme Kanserini Anlamak | Hasta/yakın | Erken evre ne demek? Nüks ve metastaz farkı |
| Genomik Testleri Anlamak | Hasta/yakın/hekim | Genomik ve kalıtsal genetik test farkı |
| MammaPrint Rehberi | Hasta/hekim | Uygunluk, süreç, sonuç terimleri |
| BluePrint Rehberi | Hasta/hekim | Moleküler alt tipler ve patolojiyle ilişkisi |
| Tedavi Kararı | Hasta/hekim | Genomik testlerin multidisipliner karardaki rolü |
| Klinik Araştırmalar | Hekim/akademik | MINDACT, NBRST ve yeni yayın özetleri |
| Hekim Kaynakları | Hekim/lab | Numune, rapor, lojistik, sık operasyonel sorular |
| MammaPrint Türkiye Haberleri | Kurumsal | Kongre, eğitim, iş birliği ve duyurular |


## 10.3 Editoryal iş akışı

1.  Konu önerisi ve arama niyeti: İçerik yöneticisi hedef soru, persona ve anahtar kelimeyi tanımlar.
2.  Kaynak dosyası: Agendia resmi içerikleri, hakemli yayınlar ve güncel kılavuzlar kayda alınır.
3.  İlk taslak: Sağlık iletişimi diline uygun metin oluşturulur.
4.  Medikal inceleme: İddialar, oranlar, uygunluk ve terminoloji kontrol edilir.
5.  Regülasyon/hukuk kontrolü: Marka, ürün statüsü, reklam/tanıtım ve KVKK kontrolü.
6.  SEO ve erişilebilirlik: Başlık, meta, iç link, alt metin, tablo ve okunabilirlik.
7.  Yayın: Yazar, medikal inceleyen, yayın/güncelleme tarihi ve kaynaklar görünür olur.
8.  Periyodik gözden geçirme: Klinik içerikler en geç 12 ayda bir; yüksek değişkenlikteki sayfalar 3–6 ayda bir kontrol edilir.

## 10.4 Blog içerik şablonu

- H1 ve 2–3 cümlelik doğrudan yanıt.
- “Bu yazıda” kısa içerik özeti.
- Tıbbi terimlerin sade açıklaması.
- Soruyu alt başlıklara ayıran H2/H3 yapısı.
- Uygunsa tablo veya süreç adımları.
- “Bu bilgi ne anlama gelmez?” güvenlik kutusu.
- Kaynaklar ve yayın tarihleri.
- Yazar ve medikal inceleyen biyografisi.
- İlgili ana ürün/eğitim sayfalarına 3–5 doğal iç link.
- Tıbbi bilgilendirme notu ve doktora danışma yönlendirmesi.

## 10.5 Yayın sıklığı


| Dönem | Öneri |
| --- | --- |
| Lansman öncesi | En az 12 temel evergreen blog + 6 ana eğitim sayfası hazır olmalı. |
| İlk 3 ay | Ayda 4 kaliteli içerik: 2 hasta eğitimi, 1 hekim/klinik, 1 marka/güncel veri. |
| 3–12 ay | Ayda 2–4 içerik; performans verisine göre konu kümelerinde derinleşme. |
| Güncelleme | Her ay en az 2 mevcut içerik güncellik ve iç link açısından gözden geçirilmeli. |


# 11. Görsel Tasarım Sistemi


## 11.1 Tasarım yönü

Önerilen estetik; premium medikal, bilimsel ve insan odaklıdır. Tasarım klinik bir laboratuvar kadar güvenilir, hasta iletişimi kadar sıcak görünmelidir. Aşırı pembe “farkındalık kampanyası” estetiği, yoğun molekül stok görselleri veya korkutucu kanser görsellerinden kaçınılmalıdır.

| Tasarım unsuru | Öneri |
| --- | --- |
| Ana renk | Derin lacivert: kurumsal güven ve bilim |
| MammaPrint vurgu | Kontrollü fuşya/gül tonu; CTA ve veri vurgularında |
| BluePrint vurgu | Temiz medikal mavi; alt tip ve ürün ayrımında |
| Zemin | Beyaz, açık gri, çok açık pembe/mavi bölümler |
| Tipografi | Modern grotesk: Inter/Lato/Source Sans; gövde 17–18 px masaüstü, 16–17 px mobil |
| Fotoğraf | Gerçek ve doğal hekim–hasta etkileşimi; çeşitlilik; dramatize edilmemiş klinik ortam |
| Bilimsel illüstrasyon | Tümör biyolojisi, gen ekspresyonu ve test sürecini sadeleştiren özgün vektörler |
| İkon | İnce çizgili, tutarlı, metin yerine geçmeyen ikon seti |
| Kartlar | Yüksek kontrast, bol boşluk, sınırlı gölge, 12–16 px radius |
| Hareket | Yavaş ve işlevsel mikro animasyon; prefers-reduced-motion desteği |


## 11.2 Bileşen kütüphanesi

- Global header, mega menu ve mobil menü.
- Hero: hasta odaklı / hekim odaklı varyant.
- Ürün kartı: MammaPrint / BluePrint renk kodu.
- Klinik veri kartı: sayı, bağlam, kaynak dipnotu.
- Kanıt özeti kartı: çalışma tasarımı ve sınırlılık.
- CTA paneli: hasta rehberi / hekim iletişimi.
- SSS accordion; klavye ve ekran okuyucu uyumlu.
- Kaynak/indirilebilir belge kartı: dil, tür, sürüm, tarih.
- Yazar/medikal inceleyen kartı.
- Uyarı kutuları: tıbbi bilgi, güvenlik, güncellik, KVKK.
- Filtre ve arama: blog/yayın kütüphanesi.
- Breadcrumb, pagination, ilgili içerikler ve footer.

## 11.3 Ana görsel prensipleri

- Hastalık korkusu değil, bilgi ve ortak karar verme hissi.
- Saç dökülmesi, yoğun tedavi görüntüsü veya ağlayan hasta gibi dramatik klişeler kullanılmamalı.
- DNA sarmalı tek başına “genomik test” anlatımı sayılmamalı; bağlam ve açıklama şart.
- Tüm görseller için kullanım lisansı, model izni ve kaynak kaydı tutulmalı.
- Hasta hikâyesi kullanılırsa açık izin, gerçeklik kontrolü ve sonuçların genellenemeyeceği notu olmalı.
- Grafiklerde eksen, zaman, hasta grubu ve kaynak gösterilmeli; yalnız büyük yüzde ile iletişim yapılmamalı.

# 12. Teknik Mimari ve CMS


## 12.1 Önerilen mimari


| Önerilen varsayılan çözüm Sunucu tarafında veya statik üretilen modern frontend + headless CMS + güvenli form servisi. Bu yapı özel kurumsal tasarım, hızlı sayfa açılışı, SEO kontrolü ve editoryal onay akışını birlikte sağlar. |
| --- |


| Katman | Öneri | Neden |
| --- | --- | --- |
| Frontend | SSR/SSG destekli modern framework | Kritik içeriğin HTML olarak gelmesi, yüksek performans, esnek tasarım |
| CMS | Rol/iş akışı destekli headless CMS veya iyi yapılandırılmış WordPress | Blog, yayınlar, sayfalar, yazarlar, kaynaklar ve onay süreci |
| API/Form | Ayrı güvenli endpoint; rate limit ve spam koruması | İletişim formlarını CMS’den ayırmak ve veri riskini azaltmak |
| Arama | Başlangıçta yerel indeks; büyüdüğünde Algolia/Meilisearch benzeri | Blog/yayın filtreleme ve hızlı arama |
| Hosting | CDN, edge cache, otomatik yedek, WAF | Türkiye ve global erişim, güvenlik, performans |
| Medya | Optimize görsel pipeline ve ayrı doküman yönetimi | WebP/AVIF, responsive image, PDF sürüm takibi |
| Analytics | GA4 veya gizlilik odaklı alternatif + Search Console + consent mode | SEO ve dönüşüm ölçümü; çerez tercihine uyum |
| Monitoring | Uptime, hata, form teslimi, Core Web Vitals RUM | Operasyonel sorunları erken tespit |


## 12.2 CMS içerik tipleri


| İçerik tipi | Temel alanlar |
| --- | --- |
| Page | Başlık, slug, hero, bölümler, SEO, kaynaklar, medikal onay |
| BlogPost | Kategori, yazar, medikal inceleyen, özet, içerik, referans, güncelleme tarihi |
| ClinicalStudy | Çalışma adı, tasarım, popülasyon, sonuç, sınırlılık, yayın bağlantısı |
| Publication | Künye, yıl, konu, test, tür, DOI/PubMed, özet |
| Resource | Belge türü, dil, dosya, sürüm, geçerlilik, hedef kitle |
| FAQ | Soru, kısa yanıt, uzun yanıt, hedef kitle, ilgili sayfalar |
| GlossaryTerm | Terim, sade tanım, teknik tanım, ilişkili terimler |
| Person | İsim, unvan, uzmanlık, biyografi, rol: yazar/inceleyen |
| Organization | Agendia, Omnigen, MammaPrint Türkiye ilişkileri |
| Redirect | Eski URL, yeni URL, durum, tarih |
| FormSubmission | Minimum iletişim verisi; ayrı ve kısıtlı erişim; saklama politikası |


## 12.3 Rol ve onay modeli


| Rol | Yetki |
| --- | --- |
| Yazar | Taslak oluşturur, yayınlayamaz. |
| SEO editörü | Meta, URL, iç link ve içerik yapısını düzenler. |
| Medikal inceleyen | Tıbbi iddiaları ve kaynakları onaylar/reddeder. |
| Regülasyon/hukuk | Uyum, marka ve kişisel veri riskini kontrol eder. |
| Yayın yöneticisi | Tüm onaylar tamamlandığında yayımlar. |
| Sistem yöneticisi | Kullanıcı, rol, entegrasyon ve güvenlik yönetimi; içerik onayı yerine geçmez. |


## 12.4 CMS’de zorunlu kalite kontrolleri

- Medikal onaylayan ve onay tarihi boşsa klinik içerik yayımlanamaz.
- Kaynak gerektiren sayı/iddia için referans alanı zorunlu.
- Title, meta açıklama, canonical, OG görsel ve alt metin kontrolleri.
- Belge yüklemede sürüm ve geçerlilik tarihi zorunlu.
- Taslak/incelemede/yayında/arşiv durumları.
- Değişiklik geçmişi ve geri alma.
- Planlı yayın ve planlı gözden geçirme tarihi.
- Kırık link ve eski kaynak uyarıları.

# 13. Performans, Erişilebilirlik ve Güvenlik


## 13.1 Core Web Vitals hedefleri


| Metrik | Hedef | Uygulama |
| --- | --- | --- |
| LCP | ≤ 2,5 sn (75. yüzdelik) | Hero görselini optimize et, kritik CSS, CDN, TTFB azaltma. |
| INP | ≤ 200 ms (75. yüzdelik) | Az JavaScript, uzun görevleri bölme, üçüncü taraf scriptlerini sınırlama. |
| CLS | ≤ 0,1 (75. yüzdelik) | Görsel/video boyutlarını rezerve et, font ve banner kaymalarını önle. |
| TTFB | Tercihen ≤ 800 ms | Cache, edge/CDN, optimize backend ve veritabanı. |
| Mobil Lighthouse | Performans ≥ 90 hedef | Lansman kriteri; saha verisiyle ayrıca izleme. |

Core Web Vitals; LCP, INP ve CLS metrikleriyle yükleme, etkileşim ve görsel kararlılığı ölçer. Hedefler laboratuvar testinin yanında gerçek kullanıcı verisiyle izlenmelidir. [S19–S20]

## 13.2 Erişilebilirlik hedefi: WCAG 2.2 AA

- Tüm işlevler klavye ile erişilebilir; görünür focus durumu.
- Metin ve arayüz bileşenlerinde yeterli renk kontrastı.
- Doğru başlık hiyerarşisi ve landmark bölgeleri.
- Form alanlarında kalıcı label, açıklayıcı hata ve başarı mesajı.
- Accordion, tab, modal ve menülerde ARIA yalnız gerektiği kadar ve doğru uygulanmalı.
- Video için altyazı ve mümkünse transkript.
- PDF kaynaklar erişilebilir hazırlanmalı veya eşdeğer HTML özet sunulmalı.
- Yakınlaştırma, büyük metin, mobil yatay/dikey kullanım desteği.
- Hareket azaltma tercihi ve animasyonların durdurulabilmesi.
- Ekran okuyucuyla NVDA/VoiceOver; klavye; renk körlüğü ve düşük görme testleri.
WCAG 2.2, algılanabilir, kullanılabilir, anlaşılabilir ve sağlam olmak üzere dört temel ilke üzerine kuruludur; proje hedefi AA uyumu olmalıdır. [S21]

## 13.3 Güvenlik kontrol listesi

- HTTPS, HSTS, güvenli TLS ve otomatik sertifika yenileme.
- Content Security Policy, X-Content-Type-Options, Referrer-Policy ve Permissions-Policy.
- CMS yönetiminde MFA, güçlü rol ayrımı, IP/risk bazlı erişim ve audit log.
- Formlarda CSRF, rate limiting, bot koruması ve sunucu tarafı doğrulama.
- Dosya yükleme yalnız yönetici panelinde; MIME/virüs kontrolü.
- Bağımlılık ve CMS güncellemeleri için aylık bakım penceresi.
- Günlük yedek, geri dönüş testi ve ayrı ortamlar: development/staging/production.
- Staging ortamı noindex + parola/IP koruması.
- Hata mesajlarında kişisel veya sistem bilgisi sızdırmama.
- Form ve analitik verileri için saklama ve silme politikası.

# 14. KVKK, Hukuk ve Medikal Uyum


## 14.1 Veri minimizasyonu

Sağlık ve genetik veriler özel nitelikli kişisel veridir ve daha sıkı korunmalıdır. Web sitesi genel bilgi ve iletişim amacıyla çalışıyorsa, hasta tanısı, raporu, genetik sonucu veya örnek numarası gibi veriler standart iletişim formunda istenmemelidir. [S22]
- Form mesaj alanında “sağlık/genetik veri paylaşmayın” uyarısı.
- Kişisel sağlık verisi gerektiren ayrı bir süreç varsa, hukuki işleme şartı, erişim, aktarım, saklama ve güvenlik tasarımı ayrıca yapılmalı.
- E-posta, CRM ve çağrı merkezi entegrasyonlarında veri akış haritası çıkarılmalı.
- Yurt dışına veri aktarımı ihtimali varsa güncel KVKK aktarım mekanizmaları hukuk ekibiyle değerlendirilmelidir.
- Form verileri için amaç, hukuki sebep, alıcı grubu, saklama süresi ve haklar aydınlatma metninde açıkça belirtilmelidir.

## 14.2 Çerez yönetimi

Zorunlu olmayan analitik/pazarlama çerezleri kullanıcı tercihinden önce çalışmamalı; kabul, reddet ve tercih seçenekleri eşit görünürlükte sunulmalıdır. KVKK karar ve rehberlerinde aktif eyleme dayalı opt-in ve çerez adı, amacı, süresi ile taraf bilgisinin açıklanması iyi uygulama olarak belirtilmektedir. [S23–S24]

## 14.3 Medikal içerik ve tanıtım güvenliği

- Her iddia resmi kullanım amacı ve onaylı kaynakla eşleşmeli.
- MammaPrint ve BluePrint’in regülasyon statüleri birbirine karıştırılmamalı. [S5–S6]
- “Kemoterapi gereksizdir/gerekmez” gibi bireysel tedavi sonucu veren kesin dil kullanılmamalı.
- Yüzdeler hasta grubu, takip süresi ve karşılaştırma bağlamı olmadan hero mesajı yapılmamalı.
- Hasta hikâyeleri sonuç garantisi gibi sunulmamalı.
- Kılavuz logoları ve marka isimleri kullanım izni ve güncellik açısından kontrol edilmeli.
- Tüm sayfalarda genel tıbbi bilgilendirme; ürün/çalışma sayfalarında bağlama özel dipnotlar bulunmalı.
- Yayın öncesinde Türkiye’de geçerli reklam/tanıtım ve tıbbi cihaz/IVD mevzuatı hukuk ve regülasyon sorumlusu tarafından ayrıca doğrulanmalıdır.

## 14.4 Gerekli yasal sayfalar


| Sayfa | İçerik |
| --- | --- |
| KVKK Aydınlatma | Veri sorumlusu, amaç, yöntem, hukuki sebep, aktarım, haklar, başvuru yolu |
| Çerez Politikası | Çerez tablosu, kategoriler, süre, taraf, tercih değiştirme |
| Gizlilik Politikası | Site ve hizmet kapsamındaki veri işleme genel özeti |
| Kullanım Koşulları | Fikri mülkiyet, içerik kullanımı, sorumluluk sınırları |
| Tıbbi Bilgilendirme | İçeriğin tanı/tedavi yerine geçmediği; hekim değerlendirmesi gereği |
| Marka Bildirimi | MammaPrint ve BluePrint tescilli marka ilişkisi; Agendia/Omnigen rolü |
| Erişilebilirlik Bildirimi | Hedef standart, bilinen sorun ve geri bildirim kanalı |


# 15. Ölçümleme ve KPI Sistemi


## 15.1 Ana KPI’lar


| Hedef | KPI | İlk 6 ay değerlendirme |
| --- | --- | --- |
| Organik görünürlük | Marka dışı tıklama, gösterim, ortalama konum, indekslenen kaliteli sayfa | Aylık; ana konu kümeleri bazında |
| İçerik kalitesi | Organik giriş, scroll, ilgili sayfaya geçiş, geri dönüş | Sayfa ve kategori bazında |
| Hasta etkileşimi | Doktorla konuşma rehberi indirme, hasta merkezi CTA | Dönüşüm oranı; kişisel sağlık verisi toplamadan |
| Hekim etkileşimi | Örnek rapor, numune rehberi, medikal bilgi formu | Nitelikli form ve kurum türü |
| Teknik kalite | CWV geçiş oranı, 404, uptime, form hata oranı | Haftalık/aylık dashboard |
| Editoryal kalite | Onay süresi, güncelleme gecikmesi, eski kaynak sayısı | Aylık içerik yönetişimi |
| Güvenlik/uyum | Çerez consent oranları, veri ihlali, yetkisiz erişim | Olay bazlı ve aylık denetim |


## 15.2 Önerilen olaylar

- cta_testleri_kesfet, cta_hasta_merkezi, cta_hekim_merkezi
- download_doktor_rehberi, download_ornek_rapor, download_numune_rehberi
- contact_submit_general, contact_submit_hcp, medical_info_request
- faq_open, glossary_term_view, internal_search
- publication_filter, publication_outbound_click
- video_start, video_complete, consent_update
- form_error ve form_success; mesaj içeriği analitiğe gönderilmemeli.

## 15.3 Dashboard

- Yönetim özeti: trafik, nitelikli dönüşüm, en iyi içerikler, teknik durum.
- SEO: sorgu kümeleri, landing page, CTR, indeksleme ve zengin sonuç hataları.
- İçerik: kategori performansı, güncelleme ihtiyacı, içerik boşlukları.
- Hekim: kaynak indirme ve medikal iletişim trendleri.
- Teknik: CWV, uptime, error rate, 404 ve yönlendirme zincirleri.

# 16. Geçiş ve Lansman Planı


## 16.1 İçerik envanteri ve karar matrisi


| Mevcut varlık | Karar | Yeni hedef |
| --- | --- | --- |
| / | Yeniden yaz / tasarla | / |
| /en/ | 301 yönlendir | / |
| /mammaprint/ | İçeriği medikal güncelle, URL’yi koru | /mammaprint/ |
| /en/mammaprint/ | 301 yönlendir | /mammaprint/ |
| /blueprint/ | İçeriği medikal güncelle, URL’yi koru | /blueprint/ |
| /en/blueprint/ | 301 yönlendir | /blueprint/ |
| /docs/*.pdf | Sürüm ve geçerlilik denetimi | /kaynaklar/ veya kontrollü dosya URL’leri |
| Görseller | Lisans/kalite/alt metin incelemesi | Yeni medya kütüphanesi |


## 16.2 Lansman öncesi adımlar

1.  Mevcut URL, title, meta, durum kodu, backlink ve trafik envanteri çıkarılır.
2.  Yeni URL eşleme ve 301 yönlendirme dosyası onaylanır.
3.  Tüm tıbbi sayfalar medikal/regülasyon onayından geçer.
4.  Staging’de noindex, erişim ve tarama testleri yapılır.
5.  Mobil/masaüstü görsel QA, tarayıcı ve erişilebilirlik testleri tamamlanır.
6.  Structured data Rich Results Test ve Schema validator ile kontrol edilir.
7.  XML sitemap, robots.txt, canonical, hreflang ve Open Graph doğrulanır.
8.  Core Web Vitals ve performans bütçesi test edilir.
9.  Form teslimi, e-posta, spam, KVKK onayı ve çerez tercihi uçtan uca test edilir.
10.  Yedek alınır; DNS ve geri dönüş planı hazırlanır.
11.  Lansman sonrası Search Console sitemap gönderilir ve kritik URL’ler denetlenir.
12.  İlk 30 gün günlük; sonraki 60 gün haftalık 404, indeks ve trafik takibi yapılır.

## 16.3 SEO kaybını önleme

- Ana ürün URL’lerini mümkün olduğunca korumak.
- Yinelenen /en/ URL’leri doğru tek hedefe yönlendirmek.
- Bir eski URL’yi topluca ana sayfaya yönlendirmemek; en yakın içerik eşleşmesini kullanmak.
- Redirect chain ve loop bırakmamak.
- PDF backlinkleri varsa güncel belgeye veya kaynak sayfasına yönlendirmek.
- Lansmanda içerik sayısını azaltmamak; temel pillar sayfaları hazır olmadan geçiş yapmamak.
- Eski title/meta ve sorgu performansını arşivleyerek kayıp sorguları izlemek.

# 17. Yol Haritası ve Kabul Kriterleri


## 17.1 Fazlar


| Faz | Kapsam | Çıktı |
| --- | --- | --- |
| Faz 0 — Keşif ve onay | Marka/rol, resmi kullanım amacı, Türkiye operasyonu, hedef kullanıcı, mevcut analitik ve teknik altyapı netleştirilir. | Onaylı proje brifi ve içerik sahipleri |
| Faz 1 — Bilgi mimarisi | Site haritası, URL’ler, navigasyon, kullanıcı akışları, içerik envanteri. | Onaylı sitemap ve redirect taslağı |
| Faz 2 — İçerik ve SEO | Ana sayfa, ürün, hasta/hekim, klinik kanıt ve ilk blog içerikleri. | Medikal onaylı lansman içerik paketi |
| Faz 3 — UX/UI | Wireframe, tasarım sistemi, responsive sayfalar, prototip. | Onaylı Figma ve bileşen kütüphanesi |
| Faz 4 — Geliştirme | Frontend, CMS, formlar, arama, SEO, analytics, cookie consent. | Staging’de özellik tamamlanmış sistem |
| Faz 5 — QA ve uyum | Fonksiyon, içerik, medikal, SEO, performans, güvenlik, erişilebilirlik. | Kritik hata sıfır; kabul kriterleri geçildi |
| Faz 6 — Lansman | Yönlendirme, DNS, sitemap, monitoring. | Canlı site ve izleme dashboardu |
| Faz 7 — Büyüme | Blog, içerik güncelleme, CRO, yeni kaynaklar. | Aylık büyüme ve içerik yönetişimi |


## 17.2 MVP kapsamı

- Ana sayfa, MammaPrint, BluePrint, MammaPrint + BluePrint.
- Genomik test nedir ve genomik/genetik farkı.
- Hasta merkezi: uygunluk, süreç, sonuçlar, SSS, doktor rehberi.
- Hekim merkezi: klinik uygunluk, numune, örnek rapor, medikal iletişim.
- Klinik kanıt ana sayfası + MINDACT + NBRST.
- Blog, kategori, yazı ve arama.
- Hakkımızda, Agendia/Omnigen ilişkisi, iletişim ve yasal sayfalar.
- CMS, roller, medikal onay, redirect, sitemap, schema, analytics ve consent.

## 17.3 Lansman kabul kriterleri

☐  Kritik/major fonksiyon hatası yok.
☐  Tüm lansman tıbbi içeriklerinde medikal onay kaydı var.
☐  Eski indeksli URL’lerin %100’ü eşlenmiş; 301 testleri başarılı.
☐  Tüm indexlenebilir sayfalarda benzersiz title, meta, H1 ve canonical.
☐  XML sitemap yalnız 200 dönen canonical URL’leri içeriyor.
☐  Mobil Core Web Vitals hedefleri için laboratuvar testlerinde kabul edilebilir performans; saha izleme aktif.
☐  WCAG 2.2 AA için kritik erişilebilirlik ihlali yok; manuel klavye ve ekran okuyucu testi tamam.
☐  Çerezler tercihten önce kategorisine uygun davranıyor; reddetme kolay.
☐  Formlar kişisel sağlık verisi istemiyor; güvenli ve izlenebilir teslim.
☐  Backup/restore, monitoring ve incident iletişim planı hazır.
☐  Blog editörü kod yazmadan içerik yayımlayabiliyor; onay akışı çalışıyor.

# Ek A — Öncelikli URL ve Meta Planı


| URL | SEO Title taslağı | H1 taslağı |
| --- | --- | --- |
| / | MammaPrint Türkiye | Meme Kanserinde Genomik Testler | MammaPrint Türkiye |
| /mammaprint/ | MammaPrint 70 Gen Meme Kanseri Nüks Riski Testi | MammaPrint 70 Gen Meme Kanseri Nüks Riski Testi |
| /blueprint/ | BluePrint 80 Gen Moleküler Alt Tipleme Testi | BluePrint 80 Gen Moleküler Alt Tipleme Testi |
| /mammaprint-blueprint/ | MammaPrint + BluePrint Testleri | Tamamlayıcı İçgörü | MammaPrint ve BluePrint Birlikte Ne Sağlar? |
| /genomik-test-nedir/ | Genomik Test Nedir? | Meme Kanserinde Gen İfadesi | Genomik Test Nedir? |
| /genomik-test-genetik-test-farki/ | Genomik Test ve Genetik Test Arasındaki Fark | Genomik Tümör Testi ile Kalıtsal Genetik Test Aynı mı? |
| /hastalar-icin/ | MammaPrint Hasta Rehberi | Süreç, Uygunluk ve Sonuçlar | Hastalar ve Yakınları İçin MammaPrint Rehberi |
| /hastalar-icin/kimler-icin-uygun/ | MammaPrint Kimler İçin Değerlendirilebilir? | MammaPrint Testi Kimler İçin Uygun Olabilir? |
| /hastalar-icin/test-nasil-yapilir/ | MammaPrint Testi Nasıl Yapılır? | MammaPrint Test Süreci |
| /hastalar-icin/sonuclari-anlamak/ | MammaPrint Sonuçları Nasıl Anlaşılır? | MammaPrint Risk Sonuçlarını Anlamak |
| /saglik-profesyonelleri/ | MammaPrint Sağlık Profesyonelleri Kaynak Merkezi | Sağlık Profesyonelleri İçin |
| /klinik-kanit/ | MammaPrint Klinik Çalışmaları ve Bilimsel Kanıt | Klinik Kanıt Merkezi |
| /blog/ | Meme Kanseri ve Genomik Testler Blogu | Bilgi Merkezi ve Blog |
| /hakkimizda/ | MammaPrint Türkiye Hakkında | MammaPrint Türkiye |
| /iletisim/ | MammaPrint Türkiye İletişim | Bize Ulaşın |


| Not Title ve meta metinleri yayın öncesinde gerçek SERP görünümü, Search Console verisi ve içerik kapsamıyla test edilmelidir. Anahtar kelime tekrarı yerine açıklık ve tıklama niyeti önceliklidir. |
| --- |


# Ek B — Anahtar Kelime Kümeleri


| Küme | Terimler / varyasyonlar |
| --- | --- |
| MammaPrint marka | mammaprint, mammaprint türkiye, mammaprint testi, mammaprint 70 gen, mammaprint sonuçları |
| Nüks riski | meme kanseri nüks testi, meme kanseri tekrarlama riski testi, uzak nüks riski, meme kanseri nüks skoru |
| Kemoterapi kararı | kemoterapi gerekli mi, meme kanserinde kemoterapi kararı, kemoterapi faydası testi, kemoterapi almadan tedavi |
| Genomik eğitim | genomik test nedir, gen ekspresyon testi nedir, tümör profilleme, moleküler tanı meme kanseri |
| Genomik/genetik farkı | genomik ve genetik farkı, mammaprint genetik test mi, brca mammaprint farkı, kalıtsal meme kanseri testi |
| Uygunluk | mammaprint kimlere yapılır, erken evre meme kanseri testleri, lenf nodu pozitif mammaprint, tümör 5 cm mammaprint |
| Süreç | mammaprint nasıl yapılır, mammaprint doku örneği, parafin blok testi, ffpe nedir, mammaprint kaç günde çıkar |
| Sonuçlar | mammaprint düşük risk, mammaprint yüksek risk, ultralow risk nedir, mammaprint index |
| BluePrint | blueprint testi, 80 gen testi, moleküler alt tipleme, luminal tip, basal tip, her2 tip |
| Karşılaştırma | mammaprint oncotype farkı, genomik testler karşılaştırma, mammaprint prosigna endopredict |
| Klinik kanıt | mindact çalışması, nbrst çalışması, sto-3, mammaprint klinik araştırma |
| Hekim | mammaprint örnek rapor, mammaprint istem formu, numune gönderimi, mammaprint klinik uygunluk |

Bu liste bir başlangıç semantik haritasıdır; arama hacmi tahmini değildir. Yayın öncesinde Google Search Console, Keyword Planner ve gerçek kullanıcı soruları ile önceliklendirilmelidir.

# Ek C — İlk 30 Blog İçeriği


| Tür | Başlık | Birincil niyet |
| --- | --- | --- |
| Pillar | Genomik test nedir? Meme kanserinde neyi ölçer? | genomik test nedir |
| Pillar | MammaPrint testi nedir? 70 gen testi nasıl çalışır? | mammaprint testi nedir |
| Pillar | BluePrint testi nedir? Moleküler alt tipleme ne sağlar? | blueprint testi |
| Eğitim | Genomik test ile kalıtsal genetik test arasındaki fark | genomik genetik farkı |
| Eğitim | MammaPrint ile BRCA testi aynı şey mi? | mammaprint brca farkı |
| Hasta | Meme kanseri tanısından sonra doktorunuza sorabileceğiniz 10 soru | meme kanseri doktora sorular |
| Hasta | MammaPrint testi için ek biyopsi gerekir mi? | mammaprint biyopsi |
| Hasta | MammaPrint testi hangi doku örneğinden yapılır? | mammaprint doku örneği |
| Hasta | MammaPrint sonuçları kaç günde çıkar? | mammaprint kaç günde |
| Hasta | MammaPrint Low Risk sonucu genel olarak ne anlama gelir? | mammaprint düşük risk |
| Hasta | MammaPrint High Risk sonucu genel olarak ne anlama gelir? | mammaprint yüksek risk |
| Hasta | UltraLow Risk kavramı nedir? | mammaprint ultralow risk |
| Eğitim | Nüks ile metastaz arasındaki fark nedir? | nüks metastaz farkı |
| Eğitim | Erken evre meme kanseri ne demektir? | erken evre meme kanseri |
| Tedavi | Genomik testler kemoterapi kararına nasıl yardımcı olur? | kemoterapi kararı genomik test |
| Tedavi | Tedavi kararı neden yalnızca tek bir test sonucuna göre verilmez? | meme kanseri tedavi kararı |
| BluePrint | Luminal, HER2 ve Basal moleküler alt tipler nedir? | moleküler alt tip meme kanseri |
| BluePrint | Patoloji sonucu ile moleküler alt tip aynı şey mi? | ihc blueprint farkı |
| Klinik | MINDACT çalışması neyi araştırdı? | mindact çalışması |
| Klinik | NBRST çalışmasının BluePrint açısından önemi | nbrst blueprint |
| Klinik | STO-3 ve UltraLow Risk verileri nasıl okunmalı? | sto-3 ultralow |
| Klinik | Klinik risk ve genomik risk arasındaki fark | klinik genomik risk |
| Hekim | FFPE nedir ve genomik testlerde neden kullanılır? | ffpe nedir |
| Hekim | MammaPrint örnek raporunda hangi alanlar bulunur? | mammaprint örnek rapor |
| Hekim | Numune gönderiminde dikkat edilmesi gerekenler | mammaprint numune gönderimi |
| Karşılaştırma | Meme kanserinde kullanılan genomik testler aynı soruya mı cevap verir? | genomik test karşılaştırma |
| Sözlük | Prognostik ve prediktif test arasındaki fark | prognostik prediktif farkı |
| Sözlük | ER, PR ve HER2 ne demektir? | er pr her2 nedir |
| Güncel veri | Yeni bir MammaPrint yayını nasıl değerlendirilir? | mammaprint yayınları |
| Kurumsal | MammaPrint ve BluePrint’in Türkiye’deki bilgi ve destek süreci | mammaprint türkiye iletişim |


# Ek D — Kaynaklar

[S1] MammaPrint Türkiye ana sayfa — https://mammaprintturkiye.com/
[S2] MammaPrint Türkiye /en/mammaprint sayfası — https://mammaprintturkiye.com/en/mammaprint/
[S3] MammaPrint Türkiye /mammaprint sayfası — https://mammaprintturkiye.com/mammaprint/
[S4] MammaPrint Türkiye BluePrint sayfası — https://mammaprintturkiye.com/blueprint/
[S5] Agendia MammaPrint sayfası — https://agendia.com/mammaprint/
[S6] Agendia BluePrint sayfası — https://agendia.com/blueprint/
[S7] Agendia For Patients — https://agendia.com/for-patients/
[S8] Agendia Resources — https://agendia.com/resources/
[S9] Agendia Breast Cancer Blog — https://agendia.com/breast-cancer-blog/
[S10] Agendia Landmark Trials — https://agendia.com/landmark-trials/
[S11] Agendia Publications & Abstracts — https://agendia.com/publications/
[S12] Agendia About Us — https://agendia.com/about-us/
[S13] Google SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
[S14] Google: Helpful, Reliable, People-First Content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
[S15] Google: Structured Data Introduction — https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
[S16] Google: General Structured Data Guidelines — https://developers.google.com/search/docs/appearance/structured-data/sd-policies
[S17] Google: Link Best Practices — https://developers.google.com/search/docs/crawling-indexing/links-crawlable
[S18] Google: AI Features Optimization Guide — https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
[S19] web.dev: Web Vitals — https://web.dev/articles/vitals
[S20] web.dev: Core Web Vitals Thresholds — https://web.dev/articles/defining-core-web-vitals-thresholds
[S21] W3C Web Content Accessibility Guidelines 2 Overview — https://www.w3.org/WAI/standards-guidelines/wcag/
[S22] KVKK: Özel Nitelikli Kişisel Veriler — https://www.kvkk.gov.tr/Icerik/2051/Ozel-Nitelikli-Kisisel-Veriler
[S23] KVKK: Çerez Uygulamaları Hakkında Rehber — https://www.kvkk.gov.tr/SharedFolderServer/CMSFiles/fb193dbb-b159-4221-8a7b-3addc083d33f.pdf
[S24] KVKK Kurul Kararı 2023/1645 özeti (çerez opt-in iyi uygulaması) — https://www.kvkk.gov.tr/Icerik/7765/2023-1645
[S25] Türkiye Klinikleri: Meme Kanserinde Genomik Testler — https://www.turkiyeklinikleri.com/article/tr-meme-kanseri-kliniginde-kullanilan-gen-ekspresyonu-profili-iceren-genomik-testler-94469.html
[S26] Acıbadem: Meme Kanseri İçin Genetik Testler — https://www.acibadem.com.tr/ilgi-alani/meme-kanserinde-genetik-testler/

| Son değerlendirme En yüksek SEO ve marka etkisi; teknik temizlik, güvenilir tıbbi içerik, hasta/hekim ayrımı, düzenli blog, klinik kanıt kütüphanesi ve ölçülebilir CMS iş akışının birlikte kurulmasıyla elde edilir. |
| --- |
