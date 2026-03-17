import { CreditCard, Building, Shield, Clock } from 'lucide-react';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface PaymentProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Betaalmethoden',
    subtitle: 'Veilig en eenvoudig betalen met uw favoriete betaalmethode',
    
    available: {
      title: 'Beschikbare Betaalmethoden',
      subtitle: 'Wij accepteren de volgende betaalmethoden',
    },
    
    methods: {
      ideal: {
        title: 'iDEAL',
        description: 'Direct en veilig betalen via uw eigen bank. De meest populaire betaalmethode in Nederland.',
      },
      creditcard: {
        title: 'Creditcard',
        description: 'Betaal met Visa, Mastercard of American Express. Uw gegevens worden veilig verwerkt.',
      },
      paypal: {
        title: 'PayPal',
        description: 'Betaal snel en veilig met uw PayPal account. Geen creditcard nodig.',
      },
      banktransfer: {
        title: 'Bankoverschrijving',
        description: 'Overmaken naar onze bankrekening. Uw bestelling wordt verstuurd na ontvangst van de betaling.',
      },
      invoice: {
        title: 'Betaling op Factuur',
        description: 'Voor zakelijke klanten. Betaal binnen 30 dagen na factuurdatum. Goedkeuring vereist.',
      },
      sofort: {
        title: 'Sofort',
        description: 'Direct online overmaken via uw bank. Populair in Duitsland en Oostenrijk.',
      },
    },
    
    security: {
      title: 'Veiligheid',
      description: 'Al onze betalingen worden verwerkt via beveiligde SSL-verbindingen. Wij slaan geen creditcardgegevens op. Betalingen worden verwerkt door gecertificeerde betalingsproviders die voldoen aan de hoogste veiligheidseisen (PCI DSS Level 1).',
    },
    
    process: {
      title: 'Betalingsproces',
      steps: [
        {
          title: 'Winkelwagen',
          description: 'Voeg producten toe aan uw winkelwagen en ga naar de kassa.',
        },
        {
          title: 'Kies betaalmethode',
          description: 'Selecteer uw voorkeursmanier van betalen.',
        },
        {
          title: 'Betaling afronden',
          description: 'Volg de instructies van de gekozen betaalmethode.',
        },
        {
          title: 'Bevestiging',
          description: 'U ontvangt direct een orderbevestiging per e-mail.',
        },
      ],
    },
    
    businessCustomers: {
      title: 'Zakelijke Klanten',
      description: 'Bent u een zakelijke klant met regelmatige bestellingen? Vraag een zakelijk account aan en profiteer van:',
      benefits: [
        'Betaling op factuur (30 dagen betalingstermijn)',
        'Exclusieve zakelijke kortingen',
        'Persoonlijk accountbeheer',
        'Maandelijkse factuuroverzichten',
        'Prioriteit bij grote bestellingen',
      ],
      cta: 'Vraag een zakelijk account aan',
    },
    
    currencies: {
      title: 'Valuta',
      description: 'U kunt betalen in Euro (EUR), Britse Pond (GBP) of Amerikaanse Dollar (USD). De valuta kan gewijzigd worden in de header van onze webshop.',
    },
    
    faq: {
      title: 'Veelgestelde Vragen',
      questions: [
        {
          q: 'Wanneer wordt mijn betaling verwerkt?',
          a: 'Betalingen via iDEAL, creditcard en PayPal worden direct verwerkt. Bij bankoverschrijving verwerken wij uw bestelling zodra we de betaling hebben ontvangen.',
        },
        {
          q: 'Is betalen veilig?',
          a: 'Ja, al onze betalingen verlopen via beveiligde SSL-verbindingen en worden verwerkt door gecertificeerde betalingsproviders.',
        },
        {
          q: 'Kan ik achteraf betalen?',
          a: 'Zakelijke klanten kunnen na goedkeuring betalen op factuur. Voor particulieren bieden wij momenteel geen achteraf betalen aan.',
        },
      ],
    },
  },
  en: {
    title: 'Payment Methods',
    subtitle: 'Pay safely and easily with your favorite payment method',
    
    available: {
      title: 'Available Payment Methods',
      subtitle: 'We accept the following payment methods',
    },
    
    methods: {
      ideal: {
        title: 'iDEAL',
        description: 'Pay directly and securely via your own bank. The most popular payment method in the Netherlands.',
      },
      creditcard: {
        title: 'Credit Card',
        description: 'Pay with Visa, Mastercard or American Express. Your details are processed securely.',
      },
      paypal: {
        title: 'PayPal',
        description: 'Pay quickly and securely with your PayPal account. No credit card required.',
      },
      banktransfer: {
        title: 'Bank Transfer',
        description: 'Transfer to our bank account. Your order will be shipped after payment is received.',
      },
      invoice: {
        title: 'Payment by Invoice',
        description: 'For business customers. Pay within 30 days of invoice date. Approval required.',
      },
      sofort: {
        title: 'Sofort',
        description: 'Direct online transfer via your bank. Popular in Germany and Austria.',
      },
    },
    
    security: {
      title: 'Security',
      description: 'All our payments are processed via secure SSL connections. We do not store credit card details. Payments are processed by certified payment providers that meet the highest security requirements (PCI DSS Level 1).',
    },
    
    process: {
      title: 'Payment Process',
      steps: [
        {
          title: 'Shopping Cart',
          description: 'Add products to your cart and proceed to checkout.',
        },
        {
          title: 'Choose payment method',
          description: 'Select your preferred payment method.',
        },
        {
          title: 'Complete payment',
          description: 'Follow the instructions of the chosen payment method.',
        },
        {
          title: 'Confirmation',
          description: 'You will immediately receive an order confirmation by email.',
        },
      ],
    },
    
    businessCustomers: {
      title: 'Business Customers',
      description: 'Are you a business customer with regular orders? Request a business account and benefit from:',
      benefits: [
        'Payment by invoice (30 days payment term)',
        'Exclusive business discounts',
        'Personal account management',
        'Monthly invoice summaries',
        'Priority for large orders',
      ],
      cta: 'Request a business account',
    },
    
    currencies: {
      title: 'Currency',
      description: 'You can pay in Euro (EUR), British Pound (GBP) or US Dollar (USD). The currency can be changed in the header of our webshop.',
    },
    
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          q: 'When will my payment be processed?',
          a: 'Payments via iDEAL, credit card and PayPal are processed immediately. For bank transfers, we process your order as soon as we receive payment.',
        },
        {
          q: 'Is payment secure?',
          a: 'Yes, all our payments are made via secure SSL connections and are processed by certified payment providers.',
        },
        {
          q: 'Can I pay later?',
          a: 'Business customers can pay by invoice after approval. We currently do not offer pay later for private customers.',
        },
      ],
    },
  },
  de: {
    title: 'Zahlungsmethoden',
    subtitle: 'Zahlen Sie sicher und einfach mit Ihrer bevorzugten Zahlungsmethode',
    
    available: {
      title: 'Verfügbare Zahlungsmethoden',
      subtitle: 'Wir akzeptieren die folgenden Zahlungsmethoden',
    },
    
    methods: {
      ideal: {
        title: 'iDEAL',
        description: 'Direkt und sicher über Ihre eigene Bank bezahlen. Die beliebteste Zahlungsmethode in den Niederlanden.',
      },
      creditcard: {
        title: 'Kreditkarte',
        description: 'Bezahlen Sie mit Visa, Mastercard oder American Express. Ihre Daten werden sicher verarbeitet.',
      },
      paypal: {
        title: 'PayPal',
        description: 'Zahlen Sie schnell und sicher mit Ihrem PayPal-Konto. Keine Kreditkarte erforderlich.',
      },
      banktransfer: {
        title: 'Banküberweisung',
        description: 'Überweisung auf unser Bankkonto. Ihre Bestellung wird nach Zahlungseingang versandt.',
      },
      invoice: {
        title: 'Zahlung auf Rechnung',
        description: 'Für Geschäftskunden. Zahlung innerhalb von 30 Tagen nach Rechnungsdatum. Genehmigung erforderlich.',
      },
      sofort: {
        title: 'Sofort',
        description: 'Direkte Online-Überweisung über Ihre Bank. Beliebt in Deutschland und Österreich.',
      },
    },
    
    security: {
      title: 'Sicherheit',
      description: 'Alle unsere Zahlungen werden über sichere SSL-Verbindungen verarbeitet. Wir speichern keine Kreditkartendaten. Zahlungen werden von zertifizierten Zahlungsanbietern verarbeitet, die den höchsten Sicherheitsanforderungen entsprechen (PCI DSS Level 1).',
    },
    
    process: {
      title: 'Zahlungsprozess',
      steps: [
        {
          title: 'Warenkorb',
          description: 'Fügen Sie Produkte zu Ihrem Warenkorb hinzu und gehen Sie zur Kasse.',
        },
        {
          title: 'Zahlungsmethode wählen',
          description: 'Wählen Sie Ihre bevorzugte Zahlungsmethode.',
        },
        {
          title: 'Zahlung abschließen',
          description: 'Folgen Sie den Anweisungen der gewählten Zahlungsmethode.',
        },
        {
          title: 'Bestätigung',
          description: 'Sie erhalten sofort eine Auftragsbestätigung per E-Mail.',
        },
      ],
    },
    
    businessCustomers: {
      title: 'Geschäftskunden',
      description: 'Sind Sie ein Geschäftskunde mit regelmäßigen Bestellungen? Fordern Sie ein Geschäftskonto an und profitieren Sie von:',
      benefits: [
        'Zahlung auf Rechnung (30 Tage Zahlungsziel)',
        'Exklusive Geschäftsrabatte',
        'Persönliche Kontoverwaltung',
        'Monatliche Rechnungsübersichten',
        'Priorität bei Großbestellungen',
      ],
      cta: 'Geschäftskonto anfordern',
    },
    
    currencies: {
      title: 'Währung',
      description: 'Sie können in Euro (EUR), Britischem Pfund (GBP) oder US-Dollar (USD) bezahlen. Die Währung kann im Header unseres Webshops geändert werden.',
    },
    
    faq: {
      title: 'Häufig Gestellte Fragen',
      questions: [
        {
          q: 'Wann wird meine Zahlung verarbeitet?',
          a: 'Zahlungen über iDEAL, Kreditkarte und PayPal werden sofort verarbeitet. Bei Banküberweisungen verarbeiten wir Ihre Bestellung, sobald wir die Zahlung erhalten haben.',
        },
        {
          q: 'Ist die Zahlung sicher?',
          a: 'Ja, alle unsere Zahlungen erfolgen über sichere SSL-Verbindungen und werden von zertifizierten Zahlungsanbietern verarbeitet.',
        },
        {
          q: 'Kann ich später bezahlen?',
          a: 'Geschäftskunden können nach Genehmigung auf Rechnung zahlen. Für Privatkunden bieten wir derzeit keine spätere Zahlung an.',
        },
      ],
    },
  },
  fr: {
    title: 'Méthodes de Paiement',
    subtitle: 'Payez en toute sécurité et facilement avec votre méthode de paiement préférée',
    
    available: {
      title: 'Méthodes de Paiement Disponibles',
      subtitle: 'Nous acceptons les méthodes de paiement suivantes',
    },
    
    methods: {
      ideal: {
        title: 'iDEAL',
        description: 'Payez directement et en toute sécurité via votre propre banque. La méthode de paiement la plus populaire aux Pays-Bas.',
      },
      creditcard: {
        title: 'Carte de Crédit',
        description: 'Payez avec Visa, Mastercard ou American Express. Vos données sont traitées en toute sécurité.',
      },
      paypal: {
        title: 'PayPal',
        description: 'Payez rapidement et en toute sécurité avec votre compte PayPal. Aucune carte de crédit requise.',
      },
      banktransfer: {
        title: 'Virement Bancaire',
        description: 'Virement sur notre compte bancaire. Votre commande sera expédiée après réception du paiement.',
      },
      invoice: {
        title: 'Paiement sur Facture',
        description: 'Pour les clients professionnels. Payez dans les 30 jours suivant la date de facture. Approbation requise.',
      },
      sofort: {
        title: 'Sofort',
        description: 'Virement en ligne direct via votre banque. Populaire en Allemagne et en Autriche.',
      },
    },
    
    security: {
      title: 'Sécurité',
      description: 'Tous nos paiements sont traités via des connexions SSL sécurisées. Nous ne stockons pas les données de carte de crédit. Les paiements sont traités par des fournisseurs de paiement certifiés qui répondent aux exigences de sécurité les plus élevées (PCI DSS Level 1).',
    },
    
    process: {
      title: 'Processus de Paiement',
      steps: [
        {
          title: 'Panier',
          description: 'Ajoutez des produits à votre panier et procédez au paiement.',
        },
        {
          title: 'Choisir le mode de paiement',
          description: 'Sélectionnez votre méthode de paiement préférée.',
        },
        {
          title: 'Finaliser le paiement',
          description: 'Suivez les instructions de la méthode de paiement choisie.',
        },
        {
          title: 'Confirmation',
          description: 'Vous recevrez immédiatement une confirmation de commande par e-mail.',
        },
      ],
    },
    
    businessCustomers: {
      title: 'Clients Professionnels',
      description: 'Êtes-vous un client professionnel avec des commandes régulières? Demandez un compte professionnel et bénéficiez de:',
      benefits: [
        'Paiement sur facture (30 jours de délai de paiement)',
        'Remises professionnelles exclusives',
        'Gestion de compte personnelle',
        'Récapitulatifs de factures mensuels',
        'Priorité pour les grandes commandes',
      ],
      cta: 'Demander un compte professionnel',
    },
    
    currencies: {
      title: 'Devise',
      description: 'Vous pouvez payer en Euro (EUR), Livre Sterling (GBP) ou Dollar Américain (USD). La devise peut être modifiée dans l\'en-tête de notre boutique en ligne.',
    },
    
    faq: {
      title: 'Questions Fréquemment Posées',
      questions: [
        {
          q: 'Quand mon paiement sera-t-il traité?',
          a: 'Les paiements via iDEAL, carte de crédit et PayPal sont traités immédiatement. Pour les virements bancaires, nous traitons votre commande dès réception du paiement.',
        },
        {
          q: 'Le paiement est-il sécurisé?',
          a: 'Oui, tous nos paiements sont effectués via des connexions SSL sécurisées et sont traités par des fournisseurs de paiement certifiés.',
        },
        {
          q: 'Puis-je payer plus tard?',
          a: 'Les clients professionnels peuvent payer sur facture après approbation. Nous n\'offrons actuellement pas de paiement ultérieur pour les clients privés.',
        },
      ],
    },
  },
};

