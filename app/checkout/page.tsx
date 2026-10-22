"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { brandConfig } from "@/config/brand";
import { useToast } from "@/context/ToastContext";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Truck,
  CreditCard,
  Banknote,
  Sparkles,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    subtotal,
    discountAmount,
    couponCode,
    shippingFee,
    total,
    clearCart,
    generateWhatsAppOrderUrl,
  } = useCart();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "Rajasthan",
    pincode: "",
    giftNote: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"whatsapp" | "online" | "cod">("whatsapp");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState<{
    orderId: string;
    total: number;
    method: string;
  } | null>(null);

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-ivory-100 py-20 px-4 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-charcoal-900">Your basket is empty</h2>
        <p className="text-xs text-charcoal-600">Please select handicrafts before proceeding to checkout.</p>
        <Link
          href="/shop"
          className="inline-block px-6 py-2.5 bg-terracotta text-white rounded-full text-xs font-semibold"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      showToast("Please fill in all required shipping address fields.", "error");
      return;
    }

    if (paymentMethod === "whatsapp") {
      // 1. WhatsApp-first ordering: opens WhatsApp with prefilled order details
      const whatsappUrl = generateWhatsAppOrderUrl({
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        note: formData.giftNote,
      });

      const orderId = `GHL-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderComplete({
        orderId,
        total,
        method: "WhatsApp Direct Order",
      });

      // trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      clearCart();
      window.open(whatsappUrl, "_blank");
    } else {
      // 2. Online Pay or COD simulation
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        const orderId = `GHL-${Math.floor(100000 + Math.random() * 900000)}`;
        setOrderComplete({
          orderId,
          total,
          method: paymentMethod === "online" ? "Razorpay Test / UPI" : "Cash on Delivery",
        });

        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });

        clearCart();
        showToast("Order placed successfully!", "success");
      }, 1200);
    }
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link href="/cart" className="hover:text-terracotta flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Basket</span>
          </Link>
          <span>/</span>
          <span className="text-terracotta font-semibold">Secure Checkout</span>
        </div>

        {/* If Order Complete Modal / View */}
        {orderComplete ? (
          <div className="max-w-xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-sand-200 shadow-float text-center space-y-6 animate-slide-up">
            <div className="w-16 h-16 mx-auto rounded-full bg-forest text-white flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-wider">
                Order ID: {orderComplete.orderId}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                Namaste! Your Handcrafted Order is Confirmed
              </h1>
              <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Thank you for patronizing Indian rural artisans. Your order of ₹{orderComplete.total.toLocaleString("en-IN")} via {orderComplete.method} has been received. Our Jaipur studio is preparing your multi-layer damage-free packaging.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-sand-100 text-xs text-charcoal-700 text-left space-y-1.5 border border-sand-200">
              <div className="flex justify-between">
                <span>Deliver to:</span>
                <strong className="text-charcoal-900">{formData.name || "Customer"}</strong>
              </div>
              <div className="flex justify-between">
                <span>Phone / WhatsApp:</span>
                <span className="font-mono">{formData.phone || brandConfig.displayPhone}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="text-forest font-semibold">3 - 6 Business Days</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={`/track-order?orderId=${orderComplete.orderId}`}
                className="flex-1 py-3 px-4 rounded-xl bg-forest text-white text-xs font-semibold hover:bg-forest-700 transition-colors"
              >
                Track Order Live
              </Link>
              <Link
                href="/shop"
                className="flex-1 py-3 px-4 rounded-xl bg-terracotta text-white text-xs font-semibold hover:bg-terracotta-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Cols: Delivery Address & Payment Options */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Address Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200 shadow-card space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-sand-100 font-serif text-lg font-bold text-charcoal-900">
                  <Truck className="w-5 h-5 text-terracotta" />
                  <span>1. Delivery Address (Pan-India)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Rathore"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      Phone Number (for dispatch updates & WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 97992 07503"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-semibold text-charcoal-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="meera@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>

                <div className="text-xs">
                  <label className="block font-semibold text-charcoal-700 mb-1">
                    House / Flat No., Street, Area Landmark *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flat 402, Royal Palms, Opp. Central Park"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajasthan"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      6-Digit PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="306401"
                      value={formData.pincode}
                      onChange={(e) =>
                        setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, "") })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta font-mono tracking-wider"
                    />
                  </div>
                </div>

                <div className="text-xs pt-1">
                  <label className="block font-semibold text-charcoal-700 mb-1">
                    Handwritten Gift Card Note / Special Dispatch Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="If this is a festive or housewarming gift, write your message here. We will handwrite it with fountain pen on seed-paper for free..."
                    value={formData.giftNote}
                    onChange={(e) => setFormData({ ...formData, giftNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200 shadow-card space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-sand-100 font-serif text-lg font-bold text-charcoal-900">
                  <Lock className="w-5 h-5 text-terracotta" />
                  <span>2. Payment & Confirmation Method</span>
                </div>

                <div className="space-y-3">
                  {/* Option 1: WhatsApp First */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === "whatsapp"
                        ? "border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600/20"
                        : "border-sand-200 bg-white hover:bg-sand-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "whatsapp"}
                      onChange={() => setPaymentMethod("whatsapp")}
                      className="mt-1 text-emerald-600 focus:ring-emerald-600"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                          <span>Confirm & Order on WhatsApp (Recommended)</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px]">
                            FASTEST
                          </span>
                        </span>
                      </div>
                      <p className="text-[11px] text-charcoal-600 leading-relaxed">
                        Your entire cart, address, and total will open pre-filled in WhatsApp. Our artisan concierge immediately confirms stock and provides direct UPI QR or bank link.
                      </p>
                    </div>
                  </label>

                  {/* Option 2: Razorpay Test Mode / Online Cards / UPI */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === "online"
                        ? "border-terracotta bg-terracotta-50/60 ring-2 ring-terracotta/20"
                        : "border-sand-200 bg-white hover:bg-sand-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "online"}
                      onChange={() => setPaymentMethod("online")}
                      className="mt-1 text-terracotta focus:ring-terracotta"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-charcoal-900 flex items-center gap-1.5">
                          <CreditCard className="w-4 h-4 text-terracotta" />
                          <span>Instant Online Pay (Razorpay Test Mode • UPI / Cards)</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-charcoal-600 leading-relaxed">
                        Pay securely with Google Pay, PhonePe, Paytm, RuPay, Visa, MasterCard, or Net Banking. Simulated sandbox checkout.
                      </p>
                    </div>
                  </label>

                  {/* Option 3: Cash on Delivery */}
                  <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-charcoal-800 bg-sand-100 ring-2 ring-charcoal-800/20"
                        : "border-sand-200 bg-white hover:bg-sand-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1 text-charcoal-800 focus:ring-charcoal-800"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-charcoal-900 flex items-center gap-1.5">
                          <Banknote className="w-4 h-4 text-charcoal-700" />
                          <span>Cash on Delivery (COD)</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-charcoal-600 leading-relaxed">
                        Pay cash directly to our delivery courier at your doorstep upon receiving your package.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Summary & Place Order CTA */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-card space-y-6 sticky top-28">
              <h3 className="font-serif text-lg font-bold text-charcoal-900 pb-3 border-b border-sand-100">
                Basket Items ({items.length})
              </h3>

              {/* Items mini list */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((it) => (
                  <div key={it.product.id} className="flex items-center gap-3 text-xs">
                    <img
                      src={it.product.images[0].url}
                      alt={it.product.name}
                      className="w-12 h-14 object-cover rounded-xl border border-sand-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-charcoal-900 truncate">
                        {it.product.name}
                      </h4>
                      <span className="text-[11px] text-charcoal-500">
                        Qty: {it.quantity} × ₹{it.product.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-charcoal-900">
                      ₹{(it.product.price * it.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price details */}
              <div className="space-y-2 pt-3 border-t border-sand-100 text-xs text-charcoal-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({couponCode})</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-mono">
                    {shippingFee === 0 ? (
                      <span className="text-forest font-bold uppercase">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-charcoal-900 pt-3 border-t border-sand-200">
                  <span>Grand Total</span>
                  <span className="font-mono text-terracotta text-lg">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* CTA button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98] ${
                  paymentMethod === "whatsapp"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-terracotta hover:bg-terracotta-600"
                }`}
              >
                {isProcessing ? (
                  <span>Processing Handcrafted Order...</span>
                ) : paymentMethod === "whatsapp" ? (
                  <span>Complete Order on WhatsApp →</span>
                ) : (
                  <span>Confirm & Place Order →</span>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-charcoal-500 pt-2 border-t border-sand-100">
                <ShieldCheck className="w-4 h-4 text-forest" />
                <span>256-Bit SSL Secured • 100% Genuine Indian Craft</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
