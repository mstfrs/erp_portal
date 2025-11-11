"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressIndicator from "./components/ProgressIndicator";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import StepSix from "./components/StepSix";
import StepSeven from "./components/StepSeven";
import StepEight from "./components/StepEight";
import StepNine from "./components/StepNine";
import StepTen from "./components/StepTen";

const TOTAL_STEPS = 10;

export default function BusinessRegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Business Information
    company_name: "",
    tax_number: "",
    vat_id: "",
    street_address: "",
    apartment: "",
    city: "",
    postal_code: "",
    country: "",
    
    // Step 2: Authorized Person
    representative_first_name: "",
    representative_last_name: "",
    representative_email: "",
    representative_phone: "",
    representative_country_code: "+90",
    is_different_contact: false,
    contact_first_name: "",
    contact_last_name: "",
    contact_email: "",
    contact_phone: "",
    contact_country_code: "+90",
    
    // Step 3: Payment Information
    iban: "",
    bic: "",
    
    // Step 4: Document Upload
    company_type: "",
    id_expiry_date: "",
    documents: [],
    
    // Step 5: Brand Selection
    selected_brands: [],
    
    // Step 6: Service Assignment
    brand_services: {},
    
    // Step 7: Working Areas
    working_cities: [""],
    
    // Step 8: Working Hours
    working_hours: {
      monday: { enabled: true, open: "09:00", close: "17:00" },
      tuesday: { enabled: true, open: "09:00", close: "17:00" },
      wednesday: { enabled: true, open: "09:00", close: "17:00" },
      thursday: { enabled: true, open: "09:00", close: "17:00" },
      friday: { enabled: true, open: "09:00", close: "17:00" },
      saturday: { enabled: true, open: "10:00", close: "22:00" },
      sunday: { enabled: false, open: "", close: "" },
    },
    
    // Step 9: Agreement Review
    agreements_accepted: [],
    
    // Step 10: E-Signature
    signature: null,
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // TODO: API call
      console.log("Form submitted:", formData);
      router.push("/register/business/complete");
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne data={formData} updateData={updateFormData} onNext={nextStep} />;
      case 2:
        return <StepTwo data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <StepThree data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <StepFour data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <StepFive data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 6:
        return <StepSix data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 7:
        return <StepSeven data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 8:
        return <StepEight data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 9:
        return <StepNine data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 10:
        return <StepTen data={formData} updateData={updateFormData} onSubmit={handleSubmit} onPrev={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-4xl">
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

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {/* Step Content */}
        <div className="mt-6">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

