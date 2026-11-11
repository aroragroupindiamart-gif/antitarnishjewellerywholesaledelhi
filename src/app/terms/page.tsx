import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata = {
  title: "B2B Wholesale Terms & Conditions | Arora Group Wholesale Delhi",
  description:
    "Review B2B wholesale policies for Arora Group Wholesale Delhi. ₹3,000 MOV, zero item MOQ, GST input tax invoicing, same-day dispatch terms.",
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-300 mb-3">
            <FileText className="w-3.5 h-3.5 text-gold-600" />
            Clear Business Policies
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            B2B Wholesale Terms & Ordering Conditions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Arora Group Wholesale — 1st Floor, E-134, Tagore Garden Extension, New Delhi 110027
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md space-y-8 text-sm text-gray-700 leading-relaxed">
          {/* MOV & MOQ */}
          <section>
            <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">
                1
              </span>
              Minimum Order Value (MOV) & Item-Level MOQ
            </h2>
            <p>
              Arora Group Wholesale maintains a transparent <strong>Minimum Order Value (MOV) of flat ₹3,000</strong> per consignment. We have an absolute <strong>0 item-level Minimum Order Quantity (MOQ)</strong> policy. Buyers are entitled to pick as few as 1 piece per SKU/design across our entire catalog of rings, necklaces, earrings, and bracelets.
            </p>
          </section>

          {/* Pricing & GST */}
          <section className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">
                2
              </span>
              B2B Pricing & GST Tax Invoicing
            </h2>
            <p>
              All prices displayed on this portal and in our digital catalogs are B2B wholesale prices. GST (3% on imitation jewellery) is billed formally. Business buyers with a valid GSTIN receive computer-generated tax invoices for Input Tax Credit (ITC) reconciliation.
            </p>
          </section>

          {/* Shipping & Delivery */}
          <section className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">
                3
              </span>
              Delhi NCR & Pan-India Dispatch Timelines
            </h2>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Delhi NCR Orders:</strong> Dispatched same-day for orders confirmed before 3:00 PM via express local couriers (WeFast, Porter, Delhivery). In-person counter pickup available at Tagore Garden showroom.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pan-India Shipments:</strong> Dispatched via air cargo and priority surface couriers (BlueDart, DTDC, Delhivery). Delivery time is typically 2 to 4 business days.</span>
              </li>
            </ul>
          </section>

          {/* Quality Guarantee & Defect Claims */}
          <section className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">
                4
              </span>
              Damage & Replacement Guarantee
            </h2>
            <p>
              Every consignment is barcode-inspected before dispatch. In the rare event of transit damage or manufacturing flaw, buyers must submit an unboxing video to our WhatsApp dispatch desk (+91 8368484361) within 48 hours of parcel receipt for an immediate 100% piece replacement or credit note.
            </p>
          </section>

          {/* Contact Strip */}
          <div className="border-t border-gray-100 pt-6 bg-slate-50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-emerald-950 block">Questions about our B2B Terms?</strong>
                <span className="text-xs text-gray-500">Our compliance and billing desk is ready to assist.</span>
              </div>
              <a
                href="https://wa.me/918368484361?text=Hi%20Arora%20Group,%20I%20have%20a%20question%20regarding%20wholesale%20terms."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-950 text-white font-bold text-xs uppercase tracking-wider"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
