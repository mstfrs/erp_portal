"use client";

import Link from "next/link";

export default function PendingApprovalDashboard() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-[72px] items-center justify-center border-b border-border-light dark:border-border-dark bg-content-light/80 dark:bg-content-dark/80 backdrop-blur-sm px-6 shadow-sm">
        <div className="flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
            </svg>
            <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold">CC Culinary</h2>
          </div>
          <Link
            href="/auth/login"
            className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            Çıkış Yap
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-[600px] flex-col items-center">
          <div className="flex w-full flex-col items-center rounded-lg bg-content-light dark:bg-content-dark p-6 sm:p-12 shadow-lg">
            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
              <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/>
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-center text-3xl font-bold mb-4">
              Başvurunuz İnceleniyor
            </h1>

            {/* Description */}
            <p className="text-center text-base text-text-secondary-light dark:text-text-secondary-dark mb-8">
              Başvurunuzu gönderdiğiniz için teşekkür ederiz. Ekibimiz bilgilerinizi inceliyor ve 2-3 iş günü içinde size geri dönüş yapacaktır.
            </p>

            {/* Progress Steps */}
            <div className="w-full mt-8">
              <div className="relative flex items-center">
                {/* Background Line */}
                <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-border-light dark:bg-border-dark"></div>
                {/* Progress Line */}
                <div className="absolute top-1/2 h-0.5 w-1/2 -translate-y-1/2 bg-blue-500"></div>
                
                {/* Steps */}
                <div className="relative flex w-full justify-between">
                  {/* Submitted */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="mt-2 text-sm font-medium text-blue-500">Gönderildi</p>
                  </div>

                  {/* In Review */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                      <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-blue-500">İnceleniyor</p>
                  </div>

                  {/* Approved */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark"></div>
                    <p className="mt-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Onaylandı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 flex w-full items-start gap-4 rounded-lg bg-blue-500/10 p-4">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                İnceleme tamamlandığında ve hesabınız aktifleştirildiğinde e-posta bildirimi alacaksınız. 
                Şu anda tarafınızdan herhangi bir işlem yapmanıza gerek yoktur.
              </p>
            </div>

            {/* Dashboard Button */}
            <button
              disabled
              className="mt-8 flex w-full items-center justify-center rounded-lg h-11 px-6 bg-transparent text-text-secondary-light dark:text-text-secondary-dark text-sm font-bold border border-border-light dark:border-border-dark opacity-60 cursor-not-allowed"
            >
              Dashboard&apos;a Git
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

