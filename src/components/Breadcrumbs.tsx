import { ChevronRight, Home } from 'lucide-react';

type Language = 'nl' | 'en' | 'de' | 'fr';
type Category = 'country' | 'corporate' | 'accessories';

interface BreadcrumbsProps {
  category: Category;
  language: Language;
  onNavigateHome: () => void;
}

const translations = {
  nl: {
    home: 'Home',
    shop: 'Winkel',
    country: 'Landvlaggen',
    corporate: 'Bedrijfsvlaggen',
    accessories: 'Accessoires',
  },
  en: {
    home: 'Home',
    shop: 'Shop',
    country: 'Country Flags',
    corporate: 'Corporate Flags',
    accessories: 'Accessories',
  },
  de: {
    home: 'Startseite',
    shop: 'Shop',
    country: 'Länderflaggen',
    corporate: 'Firmenflaggen',
    accessories: 'Zubehör',
  },
  fr: {
    home: 'Accueil',
    shop: 'Boutique',
    country: 'Drapeaux Nationaux',
    corporate: 'Drapeaux d\'Entreprise',
    accessories: 'Accessoires',
  },
};

export function Breadcrumbs({ category, language, onNavigateHome }: BreadcrumbsProps) {
  const t = translations[language];

  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      <button
        onClick={onNavigateHome}
        className="flex items-center gap-1 text-black hover:underline transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>{t.home}</span>
      </button>
      <ChevronRight className="w-4 h-4 text-black" />
      <span className="text-black">{t.shop}</span>
      <ChevronRight className="w-4 h-4 text-black" />
      <span className="text-black font-medium">{t[category]}</span>
    </nav>
  );
}