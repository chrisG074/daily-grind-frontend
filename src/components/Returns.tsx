import { RotateCcw, CheckCircle, XCircle, Mail } from 'lucide-react';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface ReturnsProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Retourneren',
    subtitle: 'Ons retourbeleid en instructies voor het retourneren van producten',
    
    policy: {
      title: 'Retourbeleid',
      period: '30 dagen bedenktijd',
      periodDesc: 'U heeft 30 dagen bedenktijd vanaf de ontvangstdatum om uw bestelling te retourneren.',
      conditions: 'Voorwaarden',
      conditionsList: [
        'Het product moet ongebruikt en in originele staat zijn',
        'Alle originele verpakkingen en labels moeten intact zijn',
        'U heeft het aankoopbewijs (factuur of orderbevestiging)',
        'Het product mag geen tekenen van gebruik vertonen',
      ],
    },
    
    canReturn: {
      title: 'Wat kan worden geretourneerd?',
      items: [
        'Standaard landvlaggen',
        'Standaard bedrijfsvlaggen (zonder logo)',
        'Accessoires (ongebruikt en in originele verpakking)',
        'Vlaggenstokken en bevestigingsmaterialen',
      ],
    },
    
    cannotReturn: {
      title: 'Wat kan NIET worden geretourneerd?',
      items: [
        'Custom vlaggen met uw eigen logo of ontwerp',
        'Op maat gemaakte producten',
        'Gebruikte of beschadigde producten',
        'Producten zonder originele verpakking',
        'Sale items (tenzij defect)',
      ],
    },
    
    howTo: {
      title: 'Hoe retourneren?',
      steps: [
        {
          title: 'Stap 1: Neem contact op',
          description: 'Stuur een e-mail naar info@vlagenwimpel.nl met uw ordernummer en de reden voor retournering.',
        },
        {
          title: 'Stap 2: Ontvang retourlabel',
          description: 'U ontvangt binnen 24 uur een retourlabel en instructies per e-mail.',
        },
        {
          title: 'Stap 3: Pak het product in',
          description: 'Verpak het product zorgvuldig in de originele verpakking. Voeg uw factuur of orderbevestiging toe.',
        },
        {
          title: 'Stap 4: Verstuur het pakket',
          description: 'Plak het retourlabel op het pakket en geef het af bij een PostNL of DHL punt.',
        },
        {
          title: 'Stap 5: Terugbetaling',
          description: 'Na ontvangst en controle ontvangt u binnen 5-7 werkdagen uw geld terug.',
        },
      ],
    },
    
    refund: {
      title: 'Terugbetaling',
      description: 'Na goedkeuring van uw retour wordt het bedrag binnen 5-7 werkdagen teruggestort op de rekening waarmee u heeft betaald. U ontvangt een bevestigingsmail zodra de terugbetaling is verwerkt.',
      costs: 'Retourkosten',
      costsDesc: 'Als u gebruikmaakt van ons retourlabel, worden de retourkosten (€6,95) afgetrokken van het terugbetaalde bedrag. Bij een defect of verkeerd geleverd product zijn de retourkosten voor onze rekening.',
    },
    
    exchange: {
      title: 'Ruilen',
      description: 'Wilt u een product ruilen voor een ander formaat, kleur of model? Retourneer dan eerst het originele product volgens de bovenstaande instructies. Na ontvangst van de retourzending kunt u een nieuwe bestelling plaatsen.',
    },
    
    defective: {
      title: 'Defect of beschadigd product?',
      description: 'Heeft u een defect of beschadigd product ontvangen? Neem dan binnen 48 uur na ontvangst contact met ons op. Stuur foto\'s mee van het defect of de beschadiging. Wij regelen kosteloos een vervanging of retourzending.',
    },
  },
  en: {
    title: 'Returns',
    subtitle: 'Our return policy and instructions for returning products',
    
    policy: {
      title: 'Return Policy',
      period: '30-day cooling-off period',
      periodDesc: 'You have 30 days from the date of receipt to return your order.',
      conditions: 'Conditions',
      conditionsList: [
        'The product must be unused and in original condition',
        'All original packaging and labels must be intact',
        'You have proof of purchase (invoice or order confirmation)',
        'The product must show no signs of use',
      ],
    },
    
    canReturn: {
      title: 'What can be returned?',
      items: [
        'Standard country flags',
        'Standard corporate flags (without logo)',
        'Accessories (unused and in original packaging)',
        'Flagpoles and mounting materials',
      ],
    },
    
    cannotReturn: {
      title: 'What CANNOT be returned?',
      items: [
        'Custom flags with your own logo or design',
        'Custom-made products',
        'Used or damaged products',
        'Products without original packaging',
        'Sale items (unless defective)',
      ],
    },
    
    howTo: {
      title: 'How to return?',
      steps: [
        {
          title: 'Step 1: Contact us',
          description: 'Send an email to info@flagandpennant.com with your order number and reason for return.',
        },
        {
          title: 'Step 2: Receive return label',
          description: 'You will receive a return label and instructions via email within 24 hours.',
        },
        {
          title: 'Step 3: Pack the product',
          description: 'Pack the product carefully in the original packaging. Include your invoice or order confirmation.',
        },
        {
          title: 'Step 4: Ship the package',
          description: 'Attach the return label to the package and drop it off at a PostNL or DHL point.',
        },
        {
          title: 'Step 5: Refund',
          description: 'After receipt and inspection, you will receive your money back within 5-7 working days.',
        },
      ],
    },
    
    refund: {
      title: 'Refund',
      description: 'After approval of your return, the amount will be refunded within 5-7 working days to the account with which you paid. You will receive a confirmation email once the refund has been processed.',
      costs: 'Return Costs',
      costsDesc: 'If you use our return label, the return costs (€6.95) will be deducted from the refunded amount. For defective or incorrectly delivered products, the return costs are at our expense.',
    },
    
    exchange: {
      title: 'Exchange',
      description: 'Would you like to exchange a product for another size, color or model? First return the original product according to the instructions above. After receiving the return, you can place a new order.',
    },
    
    defective: {
      title: 'Defective or damaged product?',
      description: 'Have you received a defective or damaged product? Please contact us within 48 hours after receipt. Send photos of the defect or damage. We will arrange a free replacement or return shipment.',
    },
  },
  de: {
    title: 'Rücksendungen',
    subtitle: 'Unsere Rückgaberichtlinie und Anweisungen für die Rücksendung von Produkten',
    
    policy: {
      title: 'Rückgaberichtlinie',
      period: '30 Tage Bedenkzeit',
      periodDesc: 'Sie haben 30 Tage ab Erhaltungsdatum, um Ihre Bestellung zurückzusenden.',
      conditions: 'Bedingungen',
      conditionsList: [
        'Das Produkt muss unbenutzt und in Originalzustand sein',
        'Alle Originalverpackungen und Etiketten müssen intakt sein',
        'Sie haben einen Kaufbeleg (Rechnung oder Auftragsbestätigung)',
        'Das Produkt darf keine Gebrauchsspuren aufweisen',
      ],
    },
    
    canReturn: {
      title: 'Was kann zurückgegeben werden?',
      items: [
        'Standard-Länderflaggen',
        'Standard-Firmenflaggen (ohne Logo)',
        'Zubehör (unbenutzt und in Originalverpackung)',
        'Fahnenstangen und Befestigungsmaterialien',
      ],
    },
    
    cannotReturn: {
      title: 'Was kann NICHT zurückgegeben werden?',
      items: [
        'Custom-Flaggen mit Ihrem eigenen Logo oder Design',
        'Maßgeschneiderte Produkte',
        'Gebrauchte oder beschädigte Produkte',
        'Produkte ohne Originalverpackung',
        'Sale-Artikel (sofern nicht defekt)',
      ],
    },
    
    howTo: {
      title: 'Wie zurücksenden?',
      steps: [
        {
          title: 'Schritt 1: Kontaktieren Sie uns',
          description: 'Senden Sie eine E-Mail an info@flaggeundwimpel.de mit Ihrer Bestellnummer und dem Grund für die Rücksendung.',
        },
        {
          title: 'Schritt 2: Rücksendeetikett erhalten',
          description: 'Sie erhalten innerhalb von 24 Stunden ein Rücksendeetikett und Anweisungen per E-Mail.',
        },
        {
          title: 'Schritt 3: Produkt verpacken',
          description: 'Verpacken Sie das Produkt sorgfältig in der Originalverpackung. Fügen Sie Ihre Rechnung oder Auftragsbestätigung hinzu.',
        },
        {
          title: 'Schritt 4: Paket versenden',
          description: 'Kleben Sie das Rücksendeetikett auf das Paket und geben Sie es bei einer PostNL- oder DHL-Stelle ab.',
        },
        {
          title: 'Schritt 5: Rückerstattung',
          description: 'Nach Erhalt und Prüfung erhalten Sie Ihr Geld innerhalb von 5-7 Werktagen zurück.',
        },
      ],
    },
    
    refund: {
      title: 'Rückerstattung',
      description: 'Nach Genehmigung Ihrer Rücksendung wird der Betrag innerhalb von 5-7 Werktagen auf das Konto erstattet, mit dem Sie bezahlt haben. Sie erhalten eine Bestätigungs-E-Mail, sobald die Rückerstattung bearbeitet wurde.',
      costs: 'Rücksendekosten',
      costsDesc: 'Wenn Sie unser Rücksendeetikett verwenden, werden die Rücksendekosten (€6,95) vom erstatteten Betrag abgezogen. Bei defekten oder falsch gelieferten Produkten gehen die Rücksendekosten zu unseren Lasten.',
    },
    
    exchange: {
      title: 'Umtausch',
      description: 'Möchten Sie ein Produkt gegen eine andere Größe, Farbe oder ein anderes Modell umtauschen? Senden Sie zuerst das Originalprodukt gemäß den obigen Anweisungen zurück. Nach Erhalt der Rücksendung können Sie eine neue Bestellung aufgeben.',
    },
    
    defective: {
      title: 'Defektes oder beschädigtes Produkt?',
      description: 'Haben Sie ein defektes oder beschädigtes Produkt erhalten? Kontaktieren Sie uns bitte innerhalb von 48 Stunden nach Erhalt. Senden Sie Fotos des Defekts oder der Beschädigung mit. Wir regeln kostenlos einen Ersatz oder eine Rücksendung.',
    },
  },
  fr: {
    title: 'Retours',
    subtitle: 'Notre politique de retour et instructions pour retourner des produits',
    
    policy: {
      title: 'Politique de Retour',
      period: 'Délai de réflexion de 30 jours',
      periodDesc: 'Vous disposez de 30 jours à compter de la date de réception pour retourner votre commande.',
      conditions: 'Conditions',
      conditionsList: [
        'Le produit doit être inutilisé et dans son état d\'origine',
        'Tous les emballages et étiquettes d\'origine doivent être intacts',
        'Vous avez une preuve d\'achat (facture ou confirmation de commande)',
        'Le produit ne doit montrer aucun signe d\'utilisation',
      ],
    },
    
    canReturn: {
      title: 'Qu\'est-ce qui peut être retourné?',
      items: [
        'Drapeaux nationaux standard',
        'Drapeaux d\'entreprise standard (sans logo)',
        'Accessoires (inutilisés et dans l\'emballage d\'origine)',
        'Mâts et matériaux de fixation',
      ],
    },
    
    cannotReturn: {
      title: 'Qu\'est-ce qui NE PEUT PAS être retourné?',
      items: [
        'Drapeaux personnalisés avec votre propre logo ou design',
        'Produits sur mesure',
        'Produits utilisés ou endommagés',
        'Produits sans emballage d\'origine',
        'Articles en solde (sauf s\'ils sont défectueux)',
      ],
    },
    
    howTo: {
      title: 'Comment retourner?',
      steps: [
        {
          title: 'Étape 1: Contactez-nous',
          description: 'Envoyez un e-mail à info@drapeauxetfanions.fr avec votre numéro de commande et la raison du retour.',
        },
        {
          title: 'Étape 2: Recevez l\'étiquette de retour',
          description: 'Vous recevrez une étiquette de retour et des instructions par e-mail dans les 24 heures.',
        },
        {
          title: 'Étape 3: Emballez le produit',
          description: 'Emballez soigneusement le produit dans son emballage d\'origine. Joignez votre facture ou confirmation de commande.',
        },
        {
          title: 'Étape 4: Envoyez le colis',
          description: 'Collez l\'étiquette de retour sur le colis et déposez-le dans un point PostNL ou DHL.',
        },
        {
          title: 'Étape 5: Remboursement',
          description: 'Après réception et inspection, vous serez remboursé sous 5-7 jours ouvrables.',
        },
      ],
    },
    
    refund: {
      title: 'Remboursement',
      description: 'Après approbation de votre retour, le montant sera remboursé sous 5-7 jours ouvrables sur le compte avec lequel vous avez payé. Vous recevrez un e-mail de confirmation une fois le remboursement traité.',
      costs: 'Frais de Retour',
      costsDesc: 'Si vous utilisez notre étiquette de retour, les frais de retour (€6,95) seront déduits du montant remboursé. Pour les produits défectueux ou livrés incorrectement, les frais de retour sont à notre charge.',
    },
    
    exchange: {
      title: 'Échange',
      description: 'Souhaitez-vous échanger un produit pour une autre taille, couleur ou modèle? Retournez d\'abord le produit original selon les instructions ci-dessus. Après réception du retour, vous pouvez passer une nouvelle commande.',
    },
    
    defective: {
      title: 'Produit défectueux ou endommagé?',
      description: 'Avez-vous reçu un produit défectueux ou endommagé? Veuillez nous contacter dans les 48 heures après réception. Envoyez des photos du défaut ou des dommages. Nous organiserons gratuitement un remplacement ou un retour.',
    },
  },
};

