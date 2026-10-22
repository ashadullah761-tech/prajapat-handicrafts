import React from "react";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us & Workshop Location | Gehlot Export",
  description:
    "Get in touch with Gehlot Export in Pali, Rajasthan. Direct WhatsApp support, phone assistance, custom order inquiries, and workshop visit appointments.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory-100 min-h-screen py-10 sm:py-16">
      <ContactSection />
    </div>
  );
}
