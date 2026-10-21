"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import {
  Globe,
  Sparkles,
  Phone,
  MessageCircle,
  X,
  Play,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  Leaf,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";

// 6 Best Handicraft & Furniture Products (User Provided Photos)
const featuredProducts = [
  {
    id: "handcrafted-oak-recliner-armchair",
    name: "HANDCRAFTED OAK WOOD RECLINER ARMCHAIR",
    hindiName: "सॉलिड ओक वुड रिक्लाइनर आर्मचेयर",
    image: "/products/product-1.jpg",
    desc: "Solid oak wood with ergonomic lumbar support & natural finish.",
    hindiDesc: "प्राकृतिक काष्ठ फिनिश के साथ एर्गोनॉमिक रिक्लाइनर आर्मचेयर।",
    price: 4850,
    priceDisplay: "₹4,850",
    slug: "handcrafted-oak-recliner-armchair",
    tag: "Wooden Chair",
  },
  {
    id: "matte-black-ash-dining-chair",
    name: "MINIMALIST MATTE BLACK ASH DINING CHAIR",
    hindiName: "मैट ब्लैक ऐश वुड डाइनिंग चेयर",
    image: "/products/product-2.jpg",
    desc: "Contemporary Nordic silhouette in kiln-dried black hardwood.",
    hindiDesc: "मजबूत दृढ़ काष्ठ से निर्मित आधुनिक ब्लैक डाइनिंग चेयर।",
    price: 3450,
    priceDisplay: "₹3,450",
    slug: "matte-black-ash-dining-chair",
    tag: "Dining Chair",
  },
  {
    id: "natural-cane-round-lounge-chair",
    name: "HANDWOVEN NATURAL CANE ROUND LOUNGE CHAIR",
    hindiName: "प्राकृतिक बेंत और बांस की गोल लाउंज चेयर",
    image: "/products/product-3.jpg",
    desc: "Hand-braided sustainable rattan with reinforced bamboo frame.",
    hindiDesc: "कारीगरों द्वारा हस्तनिर्मित पर्यावरण-अनुकूल बेंत की कुर्सी।",
    price: 4200,
    priceDisplay: "₹4,200",
    slug: "natural-cane-round-lounge-chair",
    tag: "Cane & Rattan",
  },
  {
    id: "contemporary-6-seater-dining-set",
    name: "CONTEMPORARY 6-SEATER DINING TABLE SET",
    hindiName: "कंटेंपररी 6-सीटर डाइनिंग टेबल सेट",
    image: "/products/product-4.jpg",
    desc: "Modern marble-top dining table with 6 upholstered comfort chairs.",
    hindiDesc: "आधुनिक पत्थर की टॉप और 6 प्रीमियम कुर्सियों का डाइनिंग सेट।",
    price: 28500,
    priceDisplay: "₹28,500",
    slug: "contemporary-6-seater-dining-set",
    tag: "Dining Set",
  },
  {
    id: "fluted-oak-wood-credenza-sideboard",
    name: "FLUTED OAK WOOD LIVING ROOM SIDEBOARD",
    hindiName: "फ्लूटेड ओक वुड लिविंग रूम साइडबोर्ड",
    image: "/products/product-5.jpg",
    desc: "Tambour fluted solid wood sliding doors with stone marble surface.",
    hindiDesc: "फ्लूटेड नक्काशीदार लकड़ी और मार्बल टॉप के साथ आधुनिक साइडबोर्ड।",
    price: 16400,
    priceDisplay: "₹16,400",
    slug: "fluted-oak-wood-credenza-sideboard",
    tag: "Sideboard",
  },
  {
    id: "japandi-minimalist-solid-teak-dining-set",
    name: "JAPANDI MINIMALIST SOLID TEAK DINING SET",
    hindiName: "जपांडी सॉलिड टीकवुड डाइनिंग टेबल सेट",
    image: "/products/product-6.jpg",
    desc: "Organic live-edge teakwood table with handcrafted matching chairs.",
    hindiDesc: "शुद्ध सागवान की लकड़ी से निर्मित प्राकृतिक डाइनिंग टेबल सेट।",
    price: 34000,
    priceDisplay: "₹34,000",
    slug: "japandi-minimalist-solid-teak-dining-set",
    tag: "Bespoke Dining",
  },
];

