import React from "react";
import Link from "next/link";
import { ShieldCheck, Building2, Package, Sparkles, ExternalLink, ArrowRight, Award, Truck } from "lucide-react";

export const metadata = {
  title: "About Arora Group Wholesale | Delhi Anti-Tarnish Jewellery Importer",
  description:
    "Learn about Arora Group Wholesale, Delhi's trusted direct factory importer of 316L stainless steel & 18K vacuum PVD anti-tarnish jewellery. Showroom in Tagore Garden.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-300 mb-3">
            <Building2 className="w-3.5 h-3.5 text-gold-600" />
            Direct Factory Importer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">
            About Arora Group Wholesale (Delhi Hub)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Eliminating traditional wholesale middlemen with transparent B2B pricing, 0 item-level MOQ, and verified 316L medical stainless steel.
          </p>
        </div>

        {/* Strategic Cross-Entity Relationship Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white shadow-2xl border border-gold-500/30">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
                Entity Architecture & E-E-A-T
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Relationship to Arora Group Wholesale
              </h2>
              <p className="mt-2 text-sm text-emerald-100 leading-relaxed">
                antitarnishjewellerywholesaledelhi.com operates as a dedicated high-converting acquisition satellite for{" "}
                <a
                  href="https://www.aroragroupwholesale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-300 underline font-semibold"
                >
                  Arora Group Wholesale (aroragroupwholesale.com)
                </a>
                . While our parent platform services national wholesale distributors across India, this specialized portal is tailored for Delhi NCR, West Delhi, and North Indian retail boutiques, Instagram sellers, and modern jewellery resellers.
              </p>
            </div>
            <a
              href="https://www.aroragroupwholesale.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all shadow"
            >
              <span>Visit National Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Why Arora Group Exists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-emerald-950 mb-2">
              0 Item-Level MOQ Freedom
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Traditional markets force you to buy 12–24 pieces of the exact same design. Arora Group allows you to pick single pieces freely, so you can test 30 different styles within a small ₹3,000 cart.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-emerald-950 mb-2">
              100% 316L Surgical Steel + PVD
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              No unverified brass alloys or flash electroplates that chip in days. Every SKU is produced with genuine 316L medical stainless steel and high-vacuum 18K Physical Vapor Deposition ion plating.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-emerald-950 mb-2">
              Physical Showroom Experience
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We are not an anonymous dropshipping broker. Our physical warehouse and showroom is located at 1st Floor, E-134, Tagore Garden Extension, New Delhi, open for daily visits and stock inspection.
            </p>
          </div>
        </div>

        {/* Warehouse CTA */}
        <div className="text-center bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-emerald-950 mb-3">
            Ready to Partner with Delhi's Direct Importer?
          </h3>
          <p className="text-sm text-gray-600 mb-6 max-w-xl mx-auto">
            Order our ₹1,499 sample box, book an appointment at our Tagore Garden facility, or chat directly on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sample-box"
              className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider"
            >
              Order Sample Box (₹1,499)
            </Link>
            <Link
              href="/warehouse-visit"
              className="px-6 py-3.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider"
            >
              Book Showroom Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
