// Fetches the LIVE Arora Group Wholesale catalogue from Chatcart's public
// storefront API and writes it into src/data/products.json in the shape
// ProductCatalogFeed expects. Also refreshes the 8 category card images in
// src/data/categories.json with real product photos (the old Unsplash URLs
// included a dead 404 for bracelets-kada).
//
// Run manually:   npm run fetch:catalogue
// Runs automatically before every build (package.json "prebuild").
// If chatcart.in is unreachable it KEEPS the committed products.json and
// exits 0, so a catalogue outage can never break a deploy.
//
// Source (public, no auth): https://chatcart.in/api/public/sellers/aroragroupwholesale
//   GET /            -> { storeName, tagline, whatsappNumber, bannerImageUrl }
//   GET /products    -> [{ id, categoryId, name, price, status, images: [{ url: "/objects/uploads/<uuid>" }] }]
//   GET /categories  -> [{ id, name }]
// Image URLs are rewritten /objects/... -> https://chatcart.in/api/public/img/...
// (same rewrite the Chatcart storefront itself applies).

import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SELLER = "aroragroupwholesale";
const API = `https://chatcart.in/api/public/sellers/${SELLER}`;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PRODUCTS_OUT = path.join(ROOT, "src/data/products.json");
const CATEGORIES_PATH = path.join(ROOT, "src/data/categories.json");
const STORE_OUT = path.join(ROOT, "src/data/store.json");

// Real Chatcart categoryId -> site category slug. Categories with no
// matching site silo (sets, armlets, body chains, anklets, watches) are
// left unmapped: they still appear in the homepage feed (which shows the
// whole catalogue) but have no dedicated category page. Men's jewellery
// and evil-eye have no real products at all, so those pages fall back to
// the first 8 catalogue products (see [slug]/page.tsx).
const CATEGORY_MAP = {
  5: "rings", // Anti Tarnish Rings (316l SS)
  93: "rings", // Ring Combos (Copper - Anti Tarnish)
  6: "pendants", // Anti Tarnish Chain Pendants (316l SS)
  48: "necklaces-chains", // Korean Chains (Alloy)
  57: "necklaces-chains", // Anti Tarnish Mangalsutras (316L SS)
  27: "earrings-hoops", // Anti Tarnish Earrings (316l SS)
  7: "korean-minimalist", // Korean Earrings (Alloy)
  36: "korean-minimalist", // Korean Earrings Combo Sets (Alloy)
  9: "korean-minimalist", // Korean Bracelets (Copper/Alloy)
  28: "bracelets-kada", // Anti Tarnish Bracelets (316l SS)
  32: "bracelets-kada", // Resin Bangles
  33: "bracelets-kada", // Enamel Bangles - Anti Tarnish (316l SS)
  38: "bracelets-kada", // Tulip Bracelets (Copper)
};

function materialFor(categoryName) {
  const n = categoryName || "";
  if (/316l?/i.test(n)) return { material: "316l-stainless-steel", materialLabel: "316L Stainless Steel", materialShort: "316L" };
  if (/korean/i.test(n)) return { material: "waterproof-korean", materialLabel: "Korean Alloy", materialShort: "Korean" };
  if (/resin/i.test(n)) return { material: "other", materialLabel: "Resin", materialShort: "Resin" };
  if (/enamel/i.test(n)) return { material: "316l-stainless-steel", materialLabel: "Enamel · 316L Steel", materialShort: "Enamel" };
  if (/copper/i.test(n)) return { material: "hypoallergenic-brass", materialLabel: "Copper", materialShort: "Copper" };
  return { material: "other", materialLabel: n, materialShort: n };
}

function toImageUrl(url) {
  // "/objects/uploads/<uuid>" -> "https://chatcart.in/api/public/img/uploads/<uuid>"
  return `https://chatcart.in/api/public/img${url.replace(/^\/objects\//, "/")}`;
}

async function main() {
  const [sellerRes, productsRes, categoriesRes] = await Promise.all([
    fetch(API),
    fetch(`${API}/products`),
    fetch(`${API}/categories`),
  ]);
  if (!sellerRes.ok || !productsRes.ok || !categoriesRes.ok) {
    throw new Error(
      `Chatcart API HTTP ${sellerRes.status}/${productsRes.status}/${categoriesRes.status}`
    );
  }
  const seller = await sellerRes.json();
  const rawProducts = await productsRes.json();
  const rawCategories = await categoriesRes.json();

  // Store logo = the seller's banner image from Chatcart (verified: the
  // green "ARORA GROUP" mark, 500x500 PNG). Used as the header logo,
  // JSON-LD logo, OG image and favicon (see store.json).
  const store = {
    storeName: seller.storeName?.trim(),
    tagline: seller.tagline,
    whatsappNumber: seller.whatsappNumber,
    logoUrl: toImageUrl(seller.bannerImageUrl),
  };
  writeFileSync(STORE_OUT, JSON.stringify(store, null, 2) + "\n", "utf-8");
  const catName = Object.fromEntries(rawCategories.map((c) => [c.id, c.name]));

  const products = rawProducts
    .filter((p) => p.status === "active" && p.images?.length > 0)
    .map((p) => {
      const siteCategory = CATEGORY_MAP[p.categoryId] || null;
      const mat = materialFor(catName[p.categoryId]);
      const tags = [];
      if (p.price < 50) tags.push("under-49");
      if (p.price < 100) tags.push("under-99");
      if (mat.material === "316l-stainless-steel") tags.push("waterproof");
      return {
        sku: `AG-${p.id}`,
        chatcartId: p.id,
        name: p.name,
        // null when the real category has no site silo; homepage shows all
        // products regardless, category pages filter on this field.
        category: siteCategory,
        material: mat.material,
        materialLabel: mat.materialLabel,
        materialShort: mat.materialShort,
        wholesalePrice: p.price,
        // No MRP in the real catalogue — never invent one.
        image: toImageUrl(p.images[0].url),
        tags,
        stock: "In Stock",
      };
    });

  writeFileSync(PRODUCTS_OUT, JSON.stringify(products, null, 2) + "\n", "utf-8");

  // Refresh category card images with a real product photo per site category.
  const categories = JSON.parse(readFileSync(CATEGORIES_PATH, "utf-8"));
  for (const cat of categories) {
    const first = products.find((p) => p.category === cat.slug);
    if (first) cat.image = first.image;
  }
  writeFileSync(CATEGORIES_PATH, JSON.stringify(categories, null, 2) + "\n", "utf-8");

  const mapped = products.filter((p) => p.category).length;
  console.log(
    `Catalogue synced: ${products.length} products (${mapped} in a site category, ` +
      `${products.length - mapped} homepage-only) from Chatcart. ` +
      `Prices ₹${Math.min(...products.map((p) => p.wholesalePrice))}–₹${Math.max(...products.map((p) => p.wholesalePrice))}. ` +
      `Logo: ${store.logoUrl}`
  );
}

main().catch((err) => {
  console.warn(`[fetch:catalogue] ${err.message} — keeping committed src/data/products.json.`);
});
