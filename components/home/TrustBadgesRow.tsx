"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Users,
  Leaf,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export const TrustBadgesRow: React.FC = () => {
  const { language } = useLanguage();

  const badges = [
    {
      icon: Sparkles,
      title: "100% Handmade",
      hindiTitle: "100% हस्तनिर्मित",
      desc: "Zero machine shortcuts",
      hindiDesc: "मशीन रहित शुद्ध हस्तशिल्प",
    },
    {
      icon: Users,
      title: "Fair-Trade Artisans",
      hindiTitle: "सीधे कारीगरों से",
      desc: "450+ rural families supported",
      hindiDesc: "450+ परिवारों की आजीविका",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      hindiTitle: "पर्यावरण अनुकूल",
      desc: "Natural clays, woods & brass",
      hindiDesc: "शुद्ध मिट्टी, लकड़ी और पीतल",
    },
    {
      icon: Truck,
      title: "5-Layer Safe Delivery",
      hindiTitle: "सुरक्षित डिलीवरी",
      desc: "100% damage replacement",
      hindiDesc: "टूटना-फूटना पूर्णतः सुरक्षित",
    },
    {
      icon: RotateCcw,
      title: "Easy 7-Day Returns",
      hindiTitle: "7-दिवसीय सरल वापसी",
      desc: "Hassle-free doorstep pickup",
      hindiDesc: "संतुष्टि न होने पर आसान वापसी",
    },
    {
      icon: ShieldCheck,
      title: "GI-Tagged Authenticity",
      hindiTitle: "जीआई-प्रमाणित धरोहर",
      desc: "Verified geographic origins",
      hindiDesc: "मूल सांस्कृतिक केंद्र से प्रमाणित",
    },
  ];

  return (
    <section className="bg-sand-100/70 border-b border-sand-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {badges.map((b, index) => {
          const Icon = b.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-white/80 border border-sand-200/90 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-terracotta/10 group-hover:bg-terracotta text-terracotta group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-charcoal-900 group-hover:text-terracotta transition-colors">
                {language === "hi" ? b.hindiTitle : b.title}
              </h4>
              <p className="text-[11px] text-charcoal-500 mt-0.5">
                {language === "hi" ? b.hindiDesc : b.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
