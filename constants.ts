import { ContactInfo, NavItem, Product, BlogPost, LocationPage } from "./types";

export const CONTACT_INFO: ContactInfo = {
  address: "Ganga Nagar, Mahananda Para, Ward No. 5",
  city: "Siliguri",
  state: "West Bengal",
  zip: "734005",
  phone: "919434308958",
  displayPhone: "+91 94343 08958",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.858273678037!2d88.42175631500656!3d26.71714498321045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e446c82a37706d%3A0x7c7d7455b850020!2sManish%20Tea%20Traders!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb7JBW8K5cD8gShxcT33"
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
  { label: "Home", href: "home", type: 'view' },
  { label: "About Us", href: "home#about", type: 'link' },
  { label: "Products", href: "home#products", type: 'link' },
  { label: "Locations", href: "locations", type: 'view', viewName: 'locations' },
  { label: "Blog", href: "blog", type: 'view', viewName: 'blog' },
  { label: "Pricing", href: "home#contact", type: 'link' },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Black CTC Tea (All Grades)",
    category: "CTC",
    description: "Available in OF, BP, BOP, PD, RD and Dust. Strong liquor, perfect for daily consumption and blending.",
    longDescription: "Sourced directly from the fertile plains of the Dooars and Assam, our Black CTC Tea is the backbone of the Indian tea market. We don't just sell 'tea'; we provide specific grades tailored to your business needs. Whether you need the large, flavorful grains of BP (Broken Pekoe) for household packets or the rapid-infusing OF (Orange Fannings) for tea stalls that demand instant color, we have it all. Our stock is vacuum-tested for moisture to ensure it stays crisp and fresh. This is strictly non-blended, garden-fresh stock, ideal for wholesalers who want to create their own proprietary blends.",
    priceRange: "₹130.00 – ₹320.00",
    imageUrl: "/images/products/organic_ctc_tea_user.jpg",
    imageAlt: "CTC Tea Wholesale Supplier India BP OF Grades",
    badge: "Best Seller",
    sku: "CTC-BLK-001",
    moq: "30 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "Assam / Dooars",
      "Grade": "OF, BP, BOP, PD, RD",
      "Type": "CTC Granules",
      "Packaging": "Jute/PP Sack (26kg - 35kg)",
      "Shelf Life": "12 Months"
    }
  },
  {
    id: "p2",
    name: "Rajni Gold",
    category: "Blend",
    description: "A premium CTC blend offering consistent taste and great margin for retailers.",
    longDescription: "Rajni Gold is our flagship proprietary blend, crafted specifically for the competitive retail market. We understand that your customers want the same taste every month, which is why we adhere to a strict blending formula using 60% Assam BP for malty flavor and 40% Dooars OF for rich color. It strikes the perfect balance—strong enough for the morning 'kadak chai' lover but smooth enough to not taste bitter. Retailers love Rajni Gold because it offers the premium quality of top brands at a price that allows for excellent profit margins.",
    priceRange: "Contact for Price",
    imageUrl: "/images/products/rajni_gold.png",
    imageAlt: "Rajni Gold Premium CTC Blend Wholesale Supplier India",
    badge: "Premium",
    sku: "BLEND-RAJ-001",
    moq: "50 kg (Mixed Packs)",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Blended CTC",
      "Form": "Granules",
      "Liquor": "Strong & Bright",
      "Usage": "Household / Retail",
      "Packaging": "Retail Packs / Loose Bags"
    }
  },
  {
    id: "p3",
    name: "Begam Gold",
    category: "Blend",
    description: "Rich and dark liquor tea sourced from the finest gardens in Dooars.",
    longDescription: "Begam Gold is designed for the segment of the market that believes 'Tea must look like Tea'. Sourced primarily from select heavy-liquoring gardens in the Dooars region, this blend produces a deep, dark red cup (Lal Ghoda style) the moment milk is added. It is exceptionally popular in regions like Bihar and UP where tea is boiled with milk for extended periods. Begam Gold holds its strength and color even after rigorous boiling, making it a favorite among families who enjoy a hearty, full-bodied cup.",
    priceRange: "Contact for Price",
    imageUrl: "/images/products/jjj.jpg",
    imageAlt: "Begam Gold Strong Liquor Tea Wholesale Siliguri",
    sku: "BLEND-BEG-001",
    moq: "30 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Strong CTC Blend",
      "Origin": "Dooars",
      "Liquor": "Dark Red",
      "Packaging": "Bulk / Retail Packs"
    }
  },
  {
    id: "p4",
    name: "Saavan Tea",
    category: "CTC",
    description: "Premium CTC tea known for its bold colour and freshness.",
    longDescription: "Saavan Tea captures the spirited essence of the monsoon harvest. Plucked during the peak rainy season when the bushes are lush and full of life, this tea is characterized by its 'Zest' and 'Briskness'. It offers a unique, refreshing grassy note that wakes up the palate. The granules are clean, black, and uniform, ensuring your customers see quality the moment they open the packet. It is an excellent choice for markets that prefer a fresher, lighter cup over the heavy, muddy varietals.",
    priceRange: "Contact for Price",
    imageUrl: "/images/products/savaan_tea.png",
    imageAlt: "Saavan Fresh CTC Tea Wholesale Supplier West Bengal",
    badge: "New",
    sku: "CTC-SAV-001",
    moq: "30 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Garden Fresh CTC",
      "Grade": "BOP L",
      "Aroma": "Fresh / Grassy",
      "Packaging": "Paper Sacks / Poly Pouches"
    }
  },
  {
    id: "p5",
    name: "Priya Gold",
    category: "Blend",
    description: "An economical yet flavorful blend suitable for tea stalls and daily use.",
    longDescription: "Priya Gold is engineered for high yield and commercial viability. We created this blend specifically for Tea Stalls (Chaiwalas), Canteens, and Offices where the cost per cup matters most. It is a robust mix of medium-sized granules and high-strength dust that extracts quickly and provides more cups per kilogram than standard blends. Despite its economical price point, it does not compromise on the 'kick' required to satisfy a tired customer. It is the workhorse of our catalog.",
    priceRange: "₹130 - ₹220 / kg",
    imageUrl: "/images/products/priya_gold.png",
    imageAlt: "Priya Gold Economy Tea Blend Wholesale Price India",
    sku: "BLEND-PRI-001",
    moq: "50 kg",
    stockStatus: "In Stock",
    specifications: {
      "Target": "Tea Stalls / Canteens",
      "Liquor": "Heavy / Thick",
      "Yield": "High Cuppage",
      "Price Segment": "Economy"
    }
  },
  {
    id: "p6",
    name: "Sabnam Gold",
    category: "Blend",
    description: "Balanced strong blend favored by tea shops for its quick color and strong taste.",
    longDescription: "Sabnam Gold is our 'Hotel Special' blend that sits perfectly between premium quality and commercial strength. It is favored by mid-range restaurants and cafes that want to serve a quality cup without the premium price tag. The blend features a higher percentage of fine fannings which allows for rapid color release, saving fuel and time in commercial kitchens. It produces a golden-brown liquor that looks appetizing and tastes smooth, lacking the harsh bitterness often found in cheaper hotel blends.",
    priceRange: "Contact for Price",
    imageUrl: "/images/products/kk2.jpg",
    imageAlt: "Sabnam Gold Hotel Special Tea Wholesale Supplier",
    sku: "BLEND-SAB-001",
    moq: "30 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Hotel Blend",
      "Color": "Golden Brown",
      "Strength": "Medium-Strong",
      "Packaging": "Loose / Bulk"
    }
  },
  {
    id: "p7",
    name: "Nepal High Grown",
    category: "Orthodox",
    description: "Light flavour, smooth taste, and premium quality from Himalayan gardens.",
    longDescription: "Sourced from the misty, high-altitude slopes of Ilam in Eastern Nepal, this tea is the best-kept secret in the tea world. It shares the same geographical DNA as Darjeeling tea but comes at a fraction of the cost. The leaves are twisted and wiry, brewing into a pale amber liquor with distinct floral and fruity notes. It is an exceptional choice for retailers looking to introduce a 'Premium Leaf Tea' to their customers who appreciate aroma over strength. It drinks beautifully without milk.",
    priceRange: "₹350 - ₹600 / kg",
    imageUrl: "/images/products/nepal.jpg",
    imageAlt: "Nepal High Grown Orthodox Tea Wholesale Supplier India",
    sku: "ORTH-NEP-001",
    moq: "10 kg",
    stockStatus: "Limited Stock",
    specifications: {
      "Origin": "Nepal (Ilam)",
      "Type": "Orthodox Leaf",
      "Flavor": "Floral / Fruity",
      "Leaf Grade": "SFTGFOP1"
    }
  },
  {
    id: "p8",
    name: "Tea Dust (Hotel Special)",
    category: "Dust",
    description: "Super strong dust grade tea. Brews quickly with strong liquor.",
    longDescription: "This is raw power in a cup. Our Hotel Special Dust is not 'leftover' powder; it is premium Primary Dust (PD) graded tea designed for maximum extraction. Upon contact with boiling water, it explodes with color and strength. It is specifically curated for the roadside tea stall market and railway canteens where 'Kadak Chai' is the only requirement. It cuts through the thickest milk and strongest ginger/cardamom spices to ensure the tea taste is never lost.",
    priceRange: "₹120 - ₹180 / kg",
    imageUrl: "/images/products/dooars_tea_dust_user.jpg",
    imageAlt: "Strong Tea Dust Wholesale Supplier India for Hotels",
    sku: "DUST-HOT-001",
    moq: "50 kg",
    stockStatus: "In Stock",
    specifications: {
      "Grade": "Primary Dust / PD",
      "Infusion": "Rapid",
      "Liquor Strength": "Very High",
      "Usage": "Commercial / Tea Bags"
    }
  },
  {
    id: "p9",
    name: "Darjeeling Orthodox",
    category: "Orthodox",
    description: "Premium leaf tea with the signature muscatel flavor for refined taste.",
    longDescription: "The Champagne of Teas. Sourced from GI-tagged gardens in the Darjeeling district, our Orthodox collection caters to the connoisseur. We offer specific seasonal flushes: the light, floral First Flush for spring lovers, and the rounded, muscatel Second Flush for the classic experience. This is whole-leaf luxury, perfect for gifting, high-end cafes, or export to markets that value aroma above all else. A cup of this tea is an experience, not just a beverage.",
    priceRange: "₹400 - ₹1200 / kg",
    imageUrl: "/images/products/orthodox.jpg",
    imageAlt: "Darjeeling Orthodox Tea Second Flush Wholesale Supplier",
    sku: "ORTH-DARJ-001",
    moq: "5 kg",
    stockStatus: "Seasonal",
    specifications: {
      "Origin": "Darjeeling",
      "Flush": "Second Flush (Summer)",
      "Aroma": "Muscatel",
      "Brewing": "3-4 mins, No Milk"
    }
  },
  {
    id: "p10",
    name: "Assam Granules Tea",
    category: "CTC",
    description: "Rich color, strong aroma, ideal for hotels & tea stalls.",
    longDescription: "Straight from the Brahmaputra valley, our Assam Granules define 'Boldness'. Unlike Dooars tea which is lighter, this Assam stock has a heavy body and a deep malty kick. It produces a rich, reddish-brown liquor that looks stunning in a glass. It is ideal for morning breakfast blends or for customers who complain that their current tea tastes 'watery'. This tea has the body to hold up sugar and milk perfectly.",
    priceRange: "₹180 - ₹280 / kg",
    imageUrl: "/images/products/assam.png",
    imageAlt: "Assam Granules CTC Tea Wholesale Supplier India",
    sku: "CTC-ASM-001",
    moq: "30 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "Assam",
      "Grade": "BP / BOP",
      "Character": "Malty & Bold",
      "Best For": "Milk Tea"
    }
  },
  {
    id: "p11",
    name: "Private Label Packaging",
    category: "Packaging",
    description: "Stand-up pouches, paper boxes, tin packs - ready for your brand.",
    longDescription: "Launch your own tea brand without investing millions in a factory. We provide a complete end-to-end Private Label solution. You simply choose the blend (e.g., our Rajni Gold) and the packaging style (Stand-up pouch, Box, or Jar). We handle the printing, filling, and sealing. You receive a finished, retail-ready product delivered to your warehouse. We support low MOQs to help startups test the market before scaling up.",
    priceRange: "Enquire Now",
    imageUrl: "/images/products/private_label.png",
    imageAlt: "Private Label Tea Packaging Service India Custom Pouches",
    sku: "SVC-PKG-001",
    moq: "1000 Packets",
    stockStatus: "Made to Order",
    specifications: {
      "Types": "Pouches / Boxes / Jars",
      "Sizes": "100g, 250g, 500g, 1kg",
      "Design": "Custom Printable",
      "Lead Time": "15-20 Days"
    }
  },
  {
    id: "p12",
    name: "Tea Bags (Bulk)",
    category: "Tea Bags",
    description: "Customisable tea bags for hotels, brands & corporates.",
    longDescription: "Convenience meets quality. We supply high-grade tea bags in bulk for hotels, hospitals, and corporate offices. Unlike standard market tea bags that use leftover dust, we fill ours with quality fannings that ensure a proper brew. We offer both single-chamber and double-chamber bags, with options for custom tags featuring your company logo. Available in Green Tea, Assam Black, and Masala Chai variants.",
    priceRange: "₹0.80 - ₹2.50 / piece",
    imageUrl: "/images/products/tea_bags_bulk.png",
    imageAlt: "Bulk Wholesale Tea Bags Supplier India Custom Packaging",
    sku: "BAGS-BULK-001",
    moq: "5000 Pieces",
    stockStatus: "In Stock",
    specifications: {
      "Types": "Single Chamber / Double Chamber",
      "Filter Paper": "Food Grade",
      "Fill": "2g Standard",
      "Tag": "Customizable"
    }
  }
];

