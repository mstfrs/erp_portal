"use client";

import { useState } from "react";

export default function StepTwo({ data, updateData, onNext, onPrev }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!data.representative_first_name?.trim()) newErrors.representative_first_name = "Ad gerekli";
    if (!data.representative_last_name?.trim()) newErrors.representative_last_name = "Soyad gerekli";
    if (!data.representative_email?.trim()) newErrors.representative_email = "E-posta gerekli";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.representative_email)) newErrors.representative_email = "Geçerli bir e-posta girin";
    if (!data.representative_phone?.trim()) newErrors.representative_phone = "Telefon gerekli";

    if (data.is_different_contact) {
      if (!data.contact_first_name?.trim()) newErrors.contact_first_name = "Ad gerekli";
      if (!data.contact_last_name?.trim()) newErrors.contact_last_name = "Soyad gerekli";
      if (!data.contact_email?.trim()) newErrors.contact_email = "E-posta gerekli";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact_email)) newErrors.contact_email = "Geçerli bir e-posta girin";
      if (!data.contact_phone?.trim()) newErrors.contact_phone = "Telefon gerekli";
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
        <h2 className="text-2xl font-black leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
          Yetkili Kişi
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-2">
          Adım 2 / 4
        </p>
        {/* Progress bar */}
        <div className="w-full h-2 bg-border-light dark:bg-border-dark rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "50%" }} />
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-6">
        {/* Representative Details */}
        <div>
          <h3 className="text-text-primary-light dark:text-text-primary-dark text-base font-bold mb-4">
            Temsilci Bilgileri
          </h3>
          <div className="flex flex-col gap-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <p className={`text-sm font-medium leading-normal pb-2 ${
                  errors.representative_first_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                }`}>
                  Ad <span className="text-error">*</span>
                </p>
                <input
                  type="text"
                  value={data.representative_first_name || ""}
                  onChange={(e) => handleChange("representative_first_name", e.target.value)}
                  placeholder="Adı girin"
                  className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                    errors.representative_first_name ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                  } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                />
                {errors.representative_first_name && (
                  <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.representative_first_name}</p>
                )}
              </label>

              <label className="flex flex-col">
                <p className={`text-sm font-medium leading-normal pb-2 ${
                  errors.representative_last_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                }`}>
                  Soyad <span className="text-error">*</span>
                </p>
                <input
                  type="text"
                  value={data.representative_last_name || ""}
                  onChange={(e) => handleChange("representative_last_name", e.target.value)}
                  placeholder="Soyadı girin"
                  className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                    errors.representative_last_name ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                  } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                />
                {errors.representative_last_name && (
                  <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.representative_last_name}</p>
                )}
              </label>
            </div>

            {/* Email */}
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.representative_email ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                E-posta Adresi <span className="text-error">*</span>
              </p>
              <input
                type="email"
                value={data.representative_email || ""}
                onChange={(e) => handleChange("representative_email", e.target.value)}
                placeholder="E-posta adresini girin"
                className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                  errors.representative_email ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
              />
              {errors.representative_email && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.representative_email}</p>
              )}
            </label>

            {/* Phone */}
            <label className="flex flex-col">
              <p className={`text-sm font-medium leading-normal pb-2 ${
                errors.representative_phone ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
              }`}>
                Telefon Numarası <span className="text-error">*</span>
              </p>
              <div className="flex items-center">
                <select
                  value={data.representative_country_code || "+90"}
                  onChange={(e) => handleChange("representative_country_code", e.target.value)}
                  className="form-select rounded-l-lg border-r-0 border-border-light dark:border-border-dark h-12 bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="+90">+90</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+49">+49</option>
                </select>
                <input
                  type="tel"
                  value={data.representative_phone || ""}
                  onChange={(e) => handleChange("representative_phone", e.target.value)}
                  placeholder="Telefon numarasını girin"
                  className={`form-input w-full rounded-r-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                    errors.representative_phone ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                  } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                />
              </div>
              {errors.representative_phone && (
                <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.representative_phone}</p>
              )}
            </label>

            {/* Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.is_different_contact || false}
                onChange={(e) => handleChange("is_different_contact", e.target.checked)}
                className="h-5 w-5 rounded border-2 border-border-light dark:border-border-dark text-primary focus:ring-0"
              />
              <p className="text-sm text-text-primary-light dark:text-text-primary-dark">
                Birincil iletişim kişisi başka biri
              </p>
            </label>
          </div>
        </div>

        {/* Contact Person Details (shown if checkbox is checked) */}
        {data.is_different_contact && (
          <div>
            <h3 className="text-text-primary-light dark:text-text-primary-dark text-base font-bold mb-4">
              İletişim Kişisi Bilgileri
            </h3>
            <div className="flex flex-col gap-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <p className={`text-sm font-medium leading-normal pb-2 ${
                    errors.contact_first_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                  }`}>
                    Ad <span className="text-error">*</span>
                  </p>
                  <input
                    type="text"
                    value={data.contact_first_name || ""}
                    onChange={(e) => handleChange("contact_first_name", e.target.value)}
                    placeholder="Adı girin"
                    className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                      errors.contact_first_name ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                    } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                  />
                  {errors.contact_first_name && (
                    <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.contact_first_name}</p>
                  )}
                </label>

                <label className="flex flex-col">
                  <p className={`text-sm font-medium leading-normal pb-2 ${
                    errors.contact_last_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                  }`}>
                    Soyad <span className="text-error">*</span>
                  </p>
                  <input
                    type="text"
                    value={data.contact_last_name || ""}
                    onChange={(e) => handleChange("contact_last_name", e.target.value)}
                    placeholder="Soyadı girin"
                    className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                      errors.contact_last_name ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                    } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                  />
                  {errors.contact_last_name && (
                    <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.contact_last_name}</p>
                  )}
                </label>
              </div>

              {/* Email */}
              <label className="flex flex-col">
                <p className={`text-sm font-medium leading-normal pb-2 ${
                  errors.contact_email ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                }`}>
                  E-posta Adresi <span className="text-error">*</span>
                </p>
                <input
                  type="email"
                  value={data.contact_email || ""}
                  onChange={(e) => handleChange("contact_email", e.target.value)}
                  placeholder="E-posta adresini girin"
                  className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                    errors.contact_email ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                  } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                />
                {errors.contact_email && (
                  <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.contact_email}</p>
                )}
              </label>

              {/* Phone */}
              <label className="flex flex-col">
                <p className={`text-sm font-medium leading-normal pb-2 ${
                  errors.contact_phone ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                }`}>
                  Telefon Numarası <span className="text-error">*</span>
                </p>
                <div className="flex items-center">
                  <select
                    value={data.contact_country_code || "+90"}
                    onChange={(e) => handleChange("contact_country_code", e.target.value)}
                    className="form-select rounded-l-lg border-r-0 border-border-light dark:border-border-dark h-12 bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="+90">+90</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+49">+49</option>
                  </select>
                  <input
                    type="tel"
                    value={data.contact_phone || ""}
                    onChange={(e) => handleChange("contact_phone", e.target.value)}
                    placeholder="Telefon numarasını girin"
                    className={`form-input w-full rounded-r-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                      errors.contact_phone ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
                    } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 text-base font-normal`}
                  />
                </div>
                {errors.contact_phone && (
                  <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.contact_phone}</p>
                )}
              </label>
            </div>
          </div>
        )}

        {/* Footer Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-border-light dark:border-border-dark mt-4">
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
    </div>
  );
}

