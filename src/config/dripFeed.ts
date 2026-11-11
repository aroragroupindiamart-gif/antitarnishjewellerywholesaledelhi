/**
 * Drip-Feeding Engine Configuration for antitarnishjewellerywholesaledelhi.com
 * 
 * Strategy:
 * Avoid Google's thin-EMD / doorway penalty by pacing programmatic indexation
 * at a natural rate of ~7-8 pages per day over a 19-day rollout schedule.
 */

export interface DripScheduleStage {
  dayNumber: number; // Day offset (0-indexed or 1-indexed)
  stageName: string;
  category: "core" | "location-hub" | "material-spec" | "reseller-intent";
  pageCount: number;
  description: string;
}

export const DRIP_CONFIG = {
  // Toggle drip feeding. If false, all 149 pages appear in sitemap immediately.
  enabled: process.env.ENABLE_DRIP_FEED === "true" || true,

  // Launch reference date (YYYY-MM-DD)
  launchDate: "2026-11-11",

  // Target pace
  defaultPacePerDay: 8,

  // Total pages
  totalPages: 149,

  // Schedule breakdown across 19 days
  schedule: [
    // Phase 1: Foundation Authority (Days 1–3)
    { dayNumber: 1, stageName: "Core Foundation", category: "core", pageCount: 6, description: "Homepage + 5 Conversion Pages (Showroom Visit, About, Contact, Terms, FAQ)" },
    { dayNumber: 2, stageName: "Category Pillars", category: "core", pageCount: 8, description: "All 8 Category Pillar Pages (Rings, Necklaces, Hoops, Kada, Pendants, Korean, Men's, Evil Eye)" },
    { dayNumber: 3, stageName: "Delhi Market Sourcing Guides", category: "core", pageCount: 7, description: "7 Physical Market Guides (Sadar Bazar, Rui Mandi, Karol Bagh, Tagore Garden Hub, etc.)" },

    // Phase 2: Delhi Wholesale Hubs (Days 4–11, 8 pages/day)
    { dayNumber: 4, stageName: "Sadar Bazar Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Sadar Bazar Wholesale" },
    { dayNumber: 5, stageName: "Rui Mandi Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Rui Mandi Jewellery Alley" },
    { dayNumber: 6, stageName: "Chandni Chowk Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Chandni Chowk / Dariba Kalan" },
    { dayNumber: 7, stageName: "Karol Bagh Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Karol Bagh Bank Street" },
    { dayNumber: 8, stageName: "Tagore Garden HQ Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Tagore Garden Extension (Arora Group HQ)" },
    { dayNumber: 9, stageName: "Lajpat Nagar Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Lajpat Nagar Central Market" },
    { dayNumber: 10, stageName: "Pitampura Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Pitampura & Netaji Subhash Place" },
    { dayNumber: 11, stageName: "Connaught Place Hubs", category: "location-hub", pageCount: 8, description: "8 Categories × Connaught Place / Barakhamba" },

    // Phase 3: Material Specs & Reseller Intent Tiers (Days 12–19, 8 pages/day)
    { dayNumber: 12, stageName: "316L Stainless Steel Specs", category: "material-spec", pageCount: 8, description: "8 Categories × 316L Medical Grade Surgical Steel" },
    { dayNumber: 13, stageName: "18K Gold PVD Coating Specs", category: "material-spec", pageCount: 8, description: "8 Categories × Real 18K Vacuum PVD Ion Plating" },
    { dayNumber: 14, stageName: "Korean Waterproof Specs", category: "material-spec", pageCount: 8, description: "8 Categories × Waterproof Korean Minimalist Alloy" },
    { dayNumber: 15, stageName: "Hypoallergenic Brass Specs", category: "material-spec", pageCount: 8, description: "8 Categories × Eco Demi-Fine Brass" },
    { dayNumber: 16, stageName: "Under ₹49 Reseller Intent", category: "reseller-intent", pageCount: 8, description: "8 Categories × Under ₹49 Fast Mover Packs" },
    { dayNumber: 17, stageName: "Under ₹99 Reseller Intent", category: "reseller-intent", pageCount: 8, description: "8 Categories × Under ₹99 Viral Bestsellers" },
    { dayNumber: 18, stageName: "₹3,000 Low MOV Starter", category: "reseller-intent", pageCount: 8, description: "8 Categories × Flat ₹3,000 Trial Starter Bundles" },
    { dayNumber: 19, stageName: "Instagram Boutique Bundle", category: "reseller-intent", pageCount: 8, description: "8 Categories × High-Margin Aesthetic Reel Packs" },
  ] as DripScheduleStage[],
};

/**
 * Calculates how many days have passed since launch
 */
export function getDaysSinceLaunch(referenceDate: Date = new Date()): number {
  const launch = new Date(DRIP_CONFIG.launchDate);
  const diffTime = referenceDate.getTime() - launch.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1-indexed
  return Math.max(1, diffDays);
}

/**
 * Checks whether a particular batch day is currently unlocked
 */
export function isDayUnlocked(dayNumber: number, referenceDate: Date = new Date()): boolean {
  if (!DRIP_CONFIG.enabled) return true;
  const currentDay = getDaysSinceLaunch(referenceDate);
  return currentDay >= dayNumber;
}
