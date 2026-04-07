import { X, Trash2, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;
type Currency = string;

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

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currency: Currency;
  onCheckout: () => void;
  cartItems?: CartItem[];
  onUpdateQuantity?: (id: number, delta: number) => void;
  onRemoveItem?: (id: number) => void;
}

export function ShoppingCart({ isOpen, onClose, language, currency, onCheckout, cartItems, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const t = useTranslationForLanguage('shoppingCart', language) as any;

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    const converted = price * currencyRates[currency];
    return `${currencySymbols[currency]}${converted.toFixed(2)}`;
  };

  const updateQuantity = (id: number, delta: number) => {
    if (onUpdateQuantity) {
      onUpdateQuantity(id, delta);
    }
  };

  const removeItem = (id: number) => {
    if (onRemoveItem) {
      onRemoveItem(id);
    }
  };

  const subtotal = cartItems ? cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
  const shipping = subtotal > 75 ? 0 : 8.95;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">{t.cart}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems && cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p>{t.empty}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems && cartItems.map(item => (
                <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="w-20 h-20 bg-white rounded overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${Math.random()}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{item.size}</p>
                    <p className="text-xs text-gray-600 mb-1">{item.material}</p>
                    <p className="text-xs text-gray-600 mb-2">{item.attachment}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-blue-700">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems && cartItems.length > 0 && (
          <div className="border-t p-6 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t.subtotal}</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t.shipping}</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">{t.freeShipping}</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>{t.total}</span>
                <span className="text-blue-700">{formatPrice(total)}</span>
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-[#E31E24] text-white py-3 rounded-lg font-semibold hover:bg-[#E31E24]/90 transition-colors mb-3"
            >
              {t.checkout}
            </button>
            <button
              onClick={onClose}
              className="w-full text-[#0099CC] py-2 text-sm font-medium hover:text-[#0099CC]/80"
            >
              {t.continueShopping}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}