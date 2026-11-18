"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandConfig } from "@/config/brand";
import { LanguageSelector } from "@/components/common/LanguageSelector";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for sticky header shadow and backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/") {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full max-w-full overflow-hidden transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#37472a]/10"
          : "bg-[#fdfcf7] border-b border-[#37472a]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f4f2e6] border border-[#b39b5b]/50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden p-0.5 shrink-0">
              <img
                src="/logo.png"
                alt={`${brandConfig.name} Logo`}
                className="w-full h-full object-contain"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm xs:text-base sm:text-xl font-bold tracking-wide sm:tracking-wider text-[#37472a] group-hover:text-[#7A6327] transition-colors leading-none truncate">
                {brandConfig.name.toUpperCase()}
              </span>
              <span className="hidden xs:block text-[9px] sm:text-[10px] font-sans tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#7A6327] font-semibold mt-0.5 sm:mt-1 truncate">
                HANDICRAFTS & EXPORT • {brandConfig.city.toUpperCase()}
              </span>
            </div>
          </Link>

          {/* Right Header Actions: Language Selector & WhatsApp */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <LanguageSelector buttonClassName="inline-flex items-center gap-1 sm:gap-2 bg-[#f4f2e6]/95 hover:bg-[#f4f2e6] text-[#37472a] px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-[#37472a]/30 text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer select-none" />

            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                `Namaste ${brandConfig.name}! I would like to inquire about your handcrafted collections.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer shrink-0"
              title="Chat on WhatsApp"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
