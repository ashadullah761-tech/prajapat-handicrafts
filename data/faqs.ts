export interface FAQItem {
  id: string;
  category: "General" | "Pricing" | "Ordering" | "Shipping & Returns" | "Custom Orders";
  question: string;
  hindiQuestion: string;
  answer: string;
  hindiAnswer: string;
}

export const faqs: FAQItem[] = [
  // General & Authenticity
  {
    id: "faq-1",
    category: "General",
    question: "Are your products truly handmade by real artisans in India?",
    hindiQuestion: "क्या आपके उत्पाद वास्तव में भारत के कारीगरों द्वारा हाथ से बनाए जाते हैं?",
    answer: "Yes, 100%. We work directly with over 450 verified rural artisan families and craft clusters across Rajasthan, Uttar Pradesh, Gujarat, Bengal, and Chhattisgarh. We do not sell factory mass-produced items or synthetic replicas. Each piece reflects individual handwork and slight natural variations.",
    hindiAnswer: "हाँ, शत-प्रतिशत। हम राजस्थान, यूपी, गुजरात और बंगाल के 450+ ग्रामीण कारीगर परिवारों के साथ सीधे काम करते हैं। हमारे सभी उत्पाद हाथ से बने और प्रामाणिक हैं।",
  },
  {
    id: "faq-2",
    category: "General",
    question: "Why do handmade items have minor variations in color or texture?",
    hindiQuestion: "हाथ से बने सामान में रंग या बनावट में थोड़ा अंतर क्यों होता है?",
    answer: "These subtle variations are the authentic hallmark of true handmade art! When clay is thrown on a wheel, brass is cast in sand, or fabric is hand-block printed under the sun, natural pigment densities and wood grains create one-of-a-kind uniqueness that machines can never replicate.",
    hindiAnswer: "यही हस्तशिल्प की असली सुंदरता और पहचान है। चाक पर बनी मिट्टी, हाथ से ढला पीतल या धूप में सूखा प्राकृतिक रंग हर उत्पाद को अनोखा बनाता है।",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Do you provide a Certificate of Authenticity or GI-tag verification?",
    hindiQuestion: "क्या आप प्रामाणिकता का प्रमाण पत्र या जीआई-टैग सत्यापन प्रदान करते हैं?",
    answer: "Yes! All GI-tagged craft items—including Jaipur Blue Pottery, Sanganeri Handblock Prints, and Bastar Dhokra metal art—arrive with our official Certificate of Origin bearing the artisan guild's registration and signature mark.",
    hindiAnswer: "जी हाँ! जयपुर ब्लू पॉटरी, सांगानेरी प्रिंट और ढोकरा शिल्प जैसी जीआई-टैग वाली वस्तुओं के साथ प्रामाणिकता प्रमाण पत्र संलग्न होता है।",
  },
  {
    id: "faq-4",
    category: "General",
    question: "Where are you located? Can we visit your studio in Jaipur?",
    hindiQuestion: "आपका स्टूडियो कहाँ स्थित है? क्या हम जयपुर में आ सकते हैं?",
    answer: "Our flagship craft studio and experience gallery is located at Studio 14, Hawa Mahal Heritage Corridor, Badi Chaupar, Jaipur, Rajasthan 302002. Guests are welcome Monday to Saturday from 10:30 AM to 7:30 PM to witness live wheel pottery and block printing demonstrations.",
    hindiAnswer: "हमारा मुख्य स्टूडियो हवा महल हेरिटेज कॉरिडोर, बड़ी चौपड़, जयपुर में स्थित है। आप सोमवार से शनिवार सुबह 10:30 से शाम 7:30 बजे तक पधार सकते हैं।",
  },

  // Pricing & Payment
  {
    id: "faq-5",
    category: "Pricing",
    question: "What payment methods do you accept on the website?",
    hindiQuestion: "वेबसाइट पर भुगतान के कौन से विकल्प उपलब्ध हैं?",
    answer: "We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), Credit & Debit cards (Visa, MasterCard, RuPay), Net Banking across 50+ Indian banks, and Cash on Delivery (COD) on eligible orders up to ₹5,000.",
    hindiAnswer: "हम यूपीआई (Google Pay, PhonePe, Paytm), क्रेडिट/डेबिट कार्ड, नेट बैंकिंग और ₹5,000 तक के ऑर्डर पर कैश ऑन डिलीवरी (COD) स्वीकार करते हैं।",
  },
  {
    id: "faq-6",
    category: "Pricing",
    question: "Are prices inclusive of GST? Will I receive a GST tax invoice?",
    hindiQuestion: "क्या कीमतों में जीएसटी शामिल है? क्या मुझे टैक्स इनवॉइस मिलेगा?",
    answer: "Yes, all listed prices on our website are fully inclusive of all applicable GST taxes. You will receive an official tax invoice containing our GSTIN number via email and WhatsApp upon order dispatch.",
    hindiAnswer: "हाँ, सभी प्रदर्शित कीमतें जीएसटी सहित हैं। डिस्पैच के समय आपको ईमेल व व्हाट्सएप पर पक्का जीएसटी बिल भेजा जाता है।",
  },
  {
    id: "faq-7",
    category: "Pricing",
    question: "Is Cash on Delivery (COD) available in my area?",
    hindiQuestion: "क्या मेरे पिनकोड पर कैश ऑन डिलीवरी (COD) उपलब्ध है?",
    answer: "Cash on Delivery is available across 19,000+ pincodes across India for order values between ₹499 and ₹5,000. You can enter your 6-digit delivery pincode on any product page to check COD eligibility instantly.",
    hindiAnswer: "भारत के 19,000 से अधिक पिनकोड पर ₹499 से ₹5,000 तक के ऑर्डर के लिए सीओडी उपलब्ध है। उत्पाद पेज पर पिनकोड डालकर तुरंत जांच सकते हैं।",
  },
  {
    id: "faq-8",
    category: "Pricing",
    question: "Do you offer any first-time customer discounts?",
    hindiQuestion: "क्या नए ग्राहकों के लिए कोई विशेष छूट उपलब्ध है?",
    answer: "Yes! Use coupon code 'HANDMADE10' at checkout to receive an instant 10% discount on your first order. We also run seasonal festive offers with code 'UTSAV15' on selected artisan hampers.",
    hindiAnswer: "जी हाँ! अपने पहले ऑर्डर पर 10% की तत्काल छूट पाने के लिए चेकआउट पर 'HANDMADE10' कूपन कोड दर्ज करें।",
  },

  // Ordering & WhatsApp
  {
    id: "faq-9",
    category: "Ordering",
    question: "How does the 'Order on WhatsApp' feature work?",
    hindiQuestion: "'व्हाट्सएप पर ऑर्डर करें' सुविधा कैसे काम करती है?",
    answer: "It's seamless and instant! When you click 'Order on WhatsApp' on any product page or inside your Cart, WhatsApp automatically opens with a pre-filled message detailing your selected items, size, quantities, delivery address, and order total. Our concierge confirms your order and shares tracking directly on WhatsApp.",
    hindiAnswer: "यह बेहद आसान है! 'Order on WhatsApp' पर क्लिक करते ही आपके चुने हुए सामान, पते और कुल मूल्य का संदेश अपने आप तैयार हो जाता है जिसे आप एक क्लिक में हमें भेज सकते हैं।",
  },
  {
    id: "faq-10",
    category: "Ordering",
    question: "Can I place an order over a direct phone call?",
    hindiQuestion: "क्या मैं सीधे फोन कॉल पर ऑर्डर दे सकता हूँ?",
    answer: "Yes, our customer care desk is active from 9:30 AM to 8:00 PM IST at +91 98765 43210. Our team can guide you through item selection and arrange direct phone assisted booking.",
    hindiAnswer: "हाँ, आप हमारे हेल्पलाइन नंबर +91 98765 43210 पर कॉल करके भी अपना ऑर्डर बुक करवा सकते हैं।",
  },
  {
    id: "faq-11",
    category: "Ordering",
    question: "Can I add a personalized handwritten gift note to my package?",
    hindiQuestion: "क्या मैं पार्सल में हाथ से लिखा शुभकामना संदेश जोड़ सकता हूँ?",
    answer: "Absolutely! During checkout or when ordering via WhatsApp, simply enter your custom message. We handwrite your words with fountain pen on seed-paper gift cards and slip it inside the gift box free of cost.",
    hindiAnswer: "बिल्कुल! चेकआउट के समय अपना संदेश लिखें। हम बीज-युक्त इको-फ्रेंडली कार्ड पर सुंदर सुलेख में लिखकर आपके पार्सल में निःशुल्क रखते हैं।",
  },
  {
    id: "faq-12",
    category: "Ordering",
    question: "Can I modify or cancel my order after placing it?",
    hindiQuestion: "क्या ऑर्डर देने के बाद मैं उसमें बदलाव या रद्द कर सकता हूँ?",
    answer: "Orders can be modified or cancelled within 12 hours of placement before safe packing commences. Simply message us on WhatsApp or call our support line with your Order ID.",
    hindiAnswer: "ऑर्डर देने के 12 घंटे के भीतर आप व्हाट्सएप पर संदेश भेजकर या कॉल करके ऑर्डर में संशोधन या रद्दीकरण कर सकते हैं।",
  },

  // Shipping & Packaging
  {
    id: "faq-13",
    category: "Shipping & Returns",
    question: "What is your standard shipping timeline across India?",
    hindiQuestion: "भारत में डिलीवरी में कितना समय लगता है?",
    answer: "Metro cities (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata) typically receive delivery in 3 to 4 business days. Tier-2 and Tier-3 cities receive delivery within 4 to 6 business days. Express air shipping is available for urgent requirements.",
    hindiAnswer: "मेट्रो शहरों में 3 से 4 कार्यदिवसों में और अन्य शहरों में 4 से 6 कार्यदिवसों में सुरक्षित डिलीवरी हो जाती है।",
  },
  {
    id: "faq-14",
    category: "Shipping & Returns",
    question: "What are your shipping charges?",
    hindiQuestion: "शिपिंग शुल्क कितना है?",
    answer: "We provide 100% FREE standard shipping across India on all prepaid and COD orders above ₹999. For orders below ₹999, a nominal flat packaging and shipping charge of ₹99 is applied.",
    hindiAnswer: "₹999 से अधिक के सभी ऑर्डरों पर पूरे भारत में मुफ्त डिलीवरी प्रदान की जाती है। इससे कम पर ₹99 का नाममात्र शुल्क लगता है।",
  },
  {
    id: "faq-15",
    category: "Shipping & Returns",
    question: "How do you protect fragile pottery, terracotta, and glass in transit?",
    hindiQuestion: "मिट्टी और कांच के नाजुक सामान को टूटने से कैसे बचाया जाता है?",
    answer: "We use a rigorous 5-layer shockproof packing standard: 1st layer honey-comb protective paper, 2nd heavy air-bubble cushioning, 3rd thick thermo-foam corner guards, 4th reinforced 7-ply corrugated outer carton, and 5th waterproof tamper-evident outer seal. Our transit damage rate is less than 0.2%.",
    hindiAnswer: "हम 5-परत वाले शॉकप्रूफ पैकेजिंग का उपयोग करते हैं जिसमें एयर-बबल, कॉर्नर गार्ड्स और 7-प्लाई मजबूत कार्टन शामिल हैं। हमारा डैमेज रेट 0.2% से भी कम है।",
  },
  {
    id: "faq-16",
    category: "Shipping & Returns",
    question: "What happens if a fragile item arrives broken or damaged?",
    hindiQuestion: "यदि कोई सामान रास्ते में टूट जाए तो क्या होगा?",
    answer: "You are 100% protected under our 'Damage-Free Guarantee'. Simply take a photo or quick unboxing video and share it with us on WhatsApp within 48 hours of delivery. We immediately dispatch a brand-new replacement at zero cost, or process a full refund—no questions asked.",
    hindiAnswer: "आपको कोई चिंता करने की आवश्यकता नहीं है। डिलीवरी के 48 घंटे के भीतर टूटे हुए सामान की फोटो हमें व्हाट्सएप करें, हम तुरंत नया सामान भेजेंगे या पूरा पैसा वापस करेंगे।",
  },
  {
    id: "faq-17",
    category: "Shipping & Returns",
    question: "What is your return and exchange policy?",
    hindiQuestion: "आपकी वापसी एवं विनिमय नीति (Return Policy) क्या है?",
    answer: "We offer a hassle-free 7-day return policy from the date of delivery. If you are not completely enchanted with your purchase, you can request an easy return or exchange through our website or WhatsApp. Items must be in unused condition in original packaging.",
    hindiAnswer: "हम 7 दिनों की आसान वापसी नीति प्रदान करते हैं। यदि आपको उत्पाद पसंद नहीं आता है, तो आप 7 दिनों के भीतर वापसी या बदलाव का अनुरोध कर सकते हैं।",
  },
  {
    id: "faq-18",
    category: "Shipping & Returns",
    question: "Do you ship internationally outside India?",
    hindiQuestion: "क्या आप भारत के बाहर अंतरराष्ट्रीय डिलीवरी करते हैं?",
    answer: "Yes, we ship via DHL Express and FedEx to over 60 countries including USA, UK, UAE, Canada, Australia, and Singapore. Please contact our WhatsApp international desk (+91 98765 43210) for custom shipping quotes and export clearance assistance.",
    hindiAnswer: "हाँ, हम अमेरिका, ब्रिटेन, यूएई, कनाडा आदि 60+ देशों में डीएचएल और फेडेक्स के जरिए अंतरराष्ट्रीय शिपिंग उपलब्ध कराते हैं।",
  },

  // Custom & Bulk Orders
  {
    id: "faq-19",
    category: "Custom Orders",
    question: "Do you take bulk orders for corporate gifting, weddings, and events?",
    hindiQuestion: "क्या आप शादी-ब्याह और कॉर्पोरेट उपहारों के लिए थोक ऑर्डर लेते हैं?",
    answer: "Yes! We specialize in custom-crafted corporate gifts, wedding favors, Diwali hampers, and luxury resort decor. We offer custom logo engraving on brass and wood, customized packaging boxes, and wholesale tiered pricing starting at 25 units.",
    hindiAnswer: "हाँ! हम शादियों के तोहफे, कॉर्पोरेट गिफ्टिंग और दिवाली हैंपर्स के विशेषज्ञ हैं। 25 या उससे अधिक की मात्रा पर विशेष थोक दरें और लोगो ब्रांडिंग उपलब्ध है।",
  },
  {
    id: "faq-20",
    category: "Custom Orders",
    question: "Can I customize the dimensions or color of a handicraft item?",
    hindiQuestion: "क्या मैं किसी हस्तशिल्प का रंग या आकार अपने अनुसार बनवा सकता हूँ?",
    answer: "Because we work directly with our master craftsmen, bespoke custom sizing and custom color glazes are possible for orders of pottery, brass sculptures, and handloom textiles. Lead times typically range from 2 to 3 weeks.",
    hindiAnswer: "जी हाँ, चूंकि हम सीधे कारीगरों के साथ काम करते हैं, आप अपनी पसंद के अनुसार विशेष आकार या रंग बनवा सकते हैं। इसमें 2 से 3 सप्ताह का समय लगता है।",
  },
  {
    id: "faq-21",
    category: "Custom Orders",
    question: "How do I request a bulk quote or sample?",
    hindiQuestion: "थोक ऑर्डर कोटेशन या सैंपल कैसे प्राप्त करें?",
    answer: "You can submit an inquiry via our 'Custom & Bulk Orders' form on the contact page or reach out directly to corporate@kalakritihandicrafts.com with your quantities and target timeline. We provide physical sample prototypes within 5 business days.",
    hindiAnswer: "आप हमारी वेबसाइट के संपर्क पेज पर थोक पूछताछ फॉर्म भर सकते हैं या हमें व्हाट्सएप कर सकते हैं। हम 5 दिनों में सैंपल उपलब्ध कराते हैं।",
  },
  {
    id: "faq-22",
    category: "General",
    question: "How can I care for my brass and blue pottery items at home?",
    hindiQuestion: "घर पर पीतल और ब्लू पॉटरी की देखभाल कैसे करें?",
    answer: "For brass: wipe regularly with a dry cotton cloth. For restoring mirror shine, use natural lemon juice with a pinch of salt or Pitambari powder, and dry immediately. For blue pottery: wipe with a damp microfiber cloth; do not scrub with metallic wire sponges.",
    hindiAnswer: "पीतल को सूखे कपड़े से पोंछें और चमक के लिए नींबू-नमक या पीताम्बरी का उपयोग करें। ब्लू पॉटरी को केवल हल्के गीले कपड़े से साफ करें।",
  },
];
