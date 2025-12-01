import { ContactInfo, NavItem, Product } from "./types";

export const CONTACT_INFO: ContactInfo = {
  address: "Ganga Nagar, Mahananda Para, Ward No. 5",
  city: "Siliguri",
  state: "West Bengal",
  zip: "734005",
  phone: "919434308958",
  displayPhone: "+91 94343 08958",
  // Updated to point exactly to 26.70445006858671, 88.41120717507069 with Manish Tea Traders marker
  mapEmbedUrl: "https://maps.google.com/maps?q=Manish+Tea+Traders,26.70445006858671,88.41120717507069&hl=en&z=17&output=embed"
};

export const BUSINESS_DETAILS = {
  gst: "19AHJPR0891G1ZX",
  proprietor: "Jaleshwar Ray",
  established: "2004",
  natureOfBusiness: "Wholesaler / Distributor",
  employees: "Upto 10 People",
  paymentMode: "Cash, Credit Card, DD, Cheque, UPI",
  shipmentMode: "By Road (All India)"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#contact" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Organic CTC Tea - Premium Quality",
    category: "CTC",
    description: "Multiple grades available: BP, OF, PD, BOPSM, DUST, BOP, BOPF. Strong, robust flavor with consistent taste. Perfect for wholesalers and retailers.",
    longDescription: "Organic CTC Tea – Premium Quality, Multiple Grades. Carefully sourced and processed, our CTC (Crush, Tear, Curl) tea delivers a strong, brisk, and aromatic cup – perfect for daily consumption, bulk supply, and retail purposes. Made from 100% natural leaves, free from artificial colors and additives. Suitable for tea bag manufacturers, wholesalers, cafes, hotels, and retail packs. Hygienic packaging ensures long-lasting aroma and freshness.",
    priceRange: "₹150/kg",
    imageUrl: "/images/products/organic_ctc_tea_user.jpg",
    imageAlt: "Organic CTC Tea Premium Quality Granules",
    badge: "Best Seller",
    sku: "CTC100400",
    moq: "100 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "India",
      "Grades Available": "BP, OF, PD, BOPSM, DUST, BOP, BOPF",
      "Type": "Organic CTC Granules",
      "Packaging": "26kg - 40kg bags",
      "Delivery Time": "Same Day",
      "Shelf Life": "Long-lasting with proper storage"
    }
  },
  {
    id: "p2",
    name: "Sabnam Gold Tea",
    category: "Blend",
    description: "3kg Jar Packed Premium Blend. Strong, flavorful tea made from carefully sourced leaves. Perfect for homes, offices, and cafes.",
    longDescription: "Premium Blended Tea packed in a convenient 3kg jar. Made from carefully selected, high-quality tea leaves, this blend delivers a smooth, aromatic, and robust flavor in every cup. Ideal for homes, offices, cafes, restaurants, and catering services. Airtight jar maintains aroma and taste. 100% natural and hygienically packed with no artificial flavors or additives.",
    priceRange: "Contact for Price",
    imageUrl: "/images/products/kk2.jpg",
    imageAlt: "Sabnam Gold Premium Blended Tea Jar",
    badge: "Premium",
    sku: "BLEND-SAB-001",
    moq: "3 kg (1 Jar)",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Blended Tea",
      "Packaging": "3kg Airtight Jar",
      "Origin": "India",
      "Liquor": "Smooth & Robust",
      "Usage": "Homes, Offices, Cafes",
      "Shelf Life": "Long-lasting freshness"
    }
  },
  {
    id: "p3",
    name: "Begam Gold Premium Blended Tea",
    category: "Blend",
    description: "3kg Jar Pack. Rich and dark liquor tea with balanced, smooth, and brisk flavor. Ideal for families who love strong chai.",
    longDescription: "Begam Gold Premium Blended Tea serves tea lovers who prefer a dark, bold cup. Made from carefully selected, high-quality tea leaves, this blend delivers a smooth, aromatic, and robust flavor. Sourced primarily from select Dooars gardens known for their heavy liquor. Airtight 3kg jar maintains aroma and taste. Perfect for homes, offices, cafes, restaurants, and bulk catering. 100% natural with no artificial flavors or additives.",
    priceRange: "Contact for Price",
    imageUrl: "/images/products/jjj.jpg",
    imageAlt: "Begam Gold Premium Blended Tea",
    sku: "BLEND-BEG-001",
    moq: "3 kg (1 Jar)",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Premium Blended Tea",
      "Packaging": "3kg Airtight Jar",
      "Origin": "Dooars, India",
      "Liquor": "Dark Red, Smooth & Brisk",
      "Usage": "Homes, Offices, Cafes, Restaurants",
      "Shelf Life": "Long-lasting freshness"
    }
  },
  {
    id: "p4",
    name: "Loose Tea Leaves",
    category: "Loose Tea",
    description: "Broken Loose Tea Leaves. Strong, robust, and aromatic liquor. Perfect for daily consumption and bulk blending.",
    longDescription: "Premium quality Broken Loose Tea Leaves offering strong, robust flavor. Hygienically packed for prolonged freshness. Suitable for mass-market blends, instant tea, and daily consumption. Carefully cleaned and graded for premium quality. Ideal for cafes, restaurants, tea sellers, wholesalers, and bulk buyers across India.",
    priceRange: "₹190/kg",
    imageUrl: "/images/products/loose_tea_leaves_user.jpg",
    imageAlt: "Broken Loose Tea Leaves",
    sku: "LOOSE-001",
    moq: "30 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Broken Loose Tea",
      "Form": "Leaves",
      "Origin": "India",
      "Liquor": "Strong & Aromatic",
      "Packaging": "Bulk bags",
      "Usage": "Daily consumption, Blending"
    }
  },
  {
    id: "p5",
    name: "Nepal Green Tea",
    category: "Green Tea",
    description: "Natural Plain Nepal Green Tea. Authentic tea with distinct muscatel aroma and brisk liquor. Multiple grades available.",
    longDescription: "Premium Nepal Tea sourced from pristine high-altitude tea gardens of Nepal. Known for its unique flavor, rich aroma, and smooth taste. Handpicked and carefully processed to preserve freshness and quality. Grades available: TGBOP, STGFOP, FOP, GFOP, FTGFOP, BOP, BOPF. 100% natural and unblended, free from artificial colors or additives. Hygienically packed to ensure long-lasting flavor and aroma. Perfect for wholesalers, retailers, cafes, and tea connoisseurs.",
    priceRange: "₹350/kg",
    imageUrl: "/images/products/nepal.jpg",
    imageAlt: "Natural Nepal Green Tea Leaves",
    badge: "Premium",
    sku: "GREEN-NEP-001",
    moq: "15 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Loose Leaf / Orthodox / Whole Tea",
      "Origin": "Nepal",
      "Grades": "TGBOP, STGFOP, FOP, GFOP, BOP, BOPF",
      "Packaging": "Poly or jute bags (15-30kg)",
      "Shelf Life": "24 months",
      "Aroma": "Distinct Muscatel"
    }
  },
  {
    id: "p6",
    name: "Dooars Tea Dust",
    category: "Tea Dust",
    description: "Premium Quality Tea Dust - D1, CD, PD, OF grades. Strong, brisk flavor with quick infusion. Ideal for tea bags and bulk blending.",
    longDescription: "Premium Quality Tea Dust carefully sourced and processed. Delivers a strong, brisk flavor and quick infusion, making it ideal for tea bags, bulk blending, and retail purposes. 100% natural and unblended. Carefully cleaned and graded for premium quality. Hygienically packed for prolonged freshness. Suitable for mass-market blends, instant tea, and daily consumption. Trusted by wholesalers and bulk buyers across India.",
    priceRange: "₹100/kg",
    imageUrl: "/images/products/dooars_tea_dust_user.jpg",
    imageAlt: "Dooars Tea Dust Premium Quality",
    sku: "DUST-DOO-001",
    moq: "50 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Loose / Bulk Tea Dust",
      "Grades": "D1, CD, PD, OF",
      "Origin": "Dooars, India",
      "Liquor": "Strong, Robust & Aromatic",
      "Packaging": "Poly or jute bags",
      "Usage": "Tea bags, Blending, Retail"
    }
  },
  {
    id: "p7",
    name: "Darjeeling Green Tea",
    category: "Green Tea",
    description: "Premium Darjeeling Green Tea. Exquisite flavor and aroma from the finest Darjeeling gardens. Perfect for tea connoisseurs.",
    longDescription: "Premium Darjeeling Green Tea sourced from the world-renowned tea gardens of Darjeeling. Known for its exquisite flavor, delicate aroma, and light, refreshing taste. Carefully handpicked and processed to preserve the natural antioxidants and health benefits. Ideal for health-conscious consumers and tea enthusiasts. Available in bulk packaging for wholesalers, retailers, and export.",
    priceRange: "₹800/kg",
    imageUrl: "/images/products/darjeeling_green_tea_user.jpg",
    imageAlt: "Premium Darjeeling Green Tea",
    badge: "Premium",
    sku: "GREEN-DAR-001",
    moq: "18 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Green Tea",
      "Origin": "Darjeeling, India",
      "Packaging": "18kg, 22kg, 23kg bags",
      "Liquor": "Light, Refreshing",
      "Aroma": "Delicate & Exquisite",
      "Health Benefits": "Rich in Antioxidants"
    }
  },
  {
    id: "p8",
    name: "Orthodox Tea",
    category: "Orthodox",
    description: "Premium Orthodox Leaf Tea. Traditional processing method preserving whole leaves. Rich, complex flavor profile.",
    longDescription: "Premium Orthodox Tea processed using traditional methods that preserve the whole leaf structure. This results in a rich, complex flavor profile with multiple infusions possible from the same leaves. Carefully sourced from select gardens and hygienically packed in paper bags. Ideal for tea connoisseurs who appreciate the art of traditional tea making. Perfect for specialty tea shops, cafes, and export markets.",
    priceRange: "₹700/kg",
    imageUrl: "/images/products/orthodox.jpg",
    imageAlt: "Premium Orthodox Leaf Tea",
    sku: "ORTH-001",
    moq: "25 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Orthodox Whole Leaf",
      "Form": "Leaves",
      "Origin": "India",
      "Packaging": "Paper Bag",
      "Liquor": "Rich & Complex",
      "Processing": "Traditional Orthodox Method"
    }
  },
  {
    id: "p9",
    name: "Rajni Gold",
    category: "Blend",
    description: "Our signature proprietary blend. Combines strength of CTC dust with flavor of leaf tea. Perfect for kirana stores and supermarkets.",
    longDescription: "Rajni Gold is our signature proprietary blend designed for the mass market. It combines the strength of CTC dust with the flavor of leaf tea to create a perfect cup of chai that is both strong and aromatic. This blend is specifically formulated to maintain consistency throughout the year, making it a favorite for kirana stores and supermarkets. Trusted by retailers for great margins and consistent quality.",
    priceRange: "Contact for Price",
    imageUrl: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    imageAlt: "Rajni Gold Signature Blend",
    badge: "Signature",
    sku: "BLEND-RAJ-001",
    moq: "50 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Blended CTC",
      "Form": "Granules",
      "Liquor": "Strong & Bright",
      "Usage": "Household / Retail",
      "Packaging": "Retail Packs / Loose Bags",
      "Consistency": "Year-round"
    }
  }
];