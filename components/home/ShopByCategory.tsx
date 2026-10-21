"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export const ShopByCategory: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "कारीगरी परंपराएं" : "Artisanal Traditions"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
              {t("featuredCategories")}
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              {t("featuredSub")}
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-terracotta group transition-colors"
          >
            <span>{t("viewAll")} {language === "hi" ? "श्रेणियां" : "Categories"}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-white border border-sand-200/90 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col"
            >
              {/* Category Image with Hover Zoom */}
              <div className="relative aspect-square overflow-hidden bg-sand-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge for Item Count */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-semibold">
                  {cat.itemCount} items
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-3 inset-x-3 text-white space-y-1">
                  <span className="text-[10px] font-sans text-saffron-300 uppercase tracking-widest font-semibold block truncate">
                    {cat.heritageOrigin}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold leading-tight drop-shadow-sm group-hover:text-saffron-200 transition-colors">
                    {language === "hi" ? cat.hindiName : cat.name}
                  </h3>
                </div>
              </div>

              {/* Bottom Details bar */}
              <div className="p-3 bg-white text-center flex items-center justify-between text-xs text-charcoal-600 border-t border-sand-100">
                <span className="text-[11px] text-charcoal-500 truncate max-w-[140px]">
                  {language === "hi" ? cat.hindiTagline : cat.tagline}
                </span>
                <span className="text-terracotta font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
