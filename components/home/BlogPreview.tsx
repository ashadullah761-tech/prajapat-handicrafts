"use client";

import React from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export const BlogPreview: React.FC = () => {
  const { language, t } = useLanguage();
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-ivory-100 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === "hi" ? "शिल्प ज्ञान पत्रिका" : "The Artisan Journal"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal-900 tracking-tight">
              {language === "hi" ? "शिल्प कला, इतिहास एवं देखभाल" : "Stories from the Craft Workshops"}
            </h2>
            <p className="text-sm text-charcoal-600 max-w-xl">
              Deepen your understanding of ancient Indian arts, restoration techniques, and mindful living.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-forest hover:text-terracotta group transition-colors"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredBlogs.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-sand-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md text-saffron-300 text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-charcoal-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal-900 group-hover:text-terracotta transition-colors line-clamp-2 leading-snug">
                      {language === "hi" ? post.hindiTitle : post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                    {language === "hi" ? post.hindiExcerpt : post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-sand-100 flex items-center justify-between text-xs text-charcoal-700">
                <span className="font-medium text-charcoal-900">{post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-terracotta group-hover:translate-x-0.5 transition-transform flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
