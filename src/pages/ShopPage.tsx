import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown, PackageSearch } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { categories, products } from '@/data/catalog';
import type { ProductCategory } from '@/types';

const allCategories: ProductCategory[] = [
  'Full-face Helmets',
  'Open-face Helmets',
  'Touring Helmets',
  'Riding Jackets',
  'Second-Hand Jackets',
  'Second-Hand Waistcoats',
  'Leather Gloves',
  'Textile Gloves',
  'Riding Boots',
  'Riding Trousers',
  'Phone Mounts',
  'Tank Bags',
  'Security Locks',
  'Waterproof Gear',
  'Helmet Visors',
  'Base Layers',
  'Luggage',
  'General Accessories',
];

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

const sortLabels: Record<SortOption, string> = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  'name-asc': 'Name: A to Z',
};

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryParam = searchParams.get('category') || '';
  const qParam = searchParams.get('q') || '';
  const sortParam = (searchParams.get('sort') as SortOption) || 'featured';
  const featuredOnly = searchParams.get('featured') === 'true';

  useEffect(() => {
    setSearchInput(qParam);
  }, [qParam]);

  // Resolve which sub-categories belong to the selected category slug
  const activeSubCategories = useMemo(() => {
    if (!categoryParam) return null;
    const group = categories.find((c) => c.slug === categoryParam);
    if (group) return group.subCategories;
    return null;
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeSubCategories) {
      result = result.filter((p) => activeSubCategories.includes(p.category));
    }

    // Search filter
    if (qParam) {
      const query = qParam.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Featured filter
    if (featuredOnly) {
      result = result.filter((p) => p.featured);
    }

    // Sort
    switch (sortParam) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [activeSubCategories, qParam, sortParam, featuredOnly]);

  const activeCategoryLabel = useMemo(() => {
    if (!categoryParam) return null;
    return categories.find((c) => c.slug === categoryParam)?.label || null;
  }, [categoryParam]);

  const hasActiveFilters = Boolean(categoryParam || qParam || featuredOnly);

  const updateParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams({ q: searchInput.trim() || null });
    setFilterOpen(false);
  };

  const handleCategoryClick = (slug: string) => {
    updateParams({ category: slug || null });
    setFilterOpen(false);
  };

  const handleSortChange = (option: SortOption) => {
    updateParams({ sort: option });
    setSortOpen(false);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSearchInput('');
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="bg-base-charcoal border-b border-base-border">
        <div className="section-container py-6">
          <Breadcrumbs crumbs={[{ label: 'Shop' }]} />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-2">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-ink">
                {activeCategoryLabel || 'All Products'}
              </h1>
              <p className="text-sm text-ink-muted mt-2">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                {qParam && (
                  <> for &ldquo;<span className="text-ink">{qParam}</span>&rdquo;</>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Indicators */}
      {hasActiveFilters && (
        <div className="border-b border-base-border bg-base">
          <div className="section-container py-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-2xs font-bold uppercase tracking-wider text-ink-dim">Active filters:</span>
              {categoryParam && (
                <button
                  onClick={() => handleCategoryClick('')}
                  className="badge bg-accent/15 text-accent hover:bg-accent/25 transition-colors gap-1"
                >
                  {activeCategoryLabel}
                  <X className="w-3 h-3" />
                </button>
              )}
              {qParam && (
                <button
                  onClick={() => updateParams({ q: null })}
                  className="badge bg-accent/15 text-accent hover:bg-accent/25 transition-colors gap-1"
                >
                  Search: {qParam}
                  <X className="w-3 h-3" />
                </button>
              )}
              {featuredOnly && (
                <button
                  onClick={() => updateParams({ featured: null })}
                  className="badge bg-accent/15 text-accent hover:bg-accent/25 transition-colors gap-1"
                >
                  Featured only
                  <X className="w-3 h-3" />
                </button>
              )}
              <button
                onClick={clearFilters}
                className="text-2xs font-bold uppercase tracking-wider text-ink-muted hover:text-error transition-colors ml-1"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="section-container py-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-dim" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search products..."
              className="input-field pl-10"
              aria-label="Search products"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput('');
                  updateParams({ q: null });
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-dim hover:text-accent"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((s) => !s)}
              className="btn-secondary w-full sm:w-auto justify-between min-w-[200px]"
              aria-label="Sort products"
              aria-expanded={sortOpen}
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                {sortLabels[sortParam]}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 mt-2 w-full min-w-[200px] card p-1.5 z-20 animate-slide-down">
                  {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSortChange(option)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        sortParam === option
                          ? 'bg-accent/15 text-accent font-semibold'
                          : 'text-ink-muted hover:bg-base-surface hover:text-ink'
                      }`}
                    >
                      {sortLabels[option]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Category Filter Row - Desktop */}
        <div className="hidden md:flex items-center gap-2 flex-wrap mb-6">
          <button
            onClick={() => handleCategoryClick('')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !categoryParam
                ? 'bg-accent text-base'
                : 'bg-base-card text-ink-muted hover:text-ink border border-base-border'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                categoryParam === cat.slug
                  ? 'bg-accent text-base'
                  : 'bg-base-card text-ink-muted hover:text-ink border border-base-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => updateParams({ featured: featuredOnly ? null : 'true' })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              featuredOnly
                ? 'bg-accent text-base'
                : 'bg-base-card text-ink-muted hover:text-ink border border-base-border'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Category Filter Toggle - Mobile */}
        <button
          onClick={() => setFilterOpen((f) => !f)}
          className="md:hidden btn-secondary w-full mb-4"
          aria-expanded={filterOpen}
        >
          <SlidersHorizontal className="w-4 h-4" />
          {filterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Mobile Filter Panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 card p-4 animate-slide-down">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryClick('')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  !categoryParam ? 'bg-accent text-base' : 'bg-base-surface text-ink-muted border border-base-border'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    categoryParam === cat.slug ? 'bg-accent text-base' : 'bg-base-surface text-ink-muted border border-base-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
              <button
                onClick={() => updateParams({ featured: featuredOnly ? null : 'true' })}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  featuredOnly ? 'bg-accent text-base' : 'bg-base-surface text-ink-muted border border-base-border'
                }`}
              >
                Featured
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-base-card mb-4">
              <PackageSearch className="w-8 h-8 text-ink-dim" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">No products found</h3>
            <p className="text-sm text-ink-muted mb-6 max-w-sm mx-auto">
              Try adjusting your search or filters to find what you&rsquo;re looking for.
            </p>
            <button onClick={clearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
