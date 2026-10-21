"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandConfig } from "@/config/brand";
import { categories } from "@/data/categories";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Layers,
  HelpCircle,
  Truck,
  PhoneCall,
} from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { itemCount, toggleCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { language, toggleLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky header shadow and backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live search filtering
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const filtered = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.hindiName.includes(q) ||
            p.categoryName.toLowerCase().includes(q) ||
            p.tags.some((tag) => tag.toLowerCase().includes(q))
        )
        .slice(0, 5);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("shop"), href: "/shop" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("ourStory"), href: "/about" },
    { name: t("blog"), href: "/blog" },
    { name: t("faq"), href: "/faq" },
    { name: t("contact"), href: "/contact" },
  ];

  if (pathname === "/") {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-ivory-50/95 backdrop-blur-md shadow-card border-b border-sand-300/60"
          : "bg-ivory-100 border-b border-sand-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-700 hover:text-terracotta transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-terracotta text-white flex items-center justify-center shadow-md shadow-terracotta/20 group-hover:scale-105 transition-transform duration-300">
              {/* Traditional diya / craft pot SVG icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-saffron-300"
              >
                <path d="M12 2c0 2.5-2 4.5-2 7 0 1.5 1 3 2 3s2-1.5 2-3c0-2.5-2-4.5-2-7z" fill="currentColor" opacity="0.8" />
                <path d="M4 14c0 4 3.5 7 8 7s8-3 8-7H4z" />
                <path d="M6 14v1a6 6 0 0 0 12 0v-1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal-900 group-hover:text-terracotta transition-colors leading-none">
                {language === "hi" ? brandConfig.hindiName : brandConfig.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase text-terracotta-600 font-semibold mt-1">
                {language === "hi" ? "जयपुर • हस्तशिल्प" : "Jaipur • Heritage Crafts"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-terracotta font-semibold bg-terracotta-50"
                  : "text-charcoal-700 hover:text-terracotta hover:bg-sand-100"
              }`}
            >
              {t("home")}
            </Link>

            <Link
              href="/shop"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/shop"
                  ? "text-terracotta font-semibold bg-terracotta-50"
                  : "text-charcoal-700 hover:text-terracotta hover:bg-sand-100"
              }`}
            >
              {t("shop")}
            </Link>

            {/* Categories Dropdown */}
            <div className="relative" ref={categoryRef}>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg text-charcoal-700 hover:text-terracotta hover:bg-sand-100 transition-colors"
                aria-expanded={isCategoryOpen}
              >
                <span>{t("categories")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCategoryOpen ? "rotate-180 text-terracotta" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-80 mt-2 bg-white rounded-2xl shadow-float border border-sand-200 py-3 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-sand-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
                      {language === "hi" ? "कारीगरी विधाएं" : "Artisanal Traditions"}
                    </span>
                    <Link
                      href="/categories"
                      className="text-xs font-medium text-forest hover:underline"
                    >
                      {t("viewAll")} →
                    </Link>
                  </div>
                  <div className="max-h-96 overflow-y-auto py-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-charcoal-700 hover:bg-terracotta-50 hover:text-terracotta transition-colors group"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium group-hover:font-semibold">
                            {language === "hi" ? cat.hindiName : cat.name}
                          </span>
                          <span className="text-xs text-charcoal-400">
                            {cat.heritageOrigin}
                          </span>
                        </div>
                        <span className="text-xs bg-sand-200 group-hover:bg-terracotta-100 text-charcoal-600 group-hover:text-terracotta px-2 py-0.5 rounded-full font-mono">
                          {cat.itemCount}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/gallery"
                  ? "text-terracotta font-semibold bg-terracotta-50"
                  : "text-charcoal-700 hover:text-terracotta hover:bg-sand-100"
              }`}
            >
              {t("gallery")}
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-terracotta font-semibold bg-terracotta-50"
                  : "text-charcoal-700 hover:text-terracotta hover:bg-sand-100"
              }`}
            >
              {t("ourStory")}
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-terracotta font-semibold bg-terracotta-50"
                  : "text-charcoal-700 hover:text-terracotta hover:bg-sand-100"
              }`}
            >
              {t("blog")}
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/contact"
                  ? "text-terracotta font-semibold bg-terracotta-50"
                  : "text-charcoal-700 hover:text-terracotta hover:bg-sand-100"
              }`}
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Right Header Actions: Search, Wishlist, Cart, Language */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Box / Dropdown */}
            <div className="relative" ref={searchRef}>
              <div className="hidden md:flex items-center relative">
                <input
                  type="text"
                  placeholder={t("search")}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-48 lg:w-60 pl-9 pr-4 py-2 text-xs rounded-full bg-sand-100 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all placeholder:text-charcoal-400"
                />
                <Search className="w-4 h-4 text-charcoal-400 absolute left-3 pointer-events-none" />
              </div>

              {/* Mobile search toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 text-charcoal-700 hover:text-terracotta"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Live Search Results Popup */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-float border border-sand-200 p-3 z-50 animate-fade-in">
                  <div className="md:hidden mb-2">
                    <input
                      type="text"
                      placeholder={t("search")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full px-3 py-2 text-sm rounded-lg bg-sand-100 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider px-2">
                        Matching Handicrafts ({searchResults.length})
                      </div>
                      {searchResults.map((item) => (
                        <Link
                          key={item.id}
                          href={`/product/${item.slug}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-terracotta-50 transition-colors group"
                        >
                          <img
                            src={item.images[0].url}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-charcoal-900 truncate group-hover:text-terracotta">
                              {language === "hi" ? item.hindiName : item.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs font-bold text-terracotta">
                                ₹{item.price.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] text-charcoal-400 line-through">
                                ₹{item.originalPrice.toLocaleString("en-IN")}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-sand-100 text-center">
                        <Link
                          href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="text-xs font-medium text-forest hover:text-terracotta"
                        >
                          View all matching items in shop →
                        </Link>
                      </div>
                    </div>
                  ) : searchQuery.length > 1 ? (
                    <div className="py-6 text-center text-xs text-charcoal-500">
                      No handicrafts found matching &quot;{searchQuery}&quot;
                    </div>
                  ) : (
                    <div className="py-2 text-xs text-charcoal-500">
                      <p className="font-medium text-charcoal-700 mb-2">Popular Searches:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Blue Pottery", "Brass Diya", "Sheesham Box", "Mulmul Dohar", "Madhubani"].map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="px-2.5 py-1 bg-sand-100 hover:bg-terracotta-100 hover:text-terracotta rounded-full text-xs text-charcoal-600 transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist Link */}
            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-full text-charcoal-700 hover:text-terracotta hover:bg-sand-100 transition-colors"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-saffron-500 text-white text-[10px] font-bold flex items-center justify-center animate-pulse-subtle">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={toggleCart}
              className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-terracotta text-white hover:bg-terracotta-600 shadow-sm shadow-terracotta/20 transition-all active:scale-95"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-semibold hidden sm:inline">{t("cart")}</span>
              <span className="w-5 h-5 rounded-full bg-white text-terracotta text-xs font-bold flex items-center justify-center">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-sand-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-float animate-slide-up">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-terracotta-50 text-terracotta font-semibold"
                    : "text-charcoal-700 hover:bg-sand-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/categories"
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-charcoal-700 hover:bg-sand-100"
            >
              {t("categories")}
            </Link>
            <Link
              href="/track-order"
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-charcoal-700 hover:bg-sand-100"
            >
              {t("trackOrder")}
            </Link>
          </div>

          <div className="pt-4 border-t border-sand-200 flex flex-col gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-between w-full px-4 py-2.5 bg-sand-100 rounded-xl text-sm font-medium text-charcoal-800"
            >
              <span>{language === "en" ? "भाषा: English (Switch to हिंदी)" : "Language: हिंदी (English में बदलें)"}</span>
              <span className="px-2 py-0.5 bg-terracotta text-white rounded text-xs font-bold">
                {language === "en" ? "हिंदी" : "EN"}
              </span>
            </button>

            <a
              href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              <span>{t("chatWhatsapp")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
