"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Send,
  Sparkles,
  ShieldCheck,
  RotateCcw,
  Award,
} from "lucide-react";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
      showToast("Welcome to Kalakriti! Use code 'HANDMADE10' for 10% off.", "success");
      setEmail("");
    }
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bg-charcoal-900 text-ivory-200 pt-16 pb-8 border-t-4 border-terracotta relative overflow-hidden">
      {/* Subtle mandala background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none -mr-20 -mt-20">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 0 A50 50 0 0 1 100 50 A50 50 0 0 1 50 100 A50 50 0 0 1 0 50 A50 50 0 0 1 50 0 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Pillars Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-charcoal-800 text-center">
          <div className="flex flex-col items-center space-y-2 p-3 rounded-2xl bg-charcoal-800/40 border border-charcoal-700/50">
            <Sparkles className="w-6 h-6 text-saffron-400" />
            <h5 className="text-sm font-semibold text-ivory-100">100% Genuine Handcrafted</h5>
            <p className="text-xs text-charcoal-400">Zero machine shortcuts, pure artisan heritage</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-3 rounded-2xl bg-charcoal-800/40 border border-charcoal-700/50">
            <Award className="w-6 h-6 text-saffron-400" />
            <h5 className="text-sm font-semibold text-ivory-100">GI-Tagged Origins</h5>
            <p className="text-xs text-charcoal-400">Directly from registered geographic craft clusters</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-3 rounded-2xl bg-charcoal-800/40 border border-charcoal-700/50">
            <ShieldCheck className="w-6 h-6 text-saffron-400" />
            <h5 className="text-sm font-semibold text-ivory-100">5-Layer Safe Delivery</h5>
            <p className="text-xs text-charcoal-400">100% replacement guarantee if damaged in transit</p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-3 rounded-2xl bg-charcoal-800/40 border border-charcoal-700/50">
            <RotateCcw className="w-6 h-6 text-saffron-400" />
            <h5 className="text-sm font-semibold text-ivory-100">Hassle-Free 7-Day Returns</h5>
            <p className="text-xs text-charcoal-400">Customer delight prioritized at every step</p>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Col (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta text-white flex items-center justify-center font-serif text-lg font-bold shadow-md">
                क
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  {language === "hi" ? brandConfig.hindiName : brandConfig.name}
                </h3>
                <p className="text-xs font-hand text-saffron-400 text-sm">
                  {language === "hi" ? brandConfig.hindiTagline : brandConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-charcoal-300 leading-relaxed max-w-sm">
              {brandConfig.description} Sourced ethically from rural masters across Rajasthan and
              India, celebrating four centuries of unbroken artistic lineage.
            </p>

            <div className="pt-2 space-y-2 text-xs text-charcoal-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <span>{brandConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <a href={`tel:${brandConfig.phone}`} className="hover:text-white transition-colors">
                  {brandConfig.displayPhone} (10 AM - 7:30 PM IST)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <a href={`mailto:${brandConfig.email}`} className="hover:text-white transition-colors">
                  {brandConfig.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={brandConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-charcoal-800 hover:bg-terracotta text-ivory-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={brandConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-charcoal-800 hover:bg-terracotta text-ivory-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={brandConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-charcoal-800 hover:bg-terracotta text-ivory-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase border-l-2 border-terracotta pl-2.5">
              Explore Store
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li>
                <Link href="/shop" className="hover:text-saffron-400 transition-colors">
                  All Handicrafts
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-saffron-400 transition-colors">
                  Craft Categories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-saffron-400 transition-colors">
                  Artisan Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-saffron-400 transition-colors">
                  Our Story & Artisans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-saffron-400 transition-colors">
                  Craft Care & Journal
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-saffron-400 transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-saffron-400 transition-colors">
                  Saved Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Craft Categories */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase border-l-2 border-terracotta pl-2.5">
              Craft Traditions
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li>
                <Link href="/categories/pottery-terracotta" className="hover:text-saffron-400 transition-colors">
                  Jaipur Blue Pottery & Clay
                </Link>
              </li>
              <li>
                <Link href="/categories/brass-metal-art" className="hover:text-saffron-400 transition-colors">
                  Moradabad Brass & Diyas
                </Link>
              </li>
              <li>
                <Link href="/categories/wooden-carvings" className="hover:text-saffron-400 transition-colors">
                  Sheesham Wood Carvings
                </Link>
              </li>
              <li>
                <Link href="/categories/handloom-textiles" className="hover:text-saffron-400 transition-colors">
                  Hand Block Print Mulmul
                </Link>
              </li>
              <li>
                <Link href="/categories/jute-cane-crafts" className="hover:text-saffron-400 transition-colors">
                  Bengal Golden Jute & Cane
                </Link>
              </li>
              <li>
                <Link href="/categories/wall-art" className="hover:text-saffron-400 transition-colors">
                  Madhubani & Warli Art
                </Link>
              </li>
              <li>
                <Link href="/categories/gift-hampers" className="hover:text-saffron-400 transition-colors">
                  Festive Gift Hampers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Customer Care */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase border-l-2 border-terracotta pl-2.5">
              Stay in Touch
            </h4>
            <p className="text-xs text-charcoal-300 leading-relaxed">
              Subscribe to receive private previews of new kiln firings and get <strong>10% OFF</strong> your first order.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-forest-800/80 border border-forest-600 rounded-xl text-xs text-saffron-300 space-y-1">
                <p className="font-bold">Thank you for joining our family!</p>
                <p className="text-[11px] text-ivory-200">
                  Use coupon <strong>HANDMADE10</strong> at checkout.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-l-xl bg-charcoal-800 border border-charcoal-700 text-white placeholder:text-charcoal-500 focus:outline-none focus:border-terracotta"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-terracotta hover:bg-terracotta-600 text-white rounded-r-xl text-xs font-semibold flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider block mb-1">
                B2B & Bulk Inquiries
              </span>
              <Link
                href="/contact#bulk-orders"
                className="inline-block text-xs text-saffron-400 hover:text-saffron-300 font-medium underline"
              >
                Wedding Favors & Corporate Gifting →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal Policies, Payment Modes & Copyright */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link href="/privacy-policy" className="hover:text-ivory-100 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-ivory-100 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/shipping-returns" className="hover:text-ivory-100 transition-colors">
              Shipping & Returns
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-ivory-100 transition-colors">
              Refund Policy
            </Link>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 text-[11px] bg-charcoal-800/60 px-3 py-1.5 rounded-full border border-charcoal-700">
            <span className="text-charcoal-300 font-medium">Secured by:</span>
            <span className="text-white font-bold tracking-wider">UPI</span>
            <span>•</span>
            <span className="text-white font-semibold">RuPay</span>
            <span>•</span>
            <span className="text-white font-semibold">Visa / MC</span>
            <span>•</span>
            <span className="text-saffron-400 font-medium">COD Available</span>
          </div>

          <div className="text-center md:text-right">
            © {new Date().getFullYear()} {brandConfig.name}. Crafted with ❤️ in Jaipur, India.
          </div>
        </div>
      </div>
    </footer>
  );
};
