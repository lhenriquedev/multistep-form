import { useState } from "react";

export function useForm(steps: React.ReactElement[]) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  function changeStep(indexOfCurrentStep: number, event?: any) {
    if (event) event.preventDefault();

    if (indexOfCurrentStep < 0 || indexOfCurrentStep >= steps.length) return;
    setCurrentStep(indexOfCurrentStep);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
