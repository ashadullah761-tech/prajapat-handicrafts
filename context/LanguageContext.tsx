"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { WORLD_LANGUAGES, WorldLanguage } from "@/data/languages";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  currentLangCode: string;
  currentLangName: string;
  currentNativeName: string;
  setWorldLanguage: (code: string) => void;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    home: "Home",
    shop: "Shop",
    categories: "Categories",
    gallery: "Gallery",
    ourStory: "Our Story",
    blog: "Journal",
    faq: "FAQ",
    contact: "Contact",
    trackOrder: "Track Order",
    wishlist: "Wishlist",
    cart: "Cart",
    search: "Search handicrafts...",

    // CTAs & Buttons
    shopNow: "Shop Handcrafted",
    chatWhatsapp: "Chat on WhatsApp",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    orderOnWhatsApp: "Order on WhatsApp",
    viewAll: "View All",
    exploreCollection: "Explore Collection",
    quickView: "Quick View",
    applyCoupon: "Apply",
    checkout: "Proceed to Checkout",
    continueShopping: "Continue Shopping",
    inStock: "In Stock",
    outOfStock: "Made to Order",
    bestseller: "Bestseller",
    newArrival: "New Arrival",

    // Headings
    featuredCategories: "Shop by Craft Tradition",
    featuredSub: "Each piece carries the legacy of centuries-old artisanal knowledge",
    bestSellersTitle: "Curated Masterpieces",
    bestSellersSub: "Treasures most loved by homes across India and worldwide",
    newArrivalsTitle: "Fresh from the Artisan Kilns",
    newArrivalsSub: "Recent additions straight from the workshops of Rajasthan",
    whyChooseTitle: "Why Choose Kalakriti",
    whyChooseSub: "Reclaiming the dignity, authenticity, and spirit of Indian craft",
    meetArtisansTitle: "Meet the Custodians of Craft",
    meetArtisansSub: "The master hands and humble hearts behind every creation",
    reviewsTitle: "Loved in Over 14,000 Homes",
    reviewsSub: "Read real stories from our patron community",
    galleryTitle: "Visual Symphony of Craft",
    gallerySub: "Glimpses of raw clay, glowing metal, and vibrant looms",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Everything you need to know about our craft, orders, and delivery",

    // Cart & Checkout
    cartTitle: "Your Handcrafted Basket",
    cartEmpty: "Your basket is empty",
    cartEmptySub: "Explore our master collections to bring home authentic handicrafts.",
    orderSummary: "Order Summary",
    subtotal: "Subtotal",
    discount: "Discount",
    shipping: "Estimated Shipping",
    free: "FREE",
    total: "Total Amount",
    couponCode: "Enter coupon code (e.g. HANDMADE10)",
    freeShippingNotice: "Add items worth ₹{amount} more for FREE Delivery!",
    freeShippingUnlocked: "🎉 You have unlocked FREE Pan-India Delivery!",

    // Trust
    handmade: "100% Handmade",
    fairTrade: "Fair-Trade Artisans",
    safeDelivery: "Damage-Free Delivery",
    authenticGI: "GI-Tagged Authenticity",
  },
  hi: {
    // Nav
    home: "होम",
    shop: "दुकान",
    categories: "शिल्प श्रेणियां",
    gallery: "कला दीर्घा",
    ourStory: "हमारी कहानी",
    blog: "पत्रिका",
    faq: "सवाल-जवाब",
    contact: "संपर्क करें",
    trackOrder: "ऑर्डर ट्रैक करें",
    wishlist: "पसंदीदा सूची",
    cart: "टोकरी",
    search: "हस्तशिल्प खोजें...",

    // CTAs & Buttons
    shopNow: "हस्तशिल्प खरीदें",
    chatWhatsapp: "व्हाट्सएप पर बात करें",
    addToCart: "टोकरी में डालें",
    buyNow: "अभी खरीदें",
    orderOnWhatsApp: "व्हाट्सएप पर ऑर्डर करें",
    viewAll: "सभी देखें",
    exploreCollection: "संग्रह देखें",
    quickView: "झलक देखें",
    applyCoupon: "लागू करें",
    checkout: "चेकआउट करें",
    continueShopping: "खरीदारी जारी रखें",
    inStock: "उपलब्ध है",
    outOfStock: "ऑर्डर पर निर्मित",
    bestseller: "सर्वाधिक लोकप्रिय",
    newArrival: "नया आगमन",

    // Headings
    featuredCategories: "पारंपरिक शिल्प श्रेणियां",
    featuredSub: "प्रत्येक कृति सदियों पुरानी पारंपरिक कला ज्ञान को संजोए हुए है",
    bestSellersTitle: "लोकप्रिय उत्कृष्ट कृतियां",
    bestSellersSub: "पूरे भारत और विश्व भर के घरों द्वारा सबसे अधिक पसंद की गई वस्तुएं",
    newArrivalsTitle: "कारीगरों के चाक से ताजा",
    newArrivalsSub: "राजस्थान और भारत के कार्यशालाओं से सीधे नए आगमन",
    whyChooseTitle: "कलाकृति ही क्यों चुनें?",
    whyChooseSub: "भारतीय हस्तशिल्प की प्रामाणिकता और सम्मान की रक्षा",
    meetArtisansTitle: "कला के सच्चे संरक्षकों से मिलें",
    meetArtisansSub: "हर रचना के पीछे समर्पित हाथ और ग्रामीण कहानियां",
    reviewsTitle: "14,000 से अधिक घरों का विश्वास",
    reviewsSub: "हमारे संतुष्ट ग्राहकों के वास्तविक अनुभव पढ़ें",
    galleryTitle: "शिल्प की जीवंत झलकियां",
    gallerySub: "कच्ची मिट्टी, चमकती धातु और करघे की सुंदर यात्रा",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqSub: "शिल्प, डिलीवरी और ऑर्डर से संबंधित सभी प्रश्नों के उत्तर",

    // Cart & Checkout
    cartTitle: "आपकी खरीदारी टोकरी",
    cartEmpty: "आपकी टोकरी खाली है",
    cartEmptySub: "प्रामाणिक हस्तशिल्प घर लाने के लिए हमारे संग्रह देखें।",
    orderSummary: "ऑर्डर सारांश",
    subtotal: "उप-योग",
    discount: "छूट",
    shipping: "शिपिंग शुल्क",
    free: "मुफ्त",
    total: "कुल राशि",
    couponCode: "कूपन कोड दर्ज करें (उदा. HANDMADE10)",
    freeShippingNotice: "मुफ्त डिलीवरी के लिए ₹{amount} का सामान और जोड़ें!",
    freeShippingUnlocked: "🎉 आपको पूरे भारत में मुफ्त डिलीवरी प्राप्त हो गई है!",

    // Trust
    handmade: "100% हस्तनिर्मित",
    fairTrade: "सीधे कारीगरों से",
    safeDelivery: "सुरक्षित डिलीवरी",
    authenticGI: "जीआई-प्रमाणित शुद्धता",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("hi");
  const [currentLangCode, setCurrentLangCode] = useState<string>("hi");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("kalakriti_lang");
      if (savedLang) {
        setCurrentLangCode(savedLang);
        if (savedLang === "hi") {
          setLanguageState("hi");
        } else {
          setLanguageState("en");
        }
      } else {
        // Check for Google Translate cookie if present
        const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
        if (match && match[1]) {
          setCurrentLangCode(match[1]);
          if (match[1] === "hi") setLanguageState("hi");
          else setLanguageState("en");
        }
      }
    } catch {
      // localStorage may not be accessible
    }
  }, []);

  const setWorldLanguage = (code: string) => {
    setCurrentLangCode(code);
    if (code === "hi") {
      setLanguageState("hi");
    } else {
      setLanguageState("en");
    }

    try {
      localStorage.setItem("kalakriti_lang", code);
    } catch {
      // ignore
    }

    try {
      const hostname = window.location.hostname;
      if (code === "en") {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/;`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`;
      } else {
        document.cookie = `googtrans=/en/${code}; path=/;`;
        document.cookie = `googtrans=/en/${code}; domain=${hostname}; path=/;`;
      }

      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event("change"));
      } else if (code !== "hi" && code !== "en") {
        // If google translate combo hasn't loaded yet, reload so the cookie triggers it
        window.location.reload();
      }
    } catch {
      // ignore
    }
  };

  const setLanguage = (lang: Language) => {
    setWorldLanguage(lang);
  };

  const toggleLanguage = () => {
    setWorldLanguage(currentLangCode === "hi" ? "en" : "hi");
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  const currentLangObj =
    WORLD_LANGUAGES.find((l) => l.code.toLowerCase() === currentLangCode.toLowerCase()) ||
    WORLD_LANGUAGES.find((l) => l.code === "hi") ||
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        currentLangCode,
        currentLangName: currentLangObj.name,
        currentNativeName: currentLangObj.nativeName,
        setWorldLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
