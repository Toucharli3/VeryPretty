import { site } from '@/lib/site';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum text-cream/80">
      <div className="container-narrow py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-white">Very Pretty</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Prêt-à-porter féminin au cœur de Quimper. Une sélection tendance et
              un accueil chaleureux.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/50">
              La boutique
            </p>
            <address className="mt-3 space-y-1 text-sm not-italic text-cream/80">
              <p>{site.address.street}</p>
              <p>
                {site.address.postalCode} {site.address.city}
              </p>
              <p>
                <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                  {site.phone}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/50">
              Nous suivre
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Very Pretty sur Facebook"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Very Pretty sur Instagram"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {year} Very Pretty — Tous droits réservés.</p>
          <p>
            19 Rue du Chapeau Rouge, 29000 Quimper · Site vitrine ·{' '}
            <a href="#accueil" className="hover:text-white">
              Retour en haut
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
