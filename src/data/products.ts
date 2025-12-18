export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  shortDescription: string;
  images: string[];
  specifications?: Record<string, string>;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "power-tools",
    name: "Power Tools",
    description: "Professional-grade power tools for every job",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    productCount: 450,
    subcategories: ["Drills", "Saws", "Grinders", "Sanders", "Impact Drivers"]
  },
  {
    id: "generators",
    name: "Generators",
    description: "Reliable power solutions for any environment",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    productCount: 120,
    subcategories: ["Portable", "Standby", "Inverter", "Industrial"]
  },
  {
    id: "construction-equipment",
    name: "Construction Equipment",
    description: "Heavy-duty equipment for construction sites",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    productCount: 380,
    subcategories: ["Concrete Mixers", "Compactors", "Scaffolding", "Lifting Equipment"]
  },
  {
    id: "agricultural-tools",
    name: "Agricultural Tools",
    description: "Essential tools for farming and agriculture",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=600&q=80",
    productCount: 290,
    subcategories: ["Tillers", "Sprayers", "Harvesters", "Irrigation"]
  },
  {
    id: "nails-screws",
    name: "Nails & Screws",
    description: "Complete fastening solutions",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=80",
    productCount: 850,
    subcategories: ["Wood Screws", "Machine Screws", "Nails", "Anchors", "Bolts"]
  },
  {
    id: "industrial-tools",
    name: "Industrial Tools",
    description: "Precision tools for industrial applications",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    productCount: 520,
    subcategories: ["Wrenches", "Pliers", "Measurement", "Cutting Tools"]
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Professional Cordless Drill 20V",
    category: "power-tools",
    subcategory: "Drills",
    shortDescription: "High-performance cordless drill with brushless motor",
    description: "Experience unmatched power and precision with our Professional Cordless Drill. Featuring a brushless motor for extended runtime and durability, this drill delivers up to 2,000 RPM and 530 in-lbs of torque. The ergonomic design ensures comfortable operation during extended use.",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
    ],
    specifications: {
      "Voltage": "20V Max",
      "Speed": "0-2000 RPM",
      "Torque": "530 in-lbs",
      "Chuck Size": "1/2 inch",
      "Weight": "3.5 lbs"
    },
    featured: true
  },
  {
    id: "2",
    name: "Industrial Angle Grinder 9-inch",
    category: "power-tools",
    subcategory: "Grinders",
    shortDescription: "Heavy-duty angle grinder for demanding applications",
    description: "Built for the toughest jobs, this Industrial Angle Grinder features a powerful 15-amp motor and 9-inch disc capacity. Perfect for cutting, grinding, and polishing metal, concrete, and stone. Includes anti-vibration handle and dust ejection system.",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
    ],
    specifications: {
      "Power": "15 Amp",
      "Disc Size": "9 inches",
      "No-Load Speed": "6,500 RPM",
      "Spindle Thread": "5/8\"-11"
    },
    featured: true
  },
  {
    id: "3",
    name: "Portable Generator 5000W",
    category: "generators",
    subcategory: "Portable",
    shortDescription: "Reliable portable power for job sites and emergencies",
    description: "This powerful 5000W portable generator provides reliable power wherever you need it. Features a fuel-efficient engine, multiple outlets, and low-oil shutdown protection. Perfect for construction sites, outdoor events, and emergency backup power.",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    specifications: {
      "Running Watts": "5000W",
      "Starting Watts": "6250W",
      "Fuel Tank": "6.6 gallons",
      "Run Time": "10 hours @ 50% load",
      "Outlets": "4x 120V, 1x 240V"
    },
    featured: true
  },
  {
    id: "4",
    name: "Concrete Mixer 9 Cu Ft",
    category: "construction-equipment",
    subcategory: "Concrete Mixers",
    shortDescription: "Heavy-duty concrete mixer for construction projects",
    description: "Professional-grade concrete mixer with 9 cubic foot drum capacity. Features a durable steel drum, powerful motor, and easy-pour design. Mounted on sturdy wheels for job site mobility.",
    images: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80"
    ],
    specifications: {
      "Drum Capacity": "9 Cu Ft",
      "Motor": "1.5 HP Electric",
      "Drum Speed": "28 RPM",
      "Weight": "350 lbs"
    },
    featured: true
  },
  {
    id: "5",
    name: "Agricultural Power Tiller",
    category: "agricultural-tools",
    subcategory: "Tillers",
    shortDescription: "Efficient power tiller for soil preparation",
    description: "Prepare your soil efficiently with this powerful agricultural tiller. Features adjustable tilling width, forward and reverse gears, and ergonomic handles. Ideal for gardens, farms, and landscaping projects.",
    images: [
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&q=80"
    ],
    specifications: {
      "Engine": "6.5 HP Gas",
      "Tilling Width": "12-24 inches",
      "Tilling Depth": "Up to 8 inches",
      "Transmission": "Chain Drive"
    },
    featured: true
  },
  {
    id: "6",
    name: "Stainless Steel Screws Assortment",
    category: "nails-screws",
    subcategory: "Wood Screws",
    shortDescription: "Premium stainless steel screws for durability",
    description: "Complete assortment of stainless steel screws in various sizes. Corrosion-resistant and ideal for outdoor and marine applications. Includes flat head, pan head, and oval head varieties.",
    images: [
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80"
    ],
    specifications: {
      "Material": "304 Stainless Steel",
      "Sizes": "#6 to #14",
      "Lengths": "1/2\" to 3\"",
      "Quantity": "1000+ pieces"
    },
    featured: true
  },
  {
    id: "7",
    name: "Professional Torque Wrench Set",
    category: "industrial-tools",
    subcategory: "Wrenches",
    shortDescription: "Precision torque wrenches for accurate fastening",
    description: "High-precision torque wrench set for professional applications. Features click-type mechanism, dual-scale readings, and includes multiple socket sizes. Essential for automotive, aerospace, and industrial work.",
    images: [
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80"
    ],
    specifications: {
      "Torque Range": "10-150 ft-lbs",
      "Drive Size": "1/2 inch",
      "Accuracy": "±3%",
      "Includes": "12 sockets"
    },
    featured: true
  },
  {
    id: "8",
    name: "Heavy Duty Circular Saw",
    category: "power-tools",
    subcategory: "Saws",
    shortDescription: "Powerful circular saw for precision cutting",
    description: "Professional circular saw with 15-amp motor and 7-1/4\" blade capacity. Features laser guide, dust blower, and electric brake. Perfect for framing, decking, and general carpentry.",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
    ],
    specifications: {
      "Power": "15 Amp",
      "Blade Size": "7-1/4 inches",
      "No-Load Speed": "5,800 RPM",
      "Bevel Capacity": "56°"
    },
    featured: true
  },
  {
    id: "9",
    name: "Inverter Generator 3000W",
    category: "generators",
    subcategory: "Inverter",
    shortDescription: "Quiet inverter generator for sensitive electronics",
    description: "Ultra-quiet inverter generator producing clean, stable power safe for sensitive electronics. Parallel capable, fuel efficient, and lightweight design. Ideal for RVs, camping, and home backup.",
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    specifications: {
      "Running Watts": "3000W",
      "Noise Level": "58 dBA",
      "Weight": "46 lbs",
      "Run Time": "8 hours @ 25% load"
    },
    featured: false
  },
  {
    id: "10",
    name: "Scaffolding Tower System",
    category: "construction-equipment",
    subcategory: "Scaffolding",
    shortDescription: "Modular scaffolding for safe elevated work",
    description: "Complete modular scaffolding tower system for safe elevated work. Quick assembly without tools, adjustable height, and includes safety guardrails and locking casters.",
    images: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80"
    ],
    specifications: {
      "Platform Height": "Up to 12 ft",
      "Load Capacity": "1000 lbs",
      "Platform Size": "5 ft x 2.5 ft",
      "Material": "Aluminum"
    },
    featured: false
  },
  {
    id: "11",
    name: "Backpack Sprayer 4-Gallon",
    category: "agricultural-tools",
    subcategory: "Sprayers",
    shortDescription: "Ergonomic sprayer for efficient application",
    description: "Professional backpack sprayer with 4-gallon capacity. Features padded straps, multiple nozzle options, and reliable piston pump. Perfect for herbicides, pesticides, and fertilizers.",
    images: [
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&q=80"
    ],
    specifications: {
      "Capacity": "4 gallons",
      "Pressure": "Up to 90 PSI",
      "Spray Distance": "Up to 35 ft",
      "Nozzles": "4 included"
    },
    featured: false
  },
  {
    id: "12",
    name: "Digital Caliper Set",
    category: "industrial-tools",
    subcategory: "Measurement",
    shortDescription: "Precision digital calipers for accurate measurement",
    description: "High-precision digital caliper set with 6-inch capacity. Features LCD display, inch/metric conversion, and includes protective case. Essential for machining and quality control.",
    images: [
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80"
    ],
    specifications: {
      "Range": "0-6 inches",
      "Resolution": "0.0005 inches",
      "Accuracy": "±0.001 inches",
      "Display": "Large LCD"
    },
    featured: false
  }
];

export const featuredProducts = products.filter(p => p.featured);

export const getProductsByCategory = (categoryId: string) => 
  products.filter(p => p.category === categoryId);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const getCategoryById = (id: string) => 
  categories.find(c => c.id === id);
