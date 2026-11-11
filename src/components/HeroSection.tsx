import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck, Sparkles, MapPin, Package, ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  h1: string;
  subheadline: string;
  category?: string;
  location?: string;
  basePrice?: number | string;
}

export default function HeroSection({
  h1,
  subheadline,
  category = "Jewellery",
  location = "Delhi NCR",
  basePrice = 49,
}: HeroSectionProps) {
  const whatsappUrl = `https://wa.me/918368484361?text=${encodeURIComponent(
    `Hi Arora Group Wholesale, I am viewing wholesale ${category} for ${location}. Please send the latest PDF catalog and stock availability.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Subtle luxury glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Entity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-800/80 text-gold-300 border border-gold-500/40 shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
              <span>Arora Group Wholesale — Delhi Anti-Tarnish Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {h1}
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subheadline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 my-6 sm:my-8 py-3 px-4 bg-emerald-950/60 rounded-xl border border-emerald-800/80 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-gold-400">₹3,000</div>
                <div className="text-[10px] sm:text-xs text-emerald-200 uppercase tracking-wide mt-0.5">Low Flat MOV</div>
              </div>
              <div className="border-x border-emerald-800/80">
                <div className="text-xl sm:text-2xl font-extrabold text-white">0 MOQ</div>
                <div className="text-[10px] sm:text-xs text-emerald-200 uppercase tracking-wide mt-0.5">Item-Level Free</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-gold-400">₹{basePrice}+</div>
                <div className="text-[10px] sm:text-xs text-emerald-200 uppercase tracking-wide mt-0.5">Factory Rates</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-emerald-950 shadow-xl shadow-gold-900/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Catalog & Stock</span>
              </a>

              <Link
                href="/sample-box"
                className="px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <Package className="w-4 h-4 text-gold-400" />
                <span>Get ₹1,499 Starter Box (15 Pcs)</span>
              </Link>
            </div>

            {/* Link to Parent Entity */}
            <div className="mt-4 text-[11px] text-emerald-300/80 flex items-center justify-center lg:justify-start gap-1.5">
              <span>Official B2B Satellite for</span>
              <a
                href="https://www.aroragroupwholesale.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 font-semibold underline underline-offset-2 hover:text-gold-200"
              >
                Arora Group Wholesale (E-134, Tagore Garden Extension, New Delhi)
              </a>
            </div>
          </div>

          {/* Right Column: Physical Warehouse & Quality Proof Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-emerald-850 to-emerald-950 p-6 sm:p-7 rounded-2xl border-2 border-gold-500/50 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800 mb-5">
                <div>
                  <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block">
                    Delhi Fulfillment Hub
                  </span>
                  <div className="text-base font-extrabold text-white mt-0.5">
                    Arora Group Direct Warehouse
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Verified Physical E-E-A-T
                </span>
              </div>

              {/* Trust Features Checklist */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-emerald-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>100% 316L Surgical Stainless Steel:</strong> Zero rust, zero green skin discoloration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>PVD Vacuum 18K Gold Coating:</strong> 10x more resilient than standard electroplating.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tagore Garden Showroom:</strong> Walk in, touch samples, and purchase on the spot.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Same-Day Delhi NCR Dispatch:</strong> Local courier or showroom pickup within 2 hours.
                  </span>
                </li>
              </ul>

              {/* Physical Location Card */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs">Physical Inspection & Warehouse:</div>
                    <div className="text-emerald-200 mt-0.5">
                      1st Floor, E-134, Tagore Garden Extension, New Delhi, Delhi 110027 (Near Tagore Garden Metro)
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-emerald-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-300">Mon - Sat: 10:00 AM - 7:00 PM</span>
                  <Link
                    href="/warehouse-visit"
                    className="font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>Book Visit</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Trust Badges Ribbon */}
        <div className="mt-12 pt-8 border-t border-emerald-800/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-lg bg-emerald-900/30 border border-emerald-800/50">
            <div className="font-bold text-sm text-gold-300">316L Surgical Steel</div>
            <div className="text-[11px] text-emerald-200 mt-0.5">Medical Grade Alloy</div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-900/30 border border-emerald-800/50">
            <div className="font-bold text-sm text-gold-300">18K Vacuum PVD Plating</div>
            <div className="text-[11px] text-emerald-200 mt-0.5">Sweat & Perfume Proof</div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-900/30 border border-emerald-800/50">
            <div className="font-bold text-sm text-gold-300">Tagore Garden Facility</div>
            <div className="text-[11px] text-emerald-200 mt-0.5">Physical West Delhi Hub</div>
          </div>
          <div className="p-3 rounded-lg bg-emerald-900/30 border border-emerald-800/50">
            <div className="font-bold text-sm text-gold-300">Same-Day NCR Dispatch</div>
            <div className="text-[11px] text-emerald-200 mt-0.5">Express BlueDart / Delhivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
