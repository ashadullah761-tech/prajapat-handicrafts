"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  HeartHandshake,
  Sparkles,
  PackageCheck,
  Leaf,
  MessageCircle,
  Award,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();

  const reasons = [
    {
      icon: HeartHandshake,
      title: "Direct Fair-Trade Patronage",
      hindiTitle: "सीधे कारीगरों का समर्थन",
      description:
        "By cutting out exploitative middlemen and traders, up to 70% of every rupee reaches our 450+ rural artisan families directly.",
      hindiDescription:
        "बिचौलियों को हटाकर हमारे कारीगरों को उनकी मेहनत का पूरा और सम्मानजनक मूल्य सीधे उनके बैंक खातों में दिया जाता है।",
    },
    {
      icon: Sparkles,
      title: "Living Endangered Heritage",
      hindiTitle: "प्राचीन विधाओं का संरक्षण",
      description:
        "We actively support vanishing craft traditions like 4000-year-old lost-wax Dhokra, mud-resist Dabu, and wood-ash high fired ceramics.",
      hindiDescription:
        "सिंधु घाटी सभ्यता की ढोकरा ढलाई, बगरू की दाबू छपाई और जयपुर की ब्लू पॉटरी जैसी दुर्लभ कलाओं को संरक्षित करना हमारा उद्देश्य है।",
    },
    {
      icon: PackageCheck,
      title: "5-Layer Shockproof Packaging",
      hindiTitle: "5-परत सुरक्षित पैकेजिंग",
      description:
        "Pottery and brass require gentle love. Our honey-comb paper, thermo-guards, and 7-ply cartons ensure less than 0.2% transit damage.",
      hindiDescription:
        "मिट्टी और कांच के नाजुक सामान को सुरक्षित रखने के लिए हम विशेष शॉकप्रूफ पैकिंग करते हैं। यदि रास्ते में टूट-फूट हो, तो तत्काल नया उत्पाद भेजा जाता है।",
    },
    {
      icon: Leaf,
      title: "100% Natural & Sustainable",
      hindiTitle: "पर्यावरण के अनुकूल सामग्री",
      description:
        "Zero synthetic chemicals, plastics, or machine dyes. We celebrate sun-dried clay, seasoned sheesham, pure brass, and vegetable indigo.",
      hindiDescription:
        "सिंथेटिक रसायनों और प्लास्टिक से मुक्त। शुद्ध नदी की मिट्टी, प्राकृतिक वनस्पति नील और भारतीय शीशम की लकड़ी का उपयोग।",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp First Concierge",
      hindiTitle: "व्हाट्सएप पर सीधी सहायता",
      description:
        "Get live video previews of actual artisanal lots, personalized gift notes, and real-time tracking updates directly on WhatsApp.",
      hindiDescription:
        "खरीदने से पहले वास्तविक सामान की फोटो या वीडियो देखना चाहें या उपहार में विशेष संदेश लिखवाना चाहें, सब व्हाट्सएप पर उपलब्ध है।",
    },
    {
      icon: Award,
      title: "Verified GI-Tagged Authenticity",
      hindiTitle: "प्रमाणित जीआई-टैग शुद्धता",
      description:
        "Each craft arrives with our official certificate of origin, guaranteeing it was created in its registered historic geography.",
      hindiDescription:
        "प्रत्येक उत्पाद के साथ प्रामाणिकता प्रमाण पत्र संलग्न होता है, जो यह सुनिश्चित करता है कि यह असली भौगोलिक केंद्र से बना है।",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-sand-100/60 border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === "hi" ? "हमारा संकल्प" : "The Gehlot Export Standard"}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
            {t("whyChooseTitle")}
          </h2>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            {t("whyChooseSub")}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200 shadow-card hover:shadow-artisan hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-terracotta-50 text-terracotta flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">
                    {language === "hi" ? r.hindiTitle : r.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {language === "hi" ? r.hindiDescription : r.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-sand-100 text-[11px] font-mono text-terracotta-700 font-semibold">
                  0{i + 1} • AUTHENTIC STANDARD
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
