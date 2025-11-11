"use client";

import { useState } from "react";
import Link from "next/link";

export default function ApprovedDashboard() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex h-screen w-64 flex-col justify-between bg-content-light dark:bg-content-dark p-4 sticky top-0">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 px-3">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
            </svg>
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold">CC Culinary</h1>
          </div>

          <nav className="flex flex-col gap-2">
            <Link href="/dashboard/approved" className="flex items-center gap-3 px-3 py-2 rounded bg-primary/20 dark:bg-primary/30">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              <p className="text-primary text-sm font-medium">Dashboard</p>
            </Link>

            <Link href="/brands" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-background-light dark:hover:bg-background-dark transition-colors">
              <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-5h-2v5H7v-7h10v7z"/>
              </svg>
              <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">Brands</p>
            </Link>

            <Link href="/orders" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-background-light dark:hover:bg-background-dark transition-colors">
              <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z"/>
              </svg>
              <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">Orders</p>
            </Link>

            <Link href="/account" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-background-light dark:hover:bg-background-dark transition-colors">
              <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">Account</p>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="flex h-[72px] items-center justify-between bg-content-light dark:bg-content-dark px-6 shadow-sm sticky top-0 z-10">
          <div className="flex flex-1 items-center gap-8">
            <label className="flex flex-col w-full max-w-md">
              <div className="flex w-full items-stretch rounded-lg h-10">
                <div className="flex bg-background-light dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg">
                  <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <input
                  className="form-input flex w-full flex-1 rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border-none bg-background-light dark:bg-background-dark h-full placeholder:text-text-secondary-light placeholder:dark:text-text-secondary-dark px-4 rounded-l-none text-base"
                  placeholder="Marka, ürün ara..."
                />
              </div>
            </label>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-secondary-light dark:text-text-secondary-dark">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-secondary-light dark:text-text-secondary-dark">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
              </button>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6">
              {/* Greeting */}
              <h2 className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-tight">
                Merhaba!
              </h2>

              {/* Success Alert */}
              {showAlert && (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 rounded-lg border border-primary/30 bg-primary/20 dark:bg-primary/30 p-5">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <p className="text-text-primary-light dark:text-text-primary-dark text-base font-bold">
                        Hesabınız onaylandı!
                      </p>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
                        Artık markalarınızı seçmeye başlayabilirsiniz.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAlert(false)}
                    className="flex items-center justify-center rounded h-8 px-4 bg-transparent text-text-primary-light dark:text-text-primary-dark text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    Kapat
                  </button>
                </div>
              )}

              {/* Cards Grid */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Select Brands Card */}
                <div className="flex flex-col rounded-xl shadow-sm bg-content-light dark:bg-content-dark p-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L4 9v12h16V9l-8-6zm6 16h-3v-5h-2v5H7v-7h10v7z"/>
                      </svg>
                    </div>
                    <h3 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold">
                      Markalarınızı Seçin
                    </h3>
                  </div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
                    Özenle seçilmiş premium markaları inceleyin. Hesabınıza marka eklemek, sipariş vermenin ilk adımıdır.
                  </p>
                  <div className="flex items-end justify-start pt-2">
                    <Link
                      href="/brands/select"
                      className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
                    >
                      Markaları İncele
                    </Link>
                  </div>
                </div>

                {/* Account Overview Card */}
                <div className="flex flex-col rounded-xl shadow-sm bg-content-light dark:bg-content-dark p-6 gap-4">
                  <h3 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold">
                    Hesap Özeti
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Siparişler</p>
                      <p className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold">0</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">Seçili Markalar</p>
                      <p className="text-text-primary-light dark:text-text-primary-dark text-3xl font-bold">0</p>
                    </div>
                  </div>
                  <div className="flex items-end justify-start pt-2">
                    <Link
                      href="/account"
                      className="flex items-center justify-center rounded-lg h-10 px-5 bg-background-light dark:bg-border-dark text-text-primary-light dark:text-text-primary-dark text-sm font-medium hover:bg-border-light dark:hover:bg-background-dark transition-colors"
                    >
                      Hesabımı Görüntüle
                    </Link>
                  </div>
                </div>
              </div>

              {/* Vendor Promotion Banner */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 rounded-lg bg-primary p-6 text-white">
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-bold">Satıcı mısınız? Bizimle ortaklık yapın.</p>
                  <p className="text-base opacity-80">
                    Platformumuzda binlerce restorana ulaşarak işinizi büyütün.
                  </p>
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-white text-primary text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
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

