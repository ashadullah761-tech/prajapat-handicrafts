import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/config/brand";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/context/ToastContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AnnouncementBar } from "@/components/common/AnnouncementBar";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { CartDrawer } from "@/components/common/CartDrawer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { BackToTop } from "@/components/common/BackToTop";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalakritihandicrafts.com"),
  title: {
    default: `${brandConfig.name} | Authentic Indian Handicrafts & Home Decor`,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
  keywords: [
    "handmade handicrafts online India",
    "Rajasthani handicraft",
    "buy home decor online",
    "wooden handicraft items",
    "handmade gift items",
    "Jaipur blue pottery",
    "brass diya peacock",
    "sheesham wood box",
    "hand block print mulmul dohar",
    "fair trade artisans India",
    "Bastar dhokra bell metal",
  ],
  authors: [{ name: "Kalakriti Handicrafts Studio, Jaipur" }],
  creator: "Kalakriti Handicrafts",
  publisher: "Kalakriti Handicrafts",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kalakritihandicrafts.com",
    siteName: brandConfig.name,
    title: `${brandConfig.name} — Handmade with Heart. Crafted by Tradition.`,
    description: brandConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Authentic Indian Handicrafts at Kalakriti Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} — Authentic Indian Handicrafts`,
    description: brandConfig.description,
    images: ["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80"],
    creator: "@kalakriticrafts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD for LocalBusiness & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": brandConfig.name,
    "image": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    "telephone": brandConfig.phone,
    "email": brandConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Studio 14, Hawa Mahal Heritage Corridor, Badi Chaupar",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302002",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9239,
      "longitude": 75.8237,
    },
    "url": "https://kalakritihandicrafts.com",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:30",
        "closes": "19:30",
      },
    ],
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-darkGreen selection:bg-darkGreen selection:text-cream">
        <ToastProvider>
          <LanguageProvider>
            <CartProvider>
              <WishlistProvider>
                <AnnouncementBar />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <CartDrawer />
                <FloatingWhatsApp />
                <BackToTop />
              </WishlistProvider>
            </CartProvider>
          </LanguageProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
