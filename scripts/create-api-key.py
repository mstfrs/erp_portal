#!/usr/bin/env python3
"""
Frappe API Key ve Secret Oluşturma Scripti
Kullanım: bench execute erp_portal.scripts.create_api_key.create_api_key
veya: python3 scripts/create-api-key.py (frappe-bench içinde)
"""

import frappe
import sys

def create_api_key(user_email=None):
    """API Key ve Secret oluştur"""
    
    if not user_email:
        user_email = input("User Email (default: Administrator): ").strip() or "Administrator"
    
    try:
        # Kullanıcı var mı kontrol et
        if not frappe.db.exists("User", user_email):
            print(f"❌ Kullanıcı bulunamadı: {user_email}")
            print("\n💡 Mevcut kullanıcılar:")
            users = frappe.get_all("User", 
                filters={"enabled": 1, "user_type": "System User"}, 
                fields=["name", "full_name"],
                limit=10
            )
            for u in users:
                print(f"   - {u.name} ({u.full_name})")
            return False
        
        # API Key ve Secret oluştur
        api_key = frappe.generate_hash(length=15)
        api_secret = frappe.generate_hash(length=15)
        
        # Kullanıcıya ata
        frappe.db.set_value("User", user_email, "api_key", api_key)
        frappe.db.set_value("User", user_email, "api_secret", api_secret)
        frappe.db.commit()
        
        # Güzel bir output
        print("\n" + "="*70)
        print("✅ API Key ve Secret Başarıyla Oluşturuldu!")
        print("="*70)
        print(f"\n📧 Kullanıcı: {user_email}\n")
        print("📋 .env.local dosyanıza aşağıdaki satırları ekleyin:\n")
        print("-"*70)
        print(f"FRAPPE_API_KEY={api_key}")
        print(f"FRAPPE_API_SECRET={api_secret}")
        print("-"*70)
        print("\n⚠️  GÜVENLİK UYARISI:")
        print("   - Bu değerleri kimseyle paylaşmayın!")
        print("   - .env.local dosyası git'e commit edilmemeli!")
        print("   - Production'da farklı key'ler kullanın!\n")
        print("="*70)
        print("\n✅ Şimdi yapmanız gerekenler:")
        print("   1. Yukarıdaki değerleri .env.local dosyanıza ekleyin")
        print("   2. Dev sunucusunu yeniden başlatın: npm run dev")
        print("   3. Register sayfasını test edin\n")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Hata oluştu: {str(e)}")
        frappe.log_error(f"API Key creation error: {str(e)}")
        return False

if __name__ == "__main__":
    # Eğer argument varsa onu kullan
    user_email = sys.argv[1] if len(sys.argv) > 1 else None
    create_api_key(user_email)



