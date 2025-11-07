# 🎯 CULINARY PORTAL - PROJE PLANI

## 📋 PROJE ÖZET

**Proje Adı:** Culinary Portal  
**Tip:** B2B Müşteri/Bayi/Tedarikçi Portalı  
**Backend:** ERPNext v15 (Frappe)  
**Frontend:** Next.js 14 (App Router)  
**Durum:** Auth tamamlandı, geliştirme aşamasında  
**Tahmini Süre:** 10 hafta

---

## 🎬 PROJE AKIŞI

### Kullanıcı Yolculuğu

#### 👤 Müşteri (Customer)
1. Portala kayıt ol → Firma bilgileri + yetkili kişi
2. Anlaşma formunu oku ve imzala
3. **Admin ERPNext'te onaylar** → Ürünler ve fiyatlar belirlenir
4. Portalde sadece anlaşmalı ürünleri görür
5. Sepete ekle → Sipariş ver → Ödeme yap (Stripe/Havale)
6. Sipariş takibi yap → Fatura indir

#### 🏭 Tedarikçi (Supplier)
1. Portala kayıt ol → Firma bilgileri
2. Anlaşma formunu imzala
3. **Admin ERPNext'te onaylar** → Tedarik koşulları belirlenir
4. Gelen siparişleri görüntüle
5. Sipariş durumunu güncelle (Hazırlanıyor, Kargoya verildi)
6. Stok yönetimi yap
7. Satış raporlarını görüntüle

#### 👨‍💼 Admin (ERPNext)
1. Yeni kayıtları onayla/reddet
2. Müşteri-Ürün anlaşmaları oluştur (hangi ürün, hangi fiyat)
3. Tedarikçi-Ürün ilişkilendirmesi yap
4. Siparişleri yönet
5. Raporları görüntüle

---

## 🏗️ MİMARİ YAPISI

```
┌─────────────────────────────────────────────────────┐
│                  NEXT.JS FRONTEND                   │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │   Customer   │  │   Supplier   │  │   Public  │ │
│  │    Portal    │  │    Portal    │  │   Pages   │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
└─────────────────────────────────────────────────────┘
                         ↕ API Calls
┌─────────────────────────────────────────────────────┐
│              ERPNEXT BACKEND (Frappe)               │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │   DocTypes   │  │  Whitelisted │  │   Redis   │ │
│  │   (Models)   │  │     APIs     │  │   Cache   │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
│  ┌──────────────────────────────────────────────┐  │
│  │         MariaDB Database                     │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         ↕
┌─────────────────────────────────────────────────────┐
│              EXTERNAL SERVICES                      │
│     Stripe Payment  │  Email  │  File Storage       │
└─────────────────────────────────────────────────────┘
```

---

## 📦 SPRINT PLANI (10 Hafta)

### ✅ Sprint 0: Hazırlık (Tamamlandı)
- [x] Next.js projesi kurulumu
- [x] NextAuth.js ile ERPNext auth entegrasyonu
- [x] Temel UI component'leri
- [x] Zustand store yapısı

---

### 🏗️ Sprint 1: ERPNext DocTypes (Hafta 1-2)

**Hedef:** Backend veri modellerini oluştur

**Yapılacaklar:**
1. **Portal User DocType**
   - user, user_type, customer/supplier link
   - Status, registration_date, agreement_signed
   
2. **Customer Agreement DocType**
   - Anlaşma bilgileri (no, tarih, durum)
   - Child Table: Agreement Items (ürün, fiyat, indirim)
   - İmza alanları (document, date, signature)

3. **Supplier Agreement DocType**
   - Tedarikçi anlaşma bilgileri
   - Child Table: Supplier Products (ürün, tedarik fiyatı, stok)
   - Komisyon ve ödeme koşulları

4. **Portal Order DocType**
   - Sipariş bilgileri (no, customer, tarih, durum)
   - Child Table: Order Items (ürün, adet, fiyat)
   - Ödeme bilgileri (Stripe ID, durum)
   - Teslimat bilgileri

**Dosyalar:**
```
apps/culinary_portal/culinary_portal/
├── doctype/
│   ├── portal_user/
│   ├── customer_agreement/
│   ├── supplier_agreement/
│   └── portal_order/
```

**Başarı Kriterleri:**
- Tüm DocType'lar oluşturuldu
- Permission rules tanımlandı
- Validation rules eklendi

---

### 🔌 Sprint 2: API Endpoints (Hafta 2)

**Hedef:** Backend API'leri hazırla

**Yapılacaklar:**

#### 1. Authentication API
```python
# apps/culinary_portal/culinary_portal/api/auth.py

@frappe.whitelist(allow_guest=True)
def register_customer(email, password, company_name, tax_id, ...):
    """Müşteri kaydı oluştur"""

@frappe.whitelist(allow_guest=True)
def register_supplier(email, password, company_name, ...):
    """Tedarikçi kaydı oluştur"""

@frappe.whitelist()
def get_user_profile():
    """Kullanıcı profil bilgileri"""
```

