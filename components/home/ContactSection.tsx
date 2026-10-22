"use client";

import React, { useState } from "react";
import { brandConfig } from "@/config/brand";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      showToast("Thank you! Our concierge will reply within 4 hours.", "success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 600);
  };

  return (
    <section className="py-16 sm:py-24 bg-ivory-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info & Address */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === "hi" ? "हमसे संपर्क करें" : "Artisan Studio Concierge"}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight">
                {language === "hi"
                  ? `${brandConfig.city} के हमारे स्टूडियो में आपका स्वागत है`
                  : "We Would Love to Hear From You"}
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed max-w-lg">
                Whether you wish to customize a brass idol, order corporate gift hampers, or verify a delivery address, our master artisans and concierge desk are always at your service.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sand-200 shadow-sm">
                <div className="p-2.5 rounded-xl bg-terracotta-50 text-terracotta flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal-900">
                    Firm & Workshop Address
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    {brandConfig.address} - {brandConfig.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sand-200 shadow-sm">
                <div className="p-2.5 rounded-xl bg-forest-50 text-forest flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal-900">
                    Studio Visiting Hours
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Monday to Saturday: 10:00 AM – 7:30 PM IST (Visits by prior appointment)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-sand-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-charcoal-900">
                    <Phone className="w-4 h-4 text-terracotta" />
                    <span>Direct Call Helpline</span>
                  </div>
                  <a
                    href={`tel:${brandConfig.phone}`}
                    className="text-xs text-terracotta font-mono font-bold hover:underline block"
                  >
                    {brandConfig.displayPhone} ({brandConfig.ownerName})
                  </a>
                  <a
                    href={`tel:${brandConfig.managerPhone}`}
                    className="text-xs text-charcoal-600 font-mono hover:text-terracotta block pt-0.5"
                  >
                    {brandConfig.displayManagerPhone} ({brandConfig.managerName} - Manager)
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-sand-200 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-charcoal-900">
                    <Mail className="w-4 h-4 text-terracotta" />
                    <span>Email Support</span>
                  </div>
                  <a
                    href={`mailto:${brandConfig.email}`}
                    className="text-xs text-terracotta hover:underline block truncate"
                  >
                    {brandConfig.email}
                  </a>
                  <p className="text-[11px] text-charcoal-500 pt-0.5">
                    Pincode: {brandConfig.postalCode} • {brandConfig.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-3xl bg-emerald-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                  Instant Response Guaranteed
                </span>
                <h4 className="font-serif text-base font-bold">Chat Directly on WhatsApp</h4>
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=${brandConfig.whatsappNumber}&text=${encodeURIComponent(
                  `Namaste ${brandConfig.name} Team! I am contacting you through the website.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-emerald-800 hover:bg-ivory-100 font-bold text-xs shadow transition-colors flex items-center gap-2 flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Open WhatsApp ({brandConfig.displayWhatsapp})</span>
              </a>
            </div>

            {/* Embedded Google Map Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-sand-200 h-48 bg-sand-200 relative shadow-sm">
              <iframe
                title={`${brandConfig.name} Workshop ${brandConfig.city}`}
                src={brandConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-float space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                Send a Message
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Fill out the form below and our craft team will get back to you promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-forest-50 p-6 rounded-2xl border border-forest-200 animate-slide-up">
                <div className="w-12 h-12 mx-auto rounded-full bg-forest text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-forest-900">
                  Message Dispatched with Care!
                </h4>
                <p className="text-xs text-charcoal-600 max-w-sm mx-auto">
                  Namaste! We have received your inquiry. One of our senior craft coordinators will reach out on phone or email within 4 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-charcoal-800 text-white rounded-full text-xs font-semibold hover:bg-charcoal-900"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 97992 07503"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-charcoal-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Custom Order">Custom Sizing / Bespoke Craft</option>
                    <option value="Bulk Order">Wedding Favors & Corporate Gifting (25+ units)</option>
                    <option value="Order Tracking">Order Status / Delivery Assistance</option>
                    <option value="International Shipping">International Delivery Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-charcoal-700 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the craft you are looking for, required quantities, target timeline, or any special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-terracotta hover:bg-terracotta-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-terracotta/20 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Send Message to Jaipur Studio</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
