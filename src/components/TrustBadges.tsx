import { Shield, Truck, CreditCard, Award, Phone, Package } from 'lucide-react';
import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;

interface TrustBadgesProps {
  language: Language;
}

export function TrustBadges({ language }: TrustBadgesProps) {
  const t = useTranslationForLanguage('trustBadges', language) as any;

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