"use client";

import { useState } from "react";

const AGREEMENTS = [
  { 
    id: "terms", 
    title: "CC Culinary Kullanım Şartları", 
    description: "CC Culinary platformunu kullanmak için genel şartlarımızı inceleyin, haklarınızı ve sorumluluklarınızı öğrenin.", 
    tag: "CC Culinary",
    tagColor: "bg-primary/20 text-primary"
  },
  { 
    id: "data", 
    title: "Veri İşleme Anlaşması", 
    description: "İşletme ve müşteri verilerinizin yasal düzenlemelere uygun şekilde nasıl işlendiğini ve korunduğunu detaylandırır.", 
    tag: "CC Culinary",
    tagColor: "bg-primary/20 text-primary"
  },
  { 
    id: "brand", 
    title: "Marka Ortaklığı Anlaşması", 
    description: "Seçili markalarla ortaklığımızı yöneten özel şartlar, pazarlama ve operasyonel anlaşmalar dahil.", 
    tag: "Marka Ortaklığı",
    tagColor: "bg-orange-500/20 text-orange-600"
  },
];

export default function StepNine({ data, updateData, onNext, onPrev }) {
  const [errors, setErrors] = useState({});
  const [showInfo, setShowInfo] = useState(true);
  const acceptedAgreements = data.agreements_accepted || [];

  const handleToggleAgreement = (agreementId) => {
    const newAgreements = acceptedAgreements.includes(agreementId)
      ? acceptedAgreements.filter(id => id !== agreementId)
      : [...acceptedAgreements, agreementId];
    
    updateData({ agreements_accepted: newAgreements });
    if (errors.agreements) {
      setErrors({});
    }
  };

  const handleNext = () => {
    if (acceptedAgreements.length !== AGREEMENTS.length) {
      setErrors({ agreements: "Tüm anlaşmaları kabul etmelisiniz" });
      return;
    }
    onNext();
  };

  const allAccepted = acceptedAgreements.length === AGREEMENTS.length;

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-border-light dark:border-border-dark bg-content-light/80 dark:bg-content-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[900px] items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8 text-text-primary-light dark:text-text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
            </svg>
            <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">CC Culinary</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-[900px] px-4 py-8 sm:py-12">
          <div className="flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Anlaşmalarınızı İnceleyin
              </h1>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
                Lütfen devam etmek için aşağıdaki zorunlu belgeleri inceleyin ve kabul edin.
              </p>
            </div>

            {/* Info Banner */}
            {showInfo && (
              <div className="flex items-start justify-between gap-4 rounded-lg bg-blue-500/10 p-5">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400">Tüm belgeler için tek imza</p>
                    <p className="text-base text-blue-600 dark:text-blue-400">Elektronik imzanız aşağıda kabul edilen tüm belgeler için geçerli olacaktır.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowInfo(false)}
                  className="text-blue-600 dark:text-blue-400 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Agreement Cards */}
            <div className="flex flex-col gap-4">
              {AGREEMENTS.map((agreement) => {
                const isAccepted = acceptedAgreements.includes(agreement.id);
                
                return (
                  <label key={agreement.id} className="relative block cursor-pointer">
                    <div className={`flex flex-col gap-4 rounded-xl border-2 bg-content-light dark:bg-content-dark p-5 transition-all duration-200 ${
                      isAccepted 
                        ? "border-primary bg-primary/5" 
                        : "border-border-light dark:border-border-dark"
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${agreement.tagColor}`}>
                            {agreement.tag}
                          </div>
                          <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                            {agreement.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="text-sm font-bold text-primary hover:underline">
                            Önizle
                          </button>
                          <div 
                            onClick={() => handleToggleAgreement(agreement.id)}
                            className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
                              isAccepted
                                ? "border-primary bg-primary"
                                : "border-border-light dark:border-border-dark bg-transparent"
                            }`}
                          >
                            {isAccepted && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                        {agreement.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {errors.agreements && (
              <p className="text-error text-sm text-center">{errors.agreements}</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 z-10 w-full border-t border-border-light dark:border-border-dark bg-content-light/80 dark:bg-content-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-4 p-4">
          <button
            type="button"
            onClick={onPrev}
            className="flex h-12 items-center justify-center rounded-xl px-5 bg-transparent text-text-primary-light dark:text-text-primary-dark text-base font-bold hover:bg-background-light dark:hover:bg-background-dark transition-colors"
          >
            Geri
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!allAccepted}
            className={`flex h-12 flex-1 max-w-[480px] items-center justify-center rounded-xl px-5 text-base font-bold transition-colors sm:flex-none ${
              allAccepted
                ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                : "bg-border-light dark:bg-border-dark text-text-secondary-light dark:text-text-secondary-dark cursor-not-allowed"
            }`}
          >
            İmzaya Devam
          </button>
        </div>
      </footer>
    </div>
  );
}



