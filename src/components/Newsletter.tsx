import { Mail } from 'lucide-react';
import { useState } from 'react';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface NewsletterProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Blijf op de hoogte',
    subtitle: 'Ontvang onze nieuwsbrief met exclusieve aanbiedingen en nieuws',
    placeholder: 'Uw e-mailadres',
    button: 'Aanmelden',
    success: 'Bedankt voor uw aanmelding!',
    privacy: 'Wij respecteren uw privacy. U kunt zich op elk moment afmelden.',
  },
  en: {
    title: 'Stay updated',
    subtitle: 'Receive our newsletter with exclusive offers and news',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: 'Thank you for subscribing!',
    privacy: 'We respect your privacy. You can unsubscribe at any time.',
  },
  de: {
    title: 'Bleiben Sie informiert',
    subtitle: 'Erhalten Sie unseren Newsletter mit exklusiven Angeboten und Neuigkeiten',
    placeholder: 'Ihre E-Mail-Adresse',
    button: 'Anmelden',
    success: 'Vielen Dank für Ihre Anmeldung!',
    privacy: 'Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.',
  },
  fr: {
    title: 'Restez informé',
    subtitle: 'Recevez notre newsletter avec des offres exclusives et des actualités',
    placeholder: 'Votre adresse e-mail',
    button: 'S\'inscrire',
    success: 'Merci de votre inscription!',
    privacy: 'Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.',
  },
};

export function Newsletter({ language }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];

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
