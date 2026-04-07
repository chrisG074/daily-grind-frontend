import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Flame, Sparkles, Globe } from 'lucide-react';
import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;
type Currency = string;
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
  currencySymbols: Record<string, string>;
  currencyRates: Record<string, number>;
}

const mockProducts = {
  country: [
    { id: 101, name: 'Netherlands Flag', price: 24.99, image: 'netherlands flag', rating: 4.8, reviewCount: 214, badge: 'bestseller', country: 'Netherlands' },
    { id: 102, name: 'Germany Flag', price: 24.99, image: 'germany flag', rating: 4.7, reviewCount: 188, badge: 'popular', country: 'Germany' },
    { id: 103, name: 'France Flag', price: 24.99, image: 'france flag', rating: 4.6, reviewCount: 166, badge: null, country: 'France' }
  ],
  corporate: [
    { id: 201, name: 'Corporate Flag Classic', price: 49.99, image: 'corporate business flag', rating: 4.9, reviewCount: 102, badge: 'new' },
    { id: 202, name: 'Premium Logo Flag', price: 59.99, image: 'premium corporate flag', rating: 4.8, reviewCount: 88, badge: 'bestseller' }
  ],
  accessories: [
    { id: 301, name: 'Flag Pole', price: 89.99, image: 'flag pole', rating: 4.7, reviewCount: 61, badge: 'popular' },
    { id: 302, name: 'Wall Mount Kit', price: 19.99, image: 'wall mount kit', rating: 4.5, reviewCount: 44, badge: null }
  ]
};

export function ProductGrid({ category, filters, language, currency, onProductClick, sortOption = 'popular', currencySymbols, currencyRates }: ProductGridProps) {
  const t = useTranslationForLanguage('productGrid', language) as any;
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