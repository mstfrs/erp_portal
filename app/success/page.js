"use client";
import { useEffect } from "react";
import useERPStore from "../store/useERPStore";


export default function SuccessPage() {
  const clearCart = useERPStore((state) => state.clearCart);

  useEffect(() => {
    clearCart(); 
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Ödeme Başarılı 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Teşekkürler! Siparişiniz alındı ve işleme konuluyor.
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Anasayfaya Dön
        </a>
      </div>
    </div>
  );
}
