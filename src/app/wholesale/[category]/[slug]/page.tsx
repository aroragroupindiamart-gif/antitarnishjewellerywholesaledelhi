import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import MarketComparisonBox from "@/components/MarketComparisonBox";
import ProductCatalogFeed from "@/components/ProductCatalogFeed";
import ShowroomVideoEmbed from "@/components/ShowroomVideoEmbed";
import FAQSchemaAccordion from "@/components/FAQSchemaAccordion";
import {
  JsonLdScript,
  generateWholesaleSchema,
  generateBreadcrumbSchema,
} from "@/components/SEO/JsonLd";
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  Package,
  Layers,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import matrixData from "@/data/matrix.json";
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";
import locationsData from "@/data/locations.json";
import { ProgrammaticPageData } from "@/lib/types";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return (matrixData as ProgrammaticPageData[]).map((item) => ({
    category: item.categorySlug,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = (matrixData as ProgrammaticPageData[]).find(
    (item) => item.categorySlug === params.category && item.slug === params.slug
  );

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://antitarnishjewellerywholesaledelhi.com/wholesale/${page.categorySlug}/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://antitarnishjewellerywholesaledelhi.com/wholesale/${page.categorySlug}/${page.slug}`,
      images: [
        {
          url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&h=630&q=80",
          alt: page.h1,
        },
      ],
    },
  };
}

export default function ProgrammaticWholesalePage({ params }: PageProps) {
  const page = (matrixData as ProgrammaticPageData[]).find(
    (item) => item.categorySlug === params.category && item.slug === params.slug
  );

  if (!page) {
    notFound();
  }

  const categoryProducts = productsData.filter((p) => p.category === page.categorySlug);

  const wholesaleSchema = generateWholesaleSchema({
    category: page.categoryShort,
    location: page.targetEntity,
    pageTitle: page.h1,
    pageDescription: page.description,
    urlPath: `/wholesale/${page.categorySlug}/${page.slug}`,
  });

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: page.categoryShort, url: `/wholesale/${page.categorySlug}` },
    { name: page.targetEntity, url: `/wholesale/${page.categorySlug}/${page.slug}` },
  ]);

  // Sibling links for rich crawl equity
  const siblingLocations = locationsData.filter((l) => l.slug !== page.slug).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <JsonLdScript data={wholesaleSchema} />
      <JsonLdScript data={breadcrumbs} />

      {/* Block A: Hero & Value Proposition (Dynamic) */}
      <HeroSection
        h1={page.h1}
        subheadline={page.subheadline}
        category={page.categoryShort}
        location={page.targetEntity}
        basePrice={page.pricing.tier1.price.replace("₹", "")}
      />

      {/* Block C: Market Reality Check / Material Spec / Reseller Intent Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {page.type === "location" && page.comparison && (
          <MarketComparisonBox
            locationName={page.comparison.locationName}
            traditionalIssue={page.comparison.traditionalIssue}
            aroraAdvantage={page.comparison.aroraAdvantage}
            highlight={page.comparison.highlight}
            distance={page.comparison.distance}
          />
        )}

        {page.type === "material" && page.materialSpec && (
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 rounded-2xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-800">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-3">
                <Layers className="w-3.5 h-3.5" />
                Material Engineering & Certification
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {page.materialSpec.name} Specifications
              </h2>
              <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                {page.materialSpec.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-900/60 rounded-xl p-6 border border-emerald-700/60">
                <h3 className="font-bold text-gold-300 text-sm uppercase tracking-wider mb-4">
                  Standard Compliance & Testing
                </h3>
                <div className="text-lg font-bold text-white mb-2">{page.materialSpec.grade}</div>
                <p className="text-xs text-emerald-200 mb-4">{page.materialSpec.longevity}</p>
                <div className="p-3 bg-emerald-950/80 rounded-lg text-xs text-gray-300">
                  Every batch undergoes salt spray immersion and nickel-release laboratory verification before packaging.
                </div>
              </div>

              <div className="bg-emerald-900/60 rounded-xl p-6 border border-emerald-700/60">
                <h3 className="font-bold text-gold-300 text-sm uppercase tracking-wider mb-4">
                  Performance Attributes
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100">
                  {page.materialSpec.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {page.type === "reseller-intent" && page.intentData && (
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 rounded-2xl p-6 sm:p-10 text-white shadow-2xl border border-gold-500/40">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-3">
                <Target className="w-3.5 h-3.5" />
                Reseller Business Blueprint
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {page.intentData.name} Strategy
              </h2>
              <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Optimized inventory bundle curated for {page.intentData.targetAudience} across Delhi NCR.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-center">
                <div className="text-xs uppercase text-emerald-300 font-bold">Wholesale Acquisition</div>
                <div className="text-xl font-extrabold text-gold-400 mt-1">{page.intentData.targetPrice}</div>
              </div>
              <div className="p-5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-center">
                <div className="text-xs uppercase text-emerald-300 font-bold">Recommended Resale</div>
                <div className="text-xl font-extrabold text-white mt-1">{page.intentData.idealResale}</div>
              </div>
              <div className="p-5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-center">
                <div className="text-xs uppercase text-emerald-300 font-bold">Gross Margin Multiple</div>
                <div className="text-xl font-extrabold text-gold-400 mt-1">{page.intentData.marginMultiple}</div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Block D: Product Feed & Instant WhatsApp Ordering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCatalogFeed
          products={categoryProducts.length > 0 ? categoryProducts : productsData.slice(0, 8)}
          categoryName={`${page.categoryShort} (${page.targetEntity})`}
          locationName={page.targetEntity}
        />
      </section>

      {/* Video Proof: Tagore Garden Showroom Walkthrough */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ShowroomVideoEmbed
          title={`Watch Our Delhi Showroom & ${page.categoryShort} Stock Verification`}
          subtitle={`Virtual tour for buyers in ${page.targetEntity}: See our Tagore Garden warehouse, physical stock, and certified 18K vacuum PVD plating.`}
          badge="Live Facility Video Proof"
        />
      </section>

      {/* Block E: Programmatic B2B FAQ Accordion (with FAQPage Schema) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSchemaAccordion
          faqs={page.faqs}
          title={`FAQs: Wholesale ${page.categoryShort} in ${page.targetEntity}, Delhi`}
          subtitle={`Verified information for jewellery retailers, resellers, and boutique owners in ${page.targetEntity}.`}
        />
      </section>

      {/* Interlinking Silo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <h3 className="font-extrabold text-lg sm:text-xl text-emerald-950 mb-2">
            Explore {page.categoryShort} in Other Delhi Wholesale Hubs
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Arora Group dispatches same-day across all Delhi NCR districts.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {siblingLocations.map((loc) => (
              <Link
                key={loc.id}
                href={`/wholesale/${page.categorySlug}/${loc.slug}`}
                className="p-3 rounded-lg border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/60 transition-all text-center block group"
              >
                <div className="font-bold text-xs text-gray-800 group-hover:text-emerald-900">
                  {loc.name}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">{page.categoryShort}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
