"use client";

import React, { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Mail, Building2, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappInquiryUrl = `https://wa.me/918368484361?text=${encodeURIComponent(
    `Hi Arora Group Wholesale, inquiry from:
Name: ${formData.name || "Buyer"}
Phone: ${formData.phone || "Not provided"}
Email: ${formData.email || "Not provided"}
Message: ${formData.message || "I want to inquire about wholesale anti-tarnish jewelry."}`
  )}`;

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Delhi Wholesale Experience Center
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">
            Contact Arora Group Wholesale
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Our Tagore Garden Extension showroom and dispatch warehouse is open Monday to Saturday. Walk in, call, or chat with our wholesale team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800 space-y-6">
              <h2 className="text-xl font-extrabold text-gold-300">
                Fulfillment Warehouse & Showroom
              </h2>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-1">Physical Address:</strong>
                  <span className="text-emerald-100 leading-relaxed">
                    1st Floor, E-134, Tagore Garden Extension, New Delhi, Delhi 110027 (India)
                  </span>
                  <div className="text-xs text-gold-400 mt-2">
                    Nearest Metro: Tagore Garden (Blue Line, Gate No. 1 - 3 min walk)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm border-t border-emerald-800/80 pt-4">
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-1">Phone & WhatsApp:</strong>
                  <a href="tel:+918368484361" className="text-emerald-200 hover:text-gold-300 block">
                    +91 8368484361
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm border-t border-emerald-800/80 pt-4">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-1">Operating Hours:</strong>
                  <span className="text-emerald-200">Monday – Saturday: 10:00 AM – 7:00 PM</span>
                  <div className="text-xs text-emerald-400 mt-1">Closed on Sundays</div>
                </div>
              </div>

              <div className="border-t border-emerald-800/80 pt-4">
                <a
                  href="https://wa.me/918368484361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (+91 8368484361)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md">
              <h3 className="text-xl font-black text-gray-900 mb-2">
                Send Wholesale Inquiry
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Tell us what categories or bulk quantity you need. Our sourcing desk replies within 15 minutes.
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
                    placeholder="e.g. Ananya Gupta"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@yourboutique.com"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Requirement / Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Specify categories, target price, or estimated order value..."
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-950 hover:bg-emerald-900 text-white flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Send Inquiry via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
