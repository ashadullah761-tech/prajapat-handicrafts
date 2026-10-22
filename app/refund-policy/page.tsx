import React from "react";
import { Metadata } from "next";
import { brandConfig } from "@/config/brand";

export const metadata: Metadata = {
  title: `Refund & Cancellation Policy | ${brandConfig.name}`,
  description: `Information on order refunds, store credits, and processing timelines at ${brandConfig.name}.`,
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
            Customer Guarantee
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-charcoal-500">Transparent & Fair Customer Experience</p>
        </div>

        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-sand-200 shadow-card text-xs sm:text-sm text-charcoal-700 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">1. Refund Eligibility</h2>
            <p>
              Refunds are processed promptly under any of the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Item arrived damaged, chipped, or defective during transit.</li>
              <li>Incorrect product or variant delivered by mistake.</li>
              <li>Order cancelled within 12 hours of placement before dispatch.</li>
              <li>Item returned within the 7-day return window in original condition.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">2. Refund Methods & Timelines</h2>
            <p>
              Once a returned package reaches our {brandConfig.city} workshop and completes basic physical inspection:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Prepaid Orders (UPI / Cards / Net Banking):</strong> Refund is credited back to the original source account within 4 to 7 working days.</li>
              <li><strong>Cash on Delivery (COD) Orders:</strong> Our customer support desk will request your UPI ID or Bank NEFT details to transfer the refund directly to your account within 3 business days.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-charcoal-900">3. Non-Refundable Items</h2>
            <p>
              Items customized with personalized laser/brass engraving (e.g. customized corporate hampers with custom corporate logos) cannot be refunded unless they suffer physical transit damage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