#### 2. Agreement API
```python
# apps/culinary_portal/culinary_portal/api/agreements.py

@frappe.whitelist()
def get_customer_agreement(customer):
    """Müşteri anlaşmasını getir"""

@frappe.whitelist()
def sign_agreement(agreement_id, signature_data, ip_address):
    """Anlaşmayı imzala"""

@frappe.whitelist()
def get_agreement_items(agreement_id):
    """Anlaşmadaki ürünler ve fiyatlar"""
```

#### 3. Product API
```python
# apps/culinary_portal/culinary_portal/api/products.py

@frappe.whitelist()
def get_customer_products(customer, filters=None):
    """Müşterinin görebileceği ürünler (anlaşmalı)"""
    # Redis cache: 30 dakika

@frappe.whitelist()
def get_product_details(item_code, customer):
    """Ürün detayı + fiyat + stok"""

@frappe.whitelist()
def search_products(query, customer):
    """Ürün arama"""
```

#### 4. Order API
```python
# apps/culinary_portal/culinary_portal/api/orders.py

@frappe.whitelist()
def create_order(items, customer, shipping_address):
    """Sipariş oluştur + validation"""

@frappe.whitelist()
def get_customer_orders(customer, filters=None):
    """Müşteri siparişleri"""

@frappe.whitelist()
def get_order_details(order_id):
    """Sipariş detayı"""

@frappe.whitelist()
def cancel_order(order_id, reason):
    """Sipariş iptali"""
```

#### 5. Payment API
```python
# apps/culinary_portal/culinary_portal/api/payments.py

@frappe.whitelist()
def create_stripe_intent(order_id):
    """Stripe Payment Intent"""

@frappe.whitelist(allow_guest=True)
def stripe_webhook():
    """Stripe webhook handler"""
```

#### 6. Supplier API
```python
# apps/culinary_portal/culinary_portal/api/supplier.py

@frappe.whitelist()
def get_supplier_orders(supplier, status=None):
    """Tedarikçi siparişleri"""

@frappe.whitelist()
def update_order_status(order_id, status, tracking_number=None):
    """Sipariş durumu güncelle"""

@frappe.whitelist()
def update_product_stock(item_code, qty):
    """Stok güncelle"""
```

**Başarı Kriterleri:**
- Tüm API endpoint'ler çalışıyor
- Permission kontrolü yapılıyor
- Error handling eklendi
- API documentation hazır

---

### 📝 Sprint 3: Registration & Agreement UI (Hafta 3)

**Hedef:** Kullanıcı kayıt ve anlaşma imzalama sayfaları

**Yapılacaklar:**

#### 1. Registration Forms
```
app/register/
├── customer/
│   └── page.js          # Müşteri kayıt formu
├── supplier/
│   └── page.js          # Tedarikçi kayıt formu
├── components/
│   ├── CompanyForm.js   # Firma bilgileri
│   ├── ContactForm.js   # Yetkili kişi bilgileri
│   ├── AddressForm.js   # Adres bilgileri
│   └── KVKKConsent.js   # KVKK onayı
└── success/
    └── page.js          # Başarılı kayıt mesajı
```

**Form Alanları (Müşteri):**
- Firma unvanı
- Vergi numarası
- Vergi dairesi
- Adres (il, ilçe, mahalle, sokak)
- Yetkili ad/soyad
- Email
- Telefon
- Şifre
- KVKK onayı checkbox

#### 2. Agreement Pages
```
app/agreement/
├── page.js              # Anlaşma göster + imzala
├── components/
│   ├── AgreementViewer.js    # PDF viewer
│   ├── SignaturePad.js       # E-imza alanı
│   └── AgreementTerms.js     # Madde madde şartlar
└── success/
    └── page.js          # İmzalama başarılı
```

**Özellikler:**
- Rich text ile anlaşma metni
- Checkbox ile onay
- E-imza (signature pad - opsiyonel)
- IP adresi kaydetme
- Tarih/saat damgası
- PDF export

**Başarı Kriterleri:**
- Formlar responsive
- Client-side validation (Zod)
- Error handling
- Loading states
- Success/error toasts

---

### 🛍️ Sprint 4: Product Catalog (Hafta 4-5)

**Hedef:** Ürün listeleme ve filtreleme

**Yapılacaklar:**

#### 1. Product Listing
```
app/products/
├── page.js              # Ana ürün listesi
├── [slug]/
│   └── page.js          # Ürün detay sayfası
└── components/
    ├── ProductGrid.js
    ├── ProductCard.js   # Mevcut - iyileştir
    ├── ProductFilter.js # Sidebar filtreleme
    ├── ProductSort.js   # Sıralama
    └── ProductSearch.js # Arama
```

**ProductCard İyileştirmeleri:**
- Anlaşma fiyatı badge
- Stok durumu göstergesi
- Min/max sipariş bilgisi
- Tedarikçi logosu
- Hızlı sepete ekle
- Favorilere ekle (opsiyonel)

