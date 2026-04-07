import { Package, Truck, Clock, Globe } from 'lucide-react';
import { useTranslations } from '../context/TranslationsContext';

type Language = string;

interface ShippingProps {
  language: Language;
}

export function Shipping({ language }: ShippingProps) {
  const t = useTranslations('shipping')[language] as any;

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