"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  { id: 1, name: "Lieferando" },
  { id: 2, name: "Uber Eats" },
  { id: 3, name: "Wolt" },
  { id: 4, name: "Glovo" },
];

export default function StepSix({ data, updateData, onNext, onPrev }) {
  const selectedBrands = data.selected_brands || [];
  const [brandServices, setBrandServices] = useState(data.brand_services || {});
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize brand services
    if (!isInitialized && Object.keys(brandServices).length === 0 && selectedBrands.length > 0) {
      const initialServices = {};
      selectedBrands.forEach(brand => {
        initialServices[brand.id] = [];
      });
      setBrandServices(initialServices);
      setIsInitialized(true);
    }
  }, [selectedBrands, brandServices, isInitialized]);

  const handleServiceToggle = (brandId, serviceId) => {
    const currentServices = brandServices[brandId] || [];
    const newServices = currentServices.includes(serviceId)
      ? currentServices.filter(s => s !== serviceId)
      : [...currentServices, serviceId];
    
    const newBrandServices = {
      ...brandServices,
      [brandId]: newServices,
    };
    
    setBrandServices(newBrandServices);
    updateData({ brand_services: newBrandServices });
  };

  const getTotalAgreements = () => {
    return Object.values(brandServices).reduce((sum, services) => sum + services.length, 0);
  };

  const handleNext = () => {
    updateData({ brand_services: brandServices });
    onNext();
  };

  return (
    <div className="bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="flex-1">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark">
              Markalarınıza Servis Atayın
            </h2>
          </div>

          {/* Sticky Brand Chips */}
          <div className="flex gap-3 flex-wrap mb-6 pb-4 border-b border-border-light dark:border-border-dark">
            {selectedBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex h-8 items-center justify-center rounded-lg bg-border-light dark:bg-border-dark px-4"
              >
                <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>

          {/* Brand Cards */}
          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
            {selectedBrands.map((brand) => {
              const services = brandServices[brand.id] || [];
              
              return (
                <div
                  key={brand.id}
                  className="p-4 bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Brand Logo */}
                    <div className={`w-full lg:w-40 lg:h-40 shrink-0 ${brand.bgColor} rounded-lg flex items-center justify-center aspect-video lg:aspect-square`}>
                      <div className="w-16 h-16 rounded-lg bg-text-primary-light dark:bg-text-primary-dark flex items-center justify-center text-white font-bold text-2xl">
                        {brand.name.charAt(0)}
                      </div>
                    </div>

                    {/* Brand Info */}
                    <div className="flex w-full grow flex-col gap-1">
                      <p className="text-primary/80 dark:text-primary/70 text-sm">
                        {brand.name}
                      </p>
                      <p className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold">
                        {brand.name} için servis seçin
                      </p>
                      <p className={`text-base font-medium ${
                        services.length > 0 ? "text-primary" : "text-text-secondary-light dark:text-text-secondary-dark"
                      }`}>
                        {services.length > 0 ? `${services.length} servis seçili` : "Henüz servis seçilmedi"}
                      </p>
                    </div>
                  </div>

                  <hr className="my-4 border-border-light dark:border-border-dark"/>

                  {/* Service Checkboxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {SERVICES.map((service) => {
                      const isChecked = services.includes(service.id);
                      
                      return (
                        <label
                          key={service.id}
                          className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                            isChecked
                              ? "bg-primary border-primary text-white"
                              : "border-border-light dark:border-border-dark hover:border-primary"
                          }`}
                        >
                          <div className="flex-grow text-base font-medium">
                            {service.name}
                          </div>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleServiceToggle(brand.id, service.id)}
                            className="h-5 w-5 rounded border-2 border-border-light bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Sidebar - Summary */}
        <div className="lg:w-[300px] shrink-0">
          <div className="sticky top-4 bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-6">
            <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Seçim Özeti
            </h3>
            
            <div className="space-y-4">
              {selectedBrands.map((brand) => {
                const services = brandServices[brand.id] || [];
                
                return (
                  <div key={brand.id}>
                    <p className="font-bold text-text-primary-light dark:text-text-primary-dark">
                      {brand.name}
                    </p>
                    {services.length > 0 ? (
                      <ul className="list-disc list-inside text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        {services.map((serviceId) => {
                          const service = SERVICES.find(s => s.id === serviceId);
                          return <li key={serviceId}>{service?.name}</li>;
                        })}
                      </ul>
                    ) : (
                      <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        Henüz servis seçilmedi
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="bg-primary/20 dark:bg-primary/30 text-primary rounded-lg p-4 text-center">
              <p className="font-bold text-lg">Toplam Anlaşma: {getTotalAgreements()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 z-10 bg-content-light/80 dark:bg-content-dark/80 backdrop-blur-sm border-t border-border-light dark:border-border-dark p-4 -mx-6 sm:-mx-8 mt-6">
        <div className="flex justify-end items-center gap-4">
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center justify-center rounded-lg h-12 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark text-base font-bold px-6 hover:bg-border-light dark:hover:bg-border-dark transition-colors"
          >
            Geri
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold px-6 hover:bg-primary/90 transition-colors"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
}

