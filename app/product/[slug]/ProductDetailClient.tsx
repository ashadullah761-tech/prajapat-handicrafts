"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import {
  MessageCircle,
  Award,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { language } = useLanguage();

  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "care" | "artisan"
  >("description");

  const generateSingleProductWhatsAppUrl = () => {
    let msg = `*Namaste ${brandConfig.name}!*\n`;
    msg += `I am interested in this handcrafted product:\n\n`;
    msg += `• *Product:* ${product.name}\n`;
    if (product.hindiName) msg += `• *Hindi Name:* ${product.hindiName}\n`;
    msg += `• *Link:* https://gehlotexport.com/product/${product.slug}\n\n`;
    msg += `Please share more details and availability. Thank you!`;
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
      msg
    )}`;
  };

  // Schema.org Product JSON-LD for SEO without pricing
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) =>
      img.url.startsWith("http") ? img.url : `https://gehlotexport.com${img.url}`
    ),
    description: product.shortDescription,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: brandConfig.name,
    },
  };

  return (
    <div className="bg-[#fbf9f4] min-h-screen py-6 sm:py-12 w-full max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#6e7663] overflow-x-auto whitespace-nowrap max-w-full pb-1">
          <Link href="/" className="hover:text-[#7A6327] transition-colors shrink-0">
            {language === "hi" ? "होम" : "Home"}
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#999] shrink-0" />
          <Link href="/#products" className="hover:text-[#7A6327] transition-colors shrink-0">
            {language === "hi" ? "उत्पाद" : "Products"}
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#999] shrink-0" />
          <span className="text-[#37472a] font-semibold truncate max-w-[180px] sm:max-w-sm">
            {product.name}
          </span>
        </nav>

        {/* Top Product View: Clean Image Gallery + Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 bg-white p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#37472a]/10 shadow-sm w-full max-w-full overflow-hidden">
          {/* Left: Product Image Gallery */}
          <div className="space-y-3 sm:space-y-4 w-full min-w-0">
            {/* Main Featured Image */}
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#37472a]/10 flex items-center justify-center p-2 sm:p-4 w-full">
              <img
                src={product.images[selectedImage]?.url || product.images[0]?.url}
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-contain object-center transition-all duration-300"
                loading="eager"
              />
            </div>

            {/* Thumbnails Row (if multiple images) */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 max-w-full">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white p-1 cursor-pointer ${
                      selectedImage === idx
                        ? "border-[#7A6327] ring-2 ring-[#7A6327]/20 scale-105"
                        : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-contain object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-between space-y-5 sm:space-y-6 w-full min-w-0">
            <div className="space-y-3 sm:space-y-4">
              {/* Category Tag */}
              <div>
                <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-[#f4f2e6] text-[#7A6327] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {product.categoryName || "Handicrafts"}
                </span>
              </div>

              {/* Title & Hindi Subtitle */}
              <div>
                <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-[#37472a] leading-tight break-words">
                  {language === "hi" ? product.hindiName : product.name}
                </h1>
                {language !== "hi" && product.hindiName && (
                  <p className="font-serif text-xs sm:text-base text-[#7A6327] font-medium mt-1 sm:mt-1.5 break-words">
                    {product.hindiName}
                  </p>
                )}
              </div>

              {/* Short Summary Description */}
              <p className="text-xs sm:text-base text-[#6e7663] leading-relaxed break-words">
                {language === "hi" ? product.hindiShortDescription : product.shortDescription}
              </p>

              {/* Key Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#fdfcf7] border border-[#37472a]/10">
                  <h4 className="font-serif text-[11px] sm:text-xs font-bold text-[#37472a] uppercase tracking-wider mb-2.5 sm:mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#b39b5b] shrink-0" />
                    <span>{language === "hi" ? "मुख्य विशेषताएं" : "Key Product Highlights"}</span>
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#37472a]">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A6327] flex-shrink-0 mt-0.5" />
                        <span className="break-words">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* WhatsApp Enquiry Button */}
              <div className="pt-2">
                <a
                  href={generateSingleProductWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 sm:px-6 rounded-full bg-[#37472a] hover:bg-[#25301d] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] shrink-0" />
                  <span>{language === "hi" ? "व्हाट्सएप पर जानकारी लें" : "Enquire on WhatsApp"}</span>
                </a>
              </div>

              {/* Artisan Details Card */}
              {product.artisan && (
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f4f2e6]/60 border border-[#37472a]/10 flex items-center justify-between text-xs text-[#6e7663] gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#37472a] text-white flex items-center justify-center font-serif font-bold text-sm shrink-0">
                      {product.artisan.name[0]}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-[#37472a] truncate">{product.artisan.name}</h4>
                      <span className="text-[10px] sm:text-[11px] text-[#7A6327] font-medium truncate block">
                        {product.artisan.village} • {product.artisan.craft}
                      </span>
                    </div>
                  </div>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#b39b5b] flex-shrink-0" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Product Information Tabs */}
        <div className="mt-6 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl border border-[#37472a]/10 shadow-sm overflow-hidden w-full max-w-full">
          {/* Tab Buttons */}
          <div className="flex border-b border-[#37472a]/10 overflow-x-auto bg-[#fdfcf7] max-w-full">
            {[
              {
                id: "description",
                label: language === "hi" ? "शिल्प विवरण व कथा" : "Description & Story",
              },
              {
                id: "specifications",
                label: language === "hi" ? "उत्पाद विनिर्देश (Specs)" : "Materials & Specs",
              },
              {
                id: "care",
                label: language === "hi" ? "देखभाल निर्देश" : "Care Instructions",
              },
              {
                id: "artisan",
                label: language === "hi" ? "शिल्पकार परिचय" : "About Artisan",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 sm:py-4 px-3 sm:px-6 text-[11px] sm:text-sm font-serif font-bold whitespace-nowrap transition-colors border-b-2 cursor-pointer shrink-0 ${
                  activeTab === tab.id
                    ? "border-[#7A6327] text-[#7A6327] bg-white"
                    : "border-transparent text-[#6e7663] hover:text-[#37472a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 lg:p-10 text-xs sm:text-sm text-[#37472a] leading-relaxed w-full max-w-full overflow-hidden">
            {activeTab === "description" && (
              <div className="space-y-3 sm:space-y-4 max-w-3xl">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#37472a]">
                  {language === "hi" ? "शिल्प की प्रामाणिक कहानी" : "The Story Behind the Piece"}
                </h3>
                <p className="text-[#6e7663] leading-relaxed text-xs sm:text-sm break-words">
                  {language === "hi" ? product.hindiFullDescription : product.fullDescription}
                </p>

                {product.highlights && product.highlights.length > 0 && (
                  <div className="pt-3 sm:pt-4">
                    <h4 className="font-serif font-bold text-[#37472a] mb-2 sm:mb-3 text-xs sm:text-sm">
                      {language === "hi" ? "विशेषताएं:" : "Key Highlights:"}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {product.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#6e7663] text-xs sm:text-sm">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A6327] flex-shrink-0" />
                          <span className="break-words">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === "specifications" && product.specifications && (
              <div className="max-w-2xl w-full overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-full">
                  <tbody>
                    {product.specifications.material && (
                      <tr className="border-b border-[#37472a]/10">
                        <td className="py-2.5 sm:py-3 font-semibold text-[#37472a] w-1/3 pr-2">
                          {language === "hi" ? "सामग्री (Material)" : "Material"}
                        </td>
                        <td className="py-2.5 sm:py-3 text-[#6e7663] break-words">
                          {product.specifications.material}
                        </td>
                      </tr>
                    )}
                    {product.specifications.dimensions && (
                      <tr className="border-b border-[#37472a]/10">
                        <td className="py-2.5 sm:py-3 font-semibold text-[#37472a] pr-2">
                          {language === "hi" ? "आयाम (Dimensions)" : "Dimensions"}
                        </td>
                        <td className="py-2.5 sm:py-3 text-[#6e7663] break-words">
                          {product.specifications.dimensions}
                        </td>
                      </tr>
                    )}
                    {product.specifications.weight && (
                      <tr className="border-b border-[#37472a]/10">
                        <td className="py-2.5 sm:py-3 font-semibold text-[#37472a] pr-2">
                          {language === "hi" ? "वजन (Weight)" : "Weight"}
                        </td>
                        <td className="py-2.5 sm:py-3 text-[#6e7663] break-words">
                          {product.specifications.weight}
                        </td>
                      </tr>
                    )}
                    {product.specifications.origin && (
                      <tr className="border-b border-[#37472a]/10">
                        <td className="py-2.5 sm:py-3 font-semibold text-[#37472a] pr-2">
                          {language === "hi" ? "उत्पत्ति (Heritage Origin)" : "Heritage Origin"}
                        </td>
                        <td className="py-2.5 sm:py-3 text-[#6e7663] break-words">
                          {product.specifications.origin}
                        </td>
                      </tr>
                    )}
                    {product.specifications.finish && (
                      <tr>
                        <td className="py-2.5 sm:py-3 font-semibold text-[#37472a] pr-2">
                          {language === "hi" ? "फिनिश (Surface Finish)" : "Surface Finish"}
                        </td>
                        <td className="py-2.5 sm:py-3 text-[#6e7663] break-words">
                          {product.specifications.finish}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#37472a]">
                  {language === "hi" ? "देखभाल एवं रखरखाव" : "Preserving Your Handcrafted Piece"}
                </h3>
                {product.specifications?.care && (
                  <p className="bg-[#f4f2e6]/70 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#37472a]/10 text-[#37472a] text-xs sm:text-sm break-words">
                    {product.specifications.care}
                  </p>
                )}
                <div className="space-y-1.5 sm:space-y-2 text-xs text-[#6e7663]">
                  <p>• Avoid exposure to extreme direct rain or harsh abrasive scouring chemicals.</p>
                  <p>• For metal/brass: wipe with dry or slightly damp soft microfiber cloth.</p>
                  <p>• For wood: polish occasionally with beeswax to keep the natural grain hydrated.</p>
                </div>
              </div>
            )}

            {activeTab === "artisan" && product.artisan && (
              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#37472a] text-white flex items-center justify-center font-serif font-bold text-lg sm:text-xl shrink-0">
                    {product.artisan.name[0]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#37472a] truncate">
                      {product.artisan.name}
                    </h3>
                    <p className="text-xs text-[#7A6327] font-semibold truncate">
                      {product.artisan.village} • {product.artisan.craft}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6e7663] leading-relaxed break-words">
                  Every single piece is personally shaped, carved, or forged by our master craftspeople in Rajasthan. By acquiring this piece, you directly support authentic Indian artisan lineages, fair-trade livelihood, and traditional handicraft heritage.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
