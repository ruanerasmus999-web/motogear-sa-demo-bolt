import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Headphones, PackageSearch, Cpu, Bell, BarChart3, MessageSquare, MapPin } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { categories, products } from '@/data/catalog';

const heroImage = 'https://images.pexels.com/photos/10939877/pexels-photo-10939877.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
const promoImage = 'https://images.pexels.com/photos/13297316/pexels-photo-13297316.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop';
const storyImage = 'https://images.pexels.com/photos/5015285/pexels-photo-5015285.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Quality Gear Selection',
    desc: 'Every product is chosen for its protection, durability and rider value.',
  },
  {
    icon: Headphones,
    title: 'Rider-First Service',
    desc: 'Guidance and support from people who understand what it means to ride.',
  },
  {
    icon: Truck,
    title: 'Delivery Across SA',
    desc: 'Courier options to major centres and regional areas throughout South Africa.',
  },
  {
    icon: PackageSearch,
    title: 'Helpful Product Guidance',
    desc: 'Clear sizing, features and comparisons to help you choose with confidence.',
  },
];

const futureCapabilities = [
  { icon: Bell, label: 'Automated Order Notifications' },
  { icon: PackageSearch, label: 'Stock-Level Alerts' },
  { icon: Cpu, label: 'Smart Product Recommendations' },
  { icon: MessageSquare, label: 'Customer Enquiry Assistance' },
  { icon: MapPin, label: 'Delivery-Status Updates' },
  { icon: BarChart3, label: 'Sales Reporting' },
];

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Motorcyclist riding at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-base-dark via-base-dark/80 to-base-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-base-dark via-transparent to-base-dark/50" />
        </div>

        <div className="relative section-container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4 animate-fade-up">
              Your Ride. Your Rules.
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-ink leading-[1.05] mb-6 text-balance animate-fade-up">
              GEAR UP.
              <br />
              <span className="text-accent">RIDE FREE.</span>
            </h1>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-lg mb-8 animate-fade-up">
              Premium riding gear and essential motorcycle accessories for riders who demand more from every journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
              <Link to="/shop" className="btn-primary group">
                Shop the Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/shop?category=helmets" className="btn-secondary">
                Explore Riding Gear
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-dim">
          <span className="text-2xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-ink-dim to-transparent" />
        </div>
      </section>

      {/* Category Showcase */}
      <section className="section-container py-16 md:py-24">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">Browse</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Shop by Category</h2>
          </div>
          <Link to="/shop" className="hidden sm:flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-accent transition-colors">
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-base-border hover:border-accent/40 transition-all"
            >
              <img src={cat.image} alt={cat.label} loading="lazy" className="w-full h-full object-cover image-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-dark via-base-dark/40 to-transparent" />
              <div className="absolute inset-0 flex items-end p-3 md:p-4">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-ink group-hover:text-accent transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-2xs text-ink-muted mt-0.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop now <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-base-charcoal border-y border-base-border">
        <div className="section-container py-16 md:py-24">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">Featured</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Top Picks for Riders</h2>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-accent transition-colors">
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link to="/shop" className="btn-secondary">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Campaign Banner */}
      <section className="section-container py-16 md:py-24">
        <div className="relative rounded-2xl overflow-hidden border border-base-border">
          <div className="absolute inset-0">
            <img src={promoImage} alt="Motorcycle on scenic road" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-base-dark via-base-dark/85 to-base-dark/30" />
          </div>
          <div className="relative p-8 md:p-12 lg:p-16 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink mb-4 text-balance">
              Ready for Every Road.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed mb-6 max-w-md">
              Discover practical essentials for daily commutes, weekend escapes and long-distance touring.
            </p>
            <Link to="/shop?category=accessories" className="btn-primary group">
              Explore Accessories
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust and Service Benefits */}
      <section className="bg-base-charcoal border-y border-base-border">
        <div className="section-container py-16 md:py-20">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">Why MotoGear SA</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Built for Riders, Backed by Service</h2>
            <p className="text-sm text-ink-muted mt-3 max-w-xl mx-auto">
              Proposed brand values and demo messaging for the MOTOGEAR SA demonstration experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card p-6 text-center hover:border-accent/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-ink mb-2">{benefit.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="section-container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-base-border aspect-[4/3]">
            <img src={storyImage} alt="Motorcycle at scenic viewpoint" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 text-balance">
              Helping Riders Prepare for the Journey
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              MOTOGEAR SA was created with a simple idea: every rider deserves gear they can trust, from the first
              commute to the most ambitious adventure. We bring together carefully selected helmets, apparel and
              accessories under one destination.
            </p>
            <p className="text-ink-muted leading-relaxed mb-6">
              Whether you ride to work, escape on weekends, or chase horizons across South Africa, our collection is
              built to help you gear up and ride free.
            </p>
            <Link to="/about" className="btn-secondary group">
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI & Automation Readiness */}
      <section className="bg-base-charcoal border-y border-base-border">
        <div className="section-container py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">Future-Ready</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-3">Built for Smarter Operations</h2>
            <p className="text-sm text-ink-muted max-w-xl mx-auto">
              The MOTOGEAR SA platform is designed to support these proposed future capabilities as the business grows.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {futureCapabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-3 rounded-xl border border-base-border bg-base-card p-4 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 shrink-0">
                  <cap.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-medium text-ink-muted">{cap.label}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-2xs text-ink-dim mt-6">
            Proposed future capabilities — not active production features.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
