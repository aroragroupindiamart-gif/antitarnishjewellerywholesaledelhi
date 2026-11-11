"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Package, Check, ShieldCheck, Sparkles, MessageCircle, Truck, RefreshCw, ArrowRight } from "lucide-react";
import ShowroomVideoEmbed from "@/components/ShowroomVideoEmbed";

export default function SampleBoxPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    city: "New Delhi",
    deliveryAddress: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sampleBoxText = `Hi Arora Group Wholesale, I want to order the ₹1,499 Anti-Tarnish Sample Box (15 Pcs).
Business Name: ${formData.businessName || "New Reseller"}
Contact: ${formData.contactPerson || "Not provided"}
Phone: ${formData.phone || "Not provided"}
City: ${formData.city}
Address: ${formData.deliveryAddress || "Will provide"}
Pincode: ${formData.pincode || "Delhi NCR"}`;

  const whatsappCheckoutUrl = `https://wa.me/918368484361?text=${encodeURIComponent(sampleBoxText)}`;

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Zero Risk Quality Trial Kit
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 tracking-tight">
            Order the Anti-Tarnish Starter Box (₹1,499)
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            15 Curated Bestselling Pieces • Real 316L Surgical Steel & 18K Vacuum PVD Gold • Free Express Courier Delivery Across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: What's in the box */}
          <div className="lg:col-span-7 space-y-8">
            {/* Live Stock & Quality Video Proof */}
            <ShowroomVideoEmbed
              title="Watch Our Delhi Warehouse Stock & Quality Walkthrough"
              subtitle="Inspect our physical inventory, high-shine PVD finishes, and packaging standards before ordering your sample box."
              badge="Stock & Quality Video Proof"
            />

            {/* Box Contents Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
              <h2 className="text-xl sm:text-2xl font-black text-emerald-950 mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-emerald-700" />
                <span>What’s Inside Your 15-Piece Starter Kit?</span>
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Curated specifically from our bestselling viral SKUs so you can test finish, durability, and gauge retail customer demand:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="font-bold text-sm text-emerald-950 mb-1">4 Waterproof Rings</div>
                  <div className="text-xs text-gray-600">Roman numeral spinner, croissant dome, zircon band, adjustable signet.</div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="font-bold text-emerald-950 text-sm mb-1">4 PVD Gold Chains / Necklaces</div>
                  <div className="text-xs text-gray-600">Herringbone snake chain, dainty paperclip toggle, medallion choker.</div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="font-bold text-emerald-950 text-sm mb-1">4 Earrings & Huggies</div>
                  <div className="text-xs text-gray-600">Viral chunky teardrop hoops, mini pave CZ huggies, twisted cable ovals.</div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="font-bold text-emerald-950 text-sm mb-1">3 Cuffs & Kada Bracelets</div>
                  <div className="text-xs text-gray-600">Crystal roman cuff bangle, tennis bracelet sample, unisex minimalist kada.</div>
                </div>
              </div>

              {/* Cash Back Guarantee */}
              <div className="mt-6 p-4 rounded-xl bg-gold-50 border border-gold-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-700">
                  <strong className="text-gold-900 block font-bold">100% Investment Credit Guarantee:</strong>
                  The entire ₹1,499 cost of this sample box is credited back to your account when you place your first bulk order of ₹10,000 or more!
                </div>
              </div>
            </div>

            {/* Verification Test Instructions */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800">
              <h3 className="text-lg sm:text-xl font-bold text-gold-300 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span>3 Tests You Should Run On Our Samples</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-emerald-100">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-400">1. Salt Water Soak:</span>
                  <span>Submerge pieces in salt water for 48 hours. Notice zero oxidation, pitting, or green residue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-400">2. Alcohol / Perfume Spray:</span>
                  <span>Spray daily fragrance directly on our 18K vacuum PVD gold coating without fear of chipping or peeling.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-gold-400">3. Magnet Test:</span>
                  <span>Confirm our authentic 316L medical stainless steel grade against standard cheap iron or magnetic alloys.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Order Checkout Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-600/30 shadow-2xl sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    Starter Kit Order
                  </span>
                  <div className="text-2xl font-black text-gray-900 mt-0.5">₹1,499 Flat</div>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Free Express Shipping
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Aura Jewels / Reseller"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Delivery Address & City
                  </label>
                  <textarea
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Flat / Shop No., Street, Area, City, Pincode"
                    className="w-full text-sm px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <a
                  href={whatsappCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 transition-all text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Confirm ₹1,499 Sample Box on WhatsApp</span>
                </a>

                <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                  Fast WhatsApp checkout: Receive payment QR (UPI / Razorpay / Card) and immediate BlueDart tracking number.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
