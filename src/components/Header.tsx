import { Search, ShoppingCart, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '../context/TranslationsContext';
import {
  LanguageOption,
  CurrencyOption,
  DEFAULT_LANGUAGES,
  DEFAULT_CURRENCIES
} from '../config/localization';

type Language = string;
type Currency = string;
type Category = 'country' | 'corporate' | 'accessories';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  category: Category;
  onCategoryChange: (cat: Category) => void;
  onCartClick: () => void;
  onLogoClick?: () => void;
  cartItemCount?: number;
  availableLanguages?: LanguageOption[];
  availableCurrencies?: CurrencyOption[];
}

export function Header({
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
  category,
  onCategoryChange,
  onCartClick,
  onLogoClick,
  cartItemCount = 0,
  availableLanguages = DEFAULT_LANGUAGES,
  availableCurrencies = DEFAULT_CURRENCIES,
}: HeaderProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const t = useTranslations('header')[language] as any;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="bg-primary text-white py-1.5 sm:py-2 min-h-[32px] sm:min-h-[40px] relative">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 flex justify-between items-center text-sm h-full">
          <div className="flex items-center gap-2 sm:gap-6 h-full">
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setLangOpen(!langOpen);
                  setCurrOpen(false);
                }}
                className="flex items-center gap-1 hover:text-white/80 transition-colors h-full"
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-sm">{language.toUpperCase()}</span>
                <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
              </button>
              {langOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setLangOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-1 bg-white text-foreground border border-border rounded py-1 min-w-[80px] z-50">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLangOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm"
                      >
                        {lang.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="relative h-full flex items-center">
              <button
                onClick={() => {
                  setCurrOpen(!currOpen);
                  setLangOpen(false);
                }}
                className="flex items-center gap-1 hover:text-white/80 transition-colors h-full"
              >
                <span className="text-[10px] sm:text-sm">{currency}</span>
                <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
              </button>
              {currOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setCurrOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-1 bg-white text-foreground border border-border rounded py-1 min-w-[80px] z-50">
                    {availableCurrencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          onCurrencyChange(curr.code);
                          setCurrOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm"
                      >
                        {curr.code}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="text-[9px] sm:text-sm whitespace-nowrap">
            <span className="hidden md:inline">Gratis verzending vanaf €75 | Free shipping from €75</span>
            <span className="md:hidden">Gratis vanaf €75</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-8">
          <button 
            onClick={onLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img 
              src="/logo.jpg" 
              alt="Vlag en Wimpel" 
              className="h-10 sm:h-16 w-auto object-contain"
            />
          </button>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-5 sm:h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.search}
                className="w-full pl-7 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-xs sm:text-sm"
              />
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="flex items-center gap-1 sm:gap-2 bg-primary text-white px-2.5 sm:px-6 py-1.5 sm:py-2 rounded-lg hover:bg-primary/90 transition-colors flex-shrink-0"
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            <span className="font-semibold text-xs sm:text-base">{cartItemCount || 0}</span>
          </button>
        </div>

        <nav className="flex gap-1.5 sm:gap-6 mt-3 sm:mt-6 border-t border-border pt-2 sm:pt-4 overflow-x-auto">
          <button
            onClick={() => onCategoryChange('country')}
            className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-xs sm:text-sm ${
              category === 'country'
                ? 'bg-primary text-white'
                : 'text-foreground hover:bg-muted border border-border'
            }`}
          >
            {t.countryFlags}
          </button>
          <button
            onClick={() => onCategoryChange('corporate')}
            className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-xs sm:text-sm ${
              category === 'corporate'
                ? 'bg-primary text-white'
                : 'text-foreground hover:bg-muted border border-border'
            }`}
          >
            {t.corporateFlags}
          </button>
          <button
            onClick={() => onCategoryChange('accessories')}
            className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-xs sm:text-sm ${
              category === 'accessories'
                ? 'bg-primary text-white'
                : 'text-foreground hover:bg-muted border border-border'
            }`}
          >
            {t.accessories}
          </button>
        </nav>
      </div>
    </header>
  );
}