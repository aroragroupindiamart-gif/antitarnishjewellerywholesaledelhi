import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MessageCircle, ArrowLeft, Home, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Arora Group Wholesale Delhi",
  description: "The page you are looking for does not exist or has moved. Browse our wholesale anti-tarnish jewellery categories or chat on WhatsApp.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-lg w-full text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
          404 Error
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          The requested page could not be located. Browse our 8 wholesale jewellery categories, visit our showroom, or contact our dispatch team on WhatsApp.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/wholesale"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Package className="w-4 h-4" />
            <span>View All Categories</span>
          </Link>

          <a
            href="https://wa.me/918368484361?text=Hi%20Arora%20Group%2C%20I%20was%20browsing%20the%20website%20and%20need%20the%20latest%20wholesale%20catalog."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
