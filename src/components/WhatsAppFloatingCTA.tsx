"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppFloatingCTAProps {
  category?: string;
  location?: string;
  sku?: string;
}

export default function WhatsAppFloatingCTA({
  category = "Anti-Tarnish Jewellery",
  location = "Delhi NCR",
  sku,
}: WhatsAppFloatingCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prefilledText = sku
    ? `Hi Arora Group Wholesale, I am interested in SKU ${sku} (${category}) for wholesale in ${location}. Please share the current stock and bulk price.`
    : `Hi Arora Group, I am viewing wholesale ${category} for ${location}. Please share the PDF catalog and ₹3,000 MOV details.`;

  const whatsappUrl = `https://wa.me/918368484361?text=${encodeURIComponent(prefilledText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini notification popup after scroll */}
      {hasScrolled && !isOpen && (
        <div className="mb-2 bg-white text-gray-800 text-xs shadow-xl border border-emerald-100 rounded-lg p-3 max-w-[240px] animate-fade-in relative hidden sm:block">
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
            aria-label="Close bubble"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-emerald-950 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Tagore Garden Hub Live
          </p>
          <p className="text-gray-600 mt-1">
            Need PDF Catalog or custom order? WhatsApp our Delhi dispatch desk now.
          </p>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group border-2 border-emerald-400/40"
        aria-label="Chat with Arora Group Wholesale on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current text-white transition-transform group-hover:rotate-12" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold-400 rounded-full border-2 border-white"></span>
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider text-emerald-100 leading-none">Instant Delhi Desk</div>
          <div className="text-sm font-bold tracking-tight">WhatsApp Wholesale</div>
        </div>
      </a>
    </div>
  );
}
