import { useTranslationForLanguage } from '../context/TranslationsContext';

type Language = string;

interface CookiePolicyProps {
  language: Language;
}

export function CookiePolicy({ language }: CookiePolicyProps) {
  const t = useTranslationForLanguage('cookiePolicy', language) as any;

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-12">
      <div className="bg-white border-2 border-black rounded-lg p-8">
        <h1 className="text-3xl font-bold text-black mb-2">[{t.title}]</h1>
        <p className="text-sm text-black mb-8">[{t.lastUpdated}]</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.introduction}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.introText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.whatAreCookies}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.whatAreCookiesText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.howWeUseCookies}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.howWeUseCookiesText}]</p>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-black mb-2 border-l-4 border-black pl-3">[{t.essentialCookies}]</h3>
          <p className="text-black leading-relaxed mb-4 ml-4">[{t.essentialCookiesText}]</p>
          
          <h3 className="text-lg font-semibold text-black mb-2 border-l-4 border-black pl-3">[{t.functionalCookies}]</h3>
          <p className="text-black leading-relaxed mb-4 ml-4">[{t.functionalCookiesText}]</p>
          
          <h3 className="text-lg font-semibold text-black mb-2 border-l-4 border-black pl-3">[{t.analyticsCookies}]</h3>
          <p className="text-black leading-relaxed mb-4 ml-4">[{t.analyticsCookiesText}]</p>
          
          <h3 className="text-lg font-semibold text-black mb-2 border-l-4 border-black pl-3">[{t.marketingCookies}]</h3>
          <p className="text-black leading-relaxed mb-4 ml-4">[{t.marketingCookiesText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.thirdPartyCookies}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.thirdPartyCookiesText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.manageCookies}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.manageCookiesText}]</p>
          
          <h3 className="text-lg font-semibold text-black mb-2">[{t.browserSettings}]</h3>
          <p className="text-black leading-relaxed mb-4">[{t.browserSettingsText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.cookieConsent}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.cookieConsentText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.changes}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.changesText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.contact}]</h2>
          <p className="text-black leading-relaxed">[{t.contactText}]</p>
        </section>
      </div>
    </div>
  );
}
