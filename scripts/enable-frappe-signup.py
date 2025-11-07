#!/usr/bin/env python3
"""
Frappe'de Sign Up'ı Aktif Eden Script
Kullanım: python3 scripts/enable-frappe-signup.py
veya: bench execute culinary_portal.scripts.enable_frappe_signup.enable_signup
"""

import frappe

def enable_signup():
    """Sign up'ı aktif et ve ayarları kontrol et"""
    try:
        # Sign up'ı aktif et
        frappe.db.set_value("Website Settings", None, "disable_signup", 0)
        frappe.db.commit()
        
        # Kontrol et
        disabled = frappe.db.get_single_value("Website Settings", "disable_signup")
        
        if disabled == 0:
            print("✅ Sign up başarıyla aktif edildi!")
            print(f"✅ disable_signup değeri: {disabled}")
            return True
        else:
            print("❌ Sign up aktif edilemedi!")
            print(f"❌ disable_signup değeri: {disabled}")
            return False
            
    except Exception as e:
        print(f"❌ Hata: {str(e)}")
        return False

if __name__ == "__main__":
    enable_signup()



