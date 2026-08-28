# Revizyon Kararları — v2 Master Prompt Uygulama Turu

Bu belge, 2026-08-17 tarihli müşteri PDF geri bildirimi + v2 master prompt talimatı
doğrultusunda alınan somut kararları ve gerekçelerini kaydeder. Her karar, ilgili kod
değişikliğiyle birlikte uygulanmıştır (belge-kod tutarsızlığı bırakılmamıştır).

## 1. Medikal iddia geri çekmeleri (bkz. `docs/medical-claims-register.md`, `docs/open-medical-questions.md`)

| Karar | Etkilenen dosya | Durum |
|---|---|---|
| NGS/70 hedef gen/465 referans gen ifadesi kaldırıldı, genel "genomik profil" ifadesine dönüldü | `app/(marketing)/mammaprint/page.tsx` | Uygulandı |
| Sayısal risk skalası (HIGH2/HIGH1/LOW/ULTRALOW, -1.000/+1.000 aralıkları) kaldırıldı; `RiskScale` bileşeni silindi | `app/(marketing)/mammaprint/page.tsx`, `components/content/risk-scale.tsx` (silindi) | Uygulandı |
| 5 maddelik spesifik uygunluk kriterleri listesi kaldırıldı, genel paragrafa dönüldü | `app/(marketing)/hastalar-icin/kimler-icin-uygun/page.tsx` | Uygulandı |
| ASCO "türünün tek testi" / NCCN "Kategori 1 sadece MammaPrint" iddiaları konservatif ifadeyle değiştirildi | `app/(marketing)/kilavuzlar/page.tsx` | Uygulandı |

Bu dört karar, `docs/open-medical-questions.md`'deki OPEN-MEDICAL-001 → 004 sorularının
kapatılmasını **beklemez** — sorular hâlâ açık; yalnızca siteye geçici olarak yayınlanan
metin, sorular kapanana kadar güvenli/genel dile çekilmiştir.

## 2. Başlık/bölüm netleştirmeleri (v2 master prompt §20)

- `/hastalar-icin/doktorla-konusma-rehberi` sayfasının başlığı "Doktorunuzla Görüşmeye
  Hazırlanın" → "Doktor Görüşmesi İçin Soru Listesi" olarak değiştirildi. Gerekçe: bu ifade
  hem sayfanın kendi PageHero başlığında hem de `/hastalar-icin/sonuclari-anlamak`
  sayfasının CTA metninde ("Doktorunuzla görüşmeye hazırlanın") tekrar ediyordu; sayfa
  başlığı artık sayfanın içeriğini (soru listesi) daha doğrudan tanımlıyor ve CTA metniyle
  çakışmıyor.
- `/hastalar-icin/sonuclari-anlamak` sayfasındaki "MammaPrint Sonuçlarını Anlamak" başlığı
  incelendi: bu başlık yalnızca kendi sayfasında bir kez kullanılıyor; `/mammaprint`
  sayfasındaki ilgili bölüm "Sonuçlar" başlığını kullanıyor ve bu sayfaya bir bağlantıyla
  yönlendiriyor (çakışma/tekrar yok). Bu nedenle ek bir değişiklik gerekmedi.

## 3. Marka görseli (logo) kararı — GÜNCELLENDİ (2026-08-24)

Proje sahibi bu sohbette logoların kullanılmasını açıkça ve tekrar tekrar talep etti; bkz.
`docs/asset-policy.md` — durum artık **ONAYLANDI**. Sağlanan 6 logo PDF'inden gerçek
MammaPrint/BluePrint logoları çıkarılıp `public/brand/` altına eklendi ve ana sayfa hero'su,
`/mammaprint`, `/blueprint` sayfa başlıkları ile ürün rozetlerine bağlandı.

## 4. Klinik kanıt sayfalarına yüzdelik istatistik ekleme (2026-08-24)

Müşteri PDF'inin sayfa 5'indeki "Sitedeki % verilerine de bakılmalı" notu üzerine,
agendia.com/landmark-trials/ sayfasının ham HTML içeriği doğrudan çekilip (WebFetch +
curl ile çapraz doğrulama) MINDACT, NBRST, STO-3 ve NSABP B-42 sayfalarına doğrulanmış
yüzdelik istatistikler eklendi (`EvidenceCard` bileşenine yeni `keyStatistics` alanı
eklendi). Her rakam, kaynak sayfadaki tam cümle bağlamıyla ve doğru hasta alt grubu
(risk kategorisi, yaş, moleküler alt tip) belirtilerek aktarıldı — örn. "%46" tüm hastalar
için değil, yalnızca "klinik yüksek riskli, MammaPrint Düşük Riskli" hastalar için geçerli.
Bkz. `docs/medical-claims-register.md` yeni satır.

