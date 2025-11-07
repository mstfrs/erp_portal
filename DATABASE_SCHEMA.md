# 🗄️ DATABASE SCHEMA

## ERPNext Culinary Portal - DocType Specifications

**Framework:** Frappe v15  
**Database:** MariaDB 10.6+  
**Naming:** Auto-generated with series

---

## 📊 ENTITY RELATIONSHIP DIAGRAM

```
┌─────────────┐
│    User     │ (Frappe Core)
└──────┬──────┘
       │
       │ 1:1
       │
┌──────▼──────────┐
│  Portal User    │
├─────────────────┤
│ user_type       │──┬──► Customer (ERPNext Core)
│ customer        │  │
│ supplier        │  └──► Supplier (ERPNext Core)
│ status          │
└────────┬────────┘
         │
         │ 1:N
         │
    ┌────▼─────────────────┐
    │ Customer Agreement   │
    ├──────────────────────┤
    │ customer             │
    │ start_date           │
    │ end_date             │
    │ status               │
    │                      │
    │ [Child: Agreement    │
    │  Items]              │
    │   - item             │──► Item (ERPNext Core)
    │   - rate             │
    │   - discount         │
    └──────────────────────┘

┌──────────────────┐
│ Supplier         │
│ Agreement        │
├──────────────────┤
│ supplier         │
│ commission       │
│                  │
│ [Child: Supplier │
│  Products]       │
│   - item         │──► Item (ERPNext Core)
│   - supply_price │
└──────────────────┘

┌──────────────────┐
│  Portal Order    │
├──────────────────┤
│ customer         │──► Customer
│ order_date       │
│ delivery_date    │
│ status           │
│ payment_status   │
│ stripe_payment_id│
│                  │
│ [Child: Order    │
│  Items]          │
│   - item         │──► Item
│   - supplier     │──► Supplier
│   - qty          │
│   - rate         │
│   - amount       │
└──────────────────┘
```

---

## 📋 DOCTYPE DETAYLARI

### 1. Portal User

**Purpose:** Frappe User ile Customer/Supplier arasında köprü

**Fields:**

| Field | Type | Options | Mandatory | Description |
|-------|------|---------|-----------|-------------|
| user | Link | User | ✅ | Frappe User (email) |
| user_type | Select | Customer, Supplier | ✅ | Kullanıcı tipi |
| customer | Link | Customer | ❌ | Customer link (if type=Customer) |
| supplier | Link | Supplier | ❌ | Supplier link (if type=Supplier) |
| status | Select | Pending, Active, Suspended | ✅ | Hesap durumu |
| registration_date | Date | - | ✅ | Kayıt tarihi |
| agreement_signed | Check | - | ❌ | Anlaşma imzalandı mı? |
| agreement_date | Date | - | ❌ | Anlaşma imza tarihi |
| notes | Text | - | ❌ | Admin notları |

**Naming:** `PU-{YYYY}-{#####}` (e.g., PU-2024-00001)

**Permissions:**
```python
{
    "Portal Customer": {
        "read": 1,
        "write": 0,  # Sadece read
        "create": 0,
        "if_owner": 1
    },
    "Portal Supplier": {
        "read": 1,
        "write": 0,
        "create": 0,
        "if_owner": 1
    },
    "System Manager": {
        "read": 1,
        "write": 1,
        "create": 1,
        "delete": 1
    }
}
```

**Validations:**
```python
def validate(self):
    # User type'a göre customer veya supplier zorunlu
    if self.user_type == "Customer" and not self.customer:
        frappe.throw("Customer is mandatory")
    
    if self.user_type == "Supplier" and not self.supplier:
        frappe.throw("Supplier is mandatory")
    
    # User unique olmalı
    if frappe.db.exists("Portal User", {"user": self.user, "name": ["!=", self.name]}):
        frappe.throw("User already exists")
```

**Indexes:**
- `user` (unique)
- `customer`
- `supplier`
- `status`

---

### 2. Customer Agreement

**Purpose:** Müşteri-Ürün anlaşmaları, fiyatlandırma ve koşullar

**Fields:**

