"""
Frappe Custom Registration Method
Bu dosyayı şuraya kopyalayın:
frappe-bench/apps/culinary_portal/culinary_portal/api/auth.py

Veya mevcut bir app'inizin api klasörüne
"""

import frappe
from frappe import _

@frappe.whitelist(allow_guest=True)
def register_customer(email, first_name, last_name, phone, password, reference_code=None, company_name=None):
    """
    Custom kayıt endpoint'i - API Key gerektirmez
    
    Parametreler:
        email: Kullanıcı email'i
        first_name: Ad
        last_name: Soyad
        phone: Telefon
        password: Şifre
        reference_code: Referans kodu (opsiyonel)
        company_name: Firma adı (opsiyonel)
    """
    
    try:
        # Email zaten kayıtlı mı kontrol et
        if frappe.db.exists("User", email):
            frappe.throw(_("Bu e-posta adresi zaten kayıtlı"))
        
        # Yeni kullanıcı oluştur
        user = frappe.get_doc({
            "doctype": "User",
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "full_name": f"{first_name} {last_name}",
            "phone": phone,
            "mobile_no": phone,
            "enabled": 1,
            "new_password": password,
            "send_welcome_email": 0,
            "user_type": "Website User",
            # Custom fields (varsa)
            "reference_code": reference_code,
            "company_name": company_name,
        })
        
        # Kullanıcıyı kaydet
        user.insert(ignore_permissions=True)
        
        # Rol ekle (isteğe bağlı)
        user.add_roles("Customer")
        
        # Commit
        frappe.db.commit()
        
        return {
            "success": True,
            "message": "Kayıt başarılı! Giriş yapabilirsiniz.",
            "user": {
                "email": user.email,
                "full_name": user.full_name,
                "name": user.name
            }
        }
        
    except frappe.DuplicateEntryError:
        frappe.throw(_("Bu e-posta adresi zaten kayıtlı"))
    except Exception as e:
        frappe.log_error(f"Registration error: {str(e)}")
        frappe.throw(_("Kayıt işlemi başarısız oldu: {0}").format(str(e)))



