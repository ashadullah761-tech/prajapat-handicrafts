"use client";

import React from "react";
import { brandConfig } from "@/config/brand";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instaPosts = [
  {
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80",
    caption: "Jaipur blue pottery wall decor styled against warm lime plaster.",
    likes: "1,240",
    comments: "48",
  },
  {
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=600&q=80",
    caption: "Mayur brass hanging diya casting warm auspicious shadows at dusk.",
    likes: "2,190",
    comments: "82",
  },
  {
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    caption: "Sheesham hand-carved keepsake boxes chiseled with Tarkashi brass inlay.",
    likes: "940",
    comments: "31",
  },
  {
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80",
    caption: "Freshly printed mulmul dohars drying under the morning Bagru sun.",
    likes: "1,580",
    comments: "64",
  },
  {
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80",
    caption: "Natural golden jute storage baskets bringing organic calmness home.",
    likes: "1,110",
    comments: "39",
  },
  {
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    caption: "Original Madhubani Tree of Life hand-painted with bamboo nibs.",
    likes: "1,870",
    comments: "73",
  },
];

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-terracotta tracking-wider uppercase block">
              Follow Our Daily Journey
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
              @GEHLOT_88882026
            </h3>
          </div>

          <a
            href={brandConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand-100 hover:bg-terracotta hover:text-white text-charcoal-800 text-xs font-semibold transition-colors self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4 text-rose-500 group-hover:text-white" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* 6-Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instaPosts.map((post, i) => (
            <a
              key={i}
              href={brandConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-sand-200 block shadow-sm"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-2 text-center">
                <Instagram className="w-5 h-5 mb-2" />
                <div className="flex items-center gap-3 text-[11px] font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
