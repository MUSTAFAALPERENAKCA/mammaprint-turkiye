# MammaPrint Türkiye

MammaPrint ve BluePrint testleri hakkında hasta ve sağlık profesyonelleri için güvenilir bilgi
platformu. Bu repo, `MammaPrint_Turkiye_Web_Sitesi_Strateji_Dokumani_2026.docx` strateji
dokümanına dayanan tam yeniden geliştirme çalışmasını içerir.

Proje dokümantasyonu için önce [`docs/`](./docs) klasörüne bakın:

- [`docs/requirements-matrix.md`](./docs/requirements-matrix.md) — gereksinim izlenebilirlik matrisi (tek doğruluk kaynağı)
- [`docs/implementation-plan.md`](./docs/implementation-plan.md) — faz planı ve güncel durum
- [`docs/architecture-decision-record.md`](./docs/architecture-decision-record.md) — mimari kararlar ve gerekçeleri
- [`docs/design-system.md`](./docs/design-system.md) — tasarım tokenları
- [`docs/content-model.md`](./docs/content-model.md) — CMS içerik modeli
- [`docs/content-gaps.md`](./docs/content-gaps.md) — henüz yazılmamış/onaylanmamış içerik listesi

## Teknoloji yığını

Next.js (App Router, TypeScript strict) · Tailwind CSS v4 · PostgreSQL + Prisma · Auth.js
(credentials + rol tabanlı yetkilendirme) · Vitest · Docker. Gerekçeler için bkz.
[`docs/architecture-decision-record.md`](./docs/architecture-decision-record.md).

## Yerel kurulum

Gereksinimler: Node.js 20+, Docker Desktop (yerel PostgreSQL için).

```bash
# 1. Bağımlılıkları kur
npm install

# 2. Ortam değişkenlerini kopyala ve AUTH_SECRET üret
cp .env.example .env
# .env içindeki AUTH_SECRET değerini şu komutla üretebilirsiniz:
openssl rand -base64 32

# 3. Yerel PostgreSQL'i başlat
# Not: docker-compose.yml, bu makinede 5432/5433'ün başka projeler tarafından
# kullanıldığı tespit edildiği için veritabanını host portu 5434'e eşler.
# Kendi makinenizde farklıysa docker-compose.yml + .env DATABASE_URL'i güncelleyin.
docker compose up -d db

# 4. Migration'ları uygula ve seed verisini yükle
npx prisma migrate dev
npm run db:seed

# 5. Geliştirme sunucusunu başlat
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır. Yönetim paneli
[http://localhost:3000/admin](http://localhost:3000/admin) adresindedir; seed edilen giriş bilgileri:

- E-posta: `admin@mammaprintturkiye.com`
- Şifre: `changeme123` (veya `SEED_ADMIN_PASSWORD` ortam değişkeniyle özelleştirilebilir)

**Bu şifre yalnızca yerel geliştirme içindir.** Production'da farklı bir şifre kullanın ve ilk
girişten sonra değiştirin (bkz. `docs/security-checklist.md`, Faz 5'te oluşturulacak).

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript tip kontrolü |
| `npm run test` | Vitest birim/entegrasyon testleri |
| `npm run db:migrate` | Prisma migration (geliştirme) |
| `npm run db:seed` | Seed verisini yükle (redirect'ler, blog kategorileri, admin kullanıcı) |
| `npm run db:studio` | Prisma Studio (veritabanı arayüzü) |

## Docker ile çalıştırma

```bash
docker compose up -d
```

`app` servisi `Dockerfile` üzerinden production build alır; `db` servisi PostgreSQL'i host'un
5434 portuna (container içinde standart 5432) eşler. `.env` dosyanızın `docker-compose.yml`
içindeki `app` servisi için `env_file` olarak okunduğunu unutmayın.

## Proje durumu

Bu repo şu anda **Faz 1 (Temel Altyapı)** aşamasındadır: proje iskeleti, veritabanı şeması,
kimlik doğrulama/rol sistemi, temel layout (header/mega menü/footer/mobil nav), SEO altyapısı
(sitemap/robots/redirect/JSON-LD) ve CI hattı kurulmuştur. Sayfa içerikleri (Faz 2) ve blog/CMS
akışı (Faz 3) henüz eklenmemiştir — bkz.
[`docs/implementation-plan.md`](./docs/implementation-plan.md) ve
[`docs/content-gaps.md`](./docs/content-gaps.md).

## Bilinen teknik notlar

- Next.js 16, `middleware.ts` dosya kuralını "proxy" lehine kullanımdan kaldırdı (deprecation
  warning görülür); işlevsellik etkilenmez, gelecekte `proxy.ts`'e taşınmalıdır.
- `docker-compose.yml`'deki host port eşlemesi (5434) bu geliştirme makinesindeki port
  çakışmalarına göre seçilmiştir; farklı bir makinede 5432 kullanılabilir.
