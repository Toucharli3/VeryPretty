'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

// Boutons de contact flottants (surtout utiles sur mobile).
// Apparaissent après un léger défilement pour ne pas gêner le hero.
export default function QuickContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Very Pretty sur Instagram"
        className="flex h-12 w-12 items-center justify-center self-end rounded-full bg-white text-rose-600 shadow-lg ring-1 ring-blush-100 transition hover:scale-105 hover:text-rose-700"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={`tel:${site.phoneHref}`}
        aria-label="Appeler la boutique"
        className="flex items-center gap-2 rounded-full bg-rose-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:scale-105 hover:bg-rose-600"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5c0-.6.4-1 1-1h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3c0 .6-.4 1-1 1A16 16 0 014 5z"
          />
        </svg>
        <span className="hidden sm:inline">Appeler</span>
      </a>
    </div>
  );
}
