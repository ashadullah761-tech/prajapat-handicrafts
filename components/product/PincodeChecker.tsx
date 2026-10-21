"use client";

import React, { useState } from "react";
import { Truck, CheckCircle2, AlertCircle, MapPin } from "lucide-react";

export const PincodeChecker: React.FC = () => {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "valid" | "invalid">("idle");
  const [deliveryInfo, setDeliveryInfo] = useState<{
    city: string;
    days: string;
    codAvailable: boolean;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim();
    if (!/^\d{6}$/.test(cleanPin)) {
      setStatus("invalid");
      setDeliveryInfo(null);
      return;
    }

    setStatus("loading");

    // Simulated authentic pincode routing lookup
    setTimeout(() => {
      const firstDigit = cleanPin[0];
      let city = "Standard Zone";
      let days = "4 - 5 Business Days";

      if (firstDigit === "1") {
        city = "Delhi NCR / Haryana / Punjab";
        days = "2 - 3 Business Days (Express Hub)";
      } else if (firstDigit === "3") {
        city = "Rajasthan / Gujarat (Jaipur Proximity)";
        days = "1 - 2 Business Days (Local Priority)";
      } else if (firstDigit === "4") {
        city = "Maharashtra / Mumbai / Pune";
        days = "3 - 4 Business Days";
      } else if (firstDigit === "5" || firstDigit === "6") {
        city = "South India (Bengaluru / Hyderabad / Chennai)";
        days = "3 - 4 Business Days";
      } else if (firstDigit === "7") {
        city = "East / Bengal / Odisha";
        days = "4 - 5 Business Days";
      }

      setDeliveryInfo({
        city,
        days,
        codAvailable: true,
      });
      setStatus("valid");
    }, 400);
  };

  return (
    <div className="p-4 rounded-2xl bg-sand-100/70 border border-sand-200/80 space-y-2.5">
      <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800">
        <Truck className="w-4 h-4 text-terracotta" />
        <span>Check Pan-India Delivery & COD Availability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit Pincode (e.g. 302002)"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value.replace(/\D/g, ""));
              if (status !== "idle") setStatus("idle");
            }}
            className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta font-mono tracking-wider"
          />
          <MapPin className="w-3.5 h-3.5 text-charcoal-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
        </div>
        <button
          type="submit"
          disabled={pincode.length < 6 || status === "loading"}
          className="px-4 py-2 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white rounded-xl text-xs font-semibold transition-colors"
        >
          {status === "loading" ? "Checking..." : "Check"}
        </button>
      </form>

      {status === "invalid" && (
        <div className="flex items-center gap-1.5 text-[11px] text-rose-600 font-medium">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Please enter a valid 6-digit Indian postal pincode.</span>
        </div>
      )}

      {status === "valid" && deliveryInfo && (
        <div className="pt-2 border-t border-sand-200 space-y-1.5 text-xs text-charcoal-700">
          <div className="flex items-center gap-1.5 text-forest font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Delivery available to {deliveryInfo.city}</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-charcoal-600">
            <span>Estimated Delivery:</span>
            <span className="font-semibold text-charcoal-900">{deliveryInfo.days}</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-charcoal-600">
            <span>Payment Options:</span>
            <span className="font-semibold text-emerald-700">Prepaid UPI & COD Available</span>
          </div>
        </div>
      )}
    </div>
  );
};
