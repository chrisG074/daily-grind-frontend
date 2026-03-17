import { Shield, Truck, CreditCard, Award, Phone, Package } from 'lucide-react';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface TrustBadgesProps {
  language: Language;
}

const translations = {
  nl: {
    securePayment: 'Veilig betalen',
    freeShipping: 'Gratis verzending vanaf €75',
    quality: 'Premium kwaliteit',
    support: '24/7 Klantenservice',
    fastDelivery: 'Snelle levering',
    returns: '30 dagen retourrecht',
  },
  en: {
    securePayment: 'Secure payment',
    freeShipping: 'Free shipping from €75',
    quality: 'Premium quality',
    support: '24/7 Customer support',
    fastDelivery: 'Fast delivery',
    returns: '30 days return policy',
  },
  de: {
    securePayment: 'Sichere Zahlung',
    freeShipping: 'Kostenloser Versand ab €75',
    quality: 'Premium Qualität',
    support: '24/7 Kundendienst',
    fastDelivery: 'Schnelle Lieferung',
    returns: '30 Tage Rückgaberecht',
  },
  fr: {
    securePayment: 'Paiement sécurisé',
    freeShipping: 'Livraison gratuite à partir de €75',
    quality: 'Qualité premium',
    support: 'Support client 24/7',
    fastDelivery: 'Livraison rapide',
    returns: '30 jours de retour',
  },
};

export function TrustBadges({ language }: TrustBadgesProps) {
  const t = translations[language];

  return (
    <div className="bg-white border-2 border-black rounded-lg p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-2 border-2 border-black">
            <CreditCard className="w-6 h-6 text-black" />
          </div>
          <p className="text-xs font-medium text-black">[{t.securePayment}]</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-2 border-2 border-black">
            <Truck className="w-6 h-6 text-black" />
          </div>
          <p className="text-xs font-medium text-black">[{t.freeShipping}]</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-2 border-2 border-black">
            <Award className="w-6 h-6 text-black" />
          </div>
          <p className="text-xs font-medium text-black">[{t.quality}]</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-2 border-2 border-black">
            <Phone className="w-6 h-6 text-black" />
          </div>
          <p className="text-xs font-medium text-black">[{t.support}]</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-2 border-2 border-black">
            <Package className="w-6 h-6 text-black" />
          </div>
          <p className="text-xs font-medium text-black">[{t.fastDelivery}]</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-2 border-2 border-black">
            <Shield className="w-6 h-6 text-black" />
          </div>
          <p className="text-xs font-medium text-black">[{t.returns}]</p>
        </div>
      </div>
    </div>
  );
}