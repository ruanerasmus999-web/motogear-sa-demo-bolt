import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Check, ChevronRight, ArrowLeft, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/catalog';
import { formatZAR } from '@/utils/format';
import { useCart } from '@/context/CartContext';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';

const badgeStyles: Record<string, string> = {
  'BEST SELLER': 'bg-accent text-base',
  'NEW ARRIVAL': 'bg-success text-base',
  LIMITED: 'bg-warning text-base',
  SALE: 'bg-error text-base',
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = id ? getProductById(id) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product?.colors?.[0]);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="text-2xl font-bold text-ink mb-4">Product Not Found</h1>
        <p className="text-ink-muted mb-6">The product you&rsquo;re looking for doesn&rsquo;t exist or has been removed.</p>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBuyNow = () => {
    addItem(product, quantity, selectedSize, selectedColor);
    navigate('/cart');
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => Math.min(99, q + 1));

  return (
    <div className="animate-fade-in">
      <div className="section-container py-6">
        <Breadcrumbs
          crumbs={[
            { label: 'Shop', path: '/shop' },
            { label: product.category, path: '/shop' },
            { label: product.name },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-4">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-base-border bg-base-charcoal">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className={`badge absolute top-4 left-4 ${badgeStyles[product.badge] || 'bg-accent text-base'}`}>
                  {product.badge}
                </span>
              )}
              {product.oldPrice && (
                <span className="absolute top-4 right-4 rounded-md bg-base/80 px-2.5 py-1 text-xs font-bold text-accent">
                  SAVE {formatZAR(product.oldPrice - product.price)}
                </span>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors shrink-0 ${
                      activeImage === index ? 'border-accent' : 'border-base-border hover:border-ink-dim'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-ink leading-tight mb-3">{product.name}</h1>
            <p className="text-2xs font-medium text-ink-dim uppercase tracking-wider mb-4">
              Product Code: <span className="text-ink-muted">{product.sku}</span>
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-extrabold text-ink">{formatZAR(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-ink-dim line-through">{formatZAR(product.oldPrice)}</span>
              )}
            </div>

            <p className="text-sm text-ink-muted leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-ink mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-5">
                <label className="text-sm font-bold text-ink mb-2 block">
                  Size <span className="text-ink-dim font-normal">(demo availability)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                        selectedSize === size
                          ? 'bg-accent text-base border-accent'
                          : 'bg-base-card text-ink-muted border-base-border hover:border-accent hover:text-ink'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-5">
                <label className="text-sm font-bold text-ink mb-2 block">
                  Colour <span className="text-ink-dim font-normal">(demo availability)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                        selectedColor === color
                          ? 'bg-accent text-base border-accent'
                          : 'bg-base-card text-ink-muted border-base-border hover:border-accent hover:text-ink'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center border border-base-border rounded-lg bg-base-card shrink-0">
                <button
                  onClick={decreaseQty}
                  className="w-11 h-11 flex items-center justify-center text-ink-muted hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-ink" aria-live="polite">
                  {quantity}
                </span>
                <button
                  onClick={increaseQty}
                  className="w-11 h-11 flex items-center justify-center text-ink-muted hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`btn-primary flex-1 ${added ? 'bg-success hover:bg-success' : ''}`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <button onClick={handleBuyNow} className="btn-secondary w-full mb-6">
              Buy Now
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-base-border">
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck className="w-5 h-5 text-accent" />
                <span className="text-2xs text-ink-muted">Delivery across SA</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-2xs text-ink-muted">Quality gear</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <RotateCcw className="w-5 h-5 text-accent" />
                <span className="text-2xs text-ink-muted">Demo returns</span>
              </div>
            </div>

            <p className="text-2xs text-ink-dim mt-4 text-center">
              Demonstration product — availability and specifications are illustrative only.
            </p>
          </div>
        </div>

        {/* Back to Shop */}
        <div className="mt-10">
          <Link to="/shop" className="btn-ghost group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Shop
          </Link>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-base-border">
            <h2 className="text-2xl font-extrabold text-ink mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
