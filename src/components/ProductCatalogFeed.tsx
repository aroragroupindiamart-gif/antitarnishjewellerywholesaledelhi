"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, ShieldCheck, Eye, EyeOff, Sparkles, Check, ArrowRight } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCatalogFeedProps {
  products: Product[];
  categoryName?: string;
  locationName?: string;
}

export default function ProductCatalogFeed({
  products,
  categoryName = "Anti-Tarnish Jewellery",
  locationName = "Delhi NCR",
}: ProductCatalogFeedProps) {
  const [showPrices, setShowPrices] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tags = ["all", "under-49", "under-99", "waterproof", "bestseller"];

  const filteredProducts = products.filter((p) => {
    if (selectedTag === "all") return true;
    return p.tags.includes(selectedTag);
  });

  return (
    <div className="w-full">
      {/* Top Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Live Wholesale Stock (0 Item MOQ)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
            Trending Wholesale {categoryName} Catalog
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Pick 1 pc per SKU freely. Minimum cart value is just ₹3,000 for dispatch to {locationName}.
          </p>
        </div>

        {/* Filter Tags & Price Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize transition-all ${
                selectedTag === tag
                  ? "bg-emerald-900 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag.replace("-", " ")}
            </button>
          ))}

          <button
            onClick={() => setShowPrices(!showPrices)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gold-50 text-gold-800 border border-gold-200 hover:bg-gold-100 transition-all ml-auto md:ml-2"
            title="Toggle Wholesale Pricing Visibility"
          >
            {showPrices ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showPrices ? "Hide Wholesale Rates" : "Show Wholesale Rates"}
          </button>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => {
          const whatsappText = `Hi Arora Group Wholesale, I want to order/inquire SKU: ${product.sku} (${product.name}) wholesale for ${locationName}. Please share live availability.`;
          const whatsappUrl = `https://wa.me/918368484361?text=${encodeURIComponent(whatsappText)}`;

          return (
            <div
              key={product.sku}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-emerald-300"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={`${product.name} wholesale delhi`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-emerald-950/85 backdrop-blur-sm text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                  {product.sku}
                </div>
                <div className="absolute top-2 right-2 bg-white/95 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow border border-emerald-100 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  316L / PVD
                </div>
              </div>

              <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-medium text-emerald-700 uppercase tracking-wide">
                    {product.materialLabel}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm mt-1 line-clamp-2 group-hover:text-emerald-900 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <span className="text-[10px] uppercase text-gray-400 font-semibold block leading-none">
                        Wholesale Rate
                      </span>
                      <div className="mt-1">
                        {showPrices ? (
                          <span className="text-lg sm:text-xl font-extrabold text-emerald-950">
                            ₹{product.wholesalePrice}
                          </span>
                        ) : (
                          <span className="text-sm font-bold text-gray-400 blur-sm select-none">
                            ₹XXX.00
                          </span>
                        )}
                        <span className="text-[10px] text-gray-400 ml-1">/ pc</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase text-gray-400 font-semibold block leading-none">
                        Retail MRP
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-500 line-through mt-1 block">
                        ₹{product.mrp}
                      </span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 py-2 sm:py-2.5 px-3 rounded-lg sm:rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Catalog CTA Banner */}
      <div className="mt-10 bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-700">
        <div className="max-w-xl text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
            1,000+ Ready Designs In Stock
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
            Need Full B2B PDF Catalog with Wholesale Price List?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-2">
            Get our complete 2026 trending catalog sent straight to your WhatsApp within 60 seconds.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <a
            href="https://wa.me/918368484361?text=Hi%20Arora%20Group%20Wholesale,%20please%20send%20the%20latest%202026%20Anti-Tarnish%20PDF%20Catalog%20and%20Price%20List."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gold-500 hover:bg-gold-600 text-emerald-950 flex items-center justify-center gap-2 transition-all shadow-lg text-center"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Download PDF Catalog via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
