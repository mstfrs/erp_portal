#!/usr/bin/env node
/**
 * Frappe login testi
 * Kullanım: node scripts/test-frappe-login.js email@example.com password
 */

require('dotenv').config({ path: '.env.local' });

const FRAPPE_URL = process.env.NEXT_PUBLIC_SITE_NAME;
const [, , email, password] = process.argv;

if (!email || !password) {
  console.error('❌ Kullanım: node scripts/test-frappe-login.js email@example.com password');
  process.exit(1);
}

console.log('🔐 Frappe Login Testi\n');
console.log('─────────────────────────────────────');
console.log(`URL: ${FRAPPE_URL}`);
console.log(`Email: ${email}`);
console.log(`Password: ${'*'.repeat(password.length)}`);
console.log('─────────────────────────────────────\n');

async function testLogin() {
  if (!FRAPPE_URL) {
    console.error('❌ NEXT_PUBLIC_SITE_NAME environment variable tanımlı değil!');
    process.exit(1);
  }

  try {
    console.log('🔄 Login denemesi...\n');

    const response = await fetch(
      `${FRAPPE_URL}/api/method/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usr: email,
          pwd: password,
        }),
      }
    );

    const data = await response.json().catch(() => ({}));

    console.log('Response Status:', response.status, response.statusText);
    console.log('Response Data:', JSON.stringify(data, null, 2), '\n');

    if (response.ok) {
      console.log('✅ LOGIN BAŞARILI!\n');
      console.log('📋 Detaylar:');
      console.log('   - Status:', response.status);
      console.log('   - Cookies:', response.headers.get('set-cookie') ? '✅ Var' : '❌ Yok');
      console.log('\n💡 Bu bilgilerle frontend\'de login yapabilirsiniz.\n');
      
      // Session kontrolü
      const cookies = response.headers.get('set-cookie');
      if (cookies) {
        console.log('🍪 Cookie Detayları:');
        const cookieList = cookies.split(',').map(c => c.trim());
        cookieList.forEach(cookie => {
          const name = cookie.split('=')[0];
          console.log(`   - ${name}`);
        });
      }
    } else {
      console.log('❌ LOGIN BAŞARISIZ!\n');
      
      // Hata analizi
      if (response.status === 401) {
        console.log('🔍 Neden 401 Unauthorized?\n');
        console.log('Olası Sebepler:');
        console.log('   1. ❌ Email veya şifre yanlış');
        console.log('   2. ❌ Kullanıcı devre dışı (disabled)');
        console.log('   3. ❌ Kullanıcı mevcut değil\n');
        
        console.log('💡 Çözüm Önerileri:');
        console.log('   1. Frappe\'de User sayfasını kontrol edin');
        console.log('   2. Kullanıcının "Enabled" checkbox\'ı açık mı?');
        console.log('   3. Şifre doğru mu?');
        console.log('   4. Email büyük/küçük harf duyarlı olabilir\n');
        
        // Frappe'de kullanıcıyı kontrol et
        console.log('🔍 Kullanıcı Kontrol Önerisi:');
        console.log(`   ${FRAPPE_URL}/app/user/${encodeURIComponent(email)}\n`);
      } else if (response.status === 403) {
        console.log('🔍 403 Forbidden - Erişim engellendi\n');
      } else if (response.status === 500) {
        console.log('🔍 500 Server Error - Frappe sunucu hatası\n');
        console.log('💡 Frappe logs kontrol edin:');
        console.log('   tail -f frappe-bench/logs/web.log\n');
      }
      
      // Hata mesajı varsa göster
      if (data._server_messages) {
        console.log('📄 Server Messages:', data._server_messages);
      }
      if (data.exception) {
        console.log('⚠️  Exception:', data.exception);
      }
      if (data.message) {
        console.log('📝 Message:', data.message);
      }
    }

  } catch (error) {
    console.error('\n❌ Bağlantı Hatası:', error.message);
    console.log('\n💡 Kontrol Edin:');
    console.log('   1. Frappe sunucusu çalışıyor mu? (bench start)');
    console.log('   2. URL doğru mu?', FRAPPE_URL);
    console.log('   3. Network bağlantısı var mı?\n');
    process.exit(1);
  }
}

testLogin();



