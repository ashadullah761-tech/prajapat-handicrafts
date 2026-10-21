"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { brandConfig } from "@/config/brand";
import {
  PackageCheck,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialOrderId = searchParams.get("orderId") || "";

  const [orderId, setOrderId] = useState(initialOrderId);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialOrderId) {
      setHasSearched(true);
    }
  }, [initialOrderId]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setHasSearched(true);
    }, 500);
  };

  const steps = [
    {
      title: "Order Placed & Verified",
      date: "Oct 18, 11:30 AM",
      desc: "Order confirmed with artisan studio in Kot Jewar, Jaipur.",
      status: "completed",
    },
    {
      title: "Handcrafted Quality Inspection",
      date: "Oct 18, 04:15 PM",
      desc: "Glaze, weight, and brass polishing verified by senior master.",
      status: "completed",
    },
    {
      title: "5-Layer Shockproof Packaging",
      date: "Oct 19, 09:45 AM",
      desc: "Honeycomb paper, bubble wrap, corner guards & 7-ply sealed carton.",
      status: "completed",
    },
    {
      title: "Dispatched via Air Express",
      date: "Oct 19, 01:20 PM",
      desc: "Handed over to Bluedart Express (AWB: BD-849204918IN).",
      status: "current",
    },
    {
      title: "Out for Delivery",
      date: "Expected by Oct 21",
      desc: "Courier executive will call before doorstep arrival.",
      status: "upcoming",
    },
    {
      title: "Delivered to Your Doorstep",
      date: "Expected Oct 21, by 5:00 PM",
      desc: "Fragile inspection guarantee active for 48 hours post delivery.",
      status: "upcoming",
    },
  ];

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Real-time Logistics</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight">
            Track Your Handcrafted Order
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-lg mx-auto">
            Enter your 6-digit Order ID (e.g. KLK-748920) or your registered 10-digit mobile number.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-card">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                required
                placeholder="Enter Order ID (e.g. KLK-104928) or Mobile Number"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta font-mono"
              />
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-8 bg-terracotta hover:bg-terracotta-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-md shadow-terracotta/20 transition-all flex items-center justify-center gap-2"
            >
              {loading ? <span>Locating...</span> : <span>Track Order</span>}
            </button>
          </form>

          <p className="text-[11px] text-charcoal-500 mt-2 text-center sm:text-left">
            Tip: You can also find your tracking link in your WhatsApp confirmation message.
          </p>
        </div>

        {/* Live Timeline Display */}
        {hasSearched && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-sand-200 shadow-float space-y-8 animate-slide-up">
            {/* Order status card top banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-forest-900 text-white">
              <div>
                <span className="text-[11px] text-saffron-300 uppercase tracking-widest font-mono font-bold block">
                  Status: In Transit (On Schedule)
                </span>
                <h3 className="font-serif text-lg font-bold">
                  Order #{orderId || "KLK-784920"}
                </h3>
                <span className="text-xs text-ivory-200">Carrier: Bluedart Air Express • AWB: BD-849204918IN</span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-ivory-300 block">Expected Doorstep Delivery:</span>
                <span className="font-serif text-base sm:text-lg font-bold text-saffron-300">
                  October 21, by 5:00 PM
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-6 relative pl-6 sm:pl-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-sand-300">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4">
                  {/* Status dot */}
                  <div
                    className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                      step.status === "completed"
                        ? "bg-forest border-forest text-white"
                        : step.status === "current"
                        ? "bg-saffron-500 border-saffron-600 text-white animate-pulse"
                        : "bg-white border-sand-300 text-transparent"
                    }`}
                  >
                    {step.status === "completed" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <h4
                        className={`font-serif text-sm font-bold ${
                          step.status === "upcoming" ? "text-charcoal-400" : "text-charcoal-900"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-mono text-terracotta font-semibold">
                        {step.date}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Help callout */}
            <div className="pt-6 border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-charcoal-700">
                <ShieldCheck className="w-5 h-5 text-forest flex-shrink-0" />
                <span>Need delivery rescheduling or address update?</span>
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
                  `Namaste! I would like to check status or update delivery address for Order #${orderId}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Courier Desk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center">Loading tracker...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
