import type { Product, CategoryGroup } from '@/types';

const img = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop`;

export const categories: CategoryGroup[] = [
  {
    label: 'Helmets',
    slug: 'helmets',
    image: 'https://images.pexels.com/photos/9606843/pexels-photo-9606843.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    subCategories: ['Full-face Helmets', 'Open-face Helmets', 'Touring Helmets', 'Helmet Visors'],
  },
  {
    label: 'Riding Jackets',
    slug: 'riding-jackets',
    image: 'https://images.pexels.com/photos/15732213/pexels-photo-15732213.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    subCategories: ['Riding Jackets'],
  },
  {
    label: 'Gloves',
    slug: 'gloves',
    image: 'https://images.pexels.com/photos/10065173/pexels-photo-10065173.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    subCategories: ['Leather Gloves', 'Textile Gloves'],
  },
  {
    label: 'Riding Boots',
    slug: 'riding-boots',
    image: 'https://images.pexels.com/photos/26732212/pexels-photo-26732212.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    subCategories: ['Riding Boots'],
  },
  {
    label: 'Protective Apparel',
    slug: 'protective-apparel',
    image: 'https://images.pexels.com/photos/4224291/pexels-photo-4224291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    subCategories: ['Riding Trousers', 'Base Layers', 'Waterproof Gear'],
  },
  {
    label: 'Accessories',
    slug: 'accessories',
    image: 'https://images.pexels.com/photos/3855226/pexels-photo-3855226.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    subCategories: ['Phone Mounts', 'Tank Bags', 'Security Locks', 'Luggage', 'General Accessories'],
  },
];

export const products: Product[] = [
  {
    id: 'apex-prime-ff',
    name: 'Apex Prime Full-Face Helmet',
    category: 'Full-face Helmets',
    price: 3299,
    oldPrice: 3899,
    description:
      'A premium full-face helmet engineered for riders who refuse to compromise. The Apex Prime combines an aerodynamic shell with advanced impact dispersion technology for confidence at speed.',
    features: ['Multi-layer fibre shell', 'Anti-fog sun visor', 'Quick-release chin strap', 'Removable moisture-wicking liner', 'Pinlock-ready main visor'],
    images: [img('9606843'), img('18213335'), img('9607206')],
    badge: 'BEST SELLER',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Matte Black', 'Racing Orange', 'Gloss White'],
    sku: 'MG-HELM-APX-001',
  },
  {
    id: 'vortex-gt-ff',
    name: 'Vortex GT Full-Face Helmet',
    category: 'Full-face Helmets',
    price: 2799,
    description:
      'Touring-focused full-face helmet with superior ventilation and a wide eye port for an unrestricted view of the road ahead.',
    features: ['Advanced ventilation system', 'Wide eye port', 'Integrated sun visor', 'Bluetooth-ready speaker pockets', 'Scratch-resistant visor'],
    images: [img('9607206'), img('9606752'), img('9607264')],
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Stealth Black', 'Silver'],
    sku: 'MG-HELM-VTX-002',
  },
  {
    id: 'cruzer-of',
    name: 'Cruzer Open-Face Helmet',
    category: 'Open-face Helmets',
    price: 1899,
    description:
      'Classic open-face design reimagined with modern safety standards. Perfect for city commuting and cruiser-style riding.',
    features: ['Lightweight polycarbonate shell', 'Drop-down sun visor', 'Classic retro silhouette', 'Removable and washable lining', 'Micrometric buckle'],
    images: [img('9607369'), img('9607367'), img('12000105')],
    badge: 'NEW ARRIVAL',
    featured: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Matte Black', 'Cream', 'Olive'],
    sku: 'MG-HELM-CRZ-003',
  },
  {
    id: 'horizon-tour-th',
    name: 'Horizon Touring Helmet',
    category: 'Touring Helmets',
    price: 2499,
    description:
      'Long-distance touring helmet designed for maximum comfort over extended rides. Excellent noise isolation and all-weather performance.',
    features: ['Acoustic noise reduction', 'Pinlock 120 anti-fog lens included', 'Peak and visor combo', 'Goggle-ready design', 'Dual-density EPS liner'],
    images: [img('9607264'), img('13297316'), img('12775162')],
    featured: true,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Adventure Khaki', 'Sahara', 'Storm Black'],
    sku: 'MG-HELM-HRZ-004',
  },
  {
    id: 'stromguard-rj',
    name: 'StromGuard Riding Jacket',
    category: 'Riding Jackets',
    price: 3499,
    oldPrice: 3999,
    description:
      'All-season textile riding jacket with level 2 armour at shoulders and elbows. Built for adventure riders who tackle varying conditions.',
    features: ['Level 2 CE armour included', 'Waterproof and breathable membrane', 'Removable thermal liner', 'Multiple ventilation zips', 'Reflective panels for night visibility'],
    images: [img('15732213'), img('28535668'), img('10881299')],
    badge: 'BEST SELLER',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Hi-Vis Yellow', 'Orange'],
    sku: 'MG-JAKT-STG-005',
  },
  {
    id: 'ridgeline-leather-jk',
    name: 'Ridgeline Leather Riding Jacket',
    category: 'Riding Jackets',
    price: 4299,
    description:
      'Premium full-grain leather riding jacket with timeless styling and modern protection. A statement piece for the discerning rider.',
    features: ['1.2mm full-grain leather', 'CE level 1 armour', ' quilted comfort lining', 'Adjustable waist and cuffs', 'YKK premium zippers throughout'],
    images: [img('7099821'), img('8565457'), img('37082920')],
    featured: false,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Tan'],
    sku: 'MG-JAKT-RDG-006',
  },
  {
    id: 'torque-leather-gloves',
    name: 'Torque Leather Riding Gloves',
    category: 'Leather Gloves',
    price: 899,
    description:
      'Full-grain leather gloves with reinforced knuckle protection. Superior grip and feel for precise control on every ride.',
    features: ['Full-grain goatskin leather', 'Hard knuckle protector', 'Reinforced palm', 'Touchscreen-compatible index finger', 'Velcro wrist closure'],
    images: [img('10065173'), img('9606752'), img('15732213')],
    badge: 'BEST SELLER',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Black/Orange'],
    sku: 'MG-GLV-TRQ-007',
  },
  {
    id: 'trailblazer-textile-gloves',
    name: 'Trailblazer Textile Gloves',
    category: 'Textile Gloves',
    price: 599,
    description:
      'Lightweight, breathable textile gloves ideal for warm-weather riding. Flexible armour without sacrificing comfort.',
    features: ['Breathable mesh construction', 'TPR knuckle protection', 'Silicone grip palms', 'Terry cloth sweat wipe', 'Touchscreen-compatible fingertips'],
    images: [img('14854323'), img('10939877'), img('10065173')],
    badge: 'NEW ARRIVAL',
    featured: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Grey/Orange'],
    sku: 'MG-GLV-TBL-008',
  },
  {
    id: 'ironstep-touring-boots',
    name: 'Ironstep Touring Boots',
    category: 'Riding Boots',
    price: 2199,
    description:
      'Waterproof touring boots built for long-distance comfort. Reinforced ankle protection with walkable sole design.',
    features: ['Waterproof membrane', 'Ankle and heel reinforcement', 'Gear shift pad', 'Anti-slip oil-resistant sole', 'Reflective inserts'],
    images: [img('26732212'), img('27256442'), img('7045173')],
    featured: true,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black'],
    sku: 'MG-BOOT-IRN-009',
  },
  {
    id: 'stormguard-trousers',
    name: 'StormGuard Riding Trousers',
    category: 'Riding Trousers',
    price: 2399,
    description:
      'Reinforced riding trousers with hip and knee armour. Compatible with riding jackets for full-leg protection on any journey.',
    features: ['CE level 1 hip and knee armour', 'Abrasion-resistant textile shell', 'Waterproof inner membrane', 'Connection zipper for jacket', 'Adjustable leg length'],
    images: [img('4224291'), img('15732213'), img('28535668')],
    featured: false,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey'],
    sku: 'MG-TROS-STG-010',
  },
  {
    id: 'navigrip-phone-mount',
    name: 'Navigrip Motorcycle Phone Mount',
    category: 'Phone Mounts',
    price: 349,
    description:
      'Secure, vibration-damped phone mount for handlebar navigation. Keeps your phone visible and stable on rough roads.',
    features: ['Vibration dampening system', 'Universal fit 22mm–32mm bars', 'One-hand lock and release', '360-degree rotation', 'Shockproof silicone grips'],
    images: [img('12953565'), img('947407'), img('8981857')],
    featured: true,
    sizes: [],
    colors: ['Black'],
    sku: 'MG-ACC-NAV-011',
  },
  {
    id: 'expedition-tank-bag',
    name: 'Expedition Tank Bag',
    category: 'Tank Bags',
    price: 899,
    description:
      'Magnetic and strap-mount tank bag with a clear map pocket. Expandable storage for your daily riding essentials.',
    features: ['8L expandable to 12L capacity', 'Clear top window for phone/map', 'Magnetic and strap mounting', 'Waterproof rain cover included', 'Side mesh pockets'],
    images: [img('5711908'), img('2416871'), img('31453948')],
    featured: false,
    sizes: [],
    colors: ['Black'],
    sku: 'MG-ACC-TNK-012',
  },
  {
    id: 'fortis-disc-lock',
    name: 'Fortis Disc Brake Lock',
    category: 'Security Locks',
    price: 599,
    description:
      'Heavy-duty disc brake lock with 120dB alarm. A visible deterrent that activates on movement detection.',
    features: ['120dB motion-activated alarm', 'Hardened steel locking pin', 'Weatherproof casing', 'Battery operated (included)', 'Carry pouch and reminder cable'],
    images: [img('4808267'), img('9322161'), img('31410815')],
    badge: 'LIMITED',
    featured: true,
    sizes: [],
    colors: ['Orange', 'Black'],
    sku: 'MG-ACC-LOCK-013',
  },
  {
    id: 'aquafoil-rain-suit',
    name: 'AquaFoil Waterproof Rain Suit',
    category: 'Waterproof Gear',
    price: 699,
    description:
      'Packable, fully waterproof one-piece rain suit. Stay dry on unexpected downpours without bulk or restriction.',
    features: ['Fully sealed waterproof seams', 'Packable into included pouch', 'Reflective strips for visibility', 'Elasticated cuffs and collar', 'Heat-resistant leg panels'],
    images: [img('25956342'), img('12573643'), img('20077728')],
    featured: false,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Hi-Vis Yellow', 'Black'],
    sku: 'MG-WPR-AQU-014',
  },
  {
    id: 'clearview-visor-replacement',
    name: 'ClearView Replacement Visor',
    category: 'Helmet Visors',
    price: 449,
    description:
      'Optically correct replacement visor with anti-scratch and anti-fog coatings. Compatible with Apex Prime and Vortex GT helmets.',
    features: ['Anti-scratch hard coating', 'Anti-fog inner coating', 'UV protection', 'Quick-release mechanism compatible', 'Optically correct distortion-free view'],
    images: [img('9606843'), img('18213335'), img('9606752')],
    featured: false,
    sizes: [],
    colors: ['Clear', 'Smoke', 'Iridium'],
    sku: 'MG-VIS-CLV-015',
  },
  {
    id: 'coreflex-base-layer',
    name: 'CoreFlex Riding Base Layer',
    category: 'Base Layers',
    price: 549,
    description:
      'Moisture-wicking compression base layer designed for temperature regulation in summer and winter riding conditions.',
    features: ['Moisture-wicking fabric', 'Compression fit for muscle support', 'Flatlock seams to prevent chafing', 'Thermal regulation technology', 'UPF 50+ sun protection'],
    images: [img('8591164'), img('4224291'), img('10974455')],
    featured: false,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Grey'],
    sku: 'MG-BSLY-CFL-016',
  },
  {
    id: 'voyager-tail-bag',
    name: 'Voyager Tail Bag',
    category: 'Luggage',
    price: 1299,
    description:
      ' rugged 25L tail bag for touring riders. Roll-top closure and waterproof construction for gear that stays dry across any terrain.',
    features: ['25L waterproof storage', 'Roll-top closure', 'Mounts to pillion seat or rack', 'Reflective accents for safety', 'Daisy-chain attachment points'],
    images: [img('29936876'), img('33861296'), img('5711908')],
    featured: true,
    sizes: [],
    colors: ['Black'],
    sku: 'MG-LUG-VYG-017',
  },
  {
    id: 'moto-tool-kit',
    name: 'Rider Essential Tool Kit',
    category: 'General Accessories',
    price: 449,
    description:
      'Compact, on-bike tool kit with the essentials for roadside adjustments. Fits in most tank bags and tail bags.',
    features: ['12-piece metric tool set', 'Tyre pressure gauge', 'Puncture repair kit', 'Compact roll-up pouch', 'Spark plug wrench included'],
    images: [img('3855226'), img('35069740'), img('3855344')],
    badge: 'NEW ARRIVAL',
    featured: false,
    sizes: [],
    colors: ['Black'],
    sku: 'MG-ACC-TLK-018',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export function getProductsByCategorySlug(slug: string): Product[] {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return [];
  return products.filter((p) => category.subCategories.includes(p.category));
}
