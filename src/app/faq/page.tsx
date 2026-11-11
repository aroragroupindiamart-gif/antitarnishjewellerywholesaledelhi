import React from "react";
import FAQSchemaAccordion from "@/components/FAQSchemaAccordion";
import Link from "next/link";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Anti-Tarnish Jewellery Wholesale FAQs | Arora Group Delhi",
  description:
    "Frequently asked questions about wholesale anti-tarnish jewellery in Delhi. Learn about MOV, 316L steel certification, PVD gold coating, and showroom visits.",
};

export default function FAQMasterPage() {
  const masterFaqs = [
    {
      q: "What is the Minimum Order Value (MOV) to start?",
      a: "Our MOV is flat ₹3,000 for your total cart across all categories combined. There is no restriction on individual SKUs—you can pick 1 piece per design.",
    },
    {
      q: "Where is your physical warehouse and can I visit without an appointment?",
      a: "Our showroom is located at 1st Floor, E-134, Tagore Garden Extension, New Delhi 110027 (3 min walk from Tagore Garden Metro Station Gate 1). Walk-ins are welcome Monday to Saturday between 10:00 AM and 7:00 PM, although booking an appointment on WhatsApp ensures a dedicated sales manager.",
    },
    {
      q: "What makes your jewellery truly 'anti-tarnish' unlike Sadar Bazar items?",
      a: "Traditional Sadar Bazar imitation jewelry uses cheap brass or zinc coated with a thin flash chemical electroplate. Arora Group uses authentic surgical-grade 316L stainless steel bonded with genuine 18K gold through vacuum Physical Vapor Deposition (PVD). This atomic-level bonding resists sweat, sea water, perfume, and soaps without fading or discoloring skin.",
    },
    {
      q: "Do you supply unbranded photos and videos for Instagram resellers?",
      a: "Yes! All verified wholesale buyers gain access to our high-resolution Google Drive folder containing studio images, flat lays, model shots, and reels without any Arora Group watermarks.",
    },
    {
      q: "How does the ₹1,499 Sample Box offer work?",
      a: "The Starter Box contains 15 bestselling pieces (rings, necklaces, hoops, cuffs) with free express shipping. When you test the quality and subsequently place a bulk order of ₹10,000 or more, the entire ₹1,499 is credited to your invoice as a discount.",
    },
    {
      q: "What are the payment options for wholesale orders?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm), IMPS/NEFT bank transfers, Credit/Debit cards via Razorpay/Cashfree, and Cash at our Tagore Garden showroom counter.",
    },
    {
      q: "How fast do you dispatch orders across Delhi NCR?",
      a: "Orders placed before 3:00 PM are dispatched on the same business day. In Delhi NCR, local couriers deliver within 24 hours. Buyers may also pick up orders directly at our Tagore Garden showroom counter.",
    },
  ];

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Clear guidelines on purchasing wholesale anti-tarnish jewellery from Arora Group Delhi.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md">
          <FAQSchemaAccordion
            faqs={masterFaqs}
            title="Wholesale Buying & Sourcing FAQs"
            subtitle=""
          />

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <h3 className="font-bold text-base text-emerald-950 mb-2">
              Have another question not answered here?
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Our Tagore Garden sales desk is active on WhatsApp Monday–Saturday.
            </p>
            <a
              href="https://wa.me/918368484361?text=Hi%20Arora%20Group,%20I%20have%20a%20question%20regarding%20wholesale%20sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp (+91 8368484361)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
