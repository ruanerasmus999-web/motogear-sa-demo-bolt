import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="flex items-center gap-1.5 text-xs text-ink-muted py-4" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 hover:text-accent transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {crumbs.map((crumb) => (
        <span key={crumb.label} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-ink-dim" />
          {crumb.path ? (
            <Link to={crumb.path} className="hover:text-accent transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-ink font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
