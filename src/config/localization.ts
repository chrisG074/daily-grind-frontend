/**
 * Centralized localization configuration
 * Default languages and currencies fetched from API or used as fallback
 */

export interface LanguageOption {
  code: string;
  name: string;
}

export interface CurrencyOption {
  code: string;
  symbol: string;
  exchangeRate: number;
}

/**
 * Default languages (used as fallback when API is unavailable)
 */
export const DEFAULT_LANGUAGES: LanguageOption[] = [
  { code: 'nl', name: 'Nederlands' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' }
];

/**
 * Default currencies (used as fallback when API is unavailable)
 */
export const DEFAULT_CURRENCIES: CurrencyOption[] = [
  { code: 'EUR', symbol: '€', exchangeRate: 1 },
  { code: 'GBP', symbol: '£', exchangeRate: 0.85 },
  { code: 'USD', symbol: '$', exchangeRate: 1.1 }
];

/**
 * API endpoints for localization data
 */
export const LOCALIZATION_API = {
  languages: 'http://localhost:5266/api/localization/languages',
  currencies: 'http://localhost:5266/api/localization/currencies',
  translations: 'http://localhost:5266/api/localization/translations'
};

/**
 * Build currency lookup maps from currency list
 */
export function buildCurrencyMaps(currencies: CurrencyOption[]) {
  const symbols: Record<string, string> = {};
  const rates: Record<string, number> = {};

  currencies.forEach(currency => {
    symbols[currency.code] = currency.symbol;
    rates[currency.code] = currency.exchangeRate;
  });

  return { symbols, rates };
}
