"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Eğer kullanıcı zaten login olmuşsa anasayfaya yönlendir
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const company = e.target.company.value;

    // Validasyon
    const newErrors = {};
    if (!email) newErrors.email = "E-posta adresi gerekli";
    if (!password) newErrors.password = "Şifre gerekli";
    if (!company) newErrors.company = "Şirket adı gerekli";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // 1. ADIM: Frappe'ye direkt istek - sid cookie'sini tarayıcıya yaz
      const frappeAuthRes = await fetch("/api/frappe-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
        credentials: "include", // Cookie'leri al ve kaydet
      });

      const frappeData = await frappeAuthRes.json();

      if (!frappeData.success) {
        setErrors({ general: "Giriş başarısız. Lütfen bilgilerinizi kontrol edin." });
        setLoading(false);
        return;
      }

      // 2. ADIM: NextAuth session oluştur
      const res = await signIn("credentials", {
        username: email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setErrors({ general: "Session oluşturulamadı. Lütfen tekrar deneyin." });
        setLoading(false);
        return;
      }

      if (res?.ok) {
        // Login başarılı - session hazır olana kadar bekle
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Anasayfaya yönlendir
        window.location.href = "/";
      }
    } catch (error) {
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

  // Zaten login olmuşsa (redirect yapılana kadar) boş sayfa göster
  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md">
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
                Hoşgeldiniz
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
                Devam etmek için hesabınıza giriş yapın
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
              {/* E-posta */}
              <div className="flex flex-col">
                <label className="flex flex-col">
                  <p className={`text-sm font-medium leading-normal pb-2 ${
                    errors.email ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                  }`}>
                    E-posta Adresi
                  </p>
                  <input
                    name="email"
                    type="email"
                    placeholder="E-posta adresinizi girin"
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

              {/* Şifre */}
              <div className="flex flex-col">
                <label className="flex flex-col">
                  <div className="flex justify-between items-baseline pb-2">
                    <p className={`text-sm font-medium leading-normal ${
                      errors.password ? "text-error" : "text-text-primary-light dark:text-text-primary-dark"
                    }`}>
                      Şifre
                    </p>
                    <a 
                      href="#" 
                      className="text-primary text-sm font-normal leading-normal underline hover:text-primary/80 transition-colors"
                    >
                      Şifremi Unuttum?
                    </a>
                  </div>
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


              {/* Login Button */}
              <div className="flex pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="truncate">
                    {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                  </span>
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
              <span className="flex-shrink mx-4 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                VEYA
              </span>
              <div className="flex-grow border-t border-border-light dark:border-border-dark"></div>
            </div>

            {/* Kayıt Linki */}
            <div className="text-center">
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Hesabınız yok mu?{" "}
                <a 
                  href="#" 
                  className="font-medium text-primary hover:text-primary/80 transition-colors underline"
                >
                  Şimdi Kayıt Olun
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
