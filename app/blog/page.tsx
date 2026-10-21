"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, BookOpen, ArrowRight, Sparkles, Search } from "lucide-react";

export default function BlogIndexPage() {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Artisan Journal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight">
            Craft Lore, Care & Styling
          </h1>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            In-depth guides on antique restoration, history of Indian pottery, and modern earthy interior styling.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search guides (e.g. brass care, pottery, styling)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-card hover:shadow-artisan transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-sand-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md text-saffron-300 text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-charcoal-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-terracotta" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 group-hover:text-terracotta transition-colors leading-snug">
                      {language === "hi" ? post.hindiTitle : post.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                    {language === "hi" ? post.hindiExcerpt : post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-sand-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-charcoal-900 block">{post.author}</span>
                  <span className="text-[11px] text-charcoal-500">{post.authorRole}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-terracotta group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span>Read Complete Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