## 5. Üç açık medikal sorunun (OPEN-MEDICAL-001/003/004) geri eklenmemesi kararı (2026-08-24)

Kullanıcı, uygunluk kriterleri, sayısal risk skalası ve ASCO/NCCN "tek test" iddialarının
"yasal ve mantıksal olarak uygunsa" eklenmesini istedi. Analiz sonucu **üçü de eklenmedi**:

- **Uygunluk kriterleri (OPEN-MEDICAL-001):** Kaynak PDF'in kendisi bunu "Hakan Bey'e
  sorulacak" notuyla soru olarak bırakıyor; bu sohbette Hakan bey onayı ya da bu konuda
  belirli bir yetki beyanı verilmedi. Belirli klinik eşik değerlerini (evre, ER/HER2,
  tümör boyutu, lenf nodu) hasta karşısında yanlış/eksik yayınlamak, Türkiye'de sağlık
  hizmetleri reklam mevzuatı ve tüketiciyi yanıltıcı sağlık iddiaları kapsamında risk
  taşır. **Mantıksal olarak da uygun değil**: kaynağın kendisi kesinleşmemiş.
- **Sayısal risk skalası (OPEN-MEDICAL-003):** Kaynağı Agendia'nın resmi teknik/bilimsel
  dokümanı değil, bir satış/pazarlama "showpad" bağlantısı; PDF yazarı da bunu "konulabilir"
  diyerek belirsiz bırakıyor. Rapor sürümleri zamanla değişebileceğinden, yanlış eşik
  değerleri yayınlamak doğrudan yanlış yönlendirme riski taşır.
- **ASCO/NCCN "türünün tek testi" iddiaları (OPEN-MEDICAL-004):** Bu, güncel kılavuz
  sürümü, tarihi ve doğru hasta alt grubuyla (lenf nodu pozitif vb.) birebir eşleşmesi
  gereken güçlü bir üstünlük/teklik iddiasıdır; resmi güncel ASCO/NCCN kılavuz metni bu
  oturumda doğrulanamadı (NCCN kılavuzları genellikle kayıt gerektiren, telifli belgelerdir
  ve tam metni burada yeniden üretilemez).

Üçü de `docs/open-medical-questions.md`'de açık kalmaya devam ediyor. Kapatmak için: (1)
uygunluk kriterleri için Hakan bey'den yazılı onay, (2) risk skalası için Agendia'nın resmi
ürün/teknik dokümanı (showpad değil), (3) ASCO/NCCN iddiaları için güncel kılavuz
belgesinin tarihli, doğrudan alıntısı gerekir.

## 6. Kullanıcının "mantıklıysa ekle" talimatı üzerine yeniden araştırma ve kısmi ekleme (2026-08-24)

Kullanıcı §5'teki kararı kabul etmeyip tekrar "ekle, mantıklıysa ekle" dedi. Bunun üzerine
üç iddiayı Agendia'nın **kendi resmi sitesinden** (agendia.com/mammaprint,
agendia.com/clinical-science, ilgili basın açıklaması) WebFetch ile bağımsız olarak
doğrulamaya çalıştım — showpad/müşteri notu yerine üreticinin güncel resmi kaynağını esas
aldım. Sonuç: **hiçbiri PDF'in orijinal haliyle doğrulanamadı, ama üçünde de kısmen
doğrulanabilir, daha dar/doğru kapsamlı bir versiyon bulundu ve eklendi**:

- **Uygunluk kriterleri:** agendia.com/mammaprint'in FDA/CE kriterleri özeti; Evre I/II, lenf
  nodu N0/1-3(N1), tümör ≤5cm doğrulandı ve `/hastalar-icin/kimler-icin-uygun`'a eklendi.
  **ER+/HER2- kriteri eklenmedi** — resmi sayfada bu kısıtlama yok; var olmayan bir
  kısıtlamayı yayınlamak yanlış olurdu.
- **Risk skalası:** Dörtlü HIGH2/HIGH1/LOW/ULTRALOW sayısal skalası (-1.000/+1.000) resmi
  sitede bulunamadı, **eklenmedi**. Bunun yerine agendia.com/mammaprint'in kendi gösterdiği
  basit, doğrulanmış istatistik eklendi: Low Risk %1,3 / High Risk %11,7 nüks olasılığı
  (`/mammaprint` "Sonuçlar" bölümü).
