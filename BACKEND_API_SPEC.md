# 🔌 BACKEND API SPESİFİKASYONU

## ERPNext Culinary Portal API Documentation

**Base URL:** `https://erp.yourdomain.com`  
**Auth:** Session-based (Cookie) veya Token-based  
**Format:** JSON

---

## 📋 GENEL BİLGİLER

### Authentication
Tüm API'ler (allow_guest=True olanlar hariç) authentication gerektirir.

```python
# Headers
{
  "Authorization": "token api_key:api_secret",
  "Content-Type": "application/json"
}

# veya Cookie-based (NextAuth)
{
  "Cookie": "sid=xxx; system_user=xxx"
}
```

### Error Responses
```json
{
  "exc": "Error message",
  "exc_type": "PermissionError",
  "message": "User friendly message"
}
```

### Success Responses
```json
{
  "message": "Success message",
  "data": {...}
}
```

---

## 🔐 AUTHENTICATION APIs

### 1. Register Customer
**Endpoint:** `POST /api/method/culinary_portal.api.auth.register_customer`  
**Allow Guest:** ✅ Yes  
**Rate Limit:** 5 per hour per IP

**Request:**
```json
{
  "email": "customer@example.com",
  "password": "SecurePass123!",
  "company_name": "Örnek Restoran",
  "tax_id": "1234567890",
  "tax_office": "Kadıköy",
  "address_line1": "Sokak No:5",
  "address_line2": "Kat:3 Daire:7",
  "city": "İstanbul",
  "district": "Kadıköy",
  "postal_code": "34710",
  "contact_person": "Ahmet Yılmaz",
  "phone": "+905551234567",
  "kvkk_consent": true
}
```

**Response:**
```json
{
  "message": "Kayıt başarılı. Onay için bekleyiniz.",
  "data": {
    "user": "customer@example.com",
    "portal_user": "PU-2024-00001",
    "status": "Pending"
  }
}
```

**Validations:**
- Email unique olmalı
- Tax ID 10 karakter
- Phone +90 ile başlamalı
- Password min 8 karakter, en az 1 büyük, 1 küçük, 1 rakam
- KVKK consent zorunlu

---

### 2. Register Supplier
**Endpoint:** `POST /api/method/culinary_portal.api.auth.register_supplier`  
**Allow Guest:** ✅ Yes  
**Rate Limit:** 5 per hour per IP

**Request:** (register_customer ile aynı)

**Response:**
```json
{
  "message": "Tedarikçi kaydı oluşturuldu.",
  "data": {
    "user": "supplier@example.com",
    "portal_user": "PU-2024-00002",
    "status": "Pending"
  }
}
```

---

### 3. Get User Profile
**Endpoint:** `GET /api/method/culinary_portal.api.auth.get_user_profile`  
**Auth Required:** ✅ Yes

**Response:**
```json
{
  "message": "Success",
  "data": {
    "user": "customer@example.com",
    "full_name": "Ahmet Yılmaz",
    "user_type": "Customer",
    "customer": "CUST-2024-00001",
    "customer_name": "Örnek Restoran",
    "status": "Active",
    "has_agreement": true,
    "agreement_expiry": "2025-12-31",
    "addresses": [
      {
        "name": "ADDR-2024-00001",
        "address_line1": "Sokak No:5",
        "city": "İstanbul",
        "is_primary": true
      }
    ]
  }
}
```

---

## 📜 AGREEMENT APIs

### 4. Get Customer Agreement
**Endpoint:** `GET /api/method/culinary_portal.api.agreements.get_customer_agreement`  
**Auth Required:** ✅ Yes  
**Cache:** 1 hour

**Parameters:**
- `customer` (optional): Customer ID. Boşsa current user'ın customer'ı

**Response:**
```json
{
  "message": "Success",
  "data": {
    "name": "AGR-CUST-2024-00001",
    "agreement_no": "AGR-2024-001",
    "customer": "CUST-2024-00001",
    "customer_name": "Örnek Restoran",
    "start_date": "2024-11-01",
    "end_date": "2025-10-31",
    "status": "Active",
    "agreement_terms": "<p>Anlaşma metni...</p>",
    "signed": true,
    "signed_date": "2024-11-01 10:30:00",
    "items": [
      {
        "item_code": "ITEM-001",
        "item_name": "Hamburger Köftesi",
        "price_list": "Standard Selling",
        "rate": 150.00,
        "discount_percent": 5,
        "final_rate": 142.50,
        "min_order_qty": 10,
        "max_order_qty": 1000
      }
    ]
  }
}
```

---

