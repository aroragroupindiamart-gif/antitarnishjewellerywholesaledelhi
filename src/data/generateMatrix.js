const fs = require('fs');
const path = require('path');

const categories = require('./categories.json');
const locations = require('./locations.json');
const materials = require('./materials.json');
const resellerIntents = require('./reseller-intents.json');

const items = [];

// 1. 64 Category x Delhi Location Pages
for (const cat of categories) {
  for (const loc of locations) {
    items.push({
      categorySlug: cat.slug,
      slug: loc.slug,
      type: 'location',
      category: cat.name,
      categoryShort: cat.shortName,
      targetEntity: loc.name,
      h1: `Wholesale Anti-Tarnish ${cat.shortName} in ${loc.name}, Delhi`,
      subheadline: `Direct Factory Importer Supply by Arora Group Wholesale. Skip ${loc.name} middleman markups. Order with a low ₹3,000 MOV and 0 item-level MOQ.`,
      title: `Wholesale Anti-Tarnish ${cat.shortName} ${loc.name} Delhi | Direct Importer ₹3000 MOV`,
      description: `Source wholesale anti-tarnish ${cat.shortName.toLowerCase()} in ${loc.name}, Delhi. Direct importer rates from ₹${cat.basePrice}, 316L stainless steel, 18K PVD gold. Flat ₹3,000 MOV, zero item MOQ. Same-day Delhi NCR delivery.`,
      pricing: {
        tier1: { label: 'Small Batch (₹3,000 – ₹10,000 MOV)', price: `₹${cat.basePrice}`, margin: '2.5x – 3.5x markup' },
        tier2: { label: 'Bulk Store (₹10,000 – ₹25,000 MOV)', price: `₹${cat.tier2Price}`, margin: '3.5x – 5x markup' },
        tier3: { label: 'Master Box (500+ pieces)', price: `₹${cat.masterPrice}`, margin: 'Direct Factory Rates' },
      },
      comparison: {
        locationName: loc.name,
        traditionalIssue: loc.traditionalIssues,
        aroraAdvantage: loc.aroraAdvantage,
        highlight: loc.comparisonHighlight,
        distance: loc.distanceFromTagoreGarden
      },
      faqs: [
        {
          q: `What is the minimum order value (MOV) for anti-tarnish ${cat.shortName.toLowerCase()} for buyers in ${loc.name}?`,
          a: `Our minimum order value is only ₹3,000 with absolute 0 item-level MOQ. You can mix and match different designs, colors, and categories freely without buying dozen-piece bundles like ${loc.name}.`
        },
        {
          q: `Can I inspect ${cat.shortName.toLowerCase()} before placing an order from ${loc.name}?`,
          a: `Yes! Our central showroom and warehouse is located at 1st Floor, E-134, Tagore Garden Extension, New Delhi. Buyers from ${loc.name} can visit Monday through Saturday (10 AM to 7 PM) to inspect physical quality.`
        },
        {
          q: `How does your 18K PVD coating compare to standard ${loc.name} gold plating?`,
          a: `Standard imitation jewelry in ${loc.name} uses flash chemical electroplating which chips and tarnishes in weeks. Arora Group uses vacuum Physical Vapor Deposition (PVD) bonding 18K gold at an atomic level to medical-grade 316L stainless steel, guaranteeing waterproof durability.`
        },
        {
          q: `How fast can orders be delivered to ${loc.name} and across Delhi NCR?`,
          a: `We offer same-day dispatch and express courier delivery across Delhi NCR including ${loc.name}. Pan-India orders are delivered within 2-4 business days via BlueDart and Delhivery.`
        }
      ]
    });
  }
}

