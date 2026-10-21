import React from "react";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Kalakriti Handicrafts",
  description:
    "Comprehensive FAQs on authentic Indian handicrafts, 5-layer shockproof packaging, damage-free guarantee, shipping timelines, Cash on Delivery, and bulk custom orders.",
};

export default function FAQPage() {
  // Schema.org FAQPage JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.slice(0, 10).map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQAccordion />
    </div>
  );
}
