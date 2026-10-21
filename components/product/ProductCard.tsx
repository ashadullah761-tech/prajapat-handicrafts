"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, ShoppingBag, Star, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { language, t } = useLanguage();

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-sand-200/90 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col justify-between">
      {/* Top Media Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images[0]?.url || "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"}
            alt={product.images[0]?.alt || product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-full bg-forest text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
              {t("bestseller")}
            </span>
          )}
          {product.isNewArrival && !product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-full bg-terracotta text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
              {t("newArrival")}
            </span>
          )}
          {product.discountPercent > 0 && (
            <span className="px-2.5 py-0.5 rounded-full bg-saffron-500 text-white text-[10px] font-bold shadow-sm">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-200 shadow-md ${
            isFavorited
              ? "bg-rose-500 text-white hover:bg-rose-600 scale-105"
              : "bg-white/90 text-charcoal-700 hover:text-rose-500 hover:bg-white"
          }`}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
        </button>

        {/* Quick Add Overlay on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleQuickAdd}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/95 hover:bg-terracotta hover:text-white text-charcoal-900 rounded-xl text-xs font-semibold shadow-float backdrop-blur-sm transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t("addToCart")}</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          {/* Artisan & Category Tag */}
          <div className="flex items-center justify-between text-[11px] text-terracotta-700 font-medium">
            <span className="truncate max-w-[180px]">{product.artisan.village}</span>
            <div className="flex items-center gap-1 text-saffron-600 font-semibold font-mono">
              <Star className="w-3 h-3 fill-saffron-400 text-saffron-400" />
              <span>{product.rating}</span>
              <span className="text-charcoal-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/product/${product.slug}`} className="block group-hover:text-terracotta transition-colors">
            <h3 className="font-serif text-sm sm:text-base font-bold text-charcoal-900 line-clamp-2 leading-snug">
              {language === "hi" ? product.hindiName : product.name}
            </h3>
          </Link>

          {/* Short description */}
          <p className="text-xs text-charcoal-500 line-clamp-2 leading-relaxed">
            {language === "hi" ? product.hindiShortDescription : product.shortDescription}
          </p>
        </div>

        {/* Price & Mobile Add Button */}
        <div className="pt-3 mt-2 border-t border-sand-100 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-base sm:text-lg font-bold text-charcoal-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-charcoal-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[10px] text-forest font-medium">
              Free delivery above ₹999
            </span>
          </div>

          {/* Mobile Quick Add (visible on mobile where hover is absent) */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden p-2 rounded-xl bg-terracotta text-white hover:bg-terracotta-600 transition-colors shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