**Filtreleme:**
- Kategori (ERPNext Item Group)
- Fiyat aralığı (slider)
- Tedarikçi
- Stok durumu
- Arama (fuzzy search)

**Sıralama:**
- En yeni
- En ucuz
- En pahalı
- Alfabetik
- Çok satanlar

#### 2. Product Detail Page
```
app/products/[slug]/
└── components/
    ├── ProductGallery.js     # Resim galerisi
    ├── ProductInfo.js        # Bilgiler
    ├── AddToCart.js          # Miktar + sepete ekle
    ├── ProductTabs.js        # Açıklama, özellikler
    └── RelatedProducts.js    # Benzer ürünler
```

**Başarı Kriterleri:**
- Server-side rendering
- Image optimization (next/image)
- Infinite scroll veya pagination
- Loading skeletons
- SEO optimization

---

### 🛒 Sprint 5: Cart & Checkout (Hafta 6)

**Hedef:** Sepet ve ödeme sistemi

**Yapılacaklar:**

#### 1. Shopping Cart Enhancement
```
app/cart/
├── page.js              # Sepet sayfası
└── components/
    ├── CartItem.js      # Sepet item
    ├── CartSummary.js   # Toplam hesaplama
    ├── CouponForm.js    # İndirim kuponu (opsiyonel)
    └── EmptyCart.js     # Boş sepet mesajı
```

**Zustand Store Geliştirme:**
```javascript
// app/store/useCartStore.js
{
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  updateQty: (id, qty) => {
    // Min/max kontrol
    // Anlaşma limiti kontrol
  },
  clearCart: () => {},
  validateCart: async () => {
    // Stok kontrolü
    // Anlaşma kontrolü
    // Fiyat kontrolü
  },
  getTotal: () => {},
  getItemCount: () => {}
}
```

#### 2. Checkout Flow
```
app/checkout/
├── page.js              # Multi-step checkout
├── components/
│   ├── CheckoutSteps.js      # Step indicator
│   ├── ShippingAddress.js    # Adres seçimi/ekleme
│   ├── OrderReview.js        # Sipariş özeti
│   ├── PaymentMethod.js      # Stripe/Havale
│   └── OrderSummary.js       # Toplam hesaplama
└── success/
    └── page.js          # Sipariş onay sayfası
```

**Checkout Steps:**
1. **Adım 1:** Teslimat adresi (kayıtlı adresler + yeni ekle)
2. **Adım 2:** Sipariş özeti (ürünler, miktarlar)
3. **Adım 3:** Ödeme yöntemi (Stripe card / Banka havalesi)
4. **Adım 4:** Onay ve sipariş ver

#### 3. Stripe Integration
```
app/api/payment/
├── create-intent/
│   └── route.js         # Payment Intent oluştur
├── confirm/
│   └── route.js         # Ödeme onayı
└── webhook/
    └── route.js         # Stripe webhook

lib/stripe/
├── client.js            # Stripe client-side
└── server.js            # Stripe server-side
```

**Başarı Kriterleri:**
- Smooth step geçişleri
- Form validation
- Stripe test mode çalışıyor
- Webhook güvenliği (signature verify)
- Error handling (ödeme reddedildi, yetersiz bakiye vb)

---

### 📊 Sprint 6: Customer Dashboard (Hafta 7)

**Hedef:** Müşteri yönetim paneli

**Yapılacaklar:**

```
app/dashboard/
├── layout.js            # Dashboard layout (sidebar)
├── page.js              # Dashboard ana sayfa
├── orders/
│   ├── page.js          # Sipariş listesi
│   └── [id]/
│       └── page.js      # Sipariş detay + tracking
├── profile/
│   ├── page.js          # Profil bilgileri
│   └── components/
│       ├── ProfileForm.js
│       ├── PasswordChange.js
│       └── AddressManager.js
├── agreements/
│   └── page.js          # Anlaşma görüntüleme + PDF
└── components/
    ├── DashboardSidebar.js
    ├── DashboardStats.js
    └── RecentOrders.js
```

**Dashboard Widgets:**
- Bekleyen siparişler (badge)
- Bu ay toplam sipariş
- Bu ay harcama
- En çok sipariş edilen 5 ürün
- Son siparişler (liste)

**Order Tracking:**
```
app/dashboard/orders/[id]/
└── components/
    ├── OrderTimeline.js      # Durum takibi (timeline)
    ├── OrderItems.js         # Sipariş ürünleri
    ├── OrderInfo.js          # Teslimat, fatura adresi
    ├── InvoiceDownload.js    # Fatura PDF indir
    └── CancelOrder.js        # İptal butonu
```

**Timeline States:**
- ✅ Sipariş alındı (order created)
- ⏳ Onaylandı (confirmed)
- 📦 Hazırlanıyor (processing)
- 🚚 Kargoya verildi (shipped) - Kargo takip no
- ✅ Teslim edildi (delivered)

