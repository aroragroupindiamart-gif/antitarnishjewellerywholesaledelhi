# antitarnishjewellerywholesaledelhi.com

> **Dedicated High-Converting Acquisition Satellite for [Arora Group Wholesale](https://www.aroragroupwholesale.com/)**  
> *Delhi NCR & North India B2B Anti-Tarnish Jewellery Lead Generator*

---

## 💎 Strategic Entity Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ PRIMARY DOMAIN: aroragroupwholesale.com                                │
│ • Brand Authority & National Wholesale Store                           │
│ • Head Office / Warehouse: E-134, Tagore Garden Extension, New Delhi   │
│ • Core Offer: MOV ₹3,000, 0 item-level MOQ, Direct Factory Importer    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Cross-Entity Signal
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ SATELLITE EMD: antitarnishjewellerywholesaledelhi.com                  │
│ • Hyper-targeted Local B2B Lead Generator for Delhi NCR & North India  │
│ • Brand Hook: "Arora Group Wholesale — Delhi Anti-Tarnish Hub"         │
│ • Traps high-intent searches: Sadar Bazar, Rui Mandi, Karol Bagh       │
│ • Converts traffic directly into WhatsApp leads                          │
└────────────────────────────────────────────────────────────────────────┘
```

By anchoring this EMD directly to Arora Group Wholesale’s verified physical presence (**1st Floor, E-134, Tagore Garden Extension, New Delhi 110027**) and highlighting the real competitive edge (**flat ₹3,000 MOV with 0 item-level MOQ vs. Sadar Bazar’s rigid 12–24 pcs/design rule**), this site gains immediate E-E-A-T and is shielded from Google thin-EMD filters.

---

## 🚀 149-Page Programmatic URL Blueprint

Total Pages: **149 Statically Rendered Pages** (`generateStaticParams`)

| Silo / Page Type | Route Pattern | Page Count | Target Keyword / Intent |
| :--- | :--- | :--- | :--- |
| **Homepage** | `/` | 1 | `anti tarnish jewellery wholesale delhi` |
| **Category Pillars** | `/wholesale/[category]` | 8 | Core category pillars (rings, necklaces, hoops, etc.) |
| **Category × Delhi Hubs** | `/wholesale/[category]/[location]` | 64 | Sadar Bazar, Rui Mandi, Karol Bagh, Tagore Garden, etc. |
| **Category × Metal Specs** | `/wholesale/[category]/[material]` | 32 | 316L surgical steel, 18K PVD gold, Korean, brass |
| **Category × Reseller Tiers**| `/wholesale/[category]/[intent]` | 32 | Under ₹49, Under ₹99, ₹3,000 MOV starter pack |
| **Delhi Market Guides** | `/delhi-markets/[market]` | 7 | Sadar Bazar & Rui Mandi guide, Karol Bagh, etc. |
| **Conversion Funnels** | `/warehouse-visit`, etc. | 5 | Showroom booking, about, contact, terms, FAQs |

---

## 🛠 Live Catalogue (Chatcart)

Product cards show the REAL Arora Group catalogue — no dummy products, no
Unsplash photos, no invented MRPs. Data comes from Chatcart's public
storefront API (`GET https://chatcart.in/api/public/sellers/aroragroupwholesale/products`,
309 active products, real wholesale prices ₹15–₹2,700, real photos).

- `scripts/fetch-chatcart-catalogue.mjs` pulls products + categories and
  writes `src/data/products.json` (plus real product photos as the 8
  category card images in `src/data/categories.json`). It runs automatically
  before every build (`prebuild`); if Chatcart is unreachable it keeps the
  committed file and the build still succeeds. Refresh manually with
  `npm run fetch:catalogue`.
- Real Chatcart categories are mapped onto the site's 8 silos (see
  `CATEGORY_MAP` in the script). Sets, armlets, body chains, anklets and
  watches have no site silo — they appear in the homepage feed only.
  Men's jewellery and evil-eye have no real products — those pages show
  the first 8 catalogue products as a generic selection.
- No MRP exists in the real catalogue, so product cards show wholesale
  price only. No "bestseller" filter — there is no sales data to rank by.
- The store logo also comes from Chatcart (`GET /sellers/aroragroupwholesale`
  → `bannerImageUrl`, the green ARORA GROUP mark) and is saved in
  `src/data/store.json`. It is the header logo, the JSON-LD logo/image, the
  Open Graph image and the favicon — refreshed by the same fetch script.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router) with full Static Site Generation (SSG).
- **Styling**: Tailwind CSS (Luxury B2B palette: Deep Emerald `#064E3B`, Gold `#D97706`).
- **Icons**: Lucide React.
- **Conversion Triggers**:
  - Sticky floating WhatsApp button with prefilled category/location messages.
  - Tagore Garden Showroom Appointment booking.
- **Structured Data**: JSON-LD (`WholesaleStore`, `BreadcrumbList`, `FAQPage`) on every route.

---

## 📦 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to GitHub / GitLab.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Build command: `npm run build`
4. Output directory: `.next`
5. Custom Domain: `antitarnishjewellerywholesaledelhi.com`

### Option 2: Run Locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📍 Verified Physical Presence (Delhi NCR Hub)
- **Organization**: Arora Group Wholesale
- **Address**: 1st Floor, E-134, Tagore Garden Extension, New Delhi, Delhi 110027
- **Phone / WhatsApp**: [+91 8368484361](https://wa.me/918368484361)
- **Primary Website**: [aroragroupwholesale.com](https://www.aroragroupwholesale.com/)
