"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs text-charcoal-500">
            <Link href="/" className="hover:text-terracotta">
              Home
            </Link>
            <span>/</span>
            <span className="text-terracotta font-semibold">Saved Wishlist</span>
          </nav>

          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-charcoal-500 hover:text-terracotta font-medium"
            >
              Clear All Saved Items
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
              {language === "hi" ? "आपकी पसंदीदा हस्तशिल्प सूची" : "Saved Artisan Wishlist"}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              You have {wishlist.length} {wishlist.length === 1 ? "treasure" : "treasures"} saved for later
            </p>
          </div>

          <Link
            href="/shop"
            className="text-xs font-semibold text-forest hover:text-terracotta flex items-center gap-1"
          >
            <span>Browse More Crafts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 shadow-card space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-sand-100 text-rose-500 flex items-center justify-center">
              <Heart className="w-8 h-8 opacity-60" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-xl font-bold text-charcoal-900">
                Your wishlist is empty
              </h2>
              <p className="text-xs text-charcoal-500">
                Click the heart icon on any craft to save it for festive gifting or home decor.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-white text-xs font-semibold hover:bg-terracotta-600 transition-colors shadow-sm"
            >
              <span>Explore Master Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
                  <Link href={`/product/${item.slug}`}>
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-charcoal-500 hover:text-rose-600 hover:bg-white shadow transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] text-terracotta font-bold uppercase tracking-wider block">
                      {item.categoryName}
                    </span>
                    <Link
                      href={`/product/${item.slug}`}
                      className="font-serif text-sm font-bold text-charcoal-900 hover:text-terracotta line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="font-serif text-base font-bold text-charcoal-900 font-mono">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="text-xs text-charcoal-400 line-through">
                          ₹{item.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(item, 1)}
                    className="w-full py-2.5 px-3 rounded-xl bg-terracotta hover:bg-terracotta-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Basket</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
