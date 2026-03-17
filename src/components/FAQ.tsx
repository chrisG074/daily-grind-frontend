import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type Language = 'nl' | 'en' | 'de' | 'fr';

interface FAQProps {
  language: Language;
}

const translations = {
  nl: {
    title: 'Veelgestelde Vragen',
    subtitle: 'Vind snel antwoorden op de meest gestelde vragen',
    categories: {
      ordering: 'Bestellen',
      shipping: 'Verzending',
      products: 'Producten',
      returns: 'Retourneren',
    },
    faqs: {
      ordering: [
        {
          question: 'Hoe kan ik een vlag bestellen?',
          answer: 'U kunt eenvoudig een vlag bestellen door het gewenste product te selecteren, uw voorkeuren aan te geven (zoals afmetingen en materiaal), en het product toe te voegen aan uw winkelwagen. Vervolgens gaat u naar de kassa om uw bestelling af te ronden.',
        },
        {
          question: 'Kan ik mijn eigen logo uploaden?',
          answer: 'Ja, bij bedrijfsvlaggen kunt u uw eigen logo uploaden via onze vlag-configurator. Upload een bestand in hoge resolutie (minimaal 300 DPI) in PNG, JPG of PDF formaat voor het beste resultaat.',
        },
        {
          question: 'Welke betaalmethoden accepteren jullie?',
          answer: 'Wij accepteren iDEAL, creditcards (Visa, Mastercard, American Express), PayPal, bankoverschrijving en voor zakelijke klanten ook betaling op factuur (na goedkeuring).',
        },
      ],
      shipping: [
        {
          question: 'Wat zijn de verzendkosten?',
          answer: 'Verzendkosten bedragen €8,95 voor bestellingen onder €75. Bij bestellingen boven €75 verzenden wij gratis binnen Nederland. Voor internationale verzending gelden andere tarieven.',
        },
        {
          question: 'Hoe lang duurt de levertijd?',
          answer: 'Standaard vlaggen worden binnen 2-3 werkdagen geleverd. Custom vlaggen met logo hebben een levertijd van 5-7 werkdagen. Express levering is mogelijk tegen meerprijs.',
        },
        {
          question: 'Leveren jullie internationaal?',
          answer: 'Ja, wij verzenden naar alle landen binnen de EU en daarbuiten. De verzendkosten en levertijd zijn afhankelijk van de bestemming. Dit wordt berekend tijdens het afrekenen.',
        },
      ],
      products: [
        {
          question: 'Welke materialen zijn beschikbaar?',
          answer: 'Wij bieden verschillende materialen aan: 110g/m² Gloss Poly (glanzend, geschikt voor binnen en buiten), 115g/m² Nautical Poly (extra sterk, weerbestendig), en 160g/m² Knitted Polyester (luxe, premium kwaliteit).',
        },
        {
          question: 'Wat is het verschil tussen de bevestigingsmethoden?',
          answer: 'Haken: Metalen haken voor snelle bevestiging aan een vlaggenmast. Koord: Traditioneel touw voor bevestiging, zeer sterk. Tunnel: Een tunnel aan de zijkant waar een mast doorheen kan worden geschoven.',
        },
        {
          question: 'Kunnen vlaggen gewassen worden?',
          answer: 'Ja, onze vlaggen kunnen op 30 graden worden gewassen. Wij raden aan om de vlag te laten drogen zonder centrifuge en niet te strijken om de kleuren optimaal te behouden.',
        },
      ],
      returns: [
        {
          question: 'Wat is het retourbeleid?',
          answer: 'U heeft 30 dagen bedenktijd op standaard vlaggen. Custom vlaggen met logo kunnen niet worden geretourneerd tenzij er sprake is van een productie- of leveringsfout.',
        },
        {
          question: 'Hoe kan ik een product retourneren?',
          answer: 'Neem contact op met onze klantenservice via info@vlagenwimpel.nl. U ontvangt een retourlabel en instructies. Het product moet ongebruikt zijn en in de originele verpakking worden geretourneerd.',
        },
        {
          question: 'Wanneer krijg ik mijn geld terug?',
          answer: 'Na ontvangst en controle van het geretourneerde product wordt het bedrag binnen 5-7 werkdagen teruggestort op de rekening waarmee u heeft betaald.',
        },
      ],
    },
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find quick answers to the most common questions',
    categories: {
      ordering: 'Ordering',
      shipping: 'Shipping',
      products: 'Products',
      returns: 'Returns',
    },
    faqs: {
      ordering: [
        {
          question: 'How can I order a flag?',
          answer: 'You can easily order a flag by selecting the desired product, indicating your preferences (such as dimensions and material), and adding the product to your shopping cart. Then proceed to checkout to complete your order.',
        },
        {
          question: 'Can I upload my own logo?',
          answer: 'Yes, for corporate flags you can upload your own logo via our flag configurator. Upload a high-resolution file (minimum 300 DPI) in PNG, JPG or PDF format for the best result.',
        },
        {
          question: 'Which payment methods do you accept?',
          answer: 'We accept credit cards (Visa, Mastercard, American Express), PayPal, bank transfer and for business customers also payment by invoice (after approval).',
        },
      ],
      shipping: [
        {
          question: 'What are the shipping costs?',
          answer: 'Shipping costs are €8.95 for orders under €75. For orders over €75 we ship free within the Netherlands. Different rates apply for international shipping.',
        },
        {
          question: 'What is the delivery time?',
          answer: 'Standard flags are delivered within 2-3 working days. Custom flags with logo have a delivery time of 5-7 working days. Express delivery is possible at an additional cost.',
        },
        {
          question: 'Do you deliver internationally?',
          answer: 'Yes, we ship to all countries within the EU and beyond. Shipping costs and delivery time depend on the destination. This is calculated during checkout.',
        },
      ],
      products: [
        {
          question: 'Which materials are available?',
          answer: 'We offer various materials: 110g/m² Gloss Poly (glossy, suitable for indoor and outdoor), 115g/m² Nautical Poly (extra strong, weather resistant), and 160g/m² Knitted Polyester (luxury, premium quality).',
        },
        {
          question: 'What is the difference between attachment methods?',
          answer: 'Hooks: Metal hooks for quick attachment to a flagpole. Cord: Traditional rope for attachment, very strong. Tunnel: A tunnel on the side through which a pole can be inserted.',
        },
        {
          question: 'Can flags be washed?',
          answer: 'Yes, our flags can be washed at 30 degrees. We recommend letting the flag dry without spin cycle and not ironing to maintain optimal colors.',
        },
      ],
      returns: [
        {
          question: 'What is the return policy?',
          answer: 'You have 30 days cooling-off period on standard flags. Custom flags with logo cannot be returned unless there is a production or delivery error.',
        },
        {
          question: 'How can I return a product?',
          answer: 'Contact our customer service at info@flagandpennant.com. You will receive a return label and instructions. The product must be unused and returned in its original packaging.',
        },
        {
          question: 'When will I get my money back?',
          answer: 'After receipt and inspection of the returned product, the amount will be refunded within 5-7 working days to the account with which you paid.',
        },
      ],
    },
  },
  de: {
    title: 'Häufig Gestellte Fragen',
    subtitle: 'Finden Sie schnell Antworten auf die häufigsten Fragen',
    categories: {
      ordering: 'Bestellung',
      shipping: 'Versand',
      products: 'Produkte',
      returns: 'Rücksendungen',
    },
    faqs: {
      ordering: [
        {
          question: 'Wie kann ich eine Flagge bestellen?',
          answer: 'Sie können einfach eine Flagge bestellen, indem Sie das gewünschte Produkt auswählen, Ihre Präferenzen angeben (wie Abmessungen und Material) und das Produkt in Ihren Warenkorb legen. Anschließend gehen Sie zur Kasse, um Ihre Bestellung abzuschließen.',
        },
        {
          question: 'Kann ich mein eigenes Logo hochladen?',
          answer: 'Ja, bei Firmenflaggen können Sie Ihr eigenes Logo über unseren Flaggen-Konfigurator hochladen. Laden Sie eine hochauflösende Datei (mindestens 300 DPI) im PNG-, JPG- oder PDF-Format für das beste Ergebnis hoch.',
        },
        {
          question: 'Welche Zahlungsmethoden akzeptieren Sie?',
          answer: 'Wir akzeptieren Kreditkarten (Visa, Mastercard, American Express), PayPal, Banküberweisung und für Geschäftskunden auch Zahlung auf Rechnung (nach Genehmigung).',
        },
      ],
      shipping: [
        {
          question: 'Was sind die Versandkosten?',
          answer: 'Die Versandkosten betragen €8,95 für Bestellungen unter €75. Bei Bestellungen über €75 versenden wir kostenlos innerhalb der Niederlande. Für internationalen Versand gelten andere Tarife.',
        },
        {
          question: 'Wie lange dauert die Lieferzeit?',
          answer: 'Standardflaggen werden innerhalb von 2-3 Werktagen geliefert. Custom-Flaggen mit Logo haben eine Lieferzeit von 5-7 Werktagen. Express-Lieferung ist gegen Aufpreis möglich.',
        },
        {
          question: 'Liefern Sie international?',
          answer: 'Ja, wir versenden in alle Länder innerhalb der EU und darüber hinaus. Die Versandkosten und Lieferzeit hängen vom Zielort ab. Dies wird während des Bestellvorgangs berechnet.',
        },
      ],
      products: [
        {
          question: 'Welche Materialien sind verfügbar?',
          answer: 'Wir bieten verschiedene Materialien an: 110g/m² Gloss Poly (glänzend, für innen und außen geeignet), 115g/m² Nautical Poly (extra stark, wetterbeständig) und 160g/m² Knitted Polyester (Luxus, Premium-Qualität).',
        },
        {
          question: 'Was ist der Unterschied zwischen den Befestigungsmethoden?',
          answer: 'Haken: Metallhaken für schnelle Befestigung an einem Fahnenmast. Kordel: Traditionelles Seil zur Befestigung, sehr stark. Tunnel: Ein Tunnel an der Seite, durch den ein Mast geschoben werden kann.',
        },
        {
          question: 'Können Flaggen gewaschen werden?',
          answer: 'Ja, unsere Flaggen können bei 30 Grad gewaschen werden. Wir empfehlen, die Flagge ohne Schleudergang trocknen zu lassen und nicht zu bügeln, um optimale Farben zu erhalten.',
        },
      ],
      returns: [
        {
          question: 'Was ist die Rückgaberichtlinie?',
          answer: 'Sie haben 30 Tage Bedenkzeit bei Standardflaggen. Custom-Flaggen mit Logo können nicht zurückgegeben werden, es sei denn, es liegt ein Produktions- oder Lieferfehler vor.',
        },
        {
          question: 'Wie kann ich ein Produkt zurücksenden?',
          answer: 'Kontaktieren Sie unseren Kundenservice unter info@flaggeundwimpel.de. Sie erhalten ein Rücksendeetikett und Anweisungen. Das Produkt muss unbenutzt sein und in der Originalverpackung zurückgesendet werden.',
        },
        {
          question: 'Wann bekomme ich mein Geld zurück?',
          answer: 'Nach Erhalt und Prüfung des zurückgesendeten Produkts wird der Betrag innerhalb von 5-7 Werktagen auf das Konto erstattet, mit dem Sie bezahlt haben.',
        },
      ],
    },
  },
  fr: {
    title: 'Questions Fréquemment Posées',
    subtitle: 'Trouvez rapidement des réponses aux questions les plus courantes',
    categories: {
      ordering: 'Commande',
      shipping: 'Livraison',
      products: 'Produits',
      returns: 'Retours',
    },
    faqs: {
      ordering: [
        {
          question: 'Comment puis-je commander un drapeau?',
          answer: 'Vous pouvez facilement commander un drapeau en sélectionnant le produit souhaité, en indiquant vos préférences (telles que les dimensions et le matériau) et en ajoutant le produit à votre panier. Ensuite, procédez au paiement pour finaliser votre commande.',
        },
        {
          question: 'Puis-je télécharger mon propre logo?',
          answer: 'Oui, pour les drapeaux d\'entreprise, vous pouvez télécharger votre propre logo via notre configurateur de drapeaux. Téléchargez un fichier haute résolution (minimum 300 DPI) au format PNG, JPG ou PDF pour obtenir le meilleur résultat.',
        },
        {
          question: 'Quels modes de paiement acceptez-vous?',
          answer: 'Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, virement bancaire et pour les clients professionnels également le paiement sur facture (après approbation).',
        },
      ],
      shipping: [
        {
          question: 'Quels sont les frais de livraison?',
          answer: 'Les frais de livraison sont de €8,95 pour les commandes de moins de €75. Pour les commandes de plus de €75, nous livrons gratuitement aux Pays-Bas. Des tarifs différents s\'appliquent pour la livraison internationale.',
        },
        {
          question: 'Quel est le délai de livraison?',
          answer: 'Les drapeaux standard sont livrés sous 2-3 jours ouvrables. Les drapeaux personnalisés avec logo ont un délai de livraison de 5-7 jours ouvrables. La livraison express est possible moyennant un supplément.',
        },
        {
          question: 'Livrez-vous à l\'international?',
          answer: 'Oui, nous expédions dans tous les pays de l\'UE et au-delà. Les frais de livraison et le délai de livraison dépendent de la destination. Ceci est calculé lors du paiement.',
        },
      ],
      products: [
        {
          question: 'Quels matériaux sont disponibles?',
          answer: 'Nous proposons différents matériaux: 110g/m² Gloss Poly (brillant, adapté pour l\'intérieur et l\'extérieur), 115g/m² Nautical Poly (extra résistant, résistant aux intempéries) et 160g/m² Knitted Polyester (luxe, qualité premium).',
        },
        {
          question: 'Quelle est la différence entre les méthodes de fixation?',
          answer: 'Crochets: Crochets métalliques pour une fixation rapide à un mât. Corde: Corde traditionnelle pour la fixation, très solide. Tunnel: Un tunnel sur le côté à travers lequel un mât peut être inséré.',
        },
        {
          question: 'Les drapeaux peuvent-ils être lavés?',
          answer: 'Oui, nos drapeaux peuvent être lavés à 30 degrés. Nous recommandons de laisser sécher le drapeau sans essorage et de ne pas repasser pour conserver des couleurs optimales.',
        },
      ],
      returns: [
        {
          question: 'Quelle est la politique de retour?',
          answer: 'Vous disposez d\'un délai de réflexion de 30 jours sur les drapeaux standard. Les drapeaux personnalisés avec logo ne peuvent pas être retournés sauf en cas d\'erreur de production ou de livraison.',
        },
        {
          question: 'Comment puis-je retourner un produit?',
          answer: 'Contactez notre service client à info@drapeauxetfanions.fr. Vous recevrez une étiquette de retour et des instructions. Le produit doit être inutilisé et retourné dans son emballage d\'origine.',
        },
        {
          question: 'Quand serai-je remboursé?',
          answer: 'Après réception et inspection du produit retourné, le montant sera remboursé sous 5-7 jours ouvrables sur le compte avec lequel vous avez payé.',
        },
      ],
    },
  },
};

