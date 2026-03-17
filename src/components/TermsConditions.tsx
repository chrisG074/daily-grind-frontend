type Language = 'nl' | 'en' | 'de' | 'fr';

interface TermsConditionsProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Algemene Voorwaarden',
    lastUpdated: 'Laatst bijgewerkt: 10 maart 2026',
    introduction: 'Introductie',
    introText: 'Deze algemene voorwaarden zijn van toepassing op het gebruik van de website en alle diensten van Vlag en Wimpel B.V., gevestigd te Amsterdam en ingeschreven bij de Kamer van Koophandel onder nummer 12345678.',
    definitions: 'Definities',
    definitionsText: 'In deze algemene voorwaarden worden de volgende definities gehanteerd: Vlag en Wimpel B.V.: de gebruiker van deze algemene voorwaarden; Klant: de natuurlijke of rechtspersoon die met Vlag en Wimpel B.V. een overeenkomst aangaat; Partijen: Vlag en Wimpel B.V. en klant samen; Overeenkomst: elke afspraak of overeenkomst tussen Vlag en Wimpel B.V. en klant.',
    applicability: 'Toepasselijkheid',
    applicabilityText: 'Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Vlag en Wimpel B.V. en klant. Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.',
    offers: 'Aanbiedingen en Offertes',
    offersText: 'Alle aanbiedingen en offertes van Vlag en Wimpel B.V. zijn vrijblijvend, tenzij uitdrukkelijk schriftelijk anders is vermeld. Een aanbod of offerte is maximaal 30 dagen geldig, tenzij een andere aanvaardingstermijn in de offerte is vermeld.',
    prices: 'Prijzen',
    pricesText: 'Alle prijzen op onze website en in onze uitingen zijn in Euro\'s en exclusief BTW, tenzij anders vermeld. Vlag en Wimpel B.V. behoudt zich het recht voor om prijzen te wijzigen. Prijswijzigingen hebben geen invloed op reeds gesloten overeenkomsten.',
    payment: 'Betaling',
    paymentText: 'Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders is overeengekomen. Bij niet-tijdige betaling is de klant van rechtswege in verzuim en is Vlag en Wimpel B.V. gerechtigd de wettelijke rente in rekening te brengen.',
    delivery: 'Levering',
    deliveryText: 'Levering vindt plaats op het door de klant opgegeven afleveradres. De klant is verplicht om de producten bij levering in ontvangst te nemen. Levertijden zijn indicatief en vormen geen fatale termijn, tenzij uitdrukkelijk anders is overeengekomen.',
    complaints: 'Klachten',
    complaintsText: 'Klachten over de geleverde producten of diensten dienen binnen 8 dagen na levering schriftelijk te worden gemeld aan Vlag en Wimpel B.V. De klant dient Vlag en Wimpel B.V. in de gelegenheid te stellen de klacht te (doen) onderzoeken.',
    liability: 'Aansprakelijkheid',
    liabilityText: 'Vlag en Wimpel B.V. is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat Vlag en Wimpel B.V. is uitgegaan van door of namens de klant verstrekte onjuiste en/of onvolledige gegevens. De aansprakelijkheid van Vlag en Wimpel B.V. is beperkt tot het factuurbedrag.',
    intellectualProperty: 'Intellectueel Eigendom',
    intellectualPropertyText: 'Alle intellectuele eigendomsrechten met betrekking tot de producten en diensten van Vlag en Wimpel B.V. berusten bij Vlag en Wimpel B.V. De klant verkrijgt uitsluitend de gebruiksrechten die voortvloeien uit de overeenkomst.',
    privacy: 'Privacy',
    privacyText: 'Vlag en Wimpel B.V. behandelt persoonsgegevens van klanten conform de Algemene Verordening Gegevensbescherming (AVG). Voor meer informatie verwijzen wij naar ons Privacy Beleid.',
    applicableLaw: 'Toepasselijk Recht',
    applicableLawText: 'Op alle overeenkomsten tussen Vlag en Wimpel B.V. en klant is Nederlands recht van toepassing. Geschillen zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Vlag en Wimpel B.V. is gevestigd.',
    contact: 'Contact',
    contactText: 'Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen: Per e-mail: info@vlagenwimpel.nl, Per telefoon: +31 (0)20 123 4567, Per post: Hoofdstraat 123, 1234 AB Amsterdam, Nederland',
  },
  en: {
    title: 'Terms & Conditions',
    lastUpdated: 'Last updated: March 10, 2026',
    introduction: 'Introduction',
    introText: 'These terms and conditions apply to the use of the website and all services of Vlag en Wimpel B.V., located in Amsterdam and registered with the Chamber of Commerce under number 12345678.',
    definitions: 'Definitions',
    definitionsText: 'In these terms and conditions, the following definitions are used: Vlag en Wimpel B.V.: the user of these terms and conditions; Customer: the natural or legal person who enters into an agreement with Vlag en Wimpel B.V.; Parties: Vlag en Wimpel B.V. and customer together; Agreement: any arrangement or agreement between Vlag en Wimpel B.V. and customer.',
    applicability: 'Applicability',
    applicabilityText: 'These terms and conditions apply to all offers, quotations and agreements between Vlag en Wimpel B.V. and customer. Deviations from these terms are only valid if expressly agreed in writing.',
    offers: 'Offers and Quotations',
    offersText: 'All offers and quotations from Vlag en Wimpel B.V. are without obligation, unless expressly stated otherwise in writing. An offer or quotation is valid for a maximum of 30 days, unless a different acceptance period is stated in the quotation.',
    prices: 'Prices',
    pricesText: 'All prices on our website and in our communications are in Euros and exclude VAT, unless otherwise stated. Vlag en Wimpel B.V. reserves the right to change prices. Price changes do not affect agreements already concluded.',
    payment: 'Payment',
    paymentText: 'Payment must be made within 14 days of the invoice date, unless otherwise agreed in writing. In case of late payment, the customer is legally in default and Vlag en Wimpel B.V. is entitled to charge statutory interest.',
    delivery: 'Delivery',
    deliveryText: 'Delivery takes place at the delivery address specified by the customer. The customer is obliged to accept the products upon delivery. Delivery times are indicative and do not constitute a fatal deadline, unless expressly agreed otherwise.',
    complaints: 'Complaints',
    complaintsText: 'Complaints about the products or services delivered must be reported in writing to Vlag en Wimpel B.V. within 8 days of delivery. The customer must give Vlag en Wimpel B.V. the opportunity to investigate the complaint.',
    liability: 'Liability',
    liabilityText: 'Vlag en Wimpel B.V. is not liable for damage of any kind arising from Vlag en Wimpel B.V. relying on incorrect and/or incomplete information provided by or on behalf of the customer. The liability of Vlag en Wimpel B.V. is limited to the invoice amount.',
    intellectualProperty: 'Intellectual Property',
    intellectualPropertyText: 'All intellectual property rights relating to the products and services of Vlag en Wimpel B.V. rest with Vlag en Wimpel B.V. The customer only acquires the usage rights arising from the agreement.',
    privacy: 'Privacy',
    privacyText: 'Vlag en Wimpel B.V. processes personal data of customers in accordance with the General Data Protection Regulation (GDPR). For more information, please refer to our Privacy Policy.',
    applicableLaw: 'Applicable Law',
    applicableLawText: 'Dutch law applies to all agreements between Vlag en Wimpel B.V. and customer. Disputes will be submitted to the competent court in the district where Vlag en Wimpel B.V. is located.',
    contact: 'Contact',
    contactText: 'For questions about these terms and conditions, you can contact us: By email: info@flagandpennant.com, By phone: +31 (0)20 123 4567, By mail: Main Street 123, 1234 AB Amsterdam, Netherlands',
  },
  de: {
    title: 'Allgemeine Geschäftsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert: 10. März 2026',
    introduction: 'Einführung',
    introText: 'Diese allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website und aller Dienstleistungen von Vlag en Wimpel B.V., ansässig in Amsterdam und eingetragen bei der Handelskammer unter der Nummer 12345678.',
    definitions: 'Definitionen',
    definitionsText: 'In diesen allgemeinen Geschäftsbedingungen werden die folgenden Definitionen verwendet: Vlag en Wimpel B.V.: der Benutzer dieser allgemeinen Geschäftsbedingungen; Kunde: die natürliche oder juristische Person, die einen Vertrag mit Vlag en Wimpel B.V. abschließt; Parteien: Vlag en Wimpel B.V. und Kunde zusammen; Vereinbarung: jede Vereinbarung oder Abmachung zwischen Vlag en Wimpel B.V. und Kunde.',
    applicability: 'Anwendbarkeit',
    applicabilityText: 'Diese allgemeinen Geschäftsbedingungen gelten für alle Angebote, Kostenvoranschläge und Vereinbarungen zwischen Vlag en Wimpel B.V. und Kunde. Abweichungen von diesen Bedingungen sind nur gültig, wenn sie ausdrücklich schriftlich vereinbart wurden.',
    offers: 'Angebote und Kostenvoranschläge',
    offersText: 'Alle Angebote und Kostenvoranschläge von Vlag en Wimpel B.V. sind unverbindlich, sofern nicht ausdrücklich schriftlich anders angegeben. Ein Angebot oder Kostenvoranschlag ist maximal 30 Tage gültig, sofern im Kostenvoranschlag keine andere Annahmefrist angegeben ist.',
    prices: 'Preise',
    pricesText: 'Alle Preise auf unserer Website und in unseren Mitteilungen sind in Euro und exklusive MwSt., sofern nicht anders angegeben. Vlag en Wimpel B.V. behält sich das Recht vor, Preise zu ändern. Preisänderungen haben keinen Einfluss auf bereits abgeschlossene Vereinbarungen.',
    payment: 'Zahlung',
    paymentText: 'Die Zahlung muss innerhalb von 14 Tagen nach Rechnungsdatum erfolgen, sofern nicht schriftlich anders vereinbart. Bei verspäteter Zahlung befindet sich der Kunde von Rechts wegen im Verzug und ist Vlag en Wimpel B.V. berechtigt, gesetzliche Zinsen zu berechnen.',
    delivery: 'Lieferung',
    deliveryText: 'Die Lieferung erfolgt an die vom Kunden angegebene Lieferadresse. Der Kunde ist verpflichtet, die Produkte bei Lieferung entgegenzunehmen. Lieferzeiten sind indikativ und stellen keine fatale Frist dar, sofern nicht ausdrücklich anders vereinbart.',
    complaints: 'Beschwerden',
    complaintsText: 'Beschwerden über die gelieferten Produkte oder Dienstleistungen müssen innerhalb von 8 Tagen nach Lieferung schriftlich bei Vlag en Wimpel B.V. gemeldet werden. Der Kunde muss Vlag en Wimpel B.V. die Möglichkeit geben, die Beschwerde zu untersuchen.',
    liability: 'Haftung',
    liabilityText: 'Vlag en Wimpel B.V. haftet nicht für Schäden jeglicher Art, die dadurch entstehen, dass Vlag en Wimpel B.V. von falschen und/oder unvollständigen Angaben ausgegangen ist, die vom oder im Namen des Kunden bereitgestellt wurden. Die Haftung von Vlag en Wimpel B.V. ist auf den Rechnungsbetrag begrenzt.',
    intellectualProperty: 'Geistiges Eigentum',
    intellectualPropertyText: 'Alle geistigen Eigentumsrechte in Bezug auf die Produkte und Dienstleistungen von Vlag en Wimpel B.V. liegen bei Vlag en Wimpel B.V. Der Kunde erwirbt nur die Nutzungsrechte, die sich aus der Vereinbarung ergeben.',
    privacy: 'Datenschutz',
    privacyText: 'Vlag en Wimpel B.V. verarbeitet personenbezogene Daten von Kunden gemäß der Datenschutz-Grundverordnung (DSGVO). Weitere Informationen finden Sie in unserer Datenschutzerklärung.',
    applicableLaw: 'Anwendbares Recht',
    applicableLawText: 'Für alle Vereinbarungen zwischen Vlag en Wimpel B.V. und Kunde gilt niederländisches Recht. Streitigkeiten werden dem zuständigen Gericht im Bezirk vorgelegt, in dem sich Vlag en Wimpel B.V. befindet.',
    contact: 'Kontakt',
    contactText: 'Für Fragen zu diesen allgemeinen Geschäftsbedingungen können Sie uns kontaktieren: Per E-Mail: info@flaggeundwimpel.de, Per Telefon: +31 (0)20 123 4567, Per Post: Hauptstraße 123, 1234 AB Amsterdam, Niederlande',
  },
  fr: {
    title: 'Conditions Générales',
    lastUpdated: 'Dernière mise à jour : 10 mars 2026',
    introduction: 'Introduction',
    introText: 'Ces conditions générales s\'appliquent à l\'utilisation du site web et de tous les services de Vlag en Wimpel B.V., situé à Amsterdam et enregistré auprès de la Chambre de Commerce sous le numéro 12345678.',
    definitions: 'Définitions',
    definitionsText: 'Dans ces conditions générales, les définitions suivantes sont utilisées : Vlag en Wimpel B.V. : l\'utilisateur de ces conditions générales ; Client : la personne physique ou morale qui conclut un accord avec Vlag en Wimpel B.V. ; Parties : Vlag en Wimpel B.V. et client ensemble ; Accord : tout arrangement ou accord entre Vlag en Wimpel B.V. et client.',
    applicability: 'Applicabilité',
    applicabilityText: 'Ces conditions générales s\'appliquent à toutes les offres, devis et accords entre Vlag en Wimpel B.V. et client. Les dérogations à ces conditions ne sont valables que si elles ont été expressément convenues par écrit.',
    offers: 'Offres et Devis',
    offersText: 'Toutes les offres et devis de Vlag en Wimpel B.V. sont sans engagement, sauf indication contraire expresse par écrit. Une offre ou un devis est valable pour un maximum de 30 jours, sauf si une période d\'acceptation différente est indiquée dans le devis.',
    prices: 'Prix',
    pricesText: 'Tous les prix sur notre site web et dans nos communications sont en euros et hors TVA, sauf indication contraire. Vlag en Wimpel B.V. se réserve le droit de modifier les prix. Les changements de prix n\'affectent pas les accords déjà conclus.',
    payment: 'Paiement',
    paymentText: 'Le paiement doit être effectué dans les 14 jours suivant la date de la facture, sauf accord contraire par écrit. En cas de retard de paiement, le client est légalement en défaut et Vlag en Wimpel B.V. a le droit de facturer des intérêts légaux.',
    delivery: 'Livraison',
    deliveryText: 'La livraison a lieu à l\'adresse de livraison spécifiée par le client. Le client est tenu d\'accepter les produits lors de la livraison. Les délais de livraison sont indicatifs et ne constituent pas un délai fatal, sauf accord contraire exprès.',
    complaints: 'Réclamations',
    complaintsText: 'Les réclamations concernant les produits ou services livrés doivent être signalées par écrit à Vlag en Wimpel B.V. dans les 8 jours suivant la livraison. Le client doit donner à Vlag en Wimpel B.V. l\'opportunité d\'enquêter sur la réclamation.',
    liability: 'Responsabilité',
    liabilityText: 'Vlag en Wimpel B.V. n\'est pas responsable des dommages de quelque nature que ce soit résultant du fait que Vlag en Wimpel B.V. s\'est appuyé sur des informations incorrectes et/ou incomplètes fournies par ou au nom du client. La responsabilité de Vlag en Wimpel B.V. est limitée au montant de la facture.',
    intellectualProperty: 'Propriété Intellectuelle',
    intellectualPropertyText: 'Tous les droits de propriété intellectuelle relatifs aux produits et services de Vlag en Wimpel B.V. appartiennent à Vlag en Wimpel B.V. Le client n\'acquiert que les droits d\'utilisation découlant de l\'accord.',
    privacy: 'Confidentialité',
    privacyText: 'Vlag en Wimpel B.V. traite les données personnelles des clients conformément au Règlement Général sur la Protection des Données (RGPD). Pour plus d\'informations, veuillez consulter notre Politique de Confidentialité.',
    applicableLaw: 'Droit Applicable',
    applicableLawText: 'Le droit néerlandais s\'applique à tous les accords entre Vlag en Wimpel B.V. et client. Les litiges seront soumis au tribunal compétent dans le district où se trouve Vlag en Wimpel B.V.',
    contact: 'Contact',
    contactText: 'Pour toute question concernant ces conditions générales, vous pouvez nous contacter : Par e-mail : info@drapeauxetfanions.fr, Par téléphone : +31 (0)20 123 4567, Par courrier : Rue Principale 123, 1234 AB Amsterdam, Pays-Bas',
  },
};

export function TermsConditions({ language }: TermsConditionsProps) {
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
