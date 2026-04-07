import { useState, useEffect } from 'react';
import {
  LanguageOption,
  CurrencyOption,
  DEFAULT_LANGUAGES,
  DEFAULT_CURRENCIES,
  LOCALIZATION_API
} from '../config/localization';

interface UseLocalizationReturn {
  availableLanguages: LanguageOption[];
  availableCurrencies: CurrencyOption[];
  isLoadingLocalization: boolean;
  localizationError: string | null;
}

/**
 * Custom hook to fetch languages and currencies from API
 * Falls back to default values if API is unavailable
 */
export function useLocalization(): UseLocalizationReturn {
  const [availableLanguages, setAvailableLanguages] = useState<LanguageOption[]>(DEFAULT_LANGUAGES);
  const [availableCurrencies, setAvailableCurrencies] = useState<CurrencyOption[]>(DEFAULT_CURRENCIES);
  const [isLoadingLocalization, setIsLoadingLocalization] = useState(true);
  const [localizationError, setLocalizationError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocalization = async () => {
      try {
        setIsLoadingLocalization(true);
        setLocalizationError(null);

        // Fetch languages
        const languagesResponse = await fetch(LOCALIZATION_API.languages, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!languagesResponse.ok) {
          throw new Error(`Failed to fetch languages: ${languagesResponse.statusText}`);
        }
        const languagesData = await languagesResponse.json();
        setAvailableLanguages(languagesData);

        // Fetch currencies
        const currenciesResponse = await fetch(LOCALIZATION_API.currencies, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!currenciesResponse.ok) {
          throw new Error(`Failed to fetch currencies: ${currenciesResponse.statusText}`);
        }
        const currenciesData = await currenciesResponse.json();
        setAvailableCurrencies(currenciesData);
      } catch (error) {
        console.error('Error fetching localization data:', error);
        setLocalizationError(error instanceof Error ? error.message : 'Failed to load localization data');
        // Fallback to defaults on error
        setAvailableLanguages(DEFAULT_LANGUAGES);
        setAvailableCurrencies(DEFAULT_CURRENCIES);
      } finally {
        setIsLoadingLocalization(false);
      }
    };

    fetchLocalization();
  }, []);

  return {
    availableLanguages,
    availableCurrencies,
    isLoadingLocalization,
    localizationError
  };
}