### 5. Sign Agreement
**Endpoint:** `POST /api/method/culinary_portal.api.agreements.sign_agreement`  
**Auth Required:** ✅ Yes

**Request:**
```json
{
  "agreement_id": "AGR-CUST-2024-00001",
  "signature_data": "data:image/png;base64,...",
  "terms_accepted": true,
  "ip_address": "192.168.1.1"
}
```

**Response:**
```json
{
  "message": "Anlaşma başarıyla imzalandı",
  "data": {
    "agreement_id": "AGR-CUST-2024-00001",
    "signed_date": "2024-11-06 14:30:00",
    "pdf_url": "/api/method/frappe.utils.print_format.download_pdf?doctype=Customer+Agreement&name=AGR-CUST-2024-00001"
  }
}
```

**Actions:**
- Agreement status → Active
- Email gönder (PDF eki)
- Portal User → agreement_signed = 1

---

## 🛍️ PRODUCT APIs

### 6. Get Customer Products
**Endpoint:** `GET /api/method/culinary_portal.api.products.get_customer_products`  
**Auth Required:** ✅ Yes  
**Cache:** 30 minutes

**Parameters:**
- `customer` (optional): Customer ID
- `category` (optional): Item Group
- `supplier` (optional): Supplier ID
- `search` (optional): Search query
- `page` (default: 1)
- `page_size` (default: 20)

**Response:**
```json
{
  "message": "Success",
  "data": {
    "items": [
      {
        "item_code": "ITEM-001",
        "item_name": "Hamburger Köftesi",
        "item_group": "Et Ürünleri",
        "description": "500gr paket",
        "image": "/files/hamburger-koftesi.jpg",
        "supplier": "SUPP-2024-00001",
        "supplier_name": "Lezzetli Et A.Ş.",
        "standard_rate": 150.00,
        "agreement_rate": 142.50,
        "discount_percent": 5,
        "currency": "TRY",
        "stock_qty": 500,
        "in_stock": true,
        "min_order_qty": 10,
        "max_order_qty": 1000,
        "uom": "Paket"
      }
    ],
    "total": 45,
    "page": 1,
    "page_size": 20,
    "total_pages": 3
  }
}
```

**Filters:**
- Sadece aktif agreement'taki ürünler
- Sadece stokta olan (optional)
- Price range filter
- Category filter

---

### 7. Get Product Details
**Endpoint:** `GET /api/method/culinary_portal.api.products.get_product_details`  
**Auth Required:** ✅ Yes  
**Cache:** 5 minutes

**Parameters:**
- `item_code`: Item code (required)
- `customer`: Customer ID (optional)

**Response:**
```json
{
  "message": "Success",
  "data": {
    "item_code": "ITEM-001",
    "item_name": "Hamburger Köftesi",
    "description": "Özel baharatlarla hazırlanmış...",
    "item_group": "Et Ürünleri",
    "brand": "Lezzetli",
    "images": [
      {
        "image": "/files/hamburger-1.jpg",
        "is_primary": true
      },
      {
        "image": "/files/hamburger-2.jpg"
      }
    ],
    "supplier": {
      "name": "SUPP-2024-00001",
      "supplier_name": "Lezzetli Et A.Ş.",
      "logo": "/files/lezzetli-logo.png"
    },
    "pricing": {
      "standard_rate": 150.00,
      "agreement_rate": 142.50,
      "discount_percent": 5,
      "currency": "TRY"
    },
    "stock": {
      "qty": 500,
      "in_stock": true,
      "lead_time_days": 2
    },
    "order_rules": {
      "min_order_qty": 10,
      "max_order_qty": 1000,
      "uom": "Paket"
    },
    "attributes": [
      {
        "attribute": "Ağırlık",
        "value": "500gr"
      },
      {
        "attribute": "Saklama",
        "value": "-18°C"
      }
    ]
  }
}
```

---

### 8. Search Products
**Endpoint:** `GET /api/method/culinary_portal.api.products.search_products`  
**Auth Required:** ✅ Yes

**Parameters:**
- `query`: Search term (min 3 chars)
- `customer`: Customer ID
- `limit`: Max results (default: 10)

**Response:**
```json
{
  "message": "Success",
  "data": [
    {
      "item_code": "ITEM-001",
      "item_name": "Hamburger Köftesi",
      "image": "/files/hamburger.jpg",
      "rate": 142.50,
      "in_stock": true
    }
  ]
}
```

**Search Fields:**
- item_name
- item_code
- description
- tags

---

## 🛒 ORDER APIs

