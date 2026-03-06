import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

export const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-charcoal/10 bg-cream">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-6 sm:gap-6 sm:px-6 md:gap-8">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="text-sm font-medium text-charcoal transition-colors hover:text-forest"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};
