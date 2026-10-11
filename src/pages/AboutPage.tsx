import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Zap, Target, Users, Bike } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

const heroImage = 'https://images.pexels.com/photos/17095636/pexels-photo-17095636.png?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop';
const storyImage = 'https://images.pexels.com/photos/35476265/pexels-photo-35476265.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';
const valuesImage = 'https://images.pexels.com/photos/29303188/pexels-photo-29303188.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

const values = [
  {
    icon: ShieldCheck,
    title: 'Protection First',
    desc: 'Every product in our collection is chosen with rider safety as the primary consideration.',
  },
  {
    icon: Heart,
    title: 'Rider Passion',
    desc: 'We ride too. That means we understand the difference between gear that works and gear that doesn\'t.',
  },
  {
    icon: Zap,
    title: 'Bold Standards',
    desc: 'We don\'t compromise on quality. If it wouldn\'t survive the road, it doesn\'t make the shelf.',
  },
  {
    icon: Target,
    title: 'Clear Guidance',
    desc: 'Honest product information and sizing advice so riders can choose with confidence.',
  },
];

const principles = [
  {
    icon: Users,
    title: 'Rider-First Approach',
    desc: 'Every decision starts with the rider\'s experience and safety in mind.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Over Quantity',
    desc: 'A curated selection means every product earns its place in the catalogue.',
  },
  {
    icon: Bike,
    title: 'Community-Minded',
    desc: 'Built for the South African riding community, from daily commuters to touring adventurers.',
  },
  {
    icon: Target,
    title: 'Continuous Improvement',
    desc: 'We listen to feedback and evolve our range to meet real rider needs.',
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="section-container py-6">
        <Breadcrumbs crumbs={[{ label: 'About' }]} />
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Motorcyclists on the open road" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-base-dark via-base-dark/70 to-base-dark/30" />
        </div>
        <div className="relative section-container">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4 animate-fade-up">
              About MOTOGEAR SA
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] mb-4 text-balance animate-fade-up">
              For Riders, <span className="text-accent">By Riders</span>
            </h1>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed animate-fade-up">
              Born from a passion for the ride and a commitment to quality gear that performs when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-base-border aspect-[4/3] order-2 lg:order-1">
            <img src={storyImage} alt="Adventure motorcyclist on mountain terrain" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 text-balance">
              The Journey Behind MOTOGEAR SA
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                MOTOGEAR SA began as an idea between riders who were tired of compromise. Too often, the choice was
                between gear that looked good and gear that actually protected. We believed riders deserved both.
              </p>
              <p>
                Our concept is simple: bring together a carefully curated range of helmets, jackets, gloves, boots and
                accessories that meet the demands of South African riding conditions — from city commutes to mountain
                passes to long-distance touring.
              </p>
              <p>
                We&rsquo;re not just a store. We&rsquo;re a destination for riders who take their gear as seriously as
                their machine. Every product we feature is chosen because it earns its place.
              </p>
              <p className="text-sm text-ink-dim italic">
                MOTOGEAR SA is a fictional demonstration brand created to showcase professional e-commerce web design
                capabilities. No real staff, shops, or trading history are represented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-base-charcoal border-y border-base-border">
        <div className="section-container py-16 md:py-24">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">Our Brand Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6 hover:border-accent/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">{value.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Principles */}
      <section className="section-container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2">How We Serve</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6 text-balance">
              Rider-Focused Service Principles
            </h2>
            <div className="space-y-5">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 shrink-0">
                    <principle.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink mb-1">{principle.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-base-border aspect-[4/3]">
            <img src={valuesImage} alt="Group of motorcyclists riding together" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base-charcoal border-t border-base-border">
        <div className="section-container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 text-balance">
            Ready to Gear Up?
          </h2>
          <p className="text-sm text-ink-muted mb-8 max-w-md mx-auto">
            Explore our full range of premium riding gear and accessories.
          </p>
          <Link to="/shop" className="btn-primary group">
            Shop the Collection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
