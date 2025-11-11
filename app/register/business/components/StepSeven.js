"use client";

import { useState } from "react";

const MAX_CITIES = 10;

export default function StepSeven({ data, updateData, onNext, onPrev }) {
  const [errors, setErrors] = useState({});
  const cities = data.working_cities || [""];

  const handleCityChange = (index, value) => {
    const newCities = [...cities];
    newCities[index] = value;
    updateData({ working_cities: newCities });
    if (errors.cities) setErrors({});
  };

  const handleAddCity = () => {
    if (cities.length < MAX_CITIES) {
      updateData({ working_cities: [...cities, ""] });
    }
  };

  const handleRemoveCity = (index) => {
    if (cities.length > 1) {
      const newCities = cities.filter((_, i) => i !== index);
      updateData({ working_cities: newCities });
    }
  };

  const handleNext = () => {
    const filledCities = cities.filter(c => c.trim());
    if (filledCities.length === 0) {
      setErrors({ cities: "En az bir şehir girmelisiniz" });
      return;
    }
    onNext();
  };

  return (
    <div className="flex w-full max-w-[700px] flex-col bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-8 mx-auto">
      {/* Logo */}
      <div className="flex justify-start mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
          </svg>
          <span className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold">CC Culinary</span>
        </div>
      </div>

      {/* Progress Indicator */}
      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-bold tracking-wider text-center pb-3 pt-1">
        ADIM 7 / 7
      </p>

      {/* Page Heading */}
      <div className="flex flex-col items-center gap-3 text-center mb-8">
        <h1 className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-tight">
          Çalışma Alanları
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base max-w-md">
          Faaliyet gösterdiğiniz şehirleri girin. Bu bilgi sizi yerel tedarikçiler ve müşterilerle bağlamamıza yardımcı olur.
        </p>
      </div>

      {/* Form Inputs */}
      <div className="flex flex-col gap-4">
        {cities.map((city, index) => (
          <div key={index} className="flex w-full flex-wrap items-end gap-4">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal pb-2">
                Şehir {index === 0 ? "(Zorunlu)" : "(Opsiyonel)"}
              </p>
              <div className="flex w-full items-stretch rounded-lg">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => handleCityChange(index, e.target.value)}
                  placeholder={index === 0 ? "ör. İstanbul" : index === 1 ? "ör. Ankara" : "ör. İzmir"}
                  className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark focus:border-primary h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-4 text-base ${
                    index > 0 ? "rounded-l-lg rounded-r-none border-r-0 pr-2" : "rounded-lg"
                  }`}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveCity(index)}
                    aria-label="Şehri kaldır"
                    className="text-error flex border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark items-center justify-center px-3 rounded-r-lg border-l-0 hover:bg-error/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                )}
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Add Another City Button */}
      {cities.length < MAX_CITIES && (
        <div className="w-full mt-4">
          <button
            type="button"
            onClick={handleAddCity}
            className="flex items-center justify-center gap-2 w-full h-12 px-6 text-base font-medium rounded-lg text-primary border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
            </svg>
            <span>Başka Şehir Ekle</span>
          </button>
        </div>
      )}

      {/* Helper Text */}
      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm italic text-center mt-8">
        *En fazla 10 şehir ekleyebilirsiniz. Bu bilgileri daha sonra profil ayarlarınızdan güncelleyebilirsiniz.
      </p>

      {errors.cities && (
        <p className="text-error text-sm text-center mt-2">{errors.cities}</p>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-8 border-t border-border-light dark:border-border-dark">
        <button
          type="button"
          onClick={onPrev}
          className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 text-base font-medium rounded-lg text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors"
        >
          Önceki
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}

