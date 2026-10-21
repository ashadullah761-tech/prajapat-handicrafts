"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";
import { Star, CheckCircle2, Sparkles, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const CustomerReviews: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-sand-100/60 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "hi" ? "ग्राहकों का विश्वास" : "Patron Voices"}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
            {t("reviewsTitle")}
          </h2>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            {t("reviewsSub")}
          </p>

          {/* Aggregate trust rating chip */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="flex items-center text-saffron-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-saffron-400 text-saffron-400" />
              ))}
            </div>
            <span className="font-bold text-charcoal-900 text-sm font-mono">4.92 / 5.0</span>
            <span className="text-xs text-charcoal-500">• 850+ Verified Ratings</span>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-sand-200 shadow-card hover:shadow-artisan transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-saffron-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
                    ))}
                  </div>

                  {item.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                {/* Review Quote */}
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  &quot;{language === "hi" ? item.hindiReview : item.review}&quot;
                </p>

                {/* Product link */}
                <div className="pt-2">
                  <Link
                    href={`/product/${item.productSlug}`}
                    className="text-[11px] text-terracotta hover:underline font-semibold block truncate"
                  >
                    Purchased: {item.productName}
                  </Link>
                </div>
              </div>

              {/* Customer Avatar & Location */}
              <div className="pt-5 mt-5 border-t border-sand-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-sand-300"
                />
                <div>
                  <h4 className="font-serif text-xs font-bold text-charcoal-900">{item.name}</h4>
                  <span className="text-[11px] text-charcoal-500 block">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
