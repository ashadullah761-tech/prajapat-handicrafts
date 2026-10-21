export interface Category {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  tagline: string;
  hindiTagline: string;
  description: string;
  image: string;
  itemCount: number;
  featured: boolean;
  heritageOrigin: string;
}

export const categories: Category[] = [
  {
    id: "pottery-terracotta",
    slug: "pottery-terracotta",
    name: "Pottery & Terracotta",
    hindiName: "मिट्टी और टेराकोटा",
    tagline: "Earthy elegance born from river clay and kiln fire",
    hindiTagline: "मिट्टी और आग की पारंपरिक कला",
    description: "Wheel-thrown pots, Jaipur blue pottery, glazed planters, and terracotta vases shaped with timeless reverence for Mother Earth.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    itemCount: 38,
    featured: true,
    heritageOrigin: "Jaipur, Rajasthan & Molela, Udaipur",
  },
  {
    id: "brass-metal-art",
    slug: "brass-metal-art",
    name: "Brass & Metal Art",
    hindiName: "पीतल एवं धातु शिल्प",
    tagline: "Lustrous heritage cast using 4000-year-old lost-wax methods",
    hindiTagline: "प्राचीन ढोकरा व पीतल शिल्प",
    description: "Hand-beaten brass urlis, temple peacock diyas, filigree incense holders, and ancient Dhokra bell-metal sculptures.",
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80",
    itemCount: 44,
    featured: true,
    heritageOrigin: "Moradabad, UP & Bastar, Chhattisgarh",
  },
  {
    id: "wooden-carvings",
    slug: "wooden-carvings",
    name: "Wooden Carvings & Crafts",
    hindiName: "काष्ठ कला एवं नक्काशी",
    tagline: "Sheesham and teak sculpted into heirloom treasures",
    hindiTagline: "शीशम और सागवान की बारीक नक्काशी",
    description: "Royal elephants, brass-inlay jewelry boxes, Mughal jharokhas, and authentic hand-painted Kathputli puppets.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    itemCount: 32,
    featured: true,
    heritageOrigin: "Saharanpur, UP & Jodhpur, Rajasthan",
  },
  {
    id: "handloom-textiles",
    slug: "handloom-textiles",
    name: "Handloom & Textiles",
    hindiName: "हथकरघा एवं वस्त्र",
    tagline: "Organic cottons stamped with hand-carved wooden blocks",
    hindiTagline: "हाथ की छपाई व शुद्ध सूती वस्त्र",
    description: "Authentic Bagru dabu prints, Sanganeri floral quilts (Jaipuri Razai), Kutch mirror-work cushion covers, and fine wool stoles.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    itemCount: 52,
    featured: true,
    heritageOrigin: "Sanganer & Bagru, Rajasthan",
  },
  {
    id: "jute-cane-crafts",
    slug: "jute-cane-crafts",
    name: "Jute & Cane Crafts",
    hindiName: "जूट एवं बेंत शिल्प",
    tagline: "Sustainable golden fibers braided with modern finesse",
    hindiTagline: "पर्यावरण के अनुकूल जूट व बांस कला",
    description: "Braided Bengal golden jute organizers, Assam bamboo planters, hand-knotted macrame wall hangings, and artisanal market bags.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80",
    itemCount: 26,
    featured: true,
    heritageOrigin: "Murshidabad, Bengal & Assam",
  },
  {
    id: "wall-art",
    slug: "wall-art",
    name: "Wall Art & Folk Paintings",
    hindiName: "दीवार कला एवं लोक चित्रकला",
    tagline: "Sacred storytelling painted on handmade paper and canvas",
    hindiTagline: "मधुबनी, वर्ली व पट्टचित्र",
    description: "GI-tagged Madhubani Tree of Life, Maharashtra Warli harvest murals, and palm-leaf Pattachitra etchings made with stone pigments.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    itemCount: 29,
    featured: true,
    heritageOrigin: "Madhubani, Bihar & Raghurajpur, Odisha",
  },
  {
    id: "traditional-jewelry",
    slug: "traditional-jewelry",
    name: "Traditional Handmade Jewelry",
    hindiName: "पारंपरिक हस्तनिर्मित आभूषण",
    tagline: "Oxidized tribal silver, Kundan-Meenakari, and clay beads",
    hindiTagline: "राजपूताना मीनाकारी व जनजातीय आभूषण",
    description: "Artisan-crafted choker neckpieces, filigree jhumkas, baked terracotta floral earrings, and chandan meditation malas.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    itemCount: 34,
    featured: true,
    heritageOrigin: "Jaipur, Rajasthan & Bhuj, Gujarat",
  },
  {
    id: "gift-hampers",
    slug: "gift-hampers",
    name: "Artisanal Gift Hampers",
    hindiName: "हस्तशिल्प उपहार हैंपर",
    tagline: "Thoughtfully curated festive, wedding, and corporate gift boxes",
    hindiTagline: "शुभ अवसरों के लिए विशेष उपहार",
    description: "Custom wooden keepsake boxes, brass diyas with natural soy candles, organic tea sets, and hand-addressed artisan scrolls.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    itemCount: 18,
    featured: true,
    heritageOrigin: "Jaipur Studio Handcrafted",
  },
];
