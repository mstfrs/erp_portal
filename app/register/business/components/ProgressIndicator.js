export default function ProgressIndicator({ currentStep, totalSteps }) {
  const steps = [
    { number: 1, label: "İşletme" },
    { number: 2, label: "Yetkili" },
    { number: 3, label: "Ödeme" },
    { number: 4, label: "Doküman" },
    { number: 5, label: "Markalar" },
    { number: 6, label: "Servisler" },
    { number: 7, label: "Bölgeler" },
    { number: 8, label: "Saatler" },
    { number: 9, label: "Anlaşmalar" },
    { number: 10, label: "İmza" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      {/* Progress Bar - Compact for 10 steps */}
      <div className="relative min-w-[800px]">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 relative">
              {/* Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-1/2 right-0 h-0.5 -translate-y-1/2 bg-border-light dark:bg-border-dark">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{
                      width: currentStep > step.number ? "100%" : "0%",
                    }}
                  />
                </div>
              )}

              {/* Step Circle */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentStep >= step.number
                      ? "bg-primary text-white"
                      : "bg-content-light dark:bg-content-dark border-2 border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark"
                  }`}
                >
                  {currentStep > step.number ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>

                {/* Step Label */}
                <span
                  className={`mt-1.5 text-[10px] font-medium text-center transition-colors duration-300 whitespace-nowrap ${
                    currentStep >= step.number
                      ? "text-text-primary-light dark:text-text-primary-dark"
                      : "text-text-secondary-light dark:text-text-secondary-dark"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

