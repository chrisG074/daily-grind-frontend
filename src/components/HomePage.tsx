import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Award, Truck, Shield, Globe, Building2, Package } from 'lucide-react';
import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;
type Category = 'country' | 'corporate' | 'accessories';

interface HomePageProps {
  language: Language;
  onCategorySelect: (category: Category) => void;
  onNavigateToShop: () => void;
}

const featuredProducts = [
  { id: 1, name: 'Netherlands Flag', price: '€24,99', image: 'netherlands flag' },
  { id: 2, name: 'German Flag', price: '€24,99', image: 'germany flag' },
  { id: 3, name: 'French Flag', price: '€24,99', image: 'france flag' },
  { id: 4, name: 'Custom Corporate Flag', price: '€49,99', image: 'corporate business flag' },
];

export function HomePage({ language, onCategorySelect, onNavigateToShop }: HomePageProps) {
  const t = useTranslationForLanguage('homePage', language) as any;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-10 sm:py-20 px-3 sm:px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-6">{t.hero.title}</h1>
              <p className="text-sm sm:text-xl mb-4 sm:mb-8 text-white">{t.hero.subtitle}</p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <button
                  onClick={onNavigateToShop}
                  className="bg-white text-primary px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 text-xs sm:text-base"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => onCategorySelect('corporate')}
                  className="bg-primary text-white border-2 border-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-xs sm:text-base"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>
            <div className="relative h-[200px] sm:h-[400px] rounded-lg overflow-hidden border-2 border-white flex items-center justify-center bg-primary/90">
              <Globe className="w-20 h-20 sm:w-40 sm:h-40 text-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-6 sm:py-12 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
            <div className="text-center border-2 border-border rounded-lg p-2 sm:p-4 hover:border-primary hover:bg-muted transition-all">
              <p className="text-base sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{t.stats.countries}</p>
              <p className="text-foreground text-[10px] sm:text-sm">Beschikbaar</p>
            </div>
            <div className="text-center border-2 border-border rounded-lg p-2 sm:p-4 hover:border-secondary hover:bg-muted transition-all">
              <p className="text-base sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">{t.stats.customers}</p>
              <p className="text-foreground text-[10px] sm:text-sm">Wereldwijd</p>
            </div>
            <div className="text-center border-2 border-border rounded-lg p-2 sm:p-4 hover:border-accent hover:bg-muted transition-all">
              <p className="text-base sm:text-3xl font-bold text-accent mb-1 sm:mb-2">{t.stats.orders}</p>
              <p className="text-foreground text-[10px] sm:text-sm">Geleverd</p>
            </div>
            <div className="text-center border-2 border-border rounded-lg p-2 sm:p-4 hover:border-primary hover:bg-muted transition-all">
              <p className="text-base sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{t.stats.rating}</p>
              <p className="text-foreground text-[10px] sm:text-sm">Klantbeoordeling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 sm:py-20 px-3 sm:px-4 bg-white border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">{t.categories.title}</h2>
            <p className="text-sm sm:text-xl text-muted-foreground">{t.categories.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            <button
              onClick={() => onCategorySelect('country')}
              className="bg-white p-4 sm:p-8 rounded-xl border-2 border-border hover:bg-primary hover:text-white hover:border-primary transition-all group text-left"
            >
              <div className="bg-white w-10 h-10 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-2 sm:mb-4 border-2 border-primary group-hover:bg-white group-hover:border-white transition-colors">
                <Globe className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-white">{t.categories.country.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-base mb-2 sm:mb-4 group-hover:text-white">{t.categories.country.desc}</p>
              <span className="text-primary font-semibold flex items-center gap-2 group-hover:text-white text-xs sm:text-base">
                {t.hero.cta} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </button>

            <button
              onClick={() => onCategorySelect('corporate')}
              className="bg-white p-4 sm:p-8 rounded-xl border-2 border-border hover:bg-secondary hover:text-white hover:border-secondary transition-all group text-left"
            >
              <div className="bg-white w-10 h-10 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-2 sm:mb-4 border-2 border-secondary group-hover:bg-white group-hover:border-white transition-colors">
                <Building2 className="w-5 h-5 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-white">{t.categories.corporate.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-base mb-2 sm:mb-4 group-hover:text-white">{t.categories.corporate.desc}</p>
              <span className="text-secondary font-semibold flex items-center gap-2 group-hover:text-white text-xs sm:text-base">
                {t.hero.cta} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </button>

            <button
              onClick={() => onCategorySelect('accessories')}
              className="bg-white p-4 sm:p-8 rounded-xl border-2 border-border hover:bg-accent hover:text-foreground hover:border-accent transition-all group text-left"
            >
              <div className="bg-white w-10 h-10 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-2 sm:mb-4 border-2 border-accent group-hover:bg-white group-hover:border-white transition-colors">
                <Package className="w-5 h-5 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-foreground">{t.categories.accessories.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-base mb-2 sm:mb-4 group-hover:text-foreground">{t.categories.accessories.desc}</p>
              <span className="text-accent-foreground font-semibold flex items-center gap-2 group-hover:text-foreground text-xs sm:text-base">
                {t.hero.cta} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 px-4 bg-white border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t.usps.quality.title}</h3>
              <p className="text-sm text-muted-foreground">{t.usps.quality.desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-secondary">
                <Truck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t.usps.shipping.title}</h3>
              <p className="text-sm text-muted-foreground">{t.usps.shipping.desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t.usps.security.title}</h3>
              <p className="text-sm text-muted-foreground">{t.usps.security.desc}</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t.usps.experience.title}</h3>
              <p className="text-sm text-muted-foreground">{t.usps.experience.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.featured.title}</h2>
            <p className="text-xl text-muted-foreground">{t.featured.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg border-2 border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all group cursor-pointer"
                onClick={onNavigateToShop}
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden border-b-2 border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Globe className="w-16 h-16 text-muted-foreground/30" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">{product.name}</h3>
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex-1">
                      <span className="text-xs text-muted-foreground block mb-1">{t.featured.from}</span>
                      <p className="text-2xl font-bold text-primary">{product.price}</p>
                    </div>
                    <button className="bg-primary text-white px-3 py-1.5 rounded hover:bg-primary/90 transition-colors text-xs font-medium whitespace-nowrap">
                      {t.featured.customize}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-border flex items-center justify-center bg-muted">
              <Building2 className="w-32 h-32 text-muted-foreground/30" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">{t.about.title}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t.about.text}</p>
              <button
                onClick={onNavigateToShop}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                {t.about.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}