**Başarı Kriterleri:**
- Responsive sidebar
- Real-time order updates (SWR polling)
- PDF download çalışıyor
- Filtreleme (tarih, durum)
- Pagination

---

### 🏭 Sprint 7: Supplier Portal (Hafta 8)

**Hedef:** Tedarikçi yönetim paneli

**Yapılacaklar:**

```
app/supplier/
├── layout.js            # Supplier layout
├── page.js              # Supplier dashboard
├── orders/
│   ├── page.js          # Gelen siparişler
│   └── [id]/
│       └── page.js      # Sipariş detay + durum güncelle
├── products/
│   ├── page.js          # Ürün listesi
│   └── [id]/
│       └── page.js      # Ürün detay + stok güncelle
└── reports/
    └── page.js          # Satış raporları
```

**Supplier Dashboard:**
- Yeni siparişler (badge)
- Bu ay satış
- Bekleyen siparişler
- Düşük stoklu ürünler
- Grafik: Aylık satış trendi

**Order Management:**
```
app/supplier/orders/[id]/
└── components/
    ├── OrderInfo.js          # Sipariş bilgileri
    ├── CustomerInfo.js       # Müşteri bilgileri
    ├── StatusUpdate.js       # Durum güncelleme formu
    └── TrackingForm.js       # Kargo takip no
```

**Status Update Actions:**
- Onayla (Confirmed)
- Hazırlanıyor (Processing)
- Kargoya ver (Shipped) → Takip no zorunlu
- Tamamlandı (Delivered)
- İptal et (Cancelled) → Sebep zorunlu

**Product Management:**
- Ürün listesi (sadece kendi ürünleri)
- Stok güncelleme
- Fiyat önerisi (admin onayına tabi)
- Ürün durumu (aktif/pasif)

**Reports:**
- Aylık satış grafiği (Chart.js)
- En çok satılan ürünler
- Müşteri bazlı satış
- Ödeme bekleyen siparişler

**Başarı Kriterleri:**
- Sadece kendi siparişlerini görüyor
- Status update gerçek zamanlı
- Email bildirimleri (status change)
- Export to Excel

---

### 🔐 Sprint 8: Security & Permissions (Hafta 9)

**Hedef:** Güvenlik ve yetkilendirme

**Yapılacaklar:**

#### 1. ERPNext Permission Rules
```python
# apps/culinary_portal/culinary_portal/hooks.py

permission_query_conditions = {
    "Portal Order": "culinary_portal.permissions.portal_order_query",
    "Item": "culinary_portal.permissions.item_query"
}

# apps/culinary_portal/culinary_portal/permissions.py

def portal_order_query(user):
    """Kullanıcı sadece kendi siparişlerini görür"""
    
def item_query(user):
    """Kullanıcı sadece anlaşmalı ürünleri görür"""
```

**Role Definitions:**
```
Role: Portal Customer
- Read: Portal Order (own)
- Create: Portal Order
- Read: Customer Agreement (own)
- Read: Item (filtered by agreement)

Role: Portal Supplier
- Read: Portal Order (where supplier in items)
- Write: Portal Order (status field only)
- Read/Write: Item (own)
- Read: Supplier Agreement (own)
```

#### 2. Frontend Guards
```javascript
// middleware.js
export function middleware(request) {
  const token = request.cookies.get('token')
  const path = request.nextUrl.pathname
  
  // Public routes
  if (path.startsWith('/register') || path.startsWith('/login')) {
    return NextResponse.next()
  }
  
  // Protected routes
  if (!token) {
    return NextResponse.redirect('/login')
  }
  
  // Role-based routing
  const userRole = getUserRole(token)
  
  if (path.startsWith('/dashboard') && userRole !== 'customer') {
    return NextResponse.redirect('/')
  }
  
  if (path.startsWith('/supplier') && userRole !== 'supplier') {
    return NextResponse.redirect('/')
  }
}

// components/ProtectedRoute.js
export function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useSession()
  
  if (!user) return <Navigate to="/login" />
  
  if (!allowedRoles.includes(user.role)) {
    return <UnauthorizedPage />
  }
  
  return children
}
```

#### 3. Security Checklist
- [x] CSRF protection (NextAuth handles)
- [x] SQL injection prevention (Frappe ORM)
- [x] XSS protection (React escapes)
- [ ] Rate limiting (API)
- [ ] Input validation (Zod)
- [ ] File upload security
- [ ] Session timeout
- [ ] 2FA (opsiyonel)

**Başarı Kriterleri:**
- Permission tests geçiyor
- Cross-user data access yok
- API rate limiting çalışıyor
- Security audit temiz

---

### ⚡ Sprint 9: Performance & UX (Hafta 9)

**Hedef:** Performans optimizasyonu ve kullanıcı deneyimi

**Yapılacaklar:**

#### 1. Performance Optimizations

