import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Flame, Sparkles, Globe } from 'lucide-react';

type Language = 'nl' | 'en' | 'de' | 'fr';
type Currency = 'EUR' | 'GBP' | 'USD';
type Category = 'country' | 'corporate' | 'accessories';
type SortOption = 'popular' | 'price-low' | 'price-high' | 'newest' | 'name';

interface ProductGridProps {
  category: Category;
  filters: {
    attachmentMethod: string[];
    country: string[];
    material: string[];
  };
  language: Language;
  currency: Currency;
  onProductClick: (product: any) => void;
  sortOption?: SortOption;
}

const translations = {
  nl: {
    from: 'Vanaf',
    customize: 'Aanpassen',
    noResults: 'Geen producten gevonden',
    noResultsDesc: 'Probeer de filters aan te passen',
    reviews: 'beoordelingen',
    bestseller: 'Bestseller',
    new: 'Nieuw',
    popular: 'Populair',
  },
  en: {
    from: 'From',
    customize: 'Customize',
    noResults: 'No products found',
    noResultsDesc: 'Try adjusting the filters',
    reviews: 'reviews',
    bestseller: 'Bestseller',
    new: 'New',
    popular: 'Popular',
  },
  de: {
    from: 'Ab',
    customize: 'Anpassen',
    noResults: 'Keine Produkte gefunden',
    noResultsDesc: 'Versuchen Sie die Filter anzupassen',
    reviews: 'Bewertungen',
    bestseller: 'Bestseller',
    new: 'Neu',
    popular: 'Beliebt',
  },
  fr: {
    from: 'À partir de',
    customize: 'Personnaliser',
    noResults: 'Aucun produit trouvé',
    noResultsDesc: 'Essayez d\'ajuster les filtres',
    reviews: 'avis',
    bestseller: 'Best-seller',
    new: 'Nouveau',
    popular: 'Populaire',
  },
};

const mockProducts = {
  country: [
    { id: 1, name: 'Netherlands Flag', country: 'Netherlands', price: 24.99, image: 'netherlands flag', rating: 4.8, reviewCount: 234, badge: 'bestseller' },
    { id: 2, name: 'Belgian Flag', country: 'Belgium', price: 24.99, image: 'belgium flag', rating: 4.6, reviewCount: 156, badge: 'popular' },
    { id: 3, name: 'German Flag', country: 'Germany', price: 24.99, image: 'germany flag', rating: 4.9, reviewCount: 312, badge: 'bestseller' },
    { id: 4, name: 'French Flag', country: 'France', price: 24.99, image: 'france flag', rating: 4.7, reviewCount: 189, badge: null },
    { id: 5, name: 'UK Flag', country: 'United Kingdom', price: 24.99, image: 'united kingdom flag', rating: 4.8, reviewCount: 267, badge: 'popular' },
    { id: 6, name: 'Spanish Flag', country: 'Spain', price: 24.99, image: 'spain flag', rating: 4.5, reviewCount: 143, badge: null },
    { id: 7, name: 'Italian Flag', country: 'Italy', price: 24.99, image: 'italy flag', rating: 4.7, reviewCount: 198, badge: 'new' },
    { id: 8, name: 'USA Flag', country: 'USA', price: 29.99, image: 'usa american flag', rating: 4.9, reviewCount: 421, badge: 'bestseller' },
  ],
  corporate: [
    { id: 101, name: 'Custom Corporate Flag', price: 49.99, image: 'corporate business flag', rating: 4.9, reviewCount: 178, badge: 'popular' },
    { id: 102, name: 'Company Logo Flag', price: 59.99, image: 'company logo flag', rating: 4.8, reviewCount: 203, badge: 'bestseller' },
    { id: 103, name: 'Promotional Flag', price: 39.99, image: 'promotional banner flag', rating: 4.6, reviewCount: 124, badge: null },
    { id: 104, name: 'Event Flag', price: 44.99, image: 'event banner flag', rating: 4.7, reviewCount: 156, badge: 'new' },
    { id: 105, name: 'Trade Show Flag', price: 54.99, image: 'trade show flag', rating: 4.8, reviewCount: 189, badge: 'bestseller' },
    { id: 106, name: 'Brand Identity Flag', price: 64.99, image: 'brand flag corporate', rating: 4.7, reviewCount: 145, badge: 'popular' },
    { id: 107, name: 'Marketing Flag', price: 42.99, image: 'marketing banner flag', rating: 4.5, reviewCount: 98, badge: null },
    { id: 108, name: 'Corporate Event Flag', price: 52.99, image: 'corporate event banner', rating: 4.9, reviewCount: 234, badge: 'new' },
  ],
  accessories: [
    { id: 201, name: 'Flagpole', price: 89.99, image: 'flagpole', rating: 4.8, reviewCount: 287, badge: 'bestseller' },
    { id: 202, name: 'Flag Hooks Set', price: 12.99, image: 'flag hooks metal', rating: 4.7, reviewCount: 412, badge: 'popular' },
    { id: 203, name: 'Flag Cord', price: 8.99, image: 'flag cord rope', rating: 4.5, reviewCount: 198, badge: null },
    { id: 204, name: 'Wall Mount Bracket', price: 19.99, image: 'wall mount bracket', rating: 4.6, reviewCount: 234, badge: null },
    { id: 205, name: 'Flagpole Stand', price: 45.99, image: 'flagpole stand base', rating: 4.8, reviewCount: 167, badge: 'bestseller' },
    { id: 206, name: 'Flag Clips Set', price: 9.99, image: 'flag clips metal', rating: 4.6, reviewCount: 289, badge: 'popular' },
    { id: 207, name: 'Outdoor Flagpole', price: 129.99, image: 'outdoor flagpole tall', rating: 4.9, reviewCount: 156, badge: 'new' },
    { id: 208, name: 'Flag Mounting Kit', price: 24.99, image: 'flag mounting hardware', rating: 4.7, reviewCount: 203, badge: null },
  ],
};

