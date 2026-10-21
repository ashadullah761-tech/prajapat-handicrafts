"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CategoriesPage() {
  const { language, t } = useLanguage();

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Living Craft Traditions</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight">
            Explore Handicraft Heritage
          </h1>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            From the blue glazes of Jaipur to the ancient lost-wax bells of Bastar, journey through India&apos;s most celebrated artisanal traditions.
          </p>
        </div>

        {/* 8 Categories Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-auto overflow-hidden bg-sand-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-charcoal-900/70 backdrop-blur-md text-saffron-300 text-[10px] font-mono font-bold">
                  {cat.itemCount} Items
                </div>
              </div>

              <div className="p-6 sm:p-8 sm:w-1/2 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-terracotta uppercase tracking-wider block">
                    {cat.heritageOrigin}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 group-hover:text-terracotta transition-colors">
                    {language === "hi" ? cat.hindiName : cat.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <Link
                  href={`/categories/${cat.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-terracotta transition-colors pt-2 border-t border-sand-100"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
