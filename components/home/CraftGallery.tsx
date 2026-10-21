"use client";

import React, { useState } from "react";
import { handicraftImages } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Eye, X, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export const CraftGallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeImage, setActiveImage] = useState<{
    url: string;
    title: string;
    alt: string;
    category: string;
  } | null>(null);

  const galleryItems = [
    handicraftImages.potteryVaseTerracotta,
    handicraftImages.brassDiyaPeacock,
    handicraftImages.woodenCarvedBox,
    handicraftImages.artMadhubaniPainting,
    handicraftImages.textileBlockPrintQuilt,
    handicraftImages.juteBasketHandwoven,
    handicraftImages.jewelryOxidizedNecklace,
    handicraftImages.potteryBlueJaipur,
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "शिल्प दीर्घा" : "Visual Chronicles"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
              {t("galleryTitle")}
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              {t("gallerySub")}
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-terracotta group transition-colors"
          >
            <span>{language === "hi" ? "पूरी गैलरी देखें" : "Explore Full Craft Gallery"}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8-Photo Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveImage({
                  url: item.url,
                  title: item.title,
                  alt: item.alt,
                  category: item.category,
                })
              }
              className={`group relative rounded-3xl overflow-hidden bg-sand-200 cursor-pointer shadow-sm hover:shadow-artisan transition-all duration-300 ${
                index === 0 || index === 7 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Hover overlay with eye icon */}
              <div className="absolute inset-0 bg-charcoal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <span className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Eye className="w-4 h-4" />
                </span>

                <div>
                  <span className="text-[10px] text-saffron-300 uppercase tracking-widest font-semibold block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold line-clamp-2">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Making of the Craft" Heritage Reel Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-sand-100 border border-sand-200 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
              {language === "hi" ? "कारीगरी का जीवंत अनुभव" : "Living Workshop Series"}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
              {language === "hi"
                ? "देखें चाक पर घूमती मिट्टी और भट्टी में चमकता पीतल"
                : "Watch Raw Earth Transform into Living Heirlooms"}
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Experience the rhythm of our rural studios. From foot-spun potter wheels to woodblock stamping under the warm sun, witness the patience invested into every piece.
            </p>
          </div>

          <Link
            href="/gallery#making-of"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-forest text-white hover:bg-forest-700 font-semibold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex-shrink-0"
          >
            <Play className="w-4 h-4 text-saffron-300 fill-saffron-300" />
            <span>Watch Studio Reels</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-charcoal-900 rounded-3xl overflow-hidden shadow-float border border-charcoal-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-charcoal-800/80 hover:bg-terracotta text-white transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-charcoal-900 border-t border-charcoal-800">
              <div>
                <span className="text-xs font-semibold text-saffron-400 uppercase tracking-widest">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-lg font-bold">{activeImage.title}</h3>
                <p className="text-xs text-charcoal-400 mt-0.5">{activeImage.alt}</p>
              </div>

              <Link
                href="/shop"
                onClick={() => setActiveImage(null)}
                className="px-5 py-2.5 rounded-full bg-terracotta hover:bg-terracotta-600 text-white text-xs font-semibold whitespace-nowrap text-center transition-colors shadow-sm"
              >
                Shop Similar Crafts →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
