import { MetadataRoute } from "next";
import categoriesData from "@/data/categories.json";
import locationsData from "@/data/locations.json";
import materialsData from "@/data/materials.json";
import resellerIntentsData from "@/data/reseller-intents.json";
import marketsData from "@/data/delhi-markets.json";
import { DRIP_CONFIG, isDayUnlocked } from "@/config/dripFeed";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://antitarnishjewellerywholesaledelhi.com";
  const now = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // ==========================================
  // DAY 1: CORE HOMEPAGE & CONVERSION PAGES (6 pages)
  // ==========================================
  if (isDayUnlocked(1, now)) {
    // 1. Homepage
    sitemapEntries.push({
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    });

    // 2. 5 Core Conversion Pages
    const corePages = ["/warehouse-visit", "/about", "/contact", "/terms", "/faq"];
    for (const page of corePages) {
      sitemapEntries.push({
        url: `${baseUrl}${page}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: page === "/warehouse-visit" ? 0.9 : 0.7,
      });
    }
  }

  // ==========================================
  // DAY 2: 8 CATEGORY PILLARS (8 pages)
  // ==========================================
  if (isDayUnlocked(2, now)) {
    for (const cat of categoriesData) {
      sitemapEntries.push({
        url: `${baseUrl}/wholesale/${cat.slug}`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.9,
      });
    }
  }

  // ==========================================
  // DAY 3: 7 DELHI MARKET PILLAR GUIDES (7 pages)
  // ==========================================
  if (isDayUnlocked(3, now)) {
    for (const market of marketsData) {
      sitemapEntries.push({
        url: `${baseUrl}/delhi-markets/${market.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  // ==========================================
  // DAYS 4–11: DELHI WHOLESALE HUBS (8 pages/day × 8 hubs = 64 pages)
  // ==========================================
  const hubDayMap: Record<string, number> = {
    "sadar-bazar": 4,
    "rui-mandi": 5,
    "chandni-chowk": 6,
    "karol-bagh": 7,
    "tagore-garden-west-delhi": 8,
    "lajpat-nagar": 9,
    "pitampura": 10,
    "connaught-place": 11,
  };

  for (const loc of locationsData) {
    const unlockDay = hubDayMap[loc.slug] || 4;
    if (isDayUnlocked(unlockDay, now)) {
      for (const cat of categoriesData) {
        sitemapEntries.push({
          url: `${baseUrl}/wholesale/${cat.slug}/${loc.slug}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    }
  }

  // ==========================================
  // DAYS 12–15: MATERIAL SPECIFICATIONS (8 pages/day × 4 specs = 32 pages)
  // ==========================================
  const materialDayMap: Record<string, number> = {
    "316l-stainless-steel": 12,
    "18k-gold-pvd-coated": 13,
    "waterproof-korean": 14,
    "hypoallergenic-brass": 15,
  };

  for (const mat of materialsData) {
    const unlockDay = materialDayMap[mat.slug] || 12;
    if (isDayUnlocked(unlockDay, now)) {
      for (const cat of categoriesData) {
        sitemapEntries.push({
          url: `${baseUrl}/wholesale/${cat.slug}/${mat.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.75,
        });
      }
    }
  }

  // ==========================================
  // DAYS 16–19: RESELLER INTENT TIERS (8 pages/day × 4 intents = 32 pages)
  // ==========================================
  const intentDayMap: Record<string, number> = {
    "under-49": 16,
    "under-99": 17,
    "starter-pack-mov-3000": 18,
    "instagram-reseller-bundle": 19,
  };

  for (const intent of resellerIntentsData) {
    const unlockDay = intentDayMap[intent.slug] || 16;
    if (isDayUnlocked(unlockDay, now)) {
      for (const cat of categoriesData) {
        sitemapEntries.push({
          url: `${baseUrl}/wholesale/${cat.slug}/${intent.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.75,
        });
      }
    }
  }

  return sitemapEntries;
}