// 2. 32 Category x Material Pages
for (const cat of categories) {
  for (const mat of materials) {
    items.push({
      categorySlug: cat.slug,
      slug: mat.slug,
      type: 'material',
      category: cat.name,
      categoryShort: cat.shortName,
      targetEntity: mat.name,
      h1: `${mat.name} Wholesale ${cat.shortName} in Delhi`,
      subheadline: `Certified ${mat.name} direct factory supply by Arora Group Wholesale. Engineered for 100% tarnish-free, sweatproof wear with ₹3,000 MOV.`,
      title: `${mat.name} Anti-Tarnish ${cat.shortName} Wholesale Delhi | Arora Group`,
      description: `Wholesale ${cat.shortName.toLowerCase()} made with certified ${mat.name} in Delhi. Factory direct prices from ₹${cat.basePrice}. 100% waterproof, zero skin turning, low ₹3,000 MOV.`,
      pricing: {
        tier1: { label: 'Small Batch (₹3,000 – ₹10,000 MOV)', price: `₹${cat.basePrice}`, margin: '2.5x – 3.5x markup' },
        tier2: { label: 'Bulk Store (₹10,000 – ₹25,000 MOV)', price: `₹${cat.tier2Price}`, margin: '3.5x – 5x markup' },
        tier3: { label: 'Master Box (500+ pieces)', price: `₹${cat.masterPrice}`, margin: 'Direct Factory Rates' },
      },
      materialSpec: {
        name: mat.name,
        grade: mat.grade,
        description: mat.description,
        features: mat.features,
        longevity: mat.longevity
      },
      faqs: [
        {
          q: `Why choose ${mat.name} for wholesale ${cat.shortName.toLowerCase()}?`,
          a: `${mat.description} It delivers luxury look with lifetime durability, allowing your retail customers to shower, exercise, and wear their jewelry daily without green skin.`
        },
        {
          q: `Are these ${mat.name} ${cat.shortName.toLowerCase()} certified hypoallergenic?`,
          a: `Yes, all items comply with nickel-free and lead-free safety regulations (${mat.grade}), making them safe for customers with sensitive skin.`
        },
        {
          q: `What is the wholesale MOV for ${mat.name} designs?`,
          a: `Just ₹3,000 overall minimum cart value. You do not need to buy bulk of one single style—mix across all materials and categories.`
        },
        {
          q: `Where is your stock dispatched from?`,
          a: `All inventory is stocked ready-to-ship at our Tagore Garden Extension warehouse in West Delhi, ensuring same-day local dispatch.`
        }
      ]
    });
  }
}

// 3. 32 Category x Reseller Intent Pages
for (const cat of categories) {
  for (const intent of resellerIntents) {
    items.push({
      categorySlug: cat.slug,
      slug: intent.slug,
      type: 'reseller-intent',
      category: cat.name,
      categoryShort: cat.shortName,
      targetEntity: intent.name,
      h1: `${intent.name} - Wholesale Anti-Tarnish ${cat.shortName} Delhi`,
      subheadline: `${intent.description} Powered by Arora Group Wholesale Delhi. Direct importer pricing, zero item MOQ, ₹3,000 MOV.`,
      title: `${intent.name} Wholesale ${cat.shortName} Delhi | Arora Group Wholesale`,
      description: `Wholesale ${cat.shortName.toLowerCase()} for ${intent.name.toLowerCase()} in Delhi. Buy at ${intent.targetPrice}, resale margin ${intent.marginMultiple}. Low ₹3,000 MOV, zero MOQ per piece.`,
      pricing: {
        tier1: { label: 'Small Batch (₹3,000 – ₹10,000 MOV)', price: `₹${cat.basePrice}`, margin: intent.marginMultiple },
        tier2: { label: 'Bulk Store (₹10,000 – ₹25,000 MOV)', price: `₹${cat.tier2Price}`, margin: 'Higher Volume Margin' },
        tier3: { label: 'Master Box (500+ pieces)', price: `₹${cat.masterPrice}`, margin: 'Direct Importer Rates' },
      },
      intentData: {
        name: intent.name,
        targetPrice: intent.targetPrice,
        idealResale: intent.idealResale,
        marginMultiple: intent.marginMultiple,
        targetAudience: intent.targetAudience
      },
      faqs: [
        {
          q: `How can I start selling anti-tarnish ${cat.shortName.toLowerCase()} with the ${intent.name}?`,
          a: `You only need ₹3,000 minimum order value. Pick and choose trending designs across rings, necklaces, earrings, and bracelets. We provide high-resolution images and videos for your marketing.`
        },
        {
          q: `What are realistic resale margins for ${cat.shortName.toLowerCase()} in this price tier?`,
          a: `Our resellers typically buy at ${intent.targetPrice} and resell between ${intent.idealResale}, giving a strong ${intent.marginMultiple} gross margin.`
        },
        {
          q: `Can I order single pieces per design?`,
          a: `Yes! Arora Group Wholesale has ZERO item-level MOQ. You can choose 1 piece of 30 different designs to complete your ₹3,000 MOV.`
        },
        {
          q: `Do you provide reseller support or fast courier tracking?`,
          a: `Yes, we provide same-day tracking numbers, unbranded discreet packing options for dropshippers, and instant WhatsApp customer support.`
        }
      ]
    });
  }
}

fs.writeFileSync(path.join(__dirname, 'matrix.json'), JSON.stringify(items, null, 2), 'utf-8');
console.log(`Successfully generated matrix.json with ${items.length} programmatic pages.`);
