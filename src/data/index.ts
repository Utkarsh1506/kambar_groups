// Data structures for products, testimonials, and company info

export interface Product {
  id: string;
  name: string;
  category: "Food" | "Personal Care" | "Home Care" | "Snacks";
  description: string;
  ingredients: string[];
  benefits: string[];
  packaging: string[];
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UpcomingProduct {
  id: string;
  name: string;
  comingSoon: string;
  category: "Food" | "Personal Care" | "Home Care" | "Snacks";
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Soft Drinks",
    category: "Food",
    description: "Refreshing carbonated beverages for every occasion",
    ingredients: ["Carbonated Water", "Natural Flavors", "Sugar"],
    benefits: ["Refreshing", "Multiple flavors", "Perfect for parties"],
    packaging: ["200ml", "500ml", "1L"],
    image: "/product-1.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Namkeen Snacks",
    category: "Snacks",
    description: "Traditional savory snack mix with authentic taste",
    ingredients: ["Chickpeas", "Peanuts", "Spices"],
    benefits: ["Crunchy", "Authentic flavor", "Perfect tea-time snack"],
    packaging: ["100g", "250g", "500g"],
    image: "/product-2.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Glasses",
    category: "Home Care",
    description: "Premium quality glassware for home and office",
    ingredients: ["High-Quality Glass"],
    benefits: ["Durable", "Crystal clear", "Elegant design"],
    packaging: ["Set of 6", "Set of 12"],
    image: "/product-3.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Bailley Water Bottles",
    category: "Food",
    description: "Leak-proof water bottles for daily hydration",
    ingredients: ["BPA-Free Plastic", "Food Grade Material"],
    benefits: ["Leak-proof", "Durable", "Easy to carry"],
    packaging: ["500ml", "1L"],
    image: "/product-4.jpg",
    featured: true,
  },
  {
    id: "5",
    name: "Tissue Papers",
    category: "Home Care",
    description: "Ultra-soft tissue papers for daily use",
    ingredients: ["100% Virgin Pulp"],
    benefits: ["Soft", "Strong", "Absorbent"],
    packaging: ["100 sheets", "200 sheets"],
    image: "/product-5.jpg",
    featured: true,
  },
  {
    id: "6",
    name: "Facial Tissues",
    category: "Personal Care",
    description: "Gentle facial tissues for sensitive skin",
    ingredients: ["Premium Soft Pulp", "Aloe Vera Extract"],
    benefits: ["Extra soft", "Gentle on skin", "Hypoallergenic"],
    packaging: ["100 pulls", "200 pulls"],
    image: "/product-6.jpg",
    featured: true,
  },
  {
    id: "7",
    name: "Amrut Cow Ghee",
    category: "Food",
    description: "Pure cow ghee made from traditional methods",
    ingredients: ["100% Pure Cow Milk"],
    benefits: ["Rich aroma", "Pure & natural", "Traditional taste"],
    packaging: ["500ml", "1L"],
    image: "/product-7.jpg",
    featured: false,
  },
  {
    id: "8",
    name: "Maya Incense Sticks",
    category: "Home Care",
    description: "Premium fragrant incense sticks for spiritual ambiance",
    ingredients: ["Natural Herbs", "Essential Oils"],
    benefits: ["Long-lasting fragrance", "Spiritual atmosphere", "Pure ingredients"],
    packaging: ["50 sticks", "100 sticks"],
    image: "/product-8.jpg",
    featured: false,
  },
  {
    id: "9",
    name: "Eco friendly bio degradable plates",
    category: "Home Care",
    description: "Eco-friendly biodegradable plates for parties and events",
    ingredients: ["Biodegradable Material"],
    benefits: ["Eco-friendly", "Strong & sturdy", "Convenient"],
    packaging: ["Pack of 25", "Pack of 50"],
    image: "/product-9.jpg",
    featured: false,
  },
  {
    id: "10",
    name: "Natures Gold Incense Sticks",
    category: "Home Care",
    description: "Natural incense sticks with premium fragrance",
    ingredients: ["Natural Resins", "Essential Oils"],
    benefits: ["Pure fragrance", "Long-lasting", "Calming effect"],
    packaging: ["50 sticks", "100 sticks"],
    image: "/product-10.jpg",
    featured: false,
  },
  {
    id: "11",
    name: "EDW Hydrogen Infused Water",
    category: "Food",
    description: "Premium hydrogen-infused water for better health",
    ingredients: ["Pure Water", "Hydrogen"],
    benefits: ["Antioxidant-rich", "Boosts energy", "Better hydration"],
    packaging: ["500ml", "1L"],
    image: "/product-11.jpg",
    featured: false,
  },
  {
    id: "12",
    name: "Kavya Premium Dhoop Sticks",
    category: "Home Care",
    description: "Premium dhoop sticks for traditional pooja",
    ingredients: ["Natural Herbs", "Sacred Resins"],
    benefits: ["Authentic aroma", "Spiritual cleansing", "Long-lasting"],
    packaging: ["20 sticks", "50 sticks"],
    image: "/product-12.jpg",
    featured: false,
  },
  {
    id: "13",
    name: "Padmini Pure Jasmine Incense Sticks",
    category: "Home Care",
    description: "Pure jasmine fragrance incense sticks",
    ingredients: ["Jasmine Extract", "Natural Resins"],
    benefits: ["Pure jasmine scent", "Relaxing", "Long-lasting"],
    packaging: ["50 sticks", "100 sticks"],
    image: "/product-13.jpg",
    featured: false,
  },
  {
    id: "14",
    name: "Darpan Incense Sticks",
    category: "Home Care",
    description: "Premium quality incense sticks for daily use",
    ingredients: ["Natural Herbs", "Fragrant Oils"],
    benefits: ["Pleasant aroma", "Purifying", "Affordable"],
    packaging: ["50 sticks", "100 sticks"],
    image: "/product-14.jpg",
    featured: false,
  },
  {
    id: "15",
    name: "Rolec Metalised Silver Pouches",
    category: "Home Care",
    description: "Premium metalised pouches for storage",
    ingredients: ["Metalised Film", "Food Grade Material"],
    benefits: ["Airtight", "Durable", "Reusable"],
    packaging: ["Pack of 10", "Pack of 25"],
    image: "/product-15.jpg",
    featured: false,
  },
  {
    id: "16",
    name: "Aura Air Freshener",
    category: "Home Care",
    description: "Long-lasting air freshener for fresh ambiance",
    ingredients: ["Essential Oils", "Natural Fragrance"],
    benefits: ["Long-lasting scent", "Pleasant aroma", "Safe for home"],
    packaging: ["200ml", "400ml"],
    image: "/product-16.jpg",
    featured: false,
  },
  {
    id: "17",
    name: "Tej Ultra Soft Tissue Paper",
    category: "Home Care",
    description: "Ultra-soft premium tissue papers",
    ingredients: ["Virgin Pulp", "Soft Fibers"],
    benefits: ["Extra soft", "Strong", "Highly absorbent"],
    packaging: ["100 sheets", "200 sheets"],
    image: "/product-17.jpg",
    featured: false,
  },
  {
    id: "18",
    name: "Fogau Incense Sticks",
    category: "Home Care",
    description: "Traditional incense sticks with natural fragrance",
    ingredients: ["Natural Herbs", "Aromatic Oils"],
    benefits: ["Calming fragrance", "Long burn time", "Affordable"],
    packaging: ["50 sticks", "100 sticks"],
    image: "/product-18.jpg",
    featured: false,
  },
  {
    id: "19",
    name: "Woosh Dishwash",
    category: "Home Care",
    description: "Effective dish wash liquid for sparkling clean dishes",
    ingredients: ["Plant-Based Surfactants", "Lemon Extract"],
    benefits: ["Cuts grease", "Gentle on hands", "Pleasant fragrance"],
    packaging: ["250ml", "500ml", "1L"],
    image: "/product-19.jpg",
    featured: false,
  },
  {
    id: "20",
    name: "Loban Incense Sticks",
    category: "Home Care",
    description: "Traditional loban incense for spiritual ceremonies",
    ingredients: ["Pure Loban Resin", "Natural Herbs"],
    benefits: ["Sacred fragrance", "Purifying", "Traditional"],
    packaging: ["50 sticks", "100 sticks"],
    image: "/product-20.jpg",
    featured: false,
  },
  {
    id: "21",
    name: "Woosh Detergent Powder",
    category: "Home Care",
    description: "Powerful detergent powder for deep cleaning",
    ingredients: ["Active Enzymes", "Surfactants"],
    benefits: ["Deep cleaning", "Bright whites", "Fresh fragrance"],
    packaging: ["500g", "1kg", "2kg"],
    image: "/product-21.jpg",
    featured: false,
  },
  {
    id: "22",
    name: "Vold Energy Drink",
    category: "Food",
    description: "Energy drink for instant boost and refreshment",
    ingredients: ["Caffeine", "Taurine", "Vitamins"],
    benefits: ["Instant energy", "Refreshing", "Boosts alertness"],
    packaging: ["250ml", "500ml"],
    image: "/product-22.jpg",
    featured: false,
  },
  {
    id: "23",
    name: "Schweppes Tonic Water",
    category: "Food",
    description: "Premium tonic water with natural quinine",
    ingredients: ["Carbonated Water", "Quinine", "Natural Flavors"],
    benefits: ["Crisp taste", "Perfect mixer", "Refreshing"],
    packaging: ["200ml", "500ml"],
    image: "/product-23.jpg",
    featured: false,
  },
  {
    id: "24",
    name: "Black Berry Apparel Perfume",
    category: "Personal Care",
    description: "Premium apparel perfume with blackberry fragrance",
    ingredients: ["Blackberry Extract", "Essential Oils"],
    benefits: ["Long-lasting", "Fresh scent", "Premium fragrance"],
    packaging: ["100ml", "200ml"],
    image: "/product-24.jpg",
    featured: false,
  },
  {
    id: "25",
    name: "Pinkberry Apparel Perfume",
    category: "Personal Care",
    description: "Elegant perfume with sweet berry fragrance",
    ingredients: ["Berry Extract", "Floral Notes"],
    benefits: ["Sweet fragrance", "Long-lasting", "Elegant"],
    packaging: ["100ml", "200ml"],
    image: "/product-25.jpg",
    featured: false,
  },
  {
    id: "26",
    name: "Bellavita Perfume",
    category: "Personal Care",
    description: "Premium luxury perfume for special occasions",
    ingredients: ["Premium Fragrance Oils", "Natural Extracts"],
    benefits: ["Luxurious scent", "Long-lasting", "Premium quality"],
    packaging: ["50ml", "100ml"],
    image: "/product-26.jpg",
    featured: false,
  },
  {
    id: "27",
    name: "Prarthana Gold Pooja Til Oil",
    category: "Home Care",
    description: "Pure sesame oil for traditional pooja and ceremonies",
    ingredients: ["100% Pure Sesame Oil"],
    benefits: ["Traditional use", "Pure & natural", "Sacred purposes"],
    packaging: ["200ml", "500ml"],
    image: "/product-27.jpg",
    featured: false,
  },
  {
    id: "28",
    name: "Hurricane Energy Drink",
    category: "Food",
    description: "High-performance energy drink for active lifestyle",
    ingredients: ["Caffeine", "B-Vitamins", "Taurine"],
    benefits: ["Maximum energy", "Enhances performance", "Refreshing"],
    packaging: ["250ml", "500ml"],
    image: "/product-28.jpg",
    featured: false,
  },
  {
    id: "29",
    name: "Disposals",
    category: "Home Care",
    description: "Eco-friendly disposable items for convenience",
    ingredients: ["Biodegradable Material"],
    benefits: ["Convenient", "Eco-friendly", "Hygienic"],
    packaging: ["Pack of 25", "Pack of 50"],
    image: "/product-29.jpg",
    featured: false,
  },
  {
    id: "30",
    name: "Eco friendly bio degradable bowls",
    category: "Home Care",
    description: "Sturdy biodegradable bowls for events and parties",
    ingredients: ["Biodegradable Material"],
    benefits: ["Strong & sturdy", "Eco-friendly", "Convenient"],
    packaging: ["Pack of 20", "Pack of 50"],
    image: "/product-30.jpg",
    featured: false,
  },
  {
    id: "31",
    name: "Swetambari",
    category: "Personal Care",
    description: "Traditional spiritual and aromatic products",
    ingredients: ["Natural Herbs", "Sacred Ingredients"],
    benefits: ["Spiritual cleansing", "Traditional", "Pure ingredients"],
    packaging: ["50g", "100g"],
    image: "/product-31.jpg",
    featured: false,
  },
  {
    id: "32",
    name: "Radhe Krishna Cow Ghee",
    category: "Food",
    description: "Premium pure cow ghee from traditional churning",
    ingredients: ["100% Pure Cow Milk"],
    benefits: ["Rich flavor", "Traditional method", "Pure & natural"],
    packaging: ["500ml", "1L"],
    image: "/product-32.jpg",
    featured: false,
  },
  {
    id: "33",
    name: "Woosh Detergent Cake",
    category: "Home Care",
    description: "Solid detergent bar for effective hand washing",
    ingredients: ["Active Cleaning Agents", "Natural Oils"],
    benefits: ["Deep cleaning", "Long-lasting", "Economical"],
    packaging: ["200g", "400g"],
    image: "/product-33.jpg",
    featured: false,
  },
  {
    id: "34",
    name: "Radhe Krishna Cow Ghee",
    category: "Food",
    description: "Premium pure cow ghee prepared using traditional churning methods",
    ingredients: ["100% Pure Cow Milk"],
    benefits: ["Rich flavor", "Traditional method", "Pure & natural"],
    packaging: ["500ml", "1L"],
    image: "/product-34.jpg",
    featured: false,
  },
  {
    id: "35",
    name: "Eco friendly bio degradable plates",
    category: "Home Care",
    description: "Eco-friendly biodegradable plates for parties and events",
    ingredients: ["Biodegradable Material"],
    benefits: ["Eco-friendly", "Strong & sturdy", "Convenient"],
    packaging: ["Pack of 25", "Pack of 50"],
    image: "/product-35.jpg",
    featured: false,
  },
  {
    id: "36",
    name: "Three Mango Pickle",
    category: "Food",
    description: "Tangy and spicy mango pickle made with a traditional recipe",
    ingredients: ["Raw Mango", "Spices", "Mustard Oil"],
    benefits: ["Authentic taste", "Traditional recipe"],
    packaging: ["200g", "400g", "1kg"],
    image: "/product-36.jpg",
    featured: false,
  },
  {
    id: "37",
    name: "Rajnigandha Apparel Perfume",
    category: "Personal Care",
    description: "Premium apparel perfume with elegant tuberose fragrance",
    ingredients: ["Tuberose Extract", "Floral Notes"],
    benefits: ["Elegant fragrance", "Long-lasting"],
    packaging: ["100ml", "200ml"],
    image: "/product-37.jpg",
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Shivleela Groups",
    title: "Hotels & Caterer's",
    company: "Goa",
    content:
      "Kambar Groups has been our trusted supplier for quality FMCG products. Excellent products and reliable service for our catering operations.",
    rating: 5,
    image: "/testimonials/shivleela.jpg",
  },
  {
    id: "2",
    name: "S G Traders",
    title: "Distributor & Wholeseller",
    company: "Goa",
    content:
      "Outstanding product quality and consistent support. A reliable partner for growing our distribution business across Goa.",
    rating: 5,
    image: "/testimonials/sg-traders.jpg",
  },
  {
    id: "3",
    name: "Global Spirits",
    title: "Wine Store",
    company: "Goa",
    content:
      "Professional service, premium products, and dependable partnerships. Highly satisfied with the quality and reliability of Kambar Groups.",
    rating: 5,
    image: "/testimonials/global-spirits.jpg",
  },

];

