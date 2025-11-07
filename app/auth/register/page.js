"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  // Eğer kullanıcı zaten login olmuşsa anasayfaya yönlendir
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const validateForm = (formData) => {
    const newErrors = {};

    // Referans
    if (!formData.reference || formData.reference.trim() === "") {
      newErrors.reference = "Referans kodu gerekli";
    }

    // Firma adı
    if (!formData.company_name || formData.company_name.trim() === "") {
      newErrors.company_name = "Firma adı gerekli";
    }

    // Ad
    if (!formData.first_name || formData.first_name.trim() === "") {
      newErrors.first_name = "Ad gerekli";
    }

    // Soyad
    if (!formData.last_name || formData.last_name.trim() === "") {
      newErrors.last_name = "Soyad gerekli";
    }

    // E-posta
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "E-posta adresi gerekli";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin";
    }

    // Telefon
    if (!formData.phone || formData.phone.trim() === "") {
      newErrors.phone = "Telefon numarası gerekli";
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Geçerli bir telefon numarası girin (10-11 rakam)";
    }

    // Şifre
    if (!formData.password || formData.password === "") {
      newErrors.password = "Şifre gerekli";
    } else if (formData.password.length < 8) {
      newErrors.password = "Şifre en az 8 karakter olmalıdır";
    }

    // Şifre onay
    if (!formData.confirm_password || formData.confirm_password === "") {
      newErrors.confirm_password = "Şifre onayı gerekli";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Şifreler eşleşmiyor";
    }

    // KVKK
    if (!kvkkAccepted) {
      newErrors.kvkk = "KVKK metnini kabul etmelisiniz";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const formData = {
      reference: e.target.reference.value,
      company_name: e.target.company_name.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
    };

    // Validasyon
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // TODO: API endpoint'i eklenecek
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ general: data.message || "Kayıt işlemi başarısız oldu" });
        setLoading(false);
        return;
      }

      // Kayıt başarılı - login sayfasına yönlendir
      router.push("/auth/login?registered=true");
    } catch (error) {
      console.error("Register error:", error);
      setErrors({ general: "Bir hata oluştu. Lütfen tekrar deneyin." });
      setLoading(false);
    }
  };

  // Session yükleniyorsa loading göster
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-text-primary-light dark:text-text-primary-dark">
          Yükleniyor...
        </div>
      </div>
    );
  }

  // Zaten login olmuşsa boş sayfa göster
  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <svg 
              className="w-10 h-10 text-primary" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
            </svg>
            <span className="text-2xl font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
              CC Culinary
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-8">
          <div className="flex flex-col">
            {/* Başlık */}
            <div className="flex flex-col gap-1 mb-6 text-center">
              <p className="text-3xl font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
                Hesabınızı Oluşturun
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
                Toptan fiyatlara ve kolay siparişe erişim sağlayın
              </p>
            </div>

            {/* Genel Hata Mesajı */}
            {errors.general && (
              <div className="mb-4 p-3 bg-error/10 border border-error rounded-lg">
                <p className="text-error text-sm">{errors.general}</p>
              </div>
            )}

            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Referans Kodu */}
              <div className="flex flex-col">
                <label className="flex flex-col">
                  <p className={`text-sm font-medium leading-normal pb-2 ${
                    errors.reference ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                  }`}>
                    Referans Kodu
                  </p>
                  <input
                    name="reference"
                    type="text"
                    placeholder="Referans kodunuzu girin"
                    className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                      errors.reference 
                        ? "border-error focus:ring-error" 
                        : "border-border-light dark:border-border-dark focus:ring-primary"
                    } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 text-base font-normal leading-normal`}
                  />
                  {errors.reference && (
                    <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                      {errors.reference}
                    </p>
                  )}
                </label>
              </div>

              {/* Firma Adı */}
              <div className="flex flex-col">
                <label className="flex flex-col">
                  <p className={`text-sm font-medium leading-normal pb-2 ${
                    errors.company_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                  }`}>
                    Firma Adı
                  </p>
                  <input
                    name="company_name"
                    type="text"
                    placeholder="Firma adınızı girin"
                    className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                      errors.company_name 
                        ? "border-error focus:ring-error" 
                        : "border-border-light dark:border-border-dark focus:ring-primary"
                    } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 text-base font-normal leading-normal`}
                  />
                  {errors.company_name && (
                    <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                      {errors.company_name}
                    </p>
                  )}
                </label>
              </div>

              {/* Ad ve Soyad */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Ad */}
                <div className="flex flex-col">
                  <label className="flex flex-col">
                    <p className={`text-sm font-medium leading-normal pb-2 ${
                      errors.first_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      Ad
                    </p>
                    <input
                      name="first_name"
                      type="text"
                      placeholder="Adınızı girin"
                      className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                        errors.first_name 
                          ? "border-error focus:ring-error" 
                          : "border-border-light dark:border-border-dark focus:ring-primary"
                      } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 text-base font-normal leading-normal`}
                    />
                    {errors.first_name && (
                      <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                        {errors.first_name}
                      </p>
                    )}
                  </label>
                </div>

                {/* Soyad */}
                <div className="flex flex-col">
                  <label className="flex flex-col">
                    <p className={`text-sm font-medium leading-normal pb-2 ${
                      errors.last_name ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      Soyad
                    </p>
                    <input
                      name="last_name"
                      type="text"
                      placeholder="Soyadınızı girin"
                      className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                        errors.last_name 
                          ? "border-error focus:ring-error" 
                          : "border-border-light dark:border-border-dark focus:ring-primary"
                      } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 text-base font-normal leading-normal`}
                    />
                    {errors.last_name && (
                      <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                        {errors.last_name}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              {/* E-posta ve Telefon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* E-posta */}
                <div className="flex flex-col">
                  <label className="flex flex-col">
                    <p className={`text-sm font-medium leading-normal pb-2 ${
                      errors.email ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      E-posta
                    </p>
                    <input
                      name="email"
                      type="email"
                      placeholder="ornek@firma.com"
                      className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? "border-error focus:ring-error" 
                          : "border-border-light dark:border-border-dark focus:ring-primary"
                      } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 text-base font-normal leading-normal`}
                    />
                    {errors.email && (
                      <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                        {errors.email}
                      </p>
                    )}
                  </label>
                </div>

                {/* Telefon */}
                <div className="flex flex-col">
                  <label className="flex flex-col">
                    <p className={`text-sm font-medium leading-normal pb-2 ${
                      errors.phone ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      Telefon
                    </p>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="5XX XXX XX XX"
                      className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                        errors.phone 
                          ? "border-error focus:ring-error" 
                          : "border-border-light dark:border-border-dark focus:ring-primary"
                      } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 text-base font-normal leading-normal`}
                    />
                    {errors.phone && (
                      <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                        {errors.phone}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              {/* Şifre ve Şifre Onay */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Şifre */}
                <div className="flex flex-col">
                  <label className="flex flex-col">
                    <p className={`text-sm font-medium leading-normal pb-2 ${
                      errors.password ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      Şifre
                    </p>
                    <div className="relative flex w-full items-stretch">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Şifrenizi girin"
                        className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                          errors.password 
                            ? "border-error focus:ring-error" 
                            : "border-border-light dark:border-border-dark focus:ring-primary"
                        } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 pr-10 text-base font-normal leading-normal`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                        {errors.password}
                      </p>
                    )}
                  </label>
                </div>

                {/* Şifre Onay */}
                <div className="flex flex-col">
                  <label className="flex flex-col">
                    <p className={`text-sm font-medium leading-normal pb-2 ${
                      errors.confirm_password ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      Şifre Onay
                    </p>
                    <div className="relative flex w-full items-stretch">
                      <input
                        name="confirm_password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Şifrenizi tekrar girin"
                        className={`form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 ${
                          errors.confirm_password 
                            ? "border-error focus:ring-error" 
                            : "border-border-light dark:border-border-dark focus:ring-primary"
                        } bg-content-light dark:bg-content-dark h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 py-2 pr-10 text-base font-normal leading-normal`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                      >
                        {showConfirmPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.confirm_password && (
                      <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                        {errors.confirm_password}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              {/* KVKK Checkbox */}
              <div className="flex flex-col">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={kvkkAccepted}
                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                    className={`mt-1 w-4 h-4 rounded border ${
                      errors.kvkk 
                        ? "border-error" 
                        : "border-border-light dark:border-border-dark"
                    } bg-content-light dark:bg-content-dark text-primary focus:ring-2 focus:ring-primary`}
                  />
                  <div className="flex-1">
                    <p className={`text-sm leading-relaxed ${
                      errors.kvkk 
                        ? "text-error" 
                        : "text-text-secondary-light dark:text-text-secondary-dark"
                    }`}>
                      <Link 
                        href="/kvkk" 
                        target="_blank"
                        className="font-medium text-primary hover:underline"
                      >
                        Kişisel Verilerin Korunması Kanunu (KVKK)
                      </Link>
                      {" "}kapsamında verilerimin işlenmesini, saklanmasını ve kullanılmasını kabul ediyorum.
                    </p>
                  </div>
                </label>
                {errors.kvkk && (
                  <p className="text-error text-xs font-normal leading-normal pt-1 px-1">
                    {errors.kvkk}
                  </p>
                )}
              </div>

              {/* Kayıt Butonu */}
              <div className="flex pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="truncate">
                    {loading ? "Kayıt Yapılıyor..." : "Hesap Oluştur"}
                  </span>
                </button>
              </div>

              {/* Yasal Metin */}
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs text-center leading-relaxed">
                Hesap oluşturarak{" "}
                <Link 
                  href="/terms" 
                  className="font-medium text-primary hover:underline"
                >
                  Hizmet Şartlarımızı
                </Link>
                {" "}ve{" "}
                <Link 
                  href="/privacy" 
                  className="font-medium text-primary hover:underline"
                >
                  Gizlilik Politikamızı
                </Link>
                {" "}kabul etmiş olursunuz.
              </p>
            </form>
          </div>
        </div>

        {/* Login Linki */}
        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Zaten hesabınız var mı?{" "}
            <Link 
              href="/auth/login" 
              className="font-medium text-primary hover:text-primary/80 transition-colors underline"
            >
              Giriş Yapın
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}



