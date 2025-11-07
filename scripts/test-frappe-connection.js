#!/usr/bin/env node
/**
 * Frappe bağlantısını test eden script
 * Kullanım: node scripts/test-frappe-connection.js
 */

require('dotenv').config({ path: '.env.local' });

const FRAPPE_URL = process.env.NEXT_PUBLIC_SITE_NAME;
const API_KEY = process.env.FRAPPE_API_KEY;
const API_SECRET = process.env.FRAPPE_API_SECRET;

console.log('🔍 Frappe Bağlantı Testi\n');
console.log('Environment Variables:');
console.log('─────────────────────────────────────');
console.log(`NEXT_PUBLIC_SITE_NAME: ${FRAPPE_URL || '❌ YOK'}`);
console.log(`FRAPPE_API_KEY: ${API_KEY ? '✅ Var (' + API_KEY.substring(0, 10) + '...)' : '⚠️  Yok (opsiyonel)'}`);
console.log(`FRAPPE_API_SECRET: ${API_SECRET ? '✅ Var' : '⚠️  Yok (opsiyonel)'}`);
console.log('─────────────────────────────────────\n');

async function testConnection() {
  if (!FRAPPE_URL) {
    console.error('❌ NEXT_PUBLIC_SITE_NAME environment variable tanımlı değil!');
    console.log('\n💡 Çözüm:');
    console.log('   .env.local dosyası oluşturun ve şunu ekleyin:');
    console.log('   NEXT_PUBLIC_SITE_NAME=http://localhost:8000\n');
    process.exit(1);
  }

  try {
    console.log('🔄 Frappe sunucusuna bağlanılıyor...\n');

    // Test 1: Frappe sunucusu erişilebilir mi?
    console.log('Test 1: Sunucu Durumu');
    const healthCheck = await fetch(`${FRAPPE_URL}/api/method/ping`);
    if (healthCheck.ok) {
      console.log('✅ Frappe sunucusu erişilebilir\n');
    } else {
      console.log(`⚠️  Sunucu cevap verdi ama status: ${healthCheck.status}\n`);
    }

    // Test 2: Website Settings kontrolü
    console.log('Test 2: Sign Up Durumu');
    try {
      const settingsResponse = await fetch(
        `${FRAPPE_URL}/api/resource/Website Settings`,
        {
          headers: API_KEY && API_SECRET ? {
            'Authorization': `token ${API_KEY}:${API_SECRET}`
          } : {}
        }
      );
      
      if (settingsResponse.ok) {
        const settings = await settingsResponse.json();
        const disableSignup = settings.data?.disable_signup;
        
        if (disableSignup === 0) {
          console.log('✅ Sign up AKTİF\n');
        } else {
          console.log('❌ Sign up DEVRE DIŞI!');
          console.log('\n💡 Çözüm:');
          console.log('   Frappe Console\'da şu komutu çalıştırın:');
          console.log('   frappe.db.set_value("Website Settings", None, "disable_signup", 0)');
          console.log('   frappe.db.commit()\n');
        }
      } else {
        console.log('⚠️  Website Settings kontrolü başarısız (API Key gerekebilir)\n');
      }
    } catch (e) {
      console.log('⚠️  Website Settings kontrolü yapılamadı\n');
    }

    // Test 3: Sign up endpoint testi
    console.log('Test 3: Sign Up Endpoint Testi');
    const testEmail = `test_${Date.now()}@test.com`;
    const signupTest = await fetch(
      `${FRAPPE_URL}/api/method/frappe.core.doctype.user.user.sign_up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: testEmail,
          full_name: 'Test User',
          redirect_to: '/login'
        })
      }
    );

    const signupData = await signupTest.json();
    
    if (signupTest.ok) {
      console.log('✅ Sign up endpoint çalışıyor\n');
      console.log('⚠️  Test kullanıcısı oluşturuldu:', testEmail);
      console.log('   Frappe\'den manuel olarak silebilirsiniz.\n');
    } else {
      if (signupData._server_messages || signupData.exception) {
        let errorMsg = signupData.exception || signupData._server_messages;
        
        if (typeof errorMsg === 'string' && errorMsg.includes('devre dışı')) {
          console.log('❌ Sign up DEVRE DIŞI!');
          console.log('\n💡 Çözüm: python3 scripts/enable-frappe-signup.py\n');
        } else {
          console.log('❌ Sign up hatası:', errorMsg, '\n');
        }
      } else {
        console.log('❌ Sign up endpoint hatası:', signupData, '\n');
      }
    }

    console.log('─────────────────────────────────────');
    console.log('Test tamamlandı!\n');

  } catch (error) {
    console.error('\n❌ Bağlantı Hatası:', error.message);
    console.log('\n💡 Kontrol Edin:');
    console.log('   1. Frappe sunucusu çalışıyor mu? (bench start)');
    console.log('   2. URL doğru mu?', FRAPPE_URL);
    console.log('   3. CORS ayarları yapıldı mı?\n');
    process.exit(1);
  }
}

testConnection();



