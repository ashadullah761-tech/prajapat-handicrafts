import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-ivory-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-12 rounded-3xl border border-sand-200 shadow-float text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-sand-100 text-terracotta flex items-center justify-center">
          <Compass className="w-8 h-8 opacity-80" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-widest">
            404 • Page Not Found
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
            Lost in the Artisan Alley
          </h1>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            The craft piece or page you are seeking seems to have found a home elsewhere or the link has moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/"
            className="flex-1 py-3 px-4 rounded-full bg-sand-200 hover:bg-sand-300 text-charcoal-900 text-xs font-semibold transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/shop"
            className="flex-1 py-3 px-4 rounded-full bg-terracotta hover:bg-terracotta-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Explore Shop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
