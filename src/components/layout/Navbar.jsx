import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { mainNav, siteConfig } from '../../config/siteConfig';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    cn(
      'relative px-1 py-2 font-display text-[0.92rem] font-semibold transition-colors',
      isActive ? 'text-night' : 'text-ink-soft hover:text-night',
      "after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-electric after:transition-transform after:origin-left",
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white transition-shadow',
        scrolled ? 'border-line shadow-[0_1px_12px_rgba(8,39,71,0.06)]' : 'border-transparent'
      )}
    >
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-night focus:px-4 focus:py-2 focus:text-white">
        Aller au contenu
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" icon={ArrowRight}>Nous contacter</Button>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-night hover:bg-paper lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={cn('fixed inset-x-0 bottom-0 top-16 z-40 bg-white lg:hidden', open ? 'block' : 'hidden')}
      >
        <nav aria-label="Navigation mobile" className="container-site flex h-full flex-col overflow-y-auto pb-8 pt-4">
          <ul className="divide-y divide-line border-b border-line">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn('flex items-center justify-between py-4 font-display text-lg font-semibold', isActive ? 'text-electric' : 'text-night')
                  }
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-40" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <Button to="/contact" size="lg" className="w-full" icon={ArrowRight}>Nous contacter</Button>
            <Button href={`tel:${siteConfig.contact.phoneHref}`} variant="outline" size="lg" className="w-full">
              <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.contact.phone}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
