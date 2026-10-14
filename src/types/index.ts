export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  description: string;
  features: string[];
  images: string[];
  badge?: 'BEST SELLER' | 'NEW ARRIVAL' | 'LIMITED' | 'SALE' | 'PRE-OWNED';
  featured: boolean;
  sizes?: string[];
  colors?: string[];
  sku: string;
}

export type ProductCategory =
  | 'Full-face Helmets'
  | 'Open-face Helmets'
  | 'Touring Helmets'
  | 'Riding Jackets'
  | 'Leather Gloves'
  | 'Textile Gloves'
  | 'Riding Boots'
  | 'Riding Trousers'
  | 'Phone Mounts'
  | 'Tank Bags'
  | 'Security Locks'
  | 'Waterproof Gear'
  | 'Helmet Visors'
  | 'Base Layers'
  | 'Luggage'
  | 'General Accessories'
  | 'Second-Hand Jackets'
  | 'Second-Hand Waistcoats';

export interface CategoryGroup {
  label: string;
  slug: string;
  image: string;
  subCategories: ProductCategory[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity: number, size?: string, color?: string) => void;
  removeItem: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}
