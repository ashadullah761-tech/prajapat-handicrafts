export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  productName: string;
  productSlug: string;
  avatar: string;
  review: string;
  hindiReview: string;
  verifiedPurchase: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Ananya Iyer",
    location: "Indiranagar, Bengaluru",
    rating: 5,
    date: "October 12, 2026",
    productName: "Heritage Mayur Brass Hanging Diya",
    productSlug: "heritage-peacock-brass-hanging-diya",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    review: "I was genuinely nervous about ordering brass and pottery online from Jaipur to Bengaluru. The parcel arrived in four days with five layers of packing! The peacock diya is heavy, radiant, and rings with the sweetest bell chime when the breeze blows through our balcony. True royal temple craftsmanship.",
    hindiReview: "बेंगलुरु में ऑर्डर 4 दिनों में सुरक्षित रूप से पहुंचा। पीतल का मयूर दीया भारी और बेहद चमकदार है। पैकेजिंग शानदार थी!",
    verifiedPurchase: true,
  },
  {
    id: "test-2",
    name: "Vikramaditya Rathore",
    location: "Vasant Vihar, New Delhi",
    rating: 5,
    date: "September 28, 2026",
    productName: "Royal Jaipur Blue Pottery Wall Plate",
    productSlug: "royal-jaipur-blue-pottery-wall-plate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review: "The cobalt floral artwork is even more vibrant in person than on screen. Knowing that Master Ramswaroop spent hours hand-painting this exact plate gives it so much soul. Everyone who walks into our home stops to admire it. Best decor investment this festive season.",
    hindiReview: "ब्लू पॉटरी प्लेट की कलाकारी बहुत सुंदर है। मास्टर कारीगर के हाथ का काम इसमें साफ झलकता है। हमारे घर आने वाले हर मेहमान ने इसकी तारीफ की।",
    verifiedPurchase: true,
  },
  {
    id: "test-3",
    name: "Pooja & Rohan Mehra",
    location: "Bandra West, Mumbai",
    rating: 5,
    date: "October 04, 2026",
    productName: "Shubh Utsav Heritage Brass Hamper",
    productSlug: "shubh-utsav-heritage-brass-candle-hamper",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    review: "We ordered 45 custom boxes for our Diwali corporate client gifting. The team assisted us directly on WhatsApp within 10 minutes, engraved our company emblem onto the pine boxes, and coordinated individual home deliveries. Our clients were blown away by the artisanal touch.",
    hindiReview: "हमने दिवाली पर कॉर्पोरेट गिफ्टिंग के लिए 45 बॉक्स मंगवाए। व्हाट्सएप पर तुरंत सहायता मिली और सभी क्लाइंट्स को लकड़ी के नक्काशीदार बॉक्स बेहद पसंद आए।",
    verifiedPurchase: true,
  },
  {
    id: "test-4",
    name: "Sneha Mukherjee",
    location: "Salt Lake, Kolkata",
    rating: 5,
    date: "September 19, 2026",
    productName: "Sonali Bengal Golden Jute Storage Basket",
    productSlug: "sonali-bengal-hand-braided-golden-jute-basket",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    review: "Love the eco-friendly focus. The golden jute basket is thick, doesn't shed fibers, and holds its circular shape perfectly. It adds such a soothing organic texture beside our linen sofa.",
    hindiReview: "पर्यावरण के अनुकूल और मजबूत बास्केट। जूट की गुणवत्ता उत्तम है और लिविंग रूम में बहुत सुंदर लगती है।",
    verifiedPurchase: true,
  },
  {
    id: "test-5",
    name: "Rajeshwar Sengupta",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
    date: "October 08, 2026",
    productName: "Dokra Lost-Wax Cast Nataraja Idol",
    productSlug: "dokra-lost-wax-cast-nataraja-idol",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    review: "As an Indian art collector, finding genuine lost-wax Bastar Dhokra without commercial dilution is rare. The raw texture, the beeswax coils in Shiva's halo, and the weight are flawless. A museum-grade heirloom.",
    hindiReview: "बस्तर की प्रामाणिक ढोकरा कलाकृति। वजन और बनावट में अद्वितीय प्राचीन स्पर्श। एक सच्चा विरासत संग्रह।",
    verifiedPurchase: true,
  },
  {
    id: "test-6",
    name: "Meera & Siddharth Desai",
    location: "Satellite, Ahmedabad",
    rating: 5,
    date: "October 15, 2026",
    productName: "Jaipur Hand Block Printed Mulmul Quilt",
    productSlug: "jaipur-hand-block-printed-mulmul-dohar-quilt",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    review: "The softest dohar we have ever touched. The natural indigo smell of fresh cotton took me straight back to my childhood visits to Jaipur. Even after two washes, the colors are fresh and soft. Ordered two more for my mother.",
    hindiReview: "इतनी मुलायम मलमल दोहर मैंने पहले कभी नहीं देखी। प्राकृतिक रंगों की सौंधी खुशबू और बेहतरीन सिलाई।",
    verifiedPurchase: true,
  },
];
