export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  excerpt: string;
  hindiExcerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    id: "blog-1",
    slug: "care-guide-for-antique-brass-bell-metal",
    title: "How to Clean and Maintain Antique Brass & Bell Metal at Home",
    hindiTitle: "घर पर प्राचीन पीतल और कांस्य धातु के बर्तनों की देखभाल कैसे करें",
    excerpt: "Discover age-old natural remedies using lemon, tamarind, and flour to keep your heritage brass gleaming without harsh abrasives.",
    hindiExcerpt: "बिना हानिकारक रसायनों के नींबू, इमली और आटे की प्राकृतिक विधि से पीतल के बर्तनों को चमकाने के आसान उपाय।",
    content: `
### The Timeless Lustre of Indian Brass
Indian brassware and bell metal (Kansa / Dokra) have held a sacred place in our households for millennia. Whether it is an inherited peacock diya passed down through generations or a hand-hammered urli catching the evening lamplight, natural copper alloys breathe with their environment.

Over time, exposure to air, ambient humidity, and natural oils causes brass to develop a warm, dark patina. While many connoisseurs cherish this deep antique patina, here is how you can gently clean and restore its golden radiance when desired.

---

### Method 1: The Grandmother's Lemon & Salt Polish (Safest for Daily Diyas)
- **What you need:** 1 fresh lemon halved, 1 tablespoon fine sea salt or rock salt.
- **The Process:** Dip the cut side of the lemon directly into the salt. Gently rub it across the surface of the brass in circular motions. The natural citric acid reacts with copper oxidation, lifting dull tarnish within seconds.
- **Critical Step:** Immediately rinse thoroughly in clean lukewarm water and buff dry with a soft cotton flannel cloth. Never let lemon juice sit on brass for more than two minutes, as prolonged acidity can cause slight reddish discoloration.

---

### Method 2: The Traditional Tamarind (Imli) Cleanser
In South Indian temple towns, priests have used soaked tamarind pulp for centuries to polish massive temple lamps and bells:
1. Soak a small lemon-sized ball of raw tamarind in 3 tablespoons of warm water for 15 minutes.
2. Mash it into a smooth, fibrous paste.
3. Apply the paste across the brass item, rubbing gently with fingers or a soft natural fiber brush to get inside intricate filigree jaali grooves.
4. Rinse cleanly with water and towel dry immediately.

---

### Method 3: Pitambari Powder for High-Shine Finish
For deep cleaning before festivals like Diwali or housewarmings, Pitambari shining powder (formulated with natural cleaning clays and mild cleansing agents) works wonders. Apply with a damp sponge, rub lightly, and wash off.

---

### What to NEVER Do:
- ❌ **Never use steel wool or harsh wire brushes:** They create micro-scratches that permanently ruin the smooth hand-chiseled finish.
- ❌ **Never place handcrafted brass in modern dishwashers:** High heat and harsh chlorine detergents cause irreversible black spotting.
- ❌ **Never store damp:** Moisture is the primary trigger for green verdigris spots. Always ensure complete dry storage.
    `,
    author: "Gayatri Devi",
    authorRole: "Heritage Conservator & Craft Curator",
    publishedDate: "October 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1200&q=80",
    category: "Craft Care",
    tags: ["Brass Care", "Home Tips", "Artisan Heritage", "Maintenance"],
  },
  {
    id: "blog-2",
    slug: "sacred-alchemy-of-jaipur-blue-pottery",
    title: "The Sacred Alchemy of Jaipur Blue Pottery: How Stone Becomes Art",
    hindiTitle: "जयपुर ब्लू पॉटरी का रहस्य: पत्थर से कला बनने की अनूठी यात्रा",
    excerpt: "Unlike regular pottery, Jaipur Blue Pottery uses zero clay. Learn the fascinating 19th-century craft technique that creates its ethereal turquoise luster.",
    hindiExcerpt: "पारंपरिक मिट्टी के बिना केवल क्वार्ट्ज और कांच के पाउडर से बनने वाली विश्व प्रसिद्ध जयपुर ब्लू पॉटरी का इतिहास।",
    content: `
### A Craft Born Without Clay
When most people think of pottery, they imagine wet river mud spinning on a wheel. But step into the quiet artisan lanes of Kot Jewar, 40 kilometers outside Jaipur, and you will discover a craft that defies every ceramic rule in the world: **Jaipur Blue Pottery contains no clay whatsoever.**

### The Royal Recipe of Sawai Ram Singh II
In the mid-19th century, Sawai Ram Singh II, Maharaja of Jaipur, attended a kite-flying festival where two potters from Delhi brought down the kites of royal noblemen using glass-powder-coated strings. Fascinated by their knowledge of glass and quartz chemistry, the king invited them to Jaipur to establish a dedicated pottery atelier.

The secret mixture, preserved across generations, combines five distinct ingredients:
1. **Crushed Quartz Stone (Silica):** Sourced from the ancient Aravalli mountains, giving the pottery its hard, glass-like strength.
2. **Powdered Cullet Glass:** Recycled glass that melts at lower kiln temperatures.
3. **Multani Mitti (Fuller's Earth):** Just a 5% pinch, serving solely as a binding agent.
4. **Natural Gum (Saaji):** Extracted from indigenous desert acacias.
5. **Water:** Mixed and kneaded with feet like dough for three days.

---

### The Squirrel-Hair Brush & Cobalt Blue
Once pressed into open terracotta molds, the pieces dry under the golden Rajasthani sun. The master artisan then sits cross-legged on a low cot, holding a handcrafted brush made from natural squirrel tail hair.

With unmatched breath control, the artist outlines royal peacocks, lotus petals, and Persian arabesques using cobalt oxide (which turns deep celestial blue in fire) and copper sulphate (which yields shimmering turquoise).

---

### The Wood-Fired Kiln
The pieces are glazed with an all-natural glass slurry and placed inside closed wood-fired kilns. Fired only once at a gentle temperature of 800°C to 850°C, the pottery cools slowly over three full days. When the kiln doors swing open, what emerged from grey dust is transformed into gleaming jewel-toned artifacts.

Today, when you hang a Jaipur Blue Pottery plate on your wall, you are not merely decorating a room; you are keeping alive an unbroken four-century dialogue between stone, fire, and human patience.
    `,
    author: "Master Ramswaroop Prajapat",
    authorRole: "Master Craftsman, Kot Jewar",
    publishedDate: "September 24, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    category: "Heritage Stories",
    tags: ["Blue Pottery", "Jaipur History", "Pottery Process", "GI Tag"],
  },
  {
    id: "blog-3",
    slug: "how-to-style-handmade-indian-decor-modern-homes",
    title: "How to Style Handmade Indian Handicrafts in Contemporary Living Spaces",
    hindiTitle: "आधुनिक घरों में पारंपरिक भारतीय हस्तशिल्प को कैसे सजाएं",
    excerpt: "Blend minimalist aesthetics with warm terracotta, hand-beaten brass, and woven jute without feeling cluttered or overwhelming.",
    hindiExcerpt: "कमरे में सादगी और गर्माहट का संतुलन बनाते हुए हस्तशिल्प सजाने के 5 प्रभावी तरीके।",
    content: `
### The Modern Traditional Aesthetic
In an age of flat-pack furniture and synthetic finishes, our homes often crave soul. The solution is not to turn your apartment into an overwhelming museum, but to thoughtfully curate 'conversation anchors'—pieces that possess tactile texture, organic warmth, and an authentic origin story.

Here are 5 designer-approved principles to blend Indian craftsmanship seamlessly with Scandinavian, Mid-Century Modern, and Japandi interior styles.

---

### 1. The Rule of the Solitary Brass Anchor
Rather than grouping six different metal figurines together, choose one commanding statement piece. Place an antique-finish hand-hammered brass urli on a low travertine coffee table or entryway console. Float fresh white mogra blossoms and three brass floating tealights. The warm golden reflection breaks the monotony of cold stone or glass surfaces.

---

### 2. Warm the Neutral Sofa with Hand-Block Prints
If your living room features an ivory, grey, or beige sofa, introduce contrast through handloom textiles. A pair of indigo Bagru dabu cushion covers paired with a hand-spun raw silk lumbar pillow adds layered depth without visual chaos.

---

### 3. Vertical Warmth with Macrame & Folk Art
Hang a single large-format Madhubani 'Tree of Life' or Warli canvas in a slim, unornamented dark wood frame. The intricate pen-work acts as fine art, giving your space intellectual and cultural substance while respecting clean modern wall lines.

---

### 4. Grounding with Golden Jute
Synthetic rugs trap micro-plastics and lack character. Replace them with braided golden Bengal jute rugs or floor planters. The tactile earthiness naturally softens hardwood, Italian marble, or polished concrete flooring.

---

### 5. Scent as Atmosphere
Artisanship is multisensory. Light pure natural dhoop in a perforated filigree brass burner 15 minutes before guests arrive. The delicate tendrils of fragrant smoke drifting through lattice metal elevate the hospitality of your home to an art form.
    `,
    author: "Shalini Kapoor",
    authorRole: "Interior Architect & Spatial Designer",
    publishedDate: "October 02, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    category: "Home Styling",
    tags: ["Interior Design", "Modern Decor", "Home Styling", "Japandi"],
  },
  {
    id: "blog-4",
    slug: "conscious-gifting-indian-artisanal-hampers",
    title: "Conscious Gifting: Why Handcrafted Indian Hampers Outshine Factory Luxury",
    hindiTitle: "सार्थक उपहार: क्यों हस्तशिल्प हैंपर हैं सबसे खास",
    excerpt: "Move away from plastic-wrapped sweets and generic gift cards. Discover why meaningful artisanal gift boxes create lasting memories.",
    hindiExcerpt: "त्योहारों और शादियों में यादगार छाप छोड़ने वाले पर्यावरण अनुकूल हस्तशिल्प उपहार।",
    content: `
### Gifting That Has a Heartbeat
Every festive season, millions of generic, mass-produced gift baskets circulate from home to home—wrapped in non-recyclable cellophane, filled with industrial confectionery that often gets re-gifted or discarded.

In contrast, an artisanal gift hamper represents conscious generosity. It honors three parties simultaneously:
1. **The Artisan:** Direct fair-trade remuneration supporting rural households.
2. **The Environment:** Natural wood boxes, seed paper cards, and zero plastic packing.
3. **The Recipient:** A bespoke treasure that becomes a permanent part of their daily life.

---

### Anatomy of an Unforgettable Gift Box
When we curate the Shubh Utsav or Ananda gift sets at Kalakriti, we follow four sacred principles:
- **Heirloom Quality:** A solid cast brass diya or wheel-thrown mug does not expire; it gets lit every evening for decades.
- **Sensory Awakening:** Natural soy wax infused with night-blooming jasmine or mogra essential oils.
- **Natural Materials:** Reusable pine wood boxes with dovetail joints that double as jewelry chests long after the candles are enjoyed.
- **The Written Word:** Handwritten calligraphy notes penned on deckled cotton seed paper that can be planted in soil to sprout wild marigolds.

This festive season, give gifts that carry warmth, tradition, and human care.
    `,
    author: "Arjun Singhania",
    authorRole: "Founder, Kalakriti Collective",
    publishedDate: "October 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    category: "Gifting Guides",
    tags: ["Gifting", "Festive", "Diwali", "Sustainable Living"],
  },
];
