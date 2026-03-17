import { Package, Truck, Clock, Globe } from 'lucide-react';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface ShippingProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Verzending & Levering',
    subtitle: 'Alles wat u moet weten over onze verzend- en leveringsmogelijkheden',
    
    shippingCosts: {
      title: 'Verzendkosten',
      free: 'Gratis verzending vanaf €75',
      standard: 'Standaard verzending: €8,95',
      express: 'Express verzending: €14,95',
      international: 'Internationale verzending: Vanaf €19,95',
      note: 'Verzendkosten worden berekend tijdens het afrekenen op basis van uw locatie en het gewicht van uw bestelling.',
    },
    
    deliveryTimes: {
      title: 'Levertijden',
      nl: {
        title: 'Nederland',
        standard: 'Standaard vlaggen: 2-3 werkdagen',
        custom: 'Custom vlaggen met logo: 5-7 werkdagen',
        express: 'Express levering: 1-2 werkdagen',
      },
      eu: {
        title: 'EU Landen',
        standard: 'Standaard vlaggen: 3-5 werkdagen',
        custom: 'Custom vlaggen met logo: 7-10 werkdagen',
        express: 'Express levering: 2-3 werkdagen',
      },
      international: {
        title: 'Internationaal (buiten EU)',
        standard: 'Standaard vlaggen: 5-10 werkdagen',
        custom: 'Custom vlaggen met logo: 10-14 werkdagen',
        note: 'Let op: Douaneafhandeling kan extra tijd in beslag nemen',
      },
    },
    
    shippingMethods: {
      title: 'Verzendmethoden',
      standard: {
        title: 'Standaard Verzending',
        description: 'Betrouwbare verzending via PostNL of DHL. Track & Trace inbegrepen.',
      },
      express: {
        title: 'Express Verzending',
        description: 'Versnelde levering voor dringende bestellingen. Voor 12:00 besteld, morgen in huis (werkdagen).',
      },
      international: {
        title: 'Internationale Verzending',
        description: 'Wereldwijde verzending via DHL Express. Douanedocumenten inbegrepen.',
      },
    },
    
    tracking: {
      title: 'Track & Trace',
      description: 'Na verzending ontvangt u automatisch een Track & Trace code per e-mail. Hiermee kunt u uw bestelling realtime volgen.',
    },
    
    largeOrders: {
      title: 'Grote Bestellingen',
      description: 'Voor bestellingen van meer dan 50 vlaggen of zeer grote formaten nemen wij contact met u op voor een op maat gemaakte verzendoplossing. Neem voor vragen contact op met onze klantenservice.',
    },
  },
  en: {
    title: 'Shipping & Delivery',
    subtitle: 'Everything you need to know about our shipping and delivery options',
    
    shippingCosts: {
      title: 'Shipping Costs',
      free: 'Free shipping from €75',
      standard: 'Standard shipping: €8.95',
      express: 'Express shipping: €14.95',
      international: 'International shipping: From €19.95',
      note: 'Shipping costs are calculated during checkout based on your location and the weight of your order.',
    },
    
    deliveryTimes: {
      title: 'Delivery Times',
      nl: {
        title: 'Netherlands',
        standard: 'Standard flags: 2-3 working days',
        custom: 'Custom flags with logo: 5-7 working days',
        express: 'Express delivery: 1-2 working days',
      },
      eu: {
        title: 'EU Countries',
        standard: 'Standard flags: 3-5 working days',
        custom: 'Custom flags with logo: 7-10 working days',
        express: 'Express delivery: 2-3 working days',
      },
      international: {
        title: 'International (outside EU)',
        standard: 'Standard flags: 5-10 working days',
        custom: 'Custom flags with logo: 10-14 working days',
        note: 'Note: Customs clearance may take additional time',
      },
    },
    
    shippingMethods: {
      title: 'Shipping Methods',
      standard: {
        title: 'Standard Shipping',
        description: 'Reliable shipping via PostNL or DHL. Track & Trace included.',
      },
      express: {
        title: 'Express Shipping',
        description: 'Expedited delivery for urgent orders. Ordered before 12:00, delivered tomorrow (working days).',
      },
      international: {
        title: 'International Shipping',
        description: 'Worldwide shipping via DHL Express. Customs documents included.',
      },
    },
    
    tracking: {
      title: 'Track & Trace',
      description: 'After shipping, you will automatically receive a Track & Trace code via email. This allows you to track your order in real-time.',
    },
    
    largeOrders: {
      title: 'Large Orders',
      description: 'For orders of more than 50 flags or very large formats, we will contact you for a customized shipping solution. Please contact our customer service for questions.',
    },
  },
  de: {
    title: 'Versand & Lieferung',
    subtitle: 'Alles, was Sie über unsere Versand- und Lieferoptionen wissen müssen',
    
    shippingCosts: {
      title: 'Versandkosten',
      free: 'Kostenloser Versand ab €75',
      standard: 'Standardversand: €8,95',
      express: 'Expressversand: €14,95',
      international: 'Internationaler Versand: Ab €19,95',
      note: 'Die Versandkosten werden beim Checkout basierend auf Ihrem Standort und dem Gewicht Ihrer Bestellung berechnet.',
    },
    
    deliveryTimes: {
      title: 'Lieferzeiten',
      nl: {
        title: 'Niederlande',
        standard: 'Standardflaggen: 2-3 Werktage',
        custom: 'Custom-Flaggen mit Logo: 5-7 Werktage',
        express: 'Express-Lieferung: 1-2 Werktage',
      },
      eu: {
        title: 'EU-Länder',
        standard: 'Standardflaggen: 3-5 Werktage',
        custom: 'Custom-Flaggen mit Logo: 7-10 Werktage',
        express: 'Express-Lieferung: 2-3 Werktage',
      },
      international: {
        title: 'International (außerhalb EU)',
        standard: 'Standardflaggen: 5-10 Werktage',
        custom: 'Custom-Flaggen mit Logo: 10-14 Werktage',
        note: 'Hinweis: Die Zollabfertigung kann zusätzliche Zeit in Anspruch nehmen',
      },
    },
    
    shippingMethods: {
      title: 'Versandmethoden',
      standard: {
        title: 'Standardversand',
        description: 'Zuverlässiger Versand über PostNL oder DHL. Track & Trace inklusive.',
      },
      express: {
        title: 'Expressversand',
        description: 'Beschleunigte Lieferung für dringende Bestellungen. Vor 12:00 Uhr bestellt, morgen geliefert (Werktage).',
      },
      international: {
        title: 'Internationaler Versand',
        description: 'Weltweiter Versand über DHL Express. Zolldokumente inklusive.',
      },
    },
    
    tracking: {
      title: 'Track & Trace',
      description: 'Nach dem Versand erhalten Sie automatisch einen Track & Trace-Code per E-Mail. Damit können Sie Ihre Bestellung in Echtzeit verfolgen.',
    },
    
    largeOrders: {
      title: 'Großbestellungen',
      description: 'Für Bestellungen von mehr als 50 Flaggen oder sehr großen Formaten kontaktieren wir Sie für eine maßgeschneiderte Versandlösung. Bei Fragen wenden Sie sich bitte an unseren Kundenservice.',
    },
  },
  fr: {
    title: 'Livraison',
    subtitle: 'Tout ce que vous devez savoir sur nos options de livraison',
    
    shippingCosts: {
      title: 'Frais de Livraison',
      free: 'Livraison gratuite à partir de €75',
      standard: 'Livraison standard: €8,95',
      express: 'Livraison express: €14,95',
      international: 'Livraison internationale: À partir de €19,95',
      note: 'Les frais de livraison sont calculés lors du paiement en fonction de votre emplacement et du poids de votre commande.',
    },
    
    deliveryTimes: {
      title: 'Délais de Livraison',
      nl: {
        title: 'Pays-Bas',
        standard: 'Drapeaux standard: 2-3 jours ouvrables',
        custom: 'Drapeaux personnalisés avec logo: 5-7 jours ouvrables',
        express: 'Livraison express: 1-2 jours ouvrables',
      },
      eu: {
        title: 'Pays de l\'UE',
        standard: 'Drapeaux standard: 3-5 jours ouvrables',
        custom: 'Drapeaux personnalisés avec logo: 7-10 jours ouvrables',
        express: 'Livraison express: 2-3 jours ouvrables',
      },
      international: {
        title: 'International (hors UE)',
        standard: 'Drapeaux standard: 5-10 jours ouvrables',
        custom: 'Drapeaux personnalisés avec logo: 10-14 jours ouvrables',
        note: 'Remarque: Le dédouanement peut prendre du temps supplémentaire',
      },
    },
    
    shippingMethods: {
      title: 'Méthodes de Livraison',
      standard: {
        title: 'Livraison Standard',
        description: 'Livraison fiable via PostNL ou DHL. Track & Trace inclus.',
      },
      express: {
        title: 'Livraison Express',
        description: 'Livraison accélérée pour les commandes urgentes. Commandé avant 12h00, livré demain (jours ouvrables).',
      },
      international: {
        title: 'Livraison Internationale',
        description: 'Livraison mondiale via DHL Express. Documents douaniers inclus.',
      },
    },
    
    tracking: {
      title: 'Track & Trace',
      description: 'Après l\'expédition, vous recevrez automatiquement un code Track & Trace par e-mail. Cela vous permet de suivre votre commande en temps réel.',
    },
    
    largeOrders: {
      title: 'Commandes Importantes',
      description: 'Pour les commandes de plus de 50 drapeaux ou de très grands formats, nous vous contacterons pour une solution de livraison personnalisée. Veuillez contacter notre service client pour toute question.',
    },
  },
};

