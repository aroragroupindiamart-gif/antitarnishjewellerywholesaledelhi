"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { JsonLdScript, generateFAQSchema } from "@/components/SEO/JsonLd";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSchemaAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSchemaAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about ordering wholesale anti-tarnish jewellery in Delhi.",
}: FAQSchemaAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="w-full">
      {/* JSON-LD Script for Google SEO */}
      <JsonLdScript data={faqSchema} />

      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          B2B Sourcing Answers
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm sm:text-base text-gray-600">{subtitle}</p>}
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                  : "bg-white/80 hover:bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm sm:text-base"
                aria-expanded={isOpen}
              >
                <span className={`${isOpen ? "text-emerald-950 font-bold" : "text-gray-800"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-emerald-700" : "text-gray-400"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
