"use client";

import { useState } from "react";

const DOCUMENT_TYPES = [
  { id: "business_registration", label: "Ticaret Sicil Belgesi", description: "Business Registration", required: true },
  { id: "tax_certificate", label: "Vergi Levhası", description: "Tax Certificate", required: true },
  { id: "signature_circular", label: "İmza Sirküleri", description: "Signature Circular", required: true },
  { id: "id_card", label: "Kimlik Belgesi", description: "ID Card", required: true },
];

export default function StepFour({ data, updateData, onNext, onPrev }) {
  const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const validate = () => {
    const newErrors = {};
    
    if (!data.company_type?.trim()) newErrors.company_type = "Şirket tipi seçmelisiniz";
    if (!data.id_expiry_date?.trim()) newErrors.id_expiry_date = "Kimlik geçerlilik tarihi gerekli";
    
    // Check if all required documents are uploaded
    const uploadedDocTypes = uploadedFiles.map(f => f.type);
    DOCUMENT_TYPES.forEach(docType => {
      if (docType.required && !uploadedDocTypes.includes(docType.id)) {
        newErrors[docType.id] = `${docType.label} yüklenmesi zorunludur`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateData({ documents: uploadedFiles });
      onNext();
    }
  };

  const handleChange = (field, value) => {
    updateData({ [field]: value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleFileUpload = (docType, event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, [docType.id]: "Dosya boyutu 5MB'dan küçük olmalıdır" }));
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, [docType.id]: "Sadece PDF, JPG, PNG dosyaları yüklenebilir" }));
        return;
      }

      // Add to uploaded files
      const newFile = {
        type: docType.id,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2),
        file: file,
      };

      setUploadedFiles((prev) => [...prev, newFile]);
      setErrors((prev) => ({ ...prev, [docType.id]: null }));
    }
  };

  const handleFileDelete = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-6 sm:p-8">
      {/* Başlık */}
      <div className="flex flex-col mb-6">
        <div className="flex gap-6 justify-between mb-3">
          <p className="text-base font-medium text-text-primary-light dark:text-text-primary-dark">
            Adım 4 / 4: Doküman Yükleme
          </p>
        </div>
        <div className="rounded-full bg-border-light dark:bg-border-dark h-2 mb-4">
          <div className="h-2 rounded-full bg-primary" style={{ width: "100%" }}></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
          Doküman Yükleme
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mt-2">
          Kayıt işleminizi tamamlamak için gerekli belgeleri yükleyin.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-8">
        {/* Company Type */}
        <div className="flex max-w-md flex-col">
          <label className="flex flex-col">
            <p className={`text-base font-medium leading-normal pb-2 ${
              errors.company_type ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
            }`}>
              Şirket Tipi <span className="text-error">*</span>
            </p>
            <select
              value={data.company_type || ""}
              onChange={(e) => handleChange("company_type", e.target.value)}
              className={`form-select w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                errors.company_type ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
              } bg-content-light dark:bg-content-dark h-12 px-4 text-base font-normal`}
            >
              <option value="">Şirket tipini seçin</option>
              <option value="limited">Limited Şirket</option>
              <option value="anonim">Anonim Şirket</option>
              <option value="sahis">Şahıs Şirketi</option>
              <option value="kollektif">Kollektif Şirket</option>
            </select>
            {errors.company_type && (
              <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.company_type}</p>
            )}
          </label>
        </div>

        {/* File Upload Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCUMENT_TYPES.map((docType) => (
            <div key={docType.id} className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border-light dark:border-border-dark p-6 text-center bg-background-light dark:bg-background-dark">
              <svg className="w-10 h-10 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/>
              </svg>
              <h4 className="text-text-primary-light dark:text-text-primary-dark font-semibold mt-2">
                {docType.label} {docType.required && <span className="text-error">*</span>}
              </h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                {docType.description}
              </p>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-2">
                PDF, JPG, PNG. Max 5MB
              </p>
              <label className="mt-4">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload(docType, e)}
                  className="hidden"
                />
                <span className="cursor-pointer inline-block rounded-lg bg-background-light dark:bg-border-dark px-4 py-2 text-sm font-semibold text-text-primary-light dark:text-text-primary-dark hover:bg-border-light dark:hover:bg-background-dark transition-colors">
                  Dosya Yükle
                </span>
              </label>
              {errors[docType.id] && (
                <p className="text-error text-xs font-normal leading-normal pt-2">{errors[docType.id]}</p>
              )}
            </div>
          ))}
        </div>

        {/* ID Expiry Date */}
        <div className="flex max-w-md flex-col">
          <label className="flex flex-col relative">
            <p className={`text-base font-medium leading-normal pb-2 ${
              errors.id_expiry_date ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
            }`}>
              Kimlik Geçerlilik Tarihi <span className="text-error">*</span>
            </p>
            <input
              type="date"
              value={data.id_expiry_date || ""}
              onChange={(e) => handleChange("id_expiry_date", e.target.value)}
              className={`form-input w-full rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                errors.id_expiry_date ? "border-error focus:ring-error" : "border-border-light dark:border-border-dark focus:ring-primary"
              } bg-content-light dark:bg-content-dark h-12 px-4 text-base font-normal`}
            />
            {errors.id_expiry_date && (
              <p className="text-error text-xs font-normal leading-normal pt-1 px-1">{errors.id_expiry_date}</p>
            )}
          </label>
        </div>

        {/* Uploaded Documents Section */}
        {uploadedFiles.length > 0 && (
          <div>
            <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold mb-4">
              Yüklenen Dokümanlar
            </h3>
            <div className="flex flex-col gap-3">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-3"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                        {file.name}
                      </p>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        {file.size} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleFileDelete(index)}
                    className="text-error hover:text-error/80"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center pt-6 border-t border-border-light dark:border-border-dark mt-8">
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


