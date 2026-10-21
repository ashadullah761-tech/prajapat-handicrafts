"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { brandConfig } from "@/config/brand";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Tag,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    couponCode,
    discountPercent,
    applyCoupon,
    removeCoupon,
    shippingFee,
    total,
    generateWhatsAppOrderUrl,
  } = useCart();

  const { language, t } = useLanguage();
  const [couponInput, setCouponInput] = useState("");

  if (!isCartOpen) return null;

  const threshold = brandConfig.shipping.freeShippingThreshold;
  const differenceToFreeShipping = Math.max(0, threshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / threshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-float flex flex-col justify-between animate-slide-up">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-sand-200 flex items-center justify-between bg-ivory-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-terracotta/10 text-terracotta rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-charcoal-900">
                  {t("cartTitle")}
                </h3>
                <span className="text-xs text-charcoal-500">
                  {items.length} {items.length === 1 ? "unique item" : "unique items"}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-charcoal-500 hover:text-charcoal-900 hover:bg-sand-200 rounded-lg transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-sand-100 p-3 border-b border-sand-200 text-xs">
            {differenceToFreeShipping > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-1.5 text-charcoal-700">
                  <span className="flex items-center gap-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
                    Add ₹{differenceToFreeShipping.toLocaleString("en-IN")} more for{" "}
                    <strong className="text-forest">FREE Delivery</strong>
                  </span>
                  <span className="font-mono text-[11px] text-charcoal-500">
                    {Math.round(freeShippingProgress)}%
                  </span>
                </div>
                <div className="w-full bg-sand-300 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-forest h-full rounded-full transition-all duration-500"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-800 font-semibold justify-center">
                <span>🎉 {t("freeShippingUnlocked")}</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sand-200 text-terracotta flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-charcoal-800">
                    {t("cartEmpty")}
                  </h4>
                  <p className="text-xs text-charcoal-500 max-w-xs mx-auto">
                    {t("cartEmptySub")}
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-white rounded-full text-xs font-semibold hover:bg-terracotta-600 transition-colors shadow-sm"
                >
                  <Link href="/shop" onClick={() => setIsCartOpen(false)}>
                    {t("shopNow")}
                  </Link>
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedVariant || "default"}`}
                  className="flex gap-3 p-3 rounded-2xl bg-ivory-50 border border-sand-200 hover:border-sand-300 transition-all"
                >
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-xs font-semibold text-charcoal-900 line-clamp-2">
                          {language === "hi" ? item.product.hindiName : item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant)}
                          className="text-charcoal-400 hover:text-terracotta p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedVariant && (
                        <span className="text-[11px] text-terracotta-700 font-medium">
                          Option: {item.selectedVariant}
                        </span>
                      )}

                      <div className="text-xs font-bold text-terracotta mt-1">
                        ₹{item.product.price.toLocaleString("en-IN")}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between pt-2 border-t border-sand-200/60">
                      <div className="flex items-center border border-sand-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedVariant
                            )
                          }
                          className="p-1.5 text-charcoal-600 hover:bg-sand-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-xs font-semibold font-mono text-charcoal-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedVariant
                            )
                          }
                          className="p-1.5 text-charcoal-600 hover:bg-sand-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-charcoal-900 font-mono">
                        ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Area with Coupon & Totals */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-sand-200 bg-ivory-100 space-y-4">
              {/* Coupon Form */}
              {couponCode ? (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span>
                      Coupon <strong>{couponCode}</strong> applied ({discountPercent}% OFF)
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-emerald-900 font-semibold underline hover:text-emerald-700"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. HANDMADE10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-charcoal-800 text-white rounded-xl text-xs font-medium hover:bg-charcoal-900 transition-colors"
                  >
                    {t("applyCoupon")}
                  </button>
                </form>
              )}

              {/* Bill Details */}
              <div className="space-y-1.5 text-xs text-charcoal-600">
                <div className="flex justify-between">
                  <span>{t("subtotal")}</span>
                  <span className="font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>{t("discount")}</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{t("shipping")}</span>
                  <span className="font-mono">
                    {shippingFee === 0 ? (
                      <span className="text-forest font-semibold uppercase">{t("free")}</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-charcoal-900 pt-2 border-t border-sand-300">
                  <span>{t("total")}</span>
                  <span className="font-mono text-terracotta text-base">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* 1. Order on WhatsApp Button */}
                <a
                  href={generateWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide shadow-md transition-all active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351z" />
                  </svg>
                  <span>{t("orderOnWhatsApp")}</span>
                </a>

                {/* 2. Web Checkout Button */}
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-terracotta hover:bg-terracotta-600 text-white font-semibold text-xs tracking-wide shadow-md shadow-terracotta/20 transition-all active:scale-[0.98]"
                >
                  <span>{t("checkout")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Safe Checkout Trust Chip */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                <span>Damage-free delivery guarantee • Easy 7-day returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