export function Returns({ language }: ReturnsProps) {
  const t = translations[language];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      {/* Return Policy */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <RotateCcw className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.policy.title}]</h2>
        </div>
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6 mb-3 sm:mb-6">
          <h3 className="text-sm sm:text-lg font-bold text-black mb-2 sm:mb-3">[{t.policy.period}]</h3>
          <p className="text-black text-xs sm:text-sm">[{t.policy.periodDesc}]</p>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-4">[{t.policy.conditions}]</h3>
        <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
          {t.policy.conditionsList.map((condition, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-black mt-0.5">•</span>
              <span>[{condition}]</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What can/cannot be returned */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8">
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
            <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
            <h2 className="text-sm sm:text-lg font-bold text-black">[{t.canReturn.title}]</h2>
          </div>
          <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
            {t.canReturn.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-0.5">✓</span>
                <span>[{item}]</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
            <XCircle className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
            <h2 className="text-sm sm:text-lg font-bold text-black">[{t.cannotReturn.title}]</h2>
          </div>
          <ul className="space-y-1 sm:space-y-2 text-black text-xs sm:text-sm">
            {t.cannotReturn.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-0.5">✗</span>
                <span>[{item}]</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How to return */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-3 sm:mb-6">[{t.howTo.title}]</h2>
        <div className="space-y-3 sm:space-y-6">
          {t.howTo.steps.map((step, index) => (
            <div key={index} className="flex gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs sm:text-base">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">[{step.title}]</h3>
                <p className="text-black text-xs sm:text-sm">[{step.description}]</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refund */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-2 sm:mb-4">[{t.refund.title}]</h2>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[{t.refund.description}]</p>
        <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
          <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3">[{t.refund.costs}]</h3>
          <p className="text-black text-xs sm:text-sm">[{t.refund.costsDesc}]</p>
        </div>
      </div>

      {/* Exchange */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-2 sm:mb-4">[{t.exchange.title}]</h2>
        <p className="text-black text-xs sm:text-sm">[{t.exchange.description}]</p>
      </div>

      {/* Defective products */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Mail className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.defective.title}]</h2>
        </div>
        <p className="text-black text-xs sm:text-sm">[{t.defective.description}]</p>
      </div>
    </div>
  );
}