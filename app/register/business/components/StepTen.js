"use client";

import { useState, useRef } from "react";

export default function StepTen({ data, updateData, onSubmit, onPrev }) {
  const [errors, setErrors] = useState({});
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [signatureConfirmed, setSignatureConfirmed] = useState(false);
  const canvasRef = useRef(null);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setSignatureConfirmed(false);
    updateData({ signature: null });
    setErrors({});
  };

  const confirmSignature = () => {
    if (!hasDrawn) {
      setErrors({ signature: "Lütfen önce imzanızı çizin" });
      return;
    }
    const signatureData = canvasRef.current.toDataURL();
    updateData({ signature: signatureData });
    setSignatureConfirmed(true);
    setErrors({});
  };

  const handleSubmit = () => {
    if (!signatureConfirmed) {
      setErrors({ signature: "Lütfen imzanızı onaylayın" });
      return;
    }
    onSubmit();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Header Logo */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
          </svg>
          <span className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">CC Culinary</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[700px]">
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-bold tracking-widest text-center uppercase pb-3 pt-1">
          SON ADIM: E-İMZA
        </p>

        <main className="w-full flex flex-col bg-content-light dark:bg-content-dark rounded-lg shadow-lg p-8 gap-6">
          {/* Page Heading */}
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-3xl sm:text-4xl font-black leading-tight tracking-tight">
              Anlaşmalarınızı Tamamlayın
            </h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base max-w-md">
              Şartlarımızı kabul etmek ve hesap kurulumunuzu tamamlamak için elektronik imzanızı verin.
            </p>
          </div>

          {/* Signature Canvas */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-primary/50 dark:border-primary/70 bg-background-light/50 dark:bg-background-dark/30 h-[250px] w-full p-6">
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-full bg-white dark:bg-content-dark rounded cursor-crosshair"
              />
              {!hasDrawn && (
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark text-lg font-bold pointer-events-none">
                  İmzanızı buraya çizin
                </p>
              )}
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm text-center px-4">
              Farenizi veya trackpad&apos;inizi kullanarak imzanızı çizin. İmzanızın resmi kimliğinizdeki imzayla eşleştiğinden emin olun.
            </p>
          </div>

          {/* Canvas Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={clearSignature}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg h-12 px-6 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark text-sm font-bold hover:bg-border-light dark:hover:bg-border-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
              Temizle
            </button>
            <button
              type="button"
              onClick={confirmSignature}
              disabled={!hasDrawn}
              className={`flex w-full sm:w-auto items-center justify-center rounded-lg h-12 px-6 text-sm font-bold transition-colors ${
                hasDrawn
                  ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                  : "bg-primary/40 text-white/70 cursor-not-allowed"
              }`}
            >
              İmzayı Onayla
            </button>
          </div>

          {/* Disclaimer */}
          <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm leading-relaxed">
              İmzalayarak, elektronik imza onayını ve tüm anlaşmalar için elektronik imzanın bağlayıcılığını kabul ediyorsunuz. 
              Ayrıca CC Culinary ile elektronik olarak iş yapmaya rıza gösteriyorsunuz.
            </p>
          </div>

          {errors.signature && (
            <p className="text-error text-sm text-center">{errors.signature}</p>
          )}

          <div className="w-full border-t border-border-light dark:border-border-dark my-2"></div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={onPrev}
              className="flex items-center justify-center gap-2 rounded-lg h-12 px-4 text-text-secondary-light dark:text-text-secondary-dark text-sm font-bold hover:bg-background-light dark:hover:bg-background-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
              </svg>
              Geri
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!signatureConfirmed}
              className={`flex w-full sm:w-auto items-center justify-center rounded-lg h-12 px-6 text-sm font-bold transition-colors ${
                signatureConfirmed
                  ? "bg-text-primary-light dark:bg-text-primary-dark text-white cursor-pointer hover:opacity-90"
                  : "bg-text-primary-light/50 dark:bg-text-primary-dark/50 text-white/70 cursor-not-allowed opacity-50"
              }`}
            >
              Tüm Anlaşmaları İmzala & Kayıt Tamamla
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

