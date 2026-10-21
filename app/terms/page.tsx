import React from "react";
import { Metadata } from "next";
import { brandConfig } from "@/config/brand";

export const metadata: Metadata = {
  title: "Terms & Conditions | Kalakriti Handicrafts",
  description: "Terms and conditions of purchase, authenticity, and service at Kalakriti Handicrafts.",
};

export default function TermsPage() {
  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
            Legal & Store Operations
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Terms & Conditions
          </h1>
          <p className="text-xs text-charcoal-500">Effective: October 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-sand-200 shadow-card text-xs sm:text-sm text-charcoal-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">1. Nature of Handmade Handicrafts</h2>
            <p>
              All products sold on {brandConfig.name} are authentic, hand-carved, wheel-thrown, or hand-printed by traditional artisans. Because each artifact is shaped individually without automated factory molds, minor variations in dimensions (±5%), brushstroke density, and natural clay/wood hue are intrinsic hallmarks of authentic handicraft and do not constitute manufacturing defects.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">2. Pricing & Currency</h2>
            <p>
              All prices displayed on the website are in Indian Rupees (INR ₹) and are fully inclusive of all applicable Goods and Services Taxes (GST). We reserve the right to modify prices without prior notice based on raw brass, sandalwood, and copper market fluctuations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">3. Orders & Cancellation</h2>
            <p>
              Orders can be cancelled free of charge within 12 hours of placement by sending a message on WhatsApp (+91 98765 43210) or emailing care@kalakritihandicrafts.com. Once an order enters our multi-layer shockproof packing process, cancellations are no longer possible, but the order remains eligible for our 7-day return policy upon receipt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">4. Jurisdiction</h2>
            <p>
              Any disputes arising from transactions on this platform shall be subject to the exclusive jurisdiction of the competent courts of Jaipur, Rajasthan, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