### 9. Create Order
**Endpoint:** `POST /api/method/culinary_portal.api.orders.create_order`  
**Auth Required:** ✅ Yes

**Request:**
```json
{
  "customer": "CUST-2024-00001",
  "shipping_address": "ADDR-2024-00001",
  "delivery_date": "2024-11-10",
  "items": [
    {
      "item_code": "ITEM-001",
      "qty": 20,
      "rate": 142.50
    },
    {
      "item_code": "ITEM-002",
      "qty": 10,
      "rate": 85.00
    }
  ],
  "notes": "Teslimat sabah 09:00'da olmalı"
}
```

**Response:**
```json
{
  "message": "Sipariş oluşturuldu",
  "data": {
    "order_id": "ORD-2024-00001",
    "order_no": "ORD-001",
    "customer": "CUST-2024-00001",
    "order_date": "2024-11-06 15:30:00",
    "delivery_date": "2024-11-10",
    "total_qty": 30,
    "total_amount": 3700.00,
    "status": "Draft",
    "payment_status": "Pending",
    "items": [...]
  }
}
```

**Validations:**
- Stock availability check
- Agreement validation (ürün anlaşmada var mı?)
- Min/max order qty check
- Price validation (rate değişmiş mi?)
- Address belongs to customer

**Actions After Create:**
- Email gönder (customer + supplier)
- Stock rezerve et (optional)
- Notification oluştur

---

### 10. Get Customer Orders
**Endpoint:** `GET /api/method/culinary_portal.api.orders.get_customer_orders`  
**Auth Required:** ✅ Yes  
**Cache:** No (real-time data)

**Parameters:**
- `customer`: Customer ID (optional)
- `status`: Order status (optional)
- `from_date`: Start date (optional)
- `to_date`: End date (optional)
- `page`: Page number (default: 1)
- `page_size`: Items per page (default: 20)

**Response:**
```json
{
  "message": "Success",
  "data": {
    "orders": [
      {
        "name": "ORD-2024-00001",
        "order_no": "ORD-001",
        "order_date": "2024-11-06 15:30:00",
        "delivery_date": "2024-11-10",
        "status": "Confirmed",
        "payment_status": "Paid",
        "total_amount": 3700.00,
        "currency": "TRY",
        "items_count": 2,
        "tracking_number": null
      }
    ],
    "total": 12,
    "page": 1,
    "page_size": 20
  }
}
```

---

### 11. Get Order Details
**Endpoint:** `GET /api/method/culinary_portal.api.orders.get_order_details`  
**Auth Required:** ✅ Yes

**Parameters:**
- `order_id`: Order ID (required)

**Response:**
```json
{
  "message": "Success",
  "data": {
    "name": "ORD-2024-00001",
    "order_no": "ORD-001",
    "customer": "CUST-2024-00001",
    "customer_name": "Örnek Restoran",
    "order_date": "2024-11-06 15:30:00",
    "delivery_date": "2024-11-10",
    "status": "Shipped",
    "payment_status": "Paid",
    "payment_method": "Stripe",
    "stripe_payment_id": "pi_xxx",
    "total_amount": 3700.00,
    "currency": "TRY",
    "shipping_address": {
      "address_line1": "Sokak No:5",
      "city": "İstanbul",
      "district": "Kadıköy"
    },
    "tracking_number": "1234567890",
    "notes": "Teslimat sabah 09:00'da olmalı",
    "items": [
      {
        "item_code": "ITEM-001",
        "item_name": "Hamburger Köftesi",
        "qty": 20,
        "rate": 142.50,
        "amount": 2850.00,
        "supplier": "SUPP-2024-00001",
        "supplier_name": "Lezzetli Et A.Ş."
      }
    ],
    "timeline": [
      {
        "status": "Draft",
        "date": "2024-11-06 15:30:00",
        "user": "customer@example.com"
      },
      {
        "status": "Confirmed",
        "date": "2024-11-06 16:00:00",
        "user": "System"
      },
      {
        "status": "Shipped",
        "date": "2024-11-08 10:00:00",
        "user": "supplier@example.com",
        "note": "Kargo takip no: 1234567890"
      }
    ]
  }
}
```

---

### 12. Cancel Order
**Endpoint:** `POST /api/method/culinary_portal.api.orders.cancel_order`  
**Auth Required:** ✅ Yes

**Request:**
```json
{
  "order_id": "ORD-2024-00001",
  "reason": "Yanlışlıkla sipariş verildi"
}
```

**Response:**
```json
{
  "message": "Sipariş iptal edildi",
  "data": {
    "order_id": "ORD-2024-00001",
    "status": "Cancelled",
    "cancelled_date": "2024-11-06 16:00:00"
  }
}
```

