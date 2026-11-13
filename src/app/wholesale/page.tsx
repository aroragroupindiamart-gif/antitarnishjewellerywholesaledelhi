import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import categoriesData from "@/data/categories.json";
import locationsData from "@/data/locations.json";
import productsData from "@/data/products.json";
import ProductCatalogFeed from "@/components/ProductCatalogFeed";
import ShowroomVideoEmbed from "@/components/ShowroomVideoEmbed";
import {
  JsonLdScript,
  generateWholesaleSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO/JsonLd";
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale Anti Tarnish Jewellery Categories & Sourcing Hub Delhi | Arora Group",
  description:
    "Explore 8 complete anti-tarnish jewellery wholesale categories in Delhi. Direct factory importer rates, ₹3,000 MOV, zero item MOQ, 316L stainless steel & 18K PVD gold.",
  alternates: {
    canonical: "https://antitarnishjewellerywholesaledelhi.com/wholesale",
  },
};

export default function WholesaleHubPage() {
  const wholesaleSchema = generateWholesaleSchema({
    category: "Anti-Tarnish Jewellery Wholesale Hub",
    location: "Delhi NCR",
    pageTitle: "Wholesale Anti Tarnish Jewellery Delhi Hub | Arora Group Wholesale",
    pageDescription:
      "Direct factory importer catalog of anti-tarnish 316L stainless steel & 18K vacuum PVD gold jewelry in Delhi NCR. Flat ₹3,000 MOV, zero item MOQ.",
    urlPath: "/wholesale",
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Wholesale Categories", url: "/wholesale" },
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
            <span>Direct Factory Wholesale Categories • Delhi NCR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto text-white leading-tight">
            Wholesale Anti-Tarnish Jewellery <span className="text-gold-400">Categories</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto">
            Choose from 8 specialized product categories. Mix and match single designs freely across all categories with flat ₹3,000 minimum order value.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/wholesale/${cat.slug}`}
              className="group bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:border-gold-400"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-gold-300 text-xs font-bold px-2.5 py-1 rounded-md">
                  From ₹{cat.basePrice}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-gray-900 text-lg group-hover:text-emerald-900 transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{cat.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-gold-600">
                  <span>Explore Wholesale Silo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Showroom Walkthrough Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowroomVideoEmbed
          title="Watch Our Delhi Showroom & Warehouse Video"
          subtitle="Tour our physical showroom at E-134, Tagore Garden Extension, New Delhi before ordering."
          badge="Verified Factory Importer"
        />
      </section>

      {/* Live Inventory Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCatalogFeed
          products={productsData.slice(0, 16)}
          categoryName="All Anti-Tarnish Jewellery"
          locationName="Delhi NCR"
          totalCount={productsData.length}
        />
      </section>
    </div>
  );
}
