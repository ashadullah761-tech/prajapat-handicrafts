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
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#37472a]/10"
          : "bg-[#fdfcf7] border-b border-[#37472a]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#f4f2e6] border border-[#b39b5b]/50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden p-0.5">
              <img
                src="/logo.png"
                alt={`${brandConfig.name} Logo`}
                className="w-full h-full object-contain"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#37472a] group-hover:text-[#7A6327] transition-colors leading-none">
                {brandConfig.name.toUpperCase()}
              </span>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#7A6327] font-semibold mt-1">
                HANDICRAFTS & EXPORT • {brandConfig.city.toUpperCase()}
              </span>
            </div>
          </Link>

          {/* Right Header Actions: Language Selector & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />

            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
                `Namaste ${brandConfig.name}! I would like to inquire about your handcrafted collections.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
