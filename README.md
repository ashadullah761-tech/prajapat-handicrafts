# Kalakriti Handicrafts (कलाकृति हैंडीक्राफ्ट्स)
> **"Handmade with Heart. Crafted by Tradition."**  
> Premium e-commerce web platform for authentic, fair-trade Indian handicrafts, home decor, and heritage gifting.

---

## 🏛️ Brand & Tech Highlights
- **Tech Stack:** Next.js 14+ (App Router) + TypeScript + Tailwind CSS + Lucide Icons + Canvas Confetti
- **Multi-Page Architecture:**
  - `Home` (`/`): 15 curated sections following a conversion-focused narrative flow
  - `Shop` (`/shop`): Multi-filter sidebar (Category, Price Range, In-Stock), sorting (Bestsellers, Price, Rating, Newest), live search
  - `Product Detail` (`/product/[slug]`): 4:5 image gallery with zoom, variant selector, instant delivery pincode checker, artisan profile, damage-free guarantee, and WhatsApp-direct ordering
  - `Categories` (`/categories` & `/categories/[slug]`): 8 craft categories
  - `Artisan Gallery` (`/gallery`): Masonry grid with modal lightbox & "Living Workshop" video reels
  - `Our Story` (`/about`): Heritage story from Jaipur, master artisan bios, fair-trade principles, studio visit details
  - `Artisan Journal / Blog` (`/blog` & `/blog/[slug]`): 4 authoritative craft care & home styling guides
  - `FAQ` (`/faq`): 22+ categorized Q&As with live search & Schema.org `FAQPage`
  - `Cart & Drawer` (`/cart`): Persistent localStorage basket, coupon engine (`HANDMADE10`, `UTSAV15`), free shipping threshold progress bar
  - `Checkout` (`/checkout`): Dual checkout modes:
    - (a) **WhatsApp-First Ordering**: Pre-fills exact items, variants, totals, name, address, and notes directly into WhatsApp
    - (b) **Razorpay Test Mode / Online UPI & Cards**: Realistic sandbox payment simulation with celebratory confetti
  - `Wishlist` (`/wishlist`): Persistent saved items with instant move-to-basket
  - `Track Order` (`/track-order`): Live AWB status timeline with Bluedart / Delhivery tracking simulator
  - `Contact` (`/contact`): Inquiry form with validation, studio address, interactive map, and direct WhatsApp concierge
  - `Policies`: Privacy Policy, Terms & Conditions, Shipping & Returns, Refund Policy

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18.x` or later (tested on Node v20/v24)
- npm `v9.x` or later

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── layout.tsx             # Root layout with fonts, JSON-LD, Providers, Header & Footer
│   ├── page.tsx               # Complete Home Page with 15 sections
│   ├── globals.css            # Custom artisanal scrollbars, colors, and textures
│   ├── sitemap.ts             # Auto-generated XML sitemap for SEO
│   ├── robots.ts              # SEO crawl directives
│   ├── not-found.tsx          # Custom 404 page
│   ├── shop/page.tsx          # Multi-filter shop page
│   ├── product/[slug]/page.tsx# Comprehensive product detail page
│   ├── categories/page.tsx    # Categories index
│   ├── categories/[slug]/page.tsx # Category detail products
│   ├── gallery/page.tsx       # Lightbox craft gallery & video reels
│   ├── about/page.tsx         # Our story & artisan guild
│   ├── blog/page.tsx          # Artisan journal index
│   ├── blog/[slug]/page.tsx   # Blog post reader
│   ├── cart/page.tsx          # Dedicated shopping cart page
│   ├── checkout/page.tsx      # WhatsApp & Razorpay checkout
│   ├── wishlist/page.tsx      # Saved wishlist page
│   ├── track-order/page.tsx   # Real-time order tracker
│   ├── faq/page.tsx           # Categorized FAQs with search
│   ├── contact/page.tsx       # Studio contact & map
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── shipping-returns/page.tsx
│   └── refund-policy/page.tsx
├── components/
│   ├── common/                # Header, Footer, AnnouncementBar, CartDrawer, FloatingWhatsApp, BackToTop, CookieNotice
│   ├── home/                  # HeroSlider, TrustBadges, ShopByCategory, BestSellers, NewArrivals, FeaturedCollection, etc.
│   └── product/               # ProductCard, PincodeChecker
├── config/
│   └── brand.ts               # SINGLE CONFIG FILE for brand name, phone, WhatsApp, address, discounts
├── context/
│   ├── CartContext.tsx        # Cart state, coupon calculator, WhatsApp order stringifier
│   ├── WishlistContext.tsx    # Wishlist state with localStorage
│   ├── LanguageContext.tsx    # English / Hindi (i18n) dictionary and switcher
│   └── ToastContext.tsx       # Interactive feedback alerts
├── data/
│   ├── brand.ts               # Brand data
│   ├── products.ts            # 24 complete sample handicraft products
│   ├── categories.ts          # 8 craft traditions
│   ├── artisans.ts            # Master artisan biographies
│   ├── testimonials.ts        # Verified customer reviews
│   ├── faqs.ts                # 22+ categorized Q&As
│   ├── blogs.ts               # 4 rich articles
│   └── images.ts              # Centralized 40+ curated handicraft image catalog
└── tailwind.config.ts         # Earthy color tokens (Terracotta, Forest, Saffron, Ivory, Sand)
```

---

## 🎨 Customization Checklist (How to Personalize in Minutes)

### 1. Update Brand Name, WhatsApp Number & Location
Open `config/brand.ts`:
```typescript
export const brandConfig: BrandConfig = {
  name: "Your Brand Name",            // e.g. "Prajapat Handicrafts"
  hindiName: "आपका ब्रांड नाम",
  tagline: "Your Brand Tagline",
  phone: "+919876543210",              // Your real calling phone
  whatsappNumber: "919876543210",      // Your real WhatsApp number (no + or spaces)
  email: "care@yourbrand.com",
  address: "Your Studio Address, Jaipur, Rajasthan",
  ...
};
```
*Changing this single file updates the header, footer, WhatsApp ordering link, floating chat, contact page, and schema.org metadata across the entire site!*

### 2. Replace Product Images
All image URLs are centralized in `data/images.ts` and `data/products.ts`. Simply paste your own image URLs (from Unsplash, Cloudinary, AWS S3, or local `/public` folder).

### 3. Add or Modify Products
Open `data/products.ts` to add or update items. Each item supports:
- `name` & `hindiName`
- `price` & `originalPrice`
- `discountPercent`
- `artisan: { name, village, craft }`
- `specifications: { material, dimensions, weight, origin, finish, care }`
- `images: [{ url, alt }]`

### 4. Connecting Razorpay in Production
In `app/checkout/page.tsx`, replace the test simulation with the official Razorpay script:
1. Add `Razorpay Checkout script` via `next/script` in `app/layout.tsx`.
2. Generate an order on your backend (`/api/create-razorpay-order`) using your Razorpay Key ID and Secret.
3. Open `new (window as any).Razorpay(options).open()`.

### 5. Deploying to Vercel
1. Push your repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Your site will be live on an ultra-fast global CDN with automated SSL!

---

## 📜 License
Created for authentic Indian handicraft preservation and fair-trade artisan empowerment.
