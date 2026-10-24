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
    `Hi ${brandConfig.name}, I would like to order "${product.name}" (₹${product.price.toLocaleString("en-IN")}). Please confirm availability.`
  )}`;

  const isContain = [
    "antique-brass-turtle-key-holder",
    "vintage-key-shaped-wooden-key-holder",
    "rustic-wood-wall-coat-key-rack",
    "wrought-iron-botanical-candle-stand",
  ].includes(product.id) || (product.images[0]?.url && (product.images[0].url.includes("key-holder") || product.images[0].url.includes("coat-key-rack") || product.images[0].url.includes("candle-stand")));

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

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestSeller && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#7A6327] text-white text-[10px] font-bold shadow-sm">
              {language === "hi" ? "लोकप्रिय" : "BESTSELLER"}
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#37472a] text-white text-[10px] font-bold shadow-sm">
              {language === "hi" ? "नया शिल्प" : "NEW ARRIVAL"}
            </span>
          )}
          {product.discountPercent > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#b5532e] text-white text-[10px] font-bold shadow-sm">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Quick WhatsApp Order on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#37472a] hover:bg-[#25301d] text-white rounded-full text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{language === "hi" ? "व्हाट्सएप पर ऑर्डर करें" : "Order on WhatsApp"}</span>
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

        {/* Price & Order Button */}
        <div className="pt-3 mt-3 border-t border-[#37472a]/10 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-base sm:text-lg font-bold text-[#37472a]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-[#999] line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#7A6327] font-medium">
              {language === "hi" ? "सुरक्षित ऑल-इंडिया डिलीवरी" : "Pan-India Safe Delivery"}
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#37472a] hover:bg-[#25301d] text-white text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="hidden xs:inline">{language === "hi" ? "ऑर्डर" : "Order"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
