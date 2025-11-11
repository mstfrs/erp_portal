"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationCompletePage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // 10 saniye countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/dashboard/pending");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleGoToDashboard = () => {
    router.push("/dashboard/pending");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
              </svg>
              <span className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                CC Culinary
              </span>
            </div>
          </div>

          {/* Main Card */}
          <main className="w-full max-w-[600px] mx-auto bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-8 sm:p-12 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Success Graphic */}
              <div className="flex items-center justify-center w-24 h-24 bg-primary rounded-full">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Page Heading */}
              <div className="flex flex-col gap-3">
                <h1 className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-tight">
                  Kayıt Tamamlandı!
                </h1>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
                  CC Culinary&apos;ye hoş geldiniz! Hesabınız hazır ve artık restoranınızın ihtiyaçlarını yönetmek için portala erişebilirsiniz.
                </p>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="mt-8 text-left bg-background-light dark:bg-background-dark rounded-lg p-6">
              <h2 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold pb-4">
                Sırada Ne Var?
              </h2>

              {/* Action List */}
              <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
                {/* Item 1 */}
                <a
                  href="#"
                  className="flex items-center gap-4 py-4 min-h-14 justify-between group hover:bg-background-light/50 dark:hover:bg-background-dark/50 rounded transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-text-primary-light dark:text-text-primary-dark flex items-center justify-center w-10 h-10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium group-hover:text-primary transition-colors">
                      Ürün Kataloğunu Keşfet
                    </p>
                  </div>
                  <div className="text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </a>

                {/* Item 2 */}
                <a
                  href="#"
                  className="flex items-center gap-4 py-4 min-h-14 justify-between group hover:bg-background-light/50 dark:hover:bg-background-dark/50 rounded transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-text-primary-light dark:text-text-primary-dark flex items-center justify-center w-10 h-10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                      </svg>
                    </div>
                    <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium group-hover:text-primary transition-colors">
                      İlk Siparişinizi Oluşturun
                    </p>
                  </div>
                  <div className="text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </a>

                {/* Item 3 */}
                <a
                  href="#"
                  className="flex items-center gap-4 py-4 min-h-14 justify-between group hover:bg-background-light/50 dark:hover:bg-background-dark/50 rounded transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-text-primary-light dark:text-text-primary-dark flex items-center justify-center w-10 h-10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium group-hover:text-primary transition-colors">
                      Hesap Bilgilerinizi Yönetin
                    </p>
                  </div>
                  <div className="text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="mt-8">
              <button
                onClick={handleGoToDashboard}
                className="flex items-center justify-center text-center font-bold text-base h-12 w-full rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Dashboard&apos;a Git
              </button>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-8 text-center">
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {countdown} saniye içinde otomatik olarak dashboard&apos;a yönlendirileceksiniz.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="#"
                className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
              >
                Destek İle İletişime Geçin
              </a>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">|</span>
              <a
                href="#"
                className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
              >
                Yardım Merkezi
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

