"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Calendar, CheckCircle2, MessageCircle, Phone, Navigation, ArrowRight } from "lucide-react";

export default function WarehouseVisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM - 01:00 PM",
    interestedCategory: "All Categories",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const visitMessage = `Hi Arora Group Wholesale, I want to book an appointment to visit your Tagore Garden showroom.
Name: ${formData.name || "Buyer"}
Business: ${formData.businessName || "New Boutique"}
Phone: ${formData.phone || "Not provided"}
Preferred Date: ${formData.date || "Tomorrow"}
Time Slot: ${formData.timeSlot}
Interested In: ${formData.interestedCategory}`;

  const whatsappAppointmentUrl = `https://wa.me/918368484361?text=${encodeURIComponent(visitMessage)}`;

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Delhi Physical Experience Showroom
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 tracking-tight">
            Visit Arora Group Wholesale in Tagore Garden
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Touch samples, test PVD durability with water, verify weights, and purchase stock on the spot with instant GST invoicing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Location & Showroom Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
              <h2 className="text-xl sm:text-2xl font-black text-emerald-950 mb-4">
                What to Expect at Our West Delhi Facility
              </h2>

              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 block">Over 1,000+ Ready Physical SKUs:</strong>
                    Inspect the latest Korean aesthetic, Roman numeral cuffs, chunky croissant hoops, and chains in person.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 block">Comfortable Air-Conditioned Buying Desks:</strong>
                    No shouting, crowding, or sweating in narrow market alleys. Enjoy organized sample trays and high-speed Wi-Fi.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 block">Zero Item-Level MOQ Freedom:</strong>
                    Pick 1 piece of any design you like. Complete your ₹3,000 minimum order value on the spot.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 block">Immediate Handover & Barcode Billing:</strong>
                    Get computer-generated barcode invoices with formal GST tax credits. Pay via UPI, Card, Net Banking, or Cash.
                  </div>
                </li>
              </ul>
            </div>

            {/* Address & Metro Navigation Card */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Navigation className="w-4 h-4" />
                <span>Showroom Location & Transit</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                1st Floor, E-134, Tagore Garden Extension, New Delhi 110027
              </h3>
              <p className="text-sm text-emerald-200/90 leading-relaxed mb-6">
                Directly connected via the Delhi Metro Blue Line. Get down at <strong>Tagore Garden Metro Station</strong>, exit from Gate No. 1, and walk 250 meters (3-minute walk).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
                <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800">
                  <strong className="text-gold-300 block mb-1">Hours:</strong>
                  Mon – Sat: 10:00 AM – 7:00 PM (Closed on Sundays)
                </div>
                <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800">
                  <strong className="text-gold-300 block mb-1">Direct Calling Desk:</strong>
                  +91 8368484361 (WhatsApp & Calls)
                </div>
              </div>
            </div>
          </div>

          {/* Right: Appointment Booking Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-600/30 shadow-2xl sticky top-28">
              <h3 className="text-xl font-black text-gray-900 mb-1">
                Book Sourcing Appointment
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Reserve a dedicated wholesale executive to curate designs for your boutique.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Pooja Verma"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Business / Instagram Page Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. @delhi_jewels_boutique"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    WhatsApp Number *
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full text-sm px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Time Slot
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full text-sm px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      <option value="10:30 AM - 12:30 PM">10:30 AM - 12:30 PM</option>
                      <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                      <option value="03:30 PM - 05:30 PM">03:30 PM - 05:30 PM</option>
                      <option value="05:30 PM - 07:00 PM">05:30 PM - 07:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Primary Interest
                  </label>
                  <select
                    name="interestedCategory"
                    value={formData.interestedCategory}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option value="All Categories">All 8 Anti-Tarnish Categories</option>
                    <option value="Rings & Bands">Rings & Bands (316L)</option>
                    <option value="Chains & Necklaces">PVD Gold Chains & Necklaces</option>
                    <option value="Earrings & Hoops">Waterproof Hoops & Huggies</option>
                    <option value="Bracelets & Cuffs">Cuffs & Tennis Bracelets</option>
                    <option value="Korean Minimalist">Viral Korean Minimalist</option>
                  </select>
                </div>

                <a
                  href={whatsappAppointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-950 hover:bg-emerald-900 text-white flex items-center justify-center gap-2 shadow-xl transition-all text-center mt-2"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Confirm Showroom Appointment on WhatsApp</span>
                </a>

                <p className="text-[11px] text-gray-500 text-center">
                  Instant confirmation: We will send location pin and your visitor pass via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
