import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import MarketComparisonBox from "@/components/MarketComparisonBox";
import ProductCatalogFeed from "@/components/ProductCatalogFeed";
import FAQSchemaAccordion from "@/components/FAQSchemaAccordion";
import {
  JsonLdScript,
  generateWholesaleSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO/JsonLd";
import {
  MapPin,
  Clock,
  Navigation,
  ShieldAlert,
  ShieldCheck,
  Package,
  MessageCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import marketsData from "@/data/delhi-markets.json";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import { MarketGuide } from "@/lib/types";

interface PageProps {
  params: {
    market: string;
  };
}

export async function generateStaticParams() {
  return (marketsData as MarketGuide[]).map((m) => ({
    market: m.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = (marketsData as MarketGuide[]).find((m) => m.slug === params.market);
  if (!guide) return { title: "Market Guide Not Found" };

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://antitarnishjewellerywholesaledelhi.com/delhi-markets/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `https://antitarnishjewellerywholesaledelhi.com/delhi-markets/${guide.slug}`,
    },
  };
}

export default function DelhiMarketGuidePage({ params }: PageProps) {
  const guide = (marketsData as MarketGuide[]).find((m) => m.slug === params.market);
  if (!guide) notFound();

  const wholesaleSchema = generateWholesaleSchema({
    category: "Anti-Tarnish Jewellery",
    location: guide.name,
    pageTitle: guide.h1,
    pageDescription: guide.metaDescription,
    urlPath: `/delhi-markets/${guide.slug}`,
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Delhi Market Guides", url: "/delhi-markets/sadar-bazar-rui-mandi" },
    { name: guide.name, url: `/delhi-markets/${guide.slug}` },
  ]);

  const marketFaqs = [
    {
      q: `How do I avoid getting scammed with fake anti-tarnish jewellery in ${guide.name}?`,
      a: `In traditional markets like ${guide.name}, always perform a magnet check (high quality 316L steel is non-magnetic or very weakly magnetic) and ask for PVD vacuum coating guarantees. Many shops sell standard electroplated brass that rubs off within two weeks. Arora Group provides written 316L and 18K PVD guarantees.`,
    },
    {
      q: `Can I buy wholesale jewellery without visiting ${guide.name}?`,
      a: `Yes! You can skip the crowds of ${guide.name} entirely. Order directly via WhatsApp or digital catalog from Arora Group Wholesale with a low ₹3,000 MOV and 0 item MOQ, or visit our modern showroom at 1st Floor, E-134, Tagore Garden Extension, New Delhi.`,
    },
    {
      q: `How far is Arora Group Wholesale from ${guide.name}?`,
      a: `${guide.metroDirections}. We are conveniently located just 3 minutes away from Tagore Garden Metro Station on the Blue Line.`,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      <JsonLdScript data={wholesaleSchema} />
      <JsonLdScript data={breadcrumbs} />

      {/* Hero Banner for Market Guide */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Delhi B2B Wholesale Market Deep-Dive
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {guide.h1}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              {guide.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-emerald-200">
              <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>{guide.marketHours}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-800">
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>Tagore Garden Hub: 3 Min from Blue Line Metro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Direct Alternative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pain Points */}
          <div className="bg-white rounded-2xl border border-red-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-3">
              <ShieldAlert className="w-4 h-4" />
              <span>Sourcing Risks in {guide.name}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
              Common Bottlenecks for Resellers
            </h2>
            <ul className="space-y-3 text-sm text-gray-600">
              {guide.painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arora Advantage */}
          <div className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gold-500/30">
            <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>The Arora Group Wholesale Solution</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
              Direct Importer Peace of Mind
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed mb-6">
              {guide.aroraAlternative}
            </p>
            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs text-gray-300">
              <strong className="text-gold-300 block mb-1">Transit & Metro Route:</strong>
              {guide.metroDirections}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Buyer Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gold-50/70 border border-gold-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-gold-800 font-bold text-xs uppercase tracking-wider mb-2">
            <Lightbulb className="w-4 h-4 text-gold-600" />
            <span>Insider Sourcing Tips for Delhi Buyers</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-emerald-950 mb-4">
            How to Protect Your Reseller Margins
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.tips.map((tip, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gold-100 text-xs sm:text-sm text-gray-700 shadow-sm">
                <span className="font-bold text-emerald-900 block mb-1">Tip #{idx + 1}:</span>
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Product Catalog Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCatalogFeed
          products={productsData.slice(0, 8)}
          categoryName={`Anti-Tarnish Jewellery (${guide.name})`}
          locationName={guide.name}
        />
      </section>

      {/* Market Comparison Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MarketComparisonBox locationName={guide.name} />
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSchemaAccordion
          faqs={marketFaqs}
          title={`FAQs: Jewellery Sourcing in ${guide.name}`}
          subtitle="Frequently asked questions about navigating wholesale jewellery in Delhi."
        />
      </section>
    </div>
  );
}
