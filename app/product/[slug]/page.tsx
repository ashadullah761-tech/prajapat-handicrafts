"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { brandConfig } from "@/config/brand";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { ProductCard } from "@/components/product/ProductCard";
import { PincodeChecker } from "@/components/product/PincodeChecker";
import {
  Heart,
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Share2,
  Check,
  Plus,
  Minus,
  Award,
  Layers,
  Leaf,
  Info,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { language, t } = useLanguage();
  const { showToast } = useToast();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0]?.options[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "care" | "artisan" | "shipping"
  >("description");
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    return notFound();
  }

  const isFavorited = isInWishlist(product.id);
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant || undefined);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariant || undefined);
    router.push("/checkout");
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      showToast("Product link copied to clipboard!", "info");
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const generateSingleProductWhatsAppUrl = () => {
    let msg = `*Namaste ${brandConfig.name}!*\n`;
    msg += `I am interested in ordering this handcrafted item:\n\n`;
    msg += `• *Product:* ${product.name}\n`;
    if (selectedVariant) msg += `• *Variant:* ${selectedVariant}\n`;
    msg += `• *Quantity:* ${quantity}\n`;
    msg += `• *Price:* ₹${(product.price * quantity).toLocaleString("en-IN")}\n`;
    msg += `• *Link:* https://kalakritihandicrafts.com/product/${product.slug}\n\n`;
    msg += `Please let me know if this is ready to dispatch. Thank you!`;
    return `https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
      msg
    )}`;
  };

  // Schema.org Product JSON-LD
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => img.url),
    description: product.shortDescription,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: brandConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `https://kalakritihandicrafts.com/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <div className="bg-ivory-100 min-h-screen py-8 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-charcoal-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-terracotta">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-terracotta">
            Shop
          </Link>
          <span>/</span>
          <Link href={`/categories/${product.categoryId}`} className="hover:text-terracotta">
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-terracotta font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Top Product View: Gallery + Purchasing Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-sand-200 shadow-card">
          {/* Left: Product Gallery */}
          <div className="space-y-4">
            {/* Main Featured Image with Zoom View */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand-100 border border-sand-200">
              <img
                src={product.images[selectedImage]?.url || product.images[0]?.url}
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Badges on main image */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.isBestSeller && (
                  <span className="px-3 py-1 rounded-full bg-forest text-white text-xs font-bold uppercase tracking-wider shadow">
                    Bestseller
                  </span>
                )}
                {product.discountPercent > 0 && (
                  <span className="px-3 py-1 rounded-full bg-saffron-500 text-white text-xs font-bold shadow">
                    {product.discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-200 shadow-float ${
                  isFavorited
                    ? "bg-rose-500 text-white hover:bg-rose-600 scale-105"
                    : "bg-white/95 text-charcoal-700 hover:text-rose-500 hover:bg-white"
                }`}
                aria-label="Wishlist toggle"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Thumbnails Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === idx
                        ? "border-terracotta ring-2 ring-terracotta/20 scale-105"
                        : "border-sand-200 hover:border-sand-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Artisan Trust Box */}
            <div className="p-4 rounded-2xl bg-sand-100/60 border border-sand-200 flex items-center justify-between text-xs text-charcoal-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center font-serif font-bold text-sm">
                  {product.artisan.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal-900">{product.artisan.name}</h4>
                  <span className="text-[11px] text-terracotta font-medium">
                    {product.artisan.village} • {product.artisan.craft}
                  </span>
                </div>
              </div>
              <Award className="w-6 h-6 text-saffron-500 flex-shrink-0" />
            </div>
          </div>

          {/* Right: Purchasing Details */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  {product.categoryName}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-saffron-600 font-bold font-mono">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
                    ))}
                  </div>
                  <span>{product.rating}</span>
                  <span className="text-charcoal-400 font-normal">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Title & Hindi Subtitle */}
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 leading-snug">
                  {language === "hi" ? product.hindiName : product.name}
                </h1>
                {language !== "hi" && (
                  <p className="font-serif text-sm text-terracotta-700 font-medium mt-1">
                    {product.hindiName}
                  </p>
                )}
              </div>

              {/* Price Details */}
              <div className="p-4 rounded-2xl bg-sand-100/70 border border-sand-200 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-charcoal-400 line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                    {product.discountPercent > 0 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-saffron-500 text-white text-xs font-bold">
                        Save {product.discountPercent}%
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-charcoal-500 block mt-1">
                    Inclusive of all GST taxes • Free Pan-India Delivery on this order
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Stock (Jaipur Studio)</span>
                  </span>
                </div>
              </div>

              {/* Short Summary */}
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                {language === "hi" ? product.hindiShortDescription : product.shortDescription}
              </p>

              {/* Variants Selector (if any) */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-charcoal-700 uppercase tracking-wider block">
                    Choose {product.variants[0].name}:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants[0].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedVariant(opt)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          selectedVariant === opt
                            ? "bg-terracotta text-white shadow-sm ring-2 ring-terracotta/30"
                            : "bg-sand-100 hover:bg-sand-200 text-charcoal-800 border border-sand-300"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Counter */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                  Quantity:
                </span>
                <div className="flex items-center border border-sand-300 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-charcoal-600 hover:bg-sand-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold font-mono text-charcoal-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-charcoal-600 hover:bg-sand-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 Main Action Buttons: Add to Cart, Buy Now, Order on WhatsApp */}
              <div className="space-y-2.5 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-sand-200 hover:bg-sand-300 text-charcoal-900 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4 text-terracotta" />
                    <span>{t("addToCart")}</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-terracotta hover:bg-terracotta-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-terracotta/20 transition-colors"
                  >
                    <span>{t("buyNow")}</span>
                  </button>
                </div>

                {/* Prominent WhatsApp Order button */}
                <a
                  href={generateSingleProductWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351z" />
                  </svg>
                  <span>Order Directly on WhatsApp</span>
                </a>
              </div>

              {/* Delivery Pincode Estimator */}
              <div className="pt-2">
                <PincodeChecker />
              </div>

              {/* Share & Social */}
              <div className="pt-2 flex items-center justify-between text-xs text-charcoal-500 border-t border-sand-100">
                <span className="font-semibold text-charcoal-700">Share this craft:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg bg-sand-100 hover:bg-sand-200 text-charcoal-700 transition-colors"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `Check out this handmade ${product.name}: https://kalakritihandicrafts.com/product/${product.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-100"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Trust Icons Row */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-sand-200 text-center text-[11px] text-charcoal-600">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-terracotta" />
                <span>100% Verified Authentic</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-terracotta" />
                <span>Damage-Free Transit</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-terracotta" />
                <span>Easy 7-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="mt-12 bg-white rounded-3xl border border-sand-200 shadow-card overflow-hidden">
          {/* Tab Buttons */}
          <div className="flex border-b border-sand-200 overflow-x-auto bg-sand-50/60">
            {[
              { id: "description", label: "Craft Story & Heritage" },
              { id: "specifications", label: "Materials & Specs" },
              { id: "care", label: "Care Instructions" },
              { id: "artisan", label: "About the Artisan" },
              { id: "shipping", label: "Shipping & Returns" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-6 text-xs sm:text-sm font-serif font-bold whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-terracotta text-terracotta bg-white"
                    : "border-transparent text-charcoal-600 hover:text-charcoal-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-10 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            {activeTab === "description" && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-serif text-lg font-bold text-charcoal-900">
                  The Story Behind the Piece
                </h3>
                <p>{language === "hi" ? product.hindiFullDescription : product.fullDescription}</p>

                <div className="pt-4">
                  <h4 className="font-serif font-bold text-charcoal-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-forest flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="max-w-2xl">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-sand-200">
                      <td className="py-3 font-semibold text-charcoal-900 w-1/3">Raw Material</td>
                      <td className="py-3 text-charcoal-600">{product.specifications.material}</td>
                    </tr>
                    <tr className="border-b border-sand-200">
                      <td className="py-3 font-semibold text-charcoal-900">Dimensions</td>
                      <td className="py-3 text-charcoal-600">{product.specifications.dimensions}</td>
                    </tr>
                    <tr className="border-b border-sand-200">
                      <td className="py-3 font-semibold text-charcoal-900">Weight</td>
                      <td className="py-3 text-charcoal-600">{product.specifications.weight}</td>
                    </tr>
                    <tr className="border-b border-sand-200">
                      <td className="py-3 font-semibold text-charcoal-900">Heritage Origin</td>
                      <td className="py-3 text-charcoal-600">{product.specifications.origin}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-charcoal-900">Surface Finish</td>
                      <td className="py-3 text-charcoal-600">{product.specifications.finish}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-serif text-lg font-bold text-charcoal-900">
                  Preserving Your Handcrafted Heirloom
                </h3>
                <p className="bg-sand-100 p-4 rounded-2xl border border-sand-200 text-charcoal-800">
                  {product.specifications.care}
                </p>
                <div className="space-y-2 text-xs text-charcoal-600">
                  <p>• Avoid exposure to extreme direct rain or harsh abrasive scouring chemicals.</p>
                  <p>• For brass: restore mirror shine with lemon juice and salt or Pitambari powder.</p>
                  <p>• For pottery: wipe gently with dry or damp microfiber cloth; not dishwasher safe.</p>
                </div>
              </div>
            )}

            {activeTab === "artisan" && (
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-terracotta text-white flex items-center justify-center font-serif font-bold text-xl">
                    {product.artisan.name[0]}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">
                      {product.artisan.name}
                    </h3>
                    <p className="text-xs text-terracotta font-semibold">
                      {product.artisan.village} • {product.artisan.craft}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Every single piece is personally shaped, carved, or painted by our master guild members. By acquiring this piece, you directly fund fair-wage livelihood, dignified healthcare, and apprentice training for young rural craftspeople.
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-serif text-lg font-bold text-charcoal-900">
                  Damage-Free Delivery Guarantee
                </h3>
                <p>
                  We treat every parcel with immense reverence. Handcrafted items are wrapped in 5 layers of shockproof protection: honeycomb paper, bubble cushioning, corner guards, and 7-ply export-grade corrugated boxes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-sand-100 rounded-xl">
                    <strong className="block text-charcoal-900">Standard Timeline:</strong>
                    <span className="text-xs text-charcoal-600">3 - 6 Business Days across India</span>
                  </div>
                  <div className="p-3 bg-sand-100 rounded-xl">
                    <strong className="block text-charcoal-900">Zero-Risk Replacement:</strong>
                    <span className="text-xs text-charcoal-600">Free immediate reshipment if damaged</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Handicrafts Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-8">
            <div>
              <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
                Artisanal Harmony
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                You May Also Cherish
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