export const LOCATION_PAGES: LocationPage[] = [
  {
    id: "siliguri",
    city: "Siliguri",
    slug: "siliguri-tea-supplier",
    title: "Wholesale Tea Suppliers in Siliguri | Best Rates for CTC & Darjeeling Tea",
    metaDescription: "Leading wholesale tea supplier in Siliguri. Fresh CTC, Assam, and Darjeeling tea sourced directly from gardens. Best bulk rates for retailers.",
    heading: "Wholesale Tea Suppliers in Siliguri – CTC, Assam, Darjeeling Tea",
    content: `
      <p>Siliguri is India’s largest tea trading centre, and <strong>Manish Tea Traders</strong> is situated right at the heart of it. We provide fresh tea at factory rates directly to buyers across India.</p>
      <p>Being based in Siliguri gives us a unique advantage: we source directly from the tea auction centers and nearby gardens in Dooars and Darjeeling. This means zero middlemen and maximum freshness for our clients.</p>
      <h3>Why Buy From Siliguri?</h3>
      <ul>
        <li><strong>Freshness:</strong> Tea reaches our godowns within days of production.</li>
        <li><strong>Price:</strong> Wholesale rates that are unmatched in other cities.</li>
        <li><strong>Variety:</strong> Access to the widest range of CTC and leaf teas.</li>
      </ul>
      <p>We supply to local retailers in Mahananda Para, Khalpara, and Sevoke Road, as well as bulk buyers shipping to Kolkata and Bihar.</p>
    `
  },
  {
    id: "kolkata",
    city: "Kolkata",
    slug: "kolkata-tea-supplier",
    title: "Wholesale Tea Suppliers in Kolkata | Fast Delivery & Best Prices",
    metaDescription: "Bulk tea supply across Kolkata. We deliver fresh Assam and CTC tea from Siliguri to Kolkata, Howrah, and suburbs at wholesale prices.",
    heading: "Wholesale Tea Suppliers in Kolkata – CTC & Darjeeling Tea at Best Rates",
    content: `
      <p>Kolkata is a city of tea lovers, and we ensure the demand is met with premium quality tea. Manish Tea Traders offers <strong>fast delivery to all areas of Kolkata</strong> including Burrabazar, Howrah, Salt Lake, and South Kolkata.</p>
      <p>We dispatch goods via reliable transport services (road/rail) ensuring your stock arrives within 24-48 hours from Siliguri.</p>
      <h3>Our Service in Kolkata</h3>
      <ul>
        <li><strong>Doorstep Delivery:</strong> Tie-ups with major transport carriers.</li>
        <li><strong>Sample Testing:</strong> We send samples to Kolkata for approval before bulk booking.</li>
        <li><strong>Consistent Blend:</strong> Regular supply for tea stall chains and office canteens.</li>
      </ul>
    `
  },
  {
    id: "assam",
    city: "Assam",
    slug: "assam-tea-supplier",
    title: "Assam Tea Wholesale Supplier | Fresh Tea Delivered Across India",
    metaDescription: "Authentic Assam tea wholesale supplier. We source strong, malty tea from Assam gardens and distribute it across India.",
    heading: "Assam Tea Wholesale Supplier – Fresh From Estates to Your Business",
    content: `
      <p>Assam tea is known worldwide for its strong body, bright color, and malty flavor. At Manish Tea Traders, we source our stock directly from the premium estates of the Brahmaputra Valley.</p>
      <p>Whether you need secondary tea for blending or premium BP grades for packet sales, we have the right stock for you.</p>
    `
  },
  {
    id: "darjeeling",
    city: "Darjeeling",
    slug: "darjeeling-tea-supplier",
    title: "Darjeeling Tea Wholesale | First Flush, Second Flush & Autumnal",
    metaDescription: "Premium Darjeeling tea wholesaler. Authentic GI tagged tea for exporters, luxury hotels, and tea boutiques.",
    heading: "Darjeeling Tea Wholesale – First Flush, Second Flush & Autumnal",
    content: `
      <p>Known as the 'Champagne of Teas', Darjeeling Tea is for those who appreciate the finer things. We supply 100% authentic Darjeeling leaf tea to speciality buyers.</p>
      <p>Our catalog includes the floral First Flush, the muscatel Second Flush, and the smooth Autumnal blends. Perfect for gift packs and high-end cafes.</p>
    `
  },
  {
    id: "patna",
    city: "Patna",
    slug: "tea-wholesaler-patna-bihar",
    title: "Tea Wholesaler in Patna, Bihar | Best CTC Tea Rates",
    metaDescription: "Top rated tea wholesaler supplying Patna and Bihar. Direct transport from Siliguri for CTC, Dust and Leaf tea. Best rates for distributors.",
    heading: "Tea Wholesaler in Patna – Direct Supply from Siliguri",
    content: `
      <p>Bihar is one of our largest markets. We supply daily truckloads of fresh CTC tea to <strong>Patna</strong> and surrounding districts. Retailers in Patna prefer our strong 'Kadak' blends that work perfectly with milk.</p>
      <p>We have established transport links to Patna, ensuring your goods arrive safely and cheaply. Stop buying from middlemen and buy direct from the Siliguri source.</p>
      <h3>Popular in Patna:</h3>
      <ul>
        <li><strong>Lal Ghoda Type Blend:</strong> Strong red liquor tea.</li>
        <li><strong>Tea Dust:</strong> For hotel and roadside tea stalls.</li>
      </ul>
    `
  },
  {
    id: "ranchi",
    city: "Ranchi",
    slug: "tea-supplier-ranchi-jharkhand",
    title: "Wholesale Tea Supplier in Ranchi, Jharkhand | Garden Fresh Stock",
    metaDescription: "Reliable bulk tea supplier for Ranchi and Jharkhand. We provide Assam and Dooars tea at factory prices with GST billing.",
    heading: "Wholesale Tea Supplier in Ranchi & Jharkhand",
    content: `
      <p>Manish Tea Traders is a preferred supplier for many wholesalers in <strong>Ranchi, Jamshedpur, and Dhanbad</strong>. We understand the Jharkhand market preference for strong, brisk tea.</p>
      <p>We offer customized blends that suit the local water quality, ensuring a perfect cup every time. Delivery available via road transport to all major Jharkhand cities.</p>
    `
  },
  {
    id: "delhi",
    city: "Delhi",
    slug: "wholesale-tea-supplier-delhi",
    title: "Wholesale Tea Supplier in Delhi NCR | Bulk Tea Trading",
    metaDescription: "Buy wholesale tea in Delhi directly from Siliguri. We supply Khari Baoli traders and Delhi tea brands with premium Assam and CTC tea.",
    heading: "Wholesale Tea Supplier in Delhi – Connecting Siliguri to the Capital",
    content: `
      <p>Delhi is the consumption capital of North India. We supply to traders in <strong>Khari Baoli</strong> and tea packagers across NCR. By sourcing from us, you get the tea before it hits the secondary markets.</p>
      <p>We specialize in premium Assam Leaf for the educated Delhi consumer and strong CTC for the mass market.</p>
    `
  },
  {
    id: "mumbai",
    city: "Mumbai",
    slug: "tea-wholesaler-mumbai",
    title: "Tea Wholesalers in Mumbai | Cutting Chai Supply",
    metaDescription: "Supplier of strong dust and CTC tea for Mumbai's cutting chai market. Bulk delivery to Vashi APMC and retailers.",
    heading: "Tea Wholesalers in Mumbai – Fueling the City That Never Sleeps",
    content: `
      <p>Mumbai runs on Cutting Chai. We supply the specialized <strong>Strong Dust and BP blends</strong> required to make the perfect Mumbai-style tea.</p>
      <p>We ship regularly to Vashi APMC and distributors across Greater Mumbai. Our tea retains its strength even when boiled for long periods, making it ideal for the local style.</p>
    `
  },
  {
    id: "bangalore",
    city: "Bangalore",
    slug: "tea-supplier-bangalore",
    title: "Bulk Tea Supplier in Bangalore | Premium Leaf & Dust",
    metaDescription: "Wholesale tea supplier for Bangalore cafes and retailers. Fresh Nilgiri, Assam, and Darjeeling tea available in bulk.",
    heading: "Bulk Tea Supplier in Bangalore – Premium Quality Guaranteed",
    content: `
      <p>Bangalore's tea culture is evolving. From traditional darshinis to modern tea cafes, we supply them all. We offer premium <strong>Orthodox Leaf</strong> for brewing and strong dust for filter-style tea.</p>
      <p>Fast logistics ensure our tea reaches Karnataka fresh and flavorful.</p>
    `
  },
  {
    id: "jaipur",
    city: "Jaipur",
    slug: "tea-wholesaler-jaipur-rajasthan",
    title: "Tea Wholesaler in Jaipur, Rajasthan | Masala Chai Blends",
    metaDescription: "Best wholesale tea rates in Jaipur. We supply strong CTC tea suitable for Rajasthani masala chai. Direct delivery from Siliguri.",
    heading: "Tea Wholesaler in Jaipur – The Taste of Rajasthan",
    content: `
      <p>In Rajasthan, tea needs to be bold to stand up to the spices in Masala Chai. We create special <strong>Rajasthani Blends</strong> that are high on strength and color.</p>
      <p>Serving Jaipur, Jodhpur, and Udaipur with consistent quality throughout the year.</p>
    `
  },
  {
    id: "lucknow",
    city: "Lucknow",
    slug: "tea-supplier-lucknow-up",
    title: "Wholesale Tea Supplier in Lucknow, UP",
    metaDescription: "Bulk tea supplier for Lucknow and Uttar Pradesh. We provide economical CTC blends for high-volume sales.",
    heading: "Wholesale Tea Supplier in Lucknow & Uttar Pradesh",
    content: `
      <p>Uttar Pradesh is a massive market for tea. We supply budget-friendly yet tasty blends to wholesalers in <strong>Lucknow, Kanpur, and Varanasi</strong>.</p>
      <p>Our economy blends (Priya Gold type) are a hit in this region, offering maximum cups per kg.</p>
    `
  },
  {
    id: "chennai",
    city: "Chennai",
    slug: "tea-wholesaler-chennai",
    title: "Tea Wholesaler in Chennai | Assam & Dust Tea",
    metaDescription: "Supplying strong tea dust and granules to Chennai. Perfect for tea shops and homes. Bulk orders welcome.",
    heading: "Tea Wholesaler in Chennai – Strong Tea for South India",
    content: `
      <p>While coffee is king, Chennai has a huge market for strong tea. We supply high-quality <strong>Tea Dust and Assam Granules</strong> that rival local varieties in strength.</p>
    `
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    slug: "tea-supplier-hyderabad",
    title: "Irani Chai Tea Supplier Hyderabad | Wholesale Rates",
    metaDescription: "Special tea blends for Hyderabadi Irani Chai. Wholesale supplier of dust and hotel blends in Hyderabad.",
    heading: "Wholesale Tea for Hyderabad – Perfect for Irani Chai",
    content: `
      <p>The famous Irani Chai of Hyderabad needs a specific type of tea blend—usually a mix of strong dust and high-grown leaf. We have mastered this blend.</p>
      <p>Supply available for cafe chains and wholesale markets in Begum Bazar.</p>
    `
  },
  {
    id: "pune",
    city: "Pune",
    slug: "tea-wholesaler-pune",
    title: "Tea Wholesalers in Pune | Amruttulya Tea Supply",
    metaDescription: "Supplier for Amruttulya tea franchises in Pune. Consistent taste and affordable wholesale prices.",
    heading: "Tea Wholesaler in Pune – Partner for Amruttulya Chains",
    content: `
      <p>Pune has seen a boom in 'Amruttulya' tea outlets. We supply the base tea for many of these successful chains. Consistency is our promise.</p>
    `
  },
  {
    id: "surat",
    city: "Surat",
    slug: "tea-supplier-surat-gujarat",
    title: "Tea Supplier in Surat, Gujarat | Premium Family Blends",
    metaDescription: "Wholesale tea supplier for Surat and Gujarat. Premium quality CTC tea for households and gift packs.",
    heading: "Tea Supplier in Surat – Premium Quality for Gujarat",
    content: `
      <p>Gujarati families appreciate quality. We supply premium garden-fresh CTC (BP/BOP) to retailers in Surat and Ahmedabad.</p>
    `
  },
  {
    id: "muzaffarpur",
    city: "Muzaffarpur",
    slug: "tea-wholesaler-muzaffarpur",
    title: "Tea Wholesaler in Muzaffarpur | North Bihar Supply",
    metaDescription: "Direct tea supply to Muzaffarpur and North Bihar. Cheapest wholesale rates for loose tea.",
    heading: "Tea Wholesaler in Muzaffarpur – Gateway to North Bihar",
    content: `
      <p>We are a major supplier for the Muzaffarpur wholesale market. From here, our tea reaches Sitamarhi, Darbhanga, and Motihari.</p>
    `
  },
  {
    id: "dhanbad",
    city: "Dhanbad",
    slug: "tea-supplier-dhanbad",
    title: "Tea Supplier in Dhanbad | Coal Capital Supply",
    metaDescription: "Strong tea for hard working people. Wholesale supplier in Dhanbad and Bokaro.",
    heading: "Tea Supplier in Dhanbad – Strong Tea for the Coal Capital",
    content: `
      <p>We supply robust, strong liquor tea that is preferred in the industrial belts of Dhanbad and Bokaro.</p>
    `
  },
  {
    id: "indore",
    city: "Indore",
    slug: "tea-wholesaler-indore-mp",
    title: "Tea Wholesaler in Indore | Madhya Pradesh Supply",
    metaDescription: "Leading tea supplier for Indore and MP. Poha-Jalebi needs great tea, and we supply it.",
    heading: "Tea Wholesaler in Indore – Heart of Madhya Pradesh",
    content: `
      <p>Indore is a trading hub, and we supply bulk loose tea to repackagers and wholesalers across MP from here.</p>
    `
  },
  {
    id: "nagpur",
    city: "Nagpur",
    slug: "tea-supplier-nagpur",
    title: "Tea Supplier in Nagpur | Central India Logistics",
    metaDescription: "Wholesale tea delivery to Nagpur. Connecting Siliguri tea to Central India.",
    heading: "Tea Supplier in Nagpur – Central India's Tea Hub",
    content: `
      <p>Nagpur's central location makes it a key market. We supply fresh Dooars tea which is very popular in this region.</p>
    `
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Best Wholesale Tea Markets in India (2025 Guide)",
    slug: "wholesale-tea-markets-india",
    date: "October 15, 2024",
    author: "Manish Tea Traders",
    excerpt: "Discover why Siliguri is the beating heart of India's tea trade and how sourcing directly from hubs like us saves you money.",
    content: `
      <p>India runs on chai. From the cutting chai of Mumbai to the noon chai of Kashmir, tea is the lifeblood of our nation. But for a business owner—whether you run a retail shop, a hotel, or a distribution network—finding the right source is like finding a needle in a haystack.</p>
      
      <h2>Why Location Matters</h2>
      <p>Many buyers make the mistake of buying from secondary markets in Delhi or Mumbai. While convenient, you are often paying for 2-3 layers of middlemen commissions. To get the <strong>best wholesale tea prices</strong>, you need to go to the source.</p>
      
      <h3>1. Siliguri Tea Auction Centre (The Hub)</h3>
      <p>Located in the foothills of Darjeeling, Siliguri is the gateway to the North East. It connects the gardens of Darjeeling, Dooars, and Terai to the rest of India. <strong>Manish Tea Traders</strong> is based right here.</p>
      <ul>
        <li><strong>Advantage:</strong> Freshest stock (often reaching godowns within 24 hours of production).</li>
        <li><strong>Price:</strong> Factory-gate prices without heavy logistics markup.</li>
      </ul>

      <h3>2. Kolkata</h3>
      <p>Kolkata is a major distribution point, especially for export. However, for domestic bulk supply, Siliguri often offers better rates for CTC and Dust tea.</p>

      <h2>How to verify your supplier?</h2>
      <p>When looking for a "Tea Wholesaler in India", always ask:</p>
      <ol>
        <li>Do they have a physical godown in a tea-growing region?</li>
        <li>Can they provide GST bills?</li>
        <li>Do they offer consistency in blends? (Crucial for repeat customers)</li>
      </ol>
      <p>At Manish Tea Traders, we tick all these boxes. We invite you to visit us in Siliguri or request a sample pack to taste the difference.</p>
    `,
    keywords: "wholesale tea markets India, tea auction center Siliguri, buy tea bulk",
    imageUrl: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1200"
  },
  {
    id: "b2",
    title: "How to Choose the Right CTC Tea for Your Business",
    slug: "choose-ctc-tea",
    date: "October 20, 2024",
    author: "Manish Tea Traders",
    excerpt: "Confused between BP, OF, and Dust? We break down the grades so you can buy exactly what your customers want.",
    content: `
      <p>CTC (Crush, Tear, Curl) tea is the engine of the Indian tea industry. It’s what gives our chai its characteristic color and strength. But if you look at our price list, you see terms like BP, OF, PD. What do they mean?</p>

      <h2>Decoding the Jargon</h2>
      <p>Tea is graded by size, not necessarily quality. However, the size determines how the tea brews.</p>

      <h3>For Tea Stalls & Hotels (The Quick Brew)</h3>
      <p>If you run a high-volume tea stall, you need color—fast. Customers won't wait 10 minutes.</p>
      <ul>
        <li><strong>Recommended Grades:</strong> Dust, PD (Pekoe Dust), or OF (Orange Fannings).</li>
        <li><strong>Why:</strong> Smaller granules have more surface area, releasing strong liquor instantly. Check out our <strong>Tea Dust (Hotel Special)</strong>.</li>
      </ul>

      <h3>For Households (The Flavorful Cup)</h3>
      <p>Home consumers prefer a balance of flavor and strength. They don't like the "muddy" texture of pure dust.</p>
      <ul>
        <li><strong>Recommended Grades:</strong> BP (Broken Pekoe) or BOP (Broken Orange Pekoe).</li>
        <li><strong>Why:</strong> These larger granules take 3-4 minutes to brew but provide a richer, smoother taste.</li>
      </ul>

      <h2>The Secret: Blending</h2>
      <p>Most successful brands don't sell just one grade. They blend. A common mix is <strong>60% BP (for flavor) + 40% OF (for color)</strong>. At Manish Tea Traders, we have ready-made blends like <em>Rajni Gold</em> and <em>Begam Gold</em> that are pre-mixed for the perfect cup.</p>
    `,
    keywords: "CTC tea grades, difference BP OF dust tea, best tea for hotel",
    imageUrl: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200"
  },
  {
    id: "b3",
    title: "Why Siliguri is India’s Biggest Tea Trading Hub",
    slug: "siliguri-tea-market",
    date: "October 25, 2024",
    author: "Manish Tea Traders",
    excerpt: "Why do major brands source from Siliguri? Proximity to gardens, better logistics, and the auction center advantage.",
    content: `
      <p>If you check the back of a Tata Tea or Red Label packet, you might see "Packed in Siliguri" or "Sourced from West Bengal". Why?</p>

      <h2>The Chicken's Neck Corridor</h2>
      <p>Siliguri is strategically located in the narrow strip of land connecting Northeast India to the mainland. It is physically surrounded by tea gardens.</p>
      <ul>
        <li><strong>North:</strong> Darjeeling (The Champagne of Teas)</li>
        <li><strong>East:</strong> Dooars (The heavy-bodied CTC belt)</li>
        <li><strong>Further East:</strong> Assam (The strong malty tea)</li>
      </ul>

      <h2>The Logistics Advantage</h2>
      <p>Because we are at the source, logistics costs are minimal. When you buy from a wholesaler in Delhi, they have already paid for transport from Siliguri to Delhi, plus their margin. When you buy from <strong>Manish Tea Traders</strong> in Siliguri, you cut out that middle leg.</p>

      <h2>Freshness is Currency</h2>
      <p>Tea is hygroscopic—it absorbs moisture. The more it travels and sits in godowns, the more flavor it loses. Buying from Siliguri ensures you get the "New Season" stock while it still smells like the garden.</p>
    `,
    keywords: "Siliguri tea wholesale, tea suppliers Siliguri, benefits buying tea Siliguri",
    imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=1200"
  },
  {
    id: "b4",
    title: "Darjeeling Tea Flush Guide – First vs Second Flush",
    slug: "darjeeling-tea-flush-guide",
    date: "November 1, 2024",
    author: "Manish Tea Traders",
    excerpt: "First Flush is floral, Second Flush is Muscatel. We explain the taste profiles and why prices differ so you can sell better.",
    content: `
      <p>Darjeeling tea is unique because it tastes completely different depending on <em>when</em> it is plucked. These harvest periods are called "Flushes".</p>

      <h2>First Flush (Spring: Feb - April)</h2>
      <p>This is the very first harvest after the winter dormancy. The leaves are tender and light green.</p>
      <ul>
        <li><strong>Taste:</strong> Very light, floral, grassy, and delicate. The liquor is pale yellow.</li>
        <li><strong>Market:</strong> Highly prized for exports. Sold as premium "Champagne of Teas".</li>
      </ul>

      <h2>Second Flush (Summer: May - June)</h2>
      <p>The sun is stronger, and the leaves mature. This is the most famous Darjeeling tea.</p>
      <ul>
        <li><strong>Taste:</strong> The famous "Muscatel" flavor (tastes like muscat grapes). The liquor is amber/copper.</li>
        <li><strong>Market:</strong> The standard for a good cup of black Darjeeling tea without milk.</li>
      </ul>

      <h2>Autumn Flush (Oct - Nov)</h2>
      <p>Harvested before winter sets in.</p>
      <ul>
        <li><strong>Taste:</strong> Stronger, darker, slightly creamy. Can sometimes take a drop of milk.</li>
        <li><strong>Price:</strong> Generally more affordable than First/Second flush.</li>
      </ul>

      <p>Looking for authentic Darjeeling Leaf? Check our <strong>Products page</strong> for current availability.</p>
    `,
    keywords: "Darjeeling tea flushes, first flush vs second flush, buy darjeeling tea",
    imageUrl: "https://images.unsplash.com/photo-1677858741767-1776b8dcde52?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "b5",
    title: "How to Start a Tea Brand in India (Step-by-Step)",
    slug: "start-tea-brand-india",
    date: "November 5, 2024",
    author: "Manish Tea Traders",
    excerpt: "Dreaming of your own chai brand? Here is the roadmap from FSSAI registration to sourcing and packaging.",
    content: `
      <p>The tea market in India is huge, but so is the competition. However, there is always room for a quality brand. Here is how you can start.</p>

      <h2>Step 1: Define Your Niche</h2>
      <p>Don't just sell "Tea". Sell "Kadak Chai for Students" or "Premium Orthodox for Health". Define who you are selling to.</p>

      <h2>Step 2: Legal Basics</h2>
      <ul>
        <li><strong>FSSAI License:</strong> Mandatory for any food business.</li>
        <li><strong>GST Registration:</strong> Required for buying wholesale.</li>
      </ul>

      <h2>Step 3: Sourcing (The Most Critical Step)</h2>
      <p>You don't need to own a tea garden. You need a reliable partner. This is where <strong>Manish Tea Traders</strong> comes in. We act as your backend supply chain.</p>
      <ul>
        <li>We provide consistent quality (so your packet tastes the same every month).</li>
        <li>We offer loose tea in bulk (30kg sacks).</li>
      </ul>

      <h2>Step 4: Packaging (Private Label)</h2>
      <p>You don't need a factory. We offer <strong>Private Label Packaging</strong>. You choose the blend (e.g., our <em>Rajni Gold</em>), and we pack it in pouches with your brand name and logo. You focus on marketing; we handle the manufacturing.</p>
    `,
    keywords: "start tea business India, private label tea supplier, FSSAI for tea",
    imageUrl: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1200"
  },
  {
    id: "b6",
    title: "Assam Tea vs Darjeeling Tea – Which Is Better for Wholesale?",
    slug: "assam-vs-darjeeling",
    date: "November 10, 2024",
    author: "Manish Tea Traders",
    excerpt: "Comparing the strong, malty Assam tea with the delicate, floral Darjeeling tea. Which one suits your customers?",
    content: `
      <p>As a retailer, you might wonder: should I stock Assam Tea or Darjeeling Tea? The answer depends entirely on <em>how</em> your customers drink their tea.</p>

      <h2>The Milk Test</h2>
      <p>This is the easiest way to decide.</p>
      <ul>
        <li><strong>Assam Tea:</strong> Bold, Malty, Strong. It is designed to be drunk with Milk and Sugar. It cuts through the milk to give a rich color. This is the "Chai" of India.</li>
        <li><strong>Darjeeling Tea:</strong> Delicate, Floral, Astringent. It is usually drunk Black (without milk) or with lemon. Adding milk often ruins the flavor.</li>
      </ul>

      <h2>The Customer Profile</h2>
      <ul>
        <li><strong>Stock Assam (CTC) If:</strong> Your customers are general households, tea stalls, offices, or cafes serving Masala Chai.</li>
        <li><strong>Stock Darjeeling (Orthodox) If:</strong> You cater to health-conscious people, gift buyers, or premium cafes serving "English Breakfast" style tea.</li>
      </ul>

      <p>At Manish Tea Traders, we supply both. Our <strong>Assam Granules</strong> are a bestseller for the milk-tea segment, while our <strong>Darjeeling Orthodox</strong> caters to the premium niche.</p>
    `,
    keywords: "Assam vs Darjeeling tea, tea difference guide, wholesale tea selection",
    imageUrl: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1200"
  },
  {
    id: "b7",
    title: "How to Identify Good Quality Tea for Bulk Buying",
    slug: "identify-good-tea",
    date: "November 15, 2024",
    author: "Manish Tea Traders",
    excerpt: "Don't get scammed with adulterated stock. Learn the professional tasting methods: infusion check, liquor color, and density.",
    content: `
      <p>Buying in bulk is an investment. You don't want to end up with 500kg of sawdust. Here is how professional tea tasters check quality.</p>

      <h2>1. The Visual Check (Dry Leaf)</h2>
      <ul>
        <li><strong>Blackness:</strong> Good CTC tea should be jet black. Grayish or whitish tea usually means it contains fiber (stalks), which is low quality.</li>
        <li><strong>Uniformity:</strong> The grains should be of similar size. A mix of dust and large granules will brew unevenly.</li>
      </ul>

      <h2>2. The Nose (Aroma)</h2>
      <p>Breathe onto the tea sample to warm it up, then smell deep. It should smell fresh, grassy, or malty. If it smells like nothing, it's old. If it smells musty, it has moisture damage.</p>

      <h2>3. The Liquor (The Cup)</h2>
      <p>Brew it. Good tea should be "Brisk"—it should have a lively taste that sparks on the tongue. If it tastes flat or watery, it's old stock.</p>

      <blockquote><strong>Pro Tip:</strong> Always ask for samples before booking a bulk order. We send samples via courier anywhere in India.</blockquote>
    `,
    keywords: "tea quality check, how to test tea, identify adulterated tea",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200"
  },
  {
    id: "b8",
    title: "Top Tea Grades in CTC Tea – Explained for Buyers",
    slug: "ctc-tea-grades",
    date: "November 20, 2024",
    author: "Manish Tea Traders",
    excerpt: "Decoding tea jargon: BOP, BOPSM, BP, PF, PD, Dust. Know what you are paying for and what goes into your blend.",
    content: `
      <p>When you look at a wholesale price list, the acronyms can be overwhelming. Here is the hierarchy of CTC tea grades.</p>

      <h2>Leaf Grades (Larger Granules)</h2>
      <ul>
        <li><strong>BOP L (Broken Orange Pekoe Large):</strong> The largest size. Light liquor, high flavor.</li>
        <li><strong>BP (Broken Pekoe):</strong> The standard household grade. Good balance of strength and flavor.</li>
      </ul>

      <h2>Fannings (Medium Granules)</h2>
      <ul>
        <li><strong>OF (Orange Fannings):</strong> Slightly smaller than BP. Brews faster. Very popular in Indian households.</li>
      </ul>

      <h2>Dust Grades (Fine Granules)</h2>
      <ul>
        <li><strong>PD (Pekoe Dust):</strong> The premium dust. Strong, red liquor. Used in good hotels.</li>
        <li><strong>Dust:</strong> Fine powder. Instant strength. Used in tea bags and railway canteens.</li>
      </ul>

      <p><strong>Which is most expensive?</strong> Usually, BP and OF fetch better prices than Dust, but premium PD from a top garden can sometimes be the most expensive due to its demand in the hotel industry.</p>
    `,
    keywords: "tea grading system India, BOP vs BP tea, CTC grades meaning",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200"
  },
  {
    id: "b9",
    title: "Benefits of Buying Tea Directly From Siliguri",
    slug: "buy-tea-from-siliguri",
    date: "November 25, 2024",
    author: "Manish Tea Traders",
    excerpt: "Save costs and get fresher stock by bypassing the middlemen and buying from Siliguri wholesalers.",
    content: `
      <p>In the tea trade, margin is made in buying, not just selling. If you buy right, you can sell profitably.</p>

      <h2>1. The Price Gap</h2>
      <p>Tea changes hands 3-4 times before reaching a retailer in a city like Pune or Jaipur. Garden → Auction Broker → Siliguri Wholesaler → Big City Distributor → Local Wholesaler → You. <br> By buying from <strong>Manish Tea Traders</strong>, you skip 2-3 steps.</p>

      <h2>2. Access to 'Lot' System</h2>
      <p>We buy huge lots from auctions. We can offer you a specific "Lot" that matches your taste profile. Local distributors usually only have standard packets.</p>

      <h2>3. Authentic Origins</h2>
      <p>Many sellers mix cheap imported tea with Indian tea to lower costs. Since we are based in Siliguri, we deal primarily in authentic Assam, Dooars, and Darjeeling stock.</p>
    `,
    keywords: "buy tea direct from source, Siliguri tea wholesale benefits, cheap tea wholesale",
    imageUrl: "https://images.unsplash.com/photo-1563822249510-04678c78df85?q=80&w=1200"
  },
  {
    id: "b10",
    title: "Private Label Tea Packaging – How It Works",
    slug: "private-label-tea-guide",
    date: "November 30, 2024",
    author: "Manish Tea Traders",
    excerpt: "We explain our private label process: You choose the blend, we pack it in your branded pouches. Start your brand today.",
    content: `
      <p>Want to see your name on a tea packet? It's easier than you think. You don't need to buy packing machines or hire labor.</p>

      <h2>The Process at Manish Tea Traders</h2>
      
      <h3>1. Select Your Blend</h3>
      <p>Tell us your target price (e.g., "I need a tea to sell at ₹250/kg"). We will create a blend (BP+OF) that fits that budget while tasting great.</p>

      <h3>2. Choose Packaging</h3>
      <ul>
        <li><strong>Standard Silver/Gold Pouches:</strong> Cheapest option. We stick your label on it.</li>
        <li><strong>Printed Cylinders:</strong> For larger volumes (500kg+), we get professional rotogravure printing done with your brand design.</li>
      </ul>

      <h3>3. Dispatch</h3>
      <p>We pack the tea in 250g, 500g, or 1kg packets, put them in master cartoons, and ship them to your city. You receive a finished product ready to be put on shop shelves.</p>

      <p>Ready to start? Contact us on WhatsApp to discuss your brand idea!</p>
    `,
    keywords: "private label tea manufacturing, white label tea India, tea packaging service",
    imageUrl: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1200"
  },
  {
    id: "b11",
    title: "The Future of Tea E-commerce in India: Why Retailers Must Adapt",
    slug: "future-tea-ecommerce-india",
    date: "December 5, 2024",
    author: "Manish Tea Traders",
    excerpt: "The wholesale tea market is going digital. Discover how moving online can expand your customer base and how we support digital tea businesses.",
    content: `
      <p>The traditional image of tea trading involves crowded auction halls and physical samples. While that foundation remains, the future is increasingly digital. For tea retailers and new brands in India, ignoring e-commerce is no longer an option.</p>

      <h2>The Shift to D2C (Direct to Consumer)</h2>
      <p>More Indians are buying premium tea online than ever before. Niche websites selling "Single Estate Darjeeling" or "Masala Chai Blends" are booming. As a retailer, having a simple Shopify or WooCommerce store allows you to sell to customers in Mumbai or Bangalore without having a physical shop there.</p>

      <h2>How We Support Online Brands</h2>
      <p>At <strong>Manish Tea Traders</strong>, we understand the needs of e-commerce businesses:</p>
      <ul>
        <li><strong>Low MOQ:</strong> We allow smaller test batches so you can launch new flavors without locking capital.</li>
        <li><strong>Consistency:</strong> Online reviews are brutal. If your "Assam Gold" tastes different in January vs March, you lose customers. We ensure consistent blending year-round.</li>
        <li><strong>Dropshipping Support:</strong> For select partners, we can pack and ship directly to your distribution center.</li>
      </ul>

      <p>The future belongs to those who combine traditional tea quality with modern digital convenience.</p>
    `,
    keywords: "online tea business India, tea ecommerce trends, buy wholesale tea online",
    imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200"
  },
  {
    id: "b12",
    title: "How to Price Wholesale Tea Competitively",
    slug: "price-wholesale-tea-competitively",
    date: "December 10, 2024",
    author: "Manish Tea Traders",
    excerpt: "Struggling with margins? We break down the cost structures of loose tea vs. packaged tea and how to set profitable prices.",
    content: `
      <p>One of the most common questions we get from new entrepreneurs is: "What should be my selling price?" Pricing tea correctly is the difference between a hobby and a profitable business.</p>

      <h2>Understanding Your Landed Cost</h2>
      <p>Your cost isn't just the price per kg you pay us. You must factor in:</p>
      <ul>
        <li><strong>Transport:</strong> Shipping from Siliguri to your city (approx ₹5-10/kg).</li>
        <li><strong>Wastage:</strong> Handling loss during repackaging (allow 2-3%).</li>
        <li><strong>Packaging:</strong> The cost of your pouch, label, and master carton.</li>
      </ul>

      <h2>The Volume Game vs. The Niche Game</h2>
      <p><strong>Strategy A: The Chaiwala Model (High Volume, Low Margin)</strong><br>
      If you sell to tea stalls, your margin might be thin (₹20-40/kg), but you sell 500kg a month. You need our economy blends like <em>Priya Gold</em>.</p>

      <p><strong>Strategy B: The Premium Retailer (Low Volume, High Margin)</strong><br>
      If you sell premium Orthodox leaf in fancy jars, your margin could be ₹500/kg. You buy our <em>Darjeeling Second Flush</em> at ₹900/kg and retail it at ₹2000/kg.</p>

      <p>We help you calculate these margins before you place your first order.</p>
    `,
    keywords: "tea pricing strategy, wholesale tea margins, cost of tea per kg",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200"
  },
  {
    id: "b13",
    title: "Challenges and Opportunities in the Indian Tea Export Market",
    slug: "challenges-opportunities-indian-tea-export",
    date: "December 15, 2024",
    author: "Manish Tea Traders",
    excerpt: "India is the 2nd largest tea producer, but exports fluctuate. Learn about MRL standards, orthodox demand, and new markets.",
    content: `
      <p>For many domestic traders, the ultimate goal is export. Selling Indian tea to Europe, the Middle East, or the US can be lucrative, but it comes with strict hurdles.</p>

      <h2>The Challenge: MRL (Maximum Residue Limits)</h2>
      <p>The biggest barrier to entry is chemical residue. European and Japanese markets have extremely strict limits on pesticides. Standard "loose tea" from the local mandi often fails these tests. You must source <strong>export-compliant tea</strong> from certified gardens.</p>

      <h2>The Opportunity: Orthodox & Green Tea</h2>
      <p>While CTC is king in India, the world wants Orthodox and Green tea. The demand for Indian Green Tea in the US and "Chai Lattes" in Europe is growing.</p>

      <h2>How We Bridge the Gap</h2>
      <p>Manish Tea Traders sources specific lots from ISO and HACCP certified gardens in Darjeeling and Assam that are cleared for export. If you are an exporter looking for a reliable sourcing partner in Siliguri, we can provide lab-tested samples.</p>
    `,
    keywords: "tea export India, Indian tea global market, export quality tea standards",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661963780999-6712fcb46eec?fm=jpg&q=60&w=1200&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "b14",
    title: "Sustainable Tea Farming Practices and Their Impact on Wholesale",
    slug: "sustainable-tea-farming-wholesale",
    date: "December 20, 2024",
    author: "Manish Tea Traders",
    excerpt: "Why organic and sustainably farmed tea costs more but sells better. Understanding the shift towards eco-friendly tea consumption.",
    content: `
      <p>Sustainability is no longer a buzzword; it's a market requirement. Educated consumers in metros like Delhi and Bangalore are asking: "Is this tea organic? Is it fair trade?"</p>

      <h2>What Makes Tea Sustainable?</h2>
      <ul>
        <li><strong>Soil Management:</strong> Using organic compost instead of chemical fertilizers.</li>
        <li><strong>Water Conservation:</strong> Drip irrigation in tea gardens.</li>
        <li><strong>Labor Welfare:</strong> Fair wages and housing for tea pluckers.</li>
      </ul>

      <h2>The Impact on Price and Quality</h2>
      <p>Sustainable tea farming yields lower quantities per acre, which raises the wholesale price. However, the <strong>quality is often superior</strong>—the leaf is cleaner, and the taste is more natural. </p>

      <p>As a wholesaler, stocking a "Premium Sustainable/Organic Line" helps you target high-end supermarkets and health cafes. We can help you source certified organic stocks from niche gardens in Darjeeling and Assam.</p>
    `,
    keywords: "organic tea wholesale, sustainable tea sourcing, pesticide free tea India",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200"
  },
  {
    id: "b15",
    title: "The Role of Technology in Modern Tea Trading",
    slug: "technology-modern-tea-trading",
    date: "December 25, 2024",
    author: "Manish Tea Traders",
    excerpt: "From e-auctions to digital moisture meters, technology is changing how we buy and sell tea in Siliguri.",
    content: `
      <p>The image of a tea taster slurping from a cup is timeless, but everything around him has changed. Technology has revolutionized the Siliguri tea market.</p>

      <h2>1. E-Auctions</h2>
      <p>Gone are the days of shouting in auction halls. The Tea Board of India now conducts pan-India e-auctions. This allows us to bid on tea from specific gardens in Assam and Darjeeling in real-time, ensuring fair pricing and wider access to premium lots.</p>

      <h2>2. Digital Moisture Meters</h2>
      <p>Moisture is the enemy of tea. In the past, we relied on touch. Now, we use handheld digital moisture meters to ensure every sack entering our warehouse is below 3% moisture content. This guarantees shelf life for our buyers.</p>

      <h2>3. Logistics Tracking</h2>
      <p>We now use GPS-enabled trucks for our bulk shipments to Delhi and Mumbai. This allows our wholesale clients to track their 10-ton consignments in real-time, reducing anxiety and allowing for better inventory planning.</p>
    `,
    keywords: "tea technology India, e-auction tea, digital supply chain tea",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
  }
];