const currencySymbols = {
  EUR: '€',
  GBP: '£',
  USD: '$',
};

const currencyRates = {
  EUR: 1,
  GBP: 0.85,
  USD: 1.1,
};

export function ProductGrid({ category, filters, language, currency, onProductClick, sortOption = 'popular' }: ProductGridProps) {
  const t = translations[language];
  const products = mockProducts[category];

  // Filter products
  let filteredProducts = products.filter(product => {
    if (category === 'country' && filters.country.length > 0) {
      if (!filters.country.includes(product.country || '')) {
        return false;
      }
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        // Assuming newer products have higher IDs
        return b.id - a.id;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popular':
      default:
        // Sort by rating, then by review count
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        return b.reviewCount - a.reviewCount;
    }
  });

  const formatPrice = (price: number) => {
    const converted = price * currencyRates[currency];
    return `${currencySymbols[currency]}${converted.toFixed(2)}`;
  };

  if (sortedProducts.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-xl text-foreground mb-2">{t.noResults}</p>
          <p className="text-sm text-muted-foreground">{t.noResultsDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg border-2 border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all group relative"
          >
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                {product.badge === 'bestseller' && (
                  <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    {t.bestseller}
                  </span>
                )}
                {product.badge === 'new' && (
                  <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {t.new}
                  </span>
                )}
                {product.badge === 'popular' && (
                  <span className="bg-accent text-foreground text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {t.popular}
                  </span>
                )}
              </div>
            )}
            <div 
              className="aspect-[4/3] bg-muted overflow-hidden cursor-pointer border-b-2 border-border flex items-center justify-center group-hover:border-primary transition-colors"
              onClick={() => onProductClick(product)}
            >
              <Globe className="w-12 h-12 text-muted-foreground/30" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(product.rating)
                        ? 'text-accent fill-accent'
                        : 'text-muted stroke-border'
                    }`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  {product.rating} ({product.reviewCount} {t.reviews})
                </span>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground block mb-1">{t.from}</span>
                  <p className="text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
                </div>
                <button 
                  onClick={() => onProductClick(product)}
                  className="bg-primary text-white px-3 py-1.5 rounded hover:bg-primary/90 transition-colors text-xs font-medium whitespace-nowrap"
                >
                  {t.customize}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}