"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HeroSlide {
  image: string;
  badge: string;
  hindiBadge: string;
  headline: string;
  hindiHeadline: string;
  subtext: string;
  hindiSubtext: string;
}

const slides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1920&q=85",
    badge: "Authentic Indian Craftsmanship",
    hindiBadge: "प्रामाणिक भारतीय शिल्पकला",
    headline: "Bring Home the Soul of Indian Craft",
    hindiHeadline: "भारतीय हस्तशिल्प की आत्मा अपने घर लाएं",
    subtext: "Hand-carved sheesham wood, wheel-thrown terracotta, lost-wax brass, and Jaipur blue pottery crafted by hereditary master artisans.",
    hindiSubtext: "हाथ से तराशी शीशम की लकड़ी, चाक पर गढ़ी मिट्टी, प्राचीन पीतल और जयपुर की प्रसिद्ध ब्लू पॉटरी सीधे कारीगरों के घर से।",
  },
  {
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1920&q=85",
    badge: "Heritage Metal & Lighting",
    hindiBadge: "विरासत पीतल एवं प्रकाश",
    headline: "Sacred Radiancy Cast in Pure Brass",
    hindiHeadline: "शुद्ध पीतल में ढली अलौकिक आभा",
    subtext: "Temple peacock hanging diyas, hand-hammered urlis, and antique bell metal sculptures made with 4,000-year-old lost-wax casting.",
    hindiSubtext: "मयूर हैंगिंग दीया, हाथ से पीटे गए उरुली पात्र और ढोकरा शिल्प जो आपके घर को सकारात्मक ऊर्जा से भर दें।",
  },
  {
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1920&q=85",
    badge: "Handloom & Organic Textiles",
    hindiBadge: "हथकरघा एवं शुद्ध सूती वस्त्र",
    headline: "Softness Woven with Natural Earth Dyes",
    hindiHeadline: "प्राकृतिक रंगों से बुनी अद्वितीय कोमलता",
    subtext: "Pure combed mulmul cotton dohars and cushions, hand-stamped with teakwood blocks under the desert sun of Sanganer and Bagru.",
    hindiSubtext: "सांगानेर और बगरू के लकड़ी के छापों से रंगे शुद्ध मलमल के दोहर और कुशन कवर्स जो हर मौसम में सुकून दें।",
  },
];

export const HeroSlider: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-charcoal-900 text-white">
      {/* Background Photography with Crossfade */}
      {slides.map((s, index) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <img
            src={s.image}
            alt={s.headline}
            className="w-full h-full object-cover object-center filter brightness-[0.45]"
          />
        </div>
      ))}

      {/* Decorative Traditional Border & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-900/30 to-charcoal-900/70 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Artisan Craft Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-saffron-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
          <span>{language === "hi" ? slide.hindiBadge : slide.badge}</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory-50 max-w-4xl leading-[1.15] mb-6 drop-shadow-md">
          {language === "hi" ? slide.hindiHeadline : slide.headline}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-ivory-200/90 max-w-2xl font-light leading-relaxed mb-8 drop-shadow">
          {language === "hi" ? slide.hindiSubtext : slide.subtext}
        </p>

        {/* Dual Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Shop CTA */}
          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-terracotta hover:bg-terracotta-600 text-white font-semibold text-sm tracking-wide shadow-float transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t("shopNow")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* WhatsApp CTA */}
          <a
            href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
              `Namaste! I am browsing the ${brandConfig.name} website and would love to see your top festive craft collections.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm tracking-wide shadow-float transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351z" />
            </svg>
            <span>{t("chatWhatsapp")}</span>
          </a>
        </div>

        {/* Floating Trust Chips */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-ivory-200">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <ShieldCheck className="w-4 h-4 text-saffron-400" />
            <span>100% Verified Handmade</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <Users className="w-4 h-4 text-saffron-400" />
            <span>450+ Rural Artisan Families</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <Truck className="w-4 h-4 text-saffron-400" />
            <span>Pan-India Safe Delivery</span>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-900/60 hover:bg-terracotta text-white backdrop-blur-md border border-white/20 transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-charcoal-900/60 hover:bg-terracotta text-white backdrop-blur-md border border-white/20 transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? "w-8 bg-terracotta" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
