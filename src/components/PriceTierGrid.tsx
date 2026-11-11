import React from "react";
import { Check, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface PriceTierGridProps {
  categoryName: string;
  tier1: { label: string; price: string; margin: string };
  tier2: { label: string; price: string; margin: string };
  tier3: { label: string; price: string; margin: string };
  location?: string;
}

export default function PriceTierGrid({
  categoryName,
  tier1,
  tier2,
  tier3,
  location = "Delhi NCR",
}: PriceTierGridProps) {
  const tiers = [
    {
      name: "Tier 1: Starter Batch",
      mov: "₹3,000 – ₹10,000 Cart Value",
      price: tier1.price,
      margin: tier1.margin,
      highlight: "Perfect for Instagram Resellers & New Shops",
      badge: "Zero MOQ per SKU",
      popular: false,
      benefits: [
        "No restriction on individual piece quantity (Pick 1 of any design)",
        "Mix & match across all 8 jewelry categories",
        "High-definition unbranded product photos for your catalog",
        "Dispatched same-day from Tagore Garden warehouse",
      ],
    },
    {
      name: "Tier 2: Bulk Store",
      mov: "₹10,000 – ₹25,000 Cart Value",
      price: tier2.price,
      margin: tier2.margin,
      highlight: "Highest Return on Investment for Boutiques",
      badge: "Most Popular in Delhi NCR",
      popular: true,
      benefits: [
        "Enhanced margin discount per unit",
        "Mix designs freely across all anti-tarnish categories",
        "Free priority courier delivery across Delhi NCR",
        "Dedicated sourcing executive on WhatsApp",
      ],
    },
    {
      name: "Tier 3: Master Importer Box",
      mov: "500+ Pieces / ₹25,000+ Volume",
      price: tier3.price,
      margin: tier3.margin,
      highlight: "Direct Factory Importer Wholesale Tariff",
      badge: "Direct Importer Rates",
      popular: false,
      benefits: [
        "Unbeatable lowest landed cost in North India",
        "Custom branding / carding options available",
        "Formal GST tax invoice with input tax credit",
        "Dedicated relationship manager & priority production queue",
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-50 text-gold-700 border border-gold-200 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          Transparent B2B Volume Pricing
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
          Direct Importer Wholesale Rates for {categoryName}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          No hidden middleman cuts. Pick single pieces freely to reach our low ₹3,000 MOV.
          Prices delivered to {location}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
              tier.popular
                ? "bg-gradient-to-b from-emerald-950 to-emerald-900 text-white shadow-2xl ring-2 ring-gold-500 scale-[1.02]"
                : "bg-white text-gray-900 border border-gray-200/90 shadow-lg hover:shadow-xl"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                {tier.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    tier.popular ? "text-gold-400" : "text-emerald-700"
                  }`}
                >
                  {tier.name}
                </span>
                {!tier.popular && (
                  <span className="text-[11px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="mt-2 mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span className={`text-xs ml-1 ${tier.popular ? "text-emerald-200" : "text-gray-500"}`}>
                  / piece avg.
                </span>
              </div>

              <div
                className={`text-xs font-semibold py-1 px-2.5 rounded-md inline-block mb-4 ${
                  tier.popular
                    ? "bg-emerald-800/80 text-gold-300 border border-emerald-700"
                    : "bg-emerald-50 text-emerald-800 border border-emerald-100"
                }`}
              >
                Profit Margin: {tier.margin}
              </div>

              <p className={`text-xs mb-5 ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>
                {tier.mov} • {tier.highlight}
              </p>

              <hr className={`my-4 ${tier.popular ? "border-emerald-800" : "border-gray-100"}`} />

              <ul className="space-y-3 mb-6 text-xs sm:text-sm">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        tier.popular ? "text-gold-400" : "text-emerald-600"
                      }`}
                    />
                    <span className={tier.popular ? "text-emerald-100" : "text-gray-700"}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-dashed border-gray-200/40">
              <a
                href={`https://wa.me/918368484361?text=${encodeURIComponent(
                  `Hi Arora Group Wholesale, I want to inquire about ${tier.name} for ${categoryName} in ${location}. Please share the current stock list.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg shadow-gold-900/30"
                    : "bg-emerald-950 hover:bg-emerald-900 text-white"
                }`}
              >
                <Zap className="w-4 h-4 fill-current" />
                Inquire This Tier on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
