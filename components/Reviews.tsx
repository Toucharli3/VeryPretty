import Stars from './Stars';
import { reviews, site } from '@/lib/site';

export default function Reviews() {
  return (
    <section id="avis" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="container-narrow">
        <div className="text-center">
          <p className="section-eyebrow">Elles en parlent</p>
          <h2 className="section-title">Ce que disent nos clientes</h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Stars rating={5} />
            <span className="text-lg font-semibold text-plum">
              {site.rating.value}/5
            </span>
            <span className="text-plum/60">
              · {site.rating.count} avis Google
            </span>
          </div>
          <a
            href={site.rating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-rose-600 underline-offset-4 hover:underline"
          >
            Voir les avis sur Google
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-3xl border border-blush-100 bg-cream p-7 shadow-sm"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-plum/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 11v2.8h4a4 4 0 11-1.2-4.6l2.1-2.1A7 7 0 1019 12c0-.4 0-.7-.1-1H12z"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-plum">{review.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-plum/50">
          Avis issus de la fiche Google de la boutique.
        </p>
      </div>
    </section>
  );
}
