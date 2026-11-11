import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import PriceTierGrid from "@/components/PriceTierGrid";
import MarketComparisonBox from "@/components/MarketComparisonBox";
import ProductCatalogFeed from "@/components/ProductCatalogFeed";
import FAQSchemaAccordion from "@/components/FAQSchemaAccordion";
import { JsonLdScript, generateWholesaleSchema, generateBreadcrumbSchema } from "@/components/SEO/JsonLd";
import { Sparkles, MapPin, Layers, Target, ArrowRight } from "lucide-react";

import categoriesData from "@/data/categories.json";
import locationsData from "@/data/locations.json";
import materialsData from "@/data/materials.json";
import resellerIntentsData from "@/data/reseller-intents.json";
import productsData from "@/data/products.json";
import { Category } from "@/lib/types";

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return categoriesData.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cat = (categoriesData as Category[]).find((c) => c.slug === params.category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: {
      canonical: `https://antitarnishjewellerywholesaledelhi.com/wholesale/${cat.slug}`,
    },
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDescription,
      url: `https://antitarnishjewellerywholesaledelhi.com/wholesale/${cat.slug}`,
      images: [{ url: cat.image, alt: cat.name }],
    },
  };
}

export default function CategoryPillarPage({ params }: PageProps) {
  const cat = (categoriesData as Category[]).find((c) => c.slug === params.category);
  if (!cat) notFound();

  const categoryProducts = productsData.filter((p) => p.category === cat.slug);

  const wholesaleSchema = generateWholesaleSchema({
    category: cat.shortName,
    location: "Delhi NCR",
    pageTitle: cat.h1,
    pageDescription: cat.metaDescription,
    urlPath: `/wholesale/${cat.slug}`,
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Wholesale", url: "/wholesale/rings" },
    { name: cat.shortName, url: `/wholesale/${cat.slug}` },
  ]);

  const categoryFaqs = [
    {
      q: `What is the wholesale minimum order for anti-tarnish ${cat.shortName.toLowerCase()} in Delhi?`,
      a: `Our minimum order value is flat ₹3,000 across the entire catalog with 0 item-level MOQ. You can pick single pieces of different ${cat.shortName.toLowerCase()} styles without being forced to take 12 or 24 pieces of one design.`,
    },
    {
      q: `What metal composition is used for your ${cat.shortName.toLowerCase()}?`,
      a: `We utilize certified ASTM F138 medical-grade 316L surgical stainless steel combined with high-vacuum 18K Physical Vapor Deposition (PVD) ion coating. It will not tarnish, rust, or turn skin green even when exposed to water, sweat, or perfumes.`,
    },
    {
      q: `Can Delhi buyers visit the showroom to inspect ${cat.shortName.toLowerCase()} samples?`,
      a: `Yes! Our central showroom and warehouse is located at 1st Floor, E-134, Tagore Garden Extension, New Delhi 110027 (3 minutes walk from Tagore Garden Metro Station). You can inspect physical samples, verify weights, and carry stock immediately.`,
    },
    {
      q: `How does Arora Group pricing compare to Sadar Bazar Rui Mandi for ${cat.shortName.toLowerCase()}?`,
      a: `Because Arora Group is a direct factory importer with our own container shipments, our prices start from just ₹${cat.basePrice}/pc—bypassing the 2 to 3 layers of commission middlemen found in Rui Mandi and Karol Bagh.`,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <JsonLdScript data={wholesaleSchema} />
      <JsonLdScript data={breadcrumbs} />

      {/* Hero Section */}
      <HeroSection
        h1={cat.h1}
        subheadline={`Direct Factory Importer Supply by Arora Group Wholesale. Skip Sadar Bazar middleman markups on ${cat.shortName.toLowerCase()}. Order with a low ₹3,000 MOV and 0 item-level MOQ.`}
        category={cat.shortName}
        location="Delhi"
        basePrice={cat.basePrice}
      />

      {/* Pricing Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PriceTierGrid
          categoryName={cat.name}
          location="Delhi NCR"
          tier1={{
            label: "Small Batch (₹3,000 MOV)",
            price: `₹${cat.basePrice}`,
            margin: "2.5x – 3.5x markup",
          }}
          tier2={{
            label: "Bulk Store (₹10,000 MOV)",
            price: `₹${cat.tier2Price}`,
            margin: "3.5x – 5x markup",
          }}
          tier3={{
            label: "Master Box (500+ pcs)",
            price: `₹${cat.masterPrice}`,
            margin: "Direct Factory Rates",
          }}
        />
      </section>

      {/* Live Product Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCatalogFeed
          products={categoryProducts.length > 0 ? categoryProducts : productsData.slice(0, 8)}
          categoryName={cat.shortName}
          locationName="Delhi NCR"
        />
      </section>

      {/* Delhi Location Sub-Silos for this Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Delhi NCR Wholesale Silos
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Sourcing Wholesale {cat.shortName} by Delhi Market Hub
            </h2>
            <p className="mt-2 text-sm text-emerald-200">
              Select your nearest commercial district to review transit times, local market comparisons, and dispatch terms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationsData.map((loc) => (
              <Link
                key={loc.id}
                href={`/wholesale/${cat.slug}/${loc.slug}`}
                className="p-4 rounded-xl bg-emerald-900/60 hover:bg-emerald-850 border border-emerald-700/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider">
                    {loc.district}
                  </span>
                  <div className="font-bold text-white text-base mt-0.5 group-hover:text-gold-300">
                    {loc.name}
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-1 line-clamp-2">
                    {loc.traditionalIssues}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-emerald-800 flex items-center justify-between text-xs text-gold-400 font-semibold">
                  <span>{cat.shortName} in {loc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Material Specifications & Reseller Intent Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Materials Silo */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Material Specifications</span>
            </div>
            <h3 className="text-xl font-extrabold text-emerald-950 mb-4">
              {cat.shortName} by Metal & Plating Grade
            </h3>
            <div className="space-y-3">
              {materialsData.map((mat) => (
                <Link
                  key={mat.id}
                  href={`/wholesale/${cat.slug}/${mat.slug}`}
                  className="block p-3.5 rounded-xl border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="flex items-center justify-between font-bold text-sm text-gray-900 group-hover:text-emerald-900">
                    <span>{mat.name}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{mat.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Reseller Intent Silo */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-gold-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Target className="w-4 h-4" />
              <span>Reseller Price Points & Packs</span>
            </div>
            <h3 className="text-xl font-extrabold text-emerald-950 mb-4">
              Target Margin Tiers for {cat.shortName}
            </h3>
            <div className="space-y-3">
              {resellerIntentsData.map((intent) => (
                <Link
                  key={intent.id}
                  href={`/wholesale/${cat.slug}/${intent.slug}`}
                  className="block p-3.5 rounded-xl border border-gray-100 hover:border-gold-300 hover:bg-gold-50/40 transition-all group"
                >
                  <div className="flex items-center justify-between font-bold text-sm text-gray-900 group-hover:text-gold-900">
                    <span>{intent.name}</span>
                    <ArrowRight className="w-4 h-4 text-gold-600" />
                  </div>
                  <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                    Target: {intent.targetPrice} • Margin: {intent.marginMultiple}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Comparison Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MarketComparisonBox
          locationName="Sadar Bazar Rui Mandi"
          highlight={`Why buy wholesale ${cat.shortName.toLowerCase()} from Arora Group Wholesale instead of unverified Sadar Bazar shops.`}
        />
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSchemaAccordion
          faqs={categoryFaqs}
          title={`FAQs: Wholesale ${cat.name} in Delhi`}
          subtitle={`Everything you need to know about sourcing ${cat.shortName.toLowerCase()} with Arora Group.`}
        />
      </section>
    </div>
  );
}
