export interface BrandConfig {
  name: string;
  hindiName: string;
  firmName: string;
  ownerName: string;
  managerName: string;
  managerPhone: string;
  displayManagerPhone: string;
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
  name: "Gehlot Export",
  hindiName: "गेहलोत एक्सपोर्ट",
  firmName: "Gehlot Export",
  ownerName: "Prakash Gehlot",
  managerName: "Rishika Gehlot",
  managerPhone: "+918209142595",
  displayManagerPhone: "+91 82091 42595",
  tagline: "Handmade with Heart. Crafted by Tradition.",
  hindiTagline: "हाथों से निर्मित, परंपरा से पोषित।",
  description: "Authentic, fair-trade Indian handicrafts hand-carved, thrown and woven by master artisans in Rajasthan and across India. Bring home the soul of timeless craftsmanship.",
  location: "Pali, Rajasthan, India",
  city: "Pali",
  state: "Rajasthan",
  country: "India",
  phone: "+919799207503",
  displayPhone: "+91 97992 07503",
  whatsappNumber: "919799207503",
  displayWhatsapp: "+91 97992 07503",
  email: "gehlotexport4444@gmail.com",
  address: "2 chh 54, Kamla Nehru Nagar, Pali, Rajasthan",
  postalCode: "306401",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Kamla+Nehru+Nagar,+Pali,+Rajasthan+306401&t=&z=15&ie=UTF8&iwloc=&output=embed",
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
    instagram: "https://www.instagram.com/gehlot_88882026/",
    facebook: "https://facebook.com/gehlotexport",
    pinterest: "https://pinterest.com/gehlotexport",
    youtube: "https://youtube.com/@gehlotexport",
    twitter: "https://x.com/gehlotexport",
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
