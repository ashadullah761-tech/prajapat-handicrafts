"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${brandConfig.name}, I would like to enquire about "${product.name}". Please share details and availability.`
  )}`;

  const isContain = [
    "antique-brass-turtle-key-holder",
    "vintage-key-shaped-wooden-key-holder",
    "rustic-wood-wall-coat-key-rack",
    "wrought-iron-botanical-candle-stand",
    "brushed-silver-torch-flute-wall-sconces",
    "artisanal-black-iron-floral-scroll-wall-sconce",
    "minimalist-black-iron-teardrop-wall-sconce",
    "botanical-leaf-vine-branch-wall-sconce",
  ].includes(product.id) || (product.images[0]?.url && (product.images[0].url.includes("key-holder") || product.images[0].url.includes("coat-key-rack") || product.images[0].url.includes("candle-stand") || product.images[0].url.includes("wall-sconce")));

  return (
    <div className="group relative bg-[#fdfcf7] rounded-3xl overflow-hidden border border-[#37472a]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Media Area */}
      <div className={`relative aspect-[4/5] overflow-hidden ${isContain ? "bg-white p-3 flex items-center justify-center" : "bg-[#f4f2e6]"}`}>
        <Link href={`/product/${product.slug}`} className={`block w-full h-full ${isContain ? "flex items-center justify-center" : ""}`}>
          <img
            src={product.images[0]?.url || "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"}
            alt={product.images[0]?.alt || product.name}
            loading="lazy"
            className={`w-full h-full object-center group-hover:scale-105 transition-transform duration-700 ease-out ${isContain ? "object-contain" : "object-cover"}`}
          />
        </Link>

        {/* Quick WhatsApp Order on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#37472a] hover:bg-[#25301d] text-white rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{language === "hi" ? "व्हाट्सएप पर जानकारी लें" : "Enquire on WhatsApp"}</span>
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          {/* Artisan & Category Tag */}
          <div className="flex items-center justify-between text-[11px] text-[#7A6327] font-medium">
            <span className="truncate max-w-[180px]">{product.artisan.village}</span>
            <div className="flex items-center gap-1 text-[#7A6327] font-semibold font-mono">
              <Star className="w-3 h-3 fill-[#7A6327] text-[#7A6327]" />
              <span>{product.rating}</span>
              <span className="text-[#888] font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block hover:text-[#7A6327] transition-colors">
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#37472a] line-clamp-2 leading-snug">
              {language === "hi" ? product.hindiName : product.name}
            </h3>
          </Link>

          {/* Short description */}
          <p className="text-xs text-[#6e7663] line-clamp-2 leading-relaxed">
            {language === "hi" ? product.hindiShortDescription : product.shortDescription}
          </p>
        </div>

        {/* Order / Enquiry Action */}
        <div className="pt-3 mt-3 border-t border-[#37472a]/10 flex items-center justify-between gap-2">
          <Link
            href={`/product/${product.slug}`}
            className="text-xs font-semibold text-[#7A6327] hover:text-[#37472a] transition-colors"
          >
            {language === "hi" ? "विवरण देखें →" : "View Details →"}
          </Link>

          {/* WhatsApp Enquiry Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#37472a] hover:bg-[#25301d] text-white text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{language === "hi" ? "पूछताछ करें" : "Enquire Now"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
