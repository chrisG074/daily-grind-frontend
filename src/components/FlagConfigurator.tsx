import { ArrowLeft, Upload, Info } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslations } from '../context/TranslationsContext';

type Language = string;
type Currency = string;

interface FlagConfiguratorProps {
  product: any;
  language: Language;
  currency: Currency;
  onBack: () => void;
  onAddToCart: () => void;
}

const sizes = [
  { value: '100x150', label: '100 x 150 cm', price: 0 },
  { value: '150x225', label: '150 x 225 cm', price: 9.95 },
  { value: '200x300', label: '200 x 300 cm', price: 19.95 }
];

const materials = [
  { value: 'gloss', label: 'Gloss Poly', price: 0 },
  { value: 'nautical', label: 'Nautical Poly', price: 4.95 },
  { value: 'premium', label: 'Premium Poly', price: 9.95 }
];

const attachments = [
  { value: 'hooks', label: 'Hooks', price: 0 },
  { value: 'cord', label: 'Cord', price: 2.5 },
  { value: 'eyelets', label: 'Eyelets', price: 4.95 },
  { value: 'tunnel', label: 'Tunnel', price: 3.95 }
];

const currencySymbols: Record<string, string> = {
  EUR: '€',
  GBP: '£',
  USD: '$'
};

const currencyRates: Record<string, number> = {
  EUR: 1,
  GBP: 0.85,
  USD: 1.1
};

export function FlagConfigurator({ product, language, currency, onBack, onAddToCart }: FlagConfiguratorProps) {
  const [size, setSize] = useState('100x150');
  const [material, setMaterial] = useState('gloss');
  const [attachment, setAttachment] = useState('hooks');
  const [quantity, setQuantity] = useState(1);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const t = useTranslations('flagConfigurator')[language] as any;

  const calculateTotal = () => {
    const sizePrice = sizes.find(s => s.value === size)?.price || 0;
    const materialPrice = materials.find(m => m.value === material)?.price || 0;
    const attachmentPrice = attachments.find(a => a.value === attachment)?.price || 0;
    const logoPrice = logoFile ? 15 : 0;
    
    const baseTotal = (product.price + sizePrice + materialPrice + attachmentPrice + logoPrice) * quantity;
    const converted = baseTotal * currencyRates[currency];
    return `${currencySymbols[currency]}${converted.toFixed(2)}`;
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-black hover:underline mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        [{t.backToProducts}]
      </button>

      <div className="bg-white rounded-lg border-2 border-black overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden mb-4 border-2 border-black flex items-center justify-center">
              <span className="text-lg font-bold text-black">[PRODUCT IMAGE]</span>
            </div>
            {logoFile && (
              <div className="bg-white border-2 border-black rounded-lg p-4 flex items-center gap-3">
                <Upload className="w-5 h-5 text-black" />
                <div>
                  <p className="text-sm font-medium text-black">[Logo uploaded]</p>
                  <p className="text-xs text-black">[{logoFile.name}]</p>
                </div>
              </div>
            )}
          </div>

          {/* Configuration Form */}
          <div>
            <h1 className="text-2xl font-bold text-black mb-2">[{product.name}]</h1>
            <p className="text-lg text-black font-semibold mb-6">
              [{t.configure}]
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-3">[{t.size}]</label>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map(s => (
                  <button
                    key={s.value}
                    onClick={() => setSize(s.value)}
                    className={`p-3 border-2 rounded-lg text-sm transition-colors ${
                      size === s.value
                        ? 'border-black bg-black text-white'
                        : 'border-black hover:bg-white'
                    }`}
                  >
                    [{s.label}]
                    {s.price > 0 && <div className="text-xs mt-1">[+{currencySymbols[currency]}{(s.price * currencyRates[currency]).toFixed(2)}]</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-3">[{t.material}]</label>
              <div className="space-y-2">
                {materials.map(m => (
                  <label
                    key={m.value}
                    className={`flex items-center justify-between p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                      material === m.value
                        ? 'border-black bg-black text-white'
                        : 'border-black hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="material"
                        value={m.value}
                        checked={material === m.value}
                        onChange={(e) => setMaterial(e.target.value)}
                        className="w-4 h-4 text-black"
                      />
                      <span className="text-sm">[{m.label}]</span>
                    </div>
                    {m.price > 0 && <span className="text-sm font-medium">[+{currencySymbols[currency]}{(m.price * currencyRates[currency]).toFixed(2)}]</span>}
                  </label>
                ))}
              </div>
              <div className="mt-2 flex items-start gap-2 text-xs text-black bg-white p-3 rounded border-2 border-black">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>[{t.materialInfo}]</p>
              </div>
            </div>

            {/* Attachment Selection */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-3">[{t.attachment}]</label>
              <div className="grid grid-cols-2 gap-3">
                {attachments.map(a => (
                  <button
                    key={a.value}
                    onClick={() => setAttachment(a.value)}
                    className={`p-3 border-2 rounded-lg text-sm transition-colors ${
                      attachment === a.value
                        ? 'border-black bg-black text-white'
                        : 'border-black hover:bg-white'
                    }`}
                  >
                    [{a.label}]
                    {a.price > 0 && <div className="text-xs mt-1">[+{currencySymbols[currency]}{(a.price * currencyRates[currency]).toFixed(2)}]</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Upload */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-3">[{t.customLogo}]</label>
              <div className="border-2 border-dashed border-black rounded-lg p-6 text-center hover:bg-white transition-colors">
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <label htmlFor="logo-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-black mx-auto mb-2" />
                  <p className="text-sm text-black">[{t.uploadLogo}]</p>
                  <p className="text-xs text-black mt-1">[+{currencySymbols[currency]}{(15 * currencyRates[currency]).toFixed(2)}]</p>
                </label>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-semibold text-black mb-3">[{t.quantity}]</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-24 px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Total & Add to Cart */}
            <div className="border-t-2 border-black pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-black">[{t.totalPrice}]</span>
                <span className="text-2xl font-bold text-black">[{calculateTotal()}]</span>
              </div>
              <button
                onClick={onAddToCart}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-black/90 transition-colors"
              >
                [{t.addToCart}]
              </button>
            </div>
          </div>
        </div>

        {/* Flag Instructions */}
        <div className="border-t-2 border-black bg-white p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-black mb-1">[{t.flagInstructions}]</h3>
              <p className="text-sm text-black">[{t.instructionsText}]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}