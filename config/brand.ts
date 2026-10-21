export interface BrandConfig {
  name: string;
  hindiName: string;
  tagline: string;
  hindiTagline: string;
  description: string;
  location: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // international format without + or spaces for api.whatsapp.com
  displayWhatsapp: string;
  email: string;
  address: string;
  postalCode: string;
  googleMapsEmbedUrl: string;
  currency: {
    symbol: string;
    code: string;
    name: string;
  };
  shipping: {
    freeShippingThreshold: number;
    standardShippingFee: number;
    expressShippingFee: number;
    codAvailable: boolean;
    estimatedDeliveryDays: string;
  };
  social: {
    instagram: string;
    facebook: string;
    pinterest: string;
    youtube: string;
    twitter: string;
  };
  announcements: {
    en: string;
    hi: string;
  }[];
  trustBadges: {
    icon: string;
    title: string;
    hindiTitle: string;
    subtitle: string;
  }[];
}

export const brandConfig: BrandConfig = {
  name: "Prajapat Handicrafts",
  hindiName: "प्रजापत हैंडीक्राफ्ट्स",
  tagline: "Handmade with Heart. Crafted by Tradition.",
  hindiTagline: "हाथों से निर्मित, परंपरा से पोषित।",
  description: "Authentic, fair-trade Indian handicrafts hand-carved, thrown and woven by master artisans in Rajasthan and across India. Bring home the soul of timeless craftsmanship.",
  location: "Jaipur, Rajasthan, India",
  city: "Jaipur",
  state: "Rajasthan",
  country: "India",
  phone: "+919876543210",
  displayPhone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Customize this with your real WhatsApp number
  displayWhatsapp: "+91 98765 43210",
  email: "care@prajapathandicrafts.com",
  address: "Studio 14, Hawa Mahal Heritage Corridor, Badi Chaupar, Jaipur, Rajasthan 302002",
  postalCode: "302002",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.894291079367!2d75.8236873!3d26.9239363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14b1ba55555%3A0xb3e74b5c7774e144!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  currency: {
    symbol: "₹",
    code: "INR",
    name: "Indian Rupee",
  },
  shipping: {
    freeShippingThreshold: 999,
    standardShippingFee: 99,
    expressShippingFee: 199,
    codAvailable: true,
    estimatedDeliveryDays: "3 - 6 Business Days",
  },
  social: {
    instagram: "https://instagram.com/prajapathandicrafts",
    facebook: "https://facebook.com/prajapathandicrafts",
    pinterest: "https://pinterest.com/prajapathandicrafts",
    youtube: "https://youtube.com/@prajapathandicrafts",
    twitter: "https://x.com/prajapatcrafts",
  },
  announcements: [
    {
      en: "✨ Festive Season Special: Free Pan-India Delivery on orders above ₹999",
      hi: "✨ त्योहारी उपहार: ₹999 से अधिक के ऑर्डर पर पूरे भारत में मुफ्त डिलीवरी",
    },
    {
      en: "🌿 100% Authentic Handcrafted Heritage • 450+ Rural Artisan Families Supported",
      hi: "🌿 100% प्रामाणिक हस्तशिल्प • 450+ ग्रामीण कारीगर परिवारों का सहयोग",
    },
    {
      en: "🎁 Use code 'HANDMADE10' for extra 10% off your first handcrafted order",
      hi: "🎁 अपने पहले ऑर्डर पर 10% अतिरिक्त छूट के लिए 'HANDMADE10' कोड का उपयोग करें",
    },
  ],
  trustBadges: [
    {
      icon: "Sparkles",
      title: "100% Handmade",
      hindiTitle: "100% हस्तनिर्मित",
      subtitle: "Zero machine production",
    },
    {
      icon: "Users",
      title: "Fair-Trade Artisans",
      hindiTitle: "सीधे कारीगरों से",
      subtitle: "Empowering 450+ rural families",
    },
    {
      icon: "Leaf",
      title: "Eco-Friendly Materials",
      hindiTitle: "पर्यावरण अनुकूल",
      subtitle: "Natural clays, woods & brass",
    },
    {
      icon: "Truck",
      title: "Safe Pan-India Delivery",
      hindiTitle: "सुरक्षित डिलीवरी",
      subtitle: "Damage-free multi-layer packaging",
    },
    {
      icon: "ShieldCheck",
      title: "Authenticity Guaranteed",
      hindiTitle: "शुद्धता की गारंटी",
      subtitle: "GI-tagged & verified crafts",
    },
    {
      icon: "RotateCcw",
      title: "Easy 7-Day Returns",
      hindiTitle: "सरल 7-दिवसीय वापसी",
      subtitle: "Hassle-free replacement policy",
    },
  ],
};
