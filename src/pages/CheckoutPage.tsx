import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Info, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatZAR } from '@/utils/format';
import Breadcrumbs from '@/components/Breadcrumbs';

// Configurable placeholder — replace with a real number when available
const WHATSAPP_PLACEHOLDER_NUMBER = '+27 XX XXX XXXX';

export default function CheckoutPage() {
  const { items, subtotal, totalItems, clearCart } = useCart();
  const [enquirySent, setEnquirySent] = useState(false);

  if (items.length === 0 && !enquirySent) {
    return (
      <div className="animate-fade-in">
        <div className="section-container py-6">
          <Breadcrumbs crumbs={[{ label: 'Cart', path: '/cart' }, { label: 'Enquiry' }]} />
        </div>
        <div className="section-container py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-base-card mb-6">
            <ShoppingBag className="w-10 h-10 text-ink-dim" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">Nothing to Enquire About</h1>
          <p className="text-sm text-ink-muted mb-8 max-w-sm mx-auto">
            Your cart is empty. Add some products first, then come back to review your demo enquiry.
          </p>
          <Link to="/shop" className="btn-primary group">
            Browse Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppEnquiry = () => {
    // Build a demo enquiry message — but since the number is a placeholder, show demo message
    const messageLines = items.map(
      (item) =>
        `• ${item.product.name}${item.selectedSize ? ` (Size: ${item.selectedSize})` : ''}${
          item.selectedColor ? ` (Colour: ${item.selectedColor})` : ''
        } x${item.quantity} — ${formatZAR(item.product.price * item.quantity)}`
    );
    const fullMessage = `Hello MOTOGEAR SA, I'd like to enquire about:\n\n${messageLines.join('\n')}\n\nSubtotal: ${formatZAR(subtotal)}`;

    // Since the placeholder number is not valid, we show the demo message
    setEnquirySent(true);
    // Log for demo transparency
    console.log('Demo WhatsApp enquiry (not sent):', { to: WHATSAPP_PLACEHOLDER_NUMBER, message: fullMessage });
  };

  if (enquirySent) {
    return (
      <div className="animate-fade-in">
        <div className="section-container py-6">
          <Breadcrumbs crumbs={[{ label: 'Cart', path: '/cart' }, { label: 'Enquiry' }]} />
        </div>
        <div className="section-container py-16 md:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/15 mb-6">
              <Check className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">Demo Enquiry Prepared</h1>
            <div className="card p-6 text-left mt-6">
              <div className="flex items-start gap-3 mb-4">
                <Info className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-ink leading-relaxed">
                    This is a <strong>demonstration only</strong>. Your enquiry summary has been prepared but
                    <strong> no message was sent</strong> because a valid WhatsApp number has not been configured.
                  </p>
                </div>
              </div>
              <div className="bg-base-charcoal rounded-lg p-4 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-2">Enquiry Summary</p>
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between text-sm">
                    <span className="text-ink-muted">
                      {item.product.name} {item.selectedSize && `(${item.selectedSize})`} ×{item.quantity}
                    </span>
                    <span className="text-ink font-medium">{formatZAR(item.product.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-base-border flex justify-between">
                  <span className="text-sm font-bold text-ink">Subtotal</span>
                  <span className="text-sm font-extrabold text-accent">{formatZAR(subtotal)}</span>
                </div>
              </div>
              <p className="text-xs text-ink-dim mt-4">
                To enable real WhatsApp enquiries, replace the placeholder number
                <code className="text-accent mx-1">{WHATSAPP_PLACEHOLDER_NUMBER}</code>
                in the checkout configuration with a valid South African WhatsApp Business number.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/shop" className="btn-primary group">
                Continue Shopping
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => {
                  clearCart();
                  setEnquirySent(false);
                }}
                className="btn-secondary"
              >
                Clear & Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="section-container py-6">
        <Breadcrumbs crumbs={[{ label: 'Cart', path: '/cart' }, { label: 'Enquiry' }]} />
        <div className="flex items-center gap-3 mt-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">Demonstration Enquiry</h1>
          <span className="badge bg-warning/15 text-warning">Demo</span>
        </div>
        <p className="text-sm text-ink-muted mt-2">
          Review your order summary below. This is a demonstration — no real order is created and no payment is processed.
        </p>
      </div>

      <div className="section-container pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-3">
            <div className="card overflow-hidden">
              <div className="px-5 py-3 border-b border-base-border">
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink">Order Items ({totalItems})</h2>
              </div>
              <div className="divide-y divide-base-border">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-base-charcoal shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-ink line-clamp-1">{item.product.name}</p>
                      <p className="text-2xs text-ink-dim uppercase tracking-wider mt-0.5">{item.product.category}</p>
                      <div className="flex flex-wrap gap-x-3 mt-1">
                        {item.selectedSize && <span className="text-xs text-ink-muted">Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span className="text-xs text-ink-muted">Colour: {item.selectedColor}</span>}
                        <span className="text-xs text-ink-muted">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-ink-dim">{formatZAR(item.product.price)}</p>
                      <p className="text-sm font-extrabold text-ink">{formatZAR(item.product.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/cart" className="btn-ghost group inline-flex">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Edit Cart
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-lg font-extrabold text-ink mb-4">Summary</h2>

              <div className="space-y-3 pb-4 border-b border-base-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-muted">Subtotal</span>
                  <span className="text-sm font-bold text-ink">{formatZAR(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-muted">Delivery</span>
                  <span className="text-sm font-bold text-ink-muted">To be confirmed</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mb-1">
                <span className="text-base font-bold text-ink">Demo Total</span>
                <span className="text-2xl font-extrabold text-accent">{formatZAR(subtotal)}</span>
              </div>

              <button onClick={handleWhatsAppEnquiry} className="btn-primary w-full mt-5 group">
                <MessageCircle className="w-4 h-4" />
                Send WhatsApp Enquiry
              </button>

              <div className="flex items-start gap-2 text-2xs text-ink-dim bg-base-charcoal rounded-lg p-3 mt-4">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" />
                <span>
                  Demo only: No real enquiry is sent. A valid WhatsApp number must be configured to enable live enquiries.
                  No payment details, ID numbers or physical addresses are requested.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
