"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { blogs } from "@/data/blogs";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, ArrowLeft, Share2, Sparkles, BookOpen, User } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogs.find((b) => b.slug === slug);
  const { language } = useLanguage();

  if (!post) {
    return notFound();
  }

  const suggestedProducts = products.slice(0, 3);

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-terracotta hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-terracotta-50 text-terracotta text-xs font-bold uppercase tracking-wider">
            {post.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 leading-tight">
            {language === "hi" ? post.hindiTitle : post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-500 pt-2 border-b border-sand-200 pb-4">
            <span className="font-semibold text-charcoal-900">{post.author} ({post.authorRole})</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>Published on {post.publishedDate}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-float border border-sand-200 aspect-[16/9] bg-sand-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-stone max-w-none text-charcoal-800 text-xs sm:text-sm leading-relaxed space-y-4 bg-white p-6 sm:p-12 rounded-3xl border border-sand-200 shadow-card">
          <div className="whitespace-pre-line leading-relaxed space-y-4">
            {post.content}
          </div>
        </article>

        {/* Author Bio Box */}
        <div className="p-6 rounded-3xl bg-sand-100 border border-sand-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-bold font-serif text-lg">
            {post.author[0]}
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-charcoal-900">{post.author}</h4>
            <p className="text-xs text-charcoal-500">{post.authorRole} at Kalakriti Handicrafts Studio</p>
          </div>
        </div>

        {/* Recommended Handicrafts to Shop */}
        <div className="pt-8 space-y-6">
          <div>
            <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
              Handcrafted in India
            </span>
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              Featured Treasures from this Article
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {suggestedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
