import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductGrid } from './components/ProductGrid';
import { FilterSidebar } from './components/FilterSidebar';
import { FlagConfigurator } from './components/FlagConfigurator';
import { CheckoutProgress } from './components/CheckoutProgress';
import { ShoppingCart } from './components/ShoppingCart';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { ProductSort } from './components/ProductSort';
import { TrustBadges } from './components/TrustBadges';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { CookiePolicy } from './components/CookiePolicy';
import { FAQ } from './components/FAQ';
import { Shipping } from './components/Shipping';
import { Returns } from './components/Returns';
import { Payment } from './components/Payment';
import { useLocalization } from './hooks/useLocalization';
import { TranslationsProvider } from './context/TranslationsContext';
import {
  buildCurrencyMaps
} from './config/localization';

type Language = string;
type Currency = string;
type Category = 'country' | 'corporate' | 'accessories';
type SortOption = 'popular' | 'price-low' | 'price-high' | 'newest' | 'name';
type Page = 'home' | 'shop' | 'privacy' | 'terms' | 'cookies' | 'faq' | 'shipping' | 'returns' | 'payment';

export interface FilterState {
  attachmentMethod: string[];
  country: string[];
  material: string[];
}

export interface CartItem {
  id: number;
  name: string;
  size: string;
  material: string;
  attachment: string;
  quantity: number;
  price: number;
  image: string;
}

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Netherlands Flag',
    size: '150 x 225 cm',
    material: '110g/m² Gloss Poly',
    attachment: 'Hooks',
    quantity: 2,
    price: 39.99,
    image: 'netherlands flag',
  },
  {
    id: 2,
    name: 'German Flag',
    size: '100 x 150 cm',
    material: '115g/m² Nautical Poly',
    attachment: 'Cord',
    quantity: 1,
    price: 34.99,
    image: 'germany flag',
  },
];

export default function App() {
  // Fetch localization data using custom hook
  const { availableLanguages, availableCurrencies, isLoadingLocalization, localizationError } =
    useLocalization();

  // User selections with defaults
  const [language, setLanguage] = useState<string>('nl');
  const [currency, setCurrency] = useState<string>('EUR');
  const [category, setCategory] = useState<Category>('country');
  const [filters, setFilters] = useState<FilterState>({
    attachmentMethod: [],
    country: [],
    material: []
  });
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>('popular');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const handleNavigateToShop = () => {
    setCurrentPage('shop');
  };

  const handleCategorySelect = (newCategory: Category) => {
    setCategory(newCategory);
    setCurrentPage('shop');
  };

  const productCounts = {
    country: 8,
    corporate: 8,
    accessories: 8,
  };

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Build currency symbols and rates from API data
  const { symbols: currencySymbols, rates: currencyRates } = buildCurrencyMaps(availableCurrencies);

  return (
    <TranslationsProvider>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        category={category}
        onCategoryChange={(cat) => {
          setCategory(cat);
          setCurrentPage('shop');
        }}
        onCartClick={() => setCartOpen(true)}
        onLogoClick={() => {
          setCurrentPage('home');
        }}
        cartItemCount={cartItemCount}
        availableLanguages={availableLanguages}
        availableCurrencies={availableCurrencies}
      />

      {checkoutStep > 0 && (
        <CheckoutProgress currentStep={checkoutStep} />
      )}

      {currentPage === 'privacy' ? (
        <PrivacyPolicy language={language} />
      ) : currentPage === 'terms' ? (
        <TermsConditions language={language} />
      ) : currentPage === 'cookies' ? (
        <CookiePolicy language={language} />
      ) : currentPage === 'faq' ? (
        <FAQ language={language} />
      ) : currentPage === 'shipping' ? (
        <Shipping language={language} />
      ) : currentPage === 'returns' ? (
        <Returns language={language} />
      ) : currentPage === 'payment' ? (
        <Payment language={language} />
      ) : currentPage === 'home' ? (
        <HomePage
          language={language}
          onCategorySelect={handleCategorySelect}
          onNavigateToShop={handleNavigateToShop}
        />
      ) : (
        <div className="max-w-[1400px] mx-auto px-4 py-8 flex-1">
          {selectedProduct ? (
            <FlagConfigurator
              product={selectedProduct}
              language={language}
              currency={currency}
              onBack={() => setSelectedProduct(null)}
              onAddToCart={() => {
                setCartOpen(true);
                setSelectedProduct(null);
              }}
            />
          ) : (
            <>
              <Breadcrumbs
                category={category}
                language={language}
                onNavigateHome={() => {
                  setCurrentPage('home');
                }}
              />
              <TrustBadges language={language} />
              <div className="flex gap-8">
                <FilterSidebar
                  filters={filters}
                  onFiltersChange={setFilters}
                  language={language}
                  category={category}
                />
                <div className="flex-1">
                  <ProductSort
                    language={language}
                    onSortChange={setSortOption}
                    productCount={productCounts[category]}
                  />
                  <ProductGrid
                    category={category}
                    filters={filters}
                    language={language}
                    currency={currency}
                    onProductClick={setSelectedProduct}
                    sortOption={sortOption}
                    currencySymbols={currencySymbols}
                    currencyRates={currencyRates}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <Footer 
        language={language}
        onPrivacyClick={() => setCurrentPage('privacy')}
        onTermsClick={() => setCurrentPage('terms')}
        onCookiesClick={() => setCurrentPage('cookies')}
        onFaqClick={() => setCurrentPage('faq')}
        onShippingClick={() => setCurrentPage('shipping')}
        onReturnsClick={() => setCurrentPage('returns')}
        onPaymentClick={() => setCurrentPage('payment')}
        onLogoClick={() => {
          setCurrentPage('home');
        }}
      />

      <ShoppingCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        language={language}
        currency={currency}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutStep(1);
        }}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
    </TranslationsProvider>
  );
}