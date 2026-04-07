type Language = string;

interface PrivacyPolicyProps {
  language: Language;
}

export function PrivacyPolicy({ language }: PrivacyPolicyProps) {
  const t = useTranslations('privacyPolicy')[language] as any;

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
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.dataCollection}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.dataCollectionText}]</p>
          
          <h3 className="text-lg font-semibold text-black mb-2">[{t.personalData}]</h3>
          <p className="text-black leading-relaxed mb-4">[{t.personalDataText}]</p>
          
          <h3 className="text-lg font-semibold text-black mb-2">[{t.usageData}]</h3>
          <p className="text-black leading-relaxed mb-4">[{t.usageDataText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.dataUse}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.dataUseText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.dataProtection}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.dataProtectionText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.yourRights}]</h2>
          <p className="text-black leading-relaxed mb-4">[{t.yourRightsText}]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-black pb-2">[{t.contact}]</h2>
          <p className="text-black leading-relaxed">[{t.contactText}]</p>
        </section>
      </div>
    </div>
  );
}
