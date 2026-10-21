"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { Sparkles, Send, Gift, CheckCircle2 } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      showToast("Coupon 'HANDMADE10' unlocked! Enjoy 10% off your first order.", "success");
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-forest-900 text-white relative overflow-hidden">
      {/* Decorative SVG background accents */}
      <div className="absolute inset-0 opacity-10 bg-jaali-subtle pointer-events-none" />
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-[600px] h-60 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/20 border border-saffron-400/30 text-saffron-300 text-xs font-semibold uppercase tracking-wider">
          <Gift className="w-3.5 h-3.5" />
          <span>{language === "hi" ? "नए सदस्यों के लिए विशेष छूट" : "First Order Privilege"}</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory-50 max-w-2xl mx-auto leading-tight">
          {language === "hi"
            ? "कलाकृति परिवार से जुड़ें और 10% की छूट पाएं"
            : "Bring Indian Craftsmanship Home with 10% Off"}
        </h2>

        <p className="text-sm text-ivory-200/90 max-w-xl mx-auto leading-relaxed font-light">
          {language === "hi"
            ? "हमारे विशेष संग्रहों, नई भट्टी की कृतियों और त्योहारों के ऑफर्स की अग्रिम सूचना प्राप्त करें। कोई स्पैम नहीं।"
            : "Subscribe to receive private invitations to rare kiln openings, artisan profiles, and an instant 10% coupon for your first order."}
        </p>

        {subscribed ? (
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-forest-800 border border-forest-600 text-center space-y-2 animate-slide-up">
            <div className="flex items-center justify-center gap-2 text-saffron-300 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>You are officially an Artisan Patron!</span>
            </div>
            <p className="text-xs text-ivory-200">
              Use code <strong className="text-saffron-300 tracking-wider">HANDMADE10</strong> at
              checkout for 10% off your entire basket.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 text-xs sm:text-sm rounded-full bg-white/10 border border-white/20 text-white placeholder:text-ivory-300/60 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-saffron-500 hover:bg-saffron-400 text-charcoal-900 font-bold text-xs uppercase tracking-wider transition-all shadow-glow active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Unlock 10% Off</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-6 text-[11px] text-ivory-300/80 pt-2">
          <span>✓ Zero spam guaranteed</span>
          <span>✓ Unsubscribe anytime with 1 click</span>
          <span>✓ 100% fair-trade support</span>
        </div>
      </div>
    </section>
  );
};
