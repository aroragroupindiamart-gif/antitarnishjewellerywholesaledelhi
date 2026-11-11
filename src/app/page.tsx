import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PriceTierGrid from "@/components/PriceTierGrid";
import MarketComparisonBox from "@/components/MarketComparisonBox";
import ProductCatalogFeed from "@/components/ProductCatalogFeed";
import ShowroomVideoEmbed from "@/components/ShowroomVideoEmbed";
import FAQSchemaAccordion from "@/components/FAQSchemaAccordion";
import { ShieldCheck, Sparkles, MapPin, ArrowRight, CheckCircle2, Building2, Truck, RefreshCw } from "lucide-react";
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";
import locationsData from "@/data/locations.json";

export const metadata: Metadata = {
  title: "Anti Tarnish Jewellery Wholesale Delhi | Direct Importer ₹3000 MOV",
  description:
    "Direct factory importer of wholesale anti-tarnish jewellery in Delhi. ₹3,000 MOV, zero item MOQ, 316L steel & 18K PVD gold. Skip Sadar Bazar middleman markups.",
  alternates: {
    canonical: "https://antitarnishjewellerywholesaledelhi.com",
  },
};

export default function HomePage() {
  const homeFaqs = [
    {
      q: "What is the minimum order value (MOV) for anti-tarnish jewellery from your Delhi warehouse?",
      a: "Our minimum order value is only ₹3,000 with absolute 0 item-level MOQ. You can mix and match individual pieces across rings, necklaces, earrings, and bracelets freely without being forced to buy dozen-piece bundles like in Sadar Bazar.",
    },
    {
      q: "Can I visit your Delhi facility to inspect the jewellery before buying?",
      a: "Yes! You are welcome to visit our physical showroom and warehouse located at 1st Floor, E-134, Tagore Garden Extension, New Delhi, Delhi 110027 (near Tagore Garden Metro Station Gate No. 1). We are open Monday through Saturday from 10:00 AM to 7:00 PM.",
    },
    {
      q: "How does your 18K PVD vacuum coating compare to Sadar Bazar gold plating?",
      a: "Traditional artificial jewellery in Sadar Bazar Rui Mandi uses flash electroplating that flakes and tarnishes after brief contact with sweat or perfume. Arora Group uses vacuum Physical Vapor Deposition (PVD) that bonds real 18K gold atoms at a molecular level to medical-grade 316L stainless steel, providing 100% waterproof and sweatproof longevity.",
    },
    {
      q: "How does this site connect to Arora Group Wholesale?",
      a: "antitarnishjewellerywholesaledelhi.com is the specialized local B2B acquisition satellite for Arora Group Wholesale (www.aroragroupwholesale.com). All stock is directly imported and dispatched from our primary Tagore Garden Extension fulfillment warehouse.",
    },
    {
      q: "What are the shipping options across Delhi NCR and Pan-India?",
      a: "Orders in Delhi NCR are eligible for same-day local courier delivery or warehouse counter pickup. For other states across India, we dispatch daily via BlueDart, Delhivery, and express air cargo with delivery in 2 to 4 business days.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <HeroSection
        h1="Wholesale Anti-Tarnish Jewellery in Delhi NCR"
        subheadline="Direct Factory Importer Supply by Arora Group Wholesale. Skip Sadar Bazar middleman markups and crowded alleys. Order trending 316L stainless steel and 18K PVD gold pieces with a low ₹3,000 MOV and zero item-level MOQ."
        category="Anti-Tarnish Jewellery"
        location="Delhi"
        basePrice={49}
      />

      {/* 2. Category Navigation Pillar Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-50 text-gold-700 border border-gold-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Core Wholesale Categories
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
            Explore Ready Wholesale Inventory
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Over 1,000+ ready SKUs stocked in West Delhi with same-day dispatch.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              href={`/wholesale/${cat.slug}`}
              className="group bg-white rounded-2xl border border-gray-200/80 p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-emerald-400 flex flex-col justify-between"
            >
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100 relative mb-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-emerald-950/90 text-gold-300 text-[11px] font-bold px-2 py-0.5 rounded">
                  From ₹{cat.basePrice}/pc
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-emerald-900 transition-colors">
                  {cat.shortName}
                </h3>
                <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5">
                  {cat.description}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                <span>View Wholesale</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2.5 Showroom & Warehouse Video Walkthrough */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowroomVideoEmbed
          title="Inside Arora Group's West Delhi Warehouse & Showroom"
          subtitle="Watch our live inventory, physical showroom in Tagore Garden Extension, and 100% 316L anti-tarnish jewellery verification before ordering."
          badge="Live Warehouse Video Tour"
        />
      </section>

      {/* 3. Market Comparison Reality Check */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MarketComparisonBox
          locationName="Sadar Bazar & Rui Mandi"
          highlight="Why Delhi's top Instagram resellers and boutique owners choose Arora Group over traditional Sadar Bazar middleman alleys."
          traditionalIssue="Forced 12-24 pcs/color minimums, extreme crowding, no AC showroom, counterfeit non-certified brass sold as stainless steel, and cash-only informal transactions."
          aroraAdvantage="0 item-level MOQ, mix 1 pc per design freely, certified 316L medical stainless steel with 18K vacuum PVD plating, and air-conditioned Tagore Garden showroom."
          distance="12 km from Sadar Bazar (direct metro to Tagore Garden)"
        />
      </section>

      {/* 4. Live Wholesale Pricing Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PriceTierGrid
          categoryName="Anti-Tarnish Jewellery"
          location="Delhi NCR"
          tier1={{ label: "Small Batch (₹3,000 MOV)", price: "₹49 – ₹75", margin: "2.5x – 3.5x markup" }}
          tier2={{ label: "Bulk Store (₹10,000 MOV)", price: "₹42 – ₹65", margin: "3.5x – 5x markup" }}
          tier3={{ label: "Master Box (500+ pcs)", price: "₹36 – ₹55", margin: "Direct Factory Rates" }}
        />
      </section>

      {/* 5. Live Product Feed & Instant WhatsApp Ordering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCatalogFeed
          products={productsData}
          categoryName="Anti-Tarnish Jewellery"
          locationName="Delhi NCR"
        />
      </section>

      {/* 6. Delhi Wholesale Market Hubs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Delhi Wholesale Hub Directory
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
            Wholesale Sourcing Guides Across Delhi NCR
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Compare traditional local markets with Arora Group's direct factory supply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {loc.district}
                </span>
                <h3 className="font-bold text-gray-900 text-base mt-2">{loc.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{loc.hubType}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-600">
                <div className="text-[11px]">
                  <strong>Transit:</strong> {loc.distanceFromTagoreGarden}
                </div>
                <Link
                  href={`/wholesale/rings/${loc.slug}`}
                  className="font-bold text-emerald-800 hover:text-emerald-950 flex items-center justify-between pt-1"
                >
                  <span>View Wholesale Rings in {loc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ Accordion with FAQPage Schema */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSchemaAccordion
          faqs={homeFaqs}
          title="Frequently Asked Questions: Wholesale Anti-Tarnish Jewellery Delhi"
          subtitle="Clear answers on MOV, MOQ, showroom visits, materials, and ordering logistics."
        />
      </section>
    </div>
  );
}
