"use client";

import React, { useState } from "react";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { X, Send, Sparkles } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  const defaultGreeting =
    language === "hi"
      ? "नमस्ते! मुझे आपके हस्तशिल्प संग्रह के बारे में जानकारी चाहिए।"
      : "Namaste! I would like to inquire about your handcrafted collections and custom orders.";

  const handleSend = () => {
    const textToSend = messageText.trim() || defaultGreeting;
    const url = `https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
      textToSend
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Chat Popup Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-float border border-sand-300 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-forest-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shadow overflow-hidden">
                  <img
                    src="/logo.png"
                    alt={brandConfig.name}
                    className="w-full h-full object-contain"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-forest-900" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Artisan Concierge</h4>
                <p className="text-[11px] text-ivory-300">Typically replies in 5 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-ivory-300 hover:text-white p-1 rounded-lg"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-ivory-100/70 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-sand-200 text-charcoal-800 space-y-1">
              <p className="font-semibold text-terracotta flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {language === "hi" ? `नमस्ते! ${brandConfig.hindiName} में स्वागत है।` : `Namaste! Welcome to ${brandConfig.name}.`}
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                {language === "hi"
                  ? "क्या आप किसी खास हस्तशिल्प, थोक ऑर्डर या शादी के उपहार के बारे में पूछना चाहते हैं? हम सीधे आपकी सहायता करेंगे।"
                  : "How can our master craftsmen assist you today? Ask us about custom sizing, festive bulk hampers, or direct photos."}
              </p>
            </div>

            {/* Quick Prompt Pills */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] uppercase font-bold text-charcoal-400 tracking-wider">
                Quick Inquiries:
              </p>
              <div className="flex flex-col gap-1.5">
                {[
                  "Need help choosing a festive gift hamper 🎁",
                  "Inquire about custom dimensions & bulk order 📦",
                  "Check delivery time to my city 🚚",
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setMessageText(prompt);
                    }}
                    className="text-left px-2.5 py-1.5 bg-white hover:bg-terracotta-50 hover:text-terracotta rounded-xl border border-sand-200 text-[11px] text-charcoal-700 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input & Send */}
            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-forest"
                />
                <button
                  onClick={handleSend}
                  className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition-colors"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-float transition-all transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Continuous pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.201-.577-.351z" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.05-1.32C8.5 21.53 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.14-.46-4.44-1.26l-.32-.19-3.29.86.88-3.21-.21-.33C3.77 14.54 3.3 13.31 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" />
        </svg>

        {/* Floating Tooltip (desktop) */}
        {!isOpen && (
          <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-charcoal-900 text-white text-xs font-medium whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp 💬
          </span>
        )}
      </button>
    </div>
  );
};