export function Shipping({ language }: ShippingProps) {
  const t = translations[language];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      {/* Shipping Costs */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <Package className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.shippingCosts.title}]</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-6">
          <div className="bg-white border-2 border-black rounded-lg p-2.5 sm:p-4">
            <p className="font-semibold text-black text-xs sm:text-sm">✓ [{t.shippingCosts.free}]</p>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-2.5 sm:p-4">
            <p className="text-black text-xs sm:text-sm">[{t.shippingCosts.standard}]</p>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-2.5 sm:p-4">
            <p className="text-black text-xs sm:text-sm">[{t.shippingCosts.express}]</p>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-2.5 sm:p-4">
            <p className="text-black text-xs sm:text-sm">[{t.shippingCosts.international}]</p>
          </div>
        </div>
        <p className="text-[10px] sm:text-xs text-black italic">[{t.shippingCosts.note}]</p>
      </div>

      {/* Delivery Times */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.deliveryTimes.title}]</h2>
        </div>
        <div className="space-y-3 sm:space-y-6">
          <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-4">[{t.deliveryTimes.nl.title}]</h3>
            <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
              <li>• [{t.deliveryTimes.nl.standard}]</li>
              <li>• [{t.deliveryTimes.nl.custom}]</li>
              <li>• [{t.deliveryTimes.nl.express}]</li>
            </ul>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-4">[{t.deliveryTimes.eu.title}]</h3>
            <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
              <li>• [{t.deliveryTimes.eu.standard}]</li>
              <li>• [{t.deliveryTimes.eu.custom}]</li>
              <li>• [{t.deliveryTimes.eu.express}]</li>
            </ul>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-4">[{t.deliveryTimes.international.title}]</h3>
            <ul className="space-y-1 sm:space-y-2 text-black mb-2 sm:mb-4 text-xs sm:text-sm">
              <li>• [{t.deliveryTimes.international.standard}]</li>
              <li>• [{t.deliveryTimes.international.custom}]</li>
            </ul>
            <p className="text-[10px] sm:text-xs text-black italic">[{t.deliveryTimes.international.note}]</p>
          </div>
        </div>
      </div>

      {/* Shipping Methods */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <Truck className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.shippingMethods.title}]</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">[{t.shippingMethods.standard.title}]</h3>
            <p className="text-black text-xs sm:text-sm">[{t.shippingMethods.standard.description}]</p>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">[{t.shippingMethods.express.title}]</h3>
            <p className="text-black text-xs sm:text-sm">[{t.shippingMethods.express.description}]</p>
          </div>
          <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">[{t.shippingMethods.international.title}]</h3>
            <p className="text-black text-xs sm:text-sm">[{t.shippingMethods.international.description}]</p>
          </div>
        </div>
      </div>

      {/* Tracking */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-4">[{t.tracking.title}]</h3>
        <p className="text-black text-xs sm:text-sm">[{t.tracking.description}]</p>
      </div>

      {/* Large Orders */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
        <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-4">[{t.largeOrders.title}]</h3>
        <p className="text-black text-xs sm:text-sm">[{t.largeOrders.description}]</p>
      </div>
    </div>
  );
}