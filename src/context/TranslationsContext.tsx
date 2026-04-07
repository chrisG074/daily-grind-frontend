import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { LOCALIZATION_API } from '../config/localization';
import fallbackTranslations from '../locales/translations.json';

type TranslationLanguageMap = Record<string, Record<string, unknown>>;
type TranslationNamespaceMap = Record<string, TranslationLanguageMap>;

interface TranslationsContextValue {
  translations: TranslationNamespaceMap;
  isLoadingTranslations: boolean;
  translationsError: string | null;
}

const TranslationsContext = createContext<TranslationsContextValue | undefined>(undefined);

export function TranslationsProvider({ children }: { children: ReactNode }) {
  const [translations, setTranslations] = useState<TranslationNamespaceMap>(fallbackTranslations as TranslationNamespaceMap);
  const [isLoadingTranslations, setIsLoadingTranslations] = useState(true);
  const [translationsError, setTranslationsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setIsLoadingTranslations(true);
        setTranslationsError(null);

        const response = await fetch(LOCALIZATION_API.translations, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch translations: ${response.statusText}`);
        }

        const data = await response.json();
        setTranslations(data as TranslationNamespaceMap);
      } catch (error) {
        console.error('Error fetching translations:', error);
        setTranslationsError(error instanceof Error ? error.message : 'Failed to load translations');
        setTranslations(fallbackTranslations as TranslationNamespaceMap);
      } finally {
        setIsLoadingTranslations(false);
      }
    };

    fetchTranslations();
  }, []);

  return (
    <TranslationsContext.Provider value={{ translations, isLoadingTranslations, translationsError }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations(namespace: string) {
  const context = useContext(TranslationsContext);

  if (!context) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }

  return context.translations[namespace] ?? {};
}