**Next.js Optimizations:**
```javascript
// next.config.mjs
export default {
  images: {
    domains: ['your-erpnext-domain.com'],
    formats: ['image/avif', 'image/webp']
  },
  
  // Server actions
  experimental: {
    serverActions: true
  },
  
  // Compression
  compress: true,
  
  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ]
      }
    ]
  }
}
```

**Caching Strategy:**
```javascript
// lib/api/client.js
import useSWR from 'swr'

// Products (cache 30 min)
export function useProducts() {
  return useSWR('/api/products', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 1800000 // 30 min
  })
}

// Orders (cache 5 min, revalidate on focus)
export function useOrders() {
  return useSWR('/api/orders', fetcher, {
    revalidateOnFocus: true,
    dedupingInterval: 300000 // 5 min
  })
}
```

**ERPNext Redis Cache:**
```python
# apps/culinary_portal/culinary_portal/api/products.py

@frappe.whitelist()
def get_customer_products(customer):
    cache_key = f"customer_products:{customer}"
    
    # Check cache
    cached = frappe.cache().get_value(cache_key)
    if cached:
        return cached
    
    # Fetch from DB
    products = frappe.get_all(...)
    
    # Cache 30 minutes
    frappe.cache().set_value(cache_key, products, expires_in_sec=1800)
    
    return products
```

#### 2. UX Improvements

**Loading States:**
```javascript
// components/ui/LoadingStates.js

// Skeleton loaders
<ProductCardSkeleton />
<OrderListSkeleton />
<DashboardSkeleton />

// Spinners
<ButtonSpinner />
<PageSpinner />

// Progress bars
<CheckoutProgress step={2} total={4} />
```

**Error Handling:**
```javascript
// components/ErrorBoundary.js
<ErrorBoundary fallback={<ErrorPage />}>
  <ProductList />
</ErrorBoundary>

// Toast notifications
toast.success('Sipariş oluşturuldu')
toast.error('Ürün stokta yok')
toast.warning('Minimum sipariş miktarı 10 adet')
```

**Accessibility:**
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast (WCAG AA)

#### 3. Monitoring

```javascript
// lib/monitoring/sentry.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0
})

// lib/monitoring/analytics.js
import { Analytics } from '@vercel/analytics/react'

// Track events
trackEvent('add_to_cart', { product_id, price })
trackEvent('purchase', { order_id, amount })
```

**Performance Targets:**
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- API Response: < 200ms (cached)

**Başarı Kriterleri:**
- Lighthouse audit > 90
- No layout shift (CLS < 0.1)
- Fast page transitions
- Smooth animations

---

### 📱 Sprint 10: Mobile & Launch (Hafta 10)

**Hedef:** Mobile responsive ve production deployment

**Yapılacaklar:**

#### 1. Mobile Responsiveness

**Responsive Design:**
```css
/* Tailwind breakpoints */
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Laptop */
xl: 1280px  /* Desktop */
```

**Mobile Components:**
- Hamburger menu
- Bottom navigation (mobile)
- Swipeable cart
- Touch-friendly buttons (min 44px)
- Mobile-optimized forms
- Collapsible filters

**Touch Gestures:**
- Swipe to delete (cart items)
- Pull to refresh (orders)
- Pinch to zoom (product images)

#### 2. Testing

**Backend Tests:**
```python
# apps/culinary_portal/culinary_portal/tests/

# test_orders.py
def test_create_order():
def test_order_permissions():
def test_agreement_validation():
def test_stock_validation():

# test_api.py
def test_auth_required():
def test_rate_limiting():
```

**Frontend Tests:**
```javascript
// __tests__/

// ProductCard.test.js
describe('ProductCard', () => {
  it('renders product info')
  it('adds to cart')
  it('shows stock status')
})

// Cart.test.js
describe('Cart', () => {
  it('updates quantity')
  it('removes item')
  it('calculates total')
})

// Checkout.test.js
describe('Checkout', () => {
  it('validates address')
  it('processes payment')
  it('creates order')
})
```

**E2E Tests (Playwright):**
```javascript
// e2e/customer-flow.spec.js
test('customer can place order', async ({ page }) => {
  // Login
  // Browse products
  // Add to cart
  // Checkout
  // Verify order created
})
```

#### 3. Production Deployment

**ERPNext Production:**
```bash
# Checklist
- [ ] SSL certificate
- [ ] Domain configured
- [ ] Email setup (SMTP)
- [ ] Backup cron (daily)
- [ ] Redis cache enabled
- [ ] Worker processes (4+)
- [ ] Log rotation
- [ ] Monitoring (New Relic/Datadog)
```

**Next.js Deployment (Vercel):**
```bash
# Environment variables
NEXT_PUBLIC_API_URL=https://erp.yourdomain.com
NEXT_PUBLIC_SITE_NAME=Culinary Portal
NEXTAUTH_URL=https://portal.yourdomain.com
NEXTAUTH_SECRET=xxx
STRIPE_PUBLIC_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Vercel settings
- Framework: Next.js
- Build command: npm run build
- Output directory: .next
- Install command: npm install
```

