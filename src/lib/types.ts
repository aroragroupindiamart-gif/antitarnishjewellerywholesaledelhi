export interface Category {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  basePrice: number;
  tier2Price: number;
  masterPrice: number;
  mrpRange: string;
  image: string;
  topKeywords: string[];
}

export interface DelhiLocation {
  id: string;
  name: string;
  slug: string;
  hubType: string;
  district: string;
  nearestMetro: string;
  traditionalIssues: string;
  aroraAdvantage: string;
  comparisonHighlight: string;
  distanceFromTagoreGarden: string;
  marketVibe: string;
}

export interface Material {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  grade: string;
  features: string[];
  longevity: string;
}

export interface ResellerIntent {
  id: string;
  name: string;
  slug: string;
  targetPrice: string;
  idealResale: string;
  marginMultiple: string;
  description: string;
  targetAudience: string;
}

export interface Product {
  sku: string;
  chatcartId?: number;
  name: string;
  // null when the real Chatcart category has no site silo (sets, armlets,
  // body chains, anklets, watches) — homepage shows these, category pages don't.
  category: string | null;
  material: string;
  materialLabel: string;
  materialShort: string;
  wholesalePrice: number;
  // No MRP in the real Chatcart catalogue — never invent one. Present only
  // when a real MRP is supplied.
  mrp?: number;
  image: string;
  tags: string[];
  stock: string;
}

export interface ProgrammaticPageData {
  categorySlug: string;
  slug: string;
  type: 'location' | 'material' | 'reseller-intent';
  category: string;
  categoryShort: string;
  targetEntity: string;
  h1: string;
  subheadline: string;
  title: string;
  description: string;
  pricing: {
    tier1: { label: string; price: string; margin: string };
    tier2: { label: string; price: string; margin: string };
    tier3: { label: string; price: string; margin: string };
  };
  comparison?: {
    locationName: string;
    traditionalIssue: string;
    aroraAdvantage: string;
    highlight: string;
    distance: string;
  };
  materialSpec?: {
    name: string;
    grade: string;
    description: string;
    features: string[];
    longevity: string;
  };
  intentData?: {
    name: string;
    targetPrice: string;
    idealResale: string;
    marginMultiple: string;
    targetAudience: string;
  };
  faqs: Array<{ q: string; a: string }>;
}

export interface MarketGuide {
  slug: string;
  name: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string;
  painPoints: string[];
  aroraAlternative: string;
  metroDirections: string;
  marketHours: string;
  tips: string[];
}
