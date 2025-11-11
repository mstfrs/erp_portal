"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function OnboardingDashboard() {
  const router = useRouter();

  const handleStartSetup = () => {
    router.push("/register/business");
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-[260px] flex-col justify-between border-r border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-3">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
            </svg>
            <h1 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">CC Culinary</h1>
          </div>

          <nav className="flex flex-col gap-2">
            <div className="relative flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
              <div className="absolute left-0 h-6 w-1 bg-primary rounded-r-full"></div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              <p className="text-sm font-medium">Dashboard</p>
            </div>

            {["Orders", "Products", "Invoices", "Brands", "Services"].map((item) => (
              <div key={item} className="group relative">
                <div className="flex items-center gap-3 px-3 py-2 opacity-50 cursor-not-allowed">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                  <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">{item}</p>
                </div>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden group-hover:block bg-text-primary-light dark:bg-text-primary-dark text-content-light dark:text-content-dark px-2 py-1 rounded text-xs whitespace-nowrap">
                  Profilinizi tamamlayın
                </div>
              </div>
            ))}

            <Link href="/account" className="flex items-center gap-3 px-3 py-2 text-text-primary-light dark:text-text-primary-dark hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <p className="text-sm font-medium">Account</p>
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-1">
          <Link href="/auth/login" className="flex items-center gap-3 px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
            <p className="text-sm font-medium">Logout</p>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col h-screen overflow-y-auto">
        {/* TopNavBar */}
        <header className="sticky top-0 z-10 flex h-[72px] items-center justify-between border-b border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark px-4 lg:px-10 shadow-sm">
          <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">Dashboard</h2>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-border-light dark:bg-border-dark"></button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-10 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
            {/* Greeting */}
            <h1 className="text-4xl font-black leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
              Merhaba!
            </h1>

            {/* Warning Banner */}
            <div className="flex items-center gap-4 rounded-xl border border-orange-500/50 bg-orange-500/10 p-5">
              <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <div className="flex flex-col">
                <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark">
                  Profiliniz eksik
                </p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Tüm özelliklere erişmek için lütfen bilgilerinizi doldurun.
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Complete Profile Card */}
              <div className="md:col-span-2 flex flex-col rounded-xl shadow-lg bg-content-light dark:bg-content-dark p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                    Bilgilerinizi Tamamlayın
                  </p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
                    İşletme profilinizi oluşturmak için adımları takip edin.
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                        Profil Tamamlanma
                      </span>
                      <span className="text-sm font-medium text-primary">25%</span>
                    </div>
                    <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleStartSetup}
                      className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      Profil Kurulumuna Başla
                    </button>
                  </div>
                </div>
              </div>

              {/* Logout Card */}
              <div className="flex flex-col items-center justify-center rounded-xl shadow-lg bg-content-light dark:bg-content-dark p-6 text-center gap-4">
                <svg className="w-12 h-12 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
                <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">Çıkış Yap</p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Hesabınızdan hızlı ve güvenli bir şekilde çıkış yapın.
                </p>
                <Link
                  href="/auth/login"
                  className="mt-2 flex w-full items-center justify-center rounded-lg h-10 px-6 bg-background-light dark:bg-border-dark text-text-primary-light dark:text-text-primary-dark text-sm font-bold hover:bg-border-light dark:hover:bg-background-dark transition-colors"
                >
                  Çıkış Yap
                </Link>
              </div>
            </div>

            {/* Vendor Card */}
            <div className="flex flex-col rounded-xl shadow-lg bg-content-light dark:bg-content-dark">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-6">
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                    CC Culinary'de Satış Yapmak İster misiniz?
                  </p>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mt-1">
                    Daha fazla restorana ulaşmak için satıcı olun.
                  </p>
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-blue-500 text-white text-sm font-bold hover:bg-blue-600 transition-colors whitespace-nowrap">
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



