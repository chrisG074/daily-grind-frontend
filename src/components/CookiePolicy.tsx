type Language = 'nl' | 'en' | 'de' | 'fr';

interface CookiePolicyProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Cookie Beleid',
    lastUpdated: 'Laatst bijgewerkt: 10 maart 2026',
    introduction: 'Introductie',
    introText: 'Vlag en Wimpel B.V. ("wij", "ons", "onze") gebruikt cookies en vergelijkbare technologieën om uw bezoek aan onze website te verbeteren. Dit Cookie Beleid legt uit wat cookies zijn, hoe wij ze gebruiken en welke keuzes u heeft.',
    whatAreCookies: 'Wat zijn Cookies?',
    whatAreCookiesText: 'Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst wanneer u een website bezoekt. Cookies worden veel gebruikt om websites efficiënt te laten werken en om informatie te verstrekken aan de eigenaren van de website.',
    howWeUseCookies: 'Hoe wij Cookies gebruiken',
    howWeUseCookiesText: 'Wij gebruiken cookies voor verschillende doeleinden om uw ervaring op onze website te verbeteren en om inzicht te krijgen in hoe onze website wordt gebruikt.',
    essentialCookies: 'Essentiële Cookies',
    essentialCookiesText: 'Deze cookies zijn noodzakelijk voor het functioneren van de website. Ze stellen u in staat om door de website te navigeren en gebruik te maken van onze diensten en functies, zoals toegang tot beveiligde gebieden van de website. Zonder deze cookies kunnen bepaalde diensten niet worden geleverd.',
    functionalCookies: 'Functionele Cookies',
    functionalCookiesText: 'Deze cookies maken het mogelijk dat de website zich bepaalde keuzes herinnert die u maakt (zoals uw gebruikersnaam, taal of de regio waarin u zich bevindt) en bieden verbeterde, meer persoonlijke functies. Ze kunnen ook worden gebruikt om wijzigingen bij te houden die u heeft aangebracht aan tekstgrootte, lettertypen en andere delen van webpagina\'s die u kunt aanpassen.',
    analyticsCookies: 'Analytische Cookies',
    analyticsCookiesText: 'Deze cookies verzamelen informatie over hoe bezoekers onze website gebruiken, bijvoorbeeld welke pagina\'s bezoekers het vaakst bezoeken en of ze foutmeldingen van webpagina\'s krijgen. Deze cookies verzamelen geen informatie die een bezoeker identificeert. Alle informatie die deze cookies verzamelen is geaggregeerd en daarom anoniem.',
    marketingCookies: 'Marketing Cookies',
    marketingCookiesText: 'Deze cookies worden gebruikt om advertenties weer te geven die relevanter zijn voor u en uw interesses. Ze worden ook gebruikt om het aantal keren dat u een advertentie ziet te beperken en om de effectiviteit van reclamecampagnes te meten. Ze onthouden dat u een website heeft bezocht en deze informatie wordt gedeeld met andere organisaties zoals adverteerders.',
    thirdPartyCookies: 'Cookies van Derden',
    thirdPartyCookiesText: 'Wij maken gebruik van verschillende externe diensten zoals Google Analytics om het gebruik van onze website te analyseren. Deze diensten kunnen cookies plaatsen om hun functies uit te voeren. Deze cookies vallen onder het privacybeleid van deze externe diensten.',
    manageCookies: 'Cookies beheren',
    manageCookiesText: 'De meeste browsers accepteren cookies automatisch, maar u kunt doorgaans uw browserinstellingen wijzigen om cookies te weigeren als u dat wenst. Houd er rekening mee dat als u ervoor kiest om cookies te weigeren, mogelijk niet alle functies van onze website naar behoren werken.',
    browserSettings: 'Browserinstellingen',
    browserSettingsText: 'U kunt cookies beheren via uw browserinstellingen. Hier zijn enkele links naar de meest voorkomende browsers: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera. Raadpleeg de Help-functie van uw browser voor meer informatie.',
    cookieConsent: 'Toestemming voor Cookies',
    cookieConsentText: 'Bij uw eerste bezoek aan onze website vragen wij u om toestemming voor het plaatsen van bepaalde cookies. U kunt uw toestemming op elk moment intrekken door uw browserinstellingen te wijzigen of door contact met ons op te nemen.',
    changes: 'Wijzigingen in dit Cookie Beleid',
    changesText: 'Wij kunnen dit Cookie Beleid van tijd tot tijd bijwerken. Eventuele wijzigingen worden op deze pagina gepubliceerd met een bijgewerkte herzieningsdatum bovenaan dit beleid.',
    contact: 'Contact',
    contactText: 'Als u vragen heeft over dit Cookie Beleid, kunt u contact met ons opnemen: Per e-mail: privacy@vlagenwimpel.nl, Per telefoon: +31 (0)20 123 4567, Per post: Hoofdstraat 123, 1234 AB Amsterdam, Nederland',
  },
  en: {
    title: 'Cookie Policy',
    lastUpdated: 'Last updated: March 10, 2026',
    introduction: 'Introduction',
    introText: 'Vlag en Wimpel B.V. ("we", "us", "our") uses cookies and similar technologies to improve your visit to our website. This Cookie Policy explains what cookies are, how we use them, and what choices you have.',
    whatAreCookies: 'What are Cookies?',
    whatAreCookiesText: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work efficiently and to provide information to the website owners.',
    howWeUseCookies: 'How we use Cookies',
    howWeUseCookiesText: 'We use cookies for various purposes to improve your experience on our website and to gain insight into how our website is used.',
    essentialCookies: 'Essential Cookies',
    essentialCookiesText: 'These cookies are necessary for the website to function. They enable you to navigate the website and use our services and features, such as accessing secure areas of the website. Without these cookies, certain services cannot be provided.',
    functionalCookies: 'Functional Cookies',
    functionalCookiesText: 'These cookies enable the website to remember certain choices you make (such as your username, language or the region you are in) and provide enhanced, more personal features. They can also be used to track changes you have made to text size, fonts and other parts of web pages that you can customize.',
    analyticsCookies: 'Analytics Cookies',
    analyticsCookiesText: 'These cookies collect information about how visitors use our website, for example which pages visitors go to most often and if they get error messages from web pages. These cookies do not collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous.',
    marketingCookies: 'Marketing Cookies',
    marketingCookiesText: 'These cookies are used to display advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns. They remember that you have visited a website and this information is shared with other organizations such as advertisers.',
    thirdPartyCookies: 'Third-Party Cookies',
    thirdPartyCookiesText: 'We use various external services such as Google Analytics to analyze the use of our website. These services may place cookies to perform their functions. These cookies fall under the privacy policy of these external services.',
    manageCookies: 'Managing Cookies',
    manageCookiesText: 'Most browsers automatically accept cookies, but you can usually change your browser settings to refuse cookies if you wish. Please note that if you choose to refuse cookies, not all features of our website may work properly.',
    browserSettings: 'Browser Settings',
    browserSettingsText: 'You can manage cookies through your browser settings. Here are some links to the most common browsers: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera. Please refer to your browser\'s Help function for more information.',
    cookieConsent: 'Cookie Consent',
    cookieConsentText: 'On your first visit to our website, we ask for your consent to place certain cookies. You can withdraw your consent at any time by changing your browser settings or by contacting us.',
    changes: 'Changes to this Cookie Policy',
    changesText: 'We may update this Cookie Policy from time to time. Any changes will be published on this page with an updated revision date at the top of this policy.',
    contact: 'Contact',
    contactText: 'If you have any questions about this Cookie Policy, you can contact us: By email: privacy@flagandpennant.com, By phone: +31 (0)20 123 4567, By mail: Main Street 123, 1234 AB Amsterdam, Netherlands',
  },
  de: {
    title: 'Cookie-Richtlinie',
    lastUpdated: 'Zuletzt aktualisiert: 10. März 2026',
    introduction: 'Einführung',
    introText: 'Vlag en Wimpel B.V. ("wir", "uns", "unser") verwendet Cookies und ähnliche Technologien, um Ihren Besuch auf unserer Website zu verbessern. Diese Cookie-Richtlinie erklärt, was Cookies sind, wie wir sie verwenden und welche Wahlmöglichkeiten Sie haben.',
    whatAreCookies: 'Was sind Cookies?',
    whatAreCookiesText: 'Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie eine Website besuchen. Cookies werden häufig verwendet, um Websites effizient arbeiten zu lassen und um Informationen an die Website-Betreiber zu liefern.',
    howWeUseCookies: 'Wie wir Cookies verwenden',
    howWeUseCookiesText: 'Wir verwenden Cookies für verschiedene Zwecke, um Ihr Erlebnis auf unserer Website zu verbessern und um Einblick zu erhalten, wie unsere Website genutzt wird.',
    essentialCookies: 'Notwendige Cookies',
    essentialCookiesText: 'Diese Cookies sind für das Funktionieren der Website erforderlich. Sie ermöglichen es Ihnen, auf der Website zu navigieren und unsere Dienste und Funktionen zu nutzen, wie z.B. den Zugriff auf sichere Bereiche der Website. Ohne diese Cookies können bestimmte Dienste nicht bereitgestellt werden.',
    functionalCookies: 'Funktionale Cookies',
    functionalCookiesText: 'Diese Cookies ermöglichen es der Website, sich an bestimmte Entscheidungen zu erinnern, die Sie treffen (wie z.B. Ihr Benutzername, Sprache oder die Region, in der Sie sich befinden) und bieten verbesserte, persönlichere Funktionen. Sie können auch verwendet werden, um Änderungen zu verfolgen, die Sie an Textgröße, Schriftarten und anderen Teilen von Webseiten vorgenommen haben, die Sie anpassen können.',
    analyticsCookies: 'Analytische Cookies',
    analyticsCookiesText: 'Diese Cookies sammeln Informationen darüber, wie Besucher unsere Website nutzen, z.B. welche Seiten Besucher am häufigsten besuchen und ob sie Fehlermeldungen von Webseiten erhalten. Diese Cookies sammeln keine Informationen, die einen Besucher identifizieren. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.',
    marketingCookies: 'Marketing-Cookies',
    marketingCookiesText: 'Diese Cookies werden verwendet, um Werbung anzuzeigen, die für Sie und Ihre Interessen relevanter ist. Sie werden auch verwendet, um die Anzahl der Male zu begrenzen, die Sie eine Werbung sehen, und um die Wirksamkeit von Werbekampagnen zu messen. Sie merken sich, dass Sie eine Website besucht haben, und diese Informationen werden mit anderen Organisationen wie Werbetreibenden geteilt.',
    thirdPartyCookies: 'Cookies von Drittanbietern',
    thirdPartyCookiesText: 'Wir nutzen verschiedene externe Dienste wie Google Analytics, um die Nutzung unserer Website zu analysieren. Diese Dienste können Cookies platzieren, um ihre Funktionen auszuführen. Diese Cookies fallen unter die Datenschutzrichtlinie dieser externen Dienste.',
    manageCookies: 'Cookies verwalten',
    manageCookiesText: 'Die meisten Browser akzeptieren Cookies automatisch, aber Sie können normalerweise Ihre Browsereinstellungen ändern, um Cookies abzulehnen, wenn Sie dies wünschen. Bitte beachten Sie, dass wenn Sie sich entscheiden, Cookies abzulehnen, möglicherweise nicht alle Funktionen unserer Website ordnungsgemäß funktionieren.',
    browserSettings: 'Browsereinstellungen',
    browserSettingsText: 'Sie können Cookies über Ihre Browsereinstellungen verwalten. Hier sind einige Links zu den gängigsten Browsern: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera. Bitte konsultieren Sie die Hilfefunktion Ihres Browsers für weitere Informationen.',
    cookieConsent: 'Cookie-Einwilligung',
    cookieConsentText: 'Bei Ihrem ersten Besuch auf unserer Website bitten wir Sie um Ihre Zustimmung zum Platzieren bestimmter Cookies. Sie können Ihre Zustimmung jederzeit widerrufen, indem Sie Ihre Browsereinstellungen ändern oder uns kontaktieren.',
    changes: 'Änderungen an dieser Cookie-Richtlinie',
    changesText: 'Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Überarbeitungsdatum oben in dieser Richtlinie veröffentlicht.',
    contact: 'Kontakt',
    contactText: 'Wenn Sie Fragen zu dieser Cookie-Richtlinie haben, können Sie uns kontaktieren: Per E-Mail: privacy@flaggeundwimpel.de, Per Telefon: +31 (0)20 123 4567, Per Post: Hauptstraße 123, 1234 AB Amsterdam, Niederlande',
  },
  fr: {
    title: 'Politique de Cookies',
    lastUpdated: 'Dernière mise à jour : 10 mars 2026',
    introduction: 'Introduction',
    introText: 'Vlag en Wimpel B.V. ("nous", "notre") utilise des cookies et des technologies similaires pour améliorer votre visite sur notre site web. Cette Politique de Cookies explique ce que sont les cookies, comment nous les utilisons et quels choix vous avez.',
    whatAreCookies: 'Que sont les Cookies ?',
    whatAreCookiesText: 'Les cookies sont de petits fichiers texte qui sont placés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés pour faire fonctionner les sites web efficacement et pour fournir des informations aux propriétaires de sites web.',
    howWeUseCookies: 'Comment nous utilisons les Cookies',
    howWeUseCookiesText: 'Nous utilisons des cookies à diverses fins pour améliorer votre expérience sur notre site web et pour obtenir un aperçu de la façon dont notre site web est utilisé.',
    essentialCookies: 'Cookies Essentiels',
    essentialCookiesText: 'Ces cookies sont nécessaires au fonctionnement du site web. Ils vous permettent de naviguer sur le site web et d\'utiliser nos services et fonctionnalités, comme l\'accès aux zones sécurisées du site web. Sans ces cookies, certains services ne peuvent pas être fournis.',
    functionalCookies: 'Cookies Fonctionnels',
    functionalCookiesText: 'Ces cookies permettent au site web de se souvenir de certains choix que vous faites (comme votre nom d\'utilisateur, langue ou la région dans laquelle vous vous trouvez) et fournissent des fonctionnalités améliorées et plus personnelles. Ils peuvent également être utilisés pour suivre les modifications que vous avez apportées à la taille du texte, aux polices et à d\'autres parties des pages web que vous pouvez personnaliser.',
    analyticsCookies: 'Cookies Analytiques',
    analyticsCookiesText: 'Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site web, par exemple quelles pages les visiteurs consultent le plus souvent et s\'ils reçoivent des messages d\'erreur des pages web. Ces cookies ne collectent pas d\'informations qui identifient un visiteur. Toutes les informations que ces cookies collectent sont agrégées et donc anonymes.',
    marketingCookies: 'Cookies Marketing',
    marketingCookiesText: 'Ces cookies sont utilisés pour afficher des publicités plus pertinentes pour vous et vos intérêts. Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité et pour mesurer l\'efficacité des campagnes publicitaires. Ils se souviennent que vous avez visité un site web et cette information est partagée avec d\'autres organisations comme les annonceurs.',
    thirdPartyCookies: 'Cookies Tiers',
    thirdPartyCookiesText: 'Nous utilisons divers services externes tels que Google Analytics pour analyser l\'utilisation de notre site web. Ces services peuvent placer des cookies pour exécuter leurs fonctions. Ces cookies relèvent de la politique de confidentialité de ces services externes.',
    manageCookies: 'Gérer les Cookies',
    manageCookiesText: 'La plupart des navigateurs acceptent automatiquement les cookies, mais vous pouvez généralement modifier les paramètres de votre navigateur pour refuser les cookies si vous le souhaitez. Veuillez noter que si vous choisissez de refuser les cookies, toutes les fonctionnalités de notre site web peuvent ne pas fonctionner correctement.',
    browserSettings: 'Paramètres du Navigateur',
    browserSettingsText: 'Vous pouvez gérer les cookies via les paramètres de votre navigateur. Voici quelques liens vers les navigateurs les plus courants : Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera. Veuillez consulter la fonction d\'aide de votre navigateur pour plus d\'informations.',
    cookieConsent: 'Consentement aux Cookies',
    cookieConsentText: 'Lors de votre première visite sur notre site web, nous vous demandons votre consentement pour placer certains cookies. Vous pouvez retirer votre consentement à tout moment en modifiant les paramètres de votre navigateur ou en nous contactant.',
    changes: 'Modifications de cette Politique de Cookies',
    changesText: 'Nous pouvons mettre à jour cette Politique de Cookies de temps en temps. Toute modification sera publiée sur cette page avec une date de révision mise à jour en haut de cette politique.',
    contact: 'Contact',
    contactText: 'Si vous avez des questions concernant cette Politique de Cookies, vous pouvez nous contacter : Par e-mail : privacy@drapeauxetfanions.fr, Par téléphone : +31 (0)20 123 4567, Par courrier : Rue Principale 123, 1234 AB Amsterdam, Pays-Bas',
  },
};

export function CookiePolicy({ language }: CookiePolicyProps) {
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
