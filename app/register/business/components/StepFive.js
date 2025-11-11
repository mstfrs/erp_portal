"use client";

import { useState } from "react";

const MAX_SELECTION = 3;

const BRANDS = [
  { id: 1, name: "Gourmet Burgers", description: "Premium handcrafted burgers and sides.", category: "QSR", bgColor: "bg-rose-100 dark:bg-rose-900" },
  { id: 2, name: "The Pizza Place", description: "Authentic wood-fired pizzas and pasta.", category: "Casual Dining", bgColor: "bg-amber-100 dark:bg-amber-900" },
  { id: 3, name: "Sushi House", description: "Fresh and innovative sushi creations.", category: "Fine Dining", bgColor: "bg-cyan-100 dark:bg-cyan-900" },
  { id: 4, name: "Taco Town", description: "Street-style tacos and Mexican fare.", category: "Fast Food", bgColor: "bg-purple-100 dark:bg-purple-900" },
  { id: 5, name: "Cafe Central", description: "Artisanal coffee, pastries, and brunch.", category: "Cafe", bgColor: "bg-teal-100 dark:bg-teal-900" },
  { id: 6, name: "BBQ Barn", description: "Slow-smoked meats and classic sides.", category: "Casual Dining", bgColor: "bg-orange-100 dark:bg-orange-900" },
];

export default function StepFive({ data, updateData, onNext, onPrev }) {
  const [searchQuery, setSearchQuery] = useState("");
  const selectedBrands = data.selected_brands || [];

  const handleBrandToggle = (brand) => {
    if (selectedBrands.find(b => b.id === brand.id)) {
      updateData({ selected_brands: selectedBrands.filter(b => b.id !== brand.id) });
    } else if (selectedBrands.length < MAX_SELECTION) {
      updateData({ selected_brands: [...selectedBrands, brand] });
    }
  };

  const handleRemoveBrand = (brandId) => {
    updateData({ selected_brands: selectedBrands.filter(b => b.id !== brandId) });
  };

  const handleNext = () => {
    if (selectedBrands.length > 0) {
      onNext();
    }
  };

  const filteredBrands = BRANDS.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isLimitReached = selectedBrands.length >= MAX_SELECTION;

  return (
    <div className="bg-content-light dark:bg-content-dark rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-tight">
              Markalarınızı Seçin
            </p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
              Devam etmek için en fazla 3 marka seçebilirsiniz.
            </p>
          </div>
          <div className="flex h-8 items-center justify-center rounded bg-yellow-500/20 px-3">
            <p className="text-yellow-600 dark:text-yellow-400 text-sm font-bold">MAX 3</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-grow">
            <div className="flex h-12 w-full items-stretch rounded-lg">
              <div className="flex items-center justify-center rounded-l-lg border-y border-l border-border-light bg-background-light pl-4 dark:border-border-dark dark:bg-background-dark">
                <svg className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input w-full rounded-r-lg border border-border-light bg-background-light px-4 text-base text-text-primary-light placeholder:text-text-secondary-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark"
                placeholder="Marka adıyla ara..."
              />
            </div>
          </div>
          <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-light bg-background-light px-4 text-base font-medium text-text-primary-light hover:bg-border-light dark:border-border-dark dark:bg-background-dark dark:text-text-primary-dark dark:hover:bg-border-dark transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            <span>Filtrele</span>
          </button>
        </div>

        {/* Selected Brands Bar */}
        <div className="border-y border-border-light dark:border-border-dark -mx-6 sm:-mx-8 px-6 sm:px-8 py-4 bg-background-light/50 dark:bg-background-dark/50">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark pr-2">
              Seçili:
            </p>
            {selectedBrands.length === 0 ? (
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Henüz marka seçilmedi
              </p>
            ) : (
              selectedBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/20 pl-4 pr-3 text-primary"
                >
                  <p className="text-sm font-medium">{brand.name}</p>
                  <button
                    onClick={() => handleRemoveBrand(brand.id)}
                    className="rounded-full hover:bg-primary/20"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              ))
            )}
            <span className="ml-auto text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
              {selectedBrands.length}/{MAX_SELECTION} Seçili
            </span>
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand) => {
            const isSelected = selectedBrands.find(b => b.id === brand.id);
            const isDisabled = !isSelected && isLimitReached;

            return (
              <div
                key={brand.id}
                onClick={() => !isDisabled && handleBrandToggle(brand)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border-2 transition-all ${
                  isSelected
                    ? "border-primary bg-primary/10 dark:bg-primary/20"
                    : isDisabled
                    ? "border-border-light bg-content-light opacity-50 cursor-not-allowed dark:border-border-dark dark:bg-content-dark"
                    : "border-border-light bg-content-light hover:border-primary/50 hover:shadow-lg dark:border-border-dark dark:bg-content-dark dark:hover:border-primary/50"
                }`}
              >
                {/* Limit Reached Overlay */}
                {isDisabled && (
                  <div className="absolute inset-0 z-10 flex cursor-not-allowed items-center justify-center bg-content-light/50 dark:bg-content-dark/50 rounded-xl">
                    <p className="rounded-full bg-text-primary-light/70 dark:bg-text-primary-dark/70 px-4 py-1.5 text-sm font-semibold text-white">
                      Limit doldu
                    </p>
                  </div>
                )}

                {/* Checkbox */}
                <div
                  className={`absolute right-4 top-4 z-10 w-6 h-6 rounded-md border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-border-light bg-transparent group-hover:border-primary dark:border-border-dark"
                  }`}
                >
                  {isSelected && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  )}
                </div>

                {/* Brand Image */}
                <div className={`flex h-32 items-center justify-center ${brand.bgColor}`}>
                  <div className="w-16 h-16 rounded-lg bg-text-primary-light dark:bg-text-primary-dark flex items-center justify-center text-white font-bold text-2xl">
                    {brand.name.charAt(0)}
                  </div>
                </div>

                {/* Brand Info */}
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="font-bold text-text-primary-light dark:text-text-primary-dark">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {brand.description}
                  </p>
                  <div className="mt-2">
                    <span className="rounded-md bg-background-light dark:bg-background-dark px-2 py-1 text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                      {brand.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6 border-t border-border-light dark:border-border-dark mt-4">
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center justify-center rounded-lg h-12 px-6 bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark text-base font-bold hover:bg-border-light dark:hover:bg-border-dark transition-colors"
          >
            Geri
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={selectedBrands.length === 0}
            className={`flex items-center justify-center rounded-lg h-12 px-6 text-base font-bold shadow-lg transition-all ${
              selectedBrands.length > 0
                ? "bg-primary text-white shadow-primary/30 hover:bg-primary/90 cursor-pointer"
                : "bg-border-light text-text-secondary-light cursor-not-allowed dark:bg-border-dark dark:text-text-secondary-dark shadow-none"
            }`}
          >
            Devam Et ({selectedBrands.length} Marka)
          </button>
        </div>
      </div>
    </div>
  );
}