// 5 Artisan Gallery frames (Flex expanding gallery - User Provided Pinterest Videos)
const galleryItems = [
  {
    id: "gallery-1",
    image: "/gallery/gallery-poster-1.jpg?v=p1new",
    title: "High Ceiling Modern Living & Furniture",
    hindiTitle: "हाई सीलिंग मॉडर्न लिविंग व फ़र्नीचर",
    video: "/gallery/gallery-video-1.mp4?v=p1new",
  },
  {
    id: "gallery-2",
    image: "/gallery/gallery-poster-2.jpg",
    title: "Al Fresco Luxury Outdoor Living",
    hindiTitle: "अल फ्रेस्को लक्ज़री आउटडोर लिविंग",
    video: "/gallery/gallery-video-2.mp4",
  },
  {
    id: "gallery-3",
    image: "/gallery/gallery-poster-1.jpg",
    title: "Calm House Furniture Crafting",
    hindiTitle: "काल्म हाउस फ़र्नीचर क्राफ्टिंग",
    video: "/gallery/gallery-video-1.mp4",
  },
  {
    id: "gallery-4",
    image: "/gallery/gallery-poster-4.jpg",
    title: "Bespoke Workspace & Studio Furniture",
    hindiTitle: "स्टूडियो व वर्कस्पेस वुडन फ़र्नीचर",
    video: "/gallery/gallery-video-4.mp4",
  },
  {
    id: "gallery-5",
    image: "/gallery/gallery-poster-5.jpg",
    title: "The Opal Luxury Furniture Collection",
    hindiTitle: "द ओपल लक्ज़री फ़र्नीचर कलेक्शन",
    video: "/gallery/gallery-video-5.mp4",
  },
];

// FAQs matching Maash Henna 4 Tabs Structure
const faqData = {
  general: [
    {
      q: "Are all your handicraft products 100% authentically handmade in India?",
      a: "Yes. Every single item in our collection is handcrafted by master artisans in Rajasthan, Uttar Pradesh, and craft clusters across India using heritage techniques passed down through generations. We do not sell machine-molded replicas.",
    },
    {
      q: "What handicraft traditions and materials do you specialize in?",
      a: "We specialize in authentic Jaipur Blue Pottery (quartz, fuller's earth & cobalt glaze), Saharanpur Hand-Carved Sheesham Wood, Bastar Lost-Wax Brass Casting (Dhokra), Earthen Terracotta, and Sanganeri/Bagru Natural Dye Hand Block-Printed Handlooms.",
    },
    {
      q: "Where is Prajapat Handicrafts based?",
      a: "Our master artisan studio and gallery is located in the historic Hawa Mahal Heritage Corridor, Badi Chaupar, Jaipur, Rajasthan. We ship across all states in India and globally upon request.",
    },
    {
      q: "Can I place an order directly on WhatsApp?",
      a: "Absolutely! Tap 'Order Now' on any product card or click the floating WhatsApp button. A pre-filled message with the product name and price will open directly in WhatsApp so our studio concierge can confirm your address and payment mode instantly.",
    },
  ],
  pricing: [
    {
      q: "How are your handicraft prices determined?",
      a: "Our pricing directly reflects fair-trade wages paid to the master artisan families, high-grade raw materials (pure brass, aged rosewood, natural dyes), and the hours of hand chisel work or kiln firing required. By connecting you directly with artisans, we eliminate middlemen markups.",
    },
    {
      q: "Do you offer wholesale and bulk pricing for weddings or corporate gifts?",
      a: "Yes! We cater to wedding favors, corporate gifting, hotel decor, and interior designers with customized bulk rates. Message us on WhatsApp with your required quantities and event date for a custom quotation.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit Cards, Cash on Delivery (COD across India), and direct bank transfers for bulk orders.",
    },
  ],
  booking: [
    {
      q: "Can I request custom-made wooden carvings or brass idols?",
      a: "Yes. Our master artisans can handcraft bespoke dimensions, deities, jharokha frames, or family crests. Share your sketch or reference photo with our team on WhatsApp to evaluate feasibility and lead time.",
    },
    {
      q: "Can I visit your Jaipur artisan studio and see the craft work live?",
      a: "Yes, visitors are warmly welcome to experience pottery wheel turning and hand block printing at our Jaipur heritage workshop by prior appointment. Message us on WhatsApp 24 hours prior to your visit.",
    },
    {
      q: "Can you provide personalized gift packaging with customized greeting cards?",
      a: "Yes, we offer festive heritage gift wrapping with handmade paper, dried marigold seals, and handwritten calligraphy cards for weddings and festivals at no extra cost.",
    },
  ],
  delivery: [
    {
      q: "How do you ensure fragile blue pottery and terracotta do not break during transit?",
      a: "We take extreme pride in our multi-layer export-grade packaging: heavy-duty corrugated crates, high-density honeycomb cushioning, bubble wraps, and fragile seals. In the rare event of transit damage, we provide a 100% free immediate replacement.",
    },
    {
      q: "How long does shipping take across India?",
      a: "Orders are dispatched within 24 to 48 hours via premium express couriers (Blue Dart & Delhivery). Metro cities receive delivery in 2–4 business days; other regions take 4–6 business days. Tracking numbers are shared instantly on WhatsApp and SMS.",
    },
    {
      q: "Do you deliver worldwide?",
      a: "Yes, we ship to the USA, UK, UAE, Canada, Europe, and Australia via DHL Express and FedEx. Reach out on WhatsApp with your destination postal code for custom international shipping rates.",
    },
  ],
};

