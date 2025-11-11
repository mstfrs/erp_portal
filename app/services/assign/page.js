"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SERVICES = [
  { id: 1, name: "Lieferando" },
  { id: 2, name: "Uber Eats" },
  { id: 3, name: "Wolt" },
  { id: 4, name: "Glovo" },
];

const SAMPLE_BRANDS = [
  { id: 1, name: "Burger House", bgColor: "bg-orange-500" },
  { id: 2, name: "Pizza Palace", bgColor: "bg-red-500" },
  { id: 3, name: "Sushi Spot", bgColor: "bg-teal-600" },
];

export default function AssignServicesPage() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState({
    1: [1, 2], // Burger House: Lieferando, Uber Eats
    2: [1],    // Pizza Palace: Lieferando
    3: [],     // Sushi Spot: none
  });

  const handleServiceToggle = (brandId, serviceId) => {
    setSelectedServices((prev) => {
      const brandServices = prev[brandId] || [];
      const isSelected = brandServices.includes(serviceId);
      
      return {
        ...prev,
        [brandId]: isSelected
          ? brandServices.filter(s => s !== serviceId)
          : [...brandServices, serviceId],
      };
    });
  };

  const getTotalAgreements = () => {
    return Object.values(selectedServices).reduce((sum, services) => sum + services.length, 0);
  };

  const handleContinue = () => {
    router.push("/working-areas");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border-light dark:border-border-dark px-6 sm:px-10 py-3 bg-content-light dark:bg-content-dark sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 18.5a1.5 1.5 0 0 1-1 1.415V21a1 1 0 0 1-2 0v-1.085a1.5 1.5 0 0 1 0-2.83V16a1 1 0 0 1 2 0v1.085a1.5 1.5 0 0 1 1 1.415zM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm0 4h14v4.08a3.5 3.5 0 0 0-2 .668V9H5v9h6.08a3.51 3.51 0 0 0 .668 2H4a1 1 0 0 1-1-1V8z" />
          </svg>
          <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold">CC Culinary</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-9">
            <Link href="/dashboard/approved" className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/brands/select" className="text-primary text-sm font-bold">
              Brands
            </Link>
            <Link href="#" className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">
              Services
            </Link>
            <Link href="#" className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">
              Reports
            </Link>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg w-10 h-10 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </button>
            <button className="flex items-center justify-center rounded-lg w-10 h-10 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </button>
          </div>

          <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative flex flex-col lg:flex-row lg:gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* Page Heading */}
              <div className="mb-4">
                <p className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-tight">
                  Markalarınıza Servis Atayın
                </p>
              </div>

              {/* Sticky Brand Chips */}
              <div className="sticky top-[73px] z-10 bg-background-light dark:bg-background-dark py-4 -mx-4 px-4 border-b border-border-light dark:border-border-dark mb-4">
                <div className="flex gap-3 flex-wrap">
                  {SAMPLE_BRANDS.map((brand) => (
                    <div
                      key={brand.id}
                      className="flex h-8 items-center justify-center gap-x-2 rounded-lg bg-border-light dark:bg-border-dark px-4"
                    >
                      <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium">
                        {brand.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Cards */}
              <div className="space-y-6">
                {SAMPLE_BRANDS.map((brand) => {
                  const brandServices = selectedServices[brand.id] || [];
                  const selectedCount = brandServices.length;

                  return (
                    <div
                      key={brand.id}
                      className="p-4 bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Brand Logo */}
                        <div className={`w-full lg:w-40 lg:h-40 shrink-0 ${brand.bgColor} rounded-lg flex items-center justify-center aspect-video lg:aspect-square`}>
                          <div className="text-white font-black text-4xl">
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
                            selectedCount > 0 ? "text-primary" : "text-text-secondary-light dark:text-text-secondary-dark"
                          }`}>
                            {selectedCount > 0 ? `${selectedCount} servis seçili` : "Henüz servis seçilmedi"}
                          </p>
                        </div>
                      </div>

                      <hr className="my-4 border-border-light dark:border-border-dark"/>

                      {/* Service Checkboxes */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {SERVICES.map((service) => {
                          const isChecked = brandServices.includes(service.id);
                          
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
                                className="h-5 w-5 rounded border-2 border-border-light bg-transparent checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0"
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

            {/* Right Sidebar - Selection Summary */}
            <aside className="hidden lg:block w-[300px] shrink-0">
              <div className="sticky top-24">
                <div className="bg-content-light dark:bg-content-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-6">
                  <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                    Seçim Özeti
                  </h3>

                  <div className="space-y-4">
                    {SAMPLE_BRANDS.map((brand) => {
                      const brandServices = selectedServices[brand.id] || [];
                      
                      return (
                        <div key={brand.id}>
                          <p className="font-bold text-text-primary-light dark:text-text-primary-dark">
                            {brand.name}
                          </p>
                          {brandServices.length > 0 ? (
                            <ul className="list-disc list-inside text-text-secondary-light dark:text-text-secondary-dark">
                              {brandServices.map((serviceId) => {
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
            </aside>
          </div>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <footer className="sticky bottom-0 z-10 bg-content-light/80 dark:bg-content-dark/80 backdrop-blur-sm border-t border-border-light dark:border-border-dark p-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-4">
            <Link
              href="/brands/select"
              className="flex items-center justify-center rounded-lg h-12 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark text-base font-bold px-6 hover:bg-border-light dark:hover:bg-border-dark transition-colors"
            >
              Geri
            </Link>
            <button
              onClick={handleContinue}
              disabled={getTotalAgreements() === 0}
              className={`flex items-center justify-center rounded-lg h-12 px-6 text-base font-bold transition-colors ${
                getTotalAgreements() > 0
                  ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                  : "bg-border-light dark:bg-border-dark text-text-secondary-light dark:text-text-secondary-dark cursor-not-allowed"
              }`}
            >
              Çalışma Alanlarına Devam
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}