**CDN & Caching:**
- Cloudflare CDN
- Static assets (images, fonts)
- API response caching
- Edge caching

#### 4. Launch Checklist

**Pre-Launch:**
- [ ] All tests passing
- [ ] Security audit done
- [ ] Performance audit done
- [ ] Browser testing (Chrome, Safari, Firefox)
- [ ] Mobile testing (iOS, Android)
- [ ] Error tracking setup (Sentry)
- [ ] Analytics setup (GA4)
- [ ] User documentation
- [ ] Admin training

**Launch Day:**
- [ ] Database backup
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Test production
- [ ] Monitor logs
- [ ] Monitor errors
- [ ] Monitor performance

**Post-Launch:**
- [ ] User feedback
- [ ] Bug fixes
- [ ] Performance monitoring
- [ ] Weekly reports

---

## 🛠️ TEKNOLOJI STACK

### Backend
| Kategori | Teknoloji | Versiyon |
|----------|-----------|----------|
| Framework | Frappe | v15 |
| ERP | ERPNext | v15 |
| Database | MariaDB | 10.6+ |
| Cache | Redis | 7.0+ |
| Queue | RQ | Built-in |
| Storage | S3 / Local | - |
| Payment | Stripe | Latest |

### Frontend
| Kategori | Teknoloji | Versiyon |
|----------|-----------|----------|
| Framework | Next.js | 14 |
| React | React | 18 |
| UI | Tailwind CSS | 3.4 |
| Components | Headless UI | 2.0 |
| State | Zustand | 4.5 |
| Forms | React Hook Form | 7.5 |
| Validation | Zod | 3.22 |
| HTTP | Axios | 1.6 |
| Data Fetching | SWR | 2.2 |
| Auth | NextAuth.js | 4.24 |
| Icons | Heroicons | 2.1 |

### DevOps
| Kategori | Teknoloji |
|----------|-----------|
| Hosting Backend | VPS (DigitalOcean/AWS) |
| Hosting Frontend | Vercel |
| CDN | Cloudflare |
| Monitoring | Sentry |
| Analytics | Google Analytics 4 |
| CI/CD | GitHub Actions |

---

## 📂 DOSYA YAPISI

```
erp_portal/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── register/
│   │   │   ├── customer/
│   │   │   │   └── page.js
│   │   │   ├── supplier/
│   │   │   │   └── page.js
│   │   │   └── success/
│   │   │       └── page.js
│   │   └── agreement/
│   │       ├── page.js
│   │       └── success/
│   │           └── page.js
│   │
│   ├── (shop)/
│   │   ├── layout.js
│   │   ├── page.js                    # Ana sayfa
│   │   ├── products/
│   │   │   ├── page.js                # Ürün listesi
│   │   │   └── [slug]/
│   │   │       └── page.js            # Ürün detay
│   │   ├── cart/
│   │   │   └── page.js
│   │   └── checkout/
│   │       ├── page.js
│   │       └── success/
│   │           └── page.js
│   │
│   ├── (customer)/
│   │   └── dashboard/
│   │       ├── layout.js
│   │       ├── page.js
│   │       ├── orders/
│   │       │   ├── page.js
│   │       │   └── [id]/
│   │       │       └── page.js
│   │       ├── profile/
│   │       │   └── page.js
│   │       └── agreements/
│   │           └── page.js
│   │
│   ├── (supplier)/
│   │   └── supplier/
│   │       ├── layout.js
│   │       ├── page.js
│   │       ├── orders/
│   │       │   ├── page.js
│   │       │   └── [id]/
│   │       │       └── page.js
│   │       ├── products/
│   │       │   ├── page.js
│   │       │   └── [id]/
│   │       │       └── page.js
│   │       └── reports/
│   │           └── page.js
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/
│   │   │   │   └── route.js
│   │   │   ├── register/
│   │   │   │   └── route.js
│   │   │   └── profile/
│   │   │       └── route.js
│   │   ├── products/
│   │   │   ├── route.js
│   │   │   ├── [id]/
│   │   │   │   └── route.js
│   │   │   └── search/
│   │   │       └── route.js
│   │   ├── orders/
│   │   │   ├── route.js
│   │   │   ├── [id]/
│   │   │   │   └── route.js
│   │   │   └── cancel/
│   │   │       └── route.js
│   │   ├── payment/
│   │   │   ├── create-intent/
│   │   │   │   └── route.js
│   │   │   ├── confirm/
│   │   │   │   └── route.js
│   │   │   └── webhook/
│   │   │       └── route.js
│   │   └── agreements/
│   │       ├── route.js
│   │       └── sign/
│   │           └── route.js
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.js
│   │   │   ├── Input.js
│   │   │   ├── Select.js
│   │   │   ├── Modal.js
│   │   │   ├── Toast.js
│   │   │   ├── Loader.js
│   │   │   ├── Card.js
│   │   │   └── Badge.js
│   │   ├── layout/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── Sidebar.js
│   │   │   └── Breadcrumb.js
│   │   ├── products/
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductGrid.js
│   │   │   ├── ProductFilter.js
│   │   │   ├── ProductSort.js
│   │   │   └── ProductSearch.js
│   │   ├── cart/
│   │   │   ├── Cart.js
│   │   │   ├── CartButton.js
│   │   │   ├── CartItem.js
│   │   │   └── CartSummary.js
│   │   ├── orders/
│   │   │   ├── OrderCard.js
│   │   │   ├── OrderTimeline.js
│   │   │   ├── OrderItems.js
│   │   │   └── OrderFilters.js
│   │   └── forms/
│   │       ├── CompanyForm.js
│   │       ├── ContactForm.js
│   │       ├── AddressForm.js
│   │       └── SignatureForm.js
│   │
│   ├── store/
│   │   ├── useCartStore.js
│   │   ├── useAuthStore.js
│   │   └── useUIStore.js
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── lib/
│   ├── api/
│   │   ├── client.js              # Axios client
│   │   ├── endpoints.js           # API endpoint'ler
│   │   └── hooks.js               # SWR hooks
│   ├── utils/
│   │   ├── format.js              # Formatting helpers
│   │   ├── validation.js          # Zod schemas
│   │   └── helpers.js             # Utility functions
│   ├── constants/
│   │   ├── routes.js
│   │   ├── status.js
│   │   └── messages.js
│   ├── stripe/
│   │   ├── client.js
│   │   └── server.js
│   └── auth.js                    # NextAuth config
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logo.png
│
├── __tests__/
│   ├── components/
│   ├── pages/
│   └── api/
│
├── middleware.js
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── jsconfig.json
├── .env.local
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🎨 DESIGN SYSTEM

### Color Palette
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          50: '#FFF5F0',
          100: '#FFE8DB',
          200: '#FFD1B8',
          300: '#FFB494',
          400: '#FF9771',
          500: '#FF6B35',  // Main
          600: '#E6521F',
          700: '#B33D16',
          800: '#802B10',
          900: '#4D1A09',
        },
        secondary: {
          50: '#E6F2F7',
          100: '#CCE5EF',
          200: '#99CBDF',
          300: '#66B1CF',
          400: '#3397BF',
          500: '#004E89',  // Main
          600: '#003E6D',
          700: '#002F52',
          800: '#001F36',
          900: '#00101B',
        },
        success: '#06D6A0',
        warning: '#F79824',
        danger: '#EF476F',
        
        // Neutral
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    }
  }
}
```

