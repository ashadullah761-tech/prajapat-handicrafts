"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, Product } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import {
  SlidersHorizontal,
  X,
  Search,
  Sparkles,
  ArrowUpDown,
  Check,
} from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "popular";

  const { language, t } = useLanguage();

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
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-8 space-y-2">
          <div className="text-xs text-charcoal-500 flex items-center gap-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-terracotta font-semibold">Shop Handicrafts</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
                {language === "hi" ? "समस्त प्रामाणिक हस्तशिल्प" : "All Handcrafted Collections"}
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                Showing {filteredProducts.length} curated artisan treasures
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-sand-300 text-xs font-semibold text-charcoal-800 shadow-sm"
              >
                <SlidersHorizontal className="w-4 h-4 text-terracotta" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar Filters + Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block bg-white p-6 rounded-3xl border border-sand-200 shadow-card space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-sand-100">
              <div className="flex items-center gap-2 font-serif font-bold text-charcoal-900 text-base">
                <SlidersHorizontal className="w-4 h-4 text-terracotta" />
                <span>Refine Craft</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-terracotta hover:underline font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-charcoal-700 uppercase tracking-wider block">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Diya, Pottery, Dohar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                />
                <Search className="w-3.5 h-3.5 text-charcoal-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-charcoal-700 uppercase tracking-wider block">
                Craft Tradition
              </label>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedCategory === "all"
                      ? "bg-terracotta text-white font-bold"
                      : "text-charcoal-700 hover:bg-sand-100"
                  }`}
                >
                  <span>All Traditions</span>
                  <span className="font-mono text-[10px]">{products.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? "bg-terracotta text-white font-bold"
                        : "text-charcoal-700 hover:bg-sand-100"
                    }`}
                  >
                    <span className="truncate">{language === "hi" ? cat.hindiName : cat.name}</span>
                    <span className="font-mono text-[10px]">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2 pt-2 border-t border-sand-100">
              <div className="flex justify-between items-center text-xs font-bold text-charcoal-700">
                <span className="uppercase tracking-wider">Max Price</span>
                <span className="text-terracotta font-mono">₹{priceRange.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-terracotta cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-charcoal-400 font-mono">
                <span>₹500</span>
                <span>₹5,000</span>
              </div>
            </div>

            {/* In-Stock Toggle */}
            <div className="pt-2 border-t border-sand-100">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-charcoal-700">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-terracotta focus:ring-terracotta w-4 h-4"
                />
                <span>Ready to Ship (In Stock Only)</span>
              </label>
            </div>
          </aside>

          {/* Main Product Area */}
          <main className="lg:col-span-3 space-y-6">
            {/* Top Toolbar: Sorting & Active Filters */}
            <div className="bg-white p-4 rounded-2xl border border-sand-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Active Filter Chips */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 text-charcoal-800 text-xs font-medium">
                    <span>
                      {categories.find((c) => c.id === selectedCategory)?.name}
                    </span>
                    <button onClick={() => setSelectedCategory("all")}>
                      <X className="w-3.5 h-3.5 text-charcoal-500 hover:text-terracotta" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 text-charcoal-800 text-xs font-medium">
                    <span>Search: {searchQuery}</span>
                    <button onClick={() => setSearchQuery("")}>
                      <X className="w-3.5 h-3.5 text-charcoal-500 hover:text-terracotta" />
                    </button>
                  </span>
                )}
                {inStockOnly && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 text-charcoal-800 text-xs font-medium">
                    <span>In Stock Only</span>
                    <button onClick={() => setInStockOnly(false)}>
                      <X className="w-3.5 h-3.5 text-charcoal-500 hover:text-terracotta" />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort By Select */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-charcoal-500 font-medium whitespace-nowrap">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-sand-100 border border-sand-300 text-xs font-medium text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-terracotta"
                >
                  <option value="popular">Most Loved (Bestsellers)</option>
                  <option value="newest">Fresh from Kiln (Newest)</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
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
              <div className="p-12 text-center bg-white rounded-3xl border border-sand-200 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sand-100 text-terracotta flex items-center justify-center">
                  <Search className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal-900">
                  No handicrafts matched your exact criteria
                </h3>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto">
                  Try broadening your price range or clearing the active search keyword.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-terracotta text-white rounded-full text-xs font-semibold hover:bg-terracotta-600 shadow-sm"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-900/60 backdrop-blur-sm flex justify-end animate-fade-in lg:hidden">
          <div className="w-full max-w-xs bg-white h-full p-6 space-y-6 overflow-y-auto animate-slide-up flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-sand-200">
                <span className="font-serif font-bold text-lg text-charcoal-900">Filter Crafts</span>
                <button onClick={() => setIsMobileFilterOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5 text-charcoal-600" />
                </button>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-charcoal-700 uppercase">Tradition</label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                      selectedCategory === "all" ? "bg-terracotta text-white font-bold" : "bg-sand-100"
                    }`}
                  >
                    All Traditions
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${
                        selectedCategory === c.id ? "bg-terracotta text-white font-bold" : "bg-sand-100"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>Max Price</span>
                  <span className="text-terracotta">₹{priceRange}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-terracotta"
                />
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 bg-terracotta text-white rounded-xl text-xs font-semibold shadow-md"
            >
              Apply Filters ({filteredProducts.length} Results)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center">Loading artisan store...</div>}>
      <ShopContent />
    </Suspense>
  );
}
