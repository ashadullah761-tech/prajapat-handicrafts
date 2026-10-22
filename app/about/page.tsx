"use client";

import React from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { artisans } from "@/data/artisans";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Heart,
  Users,
  Award,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta/10 text-terracotta border border-terracotta/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage & Origin</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Handmade with Heart. <br />
            <span className="text-terracotta italic font-normal">Crafted by Tradition.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-light max-w-3xl mx-auto">
            Rooted in {brandConfig.city}, Rajasthan under the leadership of {brandConfig.ownerName}, {brandConfig.name} was founded with a singular conviction: that true luxury is not mass-produced in a sterile factory, but slowly coaxed into life by human hands holding generational memory.
          </p>
        </div>

        {/* Big Staggered Heritage Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-float border border-sand-200 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1920&q=85"
            alt="Traditional potter in Rajasthan shaping earthenware"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-white max-w-xl space-y-2">
            <span className="text-xs font-mono text-saffron-300 font-bold uppercase tracking-widest">
              Kot Jewar, Rajasthan • Est. 1984
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Where River Mud and Quartz Meet the Sun
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200 font-light">
              Master Ramswaroop Prajapat at work in our Kot Jewar family atelier, where 42 years of pottery secrets are shared with younger apprentices every dawn.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">Our Mission</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              To dismantle exploitative middleman networks, ensuring that rural Indian master craftsmen receive up to 70% of every creation&apos;s value while preserving endangered heritage art forms from extinction.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">Our Community</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Today, our collective directly partners with over 450 hereditary families across Rajasthan, Uttar Pradesh, Bengal, and Chhattisgarh. Every purchase pays fair monthly wages and healthcare stipends.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-saffron/20 text-saffron-600 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">Our Eco Ethos</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              We reject virgin plastic packaging and synthetic toxic resins. Our creations celebrate raw earth, virgin cast brass, organic vegetable indigo, and honey-comb biodegradable protective wrap.
            </p>
          </div>
        </div>

        {/* Detailed Artisan Profiles Spotlight */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-terracotta tracking-wider uppercase">
              Hereditary Masters
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              The Keepers of the Flame
            </h2>
            <p className="text-xs text-charcoal-600">
              Meet the four senior master craftsmen heading our provincial clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artisans.map((art) => (
              <div
                key={art.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200 shadow-card flex flex-col sm:flex-row gap-6 items-start"
              >
                <img
                  src={art.photo}
                  alt={art.name}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover object-center flex-shrink-0 border border-sand-300"
                />
                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-[11px] font-bold text-terracotta uppercase">
                      {art.village}, {art.state}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">{art.name}</h3>
                    <p className="text-xs text-forest font-semibold">{art.craft}</p>
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed">{art.bio}</p>

                  <blockquote className="border-l-2 border-saffron-500 pl-3 italic text-xs text-charcoal-700 bg-sand-50 py-1 font-hand text-sm">
                    &quot;{art.quote}&quot;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Visit Invitation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-float">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-saffron-300 uppercase tracking-widest">
              {brandConfig.city} Workshop & Office
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Visit Us in {brandConfig.city}, Rajasthan
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200 font-light leading-relaxed">
              We warmly invite you to witness live wheel-throwing, try your hand at block printing, and share a fresh glass of spiced masala chai with our master craftsmen.
            </p>
            <div className="flex items-center gap-2 text-xs text-saffron-300 pt-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{brandConfig.address}</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-saffron-500 hover:bg-saffron-400 text-charcoal-900 font-bold text-xs uppercase tracking-wider transition-all shadow-glow flex-shrink-0"
          >
            Plan Your Studio Visit →
          </Link>
        </div>
      </div>
    </div>
  );
}