### Typography
```css
/* Headings */
.h1 { @apply text-4xl font-bold text-gray-900; }
.h2 { @apply text-3xl font-semibold text-gray-900; }
.h3 { @apply text-2xl font-semibold text-gray-900; }
.h4 { @apply text-xl font-semibold text-gray-900; }
.h5 { @apply text-lg font-medium text-gray-900; }

/* Body */
.body-lg { @apply text-lg text-gray-700; }
.body { @apply text-base text-gray-700; }
.body-sm { @apply text-sm text-gray-600; }
.caption { @apply text-xs text-gray-500; }
```

### Components

**Button Variants:**
```javascript
// Primary
<Button variant="primary">Sipariş Ver</Button>

// Secondary
<Button variant="secondary">İptal</Button>

// Outline
<Button variant="outline">Detaylar</Button>

// Ghost
<Button variant="ghost">Düzenle</Button>

// Danger
<Button variant="danger">Sil</Button>

// Loading
<Button loading>Yükleniyor...</Button>
```

**Input Fields:**
```javascript
<Input
  label="Email"
  type="email"
  placeholder="ornek@email.com"
  error="Geçersiz email"
  required
/>
```

**Cards:**
```javascript
<Card>
  <Card.Header>
    <Card.Title>Sipariş #12345</Card.Title>
  </Card.Header>
  <Card.Body>
    {/* Content */}
  </Card.Body>
  <Card.Footer>
    {/* Actions */}
  </Card.Footer>
</Card>
```

---

## 📊 BAŞARI METRİKLERİ

### Kullanıcı Metrikleri
| Metrik | Hedef | Nasıl Ölçülür |
|--------|-------|---------------|
| Kayıt Tamamlama | < 2 dakika | Google Analytics |
| Anlaşma İmzalama | < 5 dakika | Custom event |
| Ürün Bulma | < 10 saniye | Search analytics |
| Sipariş Verme | < 3 dakika | Checkout funnel |
| Ödeme Başarı Oranı | > 95% | Stripe dashboard |

### Teknik Metrikleri
| Metrik | Hedef | Tool |
|--------|-------|------|
| Lighthouse Score | > 90 | Lighthouse |
| First Contentful Paint | < 1.5s | Lighthouse |
| Time to Interactive | < 3.5s | Lighthouse |
| API Response (cached) | < 200ms | Sentry |
| API Response (uncached) | < 500ms | Sentry |
| Error Rate | < 1% | Sentry |
| Uptime | > 99.9% | UptimeRobot |