| Field | Type | Options | Mandatory | Description |
|-------|------|---------|-----------|-------------|
| **Temel Bilgiler** |
| agreement_no | Data | - | ✅ | Anlaşma numarası (auto) |
| customer | Link | Customer | ✅ | Müşteri |
| customer_name | Data | - | ❌ | Müşteri adı (fetch) |
| start_date | Date | - | ✅ | Başlangıç tarihi |
| end_date | Date | - | ✅ | Bitiş tarihi |
| status | Select | Draft, Active, Expired, Terminated | ✅ | Durum |
| **Anlaşma İçeriği** |
| agreement_terms | Text Editor | - | ✅ | Anlaşma şartları (HTML) |
| payment_terms | Select | Net 30, Net 60, COD | ✅ | Ödeme koşulları |
| delivery_terms | Text | - | ❌ | Teslimat koşulları |
| minimum_order_value | Currency | - | ❌ | Min. sipariş tutarı |
| **İmza Bilgileri** |
| signed | Check | - | ❌ | İmzalandı mı? |
| signed_by | Data | - | ❌ | İmzalayan kişi |
| signature_date | Datetime | - | ❌ | İmza tarihi |
| signature_data | Attach Image | - | ❌ | İmza görseli |
| signed_document | Attach | - | ❌ | İmzalı PDF |
| ip_address | Data | - | ❌ | İmza IP adresi |
| **Sistem** |
| approved_by | Link | User | ❌ | Onaylayan admin |
| approval_date | Date | - | ❌ | Onay tarihi |
| notes | Text | - | ❌ | Admin notları |

**Child Table: Agreement Items**

| Field | Type | Options | Mandatory | Description |
|-------|------|---------|-----------|-------------|
| item | Link | Item | ✅ | Ürün |
| item_name | Data | - | ❌ | Ürün adı (fetch) |
| item_group | Link | Item Group | ❌ | Kategori (fetch) |
| price_list | Link | Price List | ✅ | Fiyat listesi |
| price_list_rate | Currency | - | ✅ | Liste fiyatı |
| discount_percent | Percent | - | ❌ | İndirim % |
| rate | Currency | - | ✅ | Net fiyat (calculated) |
| min_order_qty | Float | - | ❌ | Min. sipariş miktarı |
| max_order_qty | Float | - | ❌ | Max. sipariş miktarı |
| uom | Link | UOM | ✅ | Birim (fetch) |

**Naming:** `AGR-CUST-{YYYY}-{#####}`

**Validations:**
```python
def validate(self):
    # End date > start date
    if self.end_date <= self.start_date:
        frappe.throw("End date must be after start date")
    
    # En az 1 item olmalı
    if not self.items:
        frappe.throw("At least one item is required")
    
    # Rate calculation
    for item in self.items:
        item.rate = item.price_list_rate * (1 - item.discount_percent/100)
    
    # Status logic
    if self.signed and self.status == "Draft":
        self.status = "Active"

def on_submit(self):
    # Portal User'ı güncelle
    portal_user = frappe.get_value("Portal User", 
        {"customer": self.customer}, "name")
    if portal_user:
        frappe.db.set_value("Portal User", portal_user, 
            "agreement_signed", 1)
```

**Auto Status Update (Scheduled):**
```python
# hooks.py
scheduler_events = {
    "daily": [
        "culinary_portal.tasks.expire_agreements"
    ]
}

# tasks.py
def expire_agreements():
    """Süresi dolan anlaşmaları Expired yap"""
    today = frappe.utils.today()
    agreements = frappe.get_all("Customer Agreement",
        filters={"status": "Active", "end_date": ["<", today]})
    
    for agr in agreements:
        frappe.db.set_value("Customer Agreement", agr.name, 
            "status", "Expired")
```

**Permissions:**
```python
{
    "Portal Customer": {
        "read": 1,
        "if_owner": 1,
        "permission_query": "culinary_portal.permissions.customer_agreement_query"
    },
    "System Manager": {
        "read": 1,
        "write": 1,
        "create": 1,
        "submit": 1
    }
}
```

**Indexes:**
- `customer`
- `status`
- `end_date`

---

### 3. Supplier Agreement

**Purpose:** Tedarikçi anlaşmaları ve ürün tedarik koşulları

**Fields:**

