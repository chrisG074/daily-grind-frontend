type Language = 'nl' | 'en' | 'de' | 'fr';

interface PrivacyPolicyProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Privacy Beleid',
    lastUpdated: 'Laatst bijgewerkt: 10 maart 2026',
    introduction: 'Introductie',
    introText: 'Vlag en Wimpel B.V. ("wij", "ons", "onze") hecht grote waarde aan uw privacy. Dit Privacy Beleid beschrijft hoe wij uw persoonlijke gegevens verzamelen, gebruiken, opslaan en beschermen wanneer u onze website bezoekt of gebruik maakt van onze diensten.',
    dataCollection: 'Gegevensverzameling',
    dataCollectionText: 'Wij verzamelen verschillende soorten informatie voor verschillende doeleinden om onze dienstverlening aan u te verbeteren.',
    personalData: 'Persoonlijke Gegevens',
    personalDataText: 'Bij het gebruik van onze dienst kunnen wij u vragen om ons bepaalde persoonlijk identificeerbare informatie te verstrekken die kan worden gebruikt om contact met u op te nemen of u te identificeren. Dit kan omvatten, maar is niet beperkt tot: E-mailadres, Voor- en achternaam, Telefoonnummer, Adres, Postcode, Stad',
    usageData: 'Gebruiksgegevens',
    usageDataText: 'Wij kunnen ook informatie verzamelen over hoe de dienst wordt benaderd en gebruikt. Deze gebruiksgegevens kunnen informatie bevatten zoals het IP-adres van uw computer, browsertype, browserversie, de pagina\'s van onze dienst die u bezoekt, de tijd en datum van uw bezoek, de tijd die op die pagina\'s wordt doorgebracht, en andere diagnostische gegevens.',
    dataUse: 'Gebruik van Gegevens',
    dataUseText: 'Vlag en Wimpel B.V. gebruikt de verzamelde gegevens voor verschillende doeleinden: Om onze dienst te leveren en te onderhouden, Om u wijzigingen in onze dienst te melden, Om u in staat te stellen deel te nemen aan interactieve functies van onze dienst, Om klantenondersteuning te bieden, Om analyse- of waardevolle informatie te verzamelen zodat we onze dienst kunnen verbeteren, Om het gebruik van de dienst te controleren, Om technische problemen te detecteren, op te lossen en te voorkomen',
    dataProtection: 'Beveiliging van Gegevens',
    dataProtectionText: 'De beveiliging van uw gegevens is belangrijk voor ons, maar houd er rekening mee dat geen enkele methode van verzending via internet of methode van elektronische opslag 100% veilig is. Hoewel we ernaar streven commercieel acceptabele middelen te gebruiken om uw persoonlijke gegevens te beschermen, kunnen we de absolute veiligheid ervan niet garanderen.',
    yourRights: 'Uw Rechten',
    yourRightsText: 'U heeft het recht om toegang te krijgen tot uw persoonlijke gegevens, deze te corrigeren, bij te werken of te verzoeken om verwijdering. U kunt ook bezwaar maken tegen de verwerking van uw persoonlijke gegevens, vragen om beperking van de verwerking van uw persoonlijke gegevens of verzoeken om overdraagbaarheid van uw persoonlijke gegevens.',
    contact: 'Contact',
    contactText: 'Als u vragen heeft over dit Privacy Beleid, kunt u contact met ons opnemen: Per e-mail: privacy@vlagenwimpel.nl, Per telefoon: +31 (0)20 123 4567, Per post: Hoofdstraat 123, 1234 AB Amsterdam, Nederland',
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: March 10, 2026',
    introduction: 'Introduction',
    introText: 'Vlag en Wimpel B.V. ("we", "us", "our") values your privacy. This Privacy Policy describes how we collect, use, store and protect your personal data when you visit our website or use our services.',
    dataCollection: 'Data Collection',
    dataCollectionText: 'We collect different types of information for various purposes to improve our service to you.',
    personalData: 'Personal Data',
    personalDataText: 'While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to: Email address, First and last name, Phone number, Address, Postal code, City',
    usageData: 'Usage Data',
    usageDataText: 'We may also collect information about how the service is accessed and used. This usage data may include information such as your computer\'s Internet Protocol address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.',
    dataUse: 'Use of Data',
    dataUseText: 'Vlag en Wimpel B.V. uses the collected data for various purposes: To provide and maintain our service, To notify you about changes to our service, To allow you to participate in interactive features of our service, To provide customer support, To gather analysis or valuable information so that we can improve our service, To monitor the usage of the service, To detect, prevent and address technical issues',
    dataProtection: 'Security of Data',
    dataProtectionText: 'The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.',
    yourRights: 'Your Rights',
    yourRightsText: 'You have the right to access your personal data, correct it, update it or request its deletion. You may also object to the processing of your personal data, request restriction of processing of your personal data or request portability of your personal data.',
    contact: 'Contact',
    contactText: 'If you have any questions about this Privacy Policy, you can contact us: By email: privacy@flagandpennant.com, By phone: +31 (0)20 123 4567, By mail: Main Street 123, 1234 AB Amsterdam, Netherlands',
  },
  de: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Zuletzt aktualisiert: 10. März 2026',
    introduction: 'Einführung',
    introText: 'Vlag en Wimpel B.V. ("wir", "uns", "unser") legt großen Wert auf Ihre Privatsphäre. Diese Datenschutzerklärung beschreibt, wie wir Ihre persönlichen Daten erfassen, verwenden, speichern und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.',
    dataCollection: 'Datenerfassung',
    dataCollectionText: 'Wir erfassen verschiedene Arten von Informationen für verschiedene Zwecke, um unseren Service für Sie zu verbessern.',
    personalData: 'Persönliche Daten',
    personalDataText: 'Bei der Nutzung unseres Dienstes können wir Sie bitten, uns bestimmte persönlich identifizierbare Informationen zur Verfügung zu stellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren. Dies kann umfassen, ist aber nicht beschränkt auf: E-Mail-Adresse, Vor- und Nachname, Telefonnummer, Adresse, Postleitzahl, Stadt',
    usageData: 'Nutzungsdaten',
    usageDataText: 'Wir können auch Informationen darüber sammeln, wie auf den Dienst zugegriffen und wie er genutzt wird. Diese Nutzungsdaten können Informationen wie die Internetprotokoll-Adresse Ihres Computers, Browsertyp, Browserversion, die von Ihnen besuchten Seiten unseres Dienstes, die Uhrzeit und das Datum Ihres Besuchs, die auf diesen Seiten verbrachte Zeit und andere Diagnosedaten enthalten.',
    dataUse: 'Verwendung von Daten',
    dataUseText: 'Vlag en Wimpel B.V. verwendet die gesammelten Daten für verschiedene Zwecke: Um unseren Service bereitzustellen und zu warten, Um Sie über Änderungen an unserem Service zu informieren, Um Ihnen die Teilnahme an interaktiven Funktionen unseres Services zu ermöglichen, Um Kundensupport bereitzustellen, Um Analysen oder wertvolle Informationen zu sammeln, damit wir unseren Service verbessern können, Um die Nutzung des Services zu überwachen, Um technische Probleme zu erkennen, zu verhindern und zu beheben',
    dataProtection: 'Datensicherheit',
    dataProtectionText: 'Die Sicherheit Ihrer Daten ist uns wichtig, aber denken Sie daran, dass keine Übertragungsmethode über das Internet oder elektronische Speichermethode 100% sicher ist. Obwohl wir bestrebt sind, kommerziell akzeptable Mittel zum Schutz Ihrer persönlichen Daten zu verwenden, können wir deren absolute Sicherheit nicht garantieren.',
    yourRights: 'Ihre Rechte',
    yourRightsText: 'Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, diese zu korrigieren, zu aktualisieren oder deren Löschung zu verlangen. Sie können auch der Verarbeitung Ihrer persönlichen Daten widersprechen, die Einschränkung der Verarbeitung Ihrer persönlichen Daten verlangen oder die Übertragbarkeit Ihrer persönlichen Daten anfordern.',
    contact: 'Kontakt',
    contactText: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns kontaktieren: Per E-Mail: privacy@flaggeundwimpel.de, Per Telefon: +31 (0)20 123 4567, Per Post: Hauptstraße 123, 1234 AB Amsterdam, Niederlande',
  },
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 10 mars 2026',
    introduction: 'Introduction',
    introText: 'Vlag en Wimpel B.V. ("nous", "notre") accorde une grande importance à votre vie privée. Cette Politique de Confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous visitez notre site web ou utilisez nos services.',
    dataCollection: 'Collecte de Données',
    dataCollectionText: 'Nous collectons différents types d\'informations à diverses fins pour améliorer notre service.',
    personalData: 'Données Personnelles',
    personalDataText: 'Lors de l\'utilisation de notre service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous identifier. Cela peut inclure, mais sans s\'y limiter : Adresse e-mail, Prénom et nom de famille, Numéro de téléphone, Adresse, Code postal, Ville',
    usageData: 'Données d\'Utilisation',
    usageDataText: 'Nous pouvons également collecter des informations sur la façon dont le service est accédé et utilisé. Ces données d\'utilisation peuvent inclure des informations telles que l\'adresse de protocole Internet de votre ordinateur, le type de navigateur, la version du navigateur, les pages de notre service que vous visitez, l\'heure et la date de votre visite, le temps passé sur ces pages et d\'autres données de diagnostic.',
    dataUse: 'Utilisation des Données',
    dataUseText: 'Vlag en Wimpel B.V. utilise les données collectées à diverses fins : Pour fournir et maintenir notre service, Pour vous informer des modifications apportées à notre service, Pour vous permettre de participer aux fonctionnalités interactives de notre service, Pour fournir un support client, Pour recueillir des analyses ou des informations précieuses afin que nous puissions améliorer notre service, Pour surveiller l\'utilisation du service, Pour détecter, prévenir et résoudre les problèmes techniques',
    dataProtection: 'Sécurité des Données',
    dataProtectionText: 'La sécurité de vos données est importante pour nous, mais rappelez-vous qu\'aucune méthode de transmission sur Internet ou méthode de stockage électronique n\'est sûre à 100%. Bien que nous nous efforcions d\'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.',
    yourRights: 'Vos Droits',
    yourRightsText: 'Vous avez le droit d\'accéder à vos données personnelles, de les corriger, de les mettre à jour ou de demander leur suppression. Vous pouvez également vous opposer au traitement de vos données personnelles, demander la restriction du traitement de vos données personnelles ou demander la portabilité de vos données personnelles.',
    contact: 'Contact',
    contactText: 'Si vous avez des questions concernant cette Politique de Confidentialité, vous pouvez nous contacter : Par e-mail : privacy@drapeauxetfanions.fr, Par téléphone : +31 (0)20 123 4567, Par courrier : Rue Principale 123, 1234 AB Amsterdam, Pays-Bas',
  },
};

export function PrivacyPolicy({ language }: PrivacyPolicyProps) {
  const t = translations[language];

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
