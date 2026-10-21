import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Kalakriti Handicrafts",
  description: "Privacy policy and data protection practices of Kalakriti Handicrafts.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
            Legal & Trust
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal-500">Last updated: October 2026</p>
        </div>

        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-sand-200 shadow-card text-xs sm:text-sm text-charcoal-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">1. Information We Collect</h2>
            <p>
              At {brandConfig.name}, we collect only necessary personal data required to process, fulfill, and deliver your handcrafted orders. This includes your name, delivery address, postal code, phone/WhatsApp number, and email address. We do not store full credit/debit card numbers; all payment transactions are tokenized through RBI-authorized payment aggregators (e.g., Razorpay, UPI).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">2. How We Use Your Data</h2>
            <p>
              Your contact details are used strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process and ship your orders with our courier partners (Bluedart, Delhivery).</li>
              <li>Send real-time dispatch and tracking updates via SMS, email, and WhatsApp.</li>
              <li>Provide artisan concierge support for custom inquiries and size assistance.</li>
              <li>Notify you of new kiln firings or seasonal discounts if you opted in to our newsletter.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">3. Third-Party Sharing</h2>
            <p>
              We NEVER sell, rent, or trade your personal information with third-party advertisers. Information is only shared with verified delivery partners exclusively for the purpose of doorstep delivery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">4. Contact Information</h2>
            <p>
              For any data privacy concerns or to request data removal, please contact our Data Protection Officer at:
              <br />
              <strong>Email:</strong> {brandConfig.email}
              <br />
              <strong>Studio Address:</strong> {brandConfig.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
