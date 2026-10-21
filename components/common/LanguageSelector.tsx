"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Globe, ChevronDown, Search, Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { WORLD_LANGUAGES, WorldLanguage } from "@/data/languages";

interface LanguageSelectorProps {
  className?: string;
  buttonClassName?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = "",
  buttonClassName = "",
}) => {
  const { currentLangCode, currentNativeName, currentLangName, setWorldLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) {
      return WORLD_LANGUAGES;
    }
    const q = searchQuery.toLowerCase().trim();
    return WORLD_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const popularLanguages = useMemo(() => {
    return WORLD_LANGUAGES.filter((lang) => lang.popular);
  }, []);

  const handleSelect = (code: string) => {
    setWorldLanguage(code);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button - Matching exact pill design */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={
          buttonClassName ||
          "inline-flex items-center gap-2 bg-[#f4f2e6]/95 hover:bg-[#f4f2e6] backdrop-blur-md text-[#37472a] px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border border-[#37472a]/30 text-xs md:text-sm font-semibold transition-all shadow-sm cursor-pointer select-none"
        }
        title="Choose language / भाषा चुनें"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#7A6327] shrink-0" />
        <span className="truncate max-w-[100px] md:max-w-[130px]">{currentNativeName}</span>
        <ChevronDown
          className={`w-3 h-3 md:w-3.5 md:h-3.5 text-[#7A6327] transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[310px] sm:w-[360px] md:w-[400px] max-h-[85vh] sm:max-h-[500px] bg-[#fbf9f1] border border-[#37472a]/20 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col animate-slide-up text-[#37472a]">
          {/* Header & Search */}
          <div className="p-3 sm:p-4 border-b border-[#37472a]/15 bg-[#f4f2e6]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#7A6327] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Select Language / भाषा चुनें
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#37472a]/60 hover:text-[#37472a] hover:bg-[#37472a]/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#37472a]/50" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 130+ languages (e.g. Hindi, French, Spanish)..."
                className="w-full pl-9 pr-8 py-2 bg-white/90 border border-[#37472a]/20 rounded-xl text-xs sm:text-sm text-[#37472a] placeholder-[#37472a]/50 focus:outline-none focus:ring-2 focus:ring-[#7A6327]/40 focus:border-[#7A6327]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#37472a]/50 hover:text-[#37472a]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Popular Languages Quick Bar */}
            {!searchQuery && (
              <div className="mt-3">
                <p className="text-[10px] font-bold text-[#7A6327] uppercase tracking-wider mb-1.5">
                  Popular Languages / प्रमुख भाषाएं:
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {popularLanguages.slice(0, 10).map((lang) => {
                    const isSelected = currentLangCode.toLowerCase() === lang.code.toLowerCase();
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelect(lang.code)}
                        className={`text-xs px-2.5 py-1 rounded-full transition-all font-medium ${
                          isSelected
                            ? "bg-[#37472a] text-[#f4f2e6] font-bold shadow-sm"
                            : "bg-white/80 hover:bg-[#e8e4d3] text-[#37472a] border border-[#37472a]/15"
                        }`}
                      >
                        {lang.nativeName}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Languages List */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#37472a]/10 max-h-[320px]">
            {filteredLanguages.length === 0 ? (
              <div className="p-6 text-center text-xs sm:text-sm text-[#37472a]/60">
                No matching languages found for &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredLanguages.map((lang) => {
                const isSelected = currentLangCode.toLowerCase() === lang.code.toLowerCase();
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-xs sm:text-sm transition-colors ${
                      isSelected
                        ? "bg-[#37472a]/10 font-bold text-[#37472a]"
                        : "hover:bg-[#eae6d4]/60 text-[#37472a]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold">{lang.nativeName}</span>
                      <span className="text-[11px] sm:text-xs text-[#37472a]/60 font-normal">
                        ({lang.name})
                      </span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#7A6327] shrink-0 stroke-[2.5]" />
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div className="p-2.5 px-4 bg-[#f4f2e6] border-t border-[#37472a]/15 text-[11px] text-[#37472a]/70 flex items-center justify-between">
            <span>🌍 130+ World Languages Supported</span>
            <span className="text-[10px] text-[#7A6327] font-semibold">Prajapat Global</span>
          </div>
        </div>
      )}
    </div>
  );
};