| Field | Type | Options | Mandatory | Description |
|-------|------|---------|-----------|-------------|
| agreement_no | Data | - | ✅ | Anlaşma numarası |
| supplier | Link | Supplier | ✅ | Tedarikçi |
| supplier_name | Data | - | ❌ | Tedarikçi adı |
| start_date | Date | - | ✅ | Başlangıç |
| end_date | Date | - | ✅ | Bitiş |
| status | Select | Draft, Active, Expired | ✅ | Durum |
| commission_percent | Percent | - | ❌ | Komisyon oranı |
| payment_terms | Select | Net 30, Net 60, COD | ✅ | Ödeme koşulları |
| agreement_terms | Text Editor | - | ✅ | Şartlar |
| signed | Check | - | ❌ | İmzalandı mı? |
| signed_date | Date | - | ❌ | İmza tarihi |

**Child Table: Supplier Products**

| Field | Type | Options | Mandatory |
|-------|------|---------|-----------|
| item | Link | Item | ✅ |
| item_name | Data | - | ❌ |
| supply_price | Currency | - | ✅ |
| stock_qty | Float | - | ❌ |
| lead_time_days | Int | - | ❌ |
| is_active | Check | - | ✅ |

**Naming:** `AGR-SUPP-{YYYY}-{#####}`

**Permissions:** (Customer Agreement ile aynı mantık)

---

### 4. Portal Order

**Purpose:** Portal üzerinden verilen siparişler

**Fields:**

| Field | Type | Options | Mandatory | Description |
|-------|------|---------|-----------|-------------|
| **Sipariş Bilgileri** |
| order_no | Data | - | ✅ | Sipariş numarası |
| customer | Link | Customer | ✅ | Müşteri |
| customer_name | Data | - | ❌ | Müşteri adı |
| order_date | Datetime | - | ✅ | Sipariş tarihi |
| delivery_date | Date | - | ✅ | İstenen teslimat |
| status | Select | Draft, Confirmed, Processing, Shipped, Delivered, Cancelled | ✅ | Sipariş durumu |
| **Ödeme Bilgileri** |
| payment_status | Select | Pending, Paid, Refunded | ✅ | Ödeme durumu |
| payment_method | Select | Stripe, Bank Transfer | ❌ | Ödeme yöntemi |
| stripe_payment_id | Data | - | ❌ | Stripe Payment ID |
| payment_date | Datetime | - | ❌ | Ödeme tarihi |
| **Teslimat** |
| shipping_address | Link | Address | ✅ | Teslimat adresi |
| shipping_address_display | Text | - | ❌ | Adres (display) |
| tracking_number | Data | - | ❌ | Kargo takip no |
| shipped_date | Datetime | - | ❌ | Kargoya verilme |
| delivered_date | Datetime | - | ❌ | Teslim tarihi |
| **Tutarlar** |
| total_qty | Float | - | ❌ | Toplam miktar |
| total_amount | Currency | - | ❌ | Toplam tutar |
| discount_amount | Currency | - | ❌ | İndirim tutarı |
| net_amount | Currency | - | ❌ | Net tutar |
| currency | Link | Currency | ✅ | Para birimi |
| **Diğer** |
| notes | Text | - | ❌ | Müşteri notları |
| admin_notes | Text | - | ❌ | Admin notları |
| cancelled_reason | Text | - | ❌ | İptal nedeni |

**Child Table: Order Items**

| Field | Type | Options | Mandatory | Description |
|-------|------|---------|-----------|-------------|
| item | Link | Item | ✅ | Ürün |
| item_name | Data | - | ❌ | Ürün adı |
| item_group | Link | Item Group | ❌ | Kategori |
| supplier | Link | Supplier | ✅ | Tedarikçi |
| supplier_name | Data | - | ❌ | Tedarikçi adı |
| qty | Float | - | ✅ | Miktar |
| uom | Link | UOM | ✅ | Birim |
| rate | Currency | - | ✅ | Birim fiyat |
| amount | Currency | - | ✅ | Tutar (qty * rate) |
| agreement_reference | Link | Customer Agreement | ❌ | İlgili anlaşma |

**Naming:** `ORD-{YYYY}-{#####}`

**Workflow:**

```
Draft ──► Confirmed ──► Processing ──► Shipped ──► Delivered
   │                                              
   └──────────────► Cancelled
```