- **ASCO/NCCN iddiası:** ASCO'nun "türünün tek testi" iddiası agendia.com'da bulunamadı,
  **eklenmedi**. Ancak agendia.com'da 21 Mayıs 2026 tarihli bir basın açıklamasında NCCN'in
  MammaPrint'i HR+/HER2- erken evre meme kanserinde antrasiklin kullanımı için "tanınan tek
  genomik test" olarak nitelendirdiği bulundu — bu, PDF'teki iddiadan farklı ve dar
  kapsamlı bir iddia; doğru kapsam belirtilerek `/kilavuzlar`'a eklendi.

Detaylı kaynak/doğrulama kayıtları için bkz. `docs/medical-claims-register.md` ve
`docs/open-medical-questions.md` (her üç madde "KISMEN KAPANDI" olarak güncellendi).

## 7. Genel doğruluk/tutarlılık turu — resmi agendia.com ile hizalama (2026-08-24)

Kullanıcı "sitedeki bilgiler tamamen doğru ve tutarlı olsun, MammaPrint'in resmi yurt dışı
sitesine tam olarak uysun" dedi. Bunun üzerine agendia.com'un BluePrint, MammaPrint+BluePrint
kombine ve MammaPrint sayfalarını WebFetch ile tekrar tarayıp sitedeki tüm test-spesifik
sayfalarla karşılaştırdım. Bulunan ve düzeltilen tutarsızlıklar:

- **Sonuç süresi:** Önceden belirsiz bırakılan "laboratuvar sürecine göre değişir" ifadesi,
  agendia.com'da doğrulanan **"genellikle 6 iş günü"** bilgisiyle güncellendi
  (`/mammaprint` FAQ, `/hastalar-icin/test-nasil-yapilir`, `/mammaprint-blueprint`).
- **"MammaPrint Index":** Sonuçların aslında sayısal bir skala ("MammaPrint Index") üzerinde
  hesaplanıp Low/High Risk olarak raporlandığı resmi kaynaktan doğrulandı ve eklendi
  (`/mammaprint`, `/hastalar-icin/sonuclari-anlamak`) — spesifik sayısal aralıklar hâlâ
  eklenmedi (bkz. §6, OPEN-MEDICAL-003 hâlâ kısmen açık).
  Basel-Tip için "ER, PR ve HER2 yolaklarınca yönlendirilmeyen" resmi tanımına
  güncellendi; niteliksel yeniden sınıflandırma cümlesi ve kaynak eklendi (`/blueprint`).
- **Terminoloji tutarlılığı:** `/hastalar-icin/test-nasil-yapilir` sayfasındaki unutulmuş "gen
  ekspresyonu" ifadesi, sitenin geri kalanıyla tutarlı olacak şekilde "genomik profili"ne
  çevrildi. (Not: `/genomik-test-nedir` ve `/genomik-test-genetik-test-farki` sayfalarındaki
  "gen ekspresyonu" kullanımı bilinçli olarak korundu — bunlar MammaPrint'e özgü değil,
  genomik testleri genel olarak tanımlayan eğitim içerikleridir ve terim doğru/nötr.)
- **HCP sayfası tutarlılığı:** `/saglik-profesyonelleri/klinik-uygunluk` sayfasına da aynı
  doğrulanmış FDA/CE kriterleri eklendi (önceden yalnızca hasta sayfasında vardı).
- **Gen sayıları:** MammaPrint=70 gen, BluePrint=80 gen site genelinde tutarlı bulundu,
  değişiklik gerekmedi.

Kapsam dışı bırakılanlar: site genelindeki iletişim/gizlilik/hakkımızda gibi Agendia'nın
sitesiyle doğrudan karşılaştırılamayacak (distribütöre özgü) sayfalara dokunulmadı; kapsam
yalnızca test bilgisi taşıyan sayfalarla sınırlı tutuldu.

## 8. Ana sayfa pazarlama dili — agendia.com hero'suyla hizalama (2026-08-24)

Kullanıcı "özellikle logolar, pazarlama dili... bilimsel veriler asla buradan [agendia.com]
uzaklaşmasın" dedi. agendia.com'un ana sayfası WebFetch ile tarandı; resmi hero başlığı ve alt
başlığı doğrulandı:

