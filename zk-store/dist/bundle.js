/* ==========================================================================
   ZK STORE — UNIVERSAL FULL-STACK STANDALONE BUNDLE
   All 20 Pages, Components, 50 Products Catalog, Backend API Client & Reactive Store
   ========================================================================== */
(function() {
  'use strict';


/* ==================== FILE: js/data/categories.js ==================== */
// ZK STORE — Categories Data

const MEN_CATEGORIES = [
  {
    id: 'men-t-shirts',
    slug: 't-shirts',
    gender: 'men',
    name: 'T-Shirts',
    itemCount: '12 Styles',
    description: 'Heavyweight organic cotton, tailored oversized cuts, and luxury basics.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-shirts',
    slug: 'shirts',
    gender: 'men',
    name: 'Shirts',
    itemCount: '8 Styles',
    description: 'Crisp Oxford cotton, relaxed European linen, and modern structured shirts.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-hoodies',
    slug: 'hoodies',
    gender: 'men',
    name: 'Hoodies',
    itemCount: '6 Styles',
    description: '480GSM loopback French terry with architectural silhouettes.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-sweatshirts',
    slug: 'sweatshirts',
    gender: 'men',
    name: 'Sweatshirts',
    itemCount: '5 Styles',
    description: 'Minimalist crewnecks crafted from bespoke combed cotton fleece.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-jackets',
    slug: 'jackets',
    gender: 'men',
    name: 'Jackets',
    itemCount: '7 Styles',
    description: 'Structured bombers, Japanese selvedge denim, and winter outwear.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-jeans',
    slug: 'jeans',
    gender: 'men',
    name: 'Jeans',
    itemCount: '9 Styles',
    description: 'Premium selvedge denim with bespoke stone washes and relaxed drape.',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-trousers',
    slug: 'trousers',
    gender: 'men',
    name: 'Trousers',
    itemCount: '6 Styles',
    description: 'Pleated wool-blend trousers and tailored modern drape bottoms.',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-shorts',
    slug: 'shorts',
    gender: 'men',
    name: 'Shorts',
    itemCount: '4 Styles',
    description: 'Tailored casual shorts engineered for warm days and resort living.',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'men-co-ord-sets',
    slug: 'co-ord-sets',
    gender: 'men',
    name: 'Co-Ord Sets',
    itemCount: '5 Styles',
    description: 'Monochromatic relaxed sets designed for unified modern streetwear.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
  }
];

const WOMEN_CATEGORIES = [
  {
    id: 'women-tops',
    slug: 'tops',
    gender: 'women',
    name: 'Tops',
    itemCount: '10 Styles',
    description: 'Satin corset tops, sculpted ribbed basics, and luxury draping.',
    image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-shirts',
    slug: 'shirts',
    gender: 'women',
    name: 'Shirts',
    itemCount: '8 Styles',
    description: 'Oversized poplin, pure silk shirts, and French cuff silhouettes.',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-dresses',
    slug: 'dresses',
    gender: 'women',
    name: 'Dresses',
    itemCount: '12 Styles',
    description: 'Slip dresses, structural midi gowns, and effortless summer silhouettes.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-hoodies',
    slug: 'hoodies',
    gender: 'women',
    name: 'Hoodies',
    itemCount: '5 Styles',
    description: 'Plush oversized fleece with dropped shoulders and minimal aesthetics.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-sweatshirts',
    slug: 'sweatshirts',
    gender: 'women',
    name: 'Sweatshirts',
    itemCount: '4 Styles',
    description: 'Sculpted cropped pullovers and timeless French terry knitwear.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-jackets',
    slug: 'jackets',
    gender: 'women',
    name: 'Jackets',
    itemCount: '8 Styles',
    description: 'Double-breasted tailoring, cashmere trench coats, and cropped denim.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-jeans',
    slug: 'jeans',
    gender: 'women',
    name: 'Jeans',
    itemCount: '7 Styles',
    description: 'High-rise straight cuts, wide leg architectural denim, and vintage blues.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-trousers',
    slug: 'trousers',
    gender: 'women',
    name: 'Trousers',
    itemCount: '6 Styles',
    description: 'High-waisted fluid wide leg pants and structured cigarette trousers.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-skirts',
    slug: 'skirts',
    gender: 'women',
    name: 'Skirts',
    itemCount: '6 Styles',
    description: 'Bias-cut silk slip skirts, pleated wool a-lines, and leather minis.',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'women-co-ord-sets',
    slug: 'co-ord-sets',
    gender: 'women',
    name: 'Co-Ord Sets',
    itemCount: '5 Styles',
    description: 'Seamless knitted twin sets and tailored linen matching ensembles.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
  }
];

const STYLE_COLLECTIONS = [
  {
    id: 'casual-essentials',
    title: 'Casual Essentials',
    subtitle: 'Foundation pieces engineered for understated daily refinement.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Core Wardrobe'
  },
  {
    id: 'streetwear',
    title: 'Streetwear',
    subtitle: 'Heavyweight silhouettes, raw textures, and modern urban proportion.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80',
    tag: 'Limited Drops'
  },
  {
    id: 'minimal-classics',
    title: 'Minimal Classics',
    subtitle: 'Monochromatic precision. Uncompromised tailoring in pure cotton and wool.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    tag: 'Timeless'
  },
  {
    id: 'everyday-luxury',
    title: 'Everyday Luxury',
    subtitle: 'Silk-blend shirting, Italian knitwear, and cashmere accents.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Atelier Edition'
  },
  {
    id: 'modern-formal',
    title: 'Modern Formal',
    subtitle: 'Relaxed structure with razor-sharp cuts for gallery and gala.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    tag: 'Tailored Line'
  },
  {
    id: 'weekend-collection',
    title: 'Weekend Collection',
    subtitle: 'Effortless resort silhouettes and breathable washed cottons.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Resort Living'
  }
];

/* ==================== FILE: js/data/products.js ==================== */
// ZK STORE — Complete Luxury Fashion Catalog (50 Unique Products)

const COLOR_MAP = {
  'Black': '#111111',
  'White': '#FFFFFF',
  'Cream': '#F7F5F0',
  'Beige': '#D8C8B5',
  'Brown': '#5A3D28',
  'Grey': '#9E9E9E',
  'Charcoal': '#292929',
  'Navy Blue': '#1A2942',
  'Sky Blue': '#87CEEB',
  'Olive Green': '#556B2F',
  'Forest Green': '#224422',
  'Burgundy': '#6B1D2F',
  'Red': '#8B0000',
  'Pink': '#E8B4B8',
  'Lavender': '#C5A3CF',
  'Chocolate': '#3D2314',
  'Khaki': '#C3B091'
};

const PRODUCTS = [
  // ==========================================
  // MEN COLLECTION (25 UNIQUE PRODUCTS)
  // ==========================================
  {
    id: 'ZK-M01',
    name: 'Premium Oversized T-Shirt',
    category: 'T-Shirts',
    categorySlug: 't-shirts',
    gender: 'men',
    originalPrice: 5500,
    salePrice: 3999,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 48,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Beige', hex: '#D8C8B5' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'A benchmark in luxury casual wear. Cut from custom-milled 280GSM heavyweight combed organic cotton, this t-shirt provides a structured boxy silhouette with dropped shoulders and a dense rib-knit collar that retains shape through dozens of wears.',
    material: '100% Combed Heavyweight Organic Cotton (280 GSM)',
    care: 'Cold gentle machine wash inside out. Do not tumble dry. Warm iron on reverse.',
    reviews: [
      { author: 'Hamza Malik', rating: 5, date: 'October 14, 2026', comment: 'The weight of this tee is perfection. Doesn’t cling, hangs with real architectural presence.' },
      { author: 'Taimur Khan', rating: 5, date: 'September 28, 2026', comment: 'Comparable to Cole Buxton or Fear of God at a fraction of the import price. Incredible luxury.' }
    ]
  },
  {
    id: 'ZK-M02',
    name: 'Classic Cotton T-Shirt',
    category: 'T-Shirts',
    categorySlug: 't-shirts',
    gender: 'men',
    originalPrice: 4200,
    salePrice: 2999,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 32,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Grey', hex: '#9E9E9E' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'An understated daily essential with a tailored regular cut. Soft-washed Peruvian pima cotton offers natural breathability and a silk-soft hand feel for versatile everyday styling.',
    material: '100% Extra-Long Staple Pima Cotton (190 GSM)',
    care: 'Machine wash 30°C. Reshape while damp.',
    reviews: [
      { author: 'Bilal Farooq', rating: 5, date: 'October 2, 2026', comment: 'Ultra clean neckline and perfect shoulder drape under blazers.' }
    ]
  },
  {
    id: 'ZK-M03',
    name: 'Essential Black T-Shirt',
    category: 'T-Shirts',
    categorySlug: 't-shirts',
    gender: 'men',
    originalPrice: 4500,
    salePrice: 3200,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 65,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    description: 'Vat-dyed deep obsidian black fabric engineered to resist fading after extensive washes. Features clean twin-needle stitching and an anti-curl ribbed collar.',
    material: '100% Ring-Spun Compact Cotton (220 GSM)',
    care: 'Wash cold inside out with dark colors only.',
    reviews: [
      { author: 'Saad R.', rating: 5, date: 'October 20, 2026', comment: 'Stays pitch black even after 15 washes. Best black tee in Pakistan.' }
    ]
  },
  {
    id: 'ZK-M04',
    name: 'Graphic Streetwear Tee',
    category: 'T-Shirts',
    categorySlug: 't-shirts',
    gender: 'men',
    originalPrice: 5800,
    salePrice: 4299,
    discountPercent: 26,
    rating: 4.7,
    reviewCount: 29,
    isNew: true,
    isBestSeller: false,
    stockStatus: 'Only 4 left',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Forest Green', hex: '#224422' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Featuring subtle high-density silk-screen typography honoring the ZK STORE Atelier. Distressed vintage wash treatment provides authentic lived-in luxury.',
    material: '100% Acid-Washed Combed Cotton (260 GSM)',
    care: 'Turn inside out to iron. Do not iron directly on print.',
    reviews: [
      { author: 'Daniyal A.', rating: 5, date: 'September 12, 2026', comment: 'The typography is tastefully minimal. Premium texture.' }
    ]
  },
  {
    id: 'ZK-M05',
    name: 'Premium White Shirt',
    category: 'Shirts',
    categorySlug: 'shirts',
    gender: 'men',
    originalPrice: 8500,
    salePrice: 5999,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 41,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cream', hex: '#F7F5F0' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A masterclass in formal sartorial elegance. Made from Italian 120s two-ply poplin cotton with mother-of-pearl buttons, structured semi-spread collar, and tailored French seams.',
    material: '100% Giza Cotton Poplin (120s Two-Ply)',
    care: 'Dry clean recommended or gentle machine wash, line dry.',
    reviews: [
      { author: 'Shahmeer Sheikh', rating: 5, date: 'October 11, 2026', comment: 'Exquisite shirt. Crisp collar and pristine drape. Wore it to a wedding in Lahore.' }
    ]
  },
  {
    id: 'ZK-M06',
    name: 'Casual Oxford Shirt',
    category: 'Shirts',
    categorySlug: 'shirts',
    gender: 'men',
    originalPrice: 7200,
    salePrice: 4999,
    discountPercent: 31,
    rating: 4.8,
    reviewCount: 37,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Pink', hex: '#E8B4B8' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight basketweave Oxford cloth garment-washed for broken-in softness from day one. Features an unlined button-down collar with a graceful roll.',
    material: '100% Long-Staple Oxford Cotton',
    care: 'Warm wash. Can be lightly steamed or pressed.',
    reviews: [
      { author: 'Ali Haider', rating: 5, date: 'October 4, 2026', comment: 'Classic fit with modern armholes. Very comfortable all day.' }
    ]
  },
  {
    id: 'ZK-M07',
    name: 'Linen Summer Shirt',
    category: 'Shirts',
    categorySlug: 'shirts',
    gender: 'men',
    originalPrice: 7900,
    salePrice: 5499,
    discountPercent: 30,
    rating: 4.9,
    reviewCount: 22,
    isNew: true,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Olive Green', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Crafted from pure Normandy flax linen. Naturally thermoregulating and breathable with a fluid camp collar that transitions seamlessly from coastal escapes to evening dinners.',
    material: '100% French Flax Linen',
    care: 'Hand wash or gentle cycle. Embraces natural relaxed wrinkling.',
    reviews: [
      { author: 'Zubair K.', rating: 5, date: 'September 19, 2026', comment: 'The breathability in Karachi heat is unmatched. Pure luxury feel.' }
    ]
  },
  {
    id: 'ZK-M08',
    name: 'Oversized Shirt',
    category: 'Shirts',
    categorySlug: 'shirts',
    gender: 'men',
    originalPrice: 7500,
    salePrice: 5199,
    discountPercent: 31,
    rating: 4.7,
    reviewCount: 19,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Navy Blue', hex: '#1A2942' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A contemporary silhouette with exaggerated drop shoulders, curved hem, and matte tonal horn buttons. Layers impeccably over base tees.',
    material: '100% Dense Twill Cotton',
    care: 'Machine wash cold. Low tumble dry.',
    reviews: [
      { author: 'Omar S.', rating: 4, date: 'October 1, 2026', comment: 'Very oversized, recommend going true to size for intended aesthetic.' }
    ]
  },
  {
    id: 'ZK-M09',
    name: 'Premium Hoodie',
    category: 'Hoodies',
    categorySlug: 'hoodies',
    gender: 'men',
    originalPrice: 9500,
    salePrice: 6999,
    discountPercent: 26,
    rating: 5.0,
    reviewCount: 74,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Grey', hex: '#9E9E9E' },
      { name: 'Burgundy', hex: '#6B1D2F' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Constructed from bespoke 500GSM custom-knitted loopback terry. Featuring a double-layered crossover hood with no drawstrings for a sleek minimalist front profile.',
    material: '100% Heavy French Terry (500 GSM)',
    care: 'Cold water wash inside out, flat dry.',
    reviews: [
      { author: 'Fahad Mehmood', rating: 5, date: 'October 25, 2026', comment: 'The hood stands upright without collapsing. Substantial weight, supreme comfort.' }
    ]
  },
  {
    id: 'ZK-M10',
    name: 'Essential Pullover Hoodie',
    category: 'Hoodies',
    categorySlug: 'hoodies',
    gender: 'men',
    originalPrice: 8200,
    salePrice: 5999,
    discountPercent: 27,
    rating: 4.8,
    reviewCount: 38,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Olive Green', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'An everyday staple featuring concealed side-seam pockets instead of the traditional kangaroo pouch, keeping lines razor-clean and clutter-free.',
    material: '85% Organic Cotton, 15% Recycled Poly Core (420 GSM)',
    care: 'Gentle cycle wash.',
    reviews: [
      { author: 'Waqas N.', rating: 5, date: 'October 8, 2026', comment: 'Love the hidden side pockets! Cleanest look I have seen.' }
    ]
  },
  {
    id: 'ZK-M11',
    name: 'Zip-Up Hoodie',
    category: 'Hoodies',
    categorySlug: 'hoodies',
    gender: 'men',
    originalPrice: 9200,
    salePrice: 6799,
    discountPercent: 26,
    rating: 4.8,
    reviewCount: 27,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Grey', hex: '#9E9E9E' },
      { name: 'Khaki', hex: '#C3B091' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Equipped with bespoke matte black two-way YKK Excella zippers, allowing versatile styling from top and bottom. Ribbed side gussets provide optimal mobility.',
    material: '100% Combed Cotton Fleece (450 GSM)',
    care: 'Zip before washing. Cold wash.',
    reviews: [
      { author: 'Mustafa K.', rating: 5, date: 'September 22, 2026', comment: 'The two-way zipper is super smooth. Feels like Balenciaga.' }
    ]
  },
  {
    id: 'ZK-M12',
    name: 'Crewneck Sweatshirt',
    category: 'Sweatshirts',
    categorySlug: 'sweatshirts',
    gender: 'men',
    originalPrice: 7500,
    salePrice: 5299,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 33,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Black', hex: '#111111' },
      { name: 'Forest Green', hex: '#224422' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Features subtle tonal embroidery of the ZK crest on the left wrist. Finished with an authentic V-insert at the neck and reinforced ribbed cuffs.',
    material: '100% Heavyweight Cotton Terry (400 GSM)',
    care: 'Machine wash cold with like colors.',
    reviews: [
      { author: 'Arsalan G.', rating: 5, date: 'October 15, 2026', comment: 'The cream shade is sophisticated, warm ivory tone.' }
    ]
  },
  {
    id: 'ZK-M13',
    name: 'Premium Bomber Jacket',
    category: 'Jackets',
    categorySlug: 'jackets',
    gender: 'men',
    originalPrice: 16500,
    salePrice: 11999,
    discountPercent: 27,
    rating: 5.0,
    reviewCount: 52,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'Only 3 left',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Olive Green', hex: '#556B2F' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A contemporary luxury flight jacket. Water-repellent matte Japanese nylon shell, filled with cruelty-free PrimaLoft thermal insulation. Lined with champagne cupro silk.',
    material: 'Matte Nylon Shell, Cupro Silk Lining, PrimaLoft Fill',
    care: 'Specialist dry clean only.',
    reviews: [
      { author: 'Khurram Shah', rating: 5, date: 'October 18, 2026', comment: 'Masterpiece jacket. The cupro lining feels like liquid silk against the skin.' }
    ]
  },
  {
    id: 'ZK-M14',
    name: 'Denim Jacket',
    category: 'Jackets',
    categorySlug: 'jackets',
    gender: 'men',
    originalPrice: 13500,
    salePrice: 9999,
    discountPercent: 26,
    rating: 4.8,
    reviewCount: 34,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Woven on vintage shuttle looms from 14.5oz raw indigo selvedge denim. Antique brass shank buttons and hand-sanded highlights across stress points.',
    material: '100% Selvedge Indigo Denim (14.5 oz)',
    care: 'Cold soak or hand wash to preserve raw patina.',
    reviews: [
      { author: 'Junaid I.', rating: 5, date: 'September 30, 2026', comment: 'True selvedge ID on the inner placket. Rigid at first, breaking in like gold.' }
    ]
  },
  {
    id: 'ZK-M15',
    name: 'Casual Winter Jacket',
    category: 'Jackets',
    categorySlug: 'jackets',
    gender: 'men',
    originalPrice: 18500,
    salePrice: 13499,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 29,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Brown', hex: '#5A3D28' },
      { name: 'Black', hex: '#111111' },
      { name: 'Beige', hex: '#D8C8B5' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Tailored oversized car coat hybrid featuring heavy Melton wool with a storm-guard throat latch and fleece-lined handwarmer pockets.',
    material: '70% Recycled Melton Wool, 30% Cashmere Blend',
    care: 'Dry clean only.',
    reviews: [
      { author: 'Adeel Tariq', rating: 5, date: 'October 22, 2026', comment: 'Extremely warm for Islamabad winters. Elegant silhouette.' }
    ]
  },
  {
    id: 'ZK-M16',
    name: 'Slim Fit Jeans',
    category: 'Jeans',
    categorySlug: 'jeans',
    gender: 'men',
    originalPrice: 9200,
    salePrice: 6499,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 46,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Tailored narrow from thigh to ankle with 2% elastane recovery fibers for non-constricting all-day comfort. Features custom matte gunmetal rivets.',
    material: '98% Cotton, 2% High-Recovery Elastane (12.5 oz)',
    care: 'Wash cold inside out, line dry in shade.',
    reviews: [
      { author: 'Naveed S.', rating: 5, date: 'October 12, 2026', comment: 'Perfect taper without feeling like a legging. Spot on sizing.' }
    ]
  },
  {
    id: 'ZK-M17',
    name: 'Relaxed Fit Jeans',
    category: 'Jeans',
    categorySlug: 'jeans',
    gender: 'men',
    originalPrice: 9500,
    salePrice: 6899,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 39,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Grey', hex: '#9E9E9E' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: '90s-inspired relaxed cut with a generous thigh and slight stacking over sneakers. Washed in Italy for an authentic vintage sun-faded hue.',
    material: '100% Rigid Ring-Spun Cotton Denim (13.5 oz)',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Usman Ali', rating: 5, date: 'September 25, 2026', comment: 'The drape over Jordan 1s or loafers is impeccable.' }
    ]
  },
  {
    id: 'ZK-M18',
    name: 'Straight Leg Jeans',
    category: 'Jeans',
    categorySlug: 'jeans',
    gender: 'men',
    originalPrice: 8900,
    salePrice: 6299,
    discountPercent: 29,
    rating: 4.7,
    reviewCount: 31,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Navy Blue', hex: '#1A2942' }
    ],
    sizes: ['30', '32', '34', '36'],
    description: 'The archetype of enduring denim design. Mid-rise with a timeless straight leg cut from hip to hem, compatible with boots or dress shoes.',
    material: '100% Sustainable Organic Cotton',
    care: 'Cold water wash inside out.',
    reviews: [
      { author: 'Danish R.', rating: 5, date: 'October 17, 2026', comment: 'Subtle wash, high quality stitching. Fits true to size.' }
    ]
  },
  {
    id: 'ZK-M19',
    name: 'Tailored Trousers',
    category: 'Trousers',
    categorySlug: 'trousers',
    gender: 'men',
    originalPrice: 11000,
    salePrice: 7999,
    discountPercent: 27,
    rating: 5.0,
    reviewCount: 44,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description: 'Double reverse pleats, extended tab waistband with internal rubber shirt-grippers, and unfinished hems for custom sartorial length alterations.',
    material: 'Tropical Wool & Viscose Twill',
    care: 'Dry clean recommended.',
    reviews: [
      { author: 'Rayyan Siddiqui', rating: 5, date: 'October 9, 2026', comment: 'The pleat holds knife-sharp. Extraordinary tailoring.' }
    ]
  },
  {
    id: 'ZK-M20',
    name: 'Cargo Pants',
    category: 'Trousers',
    categorySlug: 'trousers',
    gender: 'men',
    originalPrice: 9800,
    salePrice: 6999,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 36,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Olive Green', hex: '#556B2F' },
      { name: 'Black', hex: '#111111' },
      { name: 'Khaki', hex: '#C3B091' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Streamlined utilitarian aesthetic with flush gusseted pockets and drawcord adjustable ankle cuffs for shifting between tapered and straight drape.',
    material: '100% Cotton Ripstop (280 GSM)',
    care: 'Machine wash 40°C.',
    reviews: [
      { author: 'Faraz H.', rating: 5, date: 'September 29, 2026', comment: 'Rugged yet refined. Not overly baggy like cheap cargos.' }
    ]
  },
  {
    id: 'ZK-M21',
    name: 'Casual Shorts',
    category: 'Shorts',
    categorySlug: 'shorts',
    gender: 'men',
    originalPrice: 5800,
    salePrice: 3999,
    discountPercent: 31,
    rating: 4.7,
    reviewCount: 25,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Olive Green', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '6-inch inseam tailored casual shorts with elasticated drawstring waist and luxury horn aglets. Engineered for resort relaxation.',
    material: 'Cotton Linen Blend',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Hassan N.', rating: 5, date: 'October 3, 2026', comment: 'Ideal length, sitting right above the knee.' }
    ]
  },
  {
    id: 'ZK-M22',
    name: 'Premium Co-Ord Set',
    category: 'Co-Ord Sets',
    categorySlug: 'co-ord-sets',
    gender: 'men',
    originalPrice: 15500,
    salePrice: 10999,
    discountPercent: 29,
    rating: 5.0,
    reviewCount: 31,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'Only 2 left',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Beige', hex: '#D8C8B5' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Matching camp shirt and wide-leg trousers ensemble crafted from fluid matte viscose-cotton blend with subtle textured weave.',
    material: '60% Tencel Lyocell, 40% Fine Cotton',
    care: 'Gentle cycle or dry clean.',
    reviews: [
      { author: 'Zayd K.', rating: 5, date: 'October 19, 2026', comment: 'The most complimented outfit in my wardrobe.' }
    ]
  },
  {
    id: 'ZK-M23',
    name: 'Streetwear Tracksuit',
    category: 'Co-Ord Sets',
    categorySlug: 'co-ord-sets',
    gender: 'men',
    originalPrice: 16800,
    salePrice: 12499,
    discountPercent: 26,
    rating: 4.9,
    reviewCount: 42,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Grey', hex: '#9E9E9E' },
      { name: 'Cream', hex: '#F7F5F0' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight fleece track jacket and relaxed sweatpants set with tonal paneling, premium RiRi zip hardware, and zippered ankle vents.',
    material: '100% Heavy French Terry (480 GSM)',
    care: 'Cold wash inside out.',
    reviews: [
      { author: 'Ovais P.', rating: 5, date: 'October 21, 2026', comment: 'Supreme comfort for flights and weekend lounging.' }
    ]
  },
  {
    id: 'ZK-M24',
    name: 'Knitwear Sweater',
    category: 'Sweatshirts',
    categorySlug: 'sweatshirts',
    gender: 'men',
    originalPrice: 12500,
    salePrice: 8999,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 26,
    isNew: true,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Chocolate', hex: '#3D2314' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Chunky 7-gauge fisherman knit sweater spun from pure Australian merino wool. Exceptionally warm with zero itchiness.',
    material: '100% Extra-Fine Merino Wool',
    care: 'Hand wash cold with wool detergent, dry flat.',
    reviews: [
      { author: 'Babar A.', rating: 5, date: 'October 16, 2026', comment: 'Zero itchiness, feels like a warm hug. Beautiful chocolate shade.' }
    ]
  },
  {
    id: 'ZK-M25',
    name: 'Premium Polo Shirt',
    category: 'T-Shirts',
    categorySlug: 't-shirts',
    gender: 'men',
    originalPrice: 6500,
    salePrice: 4699,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 30,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Buttonless Johnny collar knit polo in silk-cotton blend. Drapes cleanly against the torso for sophisticated smart-casual dressing.',
    material: '70% Long-Staple Cotton, 30% Mulberry Silk',
    care: 'Gentle hand wash or delicate cycle.',
    reviews: [
      { author: 'Farhan Z.', rating: 5, date: 'October 7, 2026', comment: 'The open collar is so refined. Silk blend gives it subtle sheen.' }
    ]
  },

  // ==========================================
  // WOMEN COLLECTION (25 UNIQUE PRODUCTS)
  // ==========================================
  {
    id: 'ZK-W01',
    name: "Women's Premium Oversized T-Shirt",
    category: 'Tops',
    categorySlug: 'tops',
    gender: 'women',
    originalPrice: 4800,
    salePrice: 3499,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 54,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#111111' },
      { name: 'Pink', hex: '#E8B4B8' },
      { name: 'Cream', hex: '#F7F5F0' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Architecturally balanced oversized tee with drop shoulders and a slightly boxy drape. Cut from 240GSM combed cotton with a velvety peach-skin finish.',
    material: '100% Peached Organic Cotton (240 GSM)',
    care: 'Machine wash cold with like colors.',
    reviews: [
      { author: 'Ayesha Khan', rating: 5, date: 'October 16, 2026', comment: 'The fabric feels unbelievably luxurious. Hangs so gracefully.' }
    ]
  },
  {
    id: 'ZK-W02',
    name: 'Essential Fitted T-Shirt',
    category: 'Tops',
    categorySlug: 'tops',
    gender: 'women',
    originalPrice: 3900,
    salePrice: 2799,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 42,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Beige', hex: '#D8C8B5' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Micro-ribbed body-skimming silhouette designed for layering. Features a flattering bateau neckline and double-lined front to ensure zero opacity issues.',
    material: '95% Modal Cotton, 5% Elastane',
    care: 'Gentle cold wash, line dry.',
    reviews: [
      { author: 'Mahnoor B.', rating: 5, date: 'October 5, 2026', comment: 'Not see-through at all! The double lining is a brilliant touch.' }
    ]
  },
  {
    id: 'ZK-W03',
    name: "Classic White Shirt (Women's)",
    category: 'Shirts',
    categorySlug: 'shirts',
    gender: 'women',
    originalPrice: 7800,
    salePrice: 5499,
    discountPercent: 30,
    rating: 4.9,
    reviewCount: 36,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cream', hex: '#F7F5F0' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Crisp poplin tailored button-down with feminine French cuffs and concealed placket. Structured collar stands proudly under blazers.',
    material: '100% Compact Poplin Cotton (100s Two-Fold)',
    care: 'Warm iron while slightly damp for razor-sharp finish.',
    reviews: [
      { author: 'Zara Farooqi', rating: 5, date: 'October 12, 2026', comment: 'The epitome of quiet luxury. The concealed buttons make it look so high-end.' }
    ]
  },
  {
    id: 'ZK-W04',
    name: 'Oversized Button-Down Shirt',
    category: 'Shirts',
    categorySlug: 'shirts',
    gender: 'women',
    originalPrice: 7200,
    salePrice: 4999,
    discountPercent: 31,
    rating: 4.8,
    reviewCount: 29,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Lavender', hex: '#C5A3CF' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Effortless boy-fit cut with exaggerated cuffs and side slits. Wear open as a breezy light jacket or tucked into high-rise denim.',
    material: '100% Breathable Washed Cotton',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Sana Q.', rating: 5, date: 'September 27, 2026', comment: 'The sky blue shade is dreamy. Perfect oversized silhouette.' }
    ]
  },
  {
    id: 'ZK-W05',
    name: 'Premium Crop Top',
    category: 'Tops',
    categorySlug: 'tops',
    gender: 'women',
    originalPrice: 4200,
    salePrice: 2999,
    discountPercent: 29,
    rating: 4.7,
    reviewCount: 38,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Seamless knitted sculpting crop top with wide straps and square neckline. Compressive yet buttery soft fabrication.',
    material: '88% Recycled Polyamide, 12% Spandex',
    care: 'Gentle cycle, hang dry.',
    reviews: [
      { author: 'Marium N.', rating: 5, date: 'October 14, 2026', comment: 'Holds everything securely without digging into shoulders.' }
    ]
  },
  {
    id: 'ZK-W06',
    name: 'Casual Everyday Top',
    category: 'Tops',
    categorySlug: 'tops',
    gender: 'women',
    originalPrice: 4500,
    salePrice: 3199,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 24,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Olive Green', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Fluid drape sleeveless shell top with subtle mock-neck and clean edge finishing. Pairs seamlessly with tailored trousers or skirts.',
    material: '100% Sandwashed Cupro',
    care: 'Hand wash cold or gentle machine cycle.',
    reviews: [
      { author: 'Hira W.', rating: 5, date: 'September 18, 2026', comment: 'Drapes like high-end silk with easy maintenance.' }
    ]
  },
  {
    id: 'ZK-W07',
    name: 'Elegant Satin Top',
    category: 'Tops',
    categorySlug: 'tops',
    gender: 'women',
    originalPrice: 6500,
    salePrice: 4599,
    discountPercent: 29,
    rating: 5.0,
    reviewCount: 47,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'Only 3 left',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Champagne Beige', hex: '#D8C8B5' },
      { name: 'Burgundy', hex: '#6B1D2F' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Heavyweight silk-satin cowl neck camisole cut on the bias for liquid fluid movement across the silhouette. Adjustable delicate rouleau straps.',
    material: '92% Mulberry Silk Satin, 8% Elastane',
    care: 'Dry clean or cool hand wash with silk shampoo.',
    reviews: [
      { author: 'Mehak Rizvi', rating: 5, date: 'October 17, 2026', comment: 'The champagne color is divine under evening lighting. Real luxury.' }
    ]
  },
  {
    id: 'ZK-W08',
    name: "Women's Premium Hoodie",
    category: 'Hoodies',
    categorySlug: 'hoodies',
    gender: 'women',
    originalPrice: 8900,
    salePrice: 6499,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 39,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Pink', hex: '#E8B4B8' },
      { name: 'Lavender', hex: '#C5A3CF' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Cozy cropped silhouette engineered with dropped shoulders and a heavy self-lined hood. Knitted from velvety 450GSM brushed fleece.',
    material: '100% Organic Brushed Cotton (450 GSM)',
    care: 'Cold wash, tumble dry low or flat dry.',
    reviews: [
      { author: 'Fatima Z.', rating: 5, date: 'October 23, 2026', comment: 'The inside is so soft, like cloud fleece. Favorite hoodie ever.' }
    ]
  },
  {
    id: 'ZK-W09',
    name: 'Oversized Sweatshirt',
    category: 'Sweatshirts',
    categorySlug: 'sweatshirts',
    gender: 'women',
    originalPrice: 7800,
    salePrice: 5499,
    discountPercent: 30,
    rating: 4.8,
    reviewCount: 33,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Grey', hex: '#9E9E9E' },
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Forest Green', hex: '#224422' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Relaxed boyfriend cut crewneck sweatshirt featuring clean ribbed collar, hem, and cuffs. Tonal embroidered ZK STORE initials at the neck.',
    material: '100% French Terry Cotton',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Alizeh T.', rating: 5, date: 'October 11, 2026', comment: 'Super chic with bike shorts or tailored trousers.' }
    ]
  },
  {
    id: 'ZK-W10',
    name: "Women's Zip-Up Hoodie",
    category: 'Hoodies',
    categorySlug: 'hoodies',
    gender: 'women',
    originalPrice: 8600,
    salePrice: 6199,
    discountPercent: 28,
    rating: 4.7,
    reviewCount: 22,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Cream', hex: '#F7F5F0' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Cropped length full-zip hoodie with bespoke champagne gold hardware and elongated rib cuffs with thumbhole details.',
    material: '90% Cotton, 10% Spandex Terry',
    care: 'Zip closed before washing.',
    reviews: [
      { author: 'Natasha M.', rating: 5, date: 'September 15, 2026', comment: 'The gold zipper and thumbholes elevate it completely.' }
    ]
  },
  {
    id: 'ZK-W11',
    name: 'Casual Blazer',
    category: 'Jackets',
    categorySlug: 'jackets',
    gender: 'women',
    originalPrice: 16500,
    salePrice: 11999,
    discountPercent: 27,
    rating: 5.0,
    reviewCount: 61,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Oversized tailored single-breasted blazer with structured shoulder pads, peak lapels, and horn buttons. Lined with breathable silk-like satin.',
    material: 'Virgin Wool, Viscose & Silk Satin Lining',
    care: 'Dry clean only.',
    reviews: [
      { author: 'Rabab Zaidi', rating: 5, date: 'October 24, 2026', comment: 'Looks like a Saint Laurent piece. The shoulder structure is sensational.' }
    ]
  },
  {
    id: 'ZK-W12',
    name: 'Premium Denim Jacket (Women)',
    category: 'Jackets',
    categorySlug: 'jackets',
    gender: 'women',
    originalPrice: 12500,
    salePrice: 8999,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 28,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Vintage light wash denim jacket with a relaxed drop shoulder cut and custom branded matte silver buttons.',
    material: '100% Sustainable Cotton Denim (12 oz)',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Iqra J.', rating: 5, date: 'October 1, 2026', comment: 'Great wash and fits oversized without swallowing my frame.' }
    ]
  },
  {
    id: 'ZK-W13',
    name: 'Elegant Long Coat',
    category: 'Jackets',
    categorySlug: 'jackets',
    gender: 'women',
    originalPrice: 22000,
    salePrice: 15999,
    discountPercent: 27,
    rating: 5.0,
    reviewCount: 43,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'Only 3 left',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Black', hex: '#111111' },
      { name: 'Chocolate', hex: '#3D2314' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Double-faced belted wool-cashmere wrap trench coat falling gracefully past the calf. Unlined for fluid natural drape with handcrafted bound seams.',
    material: '80% Superfine Wool, 20% Cashmere',
    care: 'Specialist dry clean only.',
    reviews: [
      { author: 'Shehnaz Gilani', rating: 5, date: 'October 21, 2026', comment: 'Pure Max Mara vibes. The drape and cashmere softness are breathtaking.' }
    ]
  },
  {
    id: 'ZK-W14',
    name: 'Casual Summer Dress',
    category: 'Dresses',
    categorySlug: 'dresses',
    gender: 'women',
    originalPrice: 8900,
    salePrice: 6299,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 35,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Lavender', hex: '#C5A3CF' },
      { name: 'Beige', hex: '#D8C8B5' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Tiered linen sundress with delicate self-tie shoulder straps and subtle pintuck detailing across the bodice. Fully lined with sheer cotton voile.',
    material: '100% Washed European Linen',
    care: 'Gentle hand wash, hang dry in shade.',
    reviews: [
      { author: 'Noor U.', rating: 5, date: 'September 20, 2026', comment: 'Airy, romantic, and beautifully constructed.' }
    ]
  },
  {
    id: 'ZK-W15',
    name: 'Elegant Midi Dress',
    category: 'Dresses',
    categorySlug: 'dresses',
    gender: 'women',
    originalPrice: 12500,
    salePrice: 8999,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 51,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Burgundy', hex: '#6B1D2F' },
      { name: 'Forest Green', hex: '#224422' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Sculptural rib-knit midi dress with subtle side split and high neckline. Contours gracefully while allowing unrestricted movement.',
    material: 'Viscose Stretch Knit',
    care: 'Hand wash cold, dry flat to maintain shape.',
    reviews: [
      { author: 'Khadija S.', rating: 5, date: 'October 13, 2026', comment: 'Wore it to an art gallery opening in Islamabad. Countless compliments.' }
    ]
  },
  {
    id: 'ZK-W16',
    name: 'Premium Maxi Dress',
    category: 'Dresses',
    categorySlug: 'dresses',
    gender: 'women',
    originalPrice: 16800,
    salePrice: 11999,
    discountPercent: 29,
    rating: 5.0,
    reviewCount: 38,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'Only 2 left',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Champagne Beige', hex: '#D8C8B5' },
      { name: 'Black', hex: '#111111' },
      { name: 'Red', hex: '#8B0000' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Floor-length heavy silk-satin slip dress with an open cowl back and sweeping train. An exquisite evening gown designed for unforgettable occasions.',
    material: '100% Silk Crepe de Chine & Satin',
    care: 'Dry clean only.',
    reviews: [
      { author: 'Anamika C.', rating: 5, date: 'October 25, 2026', comment: 'A work of wearable art. Flow and fabric sheen are perfection.' }
    ]
  },
  {
    id: 'ZK-W17',
    name: 'Straight Fit Jeans (Women)',
    category: 'Jeans',
    categorySlug: 'jeans',
    gender: 'women',
    originalPrice: 8900,
    salePrice: 6299,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 40,
    isNew: false,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Navy Blue', hex: '#1A2942' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['25', '26', '27', '28', '29', '30'],
    description: 'High-rise straight cut engineered from rigid organic cotton that hugs waist and hips before releasing into a clean vertical line down to the ankle.',
    material: '100% Organic Rigid Denim (13 oz)',
    care: 'Cold wash inside out.',
    reviews: [
      { author: 'Bushra K.', rating: 5, date: 'October 10, 2026', comment: 'Lifts and holds everything in. The vintage wash is superb.' }
    ]
  },
  {
    id: 'ZK-W18',
    name: 'Wide Leg Jeans',
    category: 'Jeans',
    categorySlug: 'jeans',
    gender: 'women',
    originalPrice: 9500,
    salePrice: 6799,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 46,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['25', '26', '27', '28', '29', '30'],
    description: 'Dramatic palazzo-inspired wide leg denim with full-length break. Elongates legs instantly when worn with heels or chunky sneakers.',
    material: '100% Premium Cotton Denim',
    care: 'Cold water gentle wash.',
    reviews: [
      { author: 'Zunaira M.', rating: 5, date: 'October 18, 2026', comment: 'The wide leg silhouette is so chic and flattering.' }
    ]
  },
  {
    id: 'ZK-W19',
    name: 'High Waist Jeans',
    category: 'Jeans',
    categorySlug: 'jeans',
    gender: 'women',
    originalPrice: 8800,
    salePrice: 6199,
    discountPercent: 30,
    rating: 4.7,
    reviewCount: 31,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Grey', hex: '#9E9E9E' }
    ],
    sizes: ['25', '26', '27', '28', '29', '30', '32'],
    description: '11.5-inch ultra-high rise with comfortable comfort-stretch weave. Flattering back yoke and bespoke matte silver metal hardware.',
    material: '98% Cotton, 2% Stretch Fiber',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Rabia N.', rating: 5, date: 'September 24, 2026', comment: 'Stretchy enough to sit in comfortably all day at work.' }
    ]
  },
  {
    id: 'ZK-W20',
    name: "Women's Tailored Trousers",
    category: 'Trousers',
    categorySlug: 'trousers',
    gender: 'women',
    originalPrice: 11500,
    salePrice: 8299,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 37,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Black', hex: '#111111' },
      { name: 'Cream', hex: '#F7F5F0' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'High-waisted fluid trousers with front pleats and wide draping legs. Handcrafted waist closure with hidden side zip for an uninterrupted front silhouette.',
    material: 'Premium Wool Blend Twill',
    care: 'Dry clean recommended.',
    reviews: [
      { author: 'Samia Tariq', rating: 5, date: 'October 15, 2026', comment: 'The drape as you walk is poetry. Incredible quality.' }
    ]
  },
  {
    id: 'ZK-W21',
    name: 'Casual Cargo Pants (Women)',
    category: 'Trousers',
    categorySlug: 'trousers',
    gender: 'women',
    originalPrice: 9200,
    salePrice: 6599,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 29,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Olive Green', hex: '#556B2F' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Tailored utility pants with sleek origami pocket flaps, bungee hem toggles, and high-rise elasticized back waistband.',
    material: 'Crisp Cotton Poplin',
    care: 'Machine wash cold.',
    reviews: [
      { author: 'Laila H.', rating: 5, date: 'September 29, 2026', comment: 'Super stylish cargos that do not look bulky.' }
    ]
  },
  {
    id: 'ZK-W22',
    name: 'Premium Skirt',
    category: 'Skirts',
    categorySlug: 'skirts',
    gender: 'women',
    originalPrice: 8500,
    salePrice: 5999,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 44,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Champagne Beige', hex: '#D8C8B5' },
      { name: 'Black', hex: '#111111' },
      { name: 'Chocolate', hex: '#3D2314' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Bias-cut midi silk skirt that glides effortlessly over curves. Features a comfortable hidden elastic waistband and rolled baby hem.',
    material: '100% Silk Crepe Satin',
    care: 'Hand wash cold or dry clean.',
    reviews: [
      { author: 'Mehwish A.', rating: 5, date: 'October 9, 2026', comment: 'Falls like liquid silver. Wear with oversized knit sweaters.' }
    ]
  },
  {
    id: 'ZK-W23',
    name: 'Luxury Knitwear (Women)',
    category: 'Sweatshirts',
    categorySlug: 'sweatshirts',
    gender: 'women',
    originalPrice: 13500,
    salePrice: 9699,
    discountPercent: 28,
    rating: 5.0,
    reviewCount: 36,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'Only 3 left',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Lavender', hex: '#C5A3CF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Ultra-soft turtleneck knit crafted from Mongolian cashmere and fine merino yarn. Features delicate ribbed trimming and raglan sleeve construction.',
    material: '50% Mongolian Cashmere, 50% Ultrafine Merino',
    care: 'Hand wash cold with wool wash, dry flat.',
    reviews: [
      { author: 'Hafsa S.', rating: 5, date: 'October 22, 2026', comment: 'Cloud-soft. Does not pill easily. Top-notch yarn quality.' }
    ]
  },
  {
    id: 'ZK-W24',
    name: "Women's Co-Ord Set",
    category: 'Co-Ord Sets',
    categorySlug: 'co-ord-sets',
    gender: 'women',
    originalPrice: 14500,
    salePrice: 10499,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 45,
    isNew: true,
    isBestSeller: true,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Beige', hex: '#D8C8B5' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Charcoal', hex: '#292929' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Fine-gauge knit duo comprising a mock-neck sleeveless top and fluid straight knit skirt. Sophisticated, comfortable, and endlessly versatile.',
    material: 'Viscose Silk Knit Blend',
    care: 'Hand wash cold, dry flat.',
    reviews: [
      { author: 'Warda I.', rating: 5, date: 'October 19, 2026', comment: 'The ultimate chic matching set. Everyone thought it was designer.' }
    ]
  },
  {
    id: 'ZK-W25',
    name: "Women's Premium Tracksuit",
    category: 'Co-Ord Sets',
    categorySlug: 'co-ord-sets',
    gender: 'women',
    originalPrice: 15900,
    salePrice: 11499,
    discountPercent: 28,
    rating: 4.8,
    reviewCount: 31,
    isNew: false,
    isBestSeller: false,
    stockStatus: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#292929' },
      { name: 'Cream', hex: '#F7F5F0' },
      { name: 'Pink', hex: '#E8B4B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Heavyweight organic terry half-zip pullover paired with tailored wide-leg lounge trousers. Features high-polish metal hardware.',
    material: '100% Organic Loopback Cotton (440 GSM)',
    care: 'Cold gentle wash inside out.',
    reviews: [
      { author: 'Sabahat R.', rating: 5, date: 'October 8, 2026', comment: 'Elevated airport outfit. Comfortable yet sharp.' }
    ]
  }
];

/* ==================== FILE: js/services/api.js ==================== */
// ZK STORE — Resilient Full-Stack API Client
// Connects Frontend to Backend REST API with Automatic Local Offline Fallback

const API_BASE = window.location.protocol.startsWith('http') ? '' : 'http://localhost:3000';

const api = {
  async isBackendLive() {
    try {
      const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(1500) });
      return res.ok;
    } catch (e) {
      return false;
    }
  },

  async getProducts(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE}/api/products${query ? '?' + query : ''}`);
      if (res.ok) {
        const data = await res.json();
        return data.products;
      }
    } catch (e) {
      console.warn('API getProducts fallback to local store:', e.message);
    }
    return null;
  },

  async getProduct(id) {
    try {
      const res = await fetch(`${API_BASE}/api/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        return data.product;
      }
    } catch (e) {
      console.warn('API getProduct fallback:', e.message);
    }
    return null;
  },

  async createOrder(orderPayload) {
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      if (res.ok) {
        const data = await res.json();
        return data.order;
      }
    } catch (e) {
      console.warn('API createOrder fallback to local storage:', e.message);
    }
    return null;
  },

  async getOrder(id) {
    try {
      const res = await fetch(`${API_BASE}/api/orders/${id}`);
      if (res.ok) {
        const data = await res.json();
        return data.order;
      }
    } catch (e) {
      console.warn('API getOrder fallback:', e.message);
    }
    return null;
  },

  async validateCoupon(code, subtotal) {
    try {
      const res = await fetch(`${API_BASE}/api/coupons/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, subtotal })
      });
      return await res.json();
    } catch (e) {
      console.warn('API validateCoupon fallback:', e.message);
      return null;
    }
  },

  async sendContactMessage(formData) {
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      return await res.json();
    } catch (e) {
      return { success: true, message: 'Message queued locally' };
    }
  },

  async subscribeNewsletter(email) {
    try {
      const res = await fetch(`${API_BASE}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      return await res.json();
    } catch (e) {
      return { success: true, message: 'Subscribed locally' };
    }
  }
};

/* ==================== FILE: js/store/storage.js ==================== */
// ZK STORE — LocalStorage Persistence Layer

const STORAGE_KEYS = {
  CART: 'zk_store_cart_v1',
  WISHLIST: 'zk_store_wishlist_v1',
  USER: 'zk_store_user_v1',
  ORDERS: 'zk_store_orders_v1',
  RECENTLY_VIEWED: 'zk_store_recent_v1'
};

const Storage = {
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn('Storage read failed for', key, e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed for', key, e);
    }
  },

  getCart() {
    return this.get(STORAGE_KEYS.CART, []);
  },

  setCart(cart) {
    this.set(STORAGE_KEYS.CART, cart);
  },

  getWishlist() {
    return this.get(STORAGE_KEYS.WISHLIST, []);
  },

  setWishlist(wishlist) {
    this.set(STORAGE_KEYS.WISHLIST, wishlist);
  },

  getUser() {
    return this.get(STORAGE_KEYS.USER, null);
  },

  setUser(user) {
    this.set(STORAGE_KEYS.USER, user);
  },

  getOrders() {
    // Return saved orders or initialize with default sample luxury order for demonstration
    const orders = this.get(STORAGE_KEYS.ORDERS, null);
    if (orders) return orders;

    const sampleOrders = [
      {
        id: 'ZK-89421',
        date: 'November 03, 2026',
        status: 'In Transit',
        carrier: 'TCS Express Prime',
        trackingNumber: 'TCS-90234812PK',
        estimatedDelivery: 'November 08, 2026',
        items: [
          {
            id: 'ZK-M01',
            name: 'Premium Oversized T-Shirt',
            image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
            color: 'Black',
            size: 'L',
            price: 3999,
            quantity: 1
          },
          {
            id: 'ZK-M13',
            name: 'Premium Bomber Jacket',
            image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
            color: 'Olive Green',
            size: 'L',
            price: 11999,
            quantity: 1
          }
        ],
        subtotal: 15998,
        discount: 1599,
        shipping: 0,
        total: 14399,
        paymentMethod: 'Cash on Delivery',
        shippingAddress: {
          fullName: 'Daniyal Ahmed',
          phone: '+92 300 1234567',
          email: 'daniyal.ahmed@example.com',
          address: 'Bungalow 42-B, Khyaban-e-Shahbaz, DHA Phase 6',
          city: 'Karachi',
          postalCode: '75500',
          country: 'Pakistan'
        },
        steps: [
          { title: 'Order Confirmed', date: 'Nov 03, 10:30 AM', completed: true, current: false },
          { title: 'Atelier Quality Inspection', date: 'Nov 04, 02:15 PM', completed: true, current: false },
          { title: 'Dispatched via TCS Express', date: 'Nov 05, 09:00 AM', completed: true, current: true },
          { title: 'Out for Delivery', date: 'Expected Nov 07', completed: false, current: false },
          { title: 'Delivered', date: 'Expected Nov 08', completed: false, current: false }
        ]
      }
    ];

    this.set(STORAGE_KEYS.ORDERS, sampleOrders);
    return sampleOrders;
  },

  setOrders(orders) {
    this.set(STORAGE_KEYS.ORDERS, orders);
  },

  getRecentlyViewed() {
    return this.get(STORAGE_KEYS.RECENTLY_VIEWED, []);
  },

  addRecentlyViewed(productId) {
    const list = this.getRecentlyViewed().filter(id => id !== productId);
    list.unshift(productId);
    this.set(STORAGE_KEYS.RECENTLY_VIEWED, list.slice(0, 10));
  }
};

/* ==================== FILE: js/store/state.js ==================== */
// ZK STORE — Central Reactive Store & Backend Synchronizer



class Store {
  constructor() {
    this.cart = Storage.getCart();
    this.wishlist = Storage.getWishlist();
    this.user = Storage.getUser() || {
      isLoggedIn: true,
      name: 'Daniyal Ahmed',
      email: 'daniyal.ahmed@example.com',
      phone: '+92 300 1234567',
      city: 'Karachi',
      address: 'Bungalow 42-B, Khyaban-e-Shahbaz, DHA Phase 6',
      postalCode: '75500',
      ordersCount: 3
    };
    this.orders = Storage.getOrders();
    this.coupon = null;
    
    // UI Drawer / Modal states
    this.ui = {
      isCartOpen: false,
      isWishlistOpen: false,
      isSearchOpen: false,
      isQuickViewOpen: false,
      quickViewProduct: null,
      isSizeGuideOpen: false,
      isAuthModalOpen: false,
      announcementVisible: true
    };

    this.listeners = new Set();

    // Async sync with backend
    this.syncWithBackend();
  }

  async syncWithBackend() {
    try {
      const isLive = await api.isBackendLive();
      if (isLive) {
        console.log('✓ Connected to ZK STORE Atelier Backend API');
      }
    } catch (e) {
      // Offline fallback is active
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, payload) {
    this.listeners.forEach(fn => fn(event, payload, this));
  }

  // --- Cart Actions ---
  getCartItems() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartOriginalTotal() {
    return this.cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  }

  getCartSavings() {
    return this.getCartOriginalTotal() - this.getCartSubtotal();
  }

  getShippingFee() {
    const subtotal = this.getCartSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 5000 ? 0 : 350; // Free shipping over Rs. 5,000 across Pakistan
  }

  getCouponDiscount() {
    if (!this.coupon) return 0;
    const subtotal = this.getCartSubtotal();
    if (this.coupon.percent) {
      return Math.round((subtotal * this.coupon.percent) / 100);
    }
    if (this.coupon.amount) {
      return Math.min(subtotal, this.coupon.amount);
    }
    return 0;
  }

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    if (subtotal === 0) return 0;
    const shipping = this.getShippingFee();
    const couponDiscount = this.getCouponDiscount();
    return Math.max(0, subtotal + shipping - couponDiscount);
  }

  addToCart(product, colorName, size, quantity = 1) {
    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.color === colorName && item.size === size
    );

    const colorObj = product.colors.find(c => c.name === colorName) || product.colors[0];

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        productId: product.id,
        name: product.name,
        category: product.category,
        gender: product.gender,
        image: product.images[0],
        price: product.salePrice,
        originalPrice: product.originalPrice,
        color: colorName,
        colorHex: colorObj.hex,
        size: size,
        quantity: quantity
      });
    }

    Storage.setCart(this.cart);
    this.notify('cart:updated', this.cart);
    this.showToast(`Added to shopping bag: ${product.name}`, 'cart');
  }

  removeFromCart(index) {
    if (index >= 0 && index < this.cart.length) {
      const removed = this.cart.splice(index, 1)[0];
      Storage.setCart(this.cart);
      this.notify('cart:updated', this.cart);
      this.showToast(`Removed from shopping bag: ${removed.name}`, 'info');
    }
  }

  updateQuantity(index, quantity) {
    if (index >= 0 && index < this.cart.length) {
      if (quantity <= 0) {
        this.removeFromCart(index);
      } else {
        this.cart[index].quantity = Math.min(10, quantity);
        Storage.setCart(this.cart);
        this.notify('cart:updated', this.cart);
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.coupon = null;
    Storage.setCart(this.cart);
    this.notify('cart:updated', this.cart);
  }

  async applyCoupon(code) {
    const clean = code.trim().toUpperCase();
    const subtotal = this.getCartSubtotal();

    // 1. Check with Backend API
    try {
      const apiRes = await api.validateCoupon(clean, subtotal);
      if (apiRes && apiRes.valid) {
        this.coupon = { code: apiRes.code, percent: apiRes.percent, amount: apiRes.discount, label: apiRes.label };
        this.notify('cart:updated', this.cart);
        this.showToast(`Promo code applied: ${apiRes.label}`, 'success');
        return { success: true, message: apiRes.label };
      }
    } catch (e) {
      // Local fallback below
    }

    // 2. Local Fallback Validation
    if (clean === 'ZK10' || clean === 'ZKLUXURY10') {
      this.coupon = { code: clean, percent: 10, label: '10% Exclusive Luxury Privilege' };
      this.notify('cart:updated', this.cart);
      this.showToast('Promo code ZKLUXURY10 applied: 10% OFF', 'success');
      return { success: true, message: '10% discount applied!' };
    }
    if (clean === 'WELCOMEZK') {
      this.coupon = { code: clean, amount: 500, label: 'Rs. 500 Welcome Voucher' };
      this.notify('cart:updated', this.cart);
      this.showToast('Voucher WELCOMEZK applied: Rs. 500 OFF', 'success');
      return { success: true, message: 'Rs. 500 discount applied!' };
    }
    return { success: false, message: 'Invalid or expired promotional code' };
  }

  removeCoupon() {
    this.coupon = null;
    this.notify('cart:updated', this.cart);
    this.showToast('Promo code removed', 'info');
  }

  // --- Wishlist Actions ---
  getWishlist() {
    return this.wishlist;
  }

  isInWishlist(productId) {
    return this.wishlist.some(item => (typeof item === 'string' ? item === productId : item.id === productId));
  }

  toggleWishlist(product) {
    const id = product.id;
    const index = this.wishlist.findIndex(item => (typeof item === 'string' ? item === id : item.id === id));
    
    if (index > -1) {
      this.wishlist.splice(index, 1);
      Storage.setWishlist(this.wishlist);
      this.notify('wishlist:updated', this.wishlist);
      this.showToast(`Removed from your Wishlist`, 'info');
      return false;
    } else {
      this.wishlist.push({
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.images[0],
        price: product.salePrice,
        originalPrice: product.originalPrice,
        colors: product.colors,
        sizes: product.sizes
      });
      Storage.setWishlist(this.wishlist);
      this.notify('wishlist:updated', this.wishlist);
      this.showToast(`Added to your Wishlist`, 'wishlist');
      return true;
    }
  }

  // --- Orders & Backend Synchronization ---
  createOrder(checkoutData) {
    const newOrderId = `ZK-${Math.floor(10000 + Math.random() * 90000)}`;
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    const trackingNumber = `TCS-${Math.floor(10000000 + Math.random() * 90000000)}PK`;

    const newOrder = {
      id: newOrderId,
      date: today,
      status: 'Confirmed',
      carrier: 'TCS Express Prime',
      trackingNumber: trackingNumber,
      estimatedDelivery: '3-4 Business Days',
      items: [...this.cart],
      subtotal: this.getCartSubtotal(),
      discount: this.getCartSavings() + this.getCouponDiscount(),
      shipping: this.getShippingFee(),
      total: this.getCartTotal(),
      paymentMethod: checkoutData.paymentMethod || 'Cash on Delivery',
      shippingAddress: {
        fullName: checkoutData.fullName,
        phone: checkoutData.phone,
        email: checkoutData.email,
        address: checkoutData.address,
        city: checkoutData.city,
        postalCode: checkoutData.postalCode || '75000',
        country: checkoutData.country || 'Pakistan'
      },
      steps: [
        { title: 'Order Confirmed', date: 'Just now', completed: true, current: true },
        { title: 'Atelier Quality Inspection', date: 'Upcoming', completed: false, current: false },
        { title: 'Dispatched via TCS Express', date: 'Upcoming', completed: false, current: false },
        { title: 'Out for Delivery', date: 'Upcoming', completed: false, current: false },
        { title: 'Delivered', date: '3-4 Business Days', completed: false, current: false }
      ]
    };

    // Save in local storage
    this.orders.unshift(newOrder);
    Storage.setOrders(this.orders);
    this.clearCart();
    this.notify('orders:updated', this.orders);

    // Asynchronously dispatch to Backend REST API for server-side persistence
    api.createOrder(newOrder).then(serverOrder => {
      if (serverOrder) {
        console.log('✓ Order persisted to backend database:', serverOrder.id);
      }
    }).catch(e => console.warn('Backend sync warning:', e.message));

    return newOrder;
  }

  getOrderById(id) {
    if (!id) return null;
    const clean = id.trim().toUpperCase();
    return this.orders.find(o => o.id.toUpperCase() === clean || (o.trackingNumber && o.trackingNumber.toUpperCase() === clean)) || null;
  }

  // --- User Profile ---
  login(userData) {
    this.user = {
      isLoggedIn: true,
      name: userData.name || 'ZK Patron',
      email: userData.email,
      phone: userData.phone || '+92 300 0000000',
      city: userData.city || 'Lahore',
      address: userData.address || 'Gulberg III',
      postalCode: '54000',
      ordersCount: this.orders.length
    };
    Storage.setUser(this.user);
    this.notify('user:updated', this.user);
    this.showToast(`Welcome back, ${this.user.name}`, 'success');

    // Notify backend
    api.sendContactMessage({ type: 'login', email: userData.email });
  }

  logout() {
    this.user = { isLoggedIn: false };
    Storage.setUser(this.user);
    this.notify('user:updated', this.user);
    this.showToast('You have been signed out', 'info');
  }

  // --- UI Triggers ---
  toggleCart(open) {
    this.ui.isCartOpen = open !== undefined ? open : !this.ui.isCartOpen;
    this.notify('ui:cart', this.ui.isCartOpen);
  }

  toggleWishlistDrawer(open) {
    this.ui.isWishlistOpen = open !== undefined ? open : !this.ui.isWishlistOpen;
    this.notify('ui:wishlist', this.ui.isWishlistOpen);
  }

  toggleSearch(open) {
    this.ui.isSearchOpen = open !== undefined ? open : !this.ui.isSearchOpen;
    this.notify('ui:search', this.ui.isSearchOpen);
  }

  openQuickView(product) {
    this.ui.quickViewProduct = product;
    this.ui.isQuickViewOpen = true;
    this.notify('ui:quickview', product);
  }

  closeQuickView() {
    this.ui.isQuickViewOpen = false;
    this.ui.quickViewProduct = null;
    this.notify('ui:quickview', null);
  }

  openSizeGuide() {
    this.ui.isSizeGuideOpen = true;
    this.notify('ui:sizeguide', true);
  }

  closeSizeGuide() {
    this.ui.isSizeGuideOpen = false;
    this.notify('ui:sizeguide', false);
  }

  closeAnnouncement() {
    this.ui.announcementVisible = false;
    this.notify('ui:announcement', false);
  }

  // --- Toast Manager ---
  showToast(message, type = 'info') {
    this.notify('toast:show', { message, type, id: Date.now() });
  }

  // Helper product queries
  getProductById(id) {
    return PRODUCTS.find(p => p.id === id) || null;
  }

  getProductsByCategory(categorySlug) {
    return PRODUCTS.filter(p => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
  }

  getProductsByGender(gender) {
    return PRODUCTS.filter(p => p.gender.toLowerCase() === gender.toLowerCase());
  }

  getNewArrivals(limit = 8) {
    return PRODUCTS.filter(p => p.isNew).slice(0, limit);
  }

  getBestSellers(limit = 8) {
    return PRODUCTS.filter(p => p.isBestSeller).slice(0, limit);
  }

  searchProducts(query, filters = {}) {
    let results = [...PRODUCTS];
    const q = (query || '').trim().toLowerCase();

    if (q) {
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.colors.some(c => c.name.toLowerCase().includes(q))
      );
    }

    if (filters.gender && filters.gender !== 'all') {
      results = results.filter(p => p.gender === filters.gender);
    }

    if (filters.category && filters.category !== 'all') {
      results = results.filter(p => p.categorySlug === filters.category);
    }

    if (filters.color) {
      results = results.filter(p => p.colors.some(c => c.name.toLowerCase() === filters.color.toLowerCase()));
    }

    if (filters.size) {
      results = results.filter(p => p.sizes.includes(filters.size));
    }

    if (filters.minPrice) {
      results = results.filter(p => p.salePrice >= filters.minPrice);
    }

    if (filters.maxPrice) {
      results = results.filter(p => p.salePrice <= filters.maxPrice);
    }

    // Sorting
    if (filters.sortBy === 'price-low') {
      results.sort((a, b) => a.salePrice - b.salePrice);
    } else if (filters.sortBy === 'price-high') {
      results.sort((a, b) => b.salePrice - a.salePrice);
    } else if (filters.sortBy === 'newest') {
      results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (filters.sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  }
}

const store = new Store();

/* ==================== FILE: js/components/toast.js ==================== */
// ZK STORE — Toast Notification Component

function initToast() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'info') {
  initToast();
  const container = document.getElementById('toast-container');

  const icons = {
    cart: '<i data-lucide="shopping-bag" class="w-4 h-4 text-[#D8C8B5]"></i>',
    wishlist: '<i data-lucide="heart" class="w-4 h-4 text-rose-400"></i>',
    success: '<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i>',
    info: '<i data-lucide="info" class="w-4 h-4 text-[#D8C8B5]"></i>'
  };

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <div class="flex-shrink-0">${icons[type] || icons.info}</div>
    <div class="flex-1 font-sans text-xs tracking-wide leading-snug">${message}</div>
    <button class="text-white/40 hover:text-white transition-colors" onclick="this.parentElement.remove()">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `;

  container.appendChild(toast);
  if (window.lucide) {
    window.lucide.createIcons({ root: toast });
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

/* ==================== FILE: js/components/navbar.js ==================== */
// ZK STORE — Luxury Header & Mega Menu Navigation Component


function renderNavbar() {
  const cartCount = store.getCartCount();
  const wishlistCount = store.getWishlist().length;
  const isAnnouncement = store.ui.announcementVisible;

  return `
    <!-- Announcement Bar -->
    ${isAnnouncement ? `
      <div id="announcement-bar" class="announcement-bar py-2.5 px-4 flex items-center justify-between border-b border-[#292929]">
        <div class="flex-1 text-center font-sans tracking-luxury text-[11px] font-medium text-[#F7F5F0]">
          NEW SEASON COLLECTION — DISCOVER YOUR STYLE &bull; COMPLIMENTARY SHIPPING OVER RS. 5,000 ACROSS PAKISTAN
        </div>
        <button id="close-announcement-btn" class="text-white/60 hover:text-white transition-colors p-1" title="Close announcement">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    ` : ''}

    <!-- Main Navigation Header -->
    <header class="header-sticky">
      <div class="max-w-[1600px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        <!-- Mobile Hamburger Button (Left on Mobile) -->
        <div class="flex items-center lg:hidden">
          <button id="mobile-menu-toggle" class="p-2 -ml-2 text-[#111111] hover:opacity-70 transition-opacity" aria-label="Toggle navigation menu">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>

        <!-- Brand Wordmark Logo (Left on Desktop, Center on Mobile) -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#/" class="group flex flex-col items-start leading-none text-decoration-none">
            <span class="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-semibold text-[#111111] uppercase group-hover:opacity-80 transition-opacity">
              ZK STORE
            </span>
            <span class="font-sans text-[8px] sm:text-[9px] tracking-[0.38em] text-[#737373] uppercase font-medium mt-1">
              HAUTE ATELIER
            </span>
          </a>
        </div>

        <!-- Center Desktop Navigation Links & Mega Menus -->
        <nav class="hidden lg:flex items-center space-x-10">
          <a href="#/" class="nav-link">Home</a>

          <!-- Men with Mega Menu -->
          <div class="group relative py-6">
            <a href="#/men" class="nav-link flex items-center gap-1">
              Men
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180"></i>
            </a>

            <!-- Men Mega Menu Container -->
            <div class="mega-menu">
              <div class="max-w-[1500px] mx-auto px-10 py-10 grid grid-cols-12 gap-8">
                <!-- Categories Column 1 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Tops & Layering
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/men?category=t-shirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">T-Shirts</a></li>
                    <li><a href="#/men?category=shirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Shirts</a></li>
                    <li><a href="#/men?category=hoodies" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Hoodies</a></li>
                    <li><a href="#/men?category=sweatshirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Sweatshirts</a></li>
                    <li><a href="#/men?category=jackets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Jackets & Coats</a></li>
                  </ul>
                </div>

                <!-- Categories Column 2 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Bottoms & Sets
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/men?category=jeans" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Jeans & Denim</a></li>
                    <li><a href="#/men?category=trousers" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Tailored Trousers</a></li>
                    <li><a href="#/men?category=shorts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Casual Shorts</a></li>
                    <li><a href="#/men?category=co-ord-sets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Co-Ord Sets</a></li>
                    <li><a href="#/men" class="text-xs font-semibold text-[#111] uppercase tracking-wider block pt-2 underline underline-offset-4">Explore All Men (25) &rarr;</a></li>
                  </ul>
                </div>

                <!-- Featured Editorial 1 -->
                <div class="col-span-3">
                  <a href="#/men?category=jackets" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80" alt="Men's Outerwear" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Campaign</span>
                      <span class="font-serif text-lg text-white font-medium">The Autumn Outerwear</span>
                    </div>
                  </a>
                </div>

                <!-- Featured Editorial 2 -->
                <div class="col-span-3">
                  <a href="#/men?category=t-shirts" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80" alt="Heavyweight Cotton" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Atelier Edition</span>
                      <span class="font-serif text-lg text-white font-medium">280GSM Heavyweight Basics</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Women with Mega Menu -->
          <div class="group relative py-6">
            <a href="#/women" class="nav-link flex items-center gap-1">
              Women
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180"></i>
            </a>

            <!-- Women Mega Menu Container -->
            <div class="mega-menu">
              <div class="max-w-[1500px] mx-auto px-10 py-10 grid grid-cols-12 gap-8">
                <!-- Categories Column 1 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Tops & Silhouettes
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/women?category=tops" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Tops & Corsets</a></li>
                    <li><a href="#/women?category=shirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Shirts & Blouses</a></li>
                    <li><a href="#/women?category=dresses" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Dresses & Gowns</a></li>
                    <li><a href="#/women?category=hoodies" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Hoodies</a></li>
                    <li><a href="#/women?category=sweatshirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Sweatshirts</a></li>
                  </ul>
                </div>

                <!-- Categories Column 2 -->
                <div class="col-span-3">
                  <h4 class="font-serif text-base tracking-[0.16em] uppercase text-[#111111] font-semibold mb-4 border-b border-[#E8E4DC] pb-2">
                    Outerwear & Bottoms
                  </h4>
                  <ul class="space-y-2.5">
                    <li><a href="#/women?category=jackets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Blazers & Coats</a></li>
                    <li><a href="#/women?category=jeans" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Jeans & Wide Leg</a></li>
                    <li><a href="#/women?category=trousers" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Tailored Trousers</a></li>
                    <li><a href="#/women?category=skirts" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Silk Skirts</a></li>
                    <li><a href="#/women?category=co-ord-sets" class="text-xs text-[#555] hover:text-[#111] uppercase tracking-wider block py-0.5 transition-colors">Co-Ord Sets</a></li>
                  </ul>
                </div>

                <!-- Featured Editorial 1 -->
                <div class="col-span-3">
                  <a href="#/women?category=dresses" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80" alt="Silk & Satin" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Editorial</span>
                      <span class="font-serif text-lg text-white font-medium">The Evening Silk Collection</span>
                    </div>
                  </a>
                </div>

                <!-- Featured Editorial 2 -->
                <div class="col-span-3">
                  <a href="#/women?category=jackets" class="group/banner block relative overflow-hidden aspect-[4/3] bg-[#F7F5F0]">
                    <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80" alt="Tailored Blazers" class="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end">
                      <span class="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium">Sartorial</span>
                      <span class="font-serif text-lg text-white font-medium">Sculpted Double-Breasted Blazers</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="#/new-arrivals" class="nav-link">New Arrivals</a>
          <a href="#/categories" class="nav-link">Collections</a>
          <a href="#/best-sellers" class="nav-link">Best Sellers</a>
          <a href="#/men?sale=true" class="nav-link text-rose-700">Sale</a>
        </nav>

        <!-- Right Quick Actions (Search, Account, Wishlist, Bag) -->
        <div class="flex items-center space-x-5 sm:space-x-6">
          <!-- Search Trigger -->
          <button id="nav-search-btn" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors" aria-label="Search clothing catalog">
            <i data-lucide="search" class="w-5 h-5"></i>
          </button>

          <!-- Account -->
          <a href="#/account" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors" aria-label="My Account">
            <i data-lucide="user" class="w-5 h-5"></i>
          </a>

          <!-- Wishlist Trigger -->
          <button id="nav-wishlist-btn" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors relative" aria-label="Wishlist drawer">
            <i data-lucide="heart" class="w-5 h-5"></i>
            ${wishlistCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-[#111111] text-[#FFFFFF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                ${wishlistCount}
              </span>
            ` : ''}
          </button>

          <!-- Shopping Bag Trigger -->
          <button id="nav-cart-btn" class="p-1.5 text-[#111111] hover:text-[#737373] transition-colors relative" aria-label="Shopping bag">
            <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            ${cartCount > 0 ? `
              <span class="absolute -top-1 -right-1 bg-[#111111] text-[#FFFFFF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                ${cartCount}
              </span>
            ` : ''}
          </button>
        </div>

      </div>
    </header>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-menu-drawer" class="drawer-backdrop">
      <div class="slide-drawer left-0 right-auto max-w-sm">
        <div class="p-6 border-b border-[#E8E4DC] flex items-center justify-between">
          <span class="font-serif text-xl tracking-[0.18em] font-semibold text-[#111111] uppercase">ZK STORE</span>
          <button id="close-mobile-menu-btn" class="p-1 text-[#111111]">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <div class="space-y-4">
            <a href="#/" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">Home</a>
            
            <div class="border-t border-[#E8E4DC] pt-4">
              <span class="block text-xs font-semibold tracking-luxury uppercase text-[#737373] mb-2">Men's Atelier</span>
              <div class="grid grid-cols-2 gap-2 pl-2">
                <a href="#/men?category=t-shirts" class="text-xs text-[#333] py-1">T-Shirts</a>
                <a href="#/men?category=shirts" class="text-xs text-[#333] py-1">Shirts</a>
                <a href="#/men?category=hoodies" class="text-xs text-[#333] py-1">Hoodies</a>
                <a href="#/men?category=jackets" class="text-xs text-[#333] py-1">Jackets</a>
                <a href="#/men?category=jeans" class="text-xs text-[#333] py-1">Jeans</a>
                <a href="#/men?category=trousers" class="text-xs text-[#333] py-1">Trousers</a>
                <a href="#/men" class="text-xs font-bold text-[#111] py-1 col-span-2">All Men's Products (25) &rarr;</a>
              </div>
            </div>

            <div class="border-t border-[#E8E4DC] pt-4">
              <span class="block text-xs font-semibold tracking-luxury uppercase text-[#737373] mb-2">Women's Atelier</span>
              <div class="grid grid-cols-2 gap-2 pl-2">
                <a href="#/women?category=tops" class="text-xs text-[#333] py-1">Tops & Blouses</a>
                <a href="#/women?category=dresses" class="text-xs text-[#333] py-1">Dresses</a>
                <a href="#/women?category=jackets" class="text-xs text-[#333] py-1">Blazers & Coats</a>
                <a href="#/women?category=jeans" class="text-xs text-[#333] py-1">Jeans</a>
                <a href="#/women?category=trousers" class="text-xs text-[#333] py-1">Trousers</a>
                <a href="#/women?category=skirts" class="text-xs text-[#333] py-1">Skirts</a>
                <a href="#/women" class="text-xs font-bold text-[#111] py-1 col-span-2">All Women's Products (25) &rarr;</a>
              </div>
            </div>

            <div class="border-t border-[#E8E4DC] pt-4 space-y-3">
              <a href="#/new-arrivals" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">New Arrivals</a>
              <a href="#/best-sellers" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">Best Sellers</a>
              <a href="#/categories" class="mobile-nav-item block text-sm font-semibold tracking-wider uppercase text-[#111111]">Clothing Categories</a>
              <a href="#/order-tracking" class="mobile-nav-item block text-sm font-medium tracking-wider text-[#555]">Track Your Order</a>
              <a href="#/about" class="mobile-nav-item block text-sm font-medium tracking-wider text-[#555]">About ZK STORE</a>
              <a href="#/contact" class="mobile-nav-item block text-sm font-medium tracking-wider text-[#555]">Concierge / Contact</a>
            </div>
          </div>
        </div>

        <div class="p-6 border-t border-[#E8E4DC] bg-[#F7F5F0]">
          <div class="flex items-center justify-between text-xs text-[#555]">
            <span>Currency: <strong>PKR (Rs.)</strong></span>
            <span>Flagship: <strong>Karachi & Lahore</strong></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindNavbarEvents() {
  // Announcement close
  const closeAnnouncementBtn = document.getElementById('close-announcement-btn');
  if (closeAnnouncementBtn) {
    closeAnnouncementBtn.addEventListener('click', () => {
      store.closeAnnouncement();
      const el = document.getElementById('announcement-bar');
      if (el) el.remove();
    });
  }

  // Cart trigger
  const cartBtn = document.getElementById('nav-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => store.toggleCart(true));
  }

  // Wishlist trigger
  const wishlistBtn = document.getElementById('nav-wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => store.toggleWishlistDrawer(true));
  }

  // Search trigger
  const searchBtn = document.getElementById('nav-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => store.toggleSearch(true));
  }

  // Mobile menu drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobileBtn = document.getElementById('close-mobile-menu-btn');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });
  }

  if (closeMobileBtn && mobileDrawer) {
    closeMobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove('active');
      }
    });

    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }
}

/* ==================== FILE: js/components/productCard.js ==================== */
// ZK STORE — Sophisticated Luxury Product Card Component

function renderProductCard(product) {
  const isInWishlist = store.isInWishlist(product.id);
  const primaryImg = product.images[0];
  const secondaryImg = product.images[1] || product.images[0];
  const formattedSale = `Rs. ${product.salePrice.toLocaleString('en-PK')}`;
  const formattedOriginal = `Rs. ${product.originalPrice.toLocaleString('en-PK')}`;

  return `
    <div class="product-card group" data-product-id="${product.id}">
      <!-- Image Container with Hover Transition -->
      <div class="product-image-container relative">
        <a href="#/product/${product.id}" class="block w-full h-full relative" aria-label="View ${product.name}">
          <!-- Primary Image -->
          <img src="${primaryImg}" alt="${product.name}" loading="lazy" class="product-image-primary" />
          <!-- Secondary Hover Image -->
          <img src="${secondaryImg}" alt="${product.name} alternate view" loading="lazy" class="product-image-secondary" />
        </a>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 z-10 flex flex-col gap-1 pointer-events-none">
          ${product.isNew ? `
            <span class="bg-[#111111] text-[#FFFFFF] text-[9px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1">
              New
            </span>
          ` : ''}
          ${product.discountPercent ? `
            <span class="badge-discount">
              ${product.discountPercent}% OFF
            </span>
          ` : ''}
        </div>

        <!-- Wishlist Button -->
        <button 
          class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
          data-action="wishlist" 
          data-id="${product.id}" 
          title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          aria-label="Wishlist toggle"
        >
          <i data-lucide="heart" class="w-4 h-4 ${isInWishlist ? 'fill-current' : ''}"></i>
        </button>

        <!-- Quick Add / Quick View Action on Hover -->
        <div class="quick-add-action flex items-center gap-2">
          <button 
            class="flex-1 bg-white hover:bg-[#111111] text-[#111111] hover:text-white transition-colors duration-200 text-[11px] font-semibold tracking-[0.14em] uppercase py-2.5 px-3 flex items-center justify-center gap-1.5 shadow-sm"
            data-action="quick-view" 
            data-id="${product.id}"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            Quick View
          </button>
          <button 
            class="bg-[#111111] hover:bg-white text-white hover:text-[#111111] transition-colors duration-200 p-2.5 flex items-center justify-center shadow-sm"
            data-action="quick-add" 
            data-id="${product.id}"
            title="Add first variant to Bag"
          >
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>

      <!-- Product Meta Details -->
      <div class="pt-3.5 pb-2 flex flex-col space-y-1.5">
        
        <!-- Category & Swatches Row -->
        <div class="flex items-center justify-between text-[11px]">
          <span class="text-[#737373] tracking-widest uppercase font-medium">
            ${product.category}
          </span>
          <!-- Color Swatches -->
          <div class="flex items-center gap-1.5">
            ${product.colors.slice(0, 4).map((c, i) => `
              <span 
                class="color-swatch-circle ${i === 0 ? 'active' : ''}" 
                style="background-color: ${c.hex};" 
                title="${c.name}"
                data-color="${c.name}"
              ></span>
            `).join('')}
            ${product.colors.length > 4 ? `
              <span class="text-[9px] text-[#737373] font-medium">+${product.colors.length - 4}</span>
            ` : ''}
          </div>
        </div>

        <!-- Product Title -->
        <h3 class="font-sans text-[13px] font-medium text-[#111111] tracking-wide leading-tight line-clamp-1 group-hover:opacity-75 transition-opacity">
          <a href="#/product/${product.id}">${product.name}</a>
        </h3>

        <!-- Pricing with Strikethrough -->
        <div class="flex items-center gap-2 text-xs pt-0.5">
          <span class="price-sale text-sm font-semibold text-[#111111]">${formattedSale}</span>
          <span class="price-original text-xs text-[#888888]">${formattedOriginal}</span>
        </div>
      </div>
    </div>
  `;
}

function bindProductCardActions(container = document) {
  // Wishlist clicks
  const wishlistBtns = container.querySelectorAll('[data-action="wishlist"]');
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = store.getProductById(id);
      if (product) {
        const added = store.toggleWishlist(product);
        btn.classList.toggle('active', added);
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.toggle('fill-current', added);
        }
      }
    });
  });

  // Quick View clicks
  const quickViewBtns = container.querySelectorAll('[data-action="quick-view"]');
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = store.getProductById(id);
      if (product) {
        store.openQuickView(product);
      }
    });
  });

  // Quick Add directly to cart
  const quickAddBtns = container.querySelectorAll('[data-action="quick-add"]');
  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = store.getProductById(id);
      if (product) {
        const defaultColor = product.colors[0]?.name || 'Standard';
        const defaultSize = product.sizes[0] || 'M';
        store.addToCart(product, defaultColor, defaultSize, 1);
        store.toggleCart(true);
      }
    });
  });
}

/* ==================== FILE: js/components/quickViewModal.js ==================== */
// ZK STORE — Quick View Modal Component

function renderQuickViewModal() {
  const product = store.ui.quickViewProduct;
  const isOpen = store.ui.isQuickViewOpen && product;

  if (!isOpen || !product) {
    return `<div id="quickview-modal-container" class="modal-overlay"></div>`;
  }

  const formattedSale = `Rs. ${product.salePrice.toLocaleString('en-PK')}`;
  const formattedOriginal = `Rs. ${product.originalPrice.toLocaleString('en-PK')}`;

  return `
    <div id="quickview-modal-container" class="modal-overlay active">
      <div class="modal-dialog max-w-4xl p-0 shadow-2xl relative bg-white">
        <!-- Close button -->
        <button id="close-quickview-btn" class="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Image Showcase -->
          <div class="bg-[#F7F5F0] relative overflow-hidden aspect-[3/4]">
            <img id="quickview-main-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
            ${product.discountPercent ? `
              <div class="absolute top-4 left-4 z-10">
                <span class="badge-discount">${product.discountPercent}% OFF</span>
              </div>
            ` : ''}
          </div>

          <!-- Product Details & Variant Selection -->
          <div class="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#737373] mb-1">
                ${product.gender} &bull; ${product.category}
              </div>
              <h2 class="font-serif text-2xl sm:text-3xl font-medium text-[#111111] leading-tight mb-2">
                ${product.name}
              </h2>
              
              <!-- Price & Rating -->
              <div class="flex items-center gap-3 mb-4">
                <span class="text-xl font-semibold text-[#111111]">${formattedSale}</span>
                <span class="price-original text-sm">${formattedOriginal}</span>
                <span class="text-xs text-emerald-700 font-medium">Save Rs. ${(product.originalPrice - product.salePrice).toLocaleString('en-PK')}</span>
              </div>

              <p class="text-xs text-[#555] leading-relaxed mb-6 line-clamp-3">
                ${product.description}
              </p>

              <!-- Color Selection -->
              <div class="mb-5">
                <div class="flex items-center justify-between text-xs font-medium mb-2">
                  <span class="text-[#111]">Color: <span id="quickview-selected-color" class="font-bold">${product.colors[0]?.name}</span></span>
                </div>
                <div class="flex items-center gap-2">
                  ${product.colors.map((c, i) => `
                    <button 
                      class="quickview-color-btn w-7 h-7 rounded-full border border-black/20 flex items-center justify-center transition-all ${i === 0 ? 'ring-2 ring-black ring-offset-2' : ''}" 
                      style="background-color: ${c.hex};"
                      data-color="${c.name}"
                      title="${c.name}"
                    ></button>
                  `).join('')}
                </div>
              </div>

              <!-- Size Selection -->
              <div class="mb-6">
                <div class="flex items-center justify-between text-xs font-medium mb-2">
                  <span class="text-[#111]">Select Size</span>
                  <button id="quickview-open-sizeguide" class="text-xs underline text-[#737373] hover:text-[#111]">Size Guide</button>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${product.sizes.map((s, i) => `
                    <button 
                      class="quickview-size-btn min-w-[42px] h-10 px-3 border border-[#E8E4DC] text-xs font-semibold tracking-wider transition-colors ${i === 0 ? 'bg-black text-white border-black' : 'hover:border-black text-[#111]'}"
                      data-size="${s}"
                    >
                      ${s}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Quantity Selector -->
              <div class="mb-6 flex items-center gap-4">
                <span class="text-xs font-medium text-[#111]">Quantity:</span>
                <div class="flex items-center border border-[#E8E4DC]">
                  <button id="quickview-qty-minus" class="w-8 h-8 flex items-center justify-center text-sm hover:bg-gray-100">-</button>
                  <span id="quickview-qty-val" class="w-10 text-center text-xs font-semibold">1</span>
                  <button id="quickview-qty-plus" class="w-8 h-8 flex items-center justify-center text-sm hover:bg-gray-100">+</button>
                </div>
                <span class="text-[11px] text-[#737373]">${product.stockStatus}</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-2.5 pt-4 border-t border-[#E8E4DC]">
              <button id="quickview-add-to-cart" class="btn-primary w-full py-3.5 text-xs font-bold tracking-luxury uppercase">
                Add to Shopping Bag
              </button>
              <a href="#/product/${product.id}" id="quickview-view-details" class="block text-center text-xs text-[#737373] hover:text-[#111] font-medium tracking-wider uppercase py-1">
                View Full Atelier Product Details &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindQuickViewEvents() {
  const container = document.getElementById('quickview-modal-container');
  if (!container) return;

  // Close handlers
  const closeBtn = document.getElementById('close-quickview-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.closeQuickView());
  }

  container.addEventListener('click', (e) => {
    if (e.target === container) {
      store.closeQuickView();
    }
  });

  const product = store.ui.quickViewProduct;
  if (!product) return;

  let selectedColor = product.colors[0]?.name || 'Standard';
  let selectedSize = product.sizes[0] || 'M';
  let quantity = 1;

  // Color clicks
  const colorBtns = container.querySelectorAll('.quickview-color-btn');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('ring-2', 'ring-black', 'ring-offset-2'));
      btn.classList.add('ring-2', 'ring-black', 'ring-offset-2');
      selectedColor = btn.getAttribute('data-color');
      const label = document.getElementById('quickview-selected-color');
      if (label) label.textContent = selectedColor;
    });
  });

  // Size clicks
  const sizeBtns = container.querySelectorAll('.quickview-size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => {
        b.classList.remove('bg-black', 'text-white', 'border-black');
        b.classList.add('text-[#111]');
      });
      btn.classList.add('bg-black', 'text-white', 'border-black');
      selectedSize = btn.getAttribute('data-size');
    });
  });

  // Qty plus / minus
  const minusBtn = document.getElementById('quickview-qty-minus');
  const plusBtn = document.getElementById('quickview-qty-plus');
  const qtyVal = document.getElementById('quickview-qty-val');

  if (minusBtn && qtyVal) {
    minusBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyVal.textContent = quantity;
      }
    });
  }

  if (plusBtn && qtyVal) {
    plusBtn.addEventListener('click', () => {
      if (quantity < 10) {
        quantity++;
        qtyVal.textContent = quantity;
      }
    });
  }

  // Size guide trigger
  const sizeGuideBtn = document.getElementById('quickview-open-sizeguide');
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      store.openSizeGuide();
    });
  }

  // Add to cart click
  const addToCartBtn = document.getElementById('quickview-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      store.addToCart(product, selectedColor, selectedSize, quantity);
      store.closeQuickView();
      store.toggleCart(true);
    });
  }

  const viewDetailsLink = document.getElementById('quickview-view-details');
  if (viewDetailsLink) {
    viewDetailsLink.addEventListener('click', () => {
      store.closeQuickView();
    });
  }
}

/* ==================== FILE: js/components/cartDrawer.js ==================== */
// ZK STORE — Luxury Slide Cart Drawer Component

function renderCartDrawer() {
  const isOpen = store.ui.isCartOpen;
  const items = store.getCartItems();
  const subtotal = store.getCartSubtotal();
  const shipping = store.getShippingFee();
  const discount = store.getCouponDiscount();
  const total = store.getCartTotal();
  const freeThreshold = 5000;
  const remainingForFree = Math.max(0, freeThreshold - subtotal);
  const percentFilled = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  return `
    <div id="cart-drawer-backdrop" class="drawer-backdrop ${isOpen ? 'active' : ''}">
      <div class="slide-drawer">
        <!-- Header -->
        <div class="p-6 border-b border-[#E8E4DC] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="font-serif text-xl tracking-[0.16em] uppercase font-semibold text-[#111111]">Shopping Bag</span>
            <span class="text-xs text-[#737373]">(${store.getCartCount()} items)</span>
          </div>
          <button id="close-cart-btn" class="p-1.5 text-[#111111] hover:opacity-60 transition-opacity" aria-label="Close cart">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Free Shipping Progress Tracker -->
        <div class="bg-[#F7F5F0] px-6 py-3 border-b border-[#E8E4DC]">
          <div class="text-[11px] font-medium tracking-wide text-[#111111] mb-1.5">
            ${subtotal >= freeThreshold ? `
              <span class="text-emerald-800 font-semibold flex items-center gap-1">
                <i data-lucide="check" class="w-3.5 h-3.5"></i> Complimentary Express Shipping Unlocked across Pakistan!
              </span>
            ` : `
              Add <span class="font-bold">Rs. ${remainingForFree.toLocaleString('en-PK')}</span> more for Free Shipping
            `}
          </div>
          <div class="shipping-bar-track">
            <div class="shipping-bar-fill" style="width: ${percentFilled}%;"></div>
          </div>
        </div>

        <!-- Cart Items List / Empty State -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          ${items.length === 0 ? `
            <div class="h-full flex flex-col items-center justify-center text-center py-16">
              <div class="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#737373] mb-4">
                <i data-lucide="shopping-bag" class="w-8 h-8"></i>
              </div>
              <h4 class="font-serif text-xl text-[#111111] mb-2 font-medium">Your Shopping Bag is Empty</h4>
              <p class="text-xs text-[#737373] max-w-xs mb-6">
                Discover modern sartorial excellence with our latest ready-to-wear pieces.
              </p>
              <div class="flex gap-3">
                <a href="#/men" class="btn-primary text-xs py-2.5 px-4 drawer-close-action">Shop Men</a>
                <a href="#/women" class="btn-outline text-xs py-2.5 px-4 drawer-close-action">Shop Women</a>
              </div>
            </div>
          ` : `
            <div class="divide-y divide-[#E8E4DC]">
              ${items.map((item, index) => `
                <div class="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <!-- Thumbnail -->
                  <div class="w-20 h-24 bg-[#F7F5F0] flex-shrink-0 overflow-hidden relative">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                  </div>

                  <!-- Details -->
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <div class="flex items-start justify-between gap-2">
                        <h4 class="font-sans text-xs font-semibold text-[#111111] line-clamp-1">
                          <a href="#/product/${item.productId}" class="drawer-close-action hover:underline">${item.name}</a>
                        </h4>
                        <button class="cart-remove-btn text-[#737373] hover:text-[#111111] transition-colors p-0.5" data-index="${index}" title="Remove item">
                          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                      </div>

                      <div class="text-[11px] text-[#737373] flex items-center gap-3 mt-1">
                        <span>Color: <strong>${item.color}</strong></span>
                        <span>Size: <strong>${item.size}</strong></span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between mt-2 pt-1">
                      <!-- Quantity Stepper -->
                      <div class="flex items-center border border-[#E8E4DC]">
                        <button class="cart-qty-minus w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-100 text-[#111]" data-index="${index}">-</button>
                        <span class="w-7 text-center text-xs font-semibold">${item.quantity}</span>
                        <button class="cart-qty-plus w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-100 text-[#111]" data-index="${index}">+</button>
                      </div>

                      <!-- Line Price -->
                      <span class="text-xs font-semibold text-[#111111]">
                        Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}
                      </span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Footer / Checkout Area -->
        ${items.length > 0 ? `
          <div class="p-6 border-t border-[#E8E4DC] bg-white space-y-4">
            
            <!-- Promo Voucher Input -->
            <div class="flex gap-2">
              <input 
                type="text" 
                id="cart-coupon-input" 
                placeholder="PROMO CODE (e.g. ZK10)" 
                value="${store.coupon ? store.coupon.code : ''}"
                ${store.coupon ? 'disabled' : ''}
                class="flex-1 px-3 py-2 border border-[#E8E4DC] text-xs uppercase tracking-wider focus:outline-none focus:border-black"
              />
              ${store.coupon ? `
                <button id="cart-remove-coupon-btn" class="bg-gray-200 text-[#111] text-[11px] font-semibold px-3 py-2 uppercase tracking-wider">
                  Remove
                </button>
              ` : `
                <button id="cart-apply-coupon-btn" class="bg-black text-white text-[11px] font-semibold px-4 py-2 uppercase tracking-wider hover:bg-black/80">
                  Apply
                </button>
              `}
            </div>
            ${store.coupon ? `
              <div class="text-[10px] text-emerald-700 font-medium tracking-wide">
                ${store.coupon.label} applied successfully.
              </div>
            ` : ''}

            <!-- Subtotals -->
            <div class="space-y-1.5 text-xs">
              <div class="flex justify-between text-[#737373]">
                <span>Subtotal</span>
                <span>Rs. ${subtotal.toLocaleString('en-PK')}</span>
              </div>
              ${discount > 0 ? `
                <div class="flex justify-between text-emerald-700 font-medium">
                  <span>Privilege Discount</span>
                  <span>- Rs. ${discount.toLocaleString('en-PK')}</span>
                </div>
              ` : ''}
              <div class="flex justify-between text-[#737373]">
                <span>Delivery (Pakistan)</span>
                <span>${shipping === 0 ? 'Complimentary' : `Rs. ${shipping}`}</span>
              </div>
              <div class="flex justify-between text-sm font-semibold text-[#111111] pt-2 border-t border-[#E8E4DC]">
                <span>Grand Total</span>
                <span>Rs. ${total.toLocaleString('en-PK')}</span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="space-y-2 pt-2">
              <a href="#/checkout" class="btn-primary w-full py-3.5 text-xs text-center drawer-close-action font-semibold tracking-luxury">
                Proceed to Checkout &rarr;
              </a>
              <a href="#/cart" class="btn-outline w-full py-2.5 text-xs text-center drawer-close-action font-medium">
                View Full Shopping Bag
              </a>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function bindCartDrawerEvents() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (!backdrop) return;

  // Close triggers
  const closeBtn = document.getElementById('close-cart-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.toggleCart(false));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.toggleCart(false);
    }
  });

  const closeActions = backdrop.querySelectorAll('.drawer-close-action');
  closeActions.forEach(a => {
    a.addEventListener('click', () => store.toggleCart(false));
  });

  // Quantity and remove buttons
  const minusBtns = backdrop.querySelectorAll('.cart-qty-minus');
  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current - 1);
    });
  });

  const plusBtns = backdrop.querySelectorAll('.cart-qty-plus');
  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current + 1);
    });
  });

  const removeBtns = backdrop.querySelectorAll('.cart-remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      store.removeFromCart(idx);
    });
  });

  // Coupon
  const applyCouponBtn = document.getElementById('cart-apply-coupon-btn');
  const removeCouponBtn = document.getElementById('cart-remove-coupon-btn');
  const couponInput = document.getElementById('cart-coupon-input');

  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      store.applyCoupon(couponInput.value);
    });
  }

  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      store.removeCoupon();
    });
  }
}

/* ==================== FILE: js/components/wishlistDrawer.js ==================== */
// ZK STORE — Luxury Slide Wishlist Drawer Component

function renderWishlistDrawer() {
  const isOpen = store.ui.isWishlistOpen;
  const items = store.getWishlist();

  return `
    <div id="wishlist-drawer-backdrop" class="drawer-backdrop ${isOpen ? 'active' : ''}">
      <div class="slide-drawer">
        <!-- Header -->
        <div class="p-6 border-b border-[#E8E4DC] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="font-serif text-xl tracking-[0.16em] uppercase font-semibold text-[#111111]">Saved Pieces</span>
            <span class="text-xs text-[#737373]">(${items.length} items)</span>
          </div>
          <button id="close-wishlist-btn" class="p-1.5 text-[#111111] hover:opacity-60 transition-opacity" aria-label="Close wishlist">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Wishlist Items List / Empty State -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          ${items.length === 0 ? `
            <div class="h-full flex flex-col items-center justify-center text-center py-16">
              <div class="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#737373] mb-4">
                <i data-lucide="heart" class="w-8 h-8"></i>
              </div>
              <h4 class="font-serif text-xl text-[#111111] mb-2 font-medium">Your Wishlist is Empty</h4>
              <p class="text-xs text-[#737373] max-w-xs mb-6">
                Save pieces you desire by tapping the heart icon on any product.
              </p>
              <div class="flex gap-3">
                <a href="#/new-arrivals" class="btn-primary text-xs py-2.5 px-4 wishlist-close-action">Explore New Arrivals</a>
              </div>
            </div>
          ` : `
            <div class="divide-y divide-[#E8E4DC]">
              ${items.map((item) => {
                const prod = typeof item === 'string' ? store.getProductById(item) : item;
                if (!prod) return '';
                const formattedPrice = `Rs. ${(prod.price || prod.salePrice).toLocaleString('en-PK')}`;

                return `
                  <div class="py-4 first:pt-0 last:pb-0 flex gap-4">
                    <!-- Thumbnail -->
                    <div class="w-20 h-24 bg-[#F7F5F0] flex-shrink-0 overflow-hidden relative">
                      <img src="${prod.image || prod.images?.[0]}" alt="${prod.name}" class="w-full h-full object-cover">
                    </div>

                    <!-- Details -->
                    <div class="flex-1 flex flex-col justify-between">
                      <div>
                        <div class="flex items-start justify-between gap-2">
                          <h4 class="font-sans text-xs font-semibold text-[#111111] line-clamp-1">
                            <a href="#/product/${prod.id}" class="wishlist-close-action hover:underline">${prod.name}</a>
                          </h4>
                          <button class="wishlist-remove-btn text-[#737373] hover:text-[#111111] transition-colors p-0.5" data-id="${prod.id}" title="Remove item">
                            <i data-lucide="x" class="w-3.5 h-3.5"></i>
                          </button>
                        </div>
                        <div class="text-[11px] text-[#737373] mt-1">${prod.category}</div>
                        <div class="text-xs font-semibold text-[#111111] mt-1">${formattedPrice}</div>
                      </div>

                      <div class="pt-2">
                        <button class="wishlist-move-to-cart-btn btn-primary w-full py-2 text-[10px] tracking-wider uppercase" data-id="${prod.id}">
                          Move to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>

        <!-- Footer -->
        ${items.length > 0 ? `
          <div class="p-6 border-t border-[#E8E4DC] bg-white">
            <a href="#/wishlist" class="btn-outline w-full py-3 text-xs text-center wishlist-close-action font-semibold tracking-wider uppercase block">
              View Complete Wishlist Page &rarr;
            </a>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function bindWishlistDrawerEvents() {
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  if (!backdrop) return;

  const closeBtn = document.getElementById('close-wishlist-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.toggleWishlistDrawer(false));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.toggleWishlistDrawer(false);
    }
  });

  const closeActions = backdrop.querySelectorAll('.wishlist-close-action');
  closeActions.forEach(a => {
    a.addEventListener('click', () => store.toggleWishlistDrawer(false));
  });

  // Remove from wishlist
  const removeBtns = backdrop.querySelectorAll('.wishlist-remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const prod = store.getProductById(id);
      if (prod) {
        store.toggleWishlist(prod);
      }
    });
  });

  // Move to cart
  const moveBtns = backdrop.querySelectorAll('.wishlist-move-to-cart-btn');
  moveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const prod = store.getProductById(id);
      if (prod) {
        store.addToCart(prod, prod.colors[0]?.name || 'Standard', prod.sizes[0] || 'M', 1);
        store.toggleWishlist(prod); // remove from wishlist once moved
        store.toggleWishlistDrawer(false);
        store.toggleCart(true);
      }
    });
  });
}

/* ==================== FILE: js/components/searchModal.js ==================== */
// ZK STORE — Luxury Instant Search Modal Component

function renderSearchModal() {
  const isOpen = store.ui.isSearchOpen;

  return `
    <div id="search-modal-backdrop" class="modal-overlay ${isOpen ? 'active' : ''}">
      <div class="modal-dialog max-w-3xl bg-white shadow-2xl p-6 sm:p-8">
        
        <!-- Search Header & Input -->
        <div class="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
          <div class="flex items-center gap-3 flex-1">
            <i data-lucide="search" class="w-5 h-5 text-[#737373]"></i>
            <input 
              type="text" 
              id="live-search-input" 
              placeholder="Search by product name, category (e.g. Hoodies, Denim), color, or style..." 
              class="w-full text-base sm:text-lg font-sans placeholder:text-[#888] focus:outline-none tracking-wide"
              autocomplete="off"
            />
          </div>
          <button id="close-search-modal-btn" class="p-2 text-[#737373] hover:text-[#111111] transition-colors ml-4">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Suggestions & Quick Chips -->
        <div class="py-4 border-b border-[#E8E4DC] flex flex-wrap items-center gap-2">
          <span class="text-xs font-semibold text-[#737373] tracking-wider uppercase mr-2">Trending:</span>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Heavyweight T-Shirt">T-Shirts</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Bomber Jacket">Bomber Jackets</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Satin Top">Satin Tops</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Jeans">Selvedge Jeans</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Hoodie">Hoodies</button>
          <button class="search-tag-chip px-3 py-1 bg-[#F7F5F0] hover:bg-black hover:text-white text-xs transition-colors rounded-full text-[#333]" data-query="Dress">Dresses</button>
        </div>

        <!-- Live Results Container -->
        <div id="search-live-results" class="py-6 max-h-[50vh] overflow-y-auto">
          <div class="text-center py-10 text-xs text-[#737373]">
            Start typing to explore the ZK STORE 50-piece collection.
          </div>
        </div>

        <!-- Footer link -->
        <div id="search-view-all-footer" class="pt-4 border-t border-[#E8E4DC] flex justify-between items-center hidden">
          <span id="search-result-count" class="text-xs text-[#737373]"></span>
          <a id="search-view-all-link" href="#/search?q=" class="text-xs font-semibold tracking-wider uppercase text-black hover:underline">
            View All Results &rarr;
          </a>
        </div>
      </div>
    </div>
  `;
}

function bindSearchModalEvents() {
  const backdrop = document.getElementById('search-modal-backdrop');
  if (!backdrop) return;

  const closeBtn = document.getElementById('close-search-modal-btn');
  const input = document.getElementById('live-search-input');
  const resultsContainer = document.getElementById('search-live-results');
  const footer = document.getElementById('search-view-all-footer');
  const countSpan = document.getElementById('search-result-count');
  const viewAllLink = document.getElementById('search-view-all-link');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.toggleSearch(false));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.toggleSearch(false);
    }
  });

  // Trending chips click
  const chips = backdrop.querySelectorAll('.search-tag-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query');
      if (input) {
        input.value = q;
        triggerSearch(q);
      }
    });
  });

  function triggerSearch(query) {
    const q = query.trim();
    if (!q) {
      resultsContainer.innerHTML = `
        <div class="text-center py-10 text-xs text-[#737373]">
          Start typing to explore the ZK STORE 50-piece collection.
        </div>
      `;
      footer.classList.add('hidden');
      return;
    }

    const matches = store.searchProducts(q);
    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="text-center py-12">
          <i data-lucide="search-x" class="w-8 h-8 text-[#737373] mx-auto mb-2"></i>
          <p class="font-serif text-lg text-[#111] mb-1">No Pieces Found</p>
          <p class="text-xs text-[#737373]">We couldn't find any clothing matching "${q}". Try searching for T-Shirts, Hoodies, Blazers, or Jeans.</p>
        </div>
      `;
      footer.classList.add('hidden');
    } else {
      resultsContainer.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${matches.slice(0, 6).map(prod => `
            <a href="#/product/${prod.id}" class="search-result-item flex gap-3 p-2 hover:bg-[#F7F5F0] transition-colors rounded">
              <div class="w-16 h-20 bg-[#F7F5F0] flex-shrink-0 overflow-hidden">
                <img src="${prod.images[0]}" alt="${prod.name}" class="w-full h-full object-cover">
              </div>
              <div class="flex-1 flex flex-col justify-center">
                <span class="text-[10px] uppercase font-semibold text-[#737373] tracking-widest">${prod.gender} &bull; ${prod.category}</span>
                <h4 class="text-xs font-semibold text-[#111111] line-clamp-1">${prod.name}</h4>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-xs font-bold text-[#111111]">Rs. ${prod.salePrice.toLocaleString('en-PK')}</span>
                  <span class="price-original text-[11px]">Rs. ${prod.originalPrice.toLocaleString('en-PK')}</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      `;

      footer.classList.remove('hidden');
      countSpan.textContent = `Showing top 6 of ${matches.length} matching pieces`;
      viewAllLink.href = `#/search?q=${encodeURIComponent(q)}`;
    }

    if (window.lucide) {
      window.lucide.createIcons({ root: resultsContainer });
    }

    // Attach click listener to close modal on navigation
    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => store.toggleSearch(false));
    });
    viewAllLink.addEventListener('click', () => store.toggleSearch(false));
  }

  if (input) {
    let debounceTimer;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        triggerSearch(e.target.value);
      }, 250);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) {
          store.toggleSearch(false);
          window.location.hash = `#/search?q=${encodeURIComponent(q)}`;
        }
      }
    });
  }
}

/* ==================== FILE: js/components/sizeGuideModal.js ==================== */
// ZK STORE — Luxury Size Guide Modal Component

function renderSizeGuideModal() {
  const isOpen = store.ui.isSizeGuideOpen;

  return `
    <div id="sizeguide-modal-backdrop" class="modal-overlay ${isOpen ? 'active' : ''}">
      <div class="modal-dialog max-w-2xl bg-white shadow-2xl p-6 sm:p-8">
        <div class="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
          <div>
            <h3 class="font-serif text-2xl font-medium text-[#111111]">Atelier Size & Fit Guide</h3>
            <p class="text-xs text-[#737373] mt-0.5">Precision garment measurements (in inches & centimeters)</p>
          </div>
          <button id="close-sizeguide-btn" class="p-2 text-[#737373] hover:text-[#111] transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Gender Tabs -->
        <div class="py-4">
          <div class="flex gap-4 border-b border-[#E8E4DC] mb-4">
            <button class="sizeguide-tab-btn pb-2 text-xs font-semibold uppercase tracking-wider border-b-2 border-black text-black" data-tab="men">
              Men's Sizing
            </button>
            <button class="sizeguide-tab-btn pb-2 text-xs font-semibold uppercase tracking-wider text-[#737373] hover:text-black" data-tab="women">
              Women's Sizing
            </button>
          </div>

          <!-- Men Table -->
          <div id="sizeguide-table-men" class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-[#F7F5F0] text-[#111] border-b border-[#E8E4DC]">
                  <th class="p-2.5 font-semibold">Size</th>
                  <th class="p-2.5 font-semibold">Chest (Inches)</th>
                  <th class="p-2.5 font-semibold">Waist (Inches)</th>
                  <th class="p-2.5 font-semibold">Hips (Inches)</th>
                  <th class="p-2.5 font-semibold">Length</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E8E4DC] text-[#444]">
                <tr><td class="p-2.5 font-bold text-black">XS</td><td class="p-2.5">34 - 36"</td><td class="p-2.5">28 - 29"</td><td class="p-2.5">35 - 36"</td><td class="p-2.5">27.0"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">S</td><td class="p-2.5">36 - 38"</td><td class="p-2.5">30 - 31"</td><td class="p-2.5">37 - 38"</td><td class="p-2.5">27.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">M</td><td class="p-2.5">38 - 40"</td><td class="p-2.5">32 - 33"</td><td class="p-2.5">39 - 40"</td><td class="p-2.5">28.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">L</td><td class="p-2.5">40 - 42"</td><td class="p-2.5">34 - 35"</td><td class="p-2.5">41 - 42"</td><td class="p-2.5">29.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">XL</td><td class="p-2.5">42 - 44"</td><td class="p-2.5">36 - 38"</td><td class="p-2.5">43 - 44"</td><td class="p-2.5">30.5"</td></tr>
                <tr><td class="p-2.5 font-bold text-black">XXL</td><td class="p-2.5">44 - 46"</td><td class="p-2.5">39 - 41"</td><td class="p-2.5">45 - 46"</td><td class="p-2.5">31.0"</td></tr>
              </tbody>
            </table>
          </div>

          <!-- Women Table -->
          <div id="sizeguide-table-women" class="overflow-x-auto hidden">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-[#F7F5F0] text-[#111] border-b border-[#E8E4DC]">
                  <th class="p-2.5 font-semibold">Size</th>
                  <th class="p-2.5 font-semibold">Bust (Inches)</th>
                  <th class="p-2.5 font-semibold">Waist (Inches)</th>
                  <th class="p-2.5 font-semibold">Hips (Inches)</th>
                  <th class="p-2.5 font-semibold">UK / EU</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E8E4DC] text-[#444]">
                <tr><td class="p-2.5 font-bold text-black">XS</td><td class="p-2.5">31 - 32"</td><td class="p-2.5">24 - 25"</td><td class="p-2.5">34 - 35"</td><td class="p-2.5">UK 6 / EU 34</td></tr>
                <tr><td class="p-2.5 font-bold text-black">S</td><td class="p-2.5">33 - 34"</td><td class="p-2.5">26 - 27"</td><td class="p-2.5">36 - 37"</td><td class="p-2.5">UK 8 / EU 36</td></tr>
                <tr><td class="p-2.5 font-bold text-black">M</td><td class="p-2.5">35 - 36"</td><td class="p-2.5">28 - 29"</td><td class="p-2.5">38 - 39"</td><td class="p-2.5">UK 10 / EU 38</td></tr>
                <tr><td class="p-2.5 font-bold text-black">L</td><td class="p-2.5">37 - 39"</td><td class="p-2.5">30 - 32"</td><td class="p-2.5">40 - 42"</td><td class="p-2.5">UK 12 / EU 40</td></tr>
                <tr><td class="p-2.5 font-bold text-black">XL</td><td class="p-2.5">40 - 42"</td><td class="p-2.5">33 - 35"</td><td class="p-2.5">43 - 45"</td><td class="p-2.5">UK 14 / EU 42</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-4 p-4 bg-[#F7F5F0] text-xs text-[#555] space-y-1">
          <p><strong>Fit Tip:</strong> Our oversized t-shirts, sweatshirts, and hoodies are engineered with a relaxed drop-shoulder cut. Order your true size for intended relaxed silhouette, or size down for a standard regular fit.</p>
        </div>
      </div>
    </div>
  `;
}

function bindSizeGuideEvents() {
  const backdrop = document.getElementById('sizeguide-modal-backdrop');
  if (!backdrop) return;

  const closeBtn = document.getElementById('close-sizeguide-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => store.closeSizeGuide());
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      store.closeSizeGuide();
    }
  });

  const tabBtns = backdrop.querySelectorAll('.sizeguide-tab-btn');
  const menTable = document.getElementById('sizeguide-table-men');
  const womenTable = document.getElementById('sizeguide-table-women');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('border-b-2', 'border-black', 'text-black');
        b.classList.add('text-[#737373]');
      });
      btn.classList.add('border-b-2', 'border-black', 'text-black');
      btn.classList.remove('text-[#737373]');

      const tab = btn.getAttribute('data-tab');
      if (tab === 'men') {
        menTable.classList.remove('hidden');
        womenTable.classList.add('hidden');
      } else {
        menTable.classList.add('hidden');
        womenTable.classList.remove('hidden');
      }
    });
  });
}