**Validations:**
```python
def validate(self):
    self.validate_items()
    self.validate_agreement()
    self.validate_stock()
    self.calculate_totals()

def validate_items(self):
    """En az 1 item olmalı"""
    if not self.items:
        frappe.throw("Items required")

def validate_agreement(self):
    """Ürünler anlaşmada var mı?"""
    agreement = frappe.get_value("Customer Agreement",
        {"customer": self.customer, "status": "Active"}, "name")
    
    if not agreement:
        frappe.throw("No active agreement found")
    
    agreement_items = frappe.get_all("Agreement Items",
        filters={"parent": agreement},
        fields=["item"])
    
    agreement_item_codes = [d.item for d in agreement_items]
    
    for item in self.items:
        if item.item not in agreement_item_codes:
            frappe.throw(f"Item {item.item_name} not in agreement")

def validate_stock(self):
    """Stok kontrolü"""
    for item in self.items:
        available = frappe.db.get_value("Bin", 
            {"item_code": item.item}, "actual_qty") or 0
        
        if available < item.qty:
            frappe.throw(f"Insufficient stock for {item.item_name}")

def calculate_totals(self):
    """Toplamları hesapla"""
    self.total_qty = sum(item.qty for item in self.items)
    self.total_amount = sum(item.amount for item in self.items)
    self.net_amount = self.total_amount - (self.discount_amount or 0)

def on_submit(self):
    """Sipariş onaylandığında"""
    # Email gönder
    self.send_order_confirmation_email()
    
    # Notification oluştur
    self.create_notification()

def on_payment_success(self):
    """Ödeme başarılı olduğunda"""
    self.payment_status = "Paid"
    self.status = "Confirmed"
    self.save()
    
    # Stok düş
    self.update_stock()
    
    # Email
    self.send_payment_confirmation_email()
```

**Permission Query:**
```python
# permissions.py
def portal_order_query(user):
    """Kullanıcı sadece kendi siparişlerini görür"""
    if "System Manager" in frappe.get_roles(user):
        return None  # Admin hepsini görsün
    
    portal_user = frappe.get_value("Portal User", {"user": user})
    if not portal_user:
        return "1=0"  # Hiçbir şey görmesin
    
    user_type = frappe.db.get_value("Portal User", portal_user, "user_type")
    
    if user_type == "Customer":
        customer = frappe.db.get_value("Portal User", portal_user, "customer")
        return f"`tabPortal Order`.customer = '{customer}'"
    
    elif user_type == "Supplier":
        supplier = frappe.db.get_value("Portal User", portal_user, "supplier")
        return f"""
            `tabPortal Order`.name IN (
                SELECT parent FROM `tabOrder Items` 
                WHERE supplier = '{supplier}'
            )
        """
```

**Indexes:**
- `customer`
- `status`
- `payment_status`
- `order_date`
- `delivery_date`

---

## 🔗 ERPNext CORE DOCTYPES (Kullanacağımız)

### Customer
- `name`: CUST-xxxxx
- `customer_name`: Firma adı
- `tax_id`: Vergi numarası
- `customer_type`: Company/Individual

### Supplier
- `name`: SUPP-xxxxx
- `supplier_name`: Tedarikçi adı
- `supplier_type`: Company/Individual

### Item
- `item_code`: ITEM-xxxxx
- `item_name`: Ürün adı
- `item_group`: Kategori
- `description`: Açıklama
- `image`: Ürün resmi
- `standard_rate`: Standart fiyat

### Address
- Linked to Customer/Supplier
- `address_line1`, `address_line2`
- `city`, `state`, `country`
- `pincode`

### Price List
- `price_list_name`: Standard Selling
- Price List Rate: Item'a özel fiyatlar

---

## 📊 DATABASE VIEWS (Optional)

### v_customer_products
```sql
CREATE VIEW v_customer_products AS
SELECT 
    ai.item,
    ai.item_name,
    ai.rate,
    ca.customer,
    i.image,
    i.description,
    b.actual_qty as stock_qty
FROM `tabAgreement Items` ai
INNER JOIN `tabCustomer Agreement` ca ON ai.parent = ca.name
INNER JOIN `tabItem` i ON ai.item = i.name
LEFT JOIN `tabBin` b ON i.name = b.item_code
WHERE ca.status = 'Active'
AND ca.end_date >= CURDATE();
```

### v_supplier_orders
```sql
CREATE VIEW v_supplier_orders AS
SELECT 
    po.name as order_id,
    po.order_no,
    po.customer_name,
    po.order_date,
    po.status,
    oi.supplier,
    oi.supplier_name,
    SUM(oi.amount) as supplier_total
FROM `tabPortal Order` po
INNER JOIN `tabOrder Items` oi ON po.name = oi.parent
GROUP BY po.name, oi.supplier;
```

