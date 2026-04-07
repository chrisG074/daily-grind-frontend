import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '../context/TranslationsContext';

type Language = string;

interface FAQProps {
  language: Language;
}

export function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<string | null>('ordering-0');
  const t = useTranslations('faq')[language] as any;

  const toggleQuestion = (categoryKey: string, index: number) => {
    const key = `${categoryKey}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      <div className="space-y-4 sm:space-y-8">
        {Object.entries(t.categories).map(([categoryKey, categoryTitle]) => (
          <div key={categoryKey} className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-6">[{categoryTitle}]</h2>
            <div className="space-y-2 sm:space-y-4">
              {t.faqs[categoryKey as keyof typeof t.faqs].map((faq: any, index: number) => {
                const key = `${categoryKey}-${index}`;
                const isOpen = openIndex === key;

                return (
                  <div key={index} className="border-2 border-black rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(categoryKey, index)}
                      className="w-full flex items-center justify-between p-2.5 sm:p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-black pr-2 sm:pr-4 text-xs sm:text-sm">[{faq.question}]</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-2.5 sm:p-4 bg-white border-t-2 border-black">
                        <p className="text-black text-xs sm:text-sm">[{faq.answer}]</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-12 bg-white border-2 border-black rounded-lg p-4 sm:p-8 text-center">
        <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-4">[Nog vragen?]</h3>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[Neem contact op met onze klantenservice voor persoonlijk advies]</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <a
            href="mailto:info@vlagenwimpel.nl"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors font-medium text-xs sm:text-sm"
          >
            [Email ons]
          </a>
          <a
            href="tel:+31201234567"
            className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-black text-black rounded-lg hover:bg-white transition-colors font-medium text-xs sm:text-sm"
          >
            [Bel ons]
          </a>
        </div>
      </div>
    </div>
  );
}