import { products } from "@/data/products";

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();
  const { showToast } = useToast();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaqTab, setActiveFaqTab] = useState<"general" | "pricing" | "booking" | "delivery">("general");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // Close mobile menu on escape or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleOrderWhatsApp = (product: (typeof featuredProducts)[0]) => {
    const text = encodeURIComponent(
      `Hi Prajapat Handicrafts,\nI would like to order "${product.name}" (${product.priceDisplay}).\nPlease share the availability and payment/delivery details.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${text}`, "_blank");
    showToast(`Opening WhatsApp order for ${product.name}`, "info");
  };

  return (
    <div className="bg-[#f4f2e6] text-[#37472a] font-sans min-h-screen selection:bg-[#37472a] selection:text-[#f4f2e6]">
      {/* ========================================================
          1. FULL WIDTH HERO SECTION (Matching Maash Henna)
      ======================================================== */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col bg-cover bg-center md:bg-[center_right] bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 26, 15, 0.22), rgba(20, 26, 15, 0.38)), url('/hero-banner.jpg?v=hd2')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation Overlay (Header) */}
        <header className="relative z-20 flex justify-between items-center px-6 md:px-12 py-5 w-full">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f4f2e6] border border-[#b39b5b]/50 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden p-0.5">
              <img
                src="/logo.png"
                alt="Prajapat Handicrafts Logo"
                className="w-full h-full object-contain"
                width={56}
                height={56}
              />
            </div>
            <div className="text-left">
              <span className="block font-serif text-xl md:text-2xl font-bold tracking-wider text-[#f4f2e6] drop-shadow-md">
                PRAJAPAT
              </span>
              <span className="block text-[10px] md:text-xs font-semibold tracking-[0.25em] text-[#e0cf9b] uppercase">
                HANDICRAFTS • JAIPUR
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold tracking-wider text-[#f4f2e6] uppercase">
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, "hero")}
              className="hover:text-[#b39b5b] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b39b5b] hover:after:w-full after:transition-all cursor-pointer"
            >
              {language === "hi" ? "होम" : "HOME"}
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, "about")}
              className="hover:text-[#b39b5b] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b39b5b] hover:after:w-full after:transition-all cursor-pointer"
            >
              {language === "hi" ? "हमारे बारे में" : "ABOUT"}
            </a>
            <a
              href="#products"
              onClick={(e) => handleScrollTo(e, "products")}
              className="hover:text-[#b39b5b] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b39b5b] hover:after:w-full after:transition-all cursor-pointer"
            >
              {language === "hi" ? "उत्पाद" : "PRODUCTS"}
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleScrollTo(e, "gallery")}
              className="hover:text-[#b39b5b] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b39b5b] hover:after:w-full after:transition-all cursor-pointer"
            >
              {language === "hi" ? "शिल्प दीर्घा" : "CRAFT GALLERY"}
            </a>
            <a
              href="#story"
              onClick={(e) => handleScrollTo(e, "story")}
              className="hover:text-[#b39b5b] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b39b5b] hover:after:w-full after:transition-all cursor-pointer"
            >
              {language === "hi" ? "हमारी कहानी" : "OUR STORY"}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="hover:text-[#b39b5b] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b39b5b] hover:after:w-full after:transition-all cursor-pointer"
            >
              {language === "hi" ? "संपर्क" : "CONTACT"}
            </a>
            <Link
              href="/shop"
              className="hover:text-[#b39b5b] transition-colors py-1 text-[#e0cf9b] font-bold"
            >
              {language === "hi" ? "सभी उत्पाद →" : "SHOP ALL →"}
            </Link>
          </nav>

          {/* Right Action Icons: Language Toggle & Mobile Hamburger (Cart removed as requested) */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Toggle Pill */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 bg-[#f4f2e6]/90 hover:bg-[#f4f2e6] backdrop-blur-md text-[#37472a] px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border border-[#37472a]/30 text-xs md:text-sm font-semibold transition-all shadow-sm cursor-pointer"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#7A6327]" />
              <span>{language === "hi" ? "English" : "हिन्दी"}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-[#f4f2e6]/90 backdrop-blur-md border border-[#37472a]/30 gap-1.5 z-50 text-[#37472a] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-5 h-0.5 bg-[#37472a] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#37472a] transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#37472a] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </header>

        {/* Mobile Slide-out Menu (Frosted Glass Overlay matching Maash Henna) */}
        <div
          className={`fixed inset-y-0 right-0 w-[280px] bg-[#f4f2e6]/95 backdrop-blur-xl shadow-2xl z-40 transform transition-transform duration-400 ease-in-out flex flex-col justify-center items-center gap-7 lg:hidden border-l border-[#37472a]/20 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="text-center mb-4">
            <span className="font-serif text-2xl font-bold text-[#37472a]">PRAJAPAT</span>
            <span className="block text-[10px] tracking-widest text-[#7A6327] font-semibold">HANDICRAFTS JAIPUR</span>
          </div>

          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="text-sm font-semibold tracking-widest text-[#37472a] hover:text-[#7A6327]"
          >
            {language === "hi" ? "होम" : "HOME"}
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "about")}
            className="text-sm font-semibold tracking-widest text-[#37472a] hover:text-[#7A6327]"
          >
            {language === "hi" ? "हमारे बारे में" : "ABOUT"}
          </a>
          <a
            href="#products"
            onClick={(e) => handleScrollTo(e, "products")}
            className="text-sm font-semibold tracking-widest text-[#37472a] hover:text-[#7A6327]"
          >
            {language === "hi" ? "उत्पाद" : "PRODUCTS"}
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleScrollTo(e, "gallery")}
            className="text-sm font-semibold tracking-widest text-[#37472a] hover:text-[#7A6327]"
          >
            {language === "hi" ? "शिल्प दीर्घा" : "CRAFT GALLERY"}
          </a>
          <a
            href="#story"
            onClick={(e) => handleScrollTo(e, "story")}
            className="text-sm font-semibold tracking-widest text-[#37472a] hover:text-[#7A6327]"
          >
            {language === "hi" ? "हमारी कहानी" : "OUR STORY"}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-sm font-semibold tracking-widest text-[#37472a] hover:text-[#7A6327]"
          >
            {language === "hi" ? "संपर्क" : "CONTACT"}
          </a>
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-widest text-[#37472a] bg-[#e0cf9b] px-6 py-2 rounded-full shadow-sm"
          >
            {language === "hi" ? "सभी उत्पाद देखें →" : "BROWSE SHOP →"}
          </Link>
        </div>

        {/* Hero Content Area with Frosted Glass Box (Matching Maash Henna - Compact) */}
        <div className="flex-1 flex items-center px-6 md:px-12 py-8 md:py-10 z-10">
          <div className="max-w-[450px] bg-[#f4f2e6]/70 backdrop-blur-md p-6 md:p-8 rounded-[20px] shadow-2xl border border-white/40 animate-fade-in">
            {/* Small uppercase tag */}
            <p className="uppercase tracking-[2px] text-[#7A6327] text-[10px] md:text-xs font-bold mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#b39b5b]" />
              {language === "hi" ? "प्रीमियम भारतीय हस्तशिल्प और कला" : "PREMIUM INDIAN HANDICRAFTS & ARTISTRY"}
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-[#37472a] mb-3">
              {language === "hi" ? (
                <>
                  प्राकृतिक सुंदरता
                  <br />
                  <span className="italic font-normal text-[#7A6327]">हर एक बारीकी में।</span>
                </>
              ) : (
                <>
                  NATURAL BEAUTY
                  <br />
                  <span className="italic font-normal text-[#7A6327]">in every detail.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] md:text-sm text-[#37472a]/90 font-medium leading-relaxed mb-5 max-w-[390px]">
              {language === "hi"
                ? "शुद्ध हस्तनिर्मित टेराकोटा, जयपुर ब्लू पॉटरी से लेकर नक्काशीदार काष्ठशिल्प व ढोकरा पीतल तक, प्रजापत हैंडीक्राफ्ट्स हर घर में भारतीय विरासत और अनूठी कला लेकर आता है।"
                : "From pure hand-turned terracotta and royal Jaipur blue pottery to master wood carvings and lost-wax brass, Prajapat Handicrafts brings authentic heritage, natural materials, and timeless artistry into every home."}
            </p>

            {/* 3 Rounded Square Action Cards (WhatsApp, Instagram, Call Us - Compact) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* WhatsApp Button */}
              <a
                href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
                  "Namaste Prajapat Handicrafts! I would like to inquire about your handcrafted collections. Please share more details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#fdfcf7] rounded-xl flex flex-col items-center justify-center p-1 text-center text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#37472a] gap-1 shadow-sm border border-[#b39b5b]/30 hover:-translate-y-0.5 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-white" />
                </div>
                <span>{language === "hi" ? "व्हाट्सएप" : "WHATSAPP"}</span>
              </a>

              {/* Instagram Button */}
              <a
                href={brandConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#fdfcf7] rounded-xl flex flex-col items-center justify-center p-1 text-center text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#37472a] gap-1 shadow-sm border border-[#b39b5b]/30 hover:-translate-y-0.5 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>{language === "hi" ? "इंस्टाग्राम" : "INSTAGRAM"}</span>
              </a>

              {/* Call Us Button */}
              <a
                href={`tel:${brandConfig.phone}`}
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#fdfcf7] rounded-xl flex flex-col items-center justify-center p-1 text-center text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#37472a] gap-1 shadow-sm border border-[#b39b5b]/30 hover:-translate-y-0.5 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-[#37472a] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <span>{language === "hi" ? "कॉल करें" : "CALL US"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Curved Wave Divider (Exact SVG from Maash Henna with Gold Border & Cream Fill) */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-14 md:h-24 block">
            <path d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" fill="none" stroke="#b39b5b" strokeWidth="3" />
            <path d="M0,52 Q360,102 720,52 T1440,52 L1440,100 L0,100 Z" fill="#f4f2e6" />
          </svg>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1200px] w-[90%] mx-auto">
        {/* ========================================================
            2. ABOUT SECTION (Matching Maash Henna Layout)
        ======================================================== */}
        <section id="about" className="py-20 text-center">
          <p className="text-[#b39b5b] text-xs font-bold tracking-[2.5px] uppercase mb-4">
            {language === "hi" ? "हमारे बारे में" : "ABOUT US"}
          </p>

          {/* Centered Brand Emblem Logo */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-[#b39b5b] flex items-center justify-center bg-[#fdfcf7] shadow-md mb-3 overflow-hidden p-1">
              <img
                src="/logo.png"
                alt="Prajapat Handicrafts Logo"
                className="w-full h-full object-contain"
                width={80}
                height={80}
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#37472a]">
              PRAJAPAT HANDICRAFTS
            </h3>
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#7A6327] uppercase">
              JAIPUR • RAJASTHAN
            </span>
          </div>

          {/* About Description Paragraphs */}
          <div className="max-w-[820px] mx-auto text-[#6e7663] text-sm md:text-base leading-relaxed space-y-3 mb-14">
            <p>
              Prajapat Handicrafts is a heritage Indian artisan guild rooted in Jaipur, Rajasthan, offering authentic
              handcrafted home decor, blue pottery, wooden carvings, and sacred brass sculptures.
            </p>
            <p>
              We craft enduring cultural heirlooms with carefully selected natural materials while keeping India's
              centuries-old artisan lineages alive and thriving.
            </p>
            <p>
              From royal Jaipur blue pottery and hand-carved sheesham wood to Bastar brass and handloom textiles, our
              master artisans bring rare handmade charm to your sanctuary.
            </p>
            <p className="font-medium text-[#37472a]">
              With passion, heritage, and fair-trade ethics at heart, Prajapat Handicrafts is your trusted destination
              for authentic Indian handicraft experiences.
            </p>
          </div>

          {/* 6 Features Grid (100% Handcrafted, Natural Materials, etc.) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pt-4 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fdfcf7] border border-[#b39b5b]/30 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-[#7A6327]" />
              </div>
              <p className="text-xs font-bold uppercase text-[#37472a] leading-tight">
                100%<br />Handcrafted
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fdfcf7] border border-[#b39b5b]/30 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-[#7A6327]" />
              </div>
              <p className="text-xs font-bold uppercase text-[#37472a] leading-tight">
                Pure Natural<br />Materials
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fdfcf7] border border-[#b39b5b]/30 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-[#7A6327]" />
              </div>
              <p className="text-xs font-bold uppercase text-[#37472a] leading-tight">
                Master<br />Artisans
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fdfcf7] border border-[#b39b5b]/30 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-[#7A6327]" />
              </div>
              <p className="text-xs font-bold uppercase text-[#37472a] leading-tight">
                Fair Trade<br />Certified
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fdfcf7] border border-[#b39b5b]/30 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-[#7A6327]" />
              </div>
              <p className="text-xs font-bold uppercase text-[#37472a] leading-tight">
                Damage-Free<br />Transit
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fdfcf7] border border-[#b39b5b]/30 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-[#7A6327]" />
              </div>
              <p className="text-xs font-bold uppercase text-[#37472a] leading-tight">
                Worldwide<br />Delivery
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. PRODUCTS SECTION (3x2 Grid Matching Maash Henna)
        ======================================================== */}
        <section id="products" className="py-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-center font-normal tracking-[2px] text-[#37472a] mb-12">
            {language === "hi" ? "हमारे मुख्य उत्पाद" : "OUR PRODUCTS"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[20px] p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#37472a]/5 flex flex-col group"
              >
                {/* Product Image */}
                <div className="rounded-[15px] overflow-hidden bg-[#f4f2e6] mb-4 h-[260px] relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#fdfcf7]/90 backdrop-blur-sm text-[#7A6327] text-[10px] font-bold px-3 py-1 rounded-full border border-[#b39b5b]/30 uppercase tracking-wider">
                    {product.tag}
                  </span>
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-1 px-1">
                  <h4 className="font-sans font-bold text-base md:text-lg text-[#37472a] mb-1.5 uppercase leading-snug">
                    {language === "hi" ? product.hindiName : product.name}
                  </h4>
                  <p className="text-xs text-[#888] leading-relaxed mb-6 flex-1">
                    {language === "hi" ? product.hindiDesc : product.desc}
                  </p>

                  {/* Product Bottom (Price Pill + Order Now Button) */}
                  <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100">
                    <span className="bg-[#f0f0f0] text-[#37472a] px-4 py-2 rounded-full text-sm font-bold tracking-tight">
                      {product.priceDisplay}
                    </span>

                    <button
                      onClick={() => handleOrderWhatsApp(product)}
                      className="bg-[#37472a] hover:bg-[#25301d] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-transform hover:-translate-y-0.5 shadow-md cursor-pointer"
                      title={language === "hi" ? "व्हाट्सएप पर ऑर्डर करें" : "Order on WhatsApp"}
                    >
                      <span>{language === "hi" ? "ऑर्डर करें" : "Order Now"}</span>
                      <div className="w-5 h-5 rounded-full bg-white text-[#37472a] flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-[#37472a]" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-[#37472a] text-[#37472a] hover:bg-[#37472a] hover:text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-sm"
            >
              <span>{language === "hi" ? "सभी 24+ हस्तशिल्प उत्पाद देखें" : "Explore All 24+ Handicraft Masterpieces"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========================================================
            4. ARTISAN GALLERY (Expanding 8-Frame Flex Gallery)
        ======================================================== */}
        <section id="gallery" className="py-20">
          <div className="text-center mb-10">
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-[#37472a] mb-2 tracking-[2px]">
              {language === "hi" ? "शिल्पकार कला दीर्घा" : "ARTISAN GALLERY"}
            </h2>
            <h4 className="font-sans text-xs md:text-sm font-bold tracking-[2px] text-[#7A6327] uppercase mb-4">
              {language === "hi" ? "प्रामाणिक शिल्प • जीवंत कार्यशालाएँ • उत्कृष्ट कृतियाँ" : "Real Crafts • Living Workshops • Beautiful Results"}
            </h4>
            <p className="text-[#6e7663] text-sm md:text-base max-w-[800px] mx-auto leading-relaxed">
              Browse our gallery featuring premium handcrafted treasures, master wood carvers, pottery wheel spinning,
              brass melting, and fine block-printing. Discover the timeless craftsmanship that makes Prajapat Handicrafts
              cherished across India and worldwide.
            </p>
          </div>

          {/* 5-Frame Flex Gallery (Desktop hover expands from flex:1 to flex:4, Mobile grid) */}
          <div className="flex-gallery">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveVideoModal(item.video)}
                className="flex-item group"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url('${item.image}')`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`Watch ${item.title}`}
              >
                {/* Circled Play Icon */}
                <div className="play-icon">
                  <div className="w-14 h-14 rounded-full bg-[#f4f2e6] border-2 border-[#37472a] flex items-center justify-center shadow-2xl">
                    <Play className="w-5 h-5 text-[#37472a] fill-[#37472a] ml-0.5" />
                  </div>
                </div>

                {/* Bottom title label visible on hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                  {language === "hi" && item.hindiTitle ? item.hindiTitle : item.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. FAQ SECTION (Categorized Tabs & Accordions)
        ======================================================== */}
        <section id="faq" className="py-16 max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-[#37472a] tracking-[2px] mb-3">
              {language === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}
            </h2>
            <p className="text-[#6e7663] text-sm md:text-base leading-relaxed">
              {language === "hi"
                ? "हमारे हस्तशिल्प उत्पादों, कारीगरों, ऑर्डर और डिलीवरी के बारे में सभी जरूरी जानकारियां।"
                : "Everything you need to know about our handcrafted products, master artisans, orders, and deliveries."}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-3 mb-10">
            {[
              { id: "general", label: language === "hi" ? "सामान्य प्रश्न" : "GENERAL" },
              { id: "pricing", label: language === "hi" ? "कीमत व थोक" : "PRICING & BULK" },
              { id: "booking", label: language === "hi" ? "कस्टम ऑर्डर" : "CUSTOM CRAFTS" },
              { id: "delivery", label: language === "hi" ? "डिलीवरी व सुरक्षा" : "DELIVERY & CARE" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFaqTab(tab.id as any);
                  setOpenFaqIndex(0);
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all border ${
                  activeFaqTab === tab.id
                    ? "bg-[#37472a] text-[#f4f2e6] border-[#37472a] shadow-md"
                    : "bg-transparent text-[#37472a] border-[#37472a]/30 hover:border-[#37472a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="divide-y divide-[#37472a]/15">
            {faqData[activeFaqTab].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-2">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 text-left flex justify-between items-center text-sm md:text-base font-bold text-[#37472a] hover:text-[#7A6327] transition-colors"
                  >
                    <span>
                      {index + 1}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A6327] flex-shrink-0 ml-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-4 pr-6 text-xs md:text-sm text-[#6e7663] leading-relaxed animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            6. OUR STORY BANNER (Matching Maash Henna Banner)
        ======================================================== */}
        <section
          id="story"
          className="my-16 rounded-[24px] p-8 md:p-14 text-center text-[#f4f2e6] shadow-xl relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(55, 71, 42, 0.90), rgba(55, 71, 42, 0.90)), url('https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1600&q=85')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl font-normal tracking-[2px] text-[#f4f2e6] mb-4">
            {language === "hi" ? "हमारी कहानी" : "OUR STORY"}
          </h2>
          <p className="text-sm md:text-base text-[#f4f2e6]/95 leading-relaxed max-w-[820px] mx-auto mb-4">
            Rooted in the ancient craft corridors of Jaipur, Rajasthan, Prajapat Handicrafts began with a multigenerational
            dedication to molding clay, carving seasoned rosewood, and casting lost-wax brass into living works of art.
            With over four decades of traditional mastery, our collective (
            <a
              href={brandConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b39b5b] font-bold hover:underline"
            >
              @prajapat_handicrafts
            </a>
            ) directly sustains over 450 rural artisan households.
          </p>
          <p className="text-sm md:text-base text-[#f4f2e6]/90 leading-relaxed max-w-[820px] mx-auto">
            Crafted with pure, ethically sourced natural materials, Prajapat Handicrafts delivers{" "}
            <strong className="text-white">authentic heirlooms, blue pottery, brass statues, and handloom textiles</strong>{" "}
            designed to infuse your home with soulful Indian tradition.
          </p>
        </section>

        {/* ========================================================
            7. MISSION & VISION (Matching Maash Henna 2-Box)
        ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-center">
          {/* Mission Box */}
          <div className="bg-[#fdfcf7] p-8 md:p-10 rounded-[20px] border border-[#b39b5b]/20 shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f4f2e6] border border-[#b39b5b]/40 flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-[#37472a]" />
            </div>
            <h4 className="font-cinzel text-xl font-bold tracking-wider text-[#37472a] mb-3">
              OUR MISSION
            </h4>
            <p className="text-xs md:text-sm text-[#6e7663] leading-relaxed">
              To celebrate and preserve indigenous Indian craft traditions using pure natural materials, delivering
              authentic handmade treasures, fair living wages for rural artisan families, and timeless elegance for every home.
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-[#fdfcf7] p-8 md:p-10 rounded-[20px] border border-[#b39b5b]/20 shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f4f2e6] border border-[#b39b5b]/40 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#37472a]" />
            </div>
            <h4 className="font-cinzel text-xl font-bold tracking-wider text-[#37472a] mb-3">
              OUR VISION
            </h4>
            <p className="text-xs md:text-sm text-[#6e7663] leading-relaxed">
              To establish authentic Indian handicrafts as the world's finest benchmark for sustainable cultural luxury,
              connecting conscious global admirers with the multigenerational masters behind each creation.
            </p>
          </div>
        </section>
      </div>

      {/* ========================================================
          8. FOOTER (Exact Match with Maash Henna Footer)
      ======================================================== */}
      <footer id="contact" className="relative bg-[#37472a] text-[#f4f2e6] pt-20 pb-8 overflow-hidden z-10">
        <div className="max-w-[1200px] w-[90%] mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            {/* Centered Brand Logo */}
            <div className="mb-8">
              <a href="#hero" className="inline-block group">
                <div className="w-20 h-20 rounded-full border-2 border-[#b39b5b] flex items-center justify-center bg-[#f4f2e6] shadow-lg mx-auto mb-3 group-hover:scale-105 transition-transform overflow-hidden p-1">
                  <img
                    src="/logo.png"
                    alt="Prajapat Handicrafts Logo"
                    className="w-full h-full object-contain"
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#f4f2e6]">
                  PRAJAPAT HANDICRAFTS
                </h3>
                <span className="text-[11px] font-semibold tracking-[0.3em] text-[#b39b5b] uppercase">
                  HANDMADE WITH HEART • JAIPUR
                </span>
              </a>
            </div>

            {/* Social Circle Icons (Instagram, Pinterest, YouTube, Facebook, WhatsApp, Email) */}
            <div className="flex flex-wrap justify-center items-center gap-3.5 md:gap-4 mb-10">
              {/* Instagram */}
              <a
                href={brandConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#f4f2e6] text-[#37472a] hover:bg-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href={brandConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#f4f2e6] text-[#37472a] hover:bg-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.367-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={brandConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#f4f2e6] text-[#37472a] hover:bg-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={brandConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#f4f2e6] text-[#37472a] hover:bg-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
                  "Namaste Prajapat Handicrafts! I would like to inquire about your handcrafted collections."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#f4f2e6] text-[#37472a] hover:bg-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${brandConfig.email}`}
                className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#f4f2e6] text-[#37472a] hover:bg-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                aria-label="Email"
              >
                <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            {/* Single Row Contact Info with Separator Dots (Matching Maash Henna) */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs md:text-sm text-[#f4f2e6]/90 mb-8">
              <a href={`tel:${brandConfig.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#b39b5b]" />
                <span>{brandConfig.displayPhone}</span>
              </a>
              <span className="hidden sm:inline text-[#f4f2e6]/40">•</span>
              <a href={`mailto:${brandConfig.email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                <span>{brandConfig.email}</span>
              </a>
              <span className="hidden sm:inline text-[#f4f2e6]/40">•</span>
              <span className="text-[#f4f2e6]/80">{brandConfig.address}</span>
            </div>

            {/* Thin Divider Line */}
            <div className="w-full max-w-[900px] h-[1px] bg-[#f4f2e6]/15 mb-6" />

            {/* Copyright */}
            <div className="text-xs text-[#f4f2e6]/70">
              © 2026 Prajapat Handicrafts. All Rights Reserved. Handmade with Heart.
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================
          9. VIDEO MODAL POPUP (Matching Maash Henna)
      ======================================================== */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-3 right-3 text-white text-3xl font-light hover:text-[#b39b5b] transition-colors z-50 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center"
              aria-label="Close video modal"
            >
              &times;
            </button>

            {/* 9:16 Vertical Video Container */}
            <div className="relative pt-[177.77%] w-full bg-black">
              <video
                src={activeVideoModal}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
