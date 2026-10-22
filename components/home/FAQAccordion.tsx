"use client";

import React, { useState } from "react";
import { faqs, FAQItem } from "@/data/faqs";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles, Search } from "lucide-react";

export const FAQAccordion: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<string[]>([faqs[0].id]);
  const [searchFilter, setSearchFilter] = useState("");

  const categories = [
    "All",
    "General",
    "Pricing",
    "Ordering",
    "Shipping & Returns",
    "Custom Orders",
  ];

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      searchFilter.trim() === "" ||
      faq.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      faq.hindiQuestion.includes(searchFilter) ||
      faq.answer.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-sand-200" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === "hi" ? "स्पष्टीकरण एवं सहायता" : "Clarity & Trust"}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
            {t("faqTitle")}
          </h2>
          <p className="text-sm text-charcoal-600 max-w-xl mx-auto">
            {t("faqSub")}
          </p>
        </div>

        {/* Search Bar inside FAQ */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder={
              language === "hi"
                ? "सवाल खोजें (उदा. रिटर्न, पैकेजिंग, सीओडी)..."
                : "Search questions (e.g. returns, packaging, COD, bulk)..."
            }
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl bg-sand-100/70 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
          />
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-terracotta text-white shadow-sm"
                  : "bg-sand-100 text-charcoal-700 hover:bg-sand-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-sand-200 overflow-hidden bg-ivory-50 transition-all hover:border-sand-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-charcoal-900 transition-colors hover:text-terracotta"
                    aria-expanded={isOpen}
                  >
                    <span>{language === "hi" ? faq.hindiQuestion : faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-charcoal-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-terracotta" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-sand-200/50 pt-3 animate-slide-up">
                      <p>{language === "hi" ? faq.hindiAnswer : faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-xs text-charcoal-500 space-y-2">
              <p>No matching questions found for &quot;{searchFilter}&quot;.</p>
              <button
                onClick={() => setSearchFilter("")}
                className="text-xs text-terracotta font-semibold underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-sand-100 border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-charcoal-900 text-base">
              Still have questions about our handicrafts?
            </h4>
            <p className="text-xs text-charcoal-600">
              Our studio concierge is active 7 days a week on WhatsApp and direct phone.
            </p>
          </div>

          <a
            href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
              `Namaste! I had a quick question regarding an item on ${brandConfig.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
