"use client";

import { useState } from "react";

export default function StepOne({ data, updateData, onNext }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!data.company_name?.trim()) newErrors.company_name = "Firma adı gerekli";
    if (!data.tax_number?.trim()) newErrors.tax_number = "Vergi numarası gerekli";
    if (!data.vat_id?.trim()) newErrors.vat_id = "VAT ID gerekli";
    if (!data.street_address?.trim()) newErrors.street_address = "Adres gerekli";
    if (!data.city?.trim()) newErrors.city = "Şehir gerekli";
    if (!data.postal_code?.trim()) newErrors.postal_code = "Posta kodu gerekli";
    if (!data.country?.trim()) newErrors.country = "Ülke gerekli";

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
        <h2 className="text-2xl font-black leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
          Adım 1 - İşletme Bilgileri
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-2">
          Lütfen şirketinizin resmi bilgilerini girin. <span className="text-error">*</span> ile işaretli alanlar zorunludur.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="flex flex-col">
            <p className={`text-sm font-medium leading-normal pb-2 ${
              errors.company_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
            }`}>
              Firma Adı <span className="text-error">*</span>
            </p>
            <input
              type="text"
              value={data.company_name || ""}
              onChange={(e) => handleChange("company_name", e.target.value)}
              placeholder="Kayıtlı firma adınızı girin"
              className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                errors.company_name ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
              } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
            />
            {errors.company_name && (
              <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.company_name}</p>
            )}
          </label>
        </div>

        {/* Tax Number & VAT ID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.tax_number ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                Vergi Numarası <span className="text-error">*</span>
              </p>
              <input
                type="text"
                value={data.tax_number || ""}
                onChange={(e) => handleChange("tax_number", e.target.value)}
                placeholder="Vergi numaranızı girin"
                className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                  errors.tax_number ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
              />
              {errors.tax_number && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.tax_number}</p>
              )}
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.vat_id ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                VAT ID Numarası <span className="text-error">*</span>
              </p>
              <input
                type="text"
                value={data.vat_id || ""}
                onChange={(e) => handleChange("vat_id", e.target.value)}
                placeholder="VAT ID numaranızı girin"
                className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                  errors.vat_id ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
              />
              {errors.vat_id && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.vat_id}</p>
              )}
            </label>
          </div>
        </div>

        {/* Street Address */}
        <div className="flex flex-col">
          <label className="flex flex-col">
            <p className={`text-sm font-medium leading-normal pb-2 ${
              errors.street_address ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
            }`}>
              Sokak Adresi <span className="text-error">*</span>
            </p>
            <input
              type="text"
              value={data.street_address || ""}
              onChange={(e) => handleChange("street_address", e.target.value)}
              placeholder="Sokak adresinizi girin"
              className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                errors.street_address ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
              } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
            />
            {errors.street_address && (
              <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.street_address}</p>
            )}
          </label>
        </div>

        {/* Apartment/Suite */}
        <div className="flex flex-col">
          <label className="flex flex-col">
            <p className="text-sm font-medium leading-normal pb-2 text-text-primary-light dark:text-text-primary-dark">
              Daire/Bina (opsiyonel)
            </p>
            <input
              type="text"
              value={data.apartment || ""}
              onChange={(e) => handleChange("apartment", e.target.value)}
              placeholder="Daire numarası"
              className="form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 border-border-light dark:border-border-dark focus:ring-primary bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal"
            />
          </label>
        </div>

        {/* City, Postal Code, Country */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col">
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.city ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                Şehir <span className="text-error">*</span>
              </p>
              <input
                type="text"
                value={data.city || ""}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Şehir"
                className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                  errors.city ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
              />
              {errors.city && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.city}</p>
              )}
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.postal_code ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                Posta Kodu <span className="text-error">*</span>
              </p>
              <input
                type="text"
                value={data.postal_code || ""}
                onChange={(e) => handleChange("postal_code", e.target.value)}
                placeholder="Posta kodu"
                className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                  errors.postal_code ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
              />
              {errors.postal_code && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.postal_code}</p>
              )}
            </label>
          </div>

          <div className="flex flex-col">
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.country ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                Ülke <span className="text-error">*</span>
              </p>
              <select
                value={data.country || ""}
                onChange={(e) => handleChange("country", e.target.value)}
                className={`form-select w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                  errors.country ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                } bg-content-light dark:bg-content-dark h-12 px-4 text-base font-normal`}
              >
                <option value="">Ülke seçin</option>
                <option value="Turkey">Türkiye</option>
                <option value="Germany">Almanya</option>
                <option value="USA">Amerika Birleşik Devletleri</option>
                <option value="UK">Birleşik Krallık</option>
              </select>
              {errors.country && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.country}</p>
              )}
            </label>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-border-light dark:border-border-dark mt-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
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
    </div>
  );
}

