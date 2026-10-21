"use client";

import React, { useState } from "react";
import Link from "next/link";
import { handicraftImages, HandicraftImage } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Eye, X, Play, ArrowRight, Heart } from "lucide-react";

export default function GalleryPage() {
  const { language } = useLanguage();
  const allImages = Object.values(handicraftImages);

  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<HandicraftImage | null>(null);

  const filterTabs = [
    "All",
    "Pottery & Terracotta",
    "Brass & Metal Art",
    "Wooden Carvings",
    "Handloom & Textiles",
    "Jute & Cane Crafts",
    "Wall Art",
    "Traditional Jewelry",
    "Artisans",
  ];

  const filteredImages = allImages.filter((img) => {
    if (selectedFilter === "All") return true;
    return img.category === selectedFilter;
  });

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Symphony</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight">
            The Artisan Craft Gallery
          </h1>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            Witness the beauty of raw river clay, hand-hammered metals, natural indigo dye vats, and the devoted hands that shape them.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === tab
                  ? "bg-terracotta text-white shadow-sm"
                  : "bg-white hover:bg-sand-200 text-charcoal-700 border border-sand-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Dynamic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id || index}
              onClick={() => setActiveImage(img)}
              className="group relative rounded-3xl overflow-hidden bg-sand-200 cursor-pointer shadow-card hover:shadow-artisan transition-all duration-300 aspect-[4/5]"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <span className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md">
                  <Eye className="w-4 h-4 text-white" />
                </span>

                <div className="space-y-1">
                  <span className="text-[10px] text-saffron-300 font-bold uppercase tracking-wider block">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold line-clamp-2">{img.title}</h4>
                  <p className="text-[11px] text-ivory-200 line-clamp-2">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Living Workshop Video Showcase */}
        <div id="making-of" className="pt-12 border-t border-sand-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
              Behind the Scenes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
              The Making of the Craft
            </h2>
            <p className="text-xs text-charcoal-600">
              Four ancient processes that cannot be rushed by clock or automated by machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Reel 1: Blue Pottery */}
            <div className="rounded-3xl overflow-hidden bg-white border border-sand-200 shadow-card flex flex-col">
              <div className="relative aspect-video bg-sand-200 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80"
                  alt="Jaipur Blue Pottery Painting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-900/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-terracotta flex items-center justify-center shadow-float group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md text-white text-[10px] font-mono">
                  Kot Jewar • 04:15 mins
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1">
                <h4 className="font-serif text-base font-bold text-charcoal-900">
                  Tracing Floral Arabesques with Squirrel Hair
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Master Ramswaroop details cobalt and copper oxide brush strokes over quartz powder plates before sealing them in the kiln.
                </p>
              </div>
            </div>

            {/* Reel 2: Lost-Wax Dhokra */}
            <div className="rounded-3xl overflow-hidden bg-white border border-sand-200 shadow-card flex flex-col">
              <div className="relative aspect-video bg-sand-200 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1000&q=80"
                  alt="Lost-wax casting Bastar Dhokra"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-900/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-terracotta flex items-center justify-center shadow-float group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md text-white text-[10px] font-mono">
                  Bastar • 05:40 mins
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1">
                <h4 className="font-serif text-base font-bold text-charcoal-900">
                  The Fire and the Beeswax: Bastar Dhokra Metalcasting
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Tribal metalsmith Suresh Sahu wraps fine natural wax threads over a river-clay core, melts it away, and pours glowing molten bell metal.
                </p>
              </div>
            </div>
          </div>
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
                Shop Handcrafted →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
