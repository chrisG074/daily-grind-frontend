import { Check } from 'lucide-react';

interface CheckoutProgressProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Cart', nameNl: 'Winkelwagen', nameEn: 'Cart', nameDe: 'Warenkorb', nameFr: 'Panier' },
  { id: 2, name: 'Shipping', nameNl: 'Verzending', nameEn: 'Shipping', nameDe: 'Versand', nameFr: 'Livraison' },
  { id: 3, name: 'Payment', nameNl: 'Betaling', nameEn: 'Payment', nameDe: 'Zahlung', nameFr: 'Paiement' },
  { id: 4, name: 'Confirmation', nameNl: 'Bevestiging', nameEn: 'Confirmation', nameDe: 'Bestätigung', nameFr: 'Confirmation' },
];

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    currentStep > step.id
                      ? 'bg-green-600 text-white'
                      : currentStep === step.id
                      ? 'bg-[#0099CC] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {step.nameNl}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 mx-2 transition-colors ${
                    currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}