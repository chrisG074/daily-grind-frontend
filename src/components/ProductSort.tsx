import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Language = 'nl' | 'en' | 'de' | 'fr';
type SortOption = 'popular' | 'price-low' | 'price-high' | 'newest' | 'name';

interface ProductSortProps {
  language: Language;
  onSortChange: (sort: SortOption) => void;
  productCount: number;
}

const translations = {
  nl: {
    showing: 'Toont',
    products: 'producten',
    sortBy: 'Sorteer op',
    popular: 'Meest populair',
    priceLow: 'Prijs: laag naar hoog',
    priceHigh: 'Prijs: hoog naar laag',
    newest: 'Nieuwste eerst',
    name: 'Naam A-Z',
  },
  en: {
    showing: 'Showing',
    products: 'products',
    sortBy: 'Sort by',
    popular: 'Most popular',
    priceLow: 'Price: low to high',
    priceHigh: 'Price: high to low',
    newest: 'Newest first',
    name: 'Name A-Z',
  },
  de: {
    showing: 'Zeigt',
    products: 'Produkte',
    sortBy: 'Sortieren nach',
    popular: 'Am beliebtesten',
    priceLow: 'Preis: niedrig bis hoch',
    priceHigh: 'Preis: hoch bis niedrig',
    newest: 'Neueste zuerst',
    name: 'Name A-Z',
  },
  fr: {
    showing: 'Affichage',
    products: 'produits',
    sortBy: 'Trier par',
    popular: 'Plus populaire',
    priceLow: 'Prix: bas à élevé',
    priceHigh: 'Prix: élevé à bas',
    newest: 'Plus récent',
    name: 'Nom A-Z',
  },
};

export function ProductSort({ language, onSortChange, productCount }: ProductSortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>('popular');
  const t = translations[language];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'popular', label: t.popular },
    { value: 'price-low', label: t.priceLow },
    { value: 'price-high', label: t.priceHigh },
    { value: 'newest', label: t.newest },
    { value: 'name', label: t.name },
  ];

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    onSortChange(option);
    setIsOpen(false);
  };

  const selectedLabel = sortOptions.find(opt => opt.value === selected)?.label;

  return (
    <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg border-2 border-black">
      <p className="text-sm text-black">
        [{t.showing} <span className="font-semibold text-black">{productCount}</span> {t.products}]
      </p>
      <div className="relative z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-lg hover:bg-white transition-colors bg-white"
        >
          <span className="text-sm text-black">[{t.sortBy}:]</span>
          <span className="text-sm font-medium text-black">[{selectedLabel}]</span>
          <ChevronDown className="w-4 h-4 text-black" />
        </button>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-30" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 bg-white border-2 border-black rounded-lg py-2 min-w-[220px] shadow-lg z-40">
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-white transition-colors ${
                    selected === option.value ? 'text-black font-medium underline' : 'text-black'
                  }`}
                >
                  [{option.label}]
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}