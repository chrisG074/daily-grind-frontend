import { useTranslations } from '../context/TranslationsContext';

type Language = string;

interface TermsConditionsProps {
  language: Language;
}

export function TermsConditions({ language }: TermsConditionsProps) {
  const t = useTranslations('termsConditions')[language] as any;

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
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.definitions}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.definitionsText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.applicability}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.applicabilityText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.offers}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.offersText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.prices}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.pricesText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.payment}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.paymentText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.delivery}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.deliveryText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.complaints}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.complaintsText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.liability}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.liabilityText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.intellectualProperty}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.intellectualPropertyText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.privacy}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.privacyText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.applicableLaw}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.applicableLawText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.contact}]</h2>
          <p className="text-black leading-relaxed">[{t.contactText}]</p>
        </section>
      </div>
    </div>
  );
}
