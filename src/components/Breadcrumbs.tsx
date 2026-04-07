import { ChevronRight, Home } from 'lucide-react';
import { useTranslations } from '../context/TranslationsContext';

type Language = string;
type Category = 'country' | 'corporate' | 'accessories';

interface BreadcrumbsProps {
  category: Category;
  language: Language;
  onNavigateHome: () => void;
}

export function Breadcrumbs({ category, language, onNavigateHome }: BreadcrumbsProps) {
  const t = useTranslations('breadcrumbs')[language] as any;

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