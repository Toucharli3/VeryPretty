'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '#apropos', label: 'À propos' },
  { href: '#marques', label: 'Marques' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#avis', label: 'Avis' },
  { href: '#infos', label: 'Infos & Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-cream/90 shadow-sm backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-narrow flex items-center justify-between py-4">
        <a
          href="#accueil"
          className={`font-serif text-2xl font-semibold tracking-wide transition-colors ${
            scrolled || open ? 'text-plum' : 'text-white'
          }`}
        >
          Very Pretty
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-semibold transition-colors hover:text-rose-500 ${
                  scrolled ? 'text-plum' : 'text-white/90'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`tel:${site.phoneHref}`} className="btn-primary !px-5 !py-2.5 !text-sm">
              Nous trouver
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled || open ? 'text-plum' : 'text-white'}`}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-blush-100 bg-cream md:hidden">
          <ul className="container-narrow flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-semibold text-plum hover:bg-blush-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2">
              <a
                href={`tel:${site.phoneHref}`}
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Nous trouver
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
