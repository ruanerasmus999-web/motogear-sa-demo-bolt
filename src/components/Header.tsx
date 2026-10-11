import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Zap } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Helmets', path: '/shop?category=helmets' },
  { label: 'Jackets', path: '/shop?category=riding-jackets' },
  { label: 'Accessories', path: '/shop?category=accessories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    const [basePath] = path.split('?');
    return location.pathname === basePath && (path.includes('?') ? location.search.includes(path.split('?')[1].split('=')[1]) : true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-accent text-base text-center py-2 text-xs font-bold uppercase tracking-widest">
        <p>Built for the Ride. Gear Up with MOTOGEAR SA.</p>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-base/95 backdrop-blur-md border-b border-base-border shadow-lg'
            : 'bg-base border-b border-base-border/50'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0 group" aria-label="MOTOGEAR SA home">
              <div className="flex items-center justify-center w-9 h-9 bg-accent rounded-lg transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 text-base" fill="currentColor" />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-extrabold tracking-tight text-ink">MOTOGEAR</span>
                <span className="block text-2xs font-bold tracking-[0.2em] text-accent">SA</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const [basePath, query] = link.path.split('?');
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={basePath + (query ? `?${query}` : '')}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                      active ? 'text-accent' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                    {active && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setSearchOpen((s) => !s)}
                className="p-2 rounded-lg text-ink-muted hover:text-accent hover:bg-base-card transition-colors"
                aria-label="Search products"
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>

              <Link
                to="/cart"
                className="relative p-2 rounded-lg text-ink-muted hover:text-accent hover:bg-base-card transition-colors"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-accent text-base text-2xs font-bold rounded-full animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg text-ink-muted hover:text-accent hover:bg-base-card transition-colors lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Dropdown */}
          {searchOpen && (
            <div className="absolute left-0 right-0 top-full bg-base-charcoal border-b border-base-border shadow-xl animate-slide-down">
              <div className="section-container py-4">
                <form onSubmit={handleSearch} className="flex gap-3">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search helmets, jackets, gloves, accessories..."
                    className="input-field flex-1"
                    aria-label="Search products"
                  />
                  <button type="submit" className="btn-primary">
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-base-dark/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 max-w-[80vw] bg-base-charcoal border-l border-base-border animate-slide-down flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-base-border">
              <span className="text-sm font-bold uppercase tracking-wider text-ink">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-ink-muted hover:text-accent"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              {navLinks.map((link) => {
                const [basePath, query] = link.path.split('?');
                return (
                  <Link
                    key={link.path}
                    to={basePath + (query ? `?${query}` : '')}
                    className={`block py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path) ? 'text-accent bg-accent/10' : 'text-ink-muted hover:text-ink hover:bg-base-card'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-base-border">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="input-field text-sm"
                  aria-label="Search products"
                />
                <button type="submit" className="btn-primary px-3" aria-label="Search">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
