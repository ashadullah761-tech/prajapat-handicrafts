import React from "react";
import { Metadata } from "next";
import { brandConfig } from "@/config/brand";
import { Truck, RotateCcw, ShieldCheck, Package } from "lucide-react";

export const metadata: Metadata = {
  title: `Shipping & Returns Policy | ${brandConfig.name}`,
  description: "Learn about our 5-layer shockproof packaging, damage-free guarantee, shipping timelines, and 7-day hassle-free returns.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
            Delivery & Customer Delight
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Shipping & Returns Policy
          </h1>
          <p className="text-xs text-charcoal-500">Damage-Free Guarantee Across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-2">
            <Truck className="w-6 h-6 text-terracotta" />
            <h3 className="font-serif font-bold text-sm text-charcoal-900">Free Pan-India Delivery</h3>
            <p className="text-xs text-charcoal-600">On all prepaid and COD orders above ₹999.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-2">
            <Package className="w-6 h-6 text-forest" />
            <h3 className="font-serif font-bold text-sm text-charcoal-900">5-Layer Shockproof Pack</h3>
            <p className="text-xs text-charcoal-600">Honeycomb paper & 7-ply export grade boxes.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-2">
            <RotateCcw className="w-6 h-6 text-saffron-600" />
            <h3 className="font-serif font-bold text-sm text-charcoal-900">7-Day Easy Returns</h3>
            <p className="text-xs text-charcoal-600">Doorstep return pickup with zero stress.</p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-sand-200 shadow-card text-xs sm:text-sm text-charcoal-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">1. Shipping Timelines</h2>
            <p>
              All orders are hand-inspected at our {brandConfig.city} workshop within 24 to 48 hours of booking. Standard transit times are:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Metro Cities (Delhi, Mumbai, Bengaluru, Kolkata, Hyderabad, Chennai):</strong> 3 to 4 business days.</li>
              <li><strong>Tier-2 & Tier-3 Cities:</strong> 4 to 6 business days.</li>
              <li><strong>Remote / Northeast / Island Regions:</strong> 6 to 8 business days.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">2. Our 100% Damage-Free Guarantee</h2>
            <p>
              Because pottery, blue ceramics, and bell metal items are fragile, we take packaging very seriously. However, in the rare event that an item arrives broken or chipped in transit, you are completely protected:
            </p>
            <p className="p-4 rounded-2xl bg-forest-50 border border-forest-200 text-forest-900 font-medium">
              Simply photograph or take a quick unboxing video of the damaged item and WhatsApp it to us at <strong>{brandConfig.displayWhatsapp}</strong> within 48 hours of delivery. We will immediately dispatch a fresh replacement free of charge or initiate a 100% full refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">3. Return Process</h2>
            <p>
              If you wish to return an item for any other reason, you can request a return within 7 calendar days of delivery. The item must be in unused condition with original protective tags and packaging intact. Our courier partner will arrange a doorstep reverse pickup.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
