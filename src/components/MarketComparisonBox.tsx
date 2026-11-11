import React from "react";
import { CheckCircle2, XCircle, ArrowRight, MapPin, Building2, Store } from "lucide-react";

interface MarketComparisonBoxProps {
  locationName: string;
  traditionalIssue?: string;
  aroraAdvantage?: string;
  highlight?: string;
  distance?: string;
}

export default function MarketComparisonBox({
  locationName = "Sadar Bazar & Rui Mandi",
  traditionalIssue,
  aroraAdvantage,
  highlight,
  distance,
}: MarketComparisonBoxProps) {
  const defaultIssue =
    "Forced 12-24 pcs/color minimums, narrow congested lanes, counterfeit anti-tarnish labels, uncertified brass/nickel mixes that turn skin green, zero digital invoicing.";
  const defaultAdvantage =
    "Zero item-level MOQ (buy 1 pc per SKU), flat ₹3,000 cart minimum, 100% certified 316L surgical steel with 18K vacuum PVD gold, clean air-conditioned Tagore Garden showroom.";

  return (
    <div className="w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-emerald-800/80">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          Delhi Wholesale Market Reality Check
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Arora Group Wholesale vs. Traditional {locationName}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
          {highlight || `Why smart jewellery entrepreneurs and Instagram boutique owners bypass ${locationName}'s outdated middleman traps.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Traditional Market Box */}
        <div className="bg-emerald-900/40 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-red-200">
                  Traditional {locationName} Market
                </h3>
                <span className="text-[11px] text-gray-300">Unregulated Wholesale Supply</span>
              </div>
            </div>
            <span className="text-xs font-bold text-red-400 bg-red-950/60 px-2.5 py-1 rounded-full border border-red-800">
              High Friction
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed">
            {traditionalIssue || defaultIssue}
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Rigid MOQ: 12 to 24 pieces of the exact same design/color required</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Unverified alloy mixes: Flash electroplate rusts and chips within weeks</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Exhausting in-person hustle: Crowds, lack of parking, cash-only informal deals</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>No returns, zero digital tracking, zero sample box guarantee</span>
            </li>
          </ul>
        </div>

        {/* Arora Group Box */}
        <div className="bg-gradient-to-b from-emerald-850 to-emerald-900 rounded-xl p-6 border-2 border-gold-500/70 relative shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-gold-500/30 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gold-300">
                  Arora Group Wholesale (Delhi Hub)
                </h3>
                <span className="text-[11px] text-emerald-200">Direct Factory Importer</span>
              </div>
            </div>
            <span className="text-xs font-bold text-gold-300 bg-gold-950/80 px-2.5 py-1 rounded-full border border-gold-600/50">
              Verified E-E-A-T
            </span>
          </div>

          <p className="text-xs sm:text-sm text-emerald-100 mb-5 leading-relaxed font-medium">
            {aroraAdvantage || defaultAdvantage}
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-white">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span><strong>0 Item-Level MOQ:</strong> Pick 1 piece per design across 1,000+ SKUs</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span><strong>Certified Quality:</strong> 100% Medical-grade 316L steel + 18K vacuum PVD gold</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span><strong>Low ₹3,000 Total MOV:</strong> Start your jewelry business without bulk dead stock</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span><strong>Tagore Garden Showroom:</strong> Air-conditioned inspection, GST invoice, metro connectivity</span>
            </li>
          </ul>

          {distance && (
            <div className="mt-5 p-3 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-xs text-emerald-200 flex items-center justify-between">
              <span>Transit from {locationName}:</span>
              <strong className="text-gold-300">{distance}</strong>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-emerald-200">
          📍 Showroom Address: <strong>1st Floor, E-134, Tagore Garden Extension, New Delhi 110027</strong>
        </div>
        <a
          href="/warehouse-visit"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold bg-gold-500 hover:bg-gold-600 text-emerald-950 px-5 py-2.5 rounded-lg transition-all shadow"
        >
          <span>Book Showroom Appointment</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
