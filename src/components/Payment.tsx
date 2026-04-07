import { CreditCard, Building, Shield, Clock } from 'lucide-react';
import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;

interface PaymentProps {
  language: Language;
}

export function Payment({ language }: PaymentProps) {
  const t = useTranslationForLanguage('payment', language) as any;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      {/* Available Payment Methods */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-1 sm:mb-2">[{t.available.title}]</h2>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[{t.available.subtitle}]</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {Object.entries(t.methods).map(([key, method]) => (
            <div key={key} className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                <CreditCard className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">[{method.title}]</h3>
              <p className="text-[10px] sm:text-xs text-black">[{method.description}]</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Shield className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.security.title}]</h2>
        </div>
        <p className="text-black text-xs sm:text-sm">[{t.security.description}]</p>
      </div>

      {/* Payment Process */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.process.title}]</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {t.process.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 sm:mb-4 text-xs sm:text-base">
                {index + 1}
              </div>
              <h3 className="font-bold text-black mb-1 sm:mb-2 text-xs sm:text-sm">[{step.title}]</h3>
              <p className="text-[10px] sm:text-xs text-black">[{step.description}]</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Customers */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Building className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.businessCustomers.title}]</h2>
        </div>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[{t.businessCustomers.description}]</p>
        <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-6">
          {t.businessCustomers.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-black text-xs sm:text-sm">
              <span className="text-black mt-0.5">✓</span>
              <span>[{benefit}]</span>
            </li>
          ))}
        </ul>
        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-black/90 transition-colors font-medium text-xs sm:text-sm w-full sm:w-auto">
          [{t.businessCustomers.cta}]
        </button>
      </div>

      {/* Currencies */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-2 sm:mb-4">[{t.currencies.title}]</h2>
        <p className="text-black text-xs sm:text-sm">[{t.currencies.description}]</p>
      </div>

      {/* FAQ */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-3 sm:mb-6">[{t.faq.title}]</h2>
        <div className="space-y-3 sm:space-y-6">
          {t.faq.questions.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-black mb-1 sm:mb-2 text-xs sm:text-sm">[{item.q}]</h3>
              <p className="text-black text-xs sm:text-sm">[{item.a}]</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}