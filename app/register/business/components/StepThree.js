"use client";

import { useState } from "react";

export default function StepThree({ data, updateData, onNext, onPrev }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!data.iban?.trim()) newErrors.iban = "IBAN gerekli";
    else if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(data.iban.replace(/\s/g, ""))) {
      newErrors.iban = "Geçerli bir IBAN girin";
    }
    
    if (!data.bic?.trim()) newErrors.bic = "BIC gerekli";
    else if (!/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(data.bic.replace(/\s/g, ""))) {
      newErrors.bic = "Geçerli bir BIC girin";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  const handleChange = (field, value) => {
    updateData({ [field]: value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div className="bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-6 sm:p-8">
      {/* Başlık */}
      <div className="flex flex-col mb-6">
        <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
          Ödeme Bilgileri
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mt-2">
          Ödemeler ve işlemler için banka bilgilerinizi girin.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-6">
        {/* IBAN */}
        <label className="flex flex-col w-full">
          <p className={`text-base font-medium leading-normal pb-2 ${
            errors.iban ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
          }`}>
            IBAN <span className="text-error">*</span>
          </p>
          <input
            type="text"
            value={data.iban || ""}
            onChange={(e) => handleChange("iban", e.target.value)}
            placeholder="DE89 3704 0044 0532 0130 00"
            className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
              errors.iban ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
            } bg-content-light dark:bg-content-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
          />
          {errors.iban && (
            <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.iban}</p>
          )}
        </label>

        {/* BIC */}
        <label className="flex flex-col w-full">
          <p className={`text-base font-medium leading-normal pb-2 ${
            errors.bic ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
          }`}>
            BIC <span className="text-error">*</span>
          </p>
          <input
            type="text"
            value={data.bic || ""}
            onChange={(e) => handleChange("bic", e.target.value)}
            placeholder="DEUTDEFF"
            className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
              errors.bic ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
            } bg-content-light dark:bg-content-dark h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
          />
          {errors.bic && (
            <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.bic}</p>
          )}
        </label>

        {/* Info Box */}
        <div className="flex items-start gap-3 rounded-lg bg-background-light dark:bg-background-dark p-4">
          <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
            IBAN ve BIC numaranızı banka hesap özetinizde veya online bankacılık sisteminde bulabilirsiniz.
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-border-light dark:border-border-dark mt-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center justify-center rounded-lg h-10 px-6 border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium hover:bg-background-light dark:hover:bg-background-dark transition-colors"
          >
            Geri
          </button>
          <div className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Otomatik kaydedildi</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center justify-center rounded-lg h-10 px-6 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
          >
            Kaydet & Sonra Devam Et
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
}


