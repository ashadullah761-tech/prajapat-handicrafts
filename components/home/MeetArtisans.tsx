"use client";

import React from "react";
import Link from "next/link";
import { artisans } from "@/data/artisans";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight, Award } from "lucide-react";

export const MeetArtisans: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "कारीगरों की कहानियां" : "The Human Hands"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
              {t("meetArtisansTitle")}
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              {t("meetArtisansSub")}
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-terracotta group transition-colors"
          >
            <span>{language === "hi" ? "हमारी पूरी विरासत यात्रा" : "Read Our Full Heritage Story"}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Artisan Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="group bg-white rounded-3xl overflow-hidden border border-sand-200/90 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Artisan Photo with Craft Tag */}
                <div className="relative aspect-square overflow-hidden bg-sand-200">
                  <img
                    src={artisan.photo}
                    alt={artisan.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-80" />

                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-900/70 backdrop-blur-md text-saffron-300 text-[10px] font-mono font-bold">
                    {artisan.experienceYears}+ Years Crafting
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <span className="text-[10px] text-saffron-300 uppercase tracking-widest font-semibold block truncate">
                      {artisan.village}, {artisan.state}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                      {language === "hi" ? artisan.hindiName : artisan.name}
                    </h3>
                  </div>
                </div>

                {/* Craft Tradition & Bio */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-terracotta-50 text-terracotta text-xs font-semibold">
                    {language === "hi" ? artisan.hindiCraft : artisan.craft}
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3">
                    {language === "hi" ? artisan.hindiBio : artisan.bio}
                  </p>

                  {/* Direct Quote */}
                  <blockquote className="border-l-2 border-saffron-500 pl-3 py-1 italic text-xs text-charcoal-700 bg-sand-50 rounded-r-lg font-hand text-[13px]">
                    &quot;{language === "hi" ? artisan.hindiQuote : artisan.quote}&quot;
                  </blockquote>

                  {artisan.awards && (
                    <div className="flex items-center gap-1.5 text-[11px] text-forest font-medium pt-1">
                      <Award className="w-3.5 h-3.5 text-saffron-500 flex-shrink-0" />
                      <span className="truncate">{artisan.awards}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Featured Product Link */}
              {artisan.featuredProductSlug && (
                <div className="p-4 pt-0">
                  <Link
                    href={`/product/${artisan.featuredProductSlug}`}
                    className="block text-center py-2 px-3 rounded-xl bg-sand-100 hover:bg-terracotta hover:text-white text-charcoal-800 text-xs font-semibold transition-colors"
                  >
                    View {language === "hi" ? "इनकी कृति" : "Signature Craft"} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
