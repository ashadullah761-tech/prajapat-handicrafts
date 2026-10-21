"use client";

import React from "react";
import Link from "next/link";
import { getNewArrivals } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Flame, ArrowRight } from "lucide-react";

export const NewArrivalsGrid: React.FC = () => {
  const { language, t } = useLanguage();
  const newArrivals = getNewArrivals().slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
              <Flame className="w-3.5 h-3.5 text-terracotta" />
              <span>{language === "hi" ? "नवीन आगमन" : "Just Unpacked"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
              {t("newArrivalsTitle")}
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              {t("newArrivalsSub")}
            </p>
          </div>

          <Link
            href="/shop?sort=newest"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-terracotta group transition-colors"
          >
            <span>{t("viewAll")} {language === "hi" ? "नए उत्पाद" : "New Arrivals"}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
