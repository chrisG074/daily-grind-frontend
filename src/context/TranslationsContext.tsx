import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { LOCALIZATION_API } from '../config/localization';
import fallbackTranslations from '../locales/translations.json';

type TranslationLanguageMap = Record<string, Record<string, unknown>>;
type TranslationNamespaceMap = Record<string, TranslationLanguageMap>;
type TranslationValue = Record<string, unknown>;

const FALLBACK_TRANSLATIONS = fallbackTranslations as unknown as TranslationNamespaceMap;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function pickLanguageContent(namespaceData: unknown, language: string): TranslationValue | null {
  if (!isObject(namespaceData)) {
    return null;
  }

  const langKey = (language || '').toLowerCase();

  // Shape A: namespace -> language -> content
  const byLang = namespaceData as Record<string, unknown>;
  const langCandidate = byLang[langKey] ?? byLang.en ?? byLang.nl;
  if (isObject(langCandidate)) {
    return langCandidate;
  }

  // Shape B: namespace -> content (already language-selected by backend)
  // Example: { hero: {...}, stats: {...} }
  return byLang;
}

interface TranslationsContextValue {
  translations: TranslationNamespaceMap;
  isLoadingTranslations: boolean;
  translationsError: string | null;
}

const TranslationsContext = createContext<TranslationsContextValue | undefined>(undefined);

export function TranslationsProvider({ children, language }: { children: ReactNode; language: string }) {
  const [translations, setTranslations] = useState<TranslationNamespaceMap>(FALLBACK_TRANSLATIONS);
  const [isLoadingTranslations, setIsLoadingTranslations] = useState(true);
  const [translationsError, setTranslationsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        setIsLoadingTranslations(true);
        setTranslationsError(null);

        const queryLanguage = encodeURIComponent((language || 'en').toLowerCase());
        const response = await fetch(`${LOCALIZATION_API.translations}?lang=${queryLanguage}`, {
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
        setTranslations(FALLBACK_TRANSLATIONS);
      } finally {
        setIsLoadingTranslations(false);
      }
    };

    fetchTranslations();
  }, [language]);

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

export function useTranslationForLanguage(namespace: string, language: string): TranslationValue {
  const context = useContext(TranslationsContext);

  if (!context) {
    throw new Error('useTranslationForLanguage must be used within a TranslationsProvider');
  }

  const selectedFromApi = pickLanguageContent(context.translations[namespace], language);
  if (selectedFromApi) {
    return selectedFromApi;
  }

  const selectedFromFallback = pickLanguageContent(FALLBACK_TRANSLATIONS[namespace], language);
  if (selectedFromFallback) {
    if (!context.isLoadingTranslations) {
      console.warn(`Using fallback translations for namespace: ${namespace}, language: ${language}`);
    }
    return selectedFromFallback;
  }

  if (!context.isLoadingTranslations) {
    console.warn(`Missing translation namespace: ${namespace}, language: ${language}`);
  }
  return {};
}