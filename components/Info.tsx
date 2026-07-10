import { site, openingHours } from '@/lib/site';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0-.6.4-1 1-1h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3c0 .6-.4 1-1 1A16 16 0 014 5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-rose-500" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 7.5V12l3 2" />
    </svg>
  );
}

export default function Info() {
  return (
    <section id="infos" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="container-narrow">
        <div className="text-center">
          <p className="section-eyebrow">Infos pratiques</p>
          <h2 className="section-title">Venez nous voir</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-plum/70">
            Un conseil, une envie, une question&nbsp;? Passez en boutique ou
            appelez-nous, on sera ravies de vous accueillir.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Coordonnées & horaires */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-blush-100 bg-white p-7 shadow-sm">
              <h3 className="font-serif text-2xl text-plum">Nous contacter</h3>
              <ul className="mt-5 space-y-4 text-plum/80">
                <li className="flex items-start gap-3">
                  <PinIcon />
                  <a
                    href={site.maps.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-rose-600"
                  >
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon />
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-semibold transition hover:text-rose-600"
                  >
                    {site.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${site.phoneHref}`} className="btn-primary flex-1">
                  Appeler la boutique
                </a>
                <a
                  href={site.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1"
                >
                  Itinéraire
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-blush-100 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <ClockIcon />
                <h3 className="font-serif text-2xl text-plum">Horaires d’ouverture</h3>
              </div>
              <ul className="mt-5 divide-y divide-blush-50">
                {openingHours.map((row) => {
                  const closed = row.hours === 'Fermé';
                  return (
                    <li
                      key={row.day}
                      className="flex items-center justify-between gap-4 py-2.5"
                    >
                      <span className="font-semibold text-plum">{row.day}</span>
                      <span className={closed ? 'text-plum/40' : 'text-plum/80'}>
                        {row.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="min-h-[400px] overflow-hidden rounded-3xl border border-blush-100 shadow-sm">
            <iframe
              title={`Carte de la boutique ${site.name} à Quimper`}
              src={site.maps.embed}
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
