"use client";

import React from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight, Gift, CheckCircle2 } from "lucide-react";

export const FeaturedCollectionBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-forest-900 text-white relative overflow-hidden">
      {/* Decorative background glow and texture */}
      <div className="absolute inset-0 opacity-10 bg-jaali-subtle pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-saffron-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text & CTAs */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/20 border border-saffron-400/30 text-saffron-300 text-xs font-semibold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              <span>
                {language === "hi" ? "शुभ उत्सव • विशेष उपहार संग्रह" : "Shubh Utsav • Festive Curation"}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-50 leading-tight">
              {language === "hi"
                ? "त्योहारों में लाएं परंपरा और प्रकाश की पवित्रता"
                : "Illuminate Your Celebrations with Living Heritage"}
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
              {language === "hi"
                ? "शुद्ध पीतल के मयूर दीये, सुगंधित प्राकृतिक मोमबत्तियां, हाथ से तराशे गए शीशम के संदूक और जयपुर ब्लू पॉटरी टी-सेट्स। शादियों और त्योहारों पर अपनों को दें ऐसा उपहार जो पीढ़ियों तक याद रहे।"
                : "Curated heirloom brass oil lamps, handmade rosewood keepsake chests, Jaipur blue pottery tea sets, and hand-poured essential oil soy candles. Meaningful gifting that honours both the artisan and the receiver."}
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ivory-200 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>Reusable hand-carved pine keepsake boxes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>Custom corporate logo engraving available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>Handwritten seed-paper calligraphy notes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>Tiered bulk pricing starting at 25 boxes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/shop?category=gift-hampers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-saffron-500 hover:bg-saffron-400 text-charcoal-900 font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
              >
                <span>
                  {language === "hi" ? "उपहार संग्रह देखें" : "Explore Festive Hampers"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Namaste! I would like to inquire about your festive gift hampers and corporate customization options."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wide border border-white/20 transition-all"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Image Showcase with Depth Stacking */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] sm:aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1200&q=85"
                alt="Festive brass diyas and artisanal gift hampers"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-charcoal-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-ivory-100">
                    Shubh Utsav Heritage Brass Hamper
                  </h4>
                  <span className="text-xs text-saffron-300 font-mono">Special Festive Price: ₹2,990</span>
                </div>
                <Link
                  href="/product/shubh-utsav-heritage-brass-candle-hamper"
                  className="px-3.5 py-1.5 bg-terracotta hover:bg-terracotta-600 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Accent badge floating card */}
            <div className="hidden sm:block absolute -top-6 -left-6 z-20 p-3.5 rounded-2xl bg-white text-charcoal-900 shadow-float border border-sand-300 max-w-[200px]">
              <div className="flex items-center gap-2 text-xs font-bold text-forest">
                <Sparkles className="w-4 h-4 text-saffron-500" />
                <span>Handcrafted with Care</span>
              </div>
              <p className="text-[11px] text-charcoal-600 mt-1">
                Zero synthetic fragrance or plastic wrapping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
