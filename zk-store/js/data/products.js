// ZK STORE — Complete Luxury Fashion Catalog (50 Unique Products)

export const COLOR_MAP = {
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

export const PRODUCTS = [
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
