"use client";

import Link from "next/link";

export default function TermsPage() {
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
            Hizmet Şartları
          </h1>

          <div className="prose prose-sm max-w-none text-text-secondary-light dark:text-text-secondary-dark space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                1. Genel Hükümler
              </h2>
              <p className="leading-relaxed">
                İşbu Hizmet Şartları, CC Culinary B2B platformunun kullanımına ilişkin genel kuralları belirlemektedir. 
                Platformu kullanarak bu şartları kabul etmiş sayılırsınız.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                2. Hesap Oluşturma ve Güvenlik
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Hesap bilgilerinizin doğruluğundan ve güncelliğinden siz sorumlusunuz</li>
                <li>Şifrenizin güvenliğini sağlamak sizin sorumluluğunuzdadır</li>
                <li>Hesabınız üzerinden gerçekleşen tüm işlemlerden siz sorumlusunuz</li>
                <li>Yetkisiz kullanım tespit ettiğinizde derhal bizi bilgilendirmelisiniz</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                3. Sipariş ve Ödeme
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tüm siparişler onay sürecinden geçer</li>
                <li>Fiyatlar ve ürün mevcudiyeti değişebilir</li>
                <li>Ödemeler güvenli yöntemlerle gerçekleştirilir</li>
                <li>Toptan satış için özel fiyatlandırma geçerlidir</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                4. Teslimat
              </h2>
              <p className="leading-relaxed">
                Teslimat süreleri tahminidir ve bölgeye göre değişiklik gösterebilir. 
                Kargo şirketlerinden kaynaklanan gecikmelerden şirketimiz sorumlu değildir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                5. İptal ve İade
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sipariş iptali belirli süre içinde yapılmalıdır</li>
                <li>Ürün iadesi şartlara uygun olmalıdır</li>
                <li>İade süreci 14 iş günü içinde tamamlanır</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                6. Fikri Mülkiyet
              </h2>
              <p className="leading-relaxed">
                Platform üzerindeki tüm içerik, görseller, logolar ve diğer materyaller CC Culinary nin 
                fikri mülkiyetidir ve izinsiz kullanılamaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                7. Sorumluluk Sınırlamaları
              </h2>
              <p className="leading-relaxed">
                Platformun kullanımından doğabilecek dolaylı zararlardan şirketimiz sorumlu değildir. 
                Hizmetlerimiz &quot;olduğu gibi&quot; sunulmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                8. Değişiklikler
              </h2>
              <p className="leading-relaxed">
                Bu şartlar herhangi bir zamanda değiştirilebilir. Değişiklikler platform üzerinden 
                duyurulacak ve devam eden kullanım ile kabul edilmiş sayılacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                9. İletişim
              </h2>
              <p className="leading-relaxed">
                Hizmet şartları hakkında sorularınız için: info@ccculinary.com
              </p>
            </section>

            <section className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                <strong className="text-text-primary-light dark:text-text-primary-dark">Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}
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



