import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck, ExternalLink, Clock, Sparkles } from "lucide-react";

export default function GlobalFooter() {
  const categories = [
    { name: "Anti-Tarnish Rings", href: "/wholesale/rings" },
    { name: "PVD Gold Chains & Necklaces", href: "/wholesale/necklaces-chains" },
    { name: "Earrings & Chunky Hoops", href: "/wholesale/earrings-hoops" },
    { name: "Bracelets & Cuffs / Kada", href: "/wholesale/bracelets-kada" },
    { name: "Anti-Tarnish Pendants", href: "/wholesale/pendants" },
    { name: "Korean Minimalist Jewellery", href: "/wholesale/korean-minimalist" },
    { name: "Men's Anti-Tarnish Jewellery", href: "/wholesale/mens-jewellery" },
    { name: "Evil Eye & Protective Charms", href: "/wholesale/evil-eye-charms" },
  ];

  const delhiHubs = [
    { name: "Sadar Bazar Wholesale", href: "/wholesale/rings/sadar-bazar" },
    { name: "Rui Mandi Jewellery Sourcing", href: "/wholesale/earrings-hoops/rui-mandi" },
    { name: "Chandni Chowk / Dariba Kalan", href: "/wholesale/necklaces-chains/chandni-chowk" },
    { name: "Karol Bagh Jewellery Hub", href: "/wholesale/bracelets-kada/karol-bagh" },
    { name: "Tagore Garden Flagship Hub", href: "/wholesale/rings/tagore-garden-west-delhi" },
    { name: "Lajpat Nagar South Delhi", href: "/wholesale/pendants/lajpat-nagar" },
    { name: "Pitampura & NSP Delhi", href: "/wholesale/korean-minimalist/pitampura" },
    { name: "Connaught Place B2B", href: "/wholesale/mens-jewellery/connaught-place" },
  ];

  const marketGuides = [
    { name: "Sadar Bazar & Rui Mandi Guide", href: "/delhi-markets/sadar-bazar-rui-mandi" },
    { name: "Karol Bagh Jewellery Guide", href: "/delhi-markets/karol-bagh" },
    { name: "Chandni Chowk Sourcing Guide", href: "/delhi-markets/chandni-chowk" },
    { name: "Tagore Garden Showroom Hub", href: "/delhi-markets/tagore-garden-wholesale-hub" },
    { name: "Lajpat Nagar Reseller Guide", href: "/delhi-markets/lajpat-nagar" },
    { name: "Pitampura & NSP Guide", href: "/delhi-markets/pitampura" },
    { name: "Connaught Place B2B Guide", href: "/delhi-markets/connaught-place" },
  ];

  return (
    <footer className="bg-emerald-950 text-gray-300 border-t border-emerald-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Entity Connection Alert Box */}
        <div className="mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-850 border border-gold-500/30 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Verified Arora Group Wholesale Satellite</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                antitarnishjewellerywholesaledelhi.com is powered by Arora Group Wholesale
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Dedicated local acquisition portal for Delhi NCR & North India. Anchored to Arora Group’s verified physical warehouse in Tagore Garden Extension, New Delhi. Direct factory importer with zero item-level MOQ and ₹3,000 MOV.
              </p>
            </div>

            <a
              href="https://www.aroragroupwholesale.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg"
            >
              <span>Visit Primary Brand Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Physical HQ & Entity Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500 text-emerald-950 font-black text-base flex items-center justify-center">
                AG
              </div>
              <span className="font-extrabold text-white text-base">Arora Group Wholesale</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              North India’s premier direct factory importer of 316L medical stainless steel and 18K vacuum PVD gold anti-tarnish fashion jewellery.
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Delhi Warehouse & Showroom:</strong>
                  <span>1st Floor, E-134, Tagore Garden Extension, New Delhi, Delhi 110027</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+918368484361" className="text-gold-300 hover:underline">
                  +91 8368484361
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: 8 Product Categories */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-emerald-800 pb-2">
              Wholesale Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="hover:text-gold-300 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Delhi Market Sourcing Guides */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-emerald-800 pb-2">
              Delhi Market Guides
            </h4>
            <ul className="space-y-2 text-xs">
              {marketGuides.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="hover:text-gold-300 transition-colors">
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Delhi Hubs & Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-emerald-800 pb-2">
              Delhi Local Hubs & Tools
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              {delhiHubs.slice(0, 5).map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="hover:text-gold-300 transition-colors">
                    {h.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-emerald-800/80 space-y-2 text-xs">
              <div>
                <Link href="/sample-box" className="text-gold-400 font-bold hover:underline flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Order ₹1,499 Sample Starter Box</span>
                </Link>
              </div>
              <div>
                <Link href="/warehouse-visit" className="text-emerald-200 hover:underline">
                  Book Tagore Garden Showroom Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Arora Group Wholesale. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/about" className="hover:text-gold-300">About Arora Group</Link>
            <Link href="/contact" className="hover:text-gold-300">Contact & Warehouse</Link>
            <Link href="/terms" className="hover:text-gold-300">B2B Wholesale Terms</Link>
            <Link href="/faq" className="hover:text-gold-300">FAQs</Link>
            <a
              href="https://www.aroragroupwholesale.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300"
            >
              aroragroupwholesale.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
