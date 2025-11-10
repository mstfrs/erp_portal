"use client";

import Link from "next/link";

export default function KVKKPage() {
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
            Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
          </h1>

          <div className="prose prose-sm max-w-none text-text-secondary-light dark:text-text-secondary-dark space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                1. Veri Sorumlusu
              </h2>
              <p className="leading-relaxed">
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; 
                veri sorumlusu olarak CC Culinary tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                2. Kişisel Verilerin İşlenme Amacı
              </h2>
              <p className="leading-relaxed mb-2">
                Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenebilecektir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Üyelik işlemlerinin gerçekleştirilmesi</li>
                <li>Sipariş ve teslimat süreçlerinin yönetilmesi</li>
                <li>Müşteri hizmetlerinin sunulması</li>
                <li>Ürün ve hizmetlerin geliştirilmesi</li>
                <li>İletişim faaliyetlerinin yürütülmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Güvenlik ve kalite kontrol süreçlerinin yürütülmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                3. İşlenen Kişisel Veriler
              </h2>
              <p className="leading-relaxed mb-2">
                Platform üzerinden toplanan kişisel verileriniz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kimlik bilgileri (ad, soyad)</li>
                <li>İletişim bilgileri (e-posta, telefon)</li>
                <li>Firma bilgileri (firma adı, referans kodu)</li>
                <li>İşlem güvenliği bilgileri (şifre - şifreli)</li>
                <li>İşlem bilgileri (sipariş geçmişi, tercihler)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                4. Kişisel Verilerin Aktarılması
              </h2>
              <p className="leading-relaxed">
                Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; 
                iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere 
                KVKK nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları 
                çerçevesinde aktarılabilecektir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              </h2>
              <p className="leading-relaxed">
                Kişisel verileriniz, elektronik ortamda kayıt altına alınarak KVKK nın 5. ve 6. maddelerinde 
                belirtilen kişisel veri işleme şartları ve amaçları kapsamında işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                6. Kişisel Veri Sahibinin Hakları
              </h2>
              <p className="leading-relaxed mb-2">
                KVKK nın 11. maddesi uyarınca kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-3">
                7. İletişim
              </h2>
              <p className="leading-relaxed">
                Kişisel verileriniz ile ilgili taleplerinizi, KVKK nın 13. maddesinin 1. fıkrası gereğince 
                Şirketimize başvurabilirsiniz. Başvurularınızı info@ccculinary.com e-posta adresi üzerinden 
                veya şirket adresimize yazılı olarak iletebilirsiniz.
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