export const features: Feature[] = [
  {
    id: "1",
    title: "Quality Assurance",
    description:
      "ISO & FSSAI certified manufacturing with rigorous quality control",
    icon: "Shield",
  },
  {
    id: "2",
    title: "Pan-India Distribution",
    description: "Reach every corner with our nationwide logistics network",
    icon: "Truck",
  },
  {
    id: "3",
    title: "Competitive Pricing",
    description: "Best margins for retailers and distributors in the market",
    icon: "DollarSign",
  },
  {
    id: "4",
    title: "Consistent Supply",
    description: "Never stockout with our reliable and timely deliveries",
    icon: "Package",
  },
];

export const achievements = [
  {
    label: "Years Experience",
    value: "6+",
  },
  {
    label: "Products Delivered",
    value: "50M+",
  },
  {
    label: "Retailers & Distributors",
    value: "5000+",
  },
];

export const partnerLogos = [
  "Big Basket",
  "Flipkart",
  "Amazon",
  "Grofers",
  "Reliance Retail",
];

export const certifications = ["ISO 9001", "FSSAI", "GMP", "Organic Certified"];

export const upcomingProducts: UpcomingProduct[] = [
  {
    id: "up1",
    name: "Hustle Energy Drink",
    comingSoon: "January 2026",
    category: "Food",
    image: "/up1.jpeg",
  },
  {
    id: "up2",
    name: "Budweiser 0.0",
    comingSoon: "January 2026",
    category: "Food",
    image: "/up2.jpeg",
  },
  {
    id: "up3",
    name: "Lay's",
    comingSoon: "February 2026",
    category: "Snacks",
    image: "/up3.jpeg",
  },
  {
    id: "up4",
    name: "Parle Agro",
    comingSoon: "February 2026",
    category: "Food",
    image: "/up4.jpeg",
  },
  {
    id: "up5",
    name: "PepsiCo Drinks",
    comingSoon: "January 2026",
    category: "Food",
    image: "/up5.jpeg",
  },
  {
    id: "up6",
    name: "Amul Dairy Products",
    comingSoon: "January 2026",
    category: "Food",
    image: "/up6.jpeg",
  },
  {
    id: "up7",
    name: "Badshah Masale",
    comingSoon: "February 2026",
    category: "Food",
    image: "/up7.jpeg",
  },
  {
    id: "up8",
    name: "Nestle Products",
    comingSoon: "February 2026",
    category: "Food",
    image: "/up8.jpeg",
  },
  {
    id: "up9",
    name: "Jimmy's Cocktails",
    comingSoon: "January 2026",
    category: "Food",
    image: "/up9.jpeg",
  },
  {
    id: "up10",
    name: "Naturo Products",
    comingSoon: "January 2026",
    category: "Food",
    image: "/up10.jpeg",
  },
  {
    id: "up11",
    name: "Campa Drinks",
    comingSoon: "February 2026",
    category: "Food",
    image: "/up11.jpeg",
  },
];

