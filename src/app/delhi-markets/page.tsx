import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import marketsData from "@/data/delhi-markets.json";
import ShowroomVideoEmbed from "@/components/ShowroomVideoEmbed";
import {
  JsonLdScript,
  generateWholesaleSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO/JsonLd";
import { Sparkles, ArrowRight, MapPin, Building, ShieldCheck } from "lucide-react";
import { MarketGuide } from "@/lib/types";

export const metadata: Metadata = {
  title: "Delhi Jewellery Wholesale Markets Sourcing Guide | Arora Group Wholesale",
  description:
    "Comprehensive B2B sourcing guide comparing Sadar Bazar, Rui Mandi, Karol Bagh, Chandni Chowk, and Tagore Garden Wholesale Hub for anti-tarnish jewellery in Delhi.",
  alternates: {
    canonical: "https://antitarnishjewellerywholesaledelhi.com/delhi-markets",
  },
};

export default function DelhiMarketsHubPage() {
  const wholesaleSchema = generateWholesaleSchema({
    category: "Delhi Wholesale Markets Guide",
    location: "Delhi NCR",
    pageTitle: "Delhi Jewellery Wholesale Markets Sourcing Directory | Arora Group Wholesale",
    pageDescription:
      "Honest B2B sourcing comparisons for Delhi's major jewellery wholesale markets: Sadar Bazar, Rui Mandi, Karol Bagh, and Tagore Garden Extension.",
    urlPath: "/delhi-markets",
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Delhi Markets", url: "/delhi-markets" },
  ]);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <JsonLdScript data={wholesaleSchema} />
      <JsonLdScript data={breadcrumbs} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white pt-12 pb-16 sm:pt-20 sm:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Delhi Wholesale Markets Comparison Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto text-white leading-tight">
            Delhi Jewellery Wholesale Markets <span className="text-gold-400">Sourcing Hub</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            Honest buyer guides comparing traditional market challenges (rigid 12-24 pcs MOQ, middleman markups, cramped alleys) with Arora Group Wholesale&apos;s direct factory model.
          </p>
        </div>
      </section>

      {/* Markets Guide Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(marketsData as MarketGuide[]).map((market) => (
            <Link
              key={market.slug}
              href={`/delhi-markets/${market.slug}`}
              className="group bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-emerald-400"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 text-gold-600" />
                  <span>Delhi Wholesale Hub</span>
                </div>

                <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-emerald-900 transition-colors">
                  {market.name}
                </h2>

                <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                  {market.intro}
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-gray-100 text-xs">
                  <div className="font-semibold text-emerald-950">Metro Directions:</div>
                  <div className="text-gray-600 mt-0.5 line-clamp-1">{market.metroDirections}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-gold-600">
                <span>Read Full Market Sourcing Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Showroom Walkthrough Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowroomVideoEmbed
          title="Watch How to Avoid Sadar Bazar Crowds: Tagore Garden Showroom Tour"
          subtitle="See our Tagore Garden facility, live 316L anti-tarnish jewelry inventory, and certified 18K vacuum PVD plating."
          badge="Live Facility Tour"
        />
      </section>
    </div>
  );
}
