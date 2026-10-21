export interface Artisan {
  id: string;
  name: string;
  hindiName: string;
  craft: string;
  hindiCraft: string;
  village: string;
  state: string;
  experienceYears: number;
  photo: string;
  workshopPhoto: string;
  quote: string;
  hindiQuote: string;
  bio: string;
  hindiBio: string;
  awards?: string;
  featuredProductSlug?: string;
}

export const artisans: Artisan[] = [
  {
    id: "artisan-ramswaroop",
    name: "Master Ramswaroop Prajapat",
    hindiName: "उस्ताद रामस्वरूप प्रजापत",
    craft: "Jaipur Blue Pottery & Terracotta",
    hindiCraft: "जयपुर ब्लू पॉटरी एवं टेराकोटा",
    village: "Kot Jewar, near Jaipur",
    state: "Rajasthan",
    experienceYears: 42,
    photo: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    workshopPhoto: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    quote: "Unlike clay pottery, Blue Pottery uses quartz stone powder and gum. It never cracks or chips, carrying the turquoise sky of Rajasthan forever.",
    hindiQuote: "ब्लू पॉटरी केवल मिट्टी नहीं, बल्कि क्वार्ट्ज और पत्थरों का अमृत है। यह सदियों तक अपनी चमक नहीं खोती।",
    bio: "Ramswaroop-ji started working alongside his grandfather when he was 12. Over four decades, he has trained more than 85 younger potters in his village, preserving the low-temperature wood-fired glazing process that gives Jaipur Blue Pottery its luminous cobalt hues.",
    hindiBio: "रामस्वरूप जी ने 12 वर्ष की आयु में अपने दादाजी से यह विधा सीखी थी। उन्होंने 85 से अधिक युवाओं को प्रशिक्षित कर इस दुर्लभ कला को पुनर्जीवित रखा है।",
    awards: "Rajasthan State Master Craftsman Award (2014), UNESCO Craft Seal of Excellence",
    featuredProductSlug: "royal-jaipur-blue-pottery-wall-plate",
  },
  {
    id: "artisan-kamla",
    name: "Kamla Devi Chhipa",
    hindiName: "कमला देवी छीपा",
    craft: "Dabu & Bagru Hand Block Printing",
    hindiCraft: "दाबू एवं बगरू हस्त ब्लॉक छपाई",
    village: "Bagru",
    state: "Rajasthan",
    experienceYears: 28,
    photo: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80",
    workshopPhoto: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    quote: "The black dye comes from rusted iron horseshoe scraps and jaggery; the yellow from dried pomegranate rinds. Nature gives us every single color.",
    hindiQuote: "काला रंग लोहे के बुरादे और गुड़ से, पीला रंग अनार के छिलकों से मिलता है। प्रकृति ही हमारा सबसे बड़ा रंग-मंच है।",
    bio: "Belonging to the traditional Chhipa printing lineage of Bagru, Kamla Devi leads an all-women cooperative of 34 women who prepare natural mud-resist paste (dabu) and stamp handloom cottons under the warm winter sun.",
    hindiBio: "पारंपरिक छीपा समुदाय से ताल्लुक रखने वाली कमला देवी 34 ग्रामीण महिलाओं के स्वयं-सहायता समूह का नेतृत्व करती हैं।",
    awards: "All India Handicrafts Board Merit Award",
    featuredProductSlug: "bagru-mud-resist-dabu-table-runner",
  },
  {
    id: "artisan-chirag",
    name: "Chirag Mistry",
    hindiName: "चिराग मिस्त्री",
    craft: "Heritage Wood Carving & Brass Inlay",
    hindiCraft: "काष्ठ नक्काशी एवं पीतल तारकशी",
    village: "Pilkhuwa & Saharanpur",
    state: "Uttar Pradesh",
    experienceYears: 31,
    photo: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    workshopPhoto: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    quote: "A machine cuts in straight lines; a chisel guided by human breath curves around the living heartwood grain.",
    hindiQuote: "मशीन सिर्फ सीधी रेखाएं काटती है, जबकि छेनी और हथौड़ी लकड़ी की आत्मा से बात करते हैं।",
    bio: "Chirag specializes in delicate 'Tarkashi' (fine brass wire inlaid into cured sheesham wood) and lattice jharokha screens. His family has carved decorative doors and heritage furniture for royal palaces for four generations.",
    hindiBio: "चिराग जी बारीक तारकशी और मुगलिया झरोखा नक्काशी के विशेषज्ञ हैं। चार पीढ़ियों से उनका परिवार राजमहलों और हवेलियों में काष्ठ कार्य करता आया है।",
    awards: "National Craft Conclave Gold Medalist",
    featuredProductSlug: "saharanpur-hand-carved-sheesham-brass-box",
  },
  {
    id: "artisan-suresh",
    name: "Suresh Sahu",
    hindiName: "सुरेश साहू",
    craft: "Lost-Wax Dhokra Bell Metal Casting",
    hindiCraft: "पारंपरिक ढोकरा कांस्य शिल्प",
    village: "Kondagaon",
    state: "Chhattisgarh",
    experienceYears: 36,
    photo: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
    workshopPhoto: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1200&q=80",
    quote: "Every single piece has its mold broken after firing. There are never two identical Dhokra idols in this entire world.",
    hindiQuote: "ढोकरा में मूर्ति निकलते ही मोम का सांचा टूट जाता है। पूरी दुनिया में कोई भी दो ढोकरा मूर्तियां बिल्कुल एक जैसी नहीं हो सकतीं।",
    bio: "Practicing the 4,000-year-old non-ferrous metal casting method traced back to the Mohenjo-Daro Dancing Girl, Suresh crafts primordial tribal idols, peacocks, and urlis with beeswax threads and river clay molds.",
    hindiBio: "सिंधु घाटी सभ्यता के नृत्य करती युवती के समय से चली आ रही ढोकरा कला को सुरेश जी आज भी शुद्ध प्राकृतिक मोम और नदी की मिट्टी से ढालते हैं।",
    awards: "Shilp Guru Nominee & President Award Winner",
    featuredProductSlug: "dokra-lost-wax-cast-nataraja-idol",
  },
];
