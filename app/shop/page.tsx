"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import {
  SlidersHorizontal,
  X,
  Search,
  Sparkles,
} from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "popular";

  const { language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<string>(initialSort);
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category
        if (selectedCategory !== "all" && p.categoryId !== selectedCategory) {
          return false;
        }
        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q) || p.hindiName.includes(q);
          const matchCategory = p.categoryName.toLowerCase().includes(q);
          const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchName && !matchCategory && !matchTag) return false;
        }
        // Price
        if (p.price > priceRange) return false;
        // In Stock
        if (inStockOnly && !p.inStock) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "newest") return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
        // default "popular"
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      });
  }, [selectedCategory, searchQuery, sortBy, priceRange, inStockOnly]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("popular");
    setPriceRange(5000);
    setInStockOnly(false);
  };

  return (
    <div className="bg-[#f4f2e6] text-[#37472a] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-8 space-y-2">
          <div className="text-xs text-[#7A6327] flex items-center gap-2">
            <Link href="/" className="hover:underline">
              {language === "hi" ? "होम" : "Home"}
            </Link>
            <span>/</span>
            <span className="font-semibold">
              {language === "hi" ? "हस्तशिल्प संग्रह" : "Handicraft Collection"}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#7A6327] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {language === "hi" ? "जयपुर विरासत शिल्प" : "AUTHENTIC JAIPUR CRAFTS"}
              </p>
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#37472a] tracking-tight">
                {language === "hi" ? "समस्त प्रामाणिक हस्तशिल्प" : "All Handcrafted Collections"}
              </h1>
              <p className="text-xs sm:text-sm text-[#6e7663] mt-1">
                {language === "hi"
                  ? `${filteredProducts.length} विशिष्ट भारतीय हस्तनिर्मित उत्पाद उपलब्ध`
                  : `Showing ${filteredProducts.length} curated artisan treasures`}
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#fdfcf7] border border-[#37472a]/20 text-xs font-semibold text-[#37472a] shadow-sm cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#7A6327]" />
                <span>{language === "hi" ? "फ़िल्टर" : "Filters"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar Filters + Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block bg-[#fdfcf7] p-6 rounded-3xl border border-[#37472a]/10 shadow-sm space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-[#37472a]/10">
              <div className="flex items-center gap-2 font-serif font-bold text-[#37472a] text-base">
                <SlidersHorizontal className="w-4 h-4 text-[#7A6327]" />
                <span>{language === "hi" ? "शिल्प फ़िल्टर" : "Refine Craft"}</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-[#7A6327] hover:underline font-semibold cursor-pointer"
              >
                {language === "hi" ? "रीसेट करें" : "Reset All"}
              </button>
            </div>

            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#37472a] uppercase tracking-wider block">
                {language === "hi" ? "खोजें" : "Search"}
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder={language === "hi" ? "जैसे पॉटरी, दिया, कुर्सी..." : "e.g. Diya, Pottery, Chair..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-full bg-[#f4f2e6] border border-[#37472a]/20 text-[#37472a] focus:outline-none focus:ring-2 focus:ring-[#37472a]"
                />
                <Search className="w-3.5 h-3.5 text-[#6e7663] absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#37472a] uppercase tracking-wider block">
                {language === "hi" ? "शिल्प विधा" : "Craft Tradition"}
              </label>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-[#37472a] text-white font-bold"
                      : "text-[#37472a] hover:bg-[#f4f2e6]"
                  }`}
                >
                  <span>{language === "hi" ? "सभी विधाएं" : "All Traditions"}</span>
                  <span className="font-mono text-[10px]">{products.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-[#37472a] text-white font-bold"
                        : "text-[#37472a] hover:bg-[#f4f2e6]"
                    }`}
                  >
                    <span className="truncate">{language === "hi" ? cat.hindiName : cat.name}</span>
                    <span className="font-mono text-[10px]">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2 pt-2 border-t border-[#37472a]/10">
              <div className="flex justify-between items-center text-xs font-bold text-[#37472a]">
                <span className="uppercase tracking-wider">{language === "hi" ? "अधिकतम कीमत" : "Max Price"}</span>
                <span className="text-[#7A6327] font-mono">₹{priceRange.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#37472a] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#888] font-mono">
                <span>₹500</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* In-Stock Toggle */}
            <div className="pt-2 border-t border-[#37472a]/10">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#37472a]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-[#37472a] focus:ring-[#37472a] w-4 h-4 cursor-pointer"
                />
                <span>{language === "hi" ? "स्टॉक में उपलब्ध (तुरंत शिपिंग)" : "Ready to Ship (In Stock Only)"}</span>
              </label>
            </div>
          </aside>

          {/* Main Product Area */}
          <main className="lg:col-span-3 space-y-6">
            {/* Top Toolbar: Sorting & Active Filters */}
            <div className="bg-[#fdfcf7] p-4 rounded-2xl border border-[#37472a]/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Active Filter Chips */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f2e6] text-[#37472a] text-xs font-medium border border-[#37472a]/20">
                    <span>
                      {categories.find((c) => c.id === selectedCategory)?.name}
                    </span>
                    <button onClick={() => setSelectedCategory("all")} className="cursor-pointer">
                      <X className="w-3.5 h-3.5 text-[#37472a] hover:text-[#7A6327]" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f2e6] text-[#37472a] text-xs font-medium border border-[#37472a]/20">
                    <span>Search: {searchQuery}</span>
                    <button onClick={() => setSearchQuery("")} className="cursor-pointer">
                      <X className="w-3.5 h-3.5 text-[#37472a] hover:text-[#7A6327]" />
                    </button>
                  </span>
                )}
                {inStockOnly && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f2e6] text-[#37472a] text-xs font-medium border border-[#37472a]/20">
                    <span>{language === "hi" ? "केवल इन-स्टॉक" : "In Stock Only"}</span>
                    <button onClick={() => setInStockOnly(false)} className="cursor-pointer">
                      <X className="w-3.5 h-3.5 text-[#37472a] hover:text-[#7A6327]" />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort By Select */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-[#6e7663] font-medium whitespace-nowrap">
                  {language === "hi" ? "क्रम:" : "Sort By:"}
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-full bg-[#f4f2e6] border border-[#37472a]/20 text-xs font-medium text-[#37472a] focus:outline-none focus:ring-2 focus:ring-[#37472a] cursor-pointer"
                >
                  <option value="popular">{language === "hi" ? "सर्वाधिक लोकप्रिय" : "Most Loved (Bestsellers)"}</option>
                  <option value="newest">{language === "hi" ? "नवीनतम शिल्प" : "Fresh from Kiln (Newest)"}</option>
                  <option value="rating">{language === "hi" ? "सर्वोच्च रेटिंग" : "Highest Rated"}</option>
                  <option value="price-low">{language === "hi" ? "कीमत: कम से अधिक" : "Price: Low to High"}</option>
                  <option value="price-high">{language === "hi" ? "कीमत: अधिक से कम" : "Price: High to Low"}</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#fdfcf7] rounded-3xl border border-[#37472a]/10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f4f2e6] text-[#7A6327] flex items-center justify-center">
                  <Search className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#37472a]">
                  {language === "hi" ? "कोई हस्तशिल्प नहीं मिला" : "No handicrafts matched your exact criteria"}
                </h3>
                <p className="text-xs text-[#6e7663] max-w-sm mx-auto">
                  {language === "hi"
                    ? "कृपया कीमत सीमा बढ़ाएँ या खोज फ़िल्टर रीसेट करें।"
                    : "Try broadening your price range or clearing the active search keyword."}
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#37472a] text-white rounded-full text-xs font-semibold hover:bg-[#25301d] shadow-sm cursor-pointer"
                >
                  {language === "hi" ? "सभी फ़िल्टर रीसेट करें" : "Reset All Filters"}
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in lg:hidden">
          <div className="w-full max-w-xs bg-[#fdfcf7] h-full p-6 space-y-6 overflow-y-auto animate-slide-up flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#37472a]/10">
                <span className="font-serif font-bold text-lg text-[#37472a]">
                  {language === "hi" ? "शिल्प फ़िल्टर" : "Filter Crafts"}
                </span>
                <button onClick={() => setIsMobileFilterOpen(false)} aria-label="Close filters" className="cursor-pointer">
                  <X className="w-5 h-5 text-[#37472a]" />
                </button>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#37472a] uppercase">
                  {language === "hi" ? "शिल्प विधा" : "Tradition"}
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3 py-2 rounded-full text-xs font-medium cursor-pointer ${
                      selectedCategory === "all" ? "bg-[#37472a] text-white font-bold" : "bg-[#f4f2e6] text-[#37472a]"
                    }`}
                  >
                    {language === "hi" ? "सभी विधाएं" : "All Traditions"}
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`w-full text-left px-3 py-2 rounded-full text-xs font-medium cursor-pointer ${
                        selectedCategory === c.id ? "bg-[#37472a] text-white font-bold" : "bg-[#f4f2e6] text-[#37472a]"
                      }`}
                    >
                      {language === "hi" ? c.hindiName : c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#37472a]">
                  <span>{language === "hi" ? "अधिकतम कीमत" : "Max Price"}</span>
                  <span className="text-[#7A6327]">₹{priceRange}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#37472a] cursor-pointer"
                />
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-[#37472a] text-white rounded-full text-xs font-semibold shadow-md cursor-pointer"
            >
              {language === "hi"
                ? `फ़िल्टर लागू करें (${filteredProducts.length} परिणाम)`
                : `Apply Filters (${filteredProducts.length} Results)`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center text-[#37472a]">Loading artisan store...</div>}>
      <ShopContent />
    </Suspense>
  );
}
