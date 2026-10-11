import { Link } from 'react-router-dom';
import { Zap, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const shopLinks = [
  { label: 'All Products', path: '/shop' },
  { label: 'Helmets', path: '/shop?category=helmets' },
  { label: 'Riding Jackets', path: '/shop?category=riding-jackets' },
  { label: 'Gloves', path: '/shop?category=gloves' },
  { label: 'Riding Boots', path: '/shop?category=riding-boots' },
  { label: 'Accessories', path: '/shop?category=accessories' },
];

const serviceLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Shopping Cart', path: '/cart' },
  { label: 'Shop Collection', path: '/shop' },
];

export default function Footer() {
  return (
    <footer className="bg-base-dark border-t border-base-border mt-auto">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group" aria-label="MOTOGEAR SA home">
              <div className="flex items-center justify-center w-9 h-9 bg-accent rounded-lg transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 text-base" fill="currentColor" />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-extrabold tracking-tight text-ink">MOTOGEAR</span>
                <span className="block text-2xs font-bold tracking-[0.2em] text-accent">SA</span>
              </div>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              Premium riding gear and essential motorcycle accessories for riders who demand more from every journey.
            </p>
            <p className="text-xs text-accent font-bold tracking-wider">GEAR UP. RIDE FREE.</p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-ink-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink mb-4">Customer Service</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-ink-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Demo address placeholder<br />South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-muted">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+27 XX XXX XXXX (demo)</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-muted">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>hello@motogear-demo.co.za</span>
              </li>
            </ul>
            {/* Social placeholders */}
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <span
                  key={i}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-base-border bg-base-card text-ink-muted hover:text-accent hover:border-accent transition-colors cursor-pointer"
                  aria-label="Demo social media link"
                >
                  <Icon className="w-4 h-4" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-base-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-xs text-ink-dim">© {new Date().getFullYear()} MOTOGEAR SA. All rights reserved.</p>
            <span className="hidden md:inline text-ink-dim">|</span>
            <p className="text-xs text-ink-dim">Demo website for demonstration purposes only.</p>
          </div>
          <p className="text-xs text-ink-dim">
            Built by <span className="text-ink-muted font-medium">SI WebWorks</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
