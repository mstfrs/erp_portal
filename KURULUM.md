# 🚀 CULINARY PORTAL - KURULUM REHBERİ

## 📋 ÖN KOŞULLAR
- Node.js 18+ yüklü olmalı
- npm veya yarn kurulu olmalı
- ERPNext backend erişimi (http://63.176.180.142:8001)

---

## 🔧 KURULUM ADIMLARI

### 1️⃣ Proje Dizinine Git
```bash
cd /home/idris/culinary-nextjs-portal-bench/erp_portal
```

### 2️⃣ Bağımlılıkları Yükle
```bash
npm install
```

veya yarn kullanıyorsan:
```bash
yarn install
```

### 3️⃣ Environment Variables Ayarla
`.env.local` dosyası zaten oluşturuldu. Gerekirse düzenle:
```bash
nano .env.local
```

**Önemli:** `NEXTAUTH_SECRET` değerini production'da mutlaka değiştir:
```bash
# Güvenli secret oluştur
openssl rand -base64 32
```

### 4️⃣ Development Server'ı Başlat
```bash
npm run dev
```

Tarayıcıda aç: **http://localhost:3000**

---

## 🎯 KULLANILABILIR KOMUTLAR

```bash
# Development (Turbopack ile - hızlı)
npm run dev

# Production build
npm run build

# Production server
npm run start

# Linting
npm run lint

# Frappe bağlantısını test et
npm run test:frappe

# Login test et
npm run test:login
```

---

## 📁 PROJE YAPISI

```
erp_portal/
├── app/
│   ├── auth/              # Login/Register sayfaları
│   ├── products/          # Ürün listeleme/detay
│   ├── orders/            # Sipariş yönetimi
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   └── store/             # Zustand state management
│
├── services/              # API servisleri
│   ├── auth.js           # NextAuth config
│   ├── items/            # Ürün servisleri
│   └── suppliers/        # Tedarikçi servisleri
│
├── public/               # Static files
├── next.config.mjs       # Next.js config (API proxy)
├── tailwind.config.js    # Tailwind CSS config
└── package.json          # Dependencies
```

---

## 🔐 AUTH SİSTEMİ

### Login Endpoint
- **URL:** `http://63.176.180.142:8001/api/method/login`
- **Method:** POST
- **Body:**
```json
{
  "usr": "email@example.com",
  "pwd": "password"
}
```

### NextAuth Pages
- Login: `http://localhost:3000/auth/login`
- Register Customer: `http://localhost:3000/auth/register/customer`
- Register Supplier: `http://localhost:3000/auth/register/supplier`

---

## 🛍️ ANA ÖZELLİKLER

### ✅ Mevcut Özellikler
1. **Authentication**
   - ERPNext ile entegre login/register
   - Session management (NextAuth)
   - User type bazlı yetkilendirme

2. **Product Management**
   - Ürün listeleme
   - Ürün detay sayfası
   - Kategori filtreleme
   - Arama

3. **Order Management**
   - Sipariş oluşturma
   - Sipariş takibi
   - Order timeline

4. **UI Components**
   - HeroUI (Modern component library)
   - Responsive design
   - Dark/Light mode hazır

### 🔄 API Proxy
Next.js otomatik olarak `/api/*` isteklerini ERPNext'e yönlendirir:
```javascript
// next.config.mjs içinde
/api/:path* → http://63.176.180.142:8001/api/:path*
```

---

## 🧪 TEST

### 1. Backend Bağlantısı Test Et
```bash
npm run test:frappe
```

### 2. Login Test Et
```bash
npm run test:login
```

### 3. Manuel Test
```bash
# Tarayıcıda
http://localhost:3000

# Test kullanıcısı ile giriş yap (ERPNext'teki mevcut kullanıcı)
```

---

## 🐛 SORUN GİDERME

### Port 3000 Kullanımda
```bash
# Farklı port kullan
PORT=3001 npm run dev
```

### ERPNext Bağlantı Hatası
```bash
# Backend erişilebilir mi kontrol et
curl http://63.176.180.142:8001/api/method/frappe.auth.get_logged_user

# CORS hatası varsa ERPNext'te CORS ayarlarını kontrol et
```

### Build Hatası
```bash
# node_modules sil ve tekrar yükle
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS Çalışmıyor
```bash
# Tailwind config'i yeniden oluştur
npx tailwindcss init -p
```

---

## 📚 DÖKÜMANTASYON

Proje klasöründe detaylı dökümantasyon mevcut:
- **PROJECT_PLAN.md** - 10 haftalık geliştirme planı
- **FRONTEND_GUIDE.md** - Component library ve best practices
- **BACKEND_API_SPEC.md** - API endpoint'leri ve kullanım
- **DATABASE_SCHEMA.md** - Veritabanı yapısı

---

## 🚀 PRODUCTION DEPLOYMENT

### 1. Build Al
```bash
npm run build
```

### 2. Production Server Başlat
```bash
npm run start
```

### 3. Vercel'e Deploy (Önerilen)
```bash
# Vercel CLI kur
npm i -g vercel

# Deploy et
vercel
```

**Environment Variables (Vercel):**
- `NEXT_PUBLIC_ERPNEXT_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

---

## 📞 DESTEK

- **Dökümantasyon:** Proje içindeki .md dosyaları
- **ERPNext API:** https://frappeframework.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **HeroUI:** https://heroui.com

---

## ✅ HIZLI BAŞLANGIÇ

```bash
# Tek komutla başla
cd /home/idris/culinary-nextjs-portal-bench/erp_portal && \
npm install && \
npm run dev
```

Tarayıcı: **http://localhost:3000** 🎉

---

**Son Güncelleme:** 8 Kasım 2025  
**Proje:** Culinary Portal v0.1  
**Framework:** Next.js 15.5.2