// Company Information
export interface Company {
  id: string;
  name: string;
  type: string;
  establishedYear: number;
  description: string;
  vision: string[];
  operations: string[];
  products: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface KambarGroupInfo {
  foundedYear: number;
  companies: Company[];
  teamMembers: TeamMember[];
  futureExpansion: string;
}

export const kambarGroupInfo: KambarGroupInfo = {
  foundedYear: 2018,
  companies: [
    {
      id: "vayupro",
      name: "Vayupro Enterprises",
      type: "Authorized Distributor & Superstockist (C & F) for FMCG",
      establishedYear: 2018,
      description:
        "Vayupro Enterprises is a trusted distributor and stockist catering to diverse retail and event needs across Goa. We supply a wide range of FMCG, beverages, and essential consumer goods with efficient delivery and personalized service.",
      vision: [
        "To provide seamless distribution of everyday essentials and beverages.",
        "To build long-term relationships with retailers and event organizers.",
        "To expand delivery and storage capacity for faster coverage.",
        "To ensure 100% satisfaction through quality service and consistency.",
      ],
      operations: [
        "Supplying goods based on store and event requirements.",
        "Direct delivery through company vehicles.",
        "Managing stock for bulk orders and wholesale clients.",
        "Serving both B2B (retailers, hotels, temples, events) and B2C customers.",
      ],
      products: [
        "Beverages: Coca-Cola, packaged water, energy drinks.",
        "FMCG & Groceries: Rice, Cereals, papad, pickle, snacks, namkeen, biscuits, chocolates.",
        "Hygiene & Personal Care: Soap, perfumes, tissue.",
        "Event & Utility Items: Bear glass, puja items, agarbatti, dhoop.",
        "Everyday Essentials: Household and convenience products.",
      ],
    },
    {
      id: "vsn",
      name: "VSN Enterprises",
      type: "Distributor of FMCG Products",
      establishedYear: 2018,
      description:
        "VSN Enterprises is a professional distributor of FMCG products, serving retailers and wholesalers with a diverse product portfolio and seamless distribution network.",
      vision: [
        "To deliver quality FMCG products to every retail outlet.",
        "To establish strong partnerships with retailers and wholesalers.",
        "To maintain efficient inventory management and supply chain.",
        "To achieve customer excellence through timely and reliable service.",
      ],
      operations: [
        "Distribution of FMCG products across multiple retail channels.",
        "Inventory management and stock optimization.",
        "Direct delivery through dedicated logistics team.",
        "Supporting both traditional and modern trade retailers.",
      ],
      products: [
        "Beverages: Soft drinks, packaged water, energy drinks.",
        "FMCG & Groceries: Rice, pulses, spices, condiments, snacks.",
        "Hygiene & Personal Care: Soaps, shampoos, personal care items.",
        "Home Care: Detergents, cleaning products, home essentials.",
        "Specialty Items: Agarbatti, incense, puja essentials.",
      ],
    },
    {
      id: "sandeep",
      name: "Sandeep Enterprises",
      type: "Distributor & Wholeseller of FMCG Products",
      establishedYear: 2018,
      description:
        "Sandeep Enterprises specializes in the distribution and wholesale of premium FMCG products with a focus on customer satisfaction, reliable delivery, and building lasting business relationships.",
      vision: [
        "To provide premium quality FMCG products to retailers.",
        "To build long-term partnerships based on trust and quality.",
        "To expand market coverage with efficient distribution.",
        "To ensure customer satisfaction through consistent service.",
      ],
      operations: [
        "Supply of quality FMCG products to retail outlets.",
        "Efficient warehouse and inventory management.",
        "Professional delivery and logistics support.",
        "Customer support and order fulfillment.",
      ],
      products: [
        "Beverages: Soft drinks, juices, packaged water, energy drinks.",
        "Groceries & Staples: Rice, flour, cereals, lentils, cooking essentials.",
        "Personal Care: Soaps, perfumes, deodorants, toiletries.",
        "Home Care: Dishwash, detergents, floor cleaners, household products.",
        "Specialty Products: Incense, fragrant oils, puja items, utility products.",
      ],
    },
  ],
  teamMembers: [
    {
      id: "pingal",
      name: "Pingal Sampatkumar Kambar",
      position: "Chairman & Founder",
      image: "/pingal-ceo.jpeg",
    },
    {
      id: "sampat",
      name: "Sampatkumar B. Kambar",
      position: "Managing Director",
      image: "/sampatkumar-md.jpeg",
    },
  ],
  futureExpansion:
    "Kambar Groups will be expanding into exporter products very soon, bringing high-quality FMCG goods to international markets.",
};
