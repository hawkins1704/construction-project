import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../ScrollToTop';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
