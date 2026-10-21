"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Phone, MessageCircle } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandConfig.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  if (pathname === "/") {
    return null;
  }

  const announcement = brandConfig.announcements[currentSlide];

  return (
    <div className="bg-forest-900 text-ivory-100 text-xs py-2 px-4 border-b border-forest-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Quick Contact */}
        <div className="hidden md:flex items-center gap-4 text-ivory-300">
          <a
            href={`tel:${brandConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-saffron-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-saffron-400" />
            <span>{brandConfig.displayPhone}</span>
          </a>
          <span className="text-forest-700">|</span>
          <a
            href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
              "Namaste! I would like to inquire about your handcrafted collections."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-saffron-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Support</span>
          </a>
        </div>

        {/* Center: Rotating Announcement */}
        <div className="flex items-center justify-center gap-2 font-medium tracking-wide text-center">
          <Sparkles className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0 animate-pulse" />
          <span className="transition-opacity duration-500">
            {language === "hi" ? announcement.hi : announcement.en}
          </span>
        </div>

        {/* Right: Language Switcher */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-200 border border-forest-600 text-xs font-medium transition-all"
            title="Switch Language / भाषा बदलें"
          >
            <span className={language === "en" ? "font-bold text-saffron-300" : "text-ivory-400"}>
              EN
            </span>
            <span className="text-forest-500">/</span>
            <span className={language === "hi" ? "font-bold text-saffron-300" : "text-ivory-400"}>
              हिंदी
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
