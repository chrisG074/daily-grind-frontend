import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

type Language = 'nl' | 'en' | 'de' | 'fr';
type Category = 'country' | 'corporate' | 'accessories';

interface FilterSidebarProps {
  filters: {
    attachmentMethod: string[];
    country: string[];
    material: string[];
  };
  onFiltersChange: (filters: any) => void;
  language: Language;
  category: Category;
}

const translations = {
  nl: {
    filters: 'Filters',
    attachmentMethod: 'Bevestigingsmethode',
    country: 'Land',
    material: 'Materiaal',
    hooks: 'Haken',
    cord: 'Koord',
    tunnel: 'Tunnel',
    eyelet: 'Oogjes',
    glossPoly: '110g/m² Gloss Poly',
    nauticalPoly: '115g/m² Nautical Poly',
    premiumPoly: '150g/m² Premium Poly',
    clearFilters: 'Wis filters',
    notApplicable: 'Niet van toepassing voor deze categorie',
  },
  en: {
    filters: 'Filters',
    attachmentMethod: 'Attachment Method',
    country: 'Country',
    material: 'Material',
    hooks: 'Hooks',
    cord: 'Cord',
    tunnel: 'Tunnel',
    eyelet: 'Eyelets',
    glossPoly: '110g/m² Gloss Poly',
    nauticalPoly: '115g/m² Nautical Poly',
    premiumPoly: '150g/m² Premium Poly',
    clearFilters: 'Clear filters',
    notApplicable: 'Not applicable for this category',
  },
  de: {
    filters: 'Filter',
    attachmentMethod: 'Befestigungsmethode',
    country: 'Land',
    material: 'Material',
    hooks: 'Haken',
    cord: 'Schnur',
    tunnel: 'Tunnel',
    eyelet: 'Ösen',
    glossPoly: '110g/m² Gloss Poly',
    nauticalPoly: '115g/m² Nautical Poly',
    premiumPoly: '150g/m² Premium Poly',
    clearFilters: 'Filter löschen',
    notApplicable: 'Nicht anwendbar für diese Kategorie',
  },
  fr: {
    filters: 'Filtres',
    attachmentMethod: 'Méthode de Fixation',
    country: 'Pays',
    material: 'Matériau',
    hooks: 'Crochets',
    cord: 'Corde',
    tunnel: 'Tunnel',
    eyelet: 'Œillets',
    glossPoly: '110g/m² Gloss Poly',
    nauticalPoly: '115g/m² Nautical Poly',
    premiumPoly: '150g/m² Premium Poly',
    clearFilters: 'Effacer les filtres',
    notApplicable: 'Non applicable pour cette catégorie',
  },
};

const countries = [
  'Netherlands', 'Belgium', 'Germany', 'France', 'United Kingdom',
  'Spain', 'Italy', 'USA', 'Canada', 'Australia'
];

const materials = ['glossPoly', 'nauticalPoly', 'premiumPoly'];

export function FilterSidebar({ filters, onFiltersChange, language, category }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState({
    attachment: true,
    country: true,
    material: true,
  });

  const t = translations[language];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (type: keyof typeof filters, value: string) => {
    const current = filters[type];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onFiltersChange({ ...filters, [type]: updated });
  };

  const clearFilters = () => {
    onFiltersChange({
      attachmentMethod: [],
      country: [],
      material: [],
    });
  };

  const hasActiveFilters = 
    filters.attachmentMethod.length > 0 ||
    filters.country.length > 0 ||
    filters.material.length > 0;

  return (
    <div className="w-64 bg-white rounded-lg border-2 border-border p-4 h-fit sticky top-24 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg text-foreground">{t.filters}</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary hover:underline"
          >
            {t.clearFilters}
          </button>
        )}
      </div>

      {/* Attachment Method */}
      <div className="border-b-2 border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection('attachment')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-semibold text-foreground">{t.attachmentMethod}</span>
          {openSections.attachment ? (
            <ChevronUp className="w-4 h-4 text-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-foreground" />
          )}
        </button>
        {openSections.attachment && (
          <div className="space-y-2">
            {['hooks', 'cord', 'tunnel', 'eyelet'].map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.attachmentMethod.includes(method)}
                  onChange={() => toggleFilter('attachmentMethod', method)}
                  className="w-4 h-4 accent-primary rounded border-border focus:ring-ring"
                />
                <span className="text-sm text-foreground">{t[method as keyof typeof t]}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Country Filter - Always present but only functional for country category */}
      <div className="border-b-2 border-border pb-4 mb-4 min-h-[280px]">
        <button
          onClick={() => toggleSection('country')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-semibold text-foreground">{t.country}</span>
          {openSections.country ? (
            <ChevronUp className="w-4 h-4 text-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-foreground" />
          )}
        </button>
        {openSections.country && (
          <div className="space-y-2">
            {category === 'country' ? (
              countries.map((country) => (
                <label key={country} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.country.includes(country)}
                    onChange={() => toggleFilter('country', country)}
                    className="w-4 h-4 accent-primary rounded border-border focus:ring-ring"
                  />
                  <span className="text-sm text-foreground">{country}</span>
                </label>
              ))
            ) : (
              <p className="text-sm text-muted-foreground italic">{t.notApplicable}</p>
            )}
          </div>
        )}
      </div>

      {/* Material */}
      <div>
        <button
          onClick={() => toggleSection('material')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-semibold text-foreground">{t.material}</span>
          {openSections.material ? (
            <ChevronUp className="w-4 h-4 text-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-foreground" />
          )}
        </button>
        {openSections.material && (
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.material.includes(material)}
                  onChange={() => toggleFilter('material', material)}
                  className="w-4 h-4 accent-primary rounded border-border focus:ring-ring"
                />
                <span className="text-sm text-foreground">{t[material as keyof typeof t]}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}