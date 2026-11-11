"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, MapPin, ChevronDown, Building } from "lucide-react";

export default function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);

  const categories = [
    { name: "Anti-Tarnish Rings", href: "/wholesale/rings" },
    { name: "Chains & Layered Necklaces", href: "/wholesale/necklaces-chains" },
    { name: "Earrings & Chunky Hoops", href: "/wholesale/earrings-hoops" },
    { name: "Bracelets & Cuffs / Kada", href: "/wholesale/bracelets-kada" },
    { name: "Pendants & Lockets", href: "/wholesale/pendants" },
    { name: "Korean Minimalist", href: "/wholesale/korean-minimalist" },
    { name: "Men's Anti-Tarnish Jewellery", href: "/wholesale/mens-jewellery" },
    { name: "Evil Eye & Protective Charms", href: "/wholesale/evil-eye-charms" },
  ];

  const markets = [
    { name: "Sadar Bazar & Rui Mandi Guide", href: "/delhi-markets/sadar-bazar-rui-mandi" },
    { name: "Karol Bagh Jewellery Guide", href: "/delhi-markets/karol-bagh" },
    { name: "Chandni Chowk Sourcing Guide", href: "/delhi-markets/chandni-chowk" },
    { name: "Tagore Garden Showroom Hub", href: "/delhi-markets/tagore-garden-wholesale-hub" },
    { name: "Lajpat Nagar Reseller Guide", href: "/delhi-markets/lajpat-nagar" },
    { name: "Pitampura & NSP Guide", href: "/delhi-markets/pitampura" },
    { name: "Connaught Place B2B Guide", href: "/delhi-markets/connaught-place" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/80 text-white shadow-md">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-gold-600/30 to-emerald-900 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-white/10 flex items-center justify-center gap-2">
        <span className="hidden sm:inline">🚀 Direct Factory Importer:</span>
        <span className="font-bold text-gold-300">Flat ₹3,000 MOV • 0 Item-Level MOQ • Same-Day Delhi NCR Dispatch</span>
        <span className="hidden md:inline">| Tagore Garden Warehouse: +91 8368484361</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Entity Signal */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-emerald-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              AG
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base tracking-tight leading-tight text-white flex items-center gap-1.5">
                <span>Arora Group</span>
                <span className="text-gold-400 font-semibold text-xs border border-gold-400/40 px-1 rounded">DELHI</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-emerald-200 uppercase tracking-widest font-medium">
                Anti-Tarnish Wholesale Hub
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-gold-300 transition-colors py-2"
                aria-expanded="false"
              >
                <span>Wholesale Categories</span>
                <ChevronDown className="w-4 h-4 text-emerald-300 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-emerald-950 border border-emerald-800 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block px-4 py-2 text-xs hover:bg-emerald-850 hover:text-gold-300 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Delhi Markets Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-gold-300 transition-colors py-2"
                aria-expanded="false"
              >
                <span>Delhi Markets</span>
                <ChevronDown className="w-4 h-4 text-emerald-300 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-emerald-950 border border-emerald-800 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {markets.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="block px-4 py-2 text-xs hover:bg-emerald-850 hover:text-gold-300 transition-colors"
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/warehouse-visit" className="hover:text-gold-300 transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Showroom Visit</span>
            </Link>
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918368484361?text=Hi%20Arora%20Group%20Wholesale,%20please%20send%20the%20latest%20Anti-Tarnish%20PDF%20Catalog%20and%20Price%20List."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all shadow border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>WhatsApp: +91 8368484361</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/918368484361"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-800 text-white rounded-lg"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950 border-b border-emerald-800 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold hover:text-gold-300"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gold-300"
            >
              <span>Product Categories</span>
              <ChevronDown className={`w-4 h-4 ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>
            {categoriesOpen && (
              <div className="pl-3 space-y-1.5 py-2 border-l border-emerald-800">
                {categories.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-gray-300 hover:text-gold-300 py-1"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setMarketsOpen(!marketsOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gold-300"
            >
              <span>Delhi Market Guides</span>
              <ChevronDown className={`w-4 h-4 ${marketsOpen ? "rotate-180" : ""}`} />
            </button>
            {marketsOpen && (
              <div className="pl-3 space-y-1.5 py-2 border-l border-emerald-800">
                {markets.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-gray-300 hover:text-gold-300 py-1"
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/warehouse-visit"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-emerald-200"
          >
            Book Tagore Garden Showroom Visit
          </Link>

          <div className="pt-2 border-t border-emerald-800">
            <a
              href="https://wa.me/918368484361?text=Hi%20Arora%20Group%20Wholesale,%20please%20send%20the%20latest%20Anti-Tarnish%20PDF%20Catalog%20and%20Price%20List."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
