import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../config/routes';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = routes;

  const navLinkClass = (path: string, isMobile = false) => {
    const isActive = location.pathname === path;
    const base = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-earth text-cream hover:bg-forest'
        : 'text-charcoal hover:text-forest hover:bg-charcoal/5'
    }`;
    return isMobile ? `${base} w-full` : base;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal/10 bg-cream/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-4 sm:px-6">
        {/* Desktop: centered nav links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((route) => (
            <Link key={route.path} to={route.path} className={navLinkClass(route.path)}>
              {route.label}
            </Link>
          ))}
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute right-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-charcoal transition-colors hover:bg-charcoal/5 md:hidden"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-charcoal/10 bg-cream shadow-lg md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => setMobileMenuOpen(false)}
                className={navLinkClass(route.path, true)}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
