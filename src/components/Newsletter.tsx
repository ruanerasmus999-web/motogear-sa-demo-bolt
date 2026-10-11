import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Mail, Info } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('success');
    setMessage('Demo confirmation: Your subscription has been noted. No data was transmitted or stored.');
    setEmail('');
  };

  return (
    <section className="bg-base-charcoal border-y border-base-border">
      <div className="section-container py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">Stay in the Loop</h2>
          <p className="text-ink-muted text-sm mb-6">
            Get notified about new arrivals, seasonal riding gear guides and demo-exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              placeholder="Enter your email address"
              className="input-field flex-1 text-center sm:text-left"
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-4 flex items-start justify-center gap-2 text-sm text-success bg-success/10 rounded-lg p-3 max-w-md mx-auto animate-fade-in">
              <Check className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{message}</span>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-error bg-error/10 rounded-lg p-3 max-w-md mx-auto animate-fade-in">
              <span>{message}</span>
            </div>
          )}

          <p className="mt-4 flex items-center justify-center gap-1.5 text-2xs text-ink-dim">
            <Info className="w-3 h-3" />
            Demonstration form — no personal data is collected or stored.
          </p>

          <p className="mt-3 text-xs text-ink-dim">
            By subscribing you agree to receive demo notifications.{' '}
            <Link to="/shop" className="text-accent hover:underline">
              Browse the collection
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
