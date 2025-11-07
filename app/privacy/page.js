"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start p-4 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-4xl py-8">
        {/* Logo ve Geri Dön Butonu */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/auth/register" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Geri Dön</span>
          </Link>

          <div className="flex items-center gap-2">
            <svg 
              className="w-8 h-8 text-primary" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
              CC Culinary
            </span>
          </div>
        </div>

        {/* İçerik */}
        <div className="bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
            Gizlilik Politikası
          </h1>

          <div className="prose prose-sm max-w-none text-text-secondary-light dark:text-text-secondary-dark space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                1. Giriş
              </h2>
              <p className="leading-relaxed">
                CC Culinary olarak, müşterilerimizin gizliliğine saygı duyuyor ve kişisel verilerini 
                korumak için gerekli tüm önlemleri alıyoruz. Bu politika, kişisel verilerinizin nasıl 
                toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                2. Toplanan Bilgiler
              </h2>
              <p className="leading-relaxed mb-2">
                Platformumuz üzerinden aşağıdaki bilgiler toplanabilir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kişisel kimlik bilgileri (ad, soyad)</li>
                <li>İletişim bilgileri (e-posta, telefon)</li>
                <li>Firma bilgileri (firma adı, vergi numarası)</li>
                <li>Sipariş ve işlem geçmişi</li>
                <li>Ödeme bilgileri (güvenli şekilde işlenir)</li>
                <li>Kullanım verileri (IP adresi, tarayıcı bilgisi)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                3. Bilgilerin Kullanımı
              </h2>
              <p className="leading-relaxed mb-2">
                Toplanan bilgiler aşağıdaki amaçlarla kullanılır:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Hesap oluşturma ve yönetimi</li>
                <li>Sipariş işleme ve teslimat</li>
                <li>Müşteri destek hizmetleri</li>
                <li>Ödeme işlemleri</li>
                <li>Platform güvenliğinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Hizmetlerin iyileştirilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                4. Bilgi Güvenliği
              </h2>
              <p className="leading-relaxed">
                Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>SSL şifreleme teknolojisi</li>
                <li>Güvenli sunucu altyapısı</li>
                <li>Düzenli güvenlik güncellemeleri</li>
                <li>Erişim kontrolü ve yetkilendirme</li>
                <li>Veri yedekleme sistemleri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                5. Üçüncü Taraflarla Paylaşım
              </h2>
              <p className="leading-relaxed mb-2">
                Kişisel verileriniz aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Yasal zorunluluklar gereği</li>
                <li>Sipariş teslimatı için kargo firmaları ile</li>
                <li>Ödeme işlemleri için ödeme hizmet sağlayıcıları ile</li>
                <li>Hizmet kalitesini artırmak için analiz araçları ile</li>
              </ul>
              <p className="leading-relaxed mt-2">
                Tüm üçüncü taraf hizmet sağlayıcılarımız, verilerinizi korumak için sözleşmesel 
                yükümlülük altındadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                6. Çerezler (Cookies)
              </h2>
              <p className="leading-relaxed">
                Platformumuz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezleri 
                tarayıcı ayarlarınızdan yönetebilir veya devre dışı bırakabilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                7. Veri Saklama Süresi
              </h2>
              <p className="leading-relaxed">
                Kişisel verileriniz, toplama amacının gerektirdiği süre boyunca ve yasal zorunluluklar 
                gereğince saklanır. Artık gerekli olmayan veriler güvenli şekilde silinir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                8. Haklarınız
              </h2>
              <p className="leading-relaxed mb-2">
                Kişisel verileriniz hakkında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verilerinize erişim ve kopyasını talep etme</li>
                <li>Yanlış verilerin düzeltilmesini isteme</li>
                <li>Verilerinizin silinmesini talep etme</li>
                <li>Veri işleme faaliyetlerine itiraz etme</li>
                <li>Veri taşınabilirliği hakkı</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                9. Çocukların Gizliliği
              </h2>
              <p className="leading-relaxed">
                Hizmetlerimiz 18 yaş altındaki kişilere yönelik değildir. Bilinçli olarak 18 yaş 
                altındaki kişilerden kişisel bilgi toplamıyoruz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                10. Politika Değişiklikleri
              </h2>
              <p className="leading-relaxed">
                Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler platform 
                üzerinden ve e-posta ile duyurulacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                11. İletişim
              </h2>
              <p className="leading-relaxed">
                Gizlilik politikası veya kişisel verileriniz hakkında sorularınız için:
                <br />
                E-posta: privacy@ccculinary.com
                <br />
                Telefon: +90 XXX XXX XX XX
              </p>
            </section>

            <section className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                <strong className="text-text-primary-light dark:text-text-primary-dark">Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}
                <br />
                <strong className="text-text-primary-light dark:text-text-primary-dark">Yürürlük Tarihi:</strong> {new Date().toLocaleDateString('tr-TR')}
              </p>
            </section>
          </div>

          {/* Alt Butonlar */}
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Anladım, Devam Et
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