---

## 🔐 ROW LEVEL SECURITY

### Permission Rules
```python
# hooks.py
permission_query_conditions = {
    "Portal Order": "culinary_portal.permissions.portal_order_query",
    "Customer Agreement": "culinary_portal.permissions.customer_agreement_query",
    "Supplier Agreement": "culinary_portal.permissions.supplier_agreement_query"
}
```

---

## 🗂️ CUSTOM INDEXES

```sql
-- Performance indexes
ALTER TABLE `tabPortal Order` 
ADD INDEX idx_customer_status (customer, status);

ALTER TABLE `tabPortal Order` 
ADD INDEX idx_order_date (order_date DESC);

ALTER TABLE `tabCustomer Agreement` 
ADD INDEX idx_customer_status (customer, status, end_date);

ALTER TABLE `tabAgreement Items` 
ADD INDEX idx_parent_item (parent, item);
```

---

## 📈 DATA MIGRATION PLAN

### Initial Setup
1. Import Customers (Excel)
2. Import Suppliers (Excel)
3. Import Items (Excel)
4. Create Price Lists
5. Create Agreements (manual)
6. Create Portal Users (script)

### Migration Script Example
```python
# migrations/create_portal_users.py

def execute():
    """Mevcut Customer'lar için Portal User oluştur"""
    customers = frappe.get_all("Customer", 
        filters={"disabled": 0},
        fields=["name", "customer_name", "email_id"])
    
    for cust in customers:
        if not cust.email_id:
            continue
        
        # User oluştur (eğer yoksa)
        if not frappe.db.exists("User", cust.email_id):
            user = frappe.get_doc({
                "doctype": "User",
                "email": cust.email_id,
                "first_name": cust.customer_name,
                "send_welcome_email": 0
            })
            user.add_roles("Portal Customer")
            user.insert(ignore_permissions=True)
        
        # Portal User oluştur
        if not frappe.db.exists("Portal User", {"user": cust.email_id}):
            portal_user = frappe.get_doc({
                "doctype": "Portal User",
                "user": cust.email_id,
                "user_type": "Customer",
                "customer": cust.name,
                "status": "Pending",
                "registration_date": frappe.utils.today()
            })
            portal_user.insert(ignore_permissions=True)
```

---

## 🧪 TEST DATA

### Sample Data Script
```python
# fixtures/sample_data.py

def create_sample_data():
    # Sample Customer
    customer = frappe.get_doc({
        "doctype": "Customer",
        "customer_name": "Örnek Restoran",
        "customer_type": "Company",
        "tax_id": "1234567890"
    }).insert()
    
    # Sample Items
    items = []
    for i in range(1, 6):
        item = frappe.get_doc({
            "doctype": "Item",
            "item_code": f"ITEM-{i:03d}",
            "item_name": f"Ürün {i}",
            "item_group": "Et Ürünleri",
            "standard_rate": 100.0 * i
        }).insert()
        items.append(item)
    
    # Sample Agreement
    agreement = frappe.get_doc({
        "doctype": "Customer Agreement",
        "customer": customer.name,
        "start_date": "2024-01-01",
        "end_date": "2024-12-31",
        "status": "Active",
        "items": [
            {
                "item": item.name,
                "price_list_rate": item.standard_rate,
                "rate": item.standard_rate * 0.9,
                "discount_percent": 10
            }
            for item in items
        ]
    }).insert()
```

---

## 📝 CHECKLIST

### DocType Creation
- [ ] Portal User
- [ ] Customer Agreement
- [ ] Supplier Agreement
- [ ] Portal Order

### Permissions
- [ ] Portal Customer role
- [ ] Portal Supplier role
- [ ] Permission queries

### Validations
- [ ] Agreement validations
- [ ] Order validations
- [ ] Stock checks

### Workflows
- [ ] Order workflow
- [ ] Agreement approval (optional)

### Indexes
- [ ] Performance indexes
- [ ] Search indexes

### Testing
- [ ] Unit tests
- [ ] Permission tests
- [ ] Integration tests

---

**Son Güncelleme:** 6 Kasım 2025  
**Schema Versiyon:** 1.0