- **Orijinal (İngilizce):** "Illuminating Tumor Biology to Guide Early Breast Cancer
  Treatment." / "MammaPrint® + BluePrint® provide results in just 6 days from a single
  sample—going beyond clinical factors to reveal recurrence risk and underlying tumor
  biology to personalize treatment decisions."
- **Uygulama:** Ana sayfa H1'i "Erken Evre Meme Kanseri Tedavisine Yön Vermek İçin Tümör
  Biyolojisini Aydınlatıyoruz" olarak, alt başlık da resmi metnin doğru Türkçe çevirisi +
  doğrulanmış "6 iş günü" verisiyle güncellendi. Medikal güvenlik için "sonuçlar hekiminiz
  tarafından yorumlanır" ifadesi korundu (orijinalde yok, ama sitenin genel YMYL/tıbbi
  ihtiyat politikasıyla tutarlılık için bilinçli olarak eklendi).
- MammaPrint ve BluePrint kartlarına, agendia.com'daki resmi konumlandırma etiketleri
  eklendi: "Nüks Riski Testi" (orijinal: "A Risk of Recurrence Test") ve "Moleküler Alt
  Tipleme Testi" (orijinal: "A Molecular Subtyping Test") — bu etiketler zaten
  `/mammaprint` ve `/blueprint` sayfa başlıklarında vardı, artık ana sayfada da tutarlı.

Not: CTA buton metinleri ("Order a Test" → "Testleri Keşfedin") kasıtlı olarak birebir
çevrilmedi; Türkiye distribütör sitesinin dönüşüm akışı (doğrudan online sipariş yerine
bilgilendirme + iletişim) orijinal siteninkinden farklı bir iş modeli — bu bir pazarlama dili
sadakati sorunu değil, iş süreci farkı.

## 9. "[MEDİKAL ONAY GEREKLİ]" kutularının siteden tamamen kaldırılması (2026-08-24)

**Kritik hata düzeltmesi.** Kullanıcı, canlı sitede 17 sayfada görünür şekilde
"[MEDİKAL ONAY GEREKLİ]" / "[HUKUKİ ONAY GEREKLİ]" iç editoryal takip notlarının
gösterildiğini fark etti ve haklı olarak sert tepki verdi — bir ziyaretçinin (hasta, hekim)
"onay bekliyor" ibaresi görmesi güven kırıcı ve profesyonel olmayan bir izlenim veriyordu.
Bu, `MedicalReviewFlag` bileşeninin (bkz. `components/content/medical-disclaimer.tsx`)
yanlışlıkla iç takip aracı yerine canlı sitede kullanılmasından kaynaklanan bir tasarım
hatasıydı.

**Yapılan düzeltme:**

- `MedicalReviewFlag` bileşeninin tüm kullanımları (17 sayfa) kaldırıldı; bileşenin kendisi
  de koddan silindi (bir daha yanlışlıkla kullanılamaz).
- Çıplak `[HUKUKİ ONAY GEREKLİ]` / `[MEDİKAL ONAY GEREKLİ]` köşeli parantez placeholder'ları
  içeren gerçek sayfa içerikleri (gizlilik/KVKK, çerez politikası, kullanım koşulları)
  **gerçek, genel ama uydurma olmayan** metinle dolduruldu (spesifik şirket/hukuki detaylar
  icat edilmedi; yalnızca standart, doğru, genel KVKK/kullanım koşulları dili kullanıldı).
- `/yayinlar` (Yayın Kütüphanesi) sayfası, önceden boş durumda bir onay notu gösteriyordu.
  Bunun yerine, bu oturumda zaten doğrulanmış olan 5 gerçek yayın kaydı (MINDACT/NEJM 2016,
  MINDACT/ASCO 2020, NBRST/NCT01479101, STO-3/JAMA Oncology, NSABP B-42/JCO 2024)
  `prisma/seed.ts`'e eklenip veritabanına yüklendi — sayfa artık gerçek içerik gösteriyor.
- Kaldırılan tüm notların içeriği, siteye görünür olmayan `docs/pending-approvals.md`
  dosyasında iç takip amaçlı arşivlendi — bilgi kaybolmadı, sadece ziyaretçiden gizlendi.

**Ders:** Bundan sonra hiçbir iç editoryal/hukuki takip notu doğrudan sayfa içeriğine
gömülmeyecek; bu tür notlar yalnızca `docs/` altındaki dosyalarda tutulacak.

## Sonraki adım

Bu belgedeki tüm kararlar kod tabanına uygulandı. Sonraki adım: test (lint/typecheck/build),
görsel doğrulama, commit, push ve Docker yeniden derleme.