**Validations:**
- Order status = Draft veya Confirmed (Shipped olamaz)
- Customer owns the order
- Cancel reason zorunlu

**Actions:**
- Stock release
- Payment refund (if paid)
- Email notification

---

## 💳 PAYMENT APIs

### 13. Create Stripe Payment Intent
**Endpoint:** `POST /api/method/culinary_portal.api.payments.create_stripe_intent`  
**Auth Required:** ✅ Yes

**Request:**
```json
{
  "order_id": "ORD-2024-00001"
}
```

**Response:**
```json
{
  "message": "Success",
  "data": {
    "client_secret": "pi_xxx_secret_xxx",
    "payment_intent_id": "pi_xxx",
    "amount": 3700.00,
    "currency": "try"
  }
}
```

**Actions:**
- Stripe Payment Intent oluştur
- Order'a payment_intent_id kaydet
- Return client_secret for frontend

---

### 14. Stripe Webhook
**Endpoint:** `POST /api/method/culinary_portal.api.payments.stripe_webhook`  
**Allow Guest:** ✅ Yes (Stripe'tan gelir)  
**Auth:** Signature verification

**Handled Events:**
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `charge.refunded`

**Actions on Success:**
- Order → payment_status = Paid
- Order → status = Confirmed
- Stock düş
- Email gönder

---

### 15. Get Payment Status
**Endpoint:** `GET /api/method/culinary_portal.api.payments.get_payment_status`  
**Auth Required:** ✅ Yes

**Parameters:**
- `order_id`: Order ID

**Response:**
```json
{
  "message": "Success",
  "data": {
    "order_id": "ORD-2024-00001",
    "payment_status": "Paid",
    "payment_method": "Stripe",
    "payment_date": "2024-11-06 15:45:00",
    "amount": 3700.00,
    "currency": "TRY",
    "stripe_payment_id": "pi_xxx"
  }
}
```

---

## 🏭 SUPPLIER APIs

### 16. Get Supplier Orders
**Endpoint:** `GET /api/method/culinary_portal.api.supplier.get_supplier_orders`  
**Auth Required:** ✅ Yes (Supplier role)

**Parameters:**
- `supplier`: Supplier ID (optional, defaults to current user)
- `status`: Order status (optional)
- `from_date`, `to_date`: Date range
- `page`, `page_size`: Pagination

**Response:**
```json
{
  "message": "Success",
  "data": {
    "orders": [
      {
        "name": "ORD-2024-00001",
        "order_no": "ORD-001",
        "customer_name": "Örnek Restoran",
        "order_date": "2024-11-06 15:30:00",
        "delivery_date": "2024-11-10",
        "status": "Confirmed",
        "my_items": [
          {
            "item_name": "Hamburger Köftesi",
            "qty": 20,
            "amount": 2850.00
          }
        ],
        "my_total": 2850.00
      }
    ],
    "total": 5
  }
}
```

**Note:** Supplier sadece kendi ürünlerinin olduğu siparişleri görür

---

### 17. Update Order Status
**Endpoint:** `POST /api/method/culinary_portal.api.supplier.update_order_status`  
**Auth Required:** ✅ Yes (Supplier role)

**Request:**
```json
{
  "order_id": "ORD-2024-00001",
  "status": "Shipped",
  "tracking_number": "1234567890",
  "notes": "Aras kargo ile gönderildi"
}
```

**Response:**
```json
{
  "message": "Sipariş durumu güncellendi",
  "data": {
    "order_id": "ORD-2024-00001",
    "status": "Shipped",
    "updated_date": "2024-11-08 10:00:00"
  }
}
```

**Status Flow:**
- Confirmed → Processing
- Processing → Shipped (tracking_number required)
- Shipped → Delivered

---

### 18. Get Supplier Products
**Endpoint:** `GET /api/method/culinary_portal.api.supplier.get_supplier_products`  
**Auth Required:** ✅ Yes (Supplier role)

**Parameters:**
- `supplier`: Supplier ID (optional)

**Response:**
```json
{
  "message": "Success",
  "data": [
    {
      "item_code": "ITEM-001",
      "item_name": "Hamburger Köftesi",
      "stock_qty": 500,
      "reserved_qty": 50,
      "available_qty": 450,
      "standard_rate": 150.00,
      "active_agreements": 5,
      "status": "Active"
    }
  ]
}
```

---

### 19. Update Product Stock
**Endpoint:** `POST /api/method/culinary_portal.api.supplier.update_product_stock`  
**Auth Required:** ✅ Yes (Supplier role)

**Request:**
```json
{
  "item_code": "ITEM-001",
  "qty": 1000,
  "notes": "Yeni stok girişi"
}
```

**Response:**
```json
{
  "message": "Stok güncellendi",
  "data": {
    "item_code": "ITEM-001",
    "old_qty": 500,
    "new_qty": 1000,
    "updated_date": "2024-11-06 16:00:00"
  }
}
```

---

## 📊 STATISTICS APIs (Bonus)

### 20. Customer Dashboard Stats
**Endpoint:** `GET /api/method/culinary_portal.api.stats.customer_dashboard`  
**Auth Required:** ✅ Yes

**Response:**
```json
{
  "message": "Success",
  "data": {
    "pending_orders": 3,
    "this_month_orders": 12,
    "this_month_amount": 45000.00,
    "top_products": [
      {
        "item_name": "Hamburger Köftesi",
        "total_qty": 500,
        "total_amount": 15000.00
      }
    ],
    "recent_orders": [...]
  }
}
```

---

### 21. Supplier Dashboard Stats
**Endpoint:** `GET /api/method/culinary_portal.api.stats.supplier_dashboard`  
**Auth Required:** ✅ Yes (Supplier role)

**Response:**
```json
{
  "message": "Success",
  "data": {
    "new_orders": 5,
    "this_month_sales": 120000.00,
    "pending_shipments": 8,
    "low_stock_items": 3,
    "monthly_chart": [
      { "month": "Ekim", "sales": 95000 },
      { "month": "Kasım", "sales": 120000 }
    ]
  }
}
```

---

## 🔄 CACHE STRATEGY

### Redis Cache Keys
```python
# Products (30 min)
customer_products:{customer_id}
product_detail:{item_code}

# Agreements (1 hour)
customer_agreement:{customer_id}

# User profile (10 min)
user_profile:{user_id}

# Stats (5 min)
dashboard_stats:{user_type}:{user_id}
```

### Cache Invalidation
```python
# When to clear cache:

# Product cache → clear on:
- Item update
- Agreement update
- Price change

# Order cache → clear on:
- New order
- Order status change

# User cache → clear on:
- Profile update
- Agreement signed
```

---

## 🔒 PERMISSION MATRIX

| API | Customer | Supplier | Admin |
|-----|----------|----------|-------|
| Register | ✅ Guest | ✅ Guest | ❌ |
| Get Products | ✅ Own | ❌ | ✅ All |
| Create Order | ✅ Own | ❌ | ✅ All |
| Get Orders | ✅ Own | ✅ Related | ✅ All |
| Update Order Status | ❌ | ✅ Own | ✅ All |
| Update Stock | ❌ | ✅ Own | ✅ All |

---

## 📝 IMPLEMENTATION CHECKLIST

### Phase 1: Core APIs
- [ ] auth.py (register, profile)
- [ ] agreements.py (get, sign)
- [ ] products.py (list, detail, search)

### Phase 2: Order APIs
- [ ] orders.py (create, list, detail, cancel)
- [ ] payments.py (stripe intent, webhook)

### Phase 3: Supplier APIs
- [ ] supplier.py (orders, status, stock)
- [ ] stats.py (dashboard)

### Phase 4: Optimization
- [ ] Redis cache implementation
- [ ] Permission checks
- [ ] Rate limiting
- [ ] Error handling

---

## 🧪 TESTING

### API Test Cases
```python
# tests/test_auth.py
def test_register_customer_success():
def test_register_duplicate_email():
def test_login_invalid_credentials():

# tests/test_products.py
def test_get_customer_products():
def test_get_products_without_agreement():
def test_product_search():

# tests/test_orders.py
def test_create_order_success():
def test_create_order_insufficient_stock():
def test_create_order_invalid_price():
def test_cancel_order():
```

---

## 📚 REFERANSLAR

### Frappe Framework Docs
- [Whitelisted Methods](https://frappeframework.com/docs/user/en/api/whitelisted-methods)
- [Permission Rules](https://frappeframework.com/docs/user/en/desk/permissions)
- [Redis Cache](https://frappeframework.com/docs/user/en/api/cache)

### ERPNext Docs
- [Customer](https://docs.erpnext.com/docs/user/manual/en/CRM/customer)
- [Supplier](https://docs.erpnext.com/docs/user/manual/en/buying/supplier)
- [Item](https://docs.erpnext.com/docs/user/manual/en/stock/item)

---

**Son Güncelleme:** 6 Kasım 2025  
**API Versiyon:** v1.0

