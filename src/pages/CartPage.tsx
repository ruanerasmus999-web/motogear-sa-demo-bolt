import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatZAR } from '@/utils/format';
import Breadcrumbs from '@/components/Breadcrumbs';

const DELIVERY_FEE_DISPLAY = 'To be confirmed';

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="animate-fade-in">
        <div className="section-container py-6">
          <Breadcrumbs crumbs={[{ label: 'Cart' }]} />
        </div>
        <div className="section-container py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-base-card mb-6">
            <ShoppingBag className="w-10 h-10 text-ink-dim" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">Your Cart is Empty</h1>
          <p className="text-sm text-ink-muted mb-8 max-w-sm mx-auto">
            Looks like you haven&rsquo;t added any gear yet. Explore the collection and find your next ride essential.
          </p>
          <Link to="/shop" className="btn-primary group">
            Browse Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="section-container py-6">
        <Breadcrumbs crumbs={[{ label: 'Cart' }]} />
        <h1 className="text-3xl md:text-4xl font-extrabold text-ink mt-2 mb-6">
          Shopping Cart <span className="text-lg text-ink-muted font-normal">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="card p-4 flex gap-4"
              >
                <Link
                  to={`/product/${item.product.id}`}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-base-charcoal shrink-0"
                >
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1 flex flex-col min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-sm font-bold text-ink hover:text-accent transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-2xs text-ink-dim uppercase tracking-wider mt-0.5">{item.product.category}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5">
                    {item.selectedSize && (
                      <span className="text-xs text-ink-muted">Size: <span className="text-ink">{item.selectedSize}</span></span>
                    )}
                    {item.selectedColor && (
                      <span className="text-xs text-ink-muted">Colour: <span className="text-ink">{item.selectedColor}</span></span>
                    )}
                  </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                      className="p-1.5 rounded-lg text-ink-dim hover:text-error hover:bg-error/10 transition-colors shrink-0"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-3">
                    {/* Quantity selector */}
                    <div className="flex items-center border border-base-border rounded-lg bg-base-charcoal">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                        className="w-9 h-9 flex items-center justify-center text-ink-muted hover:text-accent transition-colors"
                        aria-label="Decrease quantity"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm font-bold text-ink" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                        className="w-9 h-9 flex items-center justify-center text-ink-muted hover:text-accent transition-colors"
                        aria-label="Increase quantity"
                        disabled={item.quantity >= 99}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-ink-dim">{formatZAR(item.product.price)} each</p>
                      <p className="text-base font-extrabold text-ink">{formatZAR(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4">
              <Link to="/shop" className="btn-ghost group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-xs font-medium text-ink-dim hover:text-error transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-lg font-extrabold text-ink mb-4">Order Summary</h2>

              <div className="space-y-3 pb-4 border-b border-base-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-muted">Subtotal ({totalItems} items)</span>
                  <span className="text-sm font-bold text-ink">{formatZAR(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-muted">Estimated delivery</span>
                  <span className="text-sm font-bold text-ink-muted">{DELIVERY_FEE_DISPLAY}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mb-1">
                <span className="text-base font-bold text-ink">Demo Total</span>
                <span className="text-2xl font-extrabold text-accent">{formatZAR(subtotal)}</span>
              </div>
              <p className="text-2xs text-ink-dim mb-5">
                Delivery calculated at enquiry. No payment is processed in this demo.
              </p>

              <Link to="/checkout" className="btn-primary w-full group mb-3">
                Proceed to Enquiry
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-start gap-2 text-2xs text-ink-dim bg-base-charcoal rounded-lg p-3">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" />
                <span>
                  This is a demonstration cart. No real orders are created and no payment details are requested.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
