"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const category = categories.find((c) => c.slug === slug);
  const { language } = useLanguage();

  if (!category) {
    return notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-500">
          <Link href="/" className="hover:text-terracotta">
            Home
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-terracotta">
            Categories
          </Link>
          <span>/</span>
          <span className="text-terracotta font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-charcoal-900 text-white min-h-[280px] sm:min-h-[340px] flex items-center p-6 sm:p-12 shadow-card">
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.38]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/40 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/20 border border-saffron-400/30 text-saffron-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{category.heritageOrigin}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              {language === "hi" ? category.hindiName : category.name}
            </h1>

            <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-light">
              {category.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-saffron-300">
              <span>{categoryProducts.length} Items Available</span>
              <span>•</span>
              <span>Free Delivery Above ₹999</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-sand-200">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
              Handcrafted Items in this Collection
            </h2>
            <Link
              href="/shop"
              className="text-xs font-semibold text-terracotta hover:underline flex items-center gap-1"
            >
              <span>View All Store Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-3xl border border-sand-200 space-y-3">
              <h3 className="font-serif text-lg font-bold text-charcoal-800">
                New Kiln Batches Arriving Soon
              </h3>
              <p className="text-xs text-charcoal-500">
                Our artisans in {category.heritageOrigin} are currently firing the next edition.
              </p>
              <Link
                href="/shop"
                className="inline-block px-5 py-2.5 bg-terracotta text-white rounded-full text-xs font-semibold"
              >
                Browse Other Handicrafts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
