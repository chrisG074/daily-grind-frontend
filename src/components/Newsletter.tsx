import { Mail } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '../context/TranslationsContext';

type Language = string;

interface NewsletterProps {
  language: Language;
}

export function Newsletter({ language }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('newsletter')[language] as any;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0099CC] to-[#0077AA] py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white flex-1">
            <h3 className="text-3xl font-bold mb-2">{t.title}</h3>
            <p className="text-blue-50">{t.subtitle}</p>
          </div>
          <div className="flex-1 max-w-md w-full">
            {submitted ? (
              <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg text-center font-medium">
                {t.success}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.placeholder}
                    className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#E31E24] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C11A20] transition-colors whitespace-nowrap"
                >
                  {t.button}
                </button>
              </form>
            )}
            <p className="text-xs text-blue-100 mt-2">{t.privacy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
