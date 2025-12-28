import { ContactInfo, NavItem, Product, BlogPost, LocationPage } from "./types";

export const CONTACT_INFO: ContactInfo = {
  address: "Ganga Nagar, Mahananda Para, Ward No. 5",
  city: "Siliguri",
  state: "West Bengal",
  zip: "734005",
  phone: "919434308958",
  displayPhone: "+91 94343 08958",
  mapEmbedUrl: "https://maps.google.com/maps?q=Manish+Tea+Traders+Siliguri&hl=en&z=14&output=embed",
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
      <p>Siliguri is the undisputed tea capital of North Bengal, serving as the critical gateway for the tea trade in India. <strong>Manish Tea Traders</strong> is headquartered right here, in the heart of the action at Mahananda Para. By operating from Siliguri, we eliminate multiple layers of middlemen that usually inflate costs in cities like Delhi or Mumbai.</p>
      
      <h3>The Siliguri Advantage</h3>
      <p>Our proximity to the <strong>Siliguri Tea Auction Centre (STAC)</strong> allows us to bid for the freshest garden invoices the moment they are cataloged. Unlike traders in other states who receive stock weeks after production, our godowns store tea that was manufactured just days ago in the gardens of Dooars and Terai.</p>

      <h3>Wholesale Supply for Local & Interstate Buyers</h3>
      <p>We cater to a diverse clientele:</p>
      <ul>
        <li><strong>Local Retailers:</strong> We supply daily loose tea requirements to shops in Khalpara, Sevoke Road, and Hill Cart Road.</li>
        <li><strong>Bulk Aggregators:</strong> We load full trucks (9-ton to 15-ton) for dispatch to Bihar, Uttar Pradesh, and Rajasthan.</li>
        <li><strong>Packeteers:</strong> We provide unblended raw material for local brands starting their own packaging units.</li>
      </ul>
      <p>Visit our office to taste over 50+ varieties of CTC Leaf, Dust, and Orthodox teas before you book your order.</p>
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
      <p>Kolkata is a city that runs on "Cha". From the morning crimson cup to the evening "Adda", tea is an emotion here. Manish Tea Traders bridges the gap between the gardens of North Bengal and the teapots of Kolkata. We offer <strong>express wholesale tea delivery</strong> to the entire Kolkata Metropolitan Area.</p>

      <h3>Serving Key Markets</h3>
      <ul>
        <li><strong>Burrabazar & Posta:</strong> We supply bulk gunny bags (30kg-35kg) to large trading houses in Kolkata's wholesale hub.</li>
        <li><strong>Office Para (Dalhousie/Esplanade):</strong> We supply high-strength "Office Blend" tea perfect for the thousands of cups served daily in corporate canteens.</li>
        <li><strong>Retail Shops:</strong> Small retailers in Salt Lake, Garia, and Dum Dum rely on us for consistent monthly supplies of our "Family Mixture" blend.</li>
      </ul>

      <h3>Logistics & Delivery</h3>
      <p>We utilize trusted transport services like V-Trans and local lorry services to ensure goods reach Kolkata within <strong>24-48 hours</strong> of dispatch from Siliguri. We also offer "Door Delivery" for bulk orders above 500kg, saving you the hassle of collecting from the transport depot.</p>
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
      <p>Assam produces the world's strongest tea, known for its rich, full-bodied malty flavor and deep amber color. At Manish Tea Traders, we source directly from the Upper Assam and Cachar regions, bypassing secondary auctions to give you the best rates.</p>

      <h3>Why Our Assam Tea Stands Out</h3>
      <p>Many suppliers mix cheaper Dooars tea with Assam to lower the price. We guarantee <strong>100% Pure Assam Leaf</strong> for our premium grades. </p>
      <ul>
        <li><strong>Second Flush Assam:</strong> Famous for its "tippy" appearance and sweet malty aroma. Ideal for premium packets.</li>
        <li><strong>Kadak Assam CTC:</strong> The heavy-liquoring tea preferred by hotels and chaiwalas across North India.</li>
      </ul>
      <p>We supply raw material to repackagers who want to build a brand around the "Pure Assam" label. Our rigorous tasting process ensures that every sack delivers that signature punchy taste.</p>
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
      <p>Darjeeling Tea needs no introduction. It is the geographic indication (GI) product of India, celebrated globally. Located just hours from the hills, we have direct access to some of the most prestigious gardens in the Darjeeling district.</p>
      
      <h3>Seasonal Sourcing for Connoisseurs</h3>
      <p>We specialize in sourcing seasonal flushes for exporters and high-end boutiques:</p>
      <ul>
        <li><strong>Spring (First Flush):</strong> Light, floral, and greenish. The most expensive and sought-after harvest.</li>
        <li><strong>Summer (Second Flush):</strong> The classic "Muscatel" flavor with notes of stone fruit and nuts. A favorite for afternoon tea.</li>
        <li><strong>Monsoon & Autumn:</strong> Stronger, darker cups ideal for blends and commercially viable price points.</li>
      </ul>
      <p>We provide authentic invoices with Garden Marks, ensuring you get exactly what you pay for. Ideal for gifting companies and luxury hospitality chains.</p>
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
      <p>Bihar is traditionally a market that demands <strong>Strong Tea ("Kadak Chai")</strong>. Consumers in Patna, Gaya, and Muzaffarpur prefer tea that boils quickly and yields a thick, golden liquor even with less milk. Manish Tea Traders is a dominant supplier in this region.</p>

      <h3>Tailored Blends for Bihar</h3>
      <p>We have developed specific "Bihar Special" blends that are high on color and strength:</p>
      <ul>
        <li><strong>Lal Ghoda Style:</strong> A reddish-liquoring tea that mimics major brands but at wholesale prices.</li>
        <li><strong>Mota Dana (BOPL):</strong> Large granule tea preferred in rural Bihar for its re-heating capability.</li>
        <li><strong>Hotel Dust:</strong> Super-strong dust for the bustling tea stalls near Patna Junction and Boring Road.</li>
      </ul>

      <h3>Seamless Transport to Patna</h3>
      <p>We have daily truck dispatches to Patna. Goods are usually offloaded at transport nagars in zero mile or bypass areas. We guarantee safe transit and standard 26kg-35kg jute bag packing that withstands rough handling. Stop paying extra to local agents—buy direct from Siliguri.</p>
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
      <p>The tea culture in Jharkhand is unique, with a preference for brisk, fresh-tasting tea. Manish Tea Traders supplies to major wholesalers in <strong>Ranchi, Jamshedpur (Tatanagar), and Dhanbad</strong>. We understand that the water quality in parts of Jharkhand affects brewing, so we offer blends specifically tested for hard water.</p>

      <h3>Why Ranchi Retailers Choose Us</h3>
      <ul>
        <li><strong>Consistent Quality:</strong> We don't change our blend ratios month-to-month. Your customers get the same taste every time.</li>
        <li><strong>Range:</strong> From premium Assam leaf for posh colonies in Ranchi to strong dust for industrial canteens in Jamshedpur.</li>
        <li><strong>Credit Facilities:</strong> We offer credit terms to long-standing partners with verified trade references.</li>
      </ul>
      <p>Whether you strictly need "Dooars Tea" or a "Assam-Dooars Mix", we can customize the ratio to hit your target buying price.</p>
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
      <p>Delhi is one of the largest consumption centers for tea in India. Traders in <strong>Khari Baoli</strong> and consumer brands across NCR rely on a steady influx of high-quality Assam tea. Manish Tea Traders acts as your procurement arm in the East.</p>

      <h3>Serving the Delhi Palate</h3>
      <p>Delhi consumers are sophisticated—they want flavor <em>and</em> strength. We supply:</p>
      <ul>
        <li><strong>Premium Assam Seconds:</strong> For loose tea retailers in South Delhi and Gurgaon who sell at ₹400+ per kg.</li>
        <li><strong>Desi Chai Blends:</strong> Strong CTC mixes for tea stalls in Old Delhi and Noida.</li>
        <li><strong>Masala Chai Bases:</strong> Robust teas that hold their ground against tough spices like ginger and cardamom.</li>
      </ul>
      <p>We offer full truckload (FTL) and part-load delivery to Delhi-NCR transport hubs. All interstate documentation (E-Way bills) is handled by our team.</p>
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
      <p>Mumbai runs on "Cutting Chai". The perfect Cutting requires a tea that is incredibly strong, boils fast, and doesn't get bitter. Manish Tea Traders supplies the specialized <strong>PD (Pekoe Dust) and RD (Red Dust)</strong> grades that are the secret behind Mumbai's famous tea.</p>

      <h3>Supply to Vashi & Beyond</h3>
      <p>We regularly ship bulk consignments to the Vashi APMC market and distributors in Thane, Dadar, and Kalyan. </p>
      <ul>
        <li><strong>For Amruttulya Chains:</strong> We provide a consistent "Hotel Blend" that matches the sweetness and thickness required for these tea chains.</li>
        <li><strong>For Households:</strong> We supply premium Assam CTC that caters to the Gujarati and Maharashtrian families who enjoy a rich morning cup.</li>
      </ul>
      <p>Our packaging is moisture-proof to withstand Mumbai's humid climate, ensuring the tea stays fresh from Siliguri to your warehouse.</p>
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
      <p>Bangalore has a dual tea culture: the traditional "By-Two" coffee/tea shops and the modern, upscale tea cafes. Manish Tea Traders caters to the entire spectrum of the Karnataka market.</p>

      <h3>Products for Bangalore</h3>
      <ul>
        <li><strong>Strong Dust:</strong> For the thousands of Darshinis and canteens that serve filter-style hot tea.</li>
        <li><strong>Orthodox Leaf:</strong> For the growing number of boutique cafes in Indiranagar and Koramangala serving brewing teas.</li>
        <li><strong>Green Tea:</strong> Sourced from organic gardens for the health-conscious IT crowd.</li>
      </ul>
      <p>We utilize efficient rail logistics to reach Bangalore, keeping freight costs low so you can enjoy better margins.</p>
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
      <p>In Rajasthan, tea is more than a drink; it's a ritual. The preference here is for <strong>Masala Chai</strong>, which requires a robust, strong base tea that doesn't lose its character when boiled with milk, ginger, and spices.</p>
      <p>We supply specialized "Rajasthan Blends" that are heavy on Assam BP and OF grades. These teas have a deep colour that appeals to the visual preference of the Rajasthani buyer.</p>
      <h3>Serving the Golden Triangle</h3>
      <p>Our distribution network covers Jaipur, Jodhpur, and Udaipur. We supply to:</p>
      <ul>
        <li><strong>Kirana Wholesalers:</strong> Bulk sacks for resale in local mandis.</li>
        <li><strong>Tourism Sector:</strong> Premium packs for heritage hotels and resorts.</li>
      </ul>
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
      <p>Uttar Pradesh is one of India's most price-sensitive yet high-volume markets. We understand that in cities like Lucknow, Kanpur, and Varanasi, the "price-to-quality" ratio is key. We specialize in creating <strong>Economy Blends</strong> that taste premium but cost less.</p>
      <p>Our "Awadh Blend" is a hit in Lucknow—perfect for the slow-boiled tea culture of the city. We ensure regular supply during festive seasons and winters when demand peaks.</p>
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
      <p>While Chennai is the heartland of filter coffee, the demand for strong tea is rapidly growing. We supply high-grade <strong>Assam Dust and Broken grades</strong> that rival the strength of local southern teas.</p>
      <p>Our tea is specifically curated to act as a perfect base for "Ginger Tea" and "Dum Tea" sold across Chennai's tea stalls. We provide moisture-proof packaging to protect stock from the coastal humidity.</p>
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
      <p>The legendary <strong>Irani Chai</strong> of Hyderabad requires a unique tea profile: usually a very strong dust or fine fanning that can be decocted for hours. We have cracked this code.</p>
      <p>We supply specialized blends to the wholesalers of Begum Bazar who distribute to the city's cafes. Our tea yields a thick, creamy liquor that pairs perfectly with Osmania biscuits.</p>
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
      <p>Pune is the birthplace of the modern "Amruttulya" tea franchise model. These businesses rely on one thing: <strong>Consistency</strong>. A cup of tea in Kothrud must taste the same as one in Viman Nagar.</p>
      <p>Manish Tea Traders provides standardized year-round blends ("Pune Special") that ensure your franchise maintains its signature taste without fluctuation. We offer contract pricing for bulk annual contracts.</p>
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
      <p>In Surat and Ahmedabad, quality is never compromised. The market here prefers <strong>Premium Assam CTC (BP Grade)</strong> that is bold, golden, and aromatic. We supply garden-fresh stocks that are free from adulteration.</p>
      <p>Our tea is widely used by retailers who create "Gift Packs" during Diwali and weddings. We ensure the tea has a clean black appearance ("Bloom") that customers look for before buying.</p>
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
      <p>Muzaffarpur acts as a key distribution hub for North Bihar (Sitamarhi, Champaran, Darbhanga). We supply trucks of <strong>Loose Tea (Khula Chai)</strong> to the mandi here.</p>
      <p>Our rates are competitive enough for you to resell to smaller village markets and still make a healthy profit. We offer a "Janata Blend" specifically for price-conscious rural markets.</p>
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
      <p>The industrial workforce of Dhanbad and Bokaro demands tea that wakes them up. We supply high-caffeine, high-strength blends suitable for colliery canteens and industrial mess halls.</p>
      <p>Our tea cuts through fatigue. We offer bulk 50kg packaging for institutional buyers in the coal belt.</p>
    `
  },
  {
    id: "indore",
    city: "Indore",
    slug: "tea-wholesaler-indore-mp",
    title: "Tea Wholesaler in Indore | Madhya Pradesh Supply",
    metaDescription: "Leading tea supplier for Indore and MP. Poha-Jalebi needs great tea, and we supply it.",
    heading: "Tea Wholesaler in Indore – The Heart of Madhya Pradesh",
    content: `
      <p>Indore is famous for its food culture, and no breakfast of Poha-Jalebi is complete without chai. We supply the wholesale markets of Indore with <strong>Malwa-suited blends</strong>.</p>
      <p>Whether you need tea for street-side stalls in Sarafa Bazaar or premium cafes in Palasia, we have the right grade. We ship via transport directly from Siliguri to Indore transport nagar.</p>
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
      <p>Nagpur's strategic location makes it a distribution point for Vidarbha and MP. We supply fresh <strong>Dooars CTC Tea</strong> which is preferred here for its bright liquor and sweetness.</p>
      <p>Our logistics network ensures that Nagpur receives stock faster than most other Central Indian cities, keeping your inventory fresh and rotating.</p>
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