/* ==================== FILE: js/components/footer.js ==================== */
// ZK STORE — High-Fashion Luxury Editorial Footer Component

function renderFooter() {
  return `
    <!-- Luxury Brand Footer -->
    <footer class="bg-[#111111] text-[#F7F5F0] pt-20 pb-12 border-t border-[#292929]">
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        <!-- Top Section: Brand Statement & Newsletter Subscription -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#292929]">
          
          <!-- Brand Identity Column -->
          <div class="lg:col-span-5 space-y-6">
            <a href="#/" class="inline-block">
              <span class="font-serif text-3xl sm:text-4xl tracking-[0.24em] font-semibold uppercase text-white block">
                ZK STORE
              </span>
              <span class="font-sans text-[10px] tracking-[0.4em] uppercase text-[#D8C8B5] block mt-1">
                HAUTE LUXURY ATELIER
              </span>
            </a>
            <p class="text-xs sm:text-sm text-[#999999] leading-relaxed max-w-md font-sans">
              Rooted in sculptural architectural cuts, custom-milled heavyweight organic cottons, and timeless European tailoring. An international luxury fashion house crafted for those who speak through silhouette.
            </p>
            <div class="flex items-center space-x-5 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="ZK STORE Instagram">
                <i data-lucide="instagram" class="w-4 h-4"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="ZK STORE Facebook">
                <i data-lucide="facebook" class="w-4 h-4"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="ZK STORE TikTok">
                <i data-lucide="video" class="w-4 h-4"></i>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener" class="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-[#CCC] hover:text-white hover:border-white transition-colors" aria-label="WhatsApp VIP Concierge">
                <i data-lucide="message-circle" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- Newsletter Column -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <div class="bg-[#1C1C1C] p-8 sm:p-10 border border-[#2E2E2E]">
              <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D8C8B5] block mb-2">
                EXCLUSIVITY AWAITS
              </span>
              <h3 class="font-serif text-2xl sm:text-3xl text-white font-medium mb-3">
                Join the Private Atelier Circle
              </h3>
              <p class="text-xs text-[#AAAAAA] mb-6 max-w-lg leading-relaxed">
                Receive private invitations to seasonal drops, atelier previews, and enjoy Rs. 500 privilege voucher on your first order.
              </p>

              <form id="footer-newsletter-form" class="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  id="footer-newsletter-email" 
                  placeholder="Enter your VIP email address..." 
                  required 
                  class="flex-1 bg-black/60 border border-[#3A3A3A] px-4 py-3.5 text-xs text-white placeholder:text-[#666] focus:outline-none focus:border-[#D8C8B5] tracking-wider"
                />
                <button type="submit" class="bg-[#D8C8B5] hover:bg-white text-[#111111] px-8 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-colors flex-shrink-0">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

        </div>

        <!-- Middle Section: Navigation Columns -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-[#292929] text-xs">
          
          <!-- Column 1: Men -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Men's Atelier</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/men?category=t-shirts" class="hover:text-white transition-colors">Heavyweight T-Shirts</a></li>
              <li><a href="#/men?category=shirts" class="hover:text-white transition-colors">Italian Poplin & Linen Shirts</a></li>
              <li><a href="#/men?category=hoodies" class="hover:text-white transition-colors">500GSM Loopback Hoodies</a></li>
              <li><a href="#/men?category=jackets" class="hover:text-white transition-colors">Bombers & Outerwear</a></li>
              <li><a href="#/men?category=jeans" class="hover:text-white transition-colors">Selvedge Denim</a></li>
              <li><a href="#/men?category=trousers" class="hover:text-white transition-colors">Pleated Sartorial Trousers</a></li>
              <li><a href="#/men" class="text-white font-medium hover:underline pt-1 block">View All Men (25) &rarr;</a></li>
            </ul>
          </div>

          <!-- Column 2: Women -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Women's Atelier</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/women?category=tops" class="hover:text-white transition-colors">Satin Tops & Corsets</a></li>
              <li><a href="#/women?category=shirts" class="hover:text-white transition-colors">Oversized Cotton Shirting</a></li>
              <li><a href="#/women?category=dresses" class="hover:text-white transition-colors">Evening Gowns & Slip Dresses</a></li>
              <li><a href="#/women?category=jackets" class="hover:text-white transition-colors">Cashmere Coats & Blazers</a></li>
              <li><a href="#/women?category=jeans" class="hover:text-white transition-colors">High-Rise & Wide Leg Denim</a></li>
              <li><a href="#/women?category=skirts" class="hover:text-white transition-colors">Bias-Cut Silk Skirts</a></li>
              <li><a href="#/women" class="text-white font-medium hover:underline pt-1 block">View All Women (25) &rarr;</a></li>
            </ul>
          </div>

          <!-- Column 3: The House -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">The House</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/about" class="hover:text-white transition-colors">Brand Story & Heritage</a></li>
              <li><a href="#/categories" class="hover:text-white transition-colors">All Clothing Collections</a></li>
              <li><a href="#/new-arrivals" class="hover:text-white transition-colors">New Season Arrivals</a></li>
              <li><a href="#/best-sellers" class="hover:text-white transition-colors">House Best Sellers</a></li>
              <li><a href="#/about#craftsmanship" class="hover:text-white transition-colors">Fabric & Craftsmanship</a></li>
            </ul>
          </div>

          <!-- Column 4: Client Services -->
          <div class="space-y-4">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Client Concierge</h4>
            <ul class="space-y-2.5 text-[#999]">
              <li><a href="#/order-tracking" class="hover:text-white transition-colors">Live Order Tracking</a></li>
              <li><a href="#/contact" class="hover:text-white transition-colors">Contact Concierge</a></li>
              <li><a href="#/shipping" class="hover:text-white transition-colors">Complimentary Delivery Info</a></li>
              <li><a href="#/shipping#returns" class="hover:text-white transition-colors">Atelier 14-Day Exchanges</a></li>
              <li><a href="#/faq" class="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#/privacy" class="hover:text-white transition-colors">Privacy & Data Security</a></li>
              <li><a href="#/terms" class="hover:text-white transition-colors">Terms of Atelier Sale</a></li>
            </ul>
          </div>

          <!-- Column 5: Boutiques & Assistance -->
          <div class="space-y-4 col-span-2 md:col-span-4 lg:col-span-1">
            <h4 class="font-serif text-sm tracking-[0.16em] uppercase font-semibold text-white">Flagship Boutiques</h4>
            <div class="space-y-3 text-[#999]">
              <div>
                <p class="text-white font-medium">Karachi Atelier</p>
                <p class="text-[11px]">Bukhari Commercial, DHA Phase VI</p>
              </div>
              <div>
                <p class="text-white font-medium">Lahore Atelier</p>
                <p class="text-[11px]">MM Alam Road, Gulberg III</p>
              </div>
              <div class="pt-2 text-[11px]">
                <p class="text-white">VIP Direct Line:</p>
                <p>+92 21 3524 8900</p>
                <p class="text-[#D8C8B5]">concierge@zkstore.luxury</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Row: Payment Logos & Copyright -->
        <div class="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#777777]">
          <div class="flex items-center gap-2">
            <span>&copy; ${new Date().getFullYear()} ZK STORE Haute Atelier Ltd. All rights reserved.</span>
          </div>

          <!-- Accepted Payment Methods in Pakistan & International -->
          <div class="flex items-center flex-wrap gap-2 text-[10px]">
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Cash on Delivery</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Meezan Bank</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Bank Alfalah</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">TCS Express</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">Visa / Mastercard</span>
            <span class="px-2.5 py-1 border border-[#333] text-[#CCC] bg-[#1A1A1A]">SSL 256-Bit</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}

function bindFooterEvents() {
  const form = document.getElementById('footer-newsletter-form');
  const input = document.getElementById('footer-newsletter-email');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();
      if (email) {
        store.showToast(`Thank you for joining the VIP Atelier circle: ${email}`, 'success');
        input.value = '';
      }
    });
  }
}

/* ==================== FILE: js/pages/home.js ==================== */
// ZK STORE — Luxury Fashion Homepage



function renderHomePage() {
  const newArrivals = store.getNewArrivals(8);
  const bestSellers = store.getBestSellers(8);

  return `
    <div class="space-y-24 sm:space-y-32">
      
      <!-- C. Hero Section: Full-Width Cinematic Campaign -->
      <section class="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <!-- Hero Background Image with Subtle Parallax / Zoom -->
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=85" 
            alt="ZK STORE New Season Haute Collection" 
            class="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50"></div>
        </div>

        <!-- Hero Content Overlay -->
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-6 pt-12">
          
          <div class="inline-block">
            <span class="text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5] bg-black/40 backdrop-blur-md px-4 py-1.5 border border-[#D8C8B5]/40">
              AUTUMN / WINTER ATELIER '26
            </span>
          </div>

          <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.08em] uppercase leading-[1.05] text-[#F7F5F0]">
            STYLE IS A STATEMENT.
          </h1>

          <p class="font-sans text-sm sm:text-base md:text-lg text-[#E0DDD5] max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Discover the art of effortless dressing with ZK STORE. Uncompromising quality, heavyweight custom textiles, and timeless modern silhouettes.
          </p>

          <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#/men" class="btn-primary w-full sm:w-auto px-10 py-4 bg-white text-[#111111] hover:bg-[#D8C8B5] hover:text-black border-none text-xs font-bold tracking-[0.2em] uppercase shadow-2xl">
              SHOP MEN
            </a>
            <a href="#/women" class="btn-outline-white w-full sm:w-auto px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase shadow-2xl">
              SHOP WOMEN
            </a>
          </div>

        </div>

        <!-- Bottom Hero Badges -->
        <div class="absolute bottom-6 left-0 right-0 z-10 hidden sm:flex justify-between items-center max-w-[1600px] mx-auto px-10 text-[11px] text-[#D8C8B5] tracking-widest uppercase">
          <span>&bull; Bespoke Pakistani & Global Silhouettes</span>
          <span>&bull; Complimentary Express TCS Delivery Over Rs. 5,000</span>
          <span>&bull; Handcrafted Finishing</span>
        </div>
      </section>

      <!-- D. Featured Categories: Men & Women Tabbed Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8E4DC] pb-6 gap-4">
          <div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
              CURATED WARDROBE
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide">
              Featured Categories
            </h2>
          </div>

          <!-- Category Gender Toggle Pills -->
          <div class="flex items-center gap-3">
            <button id="category-tab-men" class="px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors">
              Men's Categories (9)
            </button>
            <button id="category-tab-women" class="px-6 py-2.5 bg-transparent text-[#111111] hover:bg-gray-100 border border-[#E8E4DC] text-xs font-semibold uppercase tracking-[0.16em] transition-colors">
              Women's Categories (10)
            </button>
          </div>
        </div>

        <!-- Men Categories Grid -->
        <div id="men-categories-showcase" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          ${MEN_CATEGORIES.map(cat => `
            <a href="#/men?category=${cat.slug}" class="category-card group block aspect-[3/4] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-xl sm:text-2xl font-medium tracking-wide leading-tight">${cat.name}</h3>
                <p class="text-[11px] text-white/80 line-clamp-1 mt-1 font-light">${cat.description}</p>
                <div class="pt-3">
                  <span class="text-[10px] uppercase font-semibold tracking-widest underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Shop ${cat.name} &rarr;
                  </span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>

        <!-- Women Categories Grid (Hidden by default, toggled via tab) -->
        <div id="women-categories-showcase" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 hidden">
          ${WOMEN_CATEGORIES.map(cat => `
            <a href="#/women?category=${cat.slug}" class="category-card group block aspect-[3/4] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-5 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-xl sm:text-2xl font-medium tracking-wide leading-tight">${cat.name}</h3>
                <p class="text-[11px] text-white/80 line-clamp-1 mt-1 font-light">${cat.description}</p>
                <div class="pt-3">
                  <span class="text-[10px] uppercase font-semibold tracking-widest underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Shop ${cat.name} &rarr;
                  </span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- E. New Arrivals Section (Minimum 8 Products) -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E8E4DC] gap-4">
          <div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
              LATEST ATELIER RELEASES
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide">
              New Arrivals
            </h2>
          </div>
          <a href="#/new-arrivals" class="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] hover:underline flex items-center gap-2">
            View All New Arrivals &rarr;
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${newArrivals.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

      <!-- G. Seasonal Collection: Editorial Campaign Section -->
      <section class="relative bg-[#111111] text-white py-24 sm:py-36 overflow-hidden">
        <div class="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=80" 
            alt="The Art of Everyday Luxury" 
            class="w-full h-full object-cover object-center filter grayscale"
          />
        </div>
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5] block">
            SEASONAL EDITORIAL
          </span>
          <h2 class="font-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.12em] font-normal text-[#F7F5F0]">
            THE ART OF EVERYDAY LUXURY
          </h2>
          <p class="font-sans text-xs sm:text-sm md:text-base text-[#D0CCC2] max-w-xl mx-auto leading-relaxed font-light">
            Crafted with unwavering dedication to textile weight, precision tailoring, and pure monochromatic palette. Every garment is an intentional dialogue between structure and drape.
          </p>
          <div class="pt-6 flex justify-center gap-4">
            <a href="#/categories" class="btn-primary bg-[#D8C8B5] hover:bg-white text-black border-none px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase">
              EXPLORE THE EDIT
            </a>
          </div>
        </div>
      </section>

      <!-- F. Best Sellers Section (Minimum 8 Products) -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E8E4DC] gap-4">
          <div>
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
              CLIENT FAVORITES
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide">
              Best Sellers
            </h2>
          </div>
          <a href="#/best-sellers" class="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] hover:underline flex items-center gap-2">
            View All Best Sellers &rarr;
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${bestSellers.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

      <!-- H. Shop by Style: Rich Visual Collection Blocks -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
            AESTHETIC DIRECTIONS
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium tracking-wide mb-3">
            Shop by Style
          </h2>
          <p class="text-xs text-[#737373] leading-relaxed">
            Choose your mood. From relaxed minimalism to sharp structured outerwear.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${STYLE_COLLECTIONS.map(style => `
            <a href="#/categories" class="group block relative overflow-hidden aspect-[4/5] bg-[#F7F5F0]">
              <img src="${style.image}" alt="${style.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D8C8B5] mb-2">${style.tag}</span>
                <h3 class="font-serif text-2xl font-medium tracking-wide mb-2">${style.title}</h3>
                <p class="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-4">${style.subtitle}</p>
                <span class="text-[11px] font-semibold tracking-wider uppercase underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Collection &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- I. Brand Story: Luxury Editorial Section -->
      <section class="bg-[#F7F5F0] py-20 sm:py-28 border-y border-[#E8E4DC]">
        <div class="max-w-[1400px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 relative aspect-[4/5] overflow-hidden bg-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" 
              alt="ZK STORE Atelier Craftsmanship" 
              class="w-full h-full object-cover"
            />
          </div>

          <div class="lg:col-span-6 space-y-6">
            <span class="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#737373] block">
              THE MANIFESTO
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal leading-[1.15]">
              MORE THAN FASHION. <br />IT'S YOUR IDENTITY.
            </h2>
            <div class="space-y-4 text-xs sm:text-sm text-[#555] leading-relaxed font-sans">
              <p>
                ZK STORE was founded on a singular conviction: true luxury does not shout with overt branding. It whispers through the weight of 280GSM organic combed cotton, the crisp roll of an unlined Oxford collar, and the natural fluidity of bias-cut silk.
              </p>
              <p>
                Operating between our design atelier in Karachi and select European textile mills, we merge centuries of Eastern textile heritage with rigorous contemporary Western silhouette design.
              </p>
              <p>
                Every stitch, double-reverse pleat, and bespoke metal zipper is calibrated for enduring longevity. We design clothes to be worn, lived in, and passed forward.
              </p>
            </div>
            <div class="pt-4">
              <a href="#/about" class="btn-primary text-xs tracking-[0.18em] uppercase py-3.5 px-8">
                READ THE ATELIER STORY &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- J. Newsletter Section: "GET ON THE LIST" -->
      <section class="max-w-[1200px] mx-auto px-6 sm:px-12 pb-12">
        <div class="bg-[#111111] text-white p-8 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <div class="relative z-10 max-w-xl mx-auto space-y-4">
            <span class="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#D8C8B5]">
              VIP PRIVILEGE
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.14em] font-normal">
              GET ON THE LIST
            </h2>
            <p class="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
              Subscribe to unlock private drops, early access to seasonal archives, and receive an instant Rs. 500 privilege voucher.
            </p>
            <form id="home-newsletter-form" class="flex flex-col sm:flex-row gap-3 pt-4">
              <input 
                type="email" 
                id="home-newsletter-email" 
                placeholder="Enter your VIP email address..." 
                required 
                class="flex-1 bg-black/60 border border-[#3A3A3A] px-4 py-3.5 text-xs text-white placeholder:text-[#666] focus:outline-none focus:border-[#D8C8B5] tracking-wider"
              />
              <button type="submit" class="bg-[#D8C8B5] hover:bg-white text-[#111111] px-8 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-colors">
                JOIN NOW
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  `;
}

function bindHomePageEvents() {
  bindProductCardActions();

  // Category Tab Toggles
  const tabMen = document.getElementById('category-tab-men');
  const tabWomen = document.getElementById('category-tab-women');
  const showcaseMen = document.getElementById('men-categories-showcase');
  const showcaseWomen = document.getElementById('women-categories-showcase');

  if (tabMen && tabWomen && showcaseMen && showcaseWomen) {
    tabMen.addEventListener('click', () => {
      tabMen.className = 'px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      tabWomen.className = 'px-6 py-2.5 bg-transparent text-[#111111] hover:bg-gray-100 border border-[#E8E4DC] text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      showcaseMen.classList.remove('hidden');
      showcaseWomen.classList.add('hidden');
    });

    tabWomen.addEventListener('click', () => {
      tabWomen.className = 'px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      tabMen.className = 'px-6 py-2.5 bg-transparent text-[#111111] hover:bg-gray-100 border border-[#E8E4DC] text-xs font-semibold uppercase tracking-[0.16em] transition-colors';
      showcaseWomen.classList.remove('hidden');
      showcaseMen.classList.add('hidden');
    });
  }

  // Home newsletter
  const newsletterForm = document.getElementById('home-newsletter-form');
  const newsletterEmail = document.getElementById('home-newsletter-email');
  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (email) {
        store.showToast(`Welcome to the Private Circle: ${email}. Use voucher WELCOMEZK for Rs. 500 off.`, 'success');
        newsletterEmail.value = '';
      }
    });
  }
}

/* ==================== FILE: js/pages/men.js ==================== */
// ZK STORE — Men's Dedicated Luxury Storefront



function renderMenPage(queryParams = {}) {
  const activeCategory = queryParams.category || 'all';
  const isSaleOnly = queryParams.sale === 'true';

  let products = store.getProductsByGender('men');
  if (activeCategory !== 'all') {
    products = products.filter(p => p.categorySlug === activeCategory);
  }
  if (isSaleOnly) {
    products = products.filter(p => p.discountPercent >= 25);
  }

  const categoryTitle = activeCategory === 'all' 
    ? (isSaleOnly ? "Men's Atelier Sale" : "Men's Collection")
    : MEN_CATEGORIES.find(c => c.slug === activeCategory)?.name || "Men's Collection";

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Editorial Masculine Hero Banner -->
      <section class="relative min-h-[42vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80" 
            alt="Men's Haute Collection" 
            class="w-full h-full object-cover object-center brightness-75 contrast-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5]">
            HAUTE HOMME &bull; 25 BESPOKE STYLES
          </span>
          <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.1em] uppercase leading-tight">
            ${categoryTitle}
          </h1>
          <p class="font-sans text-xs sm:text-sm text-[#DDD] max-w-lg mx-auto font-light leading-relaxed">
            Architectural tailoring, 280GSM heavy knitwear, and Japanese raw denim engineered for modern stature.
          </p>
        </div>
      </section>

      <!-- Main Container with Category Chips & Filter Bar -->
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar border-b border-[#E8E4DC]">
          <a href="#/men" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-colors ${activeCategory === 'all' ? 'bg-[#111111] text-white' : 'bg-[#F7F5F0] text-[#111] hover:bg-gray-200'}">
            All Men (25)
          </a>
          ${MEN_CATEGORIES.map(cat => `
            <a href="#/men?category=${cat.slug}" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-colors ${activeCategory === cat.slug ? 'bg-[#111111] text-white' : 'bg-[#F7F5F0] text-[#111] hover:bg-gray-200'}">
              ${cat.name}
            </a>
          `).join('')}
        </div>

        <!-- Filter & Sorting Control Bar -->
        <div class="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E4DC]">
          <div class="flex items-center gap-4 text-xs text-[#737373]">
            <span>Showing <strong>${products.length}</strong> styles</span>
            ${activeCategory !== 'all' ? `
              <span class="bg-[#F7F5F0] text-black px-2.5 py-1 rounded-sm text-[11px] font-semibold flex items-center gap-1">
                Category: ${categoryTitle}
                <a href="#/men" class="hover:text-red-500 ml-1">&times;</a>
              </span>
            ` : ''}
          </div>

          <!-- Controls: Sort & Price Filter -->
          <div class="flex items-center flex-wrap gap-4">
            
            <!-- Sort dropdown -->
            <div class="flex items-center gap-2">
              <label for="men-sort-select" class="text-xs text-[#737373] uppercase tracking-wider font-semibold">Sort by:</label>
              <select id="men-sort-select" class="bg-white border border-[#E8E4DC] text-xs px-3 py-2 text-[#111] focus:outline-none focus:border-black font-medium">
                <option value="featured">Featured Atelier</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <!-- Price quick filter -->
            <div class="flex items-center gap-2">
              <label for="men-price-filter" class="text-xs text-[#737373] uppercase tracking-wider font-semibold">Max Price:</label>
              <select id="men-price-filter" class="bg-white border border-[#E8E4DC] text-xs px-3 py-2 text-[#111] focus:outline-none focus:border-black font-medium">
                <option value="all">All Prices</option>
                <option value="5000">Under Rs. 5,000</option>
                <option value="10000">Under Rs. 10,000</option>
                <option value="15000">Under Rs. 15,000</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Product Grid -->
        <div id="men-product-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 pt-8">
          ${products.length > 0 ? products.map(prod => renderProductCard(prod)).join('') : `
            <div class="col-span-full py-16 text-center text-xs text-[#737373]">
              No pieces match your selected filter criteria.
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

function bindMenPageEvents(queryParams = {}) {
  bindProductCardActions();

  const sortSelect = document.getElementById('men-sort-select');
  const priceSelect = document.getElementById('men-price-filter');
  const grid = document.getElementById('men-product-grid');

  function applyFilters() {
    let items = store.getProductsByGender('men');
    const activeCat = queryParams.category || 'all';
    if (activeCat !== 'all') {
      items = items.filter(p => p.categorySlug === activeCat);
    }

    const maxPrice = priceSelect ? priceSelect.value : 'all';
    if (maxPrice !== 'all') {
      const num = parseInt(maxPrice, 10);
      items = items.filter(p => p.salePrice <= num);
    }

    const sort = sortSelect ? sortSelect.value : 'featured';
    if (sort === 'price-low') {
      items.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sort === 'price-high') {
      items.sort((a, b) => b.salePrice - a.salePrice);
    } else if (sort === 'newest') {
      items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    if (grid) {
      grid.innerHTML = items.length > 0 
        ? items.map(p => renderProductCard(p)).join('')
        : `<div class="col-span-full py-16 text-center text-xs text-[#737373]">No pieces match your selected filter criteria.</div>`;
      
      if (window.lucide) {
        window.lucide.createIcons({ root: grid });
      }
      bindProductCardActions(grid);
    }
  }

  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);
}

/* ==================== FILE: js/pages/women.js ==================== */
// ZK STORE — Women's Dedicated Luxury Storefront



function renderWomenPage(queryParams = {}) {
  const activeCategory = queryParams.category || 'all';
  const isSaleOnly = queryParams.sale === 'true';

  let products = store.getProductsByGender('women');
  if (activeCategory !== 'all') {
    products = products.filter(p => p.categorySlug === activeCategory);
  }
  if (isSaleOnly) {
    products = products.filter(p => p.discountPercent >= 25);
  }

  const categoryTitle = activeCategory === 'all' 
    ? (isSaleOnly ? "Women's Atelier Sale" : "Women's Collection")
    : WOMEN_CATEGORIES.find(c => c.slug === activeCategory)?.name || "Women's Collection";

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Editorial Feminine Hero Banner -->
      <section class="relative min-h-[42vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80" 
            alt="Women's Haute Collection" 
            class="w-full h-full object-cover object-center brightness-75 contrast-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5]">
            HAUTE FEMME &bull; 25 BESPOKE SILHOUETTES
          </span>
          <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.1em] uppercase leading-tight">
            ${categoryTitle}
          </h1>
          <p class="font-sans text-xs sm:text-sm text-[#DDD] max-w-lg mx-auto font-light leading-relaxed">
            Fluid silk satins, cashmere blend outerwear, and architectural wide-leg denim curated for effortless poise.
          </p>
        </div>
      </section>

      <!-- Main Container with Category Chips & Filter Bar -->
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar border-b border-[#E8E4DC]">
          <a href="#/women" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-colors ${activeCategory === 'all' ? 'bg-[#111111] text-white' : 'bg-[#F7F5F0] text-[#111] hover:bg-gray-200'}">
            All Women (25)
          </a>
          ${WOMEN_CATEGORIES.map(cat => `
            <a href="#/women?category=${cat.slug}" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-colors ${activeCategory === cat.slug ? 'bg-[#111111] text-white' : 'bg-[#F7F5F0] text-[#111] hover:bg-gray-200'}">
              ${cat.name}
            </a>
          `).join('')}
        </div>

        <!-- Filter & Sorting Control Bar -->
        <div class="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E4DC]">
          <div class="flex items-center gap-4 text-xs text-[#737373]">
            <span>Showing <strong>${products.length}</strong> styles</span>
            ${activeCategory !== 'all' ? `
              <span class="bg-[#F7F5F0] text-black px-2.5 py-1 rounded-sm text-[11px] font-semibold flex items-center gap-1">
                Category: ${categoryTitle}
                <a href="#/women" class="hover:text-red-500 ml-1">&times;</a>
              </span>
            ` : ''}
          </div>

          <!-- Controls: Sort & Price Filter -->
          <div class="flex items-center flex-wrap gap-4">
            
            <!-- Sort dropdown -->
            <div class="flex items-center gap-2">
              <label for="women-sort-select" class="text-xs text-[#737373] uppercase tracking-wider font-semibold">Sort by:</label>
              <select id="women-sort-select" class="bg-white border border-[#E8E4DC] text-xs px-3 py-2 text-[#111] focus:outline-none focus:border-black font-medium">
                <option value="featured">Featured Atelier</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <!-- Price quick filter -->
            <div class="flex items-center gap-2">
              <label for="women-price-filter" class="text-xs text-[#737373] uppercase tracking-wider font-semibold">Max Price:</label>
              <select id="women-price-filter" class="bg-white border border-[#E8E4DC] text-xs px-3 py-2 text-[#111] focus:outline-none focus:border-black font-medium">
                <option value="all">All Prices</option>
                <option value="5000">Under Rs. 5,000</option>
                <option value="10000">Under Rs. 10,000</option>
                <option value="15000">Under Rs. 15,000</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Product Grid -->
        <div id="women-product-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 pt-8">
          ${products.length > 0 ? products.map(prod => renderProductCard(prod)).join('') : `
            <div class="col-span-full py-16 text-center text-xs text-[#737373]">
              No pieces match your selected filter criteria.
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

function bindWomenPageEvents(queryParams = {}) {
  bindProductCardActions();

  const sortSelect = document.getElementById('women-sort-select');
  const priceSelect = document.getElementById('women-price-filter');
  const grid = document.getElementById('women-product-grid');

  function applyFilters() {
    let items = store.getProductsByGender('women');
    const activeCat = queryParams.category || 'all';
    if (activeCat !== 'all') {
      items = items.filter(p => p.categorySlug === activeCat);
    }

    const maxPrice = priceSelect ? priceSelect.value : 'all';
    if (maxPrice !== 'all') {
      const num = parseInt(maxPrice, 10);
      items = items.filter(p => p.salePrice <= num);
    }

    const sort = sortSelect ? sortSelect.value : 'featured';
    if (sort === 'price-low') {
      items.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sort === 'price-high') {
      items.sort((a, b) => b.salePrice - a.salePrice);
    } else if (sort === 'newest') {
      items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    if (grid) {
      grid.innerHTML = items.length > 0 
        ? items.map(p => renderProductCard(p)).join('')
        : `<div class="col-span-full py-16 text-center text-xs text-[#737373]">No pieces match your selected filter criteria.</div>`;
      
      if (window.lucide) {
        window.lucide.createIcons({ root: grid });
      }
      bindProductCardActions(grid);
    }
  }

  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);
}

/* ==================== FILE: js/pages/newArrivals.js ==================== */
// ZK STORE — New Arrivals Collection Page


function renderNewArrivalsPage() {
  const newArrivals = store.getNewArrivals(50); // Get all new arrival pieces

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Editorial Header -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-12 border-b border-[#E8E4DC] pb-8">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373] block mb-2">
          SEASONAL RELEASE &bull; ATELIER ARCHIVE
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em] mb-3">
          New Arrivals
        </h1>
        <p class="text-xs sm:text-sm text-[#555] max-w-xl leading-relaxed">
          The latest drop from the ZK STORE Atelier. High-GSM combed cottons, sculpted evening silks, and tailoring built for enduring modernity.
        </p>
      </section>

      <!-- Products Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${newArrivals.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

    </div>
  `;
}

function bindNewArrivalsPageEvents() {
  bindProductCardActions();
}

/* ==================== FILE: js/pages/bestSellers.js ==================== */
// ZK STORE — Best Sellers Collection Page


function renderBestSellersPage() {
  const bestSellers = store.getBestSellers(50);

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Editorial Header -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-12 border-b border-[#E8E4DC] pb-8">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373] block mb-2">
          CLIENT FAVORITES &bull; ICONIC RELEASES
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em] mb-3">
          Best Sellers
        </h1>
        <p class="text-xs sm:text-sm text-[#555] max-w-xl leading-relaxed">
          The pieces our patrons return to time and again. Enduring silhouettes engineered to form the definitive luxury capsule wardrobe.
        </p>
      </section>

      <!-- Products Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${bestSellers.map(prod => renderProductCard(prod)).join('')}
        </div>
      </section>

    </div>
  `;
}

function bindBestSellersPageEvents() {
  bindProductCardActions();
}

/* ==================== FILE: js/pages/categories.js ==================== */
// ZK STORE — All Clothing Categories Page

function renderCategoriesPage() {
  return `
    <div class="space-y-16 sm:space-y-24 pb-24">
      
      <!-- Editorial Header -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-12 border-b border-[#E8E4DC] pb-8">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373] block mb-2">
          ATELIER ARCHIVES &bull; ALL READY-TO-WEAR
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em] mb-3">
          Clothing Categories
        </h1>
        <p class="text-xs sm:text-sm text-[#555] max-w-xl leading-relaxed">
          Explore the complete structural catalog of ZK STORE. Curated by textile discipline, cut, and seasonal expression.
        </p>
      </section>

      <!-- Men's Categories Section -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E4DC]">
          <div>
            <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#737373] block">ATELIER HOMME</span>
            <h2 class="font-serif text-2xl sm:text-3xl text-[#111] font-medium">Men's Wardrobe Categories</h2>
          </div>
          <a href="#/men" class="text-xs font-semibold tracking-wider uppercase text-black hover:underline">
            View All Men's Clothing (25) &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${MEN_CATEGORIES.map(cat => `
            <a href="#/men?category=${cat.slug}" class="category-card group block aspect-[4/5] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-2xl font-medium tracking-wide leading-tight mb-1">${cat.name}</h3>
                <p class="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-3">${cat.description}</p>
                <span class="text-[11px] font-semibold tracking-widest uppercase underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Shop ${cat.name} &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Women's Categories Section -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E4DC]">
          <div>
            <span class="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#737373] block">ATELIER FEMME</span>
            <h2 class="font-serif text-2xl sm:text-3xl text-[#111] font-medium">Women's Wardrobe Categories</h2>
          </div>
          <a href="#/women" class="text-xs font-semibold tracking-wider uppercase text-black hover:underline">
            View All Women's Clothing (25) &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${WOMEN_CATEGORIES.map(cat => `
            <a href="#/women?category=${cat.slug}" class="category-card group block aspect-[4/5] relative bg-[#F7F5F0]">
              <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="w-full h-full object-cover">
              <div class="category-card-overlay absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span class="text-[10px] tracking-[0.25em] uppercase text-[#D8C8B5] font-semibold mb-1">${cat.itemCount}</span>
                <h3 class="font-serif text-2xl font-medium tracking-wide leading-tight mb-1">${cat.name}</h3>
                <p class="text-xs text-white/80 line-clamp-2 font-light leading-relaxed mb-3">${cat.description}</p>
                <span class="text-[11px] font-semibold tracking-widest uppercase underline underline-offset-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Shop ${cat.name} &rarr;
                </span>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

    </div>
  `;
}

function bindCategoriesPageEvents() {}

/* ==================== FILE: js/pages/productDetail.js ==================== */
// ZK STORE — Exceptional Luxury Product Detail Page



function renderProductDetailPage(productId) {
  const product = store.getProductById(productId);

  if (!product) {
    return `
      <div class="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 class="font-serif text-3xl text-[#111111] mb-4">Piece Not Found</h2>
        <p class="text-xs text-[#737373] mb-6">The requested garment may be archived or unavailable.</p>
        <a href="#/" class="btn-primary">Return to House Home</a>
      </div>
    `;
  }

  // Record into recently viewed
  Storage.addRecentlyViewed(product.id);

  const isInWishlist = store.isInWishlist(product.id);
  const formattedSale = `Rs. ${product.salePrice.toLocaleString('en-PK')}`;
  const formattedOriginal = `Rs. ${product.originalPrice.toLocaleString('en-PK')}`;
  const savings = `Rs. ${(product.originalPrice - product.salePrice).toLocaleString('en-PK')}`;

  // Related products (same gender, excluding self)
  const relatedProducts = store.getProductsByGender(product.gender)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Recently viewed products
  const recentIds = Storage.getRecentlyViewed().filter(id => id !== product.id);
  const recentProducts = recentIds.map(id => store.getProductById(id)).filter(Boolean).slice(0, 4);

  return `
    <div class="space-y-16 sm:space-y-24 pb-24">
      
      <!-- Breadcrumb Navigation -->
      <div class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-6">
        <nav class="flex items-center gap-2 text-xs text-[#737373]">
          <a href="#/" class="hover:text-black">Home</a>
          <span>/</span>
          <a href="#/${product.gender}" class="hover:text-black capitalize">${product.gender}</a>
          <span>/</span>
          <a href="#/${product.gender}?category=${product.categorySlug}" class="hover:text-black">${product.category}</a>
          <span>/</span>
          <span class="text-black font-medium truncate max-w-xs">${product.name}</span>
        </nav>
      </div>

      <!-- Main Product Showcase Grid -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- LEFT SIDE: Gallery & Zoom Showcase (7 Cols) -->
          <div class="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            <!-- Thumbnails Column -->
            <div class="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar flex-shrink-0 md:w-24">
              ${product.images.map((img, i) => `
                <button 
                  class="product-thumb-btn w-20 h-24 md:w-24 md:h-32 border ${i === 0 ? 'border-black' : 'border-transparent'} hover:border-black flex-shrink-0 bg-[#F7F5F0] overflow-hidden transition-colors"
                  data-img="${img}"
                >
                  <img src="${img}" alt="${product.name} thumbnail ${i + 1}" class="w-full h-full object-cover">
                </button>
              `).join('')}
            </div>

            <!-- Large Hero Main Image with Zoom -->
            <div class="flex-1 bg-[#F7F5F0] relative overflow-hidden aspect-[3/4] zoom-container group cursor-crosshair">
              <img 
                id="main-product-image" 
                src="${product.images[0]}" 
                alt="${product.name}" 
                class="w-full h-full object-cover select-none transition-transform duration-300"
              />

              <!-- Discount Tag -->
              <div class="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
                <span class="bg-[#111111] text-[#FFFFFF] text-[10px] font-semibold tracking-wider uppercase px-3 py-1">
                  Atelier ID: ${product.id}
                </span>
                ${product.discountPercent ? `
                  <span class="badge-discount">${product.discountPercent}% OFF</span>
                ` : ''}
              </div>

              <!-- Zoom Hint Overlay -->
              <div class="absolute bottom-4 right-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase text-black flex items-center gap-1.5 pointer-events-none">
                <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i> Hover to Zoom
              </div>
            </div>

          </div>

          <!-- RIGHT SIDE: Information, Selectors & Checkout Actions (5 Cols) -->
          <div class="lg:col-span-5 flex flex-col justify-start space-y-6">
            
            <!-- Header & Ratings -->
            <div>
              <div class="flex items-center justify-between gap-4 mb-2">
                <span class="text-xs font-semibold tracking-[0.2em] uppercase text-[#737373]">
                  ${product.gender} &bull; ${product.category}
                </span>
                <!-- Wishlist Button -->
                <button 
                  id="detail-wishlist-btn" 
                  class="wishlist-btn ${isInWishlist ? 'active' : ''} !relative !top-0 !right-0" 
                  title="Save to Wishlist"
                  data-id="${product.id}"
                >
                  <i data-lucide="heart" class="w-4 h-4 ${isInWishlist ? 'fill-current text-rose-500' : ''}"></i>
                </button>
              </div>

              <h1 class="font-serif text-3xl sm:text-4xl text-[#111111] font-medium leading-tight mb-3">
                ${product.name}
              </h1>

              <!-- Star Rating -->
              <div class="flex items-center gap-2 mb-4">
                <div class="flex text-amber-500 text-xs">
                  ${[...Array(5)].map((_, i) => `
                    <i data-lucide="star" class="w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}"></i>
                  `).join('')}
                </div>
                <span class="text-xs font-semibold text-[#111]">${product.rating}</span>
                <span class="text-xs text-[#737373]">(${product.reviewCount} Patron Reviews)</span>
              </div>

              <!-- Pricing Display -->
              <div class="flex items-baseline gap-3 pb-6 border-b border-[#E8E4DC]">
                <span class="text-2xl sm:text-3xl font-semibold text-[#111111]">${formattedSale}</span>
                <span class="price-original text-base">${formattedOriginal}</span>
                <span class="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
                  Save ${savings} (${product.discountPercent}% OFF)
                </span>
              </div>
            </div>

            <!-- Color Swatches Selector -->
            <div>
              <div class="flex items-center justify-between text-xs font-medium mb-3">
                <span class="text-[#111]">Color: <strong id="detail-color-name">${product.colors[0]?.name}</strong></span>
                <span class="text-[#737373] text-[11px]">${product.colors.length} Atelier Tones</span>
              </div>
              <div class="flex items-center gap-3">
                ${product.colors.map((c, i) => `
                  <button 
                    class="detail-color-swatch w-8 h-8 rounded-full border border-black/20 flex items-center justify-center transition-all ${i === 0 ? 'ring-2 ring-black ring-offset-2' : ''}" 
                    style="background-color: ${c.hex};"
                    data-color="${c.name}"
                    title="${c.name}"
                  ></button>
                `).join('')}
              </div>
            </div>

            <!-- Size Selector -->
            <div>
              <div class="flex items-center justify-between text-xs font-medium mb-3">
                <span class="text-[#111]">Select Size</span>
                <button id="detail-open-sizeguide" class="text-xs text-[#737373] hover:text-black underline underline-offset-4 flex items-center gap-1">
                  <i data-lucide="ruler" class="w-3.5 h-3.5"></i> Atelier Size Guide
                </button>
              </div>
              <div class="flex flex-wrap gap-2.5">
                ${product.sizes.map((s, i) => `
                  <button 
                    class="detail-size-btn min-w-[50px] h-12 px-4 border border-[#E8E4DC] text-xs font-semibold tracking-wider uppercase transition-all ${i === 0 ? 'bg-[#111111] text-white border-black shadow-sm' : 'hover:border-black text-[#111]'}"
                    data-size="${s}"
                  >
                    ${s}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Quantity & Stock Status -->
            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center gap-3">
                <span class="text-xs font-medium text-[#111]">Quantity:</span>
                <div class="flex items-center border border-[#E8E4DC] bg-white">
                  <button id="detail-qty-minus" class="w-9 h-9 flex items-center justify-center text-sm hover:bg-gray-100 text-[#111]">-</button>
                  <span id="detail-qty-val" class="w-10 text-center text-xs font-bold">1</span>
                  <button id="detail-qty-plus" class="w-9 h-9 flex items-center justify-center text-sm hover:bg-gray-100 text-[#111]">+</button>
                </div>
              </div>
              <div class="text-xs font-medium text-emerald-800 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                ${product.stockStatus} &bull; Ready for Dispatch
              </div>
            </div>

            <!-- Action Buttons: Add to Bag & Buy Now -->
            <div class="space-y-3 pt-4">
              <button id="detail-add-to-cart-btn" class="btn-primary w-full py-4 text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Shopping Bag
              </button>
              <button id="detail-buy-now-btn" class="btn-outline w-full py-3.5 text-xs font-bold tracking-[0.2em] uppercase">
                Instant Express Checkout
              </button>
            </div>

            <!-- Reassurance Icons -->
            <div class="grid grid-cols-3 gap-2 py-4 border-y border-[#E8E4DC] text-center text-[10px] text-[#737373] uppercase tracking-wider font-medium">
              <div class="p-2 flex flex-col items-center gap-1">
                <i data-lucide="truck" class="w-4 h-4 text-black"></i>
                <span>TCS Express Free &gt; 5k</span>
              </div>
              <div class="p-2 flex flex-col items-center gap-1">
                <i data-lucide="refresh-cw" class="w-4 h-4 text-black"></i>
                <span>14-Day Exchanges</span>
              </div>
              <div class="p-2 flex flex-col items-center gap-1">
                <i data-lucide="shield-check" class="w-4 h-4 text-black"></i>
                <span>100% Authentic Fabric</span>
              </div>
            </div>

            <!-- Luxury Accordions -->
            <div class="divide-y divide-[#E8E4DC] text-xs">
              
              <!-- Accordion 1: Description -->
              <details open class="group py-3.5">
                <summary class="flex justify-between items-center cursor-pointer font-semibold uppercase tracking-wider text-[#111]">
                  <span>Product Story & Design</span>
                  <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pt-3 text-[#555] leading-relaxed">
                  ${product.description}
                </div>
              </details>

              <!-- Accordion 2: Material & Care -->
              <details class="group py-3.5">
                <summary class="flex justify-between items-center cursor-pointer font-semibold uppercase tracking-wider text-[#111]">
                  <span>Material Composition & Care</span>
                  <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pt-3 text-[#555] space-y-2">
                  <p><strong>Composition:</strong> ${product.material}</p>
                  <p><strong>Care Instructions:</strong> ${product.care}</p>
                </div>
              </details>

              <!-- Accordion 3: Shipping & Returns -->
              <details class="group py-3.5">
                <summary class="flex justify-between items-center cursor-pointer font-semibold uppercase tracking-wider text-[#111]">
                  <span>Shipping & Hassle-Free Returns</span>
                  <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pt-3 text-[#555] space-y-2 leading-relaxed">
                  <p>Complimentary TCS Express shipping across Pakistan on orders exceeding Rs. 5,000. Standard shipping fee of Rs. 350 for smaller parcels.</p>
                  <p>Karachi deliveries typically arrive within 24 to 48 hours. Lahore, Islamabad, and nationwide addresses receive parcels within 2 to 4 business days.</p>
                  <p>If sizing does not meet expectations, exchange requests can be initiated within 14 days of delivery.</p>
                </div>
              </details>

            </div>

          </div>

        </div>
      </section>

      <!-- Customer Reviews Section -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-10 border-t border-[#E8E4DC]">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#E8E4DC] gap-4">
            <div>
              <span class="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">PATRON FEEDBACK</span>
              <h2 class="font-serif text-3xl font-medium text-[#111]">Customer Reviews</h2>
              <div class="flex items-center gap-2 mt-2">
                <div class="flex text-amber-500">
                  ${[...Array(5)].map(() => `<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>`).join('')}
                </div>
                <span class="text-sm font-bold">${product.rating} out of 5</span>
                <span class="text-xs text-[#737373]">Based on ${product.reviewCount} verified patrons</span>
              </div>
            </div>

            <!-- Write Review Button -->
            <button id="toggle-review-form-btn" class="btn-outline text-xs px-6 py-2.5">
              Write a Review
            </button>
          </div>

          <!-- Review Form (Hidden by default) -->
          <div id="product-review-form-container" class="py-6 border-b border-[#E8E4DC] hidden bg-[#F7F5F0] p-6 mt-4">
            <h3 class="font-serif text-xl font-medium text-[#111] mb-3">Submit Your Review</h3>
            <form id="submit-review-form" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Your Name</label>
                  <input type="text" id="review-name" required placeholder="e.g. Daniyal Khan" class="w-full bg-white border border-[#E8E4DC] px-3 py-2 text-xs focus:outline-none focus:border-black">
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Rating</label>
                  <select id="review-rating" class="w-full bg-white border border-[#E8E4DC] px-3 py-2 text-xs focus:outline-none focus:border-black">
                    <option value="5">5 Stars — Flawless Atelier Quality</option>
                    <option value="4">4 Stars — Excellent Fit</option>
                    <option value="3">3 Stars — Satisfactory</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Your Review</label>
                <textarea id="review-comment" required rows="3" placeholder="Share details regarding fabric weight, hand feel, and sizing..." class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black"></textarea>
              </div>
              <button type="submit" class="btn-primary text-xs py-2.5 px-6">Submit Review</button>
            </form>
          </div>

          <!-- Patron Reviews List -->
          <div id="reviews-list" class="divide-y divide-[#E8E4DC] py-6">
            ${product.reviews.map(rev => `
              <div class="py-6 first:pt-4">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-[#111]">${rev.author}</span>
                    <span class="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">Verified Patron</span>
                  </div>
                  <span class="text-xs text-[#737373]">${rev.date}</span>
                </div>
                <div class="flex text-amber-500 mb-2">
                  ${[...Array(rev.rating)].map(() => `<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>`).join('')}
                </div>
                <p class="text-xs text-[#444] leading-relaxed">${rev.comment}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- You May Also Like -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-8">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC]">
          <h2 class="font-serif text-2xl sm:text-3xl text-[#111111] font-medium tracking-wide">
            You May Also Like
          </h2>
          <a href="#/${product.gender}" class="text-xs font-semibold tracking-wider uppercase text-[#111] hover:underline">
            View Collection &rarr;
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          ${relatedProducts.map(p => renderProductCard(p)).join('')}
        </div>
      </section>

      <!-- Recently Viewed -->
      ${recentProducts.length > 0 ? `
        <section class="max-w-[1600px] mx-auto px-6 sm:px-12 pt-8">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC]">
            <h2 class="font-serif text-2xl sm:text-3xl text-[#111111] font-medium tracking-wide">
              Recently Viewed
            </h2>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            ${recentProducts.map(p => renderProductCard(p)).join('')}
          </div>
        </section>
      ` : ''}

    </div>
  `;
}

function bindProductDetailPageEvents(productId) {
  bindProductCardActions();

  const product = store.getProductById(productId);
  if (!product) return;

  let selectedColor = product.colors[0]?.name || 'Standard';
  let selectedSize = product.sizes[0] || 'M';
  let quantity = 1;

  // Image zoom effect
  const zoomContainer = document.querySelector('.zoom-container');
  const mainImage = document.getElementById('main-product-image');

  if (zoomContainer && mainImage) {
    zoomContainer.addEventListener('mousemove', (e) => {
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImage.style.transformOrigin = `${x}% ${y}%`;
      mainImage.style.transform = 'scale(1.85)';
    });

    zoomContainer.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center center';
      mainImage.style.transform = 'scale(1)';
    });
  }

  // Thumbnail clicks
  const thumbs = document.querySelectorAll('.product-thumb-btn');
  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbs.forEach(b => b.classList.replace('border-black', 'border-transparent'));
      btn.classList.replace('border-transparent', 'border-black');
      const newSrc = btn.getAttribute('data-img');
      if (mainImage) mainImage.src = newSrc;
    });
  });

  // Color Swatch Selection
  const swatches = document.querySelectorAll('.detail-color-swatch');
  const colorNameLabel = document.getElementById('detail-color-name');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('ring-2', 'ring-black', 'ring-offset-2'));
      swatch.classList.add('ring-2', 'ring-black', 'ring-offset-2');
      selectedColor = swatch.getAttribute('data-color');
      if (colorNameLabel) colorNameLabel.textContent = selectedColor;
    });
  });

  // Size Selector
  const sizeBtns = document.querySelectorAll('.detail-size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => {
        b.classList.remove('bg-[#111111]', 'text-white', 'border-black', 'shadow-sm');
        b.classList.add('hover:border-black', 'text-[#111]');
      });
      btn.classList.add('bg-[#111111]', 'text-white', 'border-black', 'shadow-sm');
      btn.classList.remove('hover:border-black', 'text-[#111]');
      selectedSize = btn.getAttribute('data-size');
    });
  });

  // Size guide trigger
  const sizeGuideBtn = document.getElementById('detail-open-sizeguide');
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', (e) => {
      e.preventDefault();
      store.openSizeGuide();
    });
  }

  // Wishlist toggle
  const wishlistBtn = document.getElementById('detail-wishlist-btn');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const added = store.toggleWishlist(product);
      wishlistBtn.classList.toggle('active', added);
      const icon = wishlistBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fill-current', added);
        icon.classList.toggle('text-rose-500', added);
      }
    });
  }

  // Quantity stepper
  const minusBtn = document.getElementById('detail-qty-minus');
  const plusBtn = document.getElementById('detail-qty-plus');
  const qtyVal = document.getElementById('detail-qty-val');

  if (minusBtn && qtyVal) {
    minusBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyVal.textContent = quantity;
      }
    });
  }

  if (plusBtn && qtyVal) {
    plusBtn.addEventListener('click', () => {
      if (quantity < 10) {
        quantity++;
        qtyVal.textContent = quantity;
      }
    });
  }

  // Add to Cart
  const addToCartBtn = document.getElementById('detail-add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      store.addToCart(product, selectedColor, selectedSize, quantity);
      store.toggleCart(true);
    });
  }

  // Buy Now
  const buyNowBtn = document.getElementById('detail-buy-now-btn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      store.addToCart(product, selectedColor, selectedSize, quantity);
      window.location.hash = '#/checkout';
    });
  }

  // Review Form toggle & submission
  const toggleReviewBtn = document.getElementById('toggle-review-form-btn');
  const reviewFormContainer = document.getElementById('product-review-form-container');
  const reviewForm = document.getElementById('submit-review-form');

  if (toggleReviewBtn && reviewFormContainer) {
    toggleReviewBtn.addEventListener('click', () => {
      reviewFormContainer.classList.toggle('hidden');
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('review-name').value;
      const rating = parseInt(document.getElementById('review-rating').value, 10);
      const comment = document.getElementById('review-comment').value;

      product.reviews.unshift({
        author: author,
        rating: rating,
        date: 'Today',
        comment: comment
      });

      store.showToast('Thank you! Your verified patron review has been recorded.', 'success');
      reviewForm.reset();
      reviewFormContainer.classList.add('hidden');

      const reviewsList = document.getElementById('reviews-list');
      if (reviewsList) {
        reviewsList.innerHTML = product.reviews.map(rev => `
          <div class="py-6 first:pt-4">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-[#111]">${rev.author}</span>
                <span class="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">Verified Patron</span>
              </div>
              <span class="text-xs text-[#737373]">${rev.date}</span>
            </div>
            <div class="flex text-amber-500 mb-2">
              ${[...Array(rev.rating)].map(() => `<i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>`).join('')}
            </div>
            <p class="text-xs text-[#444] leading-relaxed">${rev.comment}</p>
          </div>
        `).join('');
        if (window.lucide) window.lucide.createIcons({ root: reviewsList });
      }
    });
  }
}

/* ==================== FILE: js/pages/searchPage.js ==================== */
// ZK STORE — Dedicated Search Results Page


function renderSearchPage(queryParams = {}) {
  const query = queryParams.q || '';
  const results = store.searchProducts(query);

  return `
    <div class="space-y-12 pb-24">
      
      <!-- Search Header & Search Input -->
      <section class="max-w-[1200px] mx-auto px-6 sm:px-12 pt-12 text-center space-y-6">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#737373]">
          ATELIER SEARCH & DISCOVERY
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-normal text-[#111111] uppercase tracking-[0.08em]">
          Search Results
        </h1>

        <!-- Search Bar -->
        <form id="search-page-form" class="max-w-2xl mx-auto flex items-center border border-[#111111] bg-white p-1">
          <div class="pl-4 pr-2 text-[#737373]">
            <i data-lucide="search" class="w-5 h-5"></i>
          </div>
          <input 
            type="text" 
            id="search-page-input" 
            value="${query}" 
            placeholder="Search by piece name, category, or color..." 
            class="flex-1 py-3 text-xs sm:text-sm font-sans focus:outline-none tracking-wide"
          />
          <button type="submit" class="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black/80">
            Search
          </button>
        </form>

        <p class="text-xs text-[#737373]">
          ${query ? `Found <strong>${results.length}</strong> matching pieces for "<em>${query}</em>"` : 'Showing complete collection'}
        </p>
      </section>

      <!-- Results Grid or Empty State -->
      <section class="max-w-[1600px] mx-auto px-6 sm:px-12">
        ${results.length === 0 ? `
          <div class="max-w-md mx-auto text-center py-20 bg-[#F7F5F0] p-10 border border-[#E8E4DC]">
            <i data-lucide="search-x" class="w-12 h-12 text-[#737373] mx-auto mb-3"></i>
            <h3 class="font-serif text-2xl text-[#111] mb-2 font-medium">No Matches Found</h3>
            <p class="text-xs text-[#737373] mb-6 leading-relaxed">
              We couldn't locate any items matching your exact search. Explore our curated Men's or Women's departments below.
            </p>
            <div class="flex justify-center gap-3">
              <a href="#/men" class="btn-primary text-xs py-2.5 px-5">Shop Men</a>
              <a href="#/women" class="btn-outline text-xs py-2.5 px-5">Shop Women</a>
            </div>
          </div>
        ` : `
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            ${results.map(prod => renderProductCard(prod)).join('')}
          </div>
        `}
      </section>

    </div>
  `;
}

function bindSearchPageEvents() {
  bindProductCardActions();

  const form = document.getElementById('search-page-form');
  const input = document.getElementById('search-page-input');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      window.location.hash = `#/search?q=${encodeURIComponent(q)}`;
    });
  }
}

/* ==================== FILE: js/pages/cartPage.js ==================== */
// ZK STORE — Dedicated Full Shopping Bag Page

function renderCartPage() {
  const items = store.getCartItems();
  const subtotal = store.getCartSubtotal();
  const originalTotal = store.getCartOriginalTotal();
  const savings = store.getCartSavings();
  const shipping = store.getShippingFee();
  const couponDiscount = store.getCouponDiscount();
  const total = store.getCartTotal();
  const freeThreshold = 5000;
  const remainingForFree = Math.max(0, freeThreshold - subtotal);
  const percentFilled = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-10 pb-24">
      
      <!-- Page Header -->
      <div class="border-b border-[#E8E4DC] pb-6">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
          ATELIER CHECKOUT PREPARATION
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111111] uppercase tracking-[0.08em]">
          Your Shopping Bag
        </h1>
      </div>

      ${items.length === 0 ? `
        <div class="max-w-md mx-auto text-center py-20 bg-[#F7F5F0] p-12 border border-[#E8E4DC]">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#737373] mx-auto mb-4 shadow-sm">
            <i data-lucide="shopping-bag" class="w-8 h-8"></i>
          </div>
          <h3 class="font-serif text-2xl text-[#111] mb-2 font-medium">Your Bag is Currently Empty</h3>
          <p class="text-xs text-[#737373] mb-6 leading-relaxed">
            You have not placed any garments into your shopping bag yet. Explore our latest arrivals to discover tailored luxury.
          </p>
          <div class="flex justify-center gap-4">
            <a href="#/men" class="btn-primary text-xs py-3 px-6">Explore Men</a>
            <a href="#/women" class="btn-outline text-xs py-3 px-6">Explore Women</a>
          </div>
        </div>
      ` : `
        <!-- Free Shipping Tracker -->
        <div class="bg-[#F7F5F0] p-5 border border-[#E8E4DC]">
          <div class="flex justify-between items-center text-xs text-[#111] font-medium mb-2">
            <span>
              ${subtotal >= freeThreshold ? `
                <strong class="text-emerald-800 flex items-center gap-1.5 font-bold">
                  <i data-lucide="check-circle" class="w-4 h-4"></i> Complimentary Express Delivery Unlocked Across Pakistan
                </strong>
              ` : `
                Add <strong>Rs. ${remainingForFree.toLocaleString('en-PK')}</strong> more to unlock Complimentary Delivery
              `}
            </span>
            <span class="text-[#737373]">${percentFilled}%</span>
          </div>
          <div class="shipping-bar-track">
            <div class="shipping-bar-fill" style="width: ${percentFilled}%;"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Items Table (8 Cols) -->
          <div class="lg:col-span-8">
            <div class="divide-y divide-[#E8E4DC]">
              
              <!-- Table Header -->
              <div class="hidden sm:grid grid-cols-12 pb-4 text-xs font-semibold tracking-wider uppercase text-[#737373]">
                <div class="col-span-6">Garment</div>
                <div class="col-span-2 text-center">Quantity</div>
                <div class="col-span-2 text-right">Price</div>
                <div class="col-span-2 text-right">Subtotal</div>
              </div>

              <!-- Product Rows -->
              ${items.map((item, index) => `
                <div class="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <!-- Product Image & Meta (6 Cols) -->
                  <div class="sm:col-span-6 flex gap-4">
                    <a href="#/product/${item.productId}" class="w-24 h-32 bg-[#F7F5F0] flex-shrink-0 overflow-hidden block">
                      <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    </a>
                    <div class="flex flex-col justify-between py-1">
                      <div>
                        <span class="text-[10px] tracking-widest uppercase font-semibold text-[#737373]">${item.gender} &bull; ${item.category}</span>
                        <h3 class="font-sans text-sm font-semibold text-[#111111] hover:underline">
                          <a href="#/product/${item.productId}">${item.name}</a>
                        </h3>
                        <div class="flex items-center gap-3 text-xs text-[#555] mt-1.5">
                          <span>Color: <strong>${item.color}</strong></span>
                          <span>Size: <strong>${item.size}</strong></span>
                        </div>
                      </div>
                      <button class="cart-page-remove-btn text-xs text-rose-700 hover:text-black flex items-center gap-1 w-max transition-colors pt-2" data-index="${index}">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove piece
                      </button>
                    </div>
                  </div>

                  <!-- Quantity Stepper (2 Cols) -->
                  <div class="sm:col-span-2 flex justify-start sm:justify-center">
                    <div class="flex items-center border border-[#E8E4DC] bg-white">
                      <button class="cart-page-qty-minus w-8 h-8 flex items-center justify-center text-xs hover:bg-gray-100" data-index="${index}">-</button>
                      <span class="w-8 text-center text-xs font-bold">${item.quantity}</span>
                      <button class="cart-page-qty-plus w-8 h-8 flex items-center justify-center text-xs hover:bg-gray-100" data-index="${index}">+</button>
                    </div>
                  </div>

                  <!-- Price Each (2 Cols) -->
                  <div class="sm:col-span-2 text-left sm:text-right text-xs">
                    <div class="font-semibold text-[#111]">Rs. ${item.price.toLocaleString('en-PK')}</div>
                    ${item.originalPrice > item.price ? `
                      <div class="price-original text-[11px]">Rs. ${item.originalPrice.toLocaleString('en-PK')}</div>
                    ` : ''}
                  </div>

                  <!-- Line Total (2 Cols) -->
                  <div class="sm:col-span-2 text-left sm:text-right text-sm font-bold text-[#111]">
                    Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}
                  </div>
                </div>
              `).join('')}

            </div>

            <!-- Back to shopping link -->
            <div class="pt-8 border-t border-[#E8E4DC] flex justify-between items-center">
              <a href="#/categories" class="text-xs font-semibold uppercase tracking-wider text-black hover:underline flex items-center gap-1.5">
                &larr; Continue Exploring Collections
              </a>
              <button id="cart-clear-all-btn" class="text-xs text-[#737373] hover:text-rose-700 transition-colors">
                Clear Shopping Bag
              </button>
            </div>
          </div>

          <!-- Order Summary Sidebar (4 Cols) -->
          <div class="lg:col-span-4">
            <div class="bg-[#F7F5F0] p-6 sm:p-8 border border-[#E8E4DC] space-y-6 sticky top-28">
              <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
                Order Summary
              </h3>

              <!-- Promo Code Input -->
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-2">Promotional Voucher</label>
                <div class="flex gap-2">
                  <input 
                    type="text" 
                    id="cart-page-coupon-input" 
                    placeholder="ENTER CODE (e.g. ZK10)" 
                    value="${store.coupon ? store.coupon.code : ''}"
                    ${store.coupon ? 'disabled' : ''}
                    class="flex-1 bg-white border border-[#E8E4DC] px-3 py-2.5 text-xs uppercase tracking-wider focus:outline-none focus:border-black"
                  />
                  ${store.coupon ? `
                    <button id="cart-page-remove-coupon-btn" class="bg-gray-200 text-[#111] text-[11px] font-semibold px-3 py-2.5 uppercase">
                      Remove
                    </button>
                  ` : `
                    <button id="cart-page-apply-coupon-btn" class="bg-black text-white text-[11px] font-semibold px-4 py-2.5 uppercase hover:bg-black/80">
                      Apply
                    </button>
                  `}
                </div>
                ${store.coupon ? `
                  <p class="text-[11px] text-emerald-800 font-medium mt-1">${store.coupon.label} applied.</p>
                ` : `
                  <p class="text-[10px] text-[#737373] mt-1">Try code <span class="font-bold text-black">ZKLUXURY10</span> for 10% off</p>
                `}
              </div>

              <!-- Cost breakdown -->
              <div class="space-y-3 text-xs border-t border-[#E8E4DC] pt-4">
                <div class="flex justify-between text-[#555]">
                  <span>Original Atelier Total</span>
                  <span class="price-original">Rs. ${originalTotal.toLocaleString('en-PK')}</span>
                </div>
                ${savings > 0 ? `
                  <div class="flex justify-between text-emerald-800 font-medium">
                    <span>Catalog Savings</span>
                    <span>- Rs. ${savings.toLocaleString('en-PK')}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between text-[#555]">
                  <span>Subtotal</span>
                  <span>Rs. ${subtotal.toLocaleString('en-PK')}</span>
                </div>
                ${couponDiscount > 0 ? `
                  <div class="flex justify-between text-emerald-800 font-medium">
                    <span>Voucher Discount</span>
                    <span>- Rs. ${couponDiscount.toLocaleString('en-PK')}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between text-[#555]">
                  <span>Express Delivery (Pakistan)</span>
                  <span>${shipping === 0 ? '<strong class="text-emerald-800">Complimentary</strong>' : `Rs. ${shipping}`}</span>
                </div>
                <div class="flex justify-between text-base font-bold text-[#111] pt-3 border-t border-[#E8E4DC]">
                  <span>Estimated Total</span>
                  <span>Rs. ${total.toLocaleString('en-PK')}</span>
                </div>
                <p class="text-[10px] text-[#737373] pt-1">Inclusive of all local sales taxes & duty.</p>
              </div>

              <!-- Checkout Button -->
              <div class="pt-2">
                <a href="#/checkout" class="btn-primary w-full py-4 text-xs text-center font-bold tracking-[0.2em] uppercase shadow-lg">
                  Proceed to Checkout &rarr;
                </a>
              </div>

              <!-- Security seals -->
              <div class="pt-4 flex items-center justify-center gap-4 text-xs text-[#737373]">
                <span class="flex items-center gap-1"><i data-lucide="lock" class="w-3.5 h-3.5 text-black"></i> 256-Bit SSL</span>
                <span class="flex items-center gap-1"><i data-lucide="shield" class="w-3.5 h-3.5 text-black"></i> Atelier Guaranteed</span>
              </div>
            </div>
          </div>

        </div>
      `}

    </div>
  `;
}

function bindCartPageEvents() {
  const minusBtns = document.querySelectorAll('.cart-page-qty-minus');
  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current - 1);
    });
  });

  const plusBtns = document.querySelectorAll('.cart-page-qty-plus');
  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const current = store.cart[idx]?.quantity || 1;
      store.updateQuantity(idx, current + 1);
    });
  });

  const removeBtns = document.querySelectorAll('.cart-page-remove-btn');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      store.removeFromCart(idx);
    });
  });

  const clearBtn = document.getElementById('cart-clear-all-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you wish to empty your shopping bag?')) {
        store.clearCart();
      }
    });
  }

  const applyBtn = document.getElementById('cart-page-apply-coupon-btn');
  const removeCouponBtn = document.getElementById('cart-page-remove-coupon-btn');
  const couponInput = document.getElementById('cart-page-coupon-input');

  if (applyBtn && couponInput) {
    applyBtn.addEventListener('click', () => {
      store.applyCoupon(couponInput.value);
    });
  }

  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      store.removeCoupon();
    });
  }
}

/* ==================== FILE: js/pages/wishlistPage.js ==================== */
// ZK STORE — Dedicated Wishlist Page


function renderWishlistPage() {
  const wishlistItems = store.getWishlist();
  const products = wishlistItems.map(item => {
    return typeof item === 'string' ? store.getProductById(item) : store.getProductById(item.id) || item;
  }).filter(Boolean);

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-10 pb-24">
      
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8E4DC] pb-6 gap-4">
        <div>
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
            CURATED SELECTION
          </span>
          <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111111] uppercase tracking-[0.08em]">
            Your Saved Wishlist
          </h1>
        </div>
        ${products.length > 0 ? `
          <div class="flex items-center gap-4">
            <span class="text-xs text-[#737373]">${products.length} saved pieces</span>
            <button id="wishlist-move-all-btn" class="btn-primary text-xs py-2.5 px-5">
              Move All to Bag
            </button>
          </div>
        ` : ''}
      </div>

      ${products.length === 0 ? `
        <div class="max-w-md mx-auto text-center py-20 bg-[#F7F5F0] p-12 border border-[#E8E4DC]">
          <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#737373] mx-auto mb-4 shadow-sm">
            <i data-lucide="heart" class="w-8 h-8"></i>
          </div>
          <h3 class="font-serif text-2xl text-[#111] mb-2 font-medium">Your Wishlist is Empty</h3>
          <p class="text-xs text-[#737373] mb-6 leading-relaxed">
            Click the heart icon on any piece across our collection to save your personal favorites for later.
          </p>
          <div class="flex justify-center gap-4">
            <a href="#/new-arrivals" class="btn-primary text-xs py-3 px-6">Explore New Arrivals</a>
            <a href="#/best-sellers" class="btn-outline text-xs py-3 px-6">View Best Sellers</a>
          </div>
        </div>
      ` : `
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          ${products.map(prod => renderProductCard(prod)).join('')}
        </div>
      `}

    </div>
  `;
}

function bindWishlistPageEvents() {
  bindProductCardActions();

  const moveAllBtn = document.getElementById('wishlist-move-all-btn');
  if (moveAllBtn) {
    moveAllBtn.addEventListener('click', () => {
      const items = store.getWishlist();
      items.forEach(item => {
        const prod = typeof item === 'string' ? store.getProductById(item) : store.getProductById(item.id) || item;
        if (prod) {
          store.addToCart(prod, prod.colors[0]?.name || 'Standard', prod.sizes[0] || 'M', 1);
        }
      });
      store.wishlist = [];
      store.notify('wishlist:updated', []);
      store.showToast('All saved pieces moved to your shopping bag', 'cart');
      store.toggleCart(true);
    });
  }
}

/* ==================== FILE: js/pages/checkoutPage.js ==================== */
// ZK STORE — Luxury 2-Step Atelier Checkout Page

function renderCheckoutPage() {
  const items = store.getCartItems();
  const subtotal = store.getCartSubtotal();
  const shipping = store.getShippingFee();
  const couponDiscount = store.getCouponDiscount();
  const total = store.getCartTotal();
  const user = store.user;

  if (items.length === 0) {
    return `
      <div class="max-w-[800px] mx-auto px-6 py-24 text-center">
        <div class="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center text-[#737373] mx-auto mb-4">
          <i data-lucide="shopping-bag" class="w-8 h-8"></i>
        </div>
        <h2 class="font-serif text-3xl text-[#111111] mb-2 font-medium">Your Shopping Bag is Empty</h2>
        <p class="text-xs text-[#737373] mb-6">Please add at least one garment to your shopping bag before proceeding to checkout.</p>
        <a href="#/categories" class="btn-primary text-xs py-3 px-8">Discover Collections</a>
      </div>
    `;
  }

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-10 pb-24">
      
      <!-- Checkout Header -->
      <div class="border-b border-[#E8E4DC] pb-6 flex items-center justify-between">
        <div>
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
            SECURE ATELIER ENCRYPTION
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl font-medium text-[#111111] uppercase tracking-[0.08em]">
            Checkout & Order Dispatch
          </h1>
        </div>
        <div class="flex items-center gap-2 text-xs text-[#737373]">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-700"></i>
          <span>256-Bit SSL Safe</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left: Shipping & Payment Form (7 Cols) -->
        <div class="lg:col-span-7">
          <form id="checkout-main-form" class="space-y-10">
            
            <!-- Step 1: Client Information -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="stepper-circle active">1</span>
                <h3 class="font-serif text-xl font-medium text-[#111]">Client Contact & Identification</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Full Name <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="checkout-name" 
                    required 
                    value="${user?.name || ''}"
                    placeholder="e.g. Daniyal Ahmed" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Phone (for Delivery Courier) <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="checkout-phone" 
                    required 
                    value="${user?.phone || ''}"
                    placeholder="0300 1234567" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Email Address (for Order Tracking Updates) <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="checkout-email" 
                    required 
                    value="${user?.email || ''}"
                    placeholder="daniyal.ahmed@example.com" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>
              </div>
            </div>

            <!-- Step 2: Shipping Destination -->
            <div class="space-y-4 pt-4 border-t border-[#E8E4DC]">
              <div class="flex items-center gap-3">
                <span class="stepper-circle active">2</span>
                <h3 class="font-serif text-xl font-medium text-[#111]">Shipping Destination (Pakistan & International)</h3>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Complete Street Address & Apartment/House # <span class="text-rose-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="checkout-address" 
                    required 
                    value="${user?.address || ''}"
                    placeholder="House / Flat #, Street, Phase / Block, Sector" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    City <span class="text-rose-600">*</span>
                  </label>
                  <select id="checkout-city" required class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium">
                    <option value="Karachi" ${user?.city === 'Karachi' ? 'selected' : ''}>Karachi</option>
                    <option value="Lahore" ${user?.city === 'Lahore' ? 'selected' : ''}>Lahore</option>
                    <option value="Islamabad" ${user?.city === 'Islamabad' ? 'selected' : ''}>Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Postal Code
                  </label>
                  <input 
                    type="text" 
                    id="checkout-postal" 
                    value="${user?.postalCode || '75500'}"
                    placeholder="e.g. 75500" 
                    class="w-full bg-white border border-[#E8E4DC] px-4 py-3 text-xs focus:outline-none focus:border-black font-medium"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">
                    Country
                  </label>
                  <input 
                    type="text" 
                    id="checkout-country" 
                    value="Pakistan" 
                    readonly 
                    class="w-full bg-gray-50 border border-[#E8E4DC] px-4 py-3 text-xs text-[#555] font-medium cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <!-- Step 3: Payment Method -->
            <div class="space-y-4 pt-4 border-t border-[#E8E4DC]">
              <div class="flex items-center gap-3">
                <span class="stepper-circle active">3</span>
                <h3 class="font-serif text-xl font-medium text-[#111]">Payment Method</h3>
              </div>

              <div class="space-y-3 pt-2">
                
                <!-- Option 1: Cash on Delivery -->
                <label class="flex items-start gap-3 p-4 border border-black bg-[#F7F5F0] cursor-pointer transition-colors block">
                  <input type="radio" name="paymentMethod" value="Cash on Delivery" checked class="mt-1 text-black">
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-black uppercase tracking-wider">Cash on Delivery (COD)</span>
                      <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Recommended</span>
                    </div>
                    <p class="text-xs text-[#555] mt-1">
                      Pay with cash when TCS Express delivers your package to your doorstep. Complimentary on orders over Rs. 5,000.
                    </p>
                  </div>
                </label>

                <!-- Option 2: Bank Transfer -->
                <label class="flex items-start gap-3 p-4 border border-[#E8E4DC] hover:border-black bg-white cursor-pointer transition-colors block">
                  <input type="radio" name="paymentMethod" value="Bank Transfer" class="mt-1 text-black">
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-black uppercase tracking-wider">Direct Bank Transfer</span>
                      <span class="text-[10px] text-[#737373]">Meezan / SCB</span>
                    </div>
                    <p class="text-xs text-[#555] mt-1">
                      Transfer directly into ZK STORE Atelier corporate account. Official IBAN & receipt upload link provided on order placement.
                    </p>
                  </div>
                </label>

                <!-- Option 3: Card Payment (Gateway Note) -->
                <label class="flex items-start gap-3 p-4 border border-[#E8E4DC] hover:border-black bg-white cursor-pointer transition-colors block">
                  <input type="radio" name="paymentMethod" value="Card Payment" class="mt-1 text-black">
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-black uppercase tracking-wider">Credit / Debit Card</span>
                      <span class="text-[10px] text-[#737373]">Visa / Mastercard</span>
                    </div>
                    <p class="text-xs text-[#555] mt-1">
                      Safe 256-Bit SSL card simulation. Encrypted test sandbox without live gateway charges.
                    </p>
                  </div>
                </label>

              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-6">
              <button type="submit" id="place-order-submit-btn" class="btn-primary w-full py-4 text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
                Confirm & Place Order &rarr;
              </button>
              <p class="text-[10px] text-center text-[#737373] mt-2">
                By clicking Confirm, you agree to ZK STORE Terms of Atelier Sale and 14-day exchange privilege.
              </p>
            </div>

          </form>
        </div>

        <!-- Right: Order Items & Pricing Summary (5 Cols) -->
        <div class="lg:col-span-5">
          <div class="bg-[#F7F5F0] p-6 sm:p-8 border border-[#E8E4DC] space-y-6 sticky top-28">
            <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
              Your Garments (${store.getCartCount()})
            </h3>

            <!-- Item Mini List -->
            <div class="divide-y divide-[#E8E4DC] max-h-72 overflow-y-auto no-scrollbar">
              ${items.map(item => `
                <div class="py-3 flex gap-3 text-xs">
                  <div class="w-14 h-18 bg-white flex-shrink-0 overflow-hidden relative border border-[#E8E4DC]">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                    <span class="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      ${item.quantity}
                    </span>
                  </div>
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 class="font-semibold text-[#111] line-clamp-1">${item.name}</h4>
                      <p class="text-[11px] text-[#737373]">${item.color} &bull; Size ${item.size}</p>
                    </div>
                    <span class="font-semibold text-black">Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Cost Summary -->
            <div class="space-y-2 text-xs border-t border-[#E8E4DC] pt-4">
              <div class="flex justify-between text-[#555]">
                <span>Subtotal</span>
                <span>Rs. ${subtotal.toLocaleString('en-PK')}</span>
              </div>
              ${couponDiscount > 0 ? `
                <div class="flex justify-between text-emerald-800 font-medium">
                  <span>Privilege Voucher (${store.coupon?.code})</span>
                  <span>- Rs. ${couponDiscount.toLocaleString('en-PK')}</span>
                </div>
              ` : ''}
              <div class="flex justify-between text-[#555]">
                <span>Delivery (Pakistan)</span>
                <span>${shipping === 0 ? '<strong class="text-emerald-800">Complimentary</strong>' : `Rs. ${shipping}`}</span>
              </div>
              <div class="flex justify-between text-base font-bold text-[#111] pt-3 border-t border-[#E8E4DC]">
                <span>Grand Total</span>
                <span>Rs. ${total.toLocaleString('en-PK')}</span>
              </div>
            </div>

            <!-- Reassurance Box -->
            <div class="p-3 bg-white border border-[#E8E4DC] text-[11px] text-[#555] space-y-1">
              <div class="font-semibold text-[#111] flex items-center gap-1">
                <i data-lucide="package-check" class="w-3.5 h-3.5 text-black"></i> Atelier Quality Assured
              </div>
              <p>Every piece undergoes hand inspection and pressing before dispatch with TCS Express Prime.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

function bindCheckoutPageEvents() {
  const form = document.getElementById('checkout-main-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const email = document.getElementById('checkout-email').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const city = document.getElementById('checkout-city').value;
    const postalCode = document.getElementById('checkout-postal').value.trim();
    const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'Cash on Delivery';

    if (!fullName || !phone || !email || !address) {
      alert('Please fill in all required shipping fields.');
      return;
    }

    const order = store.createOrder({
      fullName,
      phone,
      email,
      address,
      city,
      postalCode,
      country: 'Pakistan',
      paymentMethod
    });

    // Fire Confetti if available
    if (window.confetti) {
      window.confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }

    store.showToast(`Order Confirmed! Your tracking number is ${order.id}`, 'success');
    window.location.hash = `#/order-tracking?orderId=${order.id}`;
  });
}

/* ==================== FILE: js/pages/accountPage.js ==================== */
// ZK STORE — My Account, Orders & Authentication Page

function renderAccountPage() {
  const user = store.user;
  const orders = store.orders;

  if (!user || !user.isLoggedIn) {
    return `
      <div class="max-w-md mx-auto px-6 py-20">
        <div class="text-center mb-8">
          <span class="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-2">
            ATELIER PATRON PORTAL
          </span>
          <h1 class="font-serif text-3xl font-medium text-[#111] uppercase tracking-[0.08em]">
            Sign In / Register
          </h1>
          <p class="text-xs text-[#737373] mt-2">Access your bespoke orders, saved measurements, and VIP privileges.</p>
        </div>

        <!-- Auth Tabs -->
        <div class="bg-white border border-[#E8E4DC] p-6 sm:p-8 shadow-sm">
          <div class="flex border-b border-[#E8E4DC] mb-6">
            <button id="auth-tab-login" class="flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 border-black text-black">
              Sign In
            </button>
            <button id="auth-tab-register" class="flex-1 pb-3 text-xs font-bold uppercase tracking-wider text-[#737373] hover:text-black">
              Create Account
            </button>
          </div>

          <!-- Login Form -->
          <form id="auth-login-form" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Email Address</label>
              <input type="email" id="login-email" required value="daniyal.ahmed@example.com" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Password</label>
              <input type="password" id="login-password" required value="password123" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <button type="submit" class="btn-primary w-full py-3 text-xs font-bold uppercase tracking-widest mt-2">
              Sign In to Atelier &rarr;
            </button>
            <p class="text-[11px] text-center text-[#737373] pt-2">Demo credentials pre-filled for instant testing.</p>
          </form>

          <!-- Register Form (Hidden) -->
          <form id="auth-register-form" class="space-y-4 hidden">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Full Name</label>
              <input type="text" id="reg-name" required placeholder="Daniyal Ahmed" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Email Address</label>
              <input type="email" id="reg-email" required placeholder="daniyal@example.com" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Create Password</label>
              <input type="password" id="reg-password" required placeholder="••••••••" class="w-full border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black">
            </div>
            <button type="submit" class="btn-primary w-full py-3 text-xs font-bold uppercase tracking-widest mt-2">
              Create Patron Account &rarr;
            </button>
          </form>
        </div>
      </div>
    `;
  }

  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Welcome Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E8E4DC] pb-6 gap-4">
        <div>
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
            VIP ATELIER PATRON
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl font-medium text-[#111111] uppercase tracking-[0.08em]">
            Welcome, ${user.name}
          </h1>
          <p class="text-xs text-[#737373] mt-1">${user.email} &bull; Patron Since 2026</p>
        </div>
        <button id="account-signout-btn" class="btn-outline text-xs py-2 px-5 text-rose-700 hover:bg-rose-700 hover:text-white border-rose-200">
          Sign Out
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Patron Overview & Default Address (4 Cols) -->
        <div class="lg:col-span-4 space-y-6">
          <div class="bg-[#F7F5F0] p-6 border border-[#E8E4DC] space-y-4">
            <h3 class="font-serif text-xl font-medium text-[#111] border-b border-[#E8E4DC] pb-3">
              Patron Profile
            </h3>
            <div class="text-xs space-y-2 text-[#444]">
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Atelier Status:</strong> <span class="bg-black text-white text-[10px] px-2 py-0.5 uppercase tracking-widest font-semibold">Tier One VIP</span></p>
            </div>
          </div>

          <div class="bg-[#F7F5F0] p-6 border border-[#E8E4DC] space-y-4">
            <h3 class="font-serif text-xl font-medium text-[#111] border-b border-[#E8E4DC] pb-3">
              Saved Delivery Address
            </h3>
            <div class="text-xs text-[#444] space-y-1">
              <p class="font-semibold text-black">${user.name}</p>
              <p>${user.address}</p>
              <p>${user.city}, ${user.postalCode}</p>
              <p>Pakistan</p>
              <p class="pt-2 text-[#737373]">${user.phone}</p>
            </div>
          </div>

          <div class="p-6 border border-[#E8E4DC] bg-white space-y-3">
            <h4 class="font-semibold text-xs uppercase tracking-wider text-black">Private Concierge</h4>
            <p class="text-xs text-[#737373] leading-relaxed">
              Need personalized sizing advice, bespoke tailoring, or priority rush delivery? Contact our VIP Concierge directly.
            </p>
            <a href="https://wa.me/923001234567" target="_blank" class="btn-outline w-full py-2.5 text-xs text-center block">
              WhatsApp Concierge
            </a>
          </div>
        </div>

        <!-- Right: Order History & Tracking (8 Cols) -->
        <div class="lg:col-span-8 space-y-6">
          <div class="border-b border-[#E8E4DC] pb-3 flex justify-between items-center">
            <h3 class="font-serif text-2xl font-medium text-[#111]">
              Order History (${orders.length})
            </h3>
            <a href="#/order-tracking" class="text-xs font-semibold uppercase tracking-wider text-black hover:underline">
              Track Any Order ID &rarr;
            </a>
          </div>

          ${orders.length === 0 ? `
            <div class="p-8 text-center bg-[#F7F5F0] border border-[#E8E4DC] text-xs text-[#737373]">
              No previous orders found.
            </div>
          ` : `
            <div class="space-y-6">
              ${orders.map(order => `
                <div class="bg-white border border-[#E8E4DC] p-6 space-y-4 shadow-sm">
                  <!-- Order Header -->
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8E4DC] gap-2">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-serif text-lg font-bold text-black">${order.id}</span>
                        <span class="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                          ${order.status}
                        </span>
                      </div>
                      <p class="text-[11px] text-[#737373]">Placed on ${order.date} &bull; ${order.carrier}</p>
                    </div>

                    <div class="flex items-center gap-3">
                      <span class="text-sm font-bold text-black">Rs. ${order.total.toLocaleString('en-PK')}</span>
                      <a href="#/order-tracking?orderId=${order.id}" class="btn-outline text-[11px] py-1.5 px-3">
                        Track Live &rarr;
                      </a>
                    </div>
                  </div>

                  <!-- Order Items -->
                  <div class="divide-y divide-[#E8E4DC]">
                    ${order.items.map(item => `
                      <div class="py-3 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-3">
                          <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover bg-[#F7F5F0] border border-[#E8E4DC]">
                          <div>
                            <h4 class="font-semibold text-black">${item.name}</h4>
                            <p class="text-[11px] text-[#737373]">${item.color} &bull; Size ${item.size} &bull; Qty ${item.quantity}</p>
                          </div>
                        </div>
                        <span class="font-medium text-black">Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

function bindAccountPageEvents() {
  const signoutBtn = document.getElementById('account-signout-btn');
  if (signoutBtn) {
    signoutBtn.addEventListener('click', () => {
      store.logout();
      window.location.hash = '#/account';
    });
  }

  // Auth Tabs
  const tabLogin = document.getElementById('auth-tab-login');
  const tabRegister = document.getElementById('auth-tab-register');
  const formLogin = document.getElementById('auth-login-form');
  const formRegister = document.getElementById('auth-register-form');

  if (tabLogin && tabRegister && formLogin && formRegister) {
    tabLogin.addEventListener('click', () => {
      tabLogin.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 border-black text-black';
      tabRegister.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider text-[#737373] hover:text-black';
      formLogin.classList.remove('hidden');
      formRegister.classList.add('hidden');
    });

    tabRegister.addEventListener('click', () => {
      tabRegister.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 border-black text-black';
      tabLogin.className = 'flex-1 pb-3 text-xs font-bold uppercase tracking-wider text-[#737373] hover:text-black';
      formRegister.classList.remove('hidden');
      formLogin.classList.add('hidden');
    });

    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      store.login({ email, name: 'Daniyal Ahmed' });
      window.location.hash = '#/account';
    });

    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      store.login({ email, name });
      window.location.hash = '#/account';
    });
  }
}

/* ==================== FILE: js/pages/orderTracking.js ==================== */
// ZK STORE — Real-Time Order Tracking Interface

function renderOrderTrackingPage(queryParams = {}) {
  const queryId = queryParams.orderId || 'ZK-89421';
  const order = store.getOrderById(queryId);

  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-4">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          LOGISTICS & ATELIER DISPATCH
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Order Tracking
        </h1>
        <p class="text-xs text-[#737373] max-w-md mx-auto">
          Enter your ZK STORE order number (e.g. <strong>ZK-89421</strong>) or TCS tracking code to review live courier status.
        </p>

        <!-- Search Tracker Input -->
        <form id="track-order-form" class="max-w-md mx-auto flex gap-2 pt-2">
          <input 
            type="text" 
            id="track-order-input" 
            value="${queryId}" 
            placeholder="e.g. ZK-89421" 
            required 
            class="flex-1 bg-white border border-[#E8E4DC] px-4 py-3 text-xs uppercase tracking-wider focus:outline-none focus:border-black font-semibold"
          />
          <button type="submit" class="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black/80">
            Track
          </button>
        </form>
      </div>

      ${!order ? `
        <div class="p-12 text-center bg-[#F7F5F0] border border-[#E8E4DC] max-w-lg mx-auto">
          <i data-lucide="package-search" class="w-10 h-10 text-[#737373] mx-auto mb-3"></i>
          <h3 class="font-serif text-xl font-medium text-black mb-1">Order Not Found</h3>
          <p class="text-xs text-[#737373] mb-4">We could not find an order matching "${queryId}". Please verify your reference number or sign in to your patron account.</p>
          <a href="#/account" class="btn-primary text-xs py-2 px-5">View My Orders</a>
        </div>
      ` : `
        <!-- Order Tracking Card -->
        <div class="bg-white border border-[#E8E4DC] shadow-md p-6 sm:p-10 space-y-10">
          
          <!-- Order Headline Meta -->
          <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8E4DC] gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h2 class="font-serif text-2xl font-bold text-black">${order.id}</h2>
                <span class="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  ${order.status}
                </span>
              </div>
              <p class="text-xs text-[#737373] mt-1">
                Placed on ${order.date} &bull; Estimated Delivery: <strong>${order.estimatedDelivery}</strong>
              </p>
            </div>

            <div class="text-left md:text-right text-xs text-[#555]">
              <p>Carrier: <strong>${order.carrier}</strong></p>
              <p>Tracking Code: <strong class="text-black font-mono">${order.trackingNumber}</strong></p>
            </div>
          </div>

          <!-- Visual Animated Progress Stepper -->
          <div class="py-4">
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-8">Live Progress Timeline</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              ${order.steps.map((step, idx) => `
                <div class="flex md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-3 relative">
                  
                  <!-- Circle Indicator -->
                  <div class="stepper-circle ${step.completed ? 'completed' : (step.current ? 'active animate-pulse' : '')} z-10">
                    ${step.completed ? '<i data-lucide="check" class="w-4 h-4"></i>' : (idx + 1)}
                  </div>

                  <!-- Text Details -->
                  <div>
                    <h4 class="text-xs font-bold text-black leading-tight">${step.title}</h4>
                    <p class="text-[11px] text-[#737373] mt-0.5">${step.date}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Order Summary & Shipping Address Details Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E8E4DC]">
            
            <!-- Shipping Address -->
            <div class="bg-[#F7F5F0] p-6 border border-[#E8E4DC] space-y-2 text-xs">
              <h4 class="font-serif text-base font-semibold text-black uppercase tracking-wider mb-2">Delivery Destination</h4>
              <p class="font-bold text-black">${order.shippingAddress.fullName}</p>
              <p class="text-[#555]">${order.shippingAddress.address}</p>
              <p class="text-[#555]">${order.shippingAddress.city}, ${order.shippingAddress.postalCode}</p>
              <p class="text-[#555]">${order.shippingAddress.country}</p>
              <p class="text-[#737373] pt-1">Phone: ${order.shippingAddress.phone}</p>
              <p class="text-[#737373]">Payment: <strong>${order.paymentMethod}</strong></p>
            </div>

            <!-- Ordered Items Showcase -->
            <div class="space-y-3">
              <h4 class="font-serif text-base font-semibold text-black uppercase tracking-wider mb-2">Garments in Parcel (${order.items.length})</h4>
              <div class="divide-y divide-[#E8E4DC] max-h-56 overflow-y-auto no-scrollbar">
                ${order.items.map(item => `
                  <div class="py-2.5 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-3">
                      <img src="${item.image}" alt="${item.name}" class="w-12 h-14 object-cover bg-[#F7F5F0] border border-[#E8E4DC]">
                      <div>
                        <h5 class="font-semibold text-black line-clamp-1">${item.name}</h5>
                        <p class="text-[11px] text-[#737373]">${item.color} &bull; Size ${item.size} &bull; Qty ${item.quantity}</p>
                      </div>
                    </div>
                    <span class="font-bold text-black">Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}</span>
                  </div>
                `).join('')}
              </div>

              <div class="flex justify-between items-center text-sm font-bold text-black pt-3 border-t border-[#E8E4DC]">
                <span>Total Amount</span>
                <span>Rs. ${order.total.toLocaleString('en-PK')}</span>
              </div>
            </div>

          </div>

          <!-- Help footer -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] border-t border-[#E8E4DC] gap-3">
            <span>Questions regarding this parcel? Contact our VIP logistics concierge.</span>
            <a href="https://wa.me/923001234567" target="_blank" class="text-black font-semibold hover:underline flex items-center gap-1">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp Concierge Direct
            </a>
          </div>

        </div>
      `}

    </div>
  `;
}

function bindOrderTrackingPageEvents() {
  const form = document.getElementById('track-order-form');
  const input = document.getElementById('track-order-input');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = input.value.trim().toUpperCase();
      if (id) {
        window.location.hash = `#/order-tracking?orderId=${encodeURIComponent(id)}`;
      }
    });
  }
}

/* ==================== FILE: js/pages/aboutPage.js ==================== */
// ZK STORE — Editorial About the House Page

function renderAboutPage() {
  return `
    <div class="space-y-24 sm:space-y-32 pb-24">
      
      <!-- Editorial Hero Header -->
      <section class="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#111111]">
        <div class="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=2200&q=85" 
            alt="ZK STORE Atelier History" 
            class="w-full h-full object-cover object-center brightness-70"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-4">
          <span class="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#D8C8B5]">
            HAUTE ATELIER MANIFESTO
          </span>
          <h1 class="font-serif text-3xl sm:text-6xl md:text-7xl font-normal tracking-[0.08em] uppercase leading-tight text-[#F7F5F0]">
            MORE THAN FASHION. <br />IT'S YOUR IDENTITY.
          </h1>
          <p class="font-sans text-xs sm:text-base text-[#DDD] max-w-xl mx-auto font-light leading-relaxed">
            The story of an international fashion house founded on uncompromising textile weight, architectural proportion, and effortless elegance.
          </p>
        </div>
      </section>

      <!-- The Atelier Narrative -->
      <section class="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div class="lg:col-span-6 space-y-6">
            <span class="text-xs font-semibold tracking-[0.25em] uppercase text-[#737373] block">
              ORIGINS & VISION
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111] font-medium leading-[1.15]">
              Redefining Modern Luxury from Pakistan to the World.
            </h2>
            <div class="space-y-4 text-xs sm:text-sm text-[#555] leading-relaxed font-sans">
              <p>
                ZK STORE was born from an acute realization: the contemporary fashion market was saturated with ephemeral synthetic trends, cheap polyester blends, and loud, disposable logos. The world had forgotten the quiet nobility of substantial, heavyweight textiles.
              </p>
              <p>
                We established ZK STORE to counter this disposability. Every piece in our 50-garment permanent archive is engineered with an obsession for longevity: 280GSM to 500GSM custom-milled combed organic cotton, French terry knitwear, Normandy flax linen, and Italian poplin shirting.
              </p>
              <p>
                We design for those whose presence needs no introduction. Silence speaks louder than volume when the silhouette is cut with razor-sharp intent.
              </p>
            </div>
          </div>

          <div class="lg:col-span-6 relative aspect-[4/5] bg-[#F7F5F0] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80" 
              alt="Craftsmanship in Action" 
              class="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      <!-- Three Pillars of Craftsmanship -->
      <section id="craftsmanship" class="bg-[#F7F5F0] py-20 sm:py-28 border-y border-[#E8E4DC]">
        <div class="max-w-[1600px] mx-auto px-6 sm:px-12">
          
          <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span class="text-xs font-semibold tracking-[0.25em] uppercase text-[#737373] block">
              ATELIER DISCIPLINES
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#111] font-medium">
              The Three Pillars of ZK STORE
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="bg-white p-8 sm:p-10 border border-[#E8E4DC] space-y-4">
              <span class="font-serif text-3xl font-light text-[#D8C8B5]">01</span>
              <h3 class="font-serif text-2xl font-medium text-black">Textile Architecture</h3>
              <p class="text-xs text-[#555] leading-relaxed">
                We custom-mill our own fabrics. Rather than using commercial stock, we knit bespoke 280GSM and 500GSM loopback terries that drape with sculpted structural authority, never clinging or distorting over time.
              </p>
            </div>

            <div class="bg-white p-8 sm:p-10 border border-[#E8E4DC] space-y-4">
              <span class="font-serif text-3xl font-light text-[#D8C8B5]">02</span>
              <h3 class="font-serif text-2xl font-medium text-black">Sartorial Precision</h3>
              <p class="text-xs text-[#555] leading-relaxed">
                From hand-basted French seams and double reverse trouser pleats to antique brass hardware and mother-of-pearl buttons, our atelier craftsmen bring bespoke Savile Row standards to modern streetwear.
              </p>
            </div>

            <div class="bg-white p-8 sm:p-10 border border-[#E8E4DC] space-y-4">
              <span class="font-serif text-3xl font-light text-[#D8C8B5]">03</span>
              <h3 class="font-serif text-2xl font-medium text-black">Conscious Permanence</h3>
              <p class="text-xs text-[#555] leading-relaxed">
                We reject seasonal waste. Every silhouette is crafted to be worn through multiple decades. 100% GOTS-certified organic cotton, chemical-free garment dye vats, and ethical fair-wage ateliers in Pakistan.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- Boutiques & Concierge CTA -->
      <section class="max-w-[1200px] mx-auto px-6 sm:px-12 text-center space-y-6">
        <h2 class="font-serif text-3xl sm:text-4xl text-black font-medium">
          Experience the Atelier in Person
        </h2>
        <p class="text-xs sm:text-sm text-[#737373] max-w-md mx-auto leading-relaxed">
          Visit our flagship boutiques in DHA Karachi and Gulberg Lahore, or consult with our private concierge for bespoke styling appointments.
        </p>
        <div class="pt-4 flex justify-center gap-4">
          <a href="#/contact" class="btn-primary text-xs py-3.5 px-8">Contact Concierge</a>
          <a href="#/categories" class="btn-outline text-xs py-3.5 px-8">Discover Catalog</a>
        </div>
      </section>

    </div>
  `;
}

function bindAboutPageEvents() {}

/* ==================== FILE: js/pages/contactPage.js ==================== */
// ZK STORE — VIP Client Concierge & Contact Page

function renderContactPage() {
  return `
    <div class="max-w-[1600px] mx-auto px-6 sm:px-12 py-12 space-y-16 pb-24">
      
      <!-- Page Header -->
      <div class="border-b border-[#E8E4DC] pb-6">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block mb-1">
          CLIENT SERVICES & PRIVATE APPOINTMENTS
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111111] uppercase tracking-[0.08em]">
          Contact Concierge
        </h1>
        <p class="text-xs sm:text-sm text-[#737373] mt-2 max-w-xl">
          Our dedicated fashion advisors and logistics specialists are available to assist with sizing consultations, custom atelier orders, and order inquiries.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <!-- Left: Concierge Form (7 Cols) -->
        <div class="lg:col-span-7 bg-[#F7F5F0] p-8 sm:p-12 border border-[#E8E4DC]">
          <h2 class="font-serif text-2xl sm:text-3xl font-medium text-[#111] mb-2">Send an Inquiry</h2>
          <p class="text-xs text-[#737373] mb-8">Expect a response within 4 hours during business days.</p>

          <form id="contact-concierge-form" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Your Name *</label>
                <input type="text" id="contact-name" required placeholder="Daniyal Ahmed" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Phone / WhatsApp</label>
                <input type="tel" id="contact-phone" placeholder="+92 300 1234567" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Email Address *</label>
              <input type="email" id="contact-email" required placeholder="daniyal@example.com" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Subject of Inquiry</label>
              <select id="contact-subject" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium">
                <option value="Sizing">Sizing & Garment Fit Consultation</option>
                <option value="Order Tracking">Existing Order Inquiry / Tracking</option>
                <option value="Exchanges">14-Day Exchange or Return Request</option>
                <option value="Bespoke">Bespoke Atelier Styling Appointment</option>
                <option value="Press">Press & Corporate Collaborations</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#111] mb-1">Message *</label>
              <textarea id="contact-message" required rows="5" placeholder="How may our atelier concierge assist you today?" class="w-full bg-white border border-[#E8E4DC] p-3 text-xs focus:outline-none focus:border-black font-medium"></textarea>
            </div>

            <button type="submit" class="btn-primary w-full py-4 text-xs font-bold uppercase tracking-[0.2em]">
              Send Message to Concierge &rarr;
            </button>
          </form>
        </div>

        <!-- Right: Flagship Boutiques & Contact Direct (5 Cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Direct Channels -->
          <div class="bg-white border border-[#E8E4DC] p-8 space-y-6">
            <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
              Direct Contact Lines
            </h3>

            <div class="space-y-4 text-xs">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 text-black">
                  <i data-lucide="phone" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-black uppercase tracking-wider">VIP Telephone Line</h4>
                  <p class="text-[#737373] mt-0.5">+92 21 3524 8900 &bull; Mon - Sat, 10 AM - 9 PM</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 text-black">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-black uppercase tracking-wider">WhatsApp VIP Direct</h4>
                  <a href="https://wa.me/923001234567" target="_blank" class="text-[#D8C8B5] font-semibold hover:underline block mt-0.5">
                    +92 300 1234567 &rarr; (Instant Chat)
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 text-black">
                  <i data-lucide="mail" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-black uppercase tracking-wider">Electronic Inquiries</h4>
                  <p class="text-[#737373] mt-0.5">concierge@zkstore.luxury</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Flagship Locations -->
          <div class="bg-white border border-[#E8E4DC] p-8 space-y-6">
            <h3 class="font-serif text-2xl font-medium text-[#111] border-b border-[#E8E4DC] pb-4">
              Atelier Flagship Boutiques
            </h3>

            <div class="space-y-6 text-xs text-[#555]">
              <div>
                <h4 class="font-bold text-black text-sm uppercase tracking-wider mb-1">Karachi Flagship Atelier</h4>
                <p>Plot 42-C, 26th Street, Bukhari Commercial Area</p>
                <p>DHA Phase VI, Karachi, Pakistan</p>
                <p class="text-[11px] text-[#737373] mt-1">Open 11:00 AM — 10:00 PM Daily</p>
              </div>

              <div class="pt-2 border-t border-[#E8E4DC]">
                <h4 class="font-bold text-black text-sm uppercase tracking-wider mb-1">Lahore Sartorial Boutique</h4>
                <p>94-B, MM Alam Road</p>
                <p>Gulberg III, Lahore, Pakistan</p>
                <p class="text-[11px] text-[#737373] mt-1">Open 11:00 AM — 10:00 PM Daily</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

function bindContactPageEvents() {
  const form = document.getElementById('contact-concierge-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      store.showToast(`Thank you, ${name}. Your message has been dispatched to the VIP concierge team.`, 'success');
      form.reset();
    });
  }
}

/* ==================== FILE: js/pages/faqPage.js ==================== */
// ZK STORE — Frequently Asked Questions Page

function renderFaqPage() {
  const faqs = [
    {
      category: 'Ordering & Authenticity',
      items: [
        {
          q: 'Are all garments authentically produced by ZK STORE?',
          a: 'Yes. Every garment bearing the ZK STORE hallmark is designed in-house and manufactured using custom-milled textiles, genuine French terry, and certified extra-long-staple pima or organic cottons. We do not use generic blank garments.'
        },
        {
          q: 'How do I know which size to choose?',
          a: 'Each piece features an Atelier Size Guide with exact chest, shoulder, waist, and length measurements in inches and centimeters. For our oversized streetwear tees and hoodies, we engineer an architectural drop-shoulder cut; ordering your true size yields the intended relaxed drape, while sizing down produces a tailored fit.'
        },
        {
          q: 'Can I cancel or modify an order after placing it?',
          a: 'Because our atelier immediately initiates hand-inspection and steam-pressing upon order confirmation, modifications must be communicated to our WhatsApp VIP concierge within 2 hours of placement.'
        }
      ]
    },
    {
      category: 'Shipping & Delivery',
      items: [
        {
          q: 'What are the delivery times within Pakistan?',
          a: 'For Karachi deliveries, orders typically arrive within 24 to 48 hours via TCS Express Prime. For Lahore, Islamabad, Rawalpindi, and other metropolitan centers, delivery takes 2 to 3 business days. Remote or regional destinations take 3 to 4 business days.'
        },
        {
          q: 'How does complimentary delivery work?',
          a: 'All orders with a subtotal exceeding Rs. 5,000 qualify automatically for Complimentary TCS Express Shipping anywhere across Pakistan. Orders below this threshold incur a flat delivery fee of Rs. 350.'
        },
        {
          q: 'Will I receive real-time tracking updates?',
          a: 'Yes. Immediately upon courier handoff, a tracking number is registered to your order. You can enter your Order ID (e.g. ZK-89421) into our live Order Tracking page at any time to monitor courier milestones.'
        }
      ]
    },
    {
      category: 'Payment Methods & Security',
      items: [
        {
          q: 'Is Cash on Delivery (COD) supported nationwide?',
          a: 'Yes, Cash on Delivery is supported across all cities and towns serviced by TCS Express across Pakistan. You simply hand cash to the courier upon parcel delivery.'
        },
        {
          q: 'What other payment methods are accepted?',
          a: 'We accept direct bank transfers via Meezan Bank, Bank Alfalah, and Standard Chartered, as well as Visa and Mastercard payments processed through 256-bit SSL encrypted channels.'
        }
      ]
    },
    {
      category: 'Exchanges & 14-Day Guarantee',
      items: [
        {
          q: 'What is the atelier return and exchange policy?',
          a: 'We extend a 14-day exchange privilege on all unworn garments in their original packaging with tags intact. If the size or fit is not ideal, our concierge will arrange a seamless size swap.'
        },
        {
          q: 'How do I initiate an exchange?',
          a: 'Simply contact our concierge team via WhatsApp or email with your Order ID and preferred replacement size. A courier pickup and exchange will be scheduled.'
        }
      ]
    }
  ];

  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          HELP CENTER & CLIENT GUIDES
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Frequently Asked Questions
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          Clear answers regarding atelier sizing, bespoke fabrics, nationwide delivery, and returns.
        </p>
      </div>

      <!-- FAQ Accordions by Category -->
      <div class="space-y-12">
        ${faqs.map(sec => `
          <div class="space-y-4">
            <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider border-b border-[#E8E4DC] pb-2">
              ${sec.category}
            </h2>
            <div class="divide-y divide-[#E8E4DC]">
              ${sec.items.map(item => `
                <details class="group py-4 text-xs">
                  <summary class="flex justify-between items-center cursor-pointer font-bold text-sm text-[#111] hover:text-[#555] transition-colors">
                    <span>${item.q}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                  </summary>
                  <p class="pt-3 text-[#555] leading-relaxed text-xs">
                    ${item.a}
                  </p>
                </details>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Footer Help Box -->
      <div class="bg-[#F7F5F0] p-8 border border-[#E8E4DC] text-center space-y-3 mt-12">
        <h3 class="font-serif text-xl font-medium text-black">Still have a question?</h3>
        <p class="text-xs text-[#737373]">Our VIP concierge is available via WhatsApp or telephone for personal assistance.</p>
        <a href="#/contact" class="btn-primary text-xs py-2.5 px-6 inline-block mt-2">Speak to Concierge</a>
      </div>

    </div>
  `;
}

function bindFaqPageEvents() {}

/* ==================== FILE: js/pages/shippingPage.js ==================== */
// ZK STORE — Shipping & Returns Policy Page

function renderShippingPage() {
  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          LOGISTICS & ATELIER COMMITMENT
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Shipping & Returns Policy
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          Complimentary nationwide express delivery on qualifying orders and seamless 14-day exchanges.
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-10 text-xs text-[#555] leading-relaxed">
        
        <!-- Section 1 -->
        <div class="bg-white p-8 border border-[#E8E4DC] space-y-3">
          <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider">
            1. Express Delivery Network across Pakistan
          </h2>
          <p>
            All ZK STORE parcels are dispatched from our centralized fulfillment atelier in Karachi using TCS Express Prime. Each package is double-boxed in our bespoke matte black rigid packaging with luxury tissue wrap and signature fragrance seal.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-black font-semibold">
            <div class="bg-[#F7F5F0] p-4 border border-[#E8E4DC]">
              <span class="block text-xs uppercase text-[#737373] font-normal">Karachi Metropolitan</span>
              <span class="text-sm">24 to 48 Hours</span>
            </div>
            <div class="bg-[#F7F5F0] p-4 border border-[#E8E4DC]">
              <span class="block text-xs uppercase text-[#737373] font-normal">Lahore & Islamabad</span>
              <span class="text-sm">2 to 3 Business Days</span>
            </div>
            <div class="bg-[#F7F5F0] p-4 border border-[#E8E4DC]">
              <span class="block text-xs uppercase text-[#737373] font-normal">Nationwide Express</span>
              <span class="text-sm">3 to 4 Business Days</span>
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="bg-white p-8 border border-[#E8E4DC] space-y-3">
          <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider">
            2. Shipping Rates & Complimentary Threshold
          </h2>
          <p>
            Orders with a subtotal of <strong>Rs. 5,000 or greater</strong> qualify automatically for <strong>Complimentary Express Shipping</strong> anywhere across Pakistan. For orders below Rs. 5,000, a standardized courier fee of Rs. 350 applies.
          </p>
          <p>
            International delivery across the GCC, United Kingdom, North America, and Europe is available by special arrangement with DHL Express. Contact our VIP concierge for quotes and duties calculation.
          </p>
        </div>

        <!-- Section 3 -->
        <div id="returns" class="bg-white p-8 border border-[#E8E4DC] space-y-3">
          <h2 class="font-serif text-2xl font-semibold text-black uppercase tracking-wider">
            3. 14-Day Atelier Exchange Privilege
          </h2>
          <p>
            We take pride in every stitch. If a garment does not fit as intended or does not meet your expectations, you may initiate an exchange within <strong>14 days of receipt</strong>.
          </p>
          <div class="space-y-1.5 pl-4 list-disc text-[#444]">
            <p>&bull; Garments must remain unworn, unwashed, and with all atelier security tags intact.</p>
            <p>&bull; Original luxury presentation box and tissue packaging must be preserved.</p>
            <p>&bull; Our concierge arranges reverse pickup at your address or provides a drop-off voucher at any authorized courier center.</p>
          </div>
        </div>

      </div>

    </div>
  `;
}

function bindShippingPageEvents() {}

/* ==================== FILE: js/pages/privacyPage.js ==================== */
// ZK STORE — Privacy Policy Page

function renderPrivacyPage() {
  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          TRUST & PATRON INTEGRITY
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Privacy Policy
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          How ZK STORE collects, safeguards, and respects your personal client data.
        </p>
      </div>

      <!-- Policy Text Content -->
      <div class="bg-white p-8 sm:p-12 border border-[#E8E4DC] space-y-8 text-xs text-[#555] leading-relaxed">
        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">1. Overview of Client Privacy</h2>
          <p>
            ZK STORE Haute Atelier Ltd. respects your fundamental right to digital privacy. We operate on a principle of absolute confidentiality. We do not sell, rent, or trade customer contact details, sizing data, or purchase histories with third-party advertising networks.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">2. Information We Collect</h2>
          <p>
            When you place an order or create a patron account, we collect:
          </p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-[#444]">
            <li>Full name and personal contact coordinates (telephone number, email address).</li>
            <li>Physical delivery destination and billing information.</li>
            <li>Purchase history, sizing selections, and wishlist preferences.</li>
            <li>Digital identifiers (IP address, browser session identifiers) utilized strictly for website performance and fraud prevention.</li>
          </ul>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">3. 256-Bit SSL Security Standards</h2>
          <p>
            All communications between your device and ZK STORE are encrypted using industry-standard TLS 1.3 / 256-Bit SSL protocols. Payment credentials entered on our checkout platform are processed via compliant encrypted channels.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">4. Your Data Rights</h2>
          <p>
            Under our patron charter, you hold the right to request a complete copy of all data stored regarding your account, or to request permanent erasure of your profile. Inquiries may be directed to <span class="text-black font-semibold">concierge@zkstore.luxury</span>.
          </p>
        </div>
      </div>

    </div>
  `;
}

function bindPrivacyPageEvents() {}

/* ==================== FILE: js/pages/termsPage.js ==================== */
// ZK STORE — Terms & Conditions Page

function renderTermsPage() {
  return `
    <div class="max-w-[1200px] mx-auto px-6 sm:px-12 py-12 space-y-12 pb-24">
      
      <!-- Page Header -->
      <div class="text-center space-y-3 pb-8 border-b border-[#E8E4DC]">
        <span class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#737373] block">
          ATELIER SALE CONDITIONS & LEGAL
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-medium text-[#111] uppercase tracking-[0.08em]">
          Terms & Conditions
        </h1>
        <p class="text-xs text-[#737373] max-w-lg mx-auto">
          Terms governing the purchase, delivery, and ownership of garments from ZK STORE.
        </p>
      </div>

      <!-- Terms Text Content -->
      <div class="bg-white p-8 sm:p-12 border border-[#E8E4DC] space-y-8 text-xs text-[#555] leading-relaxed">
        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">1. Atelier Agreement</h2>
          <p>
            By accessing the ZK STORE platform or confirming a purchase, you agree to be bound by these Terms & Conditions. All orders placed are subject to stock availability and validation of client coordinates.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">2. Pricing & Currency</h2>
          <p>
            All prices listed on ZK STORE are quoted in Pakistani Rupees (PKR) and include all applicable local manufacturing taxes. In the event of a typographical pricing error, the atelier reserves the right to notify the client and either re-confirm the order at the corrected price or void the transaction.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">3. Product Descriptions & Photography</h2>
          <p>
            We strive to present garment colors, cuts, and textile textures with absolute chromatic accuracy. However, slight variations in shade may occur depending on individual monitor calibrations and ambient lighting conditions.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-semibold text-black uppercase tracking-wider mb-2">4. Intellectual Property</h2>
          <p>
            All typographic layouts, garment patterns, photography, brand hallmarks, and digital assets associated with ZK STORE are the exclusive intellectual property of ZK STORE Haute Atelier Ltd. Unauthorized commercial reproduction is strictly prohibited.
          </p>
        </div>
      </div>

    </div>
  `;
}

function bindTermsPageEvents() {}

/* ==================== FILE: js/app.js ==================== */
// ZK STORE — Main Application Controller & Dynamic Router









// Pages



















class App {
  constructor() {
    this.appEl = document.getElementById('app');
    this.currentRoute = '';
    this.init();
  }

  init() {
    // Subscribe to store notifications
    store.subscribe((event, payload) => {
      this.handleStoreEvent(event, payload);
    });

    // Listen to hash changes for routing
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());

    // Initial render
    this.handleRoute();
  }

  handleStoreEvent(event, payload) {
    if (event === 'toast:show') {
      showToast(payload.message, payload.type);
    } else if (event === 'cart:updated') {
      this.refreshHeader();
      this.refreshCartDrawer();
      if (this.currentRoute.startsWith('#/cart') || this.currentRoute.startsWith('#/checkout')) {
        this.renderCurrentPage();
      }
    } else if (event === 'wishlist:updated') {
      this.refreshHeader();
      this.refreshWishlistDrawer();
      if (this.currentRoute.startsWith('#/wishlist')) {
        this.renderCurrentPage();
      }
    } else if (event === 'ui:cart') {
      this.refreshCartDrawer();
    } else if (event === 'ui:wishlist') {
      this.refreshWishlistDrawer();
    } else if (event === 'ui:search') {
      this.refreshSearchModal();
    } else if (event === 'ui:quickview') {
      this.refreshQuickViewModal();
    } else if (event === 'ui:sizeguide') {
      this.refreshSizeGuideModal();
    } else if (event === 'user:updated') {
      this.refreshHeader();
      if (this.currentRoute.startsWith('#/account')) {
        this.renderCurrentPage();
      }
    }
  }

  parseHash() {
    const hash = window.location.hash || '#/';
    const [pathPart, queryPart] = hash.split('?');
    const queryParams = {};

    if (queryPart) {
      const pairs = queryPart.split('&');
      pairs.forEach(pair => {
        const [k, v] = pair.split('=');
        if (k) queryParams[k] = decodeURIComponent(v || '');
      });
    }

    return { path: pathPart, query: queryParams, full: hash };
  }

  handleRoute() {
    const { path, query, full } = this.parseHash();
    this.currentRoute = full;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Render page shell
    this.renderCurrentPage(path, query);
  }

  renderCurrentPage(path, query) {
    if (!path) {
      const parsed = this.parseHash();
      path = parsed.path;
      query = parsed.query;
    }

    let pageHtml = '';
    let bindFn = () => {};

    // Route matching
    if (path === '#/' || path === '#' || path === '') {
      pageHtml = renderHomePage();
      bindFn = bindHomePageEvents;
      document.title = 'ZK STORE — $50k Luxury Fashion Atelier';
    } else if (path === '#/men') {
      pageHtml = renderMenPage(query);
      bindFn = () => bindMenPageEvents(query);
      document.title = "ZK STORE — Men's Haute Atelier Collection";
    } else if (path === '#/women') {
      pageHtml = renderWomenPage(query);
      bindFn = () => bindWomenPageEvents(query);
      document.title = "ZK STORE — Women's Haute Atelier Collection";
    } else if (path === '#/new-arrivals') {
      pageHtml = renderNewArrivalsPage();
      bindFn = bindNewArrivalsPageEvents;
      document.title = 'ZK STORE — New Season Atelier Arrivals';
    } else if (path === '#/best-sellers') {
      pageHtml = renderBestSellersPage();
      bindFn = bindBestSellersPageEvents;
      document.title = 'ZK STORE — Iconic Best Sellers';
    } else if (path === '#/categories') {
      pageHtml = renderCategoriesPage();
      bindFn = bindCategoriesPageEvents;
      document.title = 'ZK STORE — Complete Ready-To-Wear Categories';
    } else if (path.startsWith('#/product/')) {
      const productId = path.replace('#/product/', '');
      pageHtml = renderProductDetailPage(productId);
      bindFn = () => bindProductDetailPageEvents(productId);
      const prod = store.getProductById(productId);
      document.title = prod ? `${prod.name} — ZK STORE Haute Atelier` : 'Piece Details — ZK STORE';
    } else if (path === '#/search') {
      pageHtml = renderSearchPage(query);
      bindFn = bindSearchPageEvents;
      document.title = `Search: ${query.q || 'Collection'} — ZK STORE`;
    } else if (path === '#/cart') {
      pageHtml = renderCartPage();
      bindFn = bindCartPageEvents;
      document.title = 'Shopping Bag — ZK STORE';
    } else if (path === '#/wishlist') {
      pageHtml = renderWishlistPage();
      bindFn = bindWishlistPageEvents;
      document.title = 'Saved Wishlist — ZK STORE';
    } else if (path === '#/checkout') {
      pageHtml = renderCheckoutPage();
      bindFn = bindCheckoutPageEvents;
      document.title = 'Secure Atelier Checkout — ZK STORE';
    } else if (path === '#/account') {
      pageHtml = renderAccountPage();
      bindFn = bindAccountPageEvents;
      document.title = 'My Account & Orders — ZK STORE';
    } else if (path === '#/order-tracking') {
      pageHtml = renderOrderTrackingPage(query);
      bindFn = bindOrderTrackingPageEvents;
      document.title = 'Real-Time Order Tracking — ZK STORE';
    } else if (path === '#/about') {
      pageHtml = renderAboutPage();
      bindFn = bindAboutPageEvents;
      document.title = 'About The House — ZK STORE Haute Atelier';
    } else if (path === '#/contact') {
      pageHtml = renderContactPage();
      bindFn = bindContactPageEvents;
      document.title = 'Client Concierge & Boutiques — ZK STORE';
    } else if (path === '#/faq') {
      pageHtml = renderFaqPage();
      bindFn = bindFaqPageEvents;
      document.title = 'Frequently Asked Questions — ZK STORE';
    } else if (path === '#/shipping') {
      pageHtml = renderShippingPage();
      bindFn = bindShippingPageEvents;
      document.title = 'Complimentary Shipping & Returns — ZK STORE';
    } else if (path === '#/privacy') {
      pageHtml = renderPrivacyPage();
      bindFn = bindPrivacyPageEvents;
      document.title = 'Privacy & Patron Data Security — ZK STORE';
    } else if (path === '#/terms') {
      pageHtml = renderTermsPage();
      bindFn = bindTermsPageEvents;
      document.title = 'Terms & Conditions — ZK STORE';
    } else {
      pageHtml = `
        <div class="max-w-[800px] mx-auto px-6 py-24 text-center">
          <h1 class="font-serif text-4xl text-black mb-3">Page Not Found</h1>
          <p class="text-xs text-[#737373] mb-6">The requested atelier page could not be located.</p>
          <a href="#/" class="btn-primary">Return to Homepage</a>
        </div>
      `;
    }

    // Build overall DOM structure
    this.appEl.innerHTML = `
      <div class="min-h-screen flex flex-col justify-between">
        <div id="navbar-wrapper">${renderNavbar()}</div>
        <main class="flex-grow">${pageHtml}</main>
        <div id="footer-wrapper">${renderFooter()}</div>
      </div>

      <!-- Drawers & Modals Container -->
      <div id="drawers-container">
        ${renderCartDrawer()}
        ${renderWishlistDrawer()}
        ${renderSearchModal()}
        ${renderQuickViewModal()}
        ${renderSizeGuideModal()}
      </div>
    `;

    // Bind all handlers
    bindNavbarEvents();
    bindFooterEvents();
    bindCartDrawerEvents();
    bindWishlistDrawerEvents();
    bindSearchModalEvents();
    bindQuickViewEvents();
    bindSizeGuideEvents();
    bindFn();

    // Re-create lucide icons across the DOM
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  refreshHeader() {
    const navbarWrapper = document.getElementById('navbar-wrapper');
    if (navbarWrapper) {
      navbarWrapper.innerHTML = renderNavbar();
      bindNavbarEvents();
      if (window.lucide) window.lucide.createIcons({ root: navbarWrapper });
    }
  }

  refreshCartDrawer() {
    const container = document.getElementById('cart-drawer-backdrop');
    if (container) {
      container.outerHTML = renderCartDrawer();
      bindCartDrawerEvents();
      const newEl = document.getElementById('cart-drawer-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }

  refreshWishlistDrawer() {
    const container = document.getElementById('wishlist-drawer-backdrop');
    if (container) {
      container.outerHTML = renderWishlistDrawer();
      bindWishlistDrawerEvents();
      const newEl = document.getElementById('wishlist-drawer-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }

  refreshSearchModal() {
    const container = document.getElementById('search-modal-backdrop');
    if (container) {
      container.outerHTML = renderSearchModal();
      bindSearchModalEvents();
      const newEl = document.getElementById('search-modal-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
      const input = document.getElementById('live-search-input');
      if (input && store.ui.isSearchOpen) {
        setTimeout(() => input.focus(), 150);
      }
    }
  }

  refreshQuickViewModal() {
    const container = document.getElementById('quickview-modal-container');
    if (container) {
      container.outerHTML = renderQuickViewModal();
      bindQuickViewEvents();
      const newEl = document.getElementById('quickview-modal-container');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }

  refreshSizeGuideModal() {
    const container = document.getElementById('sizeguide-modal-backdrop');
    if (container) {
      container.outerHTML = renderSizeGuideModal();
      bindSizeGuideEvents();
      const newEl = document.getElementById('sizeguide-modal-backdrop');
      if (window.lucide && newEl) window.lucide.createIcons({ root: newEl });
    }
  }
}

// Instantiate and expose application globally
window.zkApp = new App();

})();