export function Payment({ language }: PaymentProps) {
  const t = translations[language];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      {/* Available Payment Methods */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-1 sm:mb-2">[{t.available.title}]</h2>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[{t.available.subtitle}]</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {Object.entries(t.methods).map(([key, method]) => (
            <div key={key} className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white rounded-lg flex items-center justify-center mb-2 sm:mb-4">
                <CreditCard className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">[{method.title}]</h3>
              <p className="text-[10px] sm:text-xs text-black">[{method.description}]</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Shield className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.security.title}]</h2>
        </div>
        <p className="text-black text-xs sm:text-sm">[{t.security.description}]</p>
      </div>

      {/* Payment Process */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
          <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.process.title}]</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {t.process.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2 sm:mb-4 text-xs sm:text-base">
                {index + 1}
              </div>
              <h3 className="font-bold text-black mb-1 sm:mb-2 text-xs sm:text-sm">[{step.title}]</h3>
              <p className="text-[10px] sm:text-xs text-black">[{step.description}]</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Customers */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <Building className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
          <h2 className="text-base sm:text-xl font-bold text-black">[{t.businessCustomers.title}]</h2>
        </div>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[{t.businessCustomers.description}]</p>
        <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-6">
          {t.businessCustomers.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-black text-xs sm:text-sm">
              <span className="text-black mt-0.5">✓</span>
              <span>[{benefit}]</span>
            </li>
          ))}
        </ul>
        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-black/90 transition-colors font-medium text-xs sm:text-sm w-full sm:w-auto">
          [{t.businessCustomers.cta}]
        </button>
      </div>

      {/* Currencies */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8 mb-4 sm:mb-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-2 sm:mb-4">[{t.currencies.title}]</h2>
        <p className="text-black text-xs sm:text-sm">[{t.currencies.description}]</p>
      </div>

      {/* FAQ */}
      <div className="bg-white border-2 border-black rounded-lg p-3 sm:p-8">
        <h2 className="text-base sm:text-xl font-bold text-black mb-3 sm:mb-6">[{t.faq.title}]</h2>
        <div className="space-y-3 sm:space-y-6">
          {t.faq.questions.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-black mb-1 sm:mb-2 text-xs sm:text-sm">[{item.q}]</h3>
              <p className="text-black text-xs sm:text-sm">[{item.a}]</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}