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

## 3. Marka görseli (logo) kararı

Bkz. `docs/asset-policy.md` — durum hâlâ **ONAY BEKLİYOR**. Proje kök dizinine eklenen 6
logo PDF dosyası siteye entegre edilmedi; bu bir kod/tasarım kararı değil, doğrulanabilir
yazılı marka kullanım onayı gerektiren bir iş/hukuk kararıdır.

## Sonraki adım

Bu belgedeki tüm kararlar kod tabanına uygulandı. Sonraki adım: test (lint/typecheck/build),
görsel doğrulama, commit, push ve Docker yeniden derleme.
