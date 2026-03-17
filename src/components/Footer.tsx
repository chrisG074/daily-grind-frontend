import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Newsletter } from './Newsletter';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface FooterProps {
  language: Language;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
  onCookiesClick?: () => void;
  onLogoClick?: () => void;
  onFaqClick?: () => void;
  onShippingClick?: () => void;
  onReturnsClick?: () => void;
  onPaymentClick?: () => void;
}

const translations = {
  nl: {
    about: 'Over Ons',
    aboutText: 'Vlag en Wimpel B.V. is uw internationale specialist in hoogwaardige vlaggen en wimpels voor bedrijven en particulieren.',
    contact: 'Contact',
    address: 'Hoofdstraat 123, 1234 AB Amsterdam',
    phone: '+31 (0)20 123 4567',
    email: 'info@vlagenwimpel.nl',
    customerService: 'Klantenservice',
    faq: 'Veelgestelde Vragen',
    shipping: 'Verzending & Levering',
    returns: 'Retourneren',
    payment: 'Betaalmethoden',
    legal: 'Juridisch',
    privacy: 'Privacy Beleid',
    terms: 'Algemene Voorwaarden',
    cookies: 'Cookie Beleid',
    followUs: 'Volg Ons',
    newsletter: 'Nieuwsbrief',
    newsletterText: 'Blijf op de hoogte van onze nieuwste producten en aanbiedingen',
    subscribe: 'Inschrijven',
    emailPlaceholder: 'Uw e-mailadres',
    copyright: '© 2026 Vlag en Wimpel B.V. Alle rechten voorbehouden.',
  },
  en: {
    about: 'About Us',
    aboutText: 'Vlag en Wimpel B.V. is your international specialist in high-quality flags and pennants for businesses and individuals.',
    contact: 'Contact',
    address: 'Main Street 123, 1234 AB Amsterdam',
    phone: '+31 (0)20 123 4567',
    email: 'info@flagandpennant.com',
    customerService: 'Customer Service',
    faq: 'FAQ',
    shipping: 'Shipping & Delivery',
    returns: 'Returns',
    payment: 'Payment Methods',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookies: 'Cookie Policy',
    followUs: 'Follow Us',
    newsletter: 'Newsletter',
    newsletterText: 'Stay updated with our latest products and offers',
    subscribe: 'Subscribe',
    emailPlaceholder: 'Your email address',
    copyright: '© 2026 Vlag en Wimpel B.V. All rights reserved.',
  },
  de: {
    about: 'Über Uns',
    aboutText: 'Vlag en Wimpel B.V. ist Ihr internationaler Spezialist für hochwertige Flaggen und Wimpel für Unternehmen und Privatpersonen.',
    contact: 'Kontakt',
    address: 'Hauptstraße 123, 1234 AB Amsterdam',
    phone: '+31 (0)20 123 4567',
    email: 'info@flaggeundwimpel.de',
    customerService: 'Kundenservice',
    faq: 'Häufig Gestellte Fragen',
    shipping: 'Versand & Lieferung',
    returns: 'Rücksendungen',
    payment: 'Zahlungsmethoden',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
    cookies: 'Cookie-Richtlinie',
    followUs: 'Folgen Sie Uns',
    newsletter: 'Newsletter',
    newsletterText: 'Bleiben Sie über unsere neuesten Produkte und Angebote informiert',
    subscribe: 'Abonnieren',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    copyright: '© 2026 Vlag en Wimpel B.V. Alle Rechte vorbehalten.',
  },
  fr: {
    about: 'À Propos',
    aboutText: 'Vlag en Wimpel B.V. est votre spécialiste international de drapeaux et fanions de haute qualité pour les entreprises et les particuliers.',
    contact: 'Contact',
    address: 'Rue Principale 123, 1234 AB Amsterdam',
    phone: '+31 (0)20 123 4567',
    email: 'info@drapeauxetfanions.fr',
    customerService: 'Service Client',
    faq: 'FAQ',
    shipping: 'Livraison',
    returns: 'Retours',
    payment: 'Méthodes de Paiement',
    legal: 'Légal',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions Générales',
    cookies: 'Politique de Cookies',
    followUs: 'Suivez-Nous',
    newsletter: 'Newsletter',
    newsletterText: 'Restez informé de nos derniers produits et offres',
    subscribe: 'S\'abonner',
    emailPlaceholder: 'Votre adresse e-mail',
    copyright: '© 2026 Vlag en Wimpel B.V. Tous droits réservés.',
  },
};

export function Footer({ language, onPrivacyClick, onTermsClick, onCookiesClick, onLogoClick, onFaqClick, onShippingClick, onReturnsClick, onPaymentClick }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-white text-foreground border-t-2 border-border">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* About Section */}
          <div>
            <button
              onClick={onLogoClick}
              className="inline-block mb-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.jpg" 
                alt="Vlag en Wimpel" 
                className="h-12 w-auto object-contain"
              />
            </button>
            <p className="text-xs sm:text-sm text-foreground mb-3">
              {t.aboutText}
            </p>
            <div className="flex gap-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors cursor-pointer"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-[#DD2A7B] transition-colors cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-foreground font-semibold mb-3 text-sm sm:text-base">{t.customerService}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={onFaqClick} className="hover:text-primary hover:underline transition-colors text-left w-full">{t.faq}</button>
              </li>
              <li>
                <button onClick={onShippingClick} className="hover:text-primary hover:underline transition-colors text-left w-full">{t.shipping}</button>
              </li>
              <li>
                <button onClick={onReturnsClick} className="hover:text-primary hover:underline transition-colors text-left w-full">{t.returns}</button>
              </li>
              <li>
                <button onClick={onPaymentClick} className="hover:text-primary hover:underline transition-colors text-left w-full">{t.payment}</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-3 text-sm sm:text-base">{t.contact}</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <a href={`tel:${t.phone}`} className="hover:text-primary hover:underline transition-colors break-all">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${t.email}`} className="hover:text-primary hover:underline transition-colors break-all">
                  {t.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-semibold mb-3 text-sm sm:text-base">{t.newsletter}</h3>
            <p className="text-xs sm:text-sm text-foreground mb-3">
              {t.newsletterText}
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="px-3 py-1.5 sm:py-2 bg-white border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="bg-primary text-white px-3 py-1.5 sm:py-2 rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium"
              >
                {t.subscribe}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-border">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-foreground text-center md:text-left text-[10px] sm:text-xs">{t.copyright}</p>
            <div className="flex flex-wrap gap-3 sm:gap-6 justify-center">
              <button 
                onClick={onPrivacyClick}
                className="text-foreground hover:text-primary hover:underline transition-colors text-[10px] sm:text-xs"
              >
                {t.privacy}
              </button>
              <button 
                onClick={onTermsClick}
                className="text-foreground hover:text-primary hover:underline transition-colors text-[10px] sm:text-xs"
              >
                {t.terms}
              </button>
              <button 
                onClick={onCookiesClick}
                className="text-foreground hover:text-primary hover:underline transition-colors text-[10px] sm:text-xs"
              >
                {t.cookies}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}