export interface Product {
  id: string;
  name: string;
  desc: string;
  img: string;
  images?: string[];
  moq: string;
  category: 
    | 'Lingerie' 
    | 'Underwear' 
    | 'Sleepwear' 
    | 'Innerwear' 
    | 'Seamless Products' 
    | 'Knitwear' 
    | 'Hoodies' 
    | 'T-Shirts' 
    | 'Activewear'
    | 'Kidswear'
    | 'Bodysuits'
    | 'Swimwear'
    | 'Joggers'
    | 'Jackets'
    | 'Polo Shirts';
  range: 'Women’s & Girls’' | 'Men’s & Boys’' | 'Kidswear' | 'Other Knitwear';
  gender: 'Women' | 'Men' | 'Kids' | 'Unisex';
  specs?: string[];
  colors?: { name: string; hex: string; img?: string }[];
  sizes?: { name: string; available: boolean }[];
}

export const productData: Product[] = [
  {
    name: "Lace Elegance Bralette",
    desc: "Intricate floral lace bralette with adjustable straps and soft mesh lining. Part of our signature Lingerie export line.",
    id: "l-1",
    img: "/api/artifacts/a171602711116669dd6442371d",
    images: [
      "/api/artifacts/a171602711116669dd6442371d",
      "/api/artifacts/a17160271112443496c1417537",
      "https://images.unsplash.com/photo-1590736704728-f4730bb3c3bb?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "3,000 units",
    category: 'Lingerie',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Premium French Lace", "Nickel-Free Hardware", "Soft Micro-Mesh Lining", "OEKO-TEX Certified"],
    colors: [
      { name: "Midnight Black", hex: "#000000" },
      { name: "Ruby Red", hex: "#9b111e" },
      { name: "Creamy White", hex: "#f5f5dc" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Modal Comfort Underwear",
    desc: "Ultra-breathable modal fabric with a seamless finish. Designed for all-day comfort and high-volume retail.",
    id: "u-1",
    img: "https://images.unsplash.com/photo-1541345037140-5e36f75567b4?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1541345037140-5e36f75567b4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "10,000 units",
    category: 'Underwear',
    range: 'Men’s & Boys’',
    gender: 'Men',
    specs: ["95% Lenzing Modal", "Anti-Roll Waistband", "Flatlock Seams", "Moisture Wicking"],
    colors: [
      { name: "Heather Grey", hex: "#9da1aa" },
      { name: "Sky Blue", hex: "#87ceeb" },
      { name: "Charcoal", hex: "#36454f" }
    ],
    sizes: [
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true },
      { name: "XXL", available: true }
    ]
  },
  {
    name: "Silk-Satin Sleep Set",
    desc: "Luxurious silk-satin camisole and shorts set. Elegant sleepwear crafted for high-end boutique collections.",
    id: "s-1",
    img: "/api/artifacts/a171602711598466bba79848f0",
    images: [
      "/api/artifacts/a171602711598466bba79848f0",
      "/api/artifacts/a171602711612403666d034346",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "1,000 sets",
    category: 'Sleepwear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Pure Silk Satin", "French Seam Finishing", "Elasticated Waist", "Delicate Drapery"],
    colors: [
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Rose Quartz", hex: "#f7cac9" },
      { name: "Emerald", hex: "#50c878" }
    ],
    sizes: [
      { name: "XS", available: true },
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: false }
    ]
  },
  {
    name: "Seamless Motion Leggings",
    desc: "Advanced seamless technology providing multi-zone compression and ultimate flexibility for performance wear.",
    id: "sm-1",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "2,500 units",
    category: 'Seamless Products',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["360° Stretch Nylon", "Graduated Compression", "Sweat-Proof Finish", "Squat-Proof Fabric"],
    colors: [
      { name: "Slate", hex: "#708090" },
      { name: "Ocean", hex: "#0077be" },
      { name: "Forest", hex: "#228b22" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Fine-Knit Cotton Cardigan",
    desc: "100% combed cotton fine-knit cardigan. Retains shape and softness after multiple Global Shipments.",
    id: "k-1",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000",
    moq: "2,000 units",
    category: 'Knitwear',
    range: 'Other Knitwear',
    gender: 'Men',
    specs: ["12GG Fine Knit", "Bio-Polished Finish", "Reinforced Button Placket", "Anti-Pilling Treatment"],
    colors: [
      { name: "Stone", hex: "#877963" },
      { name: "Navy", hex: "#000080" },
      { name: "Olive", hex: "#556b2f" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true }
    ]
  },
  { 
    name: "Oversized Heavy Hoodie", 
    desc: "Premium 400gsm cotton fleece hoodie with dropped shoulders and kangaroo pocket. Engineered for high-end streetwear brands.", 
    id: "h-1",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "1,500 units",
    category: 'Hoodies',
    range: 'Men’s & Boys’',
    gender: 'Men',
    specs: ["400GSM Organic Cotton", "Double-Lined Hood", "Reinforced Seams", "Custom Dyeing Available"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#001f3f" },
      { name: "Olive", hex: "#3d9970" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true },
      { name: "XXL", available: false }
    ]
  },
  { 
    name: "Cloud-Soft Women's Hoodie", 
    desc: "Lightweight, breathable bamboo-cotton blend hoodie. Perfect for luxury lounging and eco-conscious collections.", 
    id: "h-2",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000",
    moq: "1,200 units",
    category: 'Hoodies',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Eco-Certified Bamboo Blend", "Tagless Neck Design", "Pre-Shrunk Fabric", "Low-Impact Dyes"],
    colors: [
      { name: "Lilac", hex: "#c8a2c8" },
      { name: "Cream", hex: "#fffdd0" },
      { name: "Sage", hex: "#9faf91" }
    ],
    sizes: [
      { name: "XS", available: true },
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: false }
    ]
  },
  { 
    name: "Classic Pima Cotton Tee", 
    desc: "High-density Pima cotton t-shirt with a refined luster finish. A staple for premium private labels.", 
    id: "t-1",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000",
    moq: "3,000 units",
    category: 'T-Shirts',
    range: 'Men’s & Boys’',
    gender: 'Men',
    specs: ["100% Pima Cotton", "Interlock Weave", "High-Elasticity Ribbed Neck", "Silicone Softened"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Charcoal", hex: "#333333" },
      { name: "Burgundy", hex: "#800020" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true }
    ]
  },
  { 
    name: "Seamless Performance Crop", 
    desc: "Advanced seamless knitting for high-impact support. Moisture-wicking technology for elite sportswear.", 
    id: "a-1",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000",
    moq: "2,000 units",
    category: 'Activewear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["4-Way Stretch Nylon", "Antibacterial Finish", "Compression Zones", "Reflective Logos"],
    colors: [
      { name: "Electric Blue", hex: "#7df9ff" },
      { name: "Magenta", hex: "#ff00ff" },
      { name: "Black", hex: "#000000" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  { 
    name: "Laser-Cut Invisible Intimates", 
    desc: "Precision laser-cut edges for a zero-line finish. High-volume export item for global retailers.", 
    id: "i-1",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000",
    moq: "5,000 units",
    category: 'Innerwear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Ultrasonic Bonding", "Laser-Cut Finish", "100% Cotton Gusset", "Anti-Pilling Microfiber"],
    colors: [
      { name: "Nude", hex: "#e3bc9a" },
      { name: "Black", hex: "#000000" },
      { name: "Blush", hex: "#ffdbac" }
    ],
    sizes: [
      { name: "XS", available: true },
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    id: "hp-1",
    img: "/api/artifacts/a1716027121289139943485ab9",
    images: [
      "/api/artifacts/a1716027121289139943485ab9",
      "/api/artifacts/a1716027121264c767e75ef084",
      "/api/artifacts/a1716023773010b90a6e0e0f3",
      "/api/artifacts/a17160237728700ff3123512b9"
    ],
    name: "Luxe Bamboo Bralette",
    desc: "A soft, sustainable bamboo bralette featuring seamless construction and a supportive under-bust band.",
    moq: "2,000 units",
    category: 'Seamless Products',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["95% Bamboo Viscose", "Seamless Technology", "Oeko-Tex Certified", "Recycled Packaging"],
    colors: [
      { name: "Soot", hex: "#1a1a1a" },
      { name: "Cream", hex: "#fdf5e6" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Floral Lace Balconette Bra",
    desc: "Exquisite floral lace balconette bra with wide-set straps for a feminine lift. Delicate scalloped edges and breathable mesh panels.",
    id: "l-3",
    img: "/api/artifacts/a17160271060934f0c4309a96e",
    images: [
      "/api/artifacts/a17160271060934f0c4309a96e",
      "/api/artifacts/a17160271059424cb450849641",
      "/api/artifacts/a171602710619586fe08287a94",
      "/api/artifacts/a171602711091590797171d99b"
    ],
    moq: "2,500 units",
    category: 'Lingerie',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Custom Floral Embroidery", "Soft Underwire Support", "Breathable Mesh", "Adjustable Velvet Straps"],
    colors: [
      { name: "Peach Blossom", hex: "#ffdab9" },
      { name: "Vintage White", hex: "#f5f5f5" }
    ],
    sizes: [
      { name: "32B", available: true },
      { name: "34B", available: true },
      { name: "36C", available: true }
    ]
  },
  {
    name: "Radiant Blue One-Piece",
    desc: "Stunning gradient blue one-piece swimsuit with athletic cutouts. High-performance Italian fabric for shape retention and UV protection.",
    id: "sw-1",
    img: "/api/artifacts/a171602711105151590214a13d",
    images: [
      "/api/artifacts/a171602711105151590214a13d"
    ],
    moq: "1,500 units",
    category: 'Swimwear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["UPF 50+ Fabric", "Chlorine Resistant", "Removable Padding", "Double-Lined Interior"],
    colors: [
      { name: "Ocean Gradient", hex: "#0077be" }
    ],
    sizes: [
      { name: "XS", available: true },
      { name: "S", available: true },
      { name: "M", available: true }
    ]
  },
  {
    name: "Vibrant Pink Seamless Set",
    desc: "Bold hot pink seamless bra and brief set. Ultra-stretch micro-ribbed fabric for a compression fit that moves with you.",
    id: "sm-2",
    img: "/api/artifacts/a1716027121175653b4974f19b",
    images: [
      "/api/artifacts/a1716027121175653b4974f19b"
    ],
    moq: "3,000 units",
    category: 'Seamless Products',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["360° Seamless Knit", "Quick-Dry Performance", "Antimicrobial Treatment", "High-Waisted Fit"],
    colors: [
      { name: "Electric Pink", hex: "#ff1493" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Urban Chic Triangle Bra",
    desc: "Contemporary triangle bra in soft mircofiber. Features a distinctive sporty aesthetic with bold hardware and reinforced bands.",
    id: "u-2",
    img: "/api/artifacts/a17160271210202796e956488d",
    images: [
      "/api/artifacts/a17160271210202796e956488d"
    ],
    moq: "5,000 units",
    category: 'Underwear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Smooth Microfiber Finish", "Adjustable Logo Straps", "Soft Wing Construction", "Hypoallergenic Gusset"],
    colors: [
      { name: "Street Black", hex: "#121212" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Premium Ribbed Leggings",
    desc: "High-waisted ribbed leggings with superior compression and moisture-wicking properties.",
    id: "hp-2",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "1,500 units",
    category: 'Activewear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Ribbed Texture", "4-Way Stretch", "Breathable Fabric", "Sustainable Dye"],
    colors: [
      { name: "Forest", hex: "#228b22" },
      { name: "Midnight", hex: "#191970" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true }
    ]
  },
  {
    name: "Seamless Bamboo Bralette",
    desc: "Our best-selling eco-friendly bralette. Double-layered bamboo fabric for natural anti-bacterial protection and cloud-like softness.",
    id: "l-2",
    img: "https://ais-pre-n5brwowz22pkzvvbynlxdl-167180680129.asia-east1.run.app/api/artifacts/a1716023773010b90a6e0e0f3",
    images: [
      "https://ais-pre-n5brwowz22pkzvvbynlxdl-167180680129.asia-east1.run.app/api/artifacts/a1716023773010b90a6e0e0f3",
      "https://ais-pre-n5brwowz22pkzvvbynlxdl-167180680129.asia-east1.run.app/api/artifacts/a17160237728700ff3123512b9"
    ],
    moq: "2,500 units",
    category: 'Lingerie',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["95% Organic Bamboo", "Dermatologically Tested", "Wire-Free Construction", "High Breathability"],
    colors: [
      { name: "Onyx", hex: "#000000" },
      { name: "Sand", hex: "#c2b280" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Post-Surgical Innerwear",
    desc: "Specially engineered medical-grade innerwear with front-closure systems. Designed for maximum recovery comfort.",
    id: "i-3",
    img: "https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1558444479-7f519555121b?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "1,000 units",
    category: 'Innerwear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Front-Zip Closure", "Compression Zones", "Moisture-Wicking Modal", "Sterilized Packaging Available"],
    colors: [
        { name: "White", hex: "#ffffff" },
        { name: "Beige", hex: "#f5f5dc" }
    ],
    sizes: [
        { name: "M", available: true },
        { name: "L", available: true },
        { name: "XL", available: true }
    ]
  },
  {
    name: "Bamboo Ribbed Lounge Set",
    desc: "Ultra-soft ribbed knit lounge set. Part of our eco-luxury sleepwear collection for premium retailers.",
    id: "s-2",
    img: "https://images.unsplash.com/photo-1558444479-c84825d2ea9e?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1558444479-c84825d2ea9e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1558444479-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000"
    ],
    moq: "2,000 sets",
    category: 'Sleepwear',
    range: 'Women’s & Girls’',
    gender: 'Women',
    specs: ["Ribbed Bamboo Texture", "Adjustable Drawstring", "Side Pockets", "Eco-Friendly Dyes"],
    colors: [
      { name: "Sage", hex: "#9faf91" },
      { name: "Dusty Rose", hex: "#dcae96" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true }
    ]
  },
  {
    name: "Ergonomic Performance Trunks", 
    desc: "Contoured pouch design with stay-put leg technology. Premium everyday comfort for the active man.", 
    id: "i-2",
    img: "https://images.unsplash.com/photo-1513233866299-8ee33a7e4b9f?auto=format&fit=crop&q=80&w=1000",
    moq: "4,000 units",
    category: 'Innerwear',
    range: 'Men’s & Boys’',
    gender: 'Men',
    specs: ["Micro-Modal Fabric", "3D Contoured Pouch", "Anti-Roll Waistband", "Flatlock Seams"],
    colors: [
      { name: "Steel Grey", hex: "#778899" },
      { name: "Jet Black", hex: "#0a0a0a" },
      { name: "Deep Sea", hex: "#000080" }
    ],
    sizes: [
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true },
      { name: "XXL", available: true }
    ]
  },
  {
    name: "Cotton Knit Romper",
    desc: "Soft organic cotton knit romper with snap closures. Designed for comfort and easy dressing for infants and toddlers.",
    id: "k-2",
    img: "https://images.unsplash.com/photo-1522771935876-2497116a7a9e?auto=format&fit=crop&q=80&w=1000",
    moq: "2,000 units",
    category: 'Kidswear',
    range: 'Kidswear',
    gender: 'Kids',
    specs: ["100% Organic Cotton", "Nickel-Free Snaps", "Soft Ribbed Cuffs", "Non-Toxic Dyes"],
    colors: [
      { name: "Cloud", hex: "#f0f0f0" },
      { name: "Sky", hex: "#87ceeb" },
      { name: "Peach", hex: "#ffdab9" }
    ],
    sizes: [
      { name: "3M", available: true },
      { name: "6M", available: true },
      { name: "12M", available: true }
    ]
  },
  {
    name: "Kids' Active Swim Shorts",
    desc: "Quick-dry performance swim shorts with fun prints. Chlorine-resistant fabric for long-lasting wear.",
    id: "k-3",
    img: "https://images.unsplash.com/photo-1519234221713-301904625881?auto=format&fit=crop&q=80&w=1000",
    moq: "3,000 units",
    category: 'Kidswear',
    range: 'Kidswear',
    gender: 'Kids',
    specs: ["UPF 50+ Protection", "Quick-Dry Nylon", "Mesh Lining", "Elastic Waistband"],
    colors: [
      { name: "Tropical Blue", hex: "#00bfff" },
      { name: "Sunset Orange", hex: "#ff4500" }
    ],
    sizes: [
      { name: "2T", available: true },
      { name: "4T", available: true },
      { name: "6T", available: true }
    ]
  },
  {
    name: "Performance Technical Jacket",
    desc: "Lightweight, water-resistant technical jacket with breathable mesh lining. Engineered for outdoor performance and urban style.",
    id: "ok-1",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000",
    moq: "1,500 units",
    category: 'Jackets',
    range: 'Other Knitwear',
    gender: 'Unisex',
    specs: ["DWR Coating", "YKK Zippers", "Reflective Detailing", "Adjustable Cuffs"],
    colors: [
      { name: "Stealth Black", hex: "#1a1a1a" },
      { name: "Electric Lime", hex: "#ccff00" }
    ],
    sizes: [
      { name: "S", available: true },
      { name: "M", available: true },
      { name: "L", available: true },
      { name: "XL", available: true }
    ]
  }
];
