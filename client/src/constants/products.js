/**
 * Creed Lifestyle Nepal - Product Catalog
 * All products linked to official Daraz store
 * Stock status managed via /public/stock.json
 */

export const PRODUCTS = [
  {
    id: 'hair-volumizing-powder',
    name: 'Hair Volumizing Powder',
    category: 'Hair Care',
    description: 'Premium hair volumizing powder for instant volume and texture',
    price: 1299,
    darazLink: 'https://s.daraz.com.np/s.Z00Jl',
    image: '/products/hair-volumizing-powder.jpg',
    feature: 'Hair Volume',
    icon: 'Zap',
    isCombo: false,
    highlight: false,
  },
  {
    id: 'ball-body-trimmer',
    name: 'Ball and Body Trimmer',
    category: 'Grooming Tools',
    description: 'Waterproof body trimmer with precision blades',
    price: 2499,
    darazLink: 'https://s.daraz.com.np/s.Z00Jr',
    image: '/products/ball-body-trimmer.jpg',
    feature: 'Precision Trim',
    icon: 'Scissors',
    isCombo: false,
    highlight: false,
  },
  {
    id: 'beard-groomer-pro',
    name: 'Beard Groomer Pro',
    category: 'Beard Care',
    description: 'Professional beard grooming tool with adjustable settings',
    price: 1899,
    darazLink: 'https://s.daraz.com.np/s.Z00JC',
    image: '/products/beard-groomer-pro.jpg',
    feature: 'Beard Styling',
    icon: 'Zap',
    isCombo: false,
    highlight: false,
  },
  {
    id: 'silicone-scalp-massager',
    name: 'Silicone Scalp Massager',
    category: 'Scalp Care',
    description: 'Electric scalp massager for improved blood circulation',
    price: 1599,
    darazLink: 'https://s.daraz.com.np/s.Z00rY',
    image: '/products/silicone-scalp-massager.jpg',
    feature: 'Scalp Health',
    icon: 'Zap',
    isCombo: false,
    highlight: false,
  },
  {
    id: 'exfoliator',
    name: 'Exfoliator',
    category: 'Skin Care',
    description: 'Premium body exfoliator for smooth, healthy skin',
    price: 899,
    darazLink: 'https://s.daraz.com.np/s.Z00rf',
    image: '/products/exfoliator.jpg',
    feature: 'Skin Polish',
    icon: 'Sparkles',
    isCombo: false,
    highlight: false,
  },
  {
    id: 'back-exfoliator',
    name: 'Back Exfoliator',
    category: 'Skin Care',
    description: 'Specialized back exfoliator for hard-to-reach areas',
    price: 999,
    darazLink: 'https://s.daraz.com.np/s.Z00Ia',
    image: '/products/back-exfoliator.jpg',
    feature: 'Back Care',
    icon: 'Sparkles',
    isCombo: false,
    highlight: false,
  },
  {
    id: 'power-trio',
    name: 'Power Trio',
    category: 'Combo Packages',
    description: 'Ultimate combo: Scalp Massager + Back & Body Exfoliator + Bonus Items',
    price: 4299,
    darazLink: 'https://s.daraz.com.np/s.Z00I4',
    image: '/products/power-trio.jpg',
    feature: 'Elite Combo',
    icon: 'Crown',
    isCombo: true,
    highlight: true,
    badge: 'Best Value',
    shimmer: true,
    items: ['Silicone Scalp Massager', 'Back Exfoliator', 'Body Exfoliator'],
  },
  {
    id: 'tactical-grooming-duo',
    name: 'Tactical Grooming Duo',
    category: 'Combo Packages',
    description: 'Premium duo: Scalp Massager + Body Exfoliator for complete grooming',
    price: 3299,
    darazLink: 'https://s.daraz.com.np/s.Z00rN',
    image: '/products/grooming-duo.jpg',
    feature: 'Elite Combo',
    icon: 'Crown',
    isCombo: true,
    highlight: true,
    badge: 'Best Value',
    shimmer: true,
    items: ['Silicone Scalp Massager', 'Body Exfoliator'],
  },
];

export const SOCIAL_LINKS = {
  instagram: {
    url: 'https://www.instagram.com/thecreedlifestyle?igsh=MWs1cmJiM21rMHNtaw==',
    label: 'Instagram',
    icon: 'Instagram',
  },
  facebook: {
    url: 'https://www.facebook.com/share/1FHbzcrj9v/',
    label: 'Facebook',
    icon: 'Facebook',
  },
  daraz: {
    url: 'https://s.daraz.com.np/s.Z00rj',
    label: 'Daraz Store',
    icon: 'ShoppingBag',
  },
  tiktok: {
    url: 'https://www.tiktok.com/@creed.lifestyle',
    label: 'TikTok',
    icon: 'Music',
  },
};

export const getProductById = (id) => {
  return PRODUCTS.find((product) => product.id === id);
};

export const getComboProducts = () => {
  return PRODUCTS.filter((product) => product.isCombo);
};

export const getStandardProducts = () => {
  return PRODUCTS.filter((product) => !product.isCombo);
};