export function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<string | null>('ordering-0');
  const t = translations[language];

  const toggleQuestion = (categoryKey: string, index: number) => {
    const key = `${categoryKey}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 sm:py-12">
      <div className="mb-6 sm:mb-12 text-center">
        <h1 className="text-xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">[{t.title}]</h1>
        <p className="text-sm sm:text-base text-black px-4">[{t.subtitle}]</p>
      </div>

      <div className="space-y-4 sm:space-y-8">
        {Object.entries(t.categories).map(([categoryKey, categoryTitle]) => (
          <div key={categoryKey} className="bg-white border-2 border-black rounded-lg p-3 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-6">[{categoryTitle}]</h2>
            <div className="space-y-2 sm:space-y-4">
              {t.faqs[categoryKey as keyof typeof t.faqs].map((faq: any, index: number) => {
                const key = `${categoryKey}-${index}`;
                const isOpen = openIndex === key;

                return (
                  <div key={index} className="border-2 border-black rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(categoryKey, index)}
                      className="w-full flex items-center justify-between p-2.5 sm:p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-black pr-2 sm:pr-4 text-xs sm:text-sm">[{faq.question}]</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-2.5 sm:p-4 bg-white border-t-2 border-black">
                        <p className="text-black text-xs sm:text-sm">[{faq.answer}]</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-12 bg-white border-2 border-black rounded-lg p-4 sm:p-8 text-center">
        <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-4">[Nog vragen?]</h3>
        <p className="text-black mb-3 sm:mb-6 text-xs sm:text-sm">[Neem contact op met onze klantenservice voor persoonlijk advies]</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <a
            href="mailto:info@vlagenwimpel.nl"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors font-medium text-xs sm:text-sm"
          >
            [Email ons]
          </a>
          <a
            href="tel:+31201234567"
            className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-black text-black rounded-lg hover:bg-white transition-colors font-medium text-xs sm:text-sm"
          >
            [Bel ons]
          </a>
        </div>
      </div>
    </div>
  );
}