import { MetadataRoute } from "next";
import categoriesData from "@/data/categories.json";
import locationsData from "@/data/locations.json";
import materialsData from "@/data/materials.json";
import resellerIntentsData from "@/data/reseller-intents.json";
import marketsData from "@/data/delhi-markets.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://antitarnishjewellerywholesaledelhi.com";
  const now = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // ==========================================
  // BATCH 1: CORE 22 PAGES (High Priority Launch)
  // Homepage + 8 Category Pillars + 7 Market Guides + 6 Conversion Pages
  // ==========================================

  // 1. Homepage
  sitemapEntries.push({
    url: `${baseUrl}/`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  });

  // 2. 8 Category Pillars
  for (const cat of categoriesData) {
    sitemapEntries.push({
      url: `${baseUrl}/wholesale/${cat.slug}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    });
  }

  // 3. 6 Core Conversion Pages
  const corePages = ["/sample-box", "/warehouse-visit", "/about", "/contact", "/terms", "/faq"];
  for (const page of corePages) {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: page === "/sample-box" || page === "/warehouse-visit" ? 0.9 : 0.7,
    });
  }

  // 4. 7 Delhi Market Pillar Guides
  for (const market of marketsData) {
    sitemapEntries.push({
      url: `${baseUrl}/delhi-markets/${market.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  // ==========================================
  // BATCH 2: 64 MARKET HUB PAGES (Regional Longtail Traffic)
  // 8 Categories x 8 Delhi Wholesale Hubs
  // ==========================================
  for (const cat of categoriesData) {
    for (const loc of locationsData) {
      sitemapEntries.push({
        url: `${baseUrl}/wholesale/${cat.slug}/${loc.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // ==========================================
  // BATCH 3: 64 SPECIFICATION & RESELLER INTENT PAGES
  // 32 Material Specs (316L, 18K PVD, Korean, Brass)
  // 32 Reseller Price Points (Under 49, Under 99, MOV 3000, IG Bundle)
  // ==========================================
  for (const cat of categoriesData) {
    // 32 Category x Material Pages
    for (const mat of materialsData) {
      sitemapEntries.push({
        url: `${baseUrl}/wholesale/${cat.slug}/${mat.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }

    // 32 Category x Reseller Intent Pages
    for (const intent of resellerIntentsData) {
      sitemapEntries.push({
        url: `${baseUrl}/wholesale/${cat.slug}/${intent.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return sitemapEntries;
}
