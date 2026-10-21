"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { brandConfig } from "@/config/brand";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Tag,
  ArrowLeft,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
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

  const threshold = brandConfig.shipping.freeShippingThreshold;
  const differenceToFree = Math.max(0, threshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / threshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput("");
    }
  };

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
            <span className="text-terracotta font-semibold">Shopping Basket</span>
          </nav>

          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-charcoal-500 hover:text-terracotta font-medium"
            >
              Clear Basket
            </button>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
          {language === "hi" ? "आपकी खरीदारी टोकरी" : "Your Handcrafted Basket"}
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 shadow-card space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-sand-100 text-terracotta flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 opacity-60" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif text-xl font-bold text-charcoal-900">
                Your basket is empty
              </h2>
              <p className="text-xs text-charcoal-500">
                Bring home authentic Indian handicrafts crafted by master rural artisans.
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Cols: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Free shipping bar */}
              <div className="p-4 rounded-2xl bg-white border border-sand-200 shadow-sm text-xs">
                {differenceToFree > 0 ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-charcoal-700">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
                        Add ₹{differenceToFree.toLocaleString("en-IN")} more to get{" "}
                        <strong className="text-forest">FREE Pan-India Delivery!</strong>
                      </span>
                      <span className="font-mono">{Math.round(progressPercent)}%</span>
                    </div>
                    <div className="w-full bg-sand-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-forest h-full rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold justify-center">
                    <span>🎉 You have unlocked FREE Pan-India Delivery!</span>
                  </div>
                )}
              </div>

              {/* Items List */}
              <div className="bg-white rounded-3xl border border-sand-200 shadow-card overflow-hidden divide-y divide-sand-100">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedVariant || "def"}`}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-2xl flex-shrink-0 border border-sand-200"
                      />
                      <div className="space-y-1">
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-serif text-sm font-bold text-charcoal-900 hover:text-terracotta line-clamp-2"
                        >
                          {language === "hi" ? item.product.hindiName : item.product.name}
                        </Link>
                        {item.selectedVariant && (
                          <span className="text-xs text-terracotta font-medium block">
                            Option: {item.selectedVariant}
                          </span>
                        )}
                        <span className="text-xs text-charcoal-500 block">
                          ₹{item.product.price.toLocaleString("en-IN")} each
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                      {/* Qty */}
                      <div className="flex items-center border border-sand-300 rounded-xl bg-sand-50">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1, item.selectedVariant)
                          }
                          className="p-2 text-charcoal-600 hover:bg-sand-200 rounded-l-xl transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 py-1 text-xs font-mono font-bold text-charcoal-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1, item.selectedVariant)
                          }
                          className="p-2 text-charcoal-600 hover:bg-sand-200 rounded-r-xl transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for this item */}
                      <div className="text-right">
                        <span className="font-serif text-base font-bold text-charcoal-900 font-mono block">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant)}
                          className="text-[11px] text-charcoal-400 hover:text-terracotta transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-terracotta pt-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping Handcrafted Treasures</span>
              </Link>
            </div>

            {/* Right 1 Col: Summary & Checkout */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-card space-y-6 sticky top-28">
              <h3 className="font-serif text-lg font-bold text-charcoal-900 pb-3 border-b border-sand-100">
                Order Summary
              </h3>

              {/* Coupon Form */}
              {couponCode ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs flex items-center justify-between text-emerald-800">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span>
                      Coupon <strong>{couponCode}</strong> ({discountPercent}% OFF)
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-xs font-bold underline hover:text-emerald-950"
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
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-charcoal-800 text-white rounded-xl text-xs font-semibold hover:bg-charcoal-900"
                  >
                    Apply
                  </button>
                </form>
              )}

              {/* Breakdown */}
              <div className="space-y-2.5 text-xs text-charcoal-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Coupon Discount</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Pan-India Shipping</span>
                  <span className="font-mono">
                    {shippingFee === 0 ? (
                      <span className="text-forest font-bold uppercase">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-charcoal-900 pt-3 border-t border-sand-200">
                  <span>Total Payable</span>
                  <span className="font-mono text-terracotta text-lg">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Checkout CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351z" />
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>

                <Link
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-terracotta hover:bg-terracotta-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-terracotta/20 transition-all active:scale-[0.98]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500 pt-2 border-t border-sand-100">
                <ShieldCheck className="w-3.5 h-3.5 text-forest" />
                <span>Damage-Free Transit Guarantee • Easy 7-Day Returns</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
