import { RotateCcw, CheckCircle, XCircle, Mail } from 'lucide-react';
import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;

interface ReturnsProps {
  language: Language;
}

export function Returns({ language }: ReturnsProps) {
  const t = useTranslationForLanguage('returns', language) as any;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      {/* Return Policy */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <RotateCcw className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.policy.title}]</h2>
        </div>
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6 mb-3 sm:mb-6">
          <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-3">[{t.policy.period}]</h3>
          <p className="text-black text-xs sm:text-sm">[{t.policy.periodDesc}]</p>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-4">[{t.policy.conditions}]</h3>
        <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
          {t.policy.conditionsList.map((condition, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-black mt-0.5">•</span>
              <span>[{condition}]</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What can/cannot be returned */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
            <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
            <h2 className="text-sm sm:text-lg font-bold text-black">[{t.canReturn.title}]</h2>
          </div>
          <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
            {t.canReturn.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-0.5">✓</span>
                <span>[{item}]</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
            <XCircle className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
            <h2 className="text-sm sm:text-lg font-bold text-black">[{t.cannotReturn.title}]</h2>
          </div>
          <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
            {t.cannotReturn.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-0.5">✗</span>
                <span>[{item}]</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How to return */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-3 sm:mb-6">[{t.howTo.title}]</h2>
        <div className="space-y-3 sm:space-y-6">
          {t.howTo.steps.map((step, index) => (
            <div key={index} className="flex gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs sm:text-base">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">[{step.title}]</h3>
                <p className="text-black text-xs sm:text-sm">[{step.description}]</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refund */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-2 sm:mb-4">[{t.refund.title}]</h2>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[{t.refund.description}]</p>
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
          <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">[{t.refund.costs}]</h3>
          <p className="text-black text-xs sm:text-sm">[{t.refund.costsDesc}]</p>
        </div>
      </div>

      {/* Exchange */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-2 sm:mb-4">[{t.exchange.title}]</h2>
        <p className="text-black text-xs sm:text-sm">[{t.exchange.description}]</p>
      </div>

      {/* Defective products */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Mail className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.defective.title}]</h2>
        </div>
        <p className="text-black text-xs sm:text-sm">[{t.defective.description}]</p>
      </div>
    </div>
  );
}