### Business Metrikleri
| Metrik | Ölçüm |
|--------|-------|
| Günlük aktif kullanıcı | Analytics |
| Ortalama sipariş değeri | ERPNext report |
| Sipariş tamamlanma oranı | Funnel analysis |
| Müşteri memnuniyeti | Survey |
| Tedarikçi yanıt süresi | Custom metric |

---

## 🐛 TROUBLESHOOTING

### Yaygın Sorunlar

#### ERPNext API Bağlantısı
```bash
# Problem: CORS hatası
# Çözüm: ERPNext'te CORS ayarları
bench --site your-site.com set-config allow_cors '["https://portal.yourdomain.com"]'

# Problem: Authentication fails
# Çözüm: Cookie settings
bench --site your-site.com set-config allow_cors_credentials true
```

#### Stripe Webhook
```bash
# Problem: Webhook signature verification failed
# Çözüm: Webhook secret'i kontrol et
# Stripe Dashboard → Webhooks → Signing secret

# Test webhook locally
stripe listen --forward-to localhost:3000/api/payment/webhook
```

#### Performance Issues
```bash
# Redis cache working?
redis-cli PING

# ERPNext background jobs running?
bench --site your-site.com doctor

# Next.js build optimization
npm run build
npm run start
```

---

## 📚 DOKÜMANTASYON

### Developer Docs
- API Documentation (Swagger/Postman)
- Component Storybook
- Database Schema
- Workflow Diagrams

### User Docs
- Müşteri Kullanım Kılavuzu
- Tedarikçi Kullanım Kılavuzu
- SSS (Frequently Asked Questions)
- Video Tutorials

### Admin Docs
- ERPNext Setup Guide
- Permission Configuration
- Backup & Restore
- Troubleshooting Guide

---

## 🚀 DEPLOYMENT

### Production URLs
- Frontend: https://portal.yourdomain.com
- Backend API: https://erp.yourdomain.com
- Admin Panel: https://erp.yourdomain.com/app

### Environment Variables
```bash
# .env.local (Frontend)
NEXT_PUBLIC_API_URL=https://erp.yourdomain.com
NEXT_PUBLIC_SITE_NAME=Culinary Portal
NEXTAUTH_URL=https://portal.yourdomain.com
NEXTAUTH_SECRET=your-secret-key
STRIPE_PUBLIC_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
SENTRY_DSN=https://xxx@sentry.io/xxx
```

```bash
# site_config.json (Backend)
{
  "allow_cors": ["https://portal.yourdomain.com"],
  "allow_cors_credentials": true,
  "enable_stripe": true,
  "stripe_secret_key": "sk_live_xxx",
  "redis_cache": "redis://localhost:6379"
}
```

---

## 👥 TEAM & ROLES

### Geliştirme Ekibi
- **Full Stack Developer:** Backend + Frontend
- **UI/UX Designer:** Design system + prototypes
- **QA Engineer:** Testing + bug tracking
- **DevOps:** Deployment + monitoring

### İş Ekibi
- **Product Owner:** Requirements + priorities
- **Project Manager:** Timeline + coordination
- **Business Analyst:** Workflows + processes

---

## 📞 SUPPORT

### İletişim Kanalları
- Email: dev@yourdomain.com
- Slack/Teams: #culinary-portal
- Issue Tracker: GitHub Issues
- Documentation: docs.yourdomain.com

---

## ✅ ÖNCELİK YAPILACAKLAR (BU HAFTA)

### Acil (P0)
1. [ ] ERPNext DocType'ları oluştur
2. [ ] API endpoint'leri yaz
3. [ ] Registration formları hazırla

### Önemli (P1)
4. [ ] Agreement sistemi
5. [ ] Product listing API
6. [ ] Shopping cart geliştir

### İyi Olur (P2)
7. [ ] Dashboard UI
8. [ ] Email templates
9. [ ] PDF generator

---

## 📅 RELEASE PLAN

### v0.1 (Hafta 2)
- ✅ Auth system
- Backend DocTypes
- Basic API

### v0.2 (Hafta 4)
- Registration
- Agreement system
- Product catalog

### v0.3 (Hafta 6)
- Shopping cart
- Checkout
- Payment integration

### v0.4 (Hafta 8)
- Customer dashboard
- Order tracking
- Supplier portal

### v1.0 (Hafta 10) - **LAUNCH**
- All features complete
- Testing done
- Production ready

### v1.1 (Post-launch)
- Bug fixes
- Performance improvements
- User feedback implementation

---

**Son Güncelleme:** 6 Kasım 2025  
**Versiyon:** 1.0  
**Durum:** Aktif Geliştirme

---

**Notlar:**
- Bu plan esnek bir roadmap'tir, gerektiğinde güncellenebilir
- Her sprint sonunda retrospective yapılmalı
- User feedback sürekli toplanmalı
- Performance metrics düzenli takip edilmeli

---

🎯 **Hedef:** Production-ready, güvenli, performanslı B2B portalı!

