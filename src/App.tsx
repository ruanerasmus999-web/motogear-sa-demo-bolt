import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import AboutPage from '@/pages/AboutPage';

function ContactPage() {
  return (
    <div className="section-container py-16 md:py-24 animate-fade-in">
      <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-3">Get in Touch</p>
      <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Contact MOTOGEAR SA</h1>
      <p className="text-ink-muted leading-relaxed max-w-2xl mb-6">
        This is a demonstration storefront. Contact details and enquiry channels will be added when the
        real shop information is confirmed.
      </p>
      <div className="card p-5 max-w-xl mb-8">
        <p className="text-sm font-semibold text-ink mb-2">Demo notice</p>
        <p className="text-sm text-ink-muted">
          No real contact number, address, or customer enquiry service has been configured yet.
        </p>
      </div>
      <Link to="/shop" className="btn-primary">Browse the Collection</Link>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="section-container py-16 md:py-24 text-center animate-fade-in">
      <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-3">404 — Page Not Found</p>
      <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">Looks like you took a wrong turn.</h1>
      <p className="text-ink-muted mb-8">The page you’re looking for isn’t available in this demo.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-base text-ink flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
