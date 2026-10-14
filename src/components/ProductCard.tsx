import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import type { Product } from '@/types';
import { formatZAR } from '@/utils/format';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const badgeStyles: Record<string, string> = {
  'BEST SELLER': 'bg-accent text-base',
  'NEW ARRIVAL': 'bg-success text-base',
  LIMITED: 'bg-warning text-base',
  SALE: 'bg-error text-base',
  'PRE-OWNED': 'bg-warning text-base',
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.sizes?.[0], product.colors?.[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group card overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-base-charcoal">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover image-zoom"
        />
        {/* Badge */}
        {product.badge && (
          <span className={`badge absolute top-3 left-3 z-10 ${badgeStyles[product.badge] || 'bg-accent text-base'}`}>
            {product.badge}
          </span>
        )}
        {/* Hover overlay actions */}
        <div className="absolute inset-0 bg-base-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-lg bg-base/90 px-4 py-2.5 text-sm font-bold text-ink hover:bg-accent hover:text-base transition-colors">
            <Eye className="w-4 h-4" />
            View
          </span>
        </div>
        {/* Sale price indicator */}
        {product.oldPrice && (
          <span className="absolute top-3 right-3 rounded-md bg-base/80 px-2 py-1 text-2xs font-bold text-accent">
            SAVE {formatZAR(product.oldPrice - product.price)}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-2xs font-semibold uppercase tracking-wider text-accent mb-1">{product.category}</p>
        <h3 className="text-sm font-bold text-ink leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-ink">{formatZAR(product.price)}</span>
            {product.oldPrice && (
              <span className="text-xs text-ink-dim line-through">{formatZAR(product.oldPrice)}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-base-surface text-ink-muted hover:bg-accent hover:text-base transition-colors shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
