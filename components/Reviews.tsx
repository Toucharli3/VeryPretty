import Stars from './Stars';
import { reviews, site } from '@/lib/site';

export default function Reviews() {
  return (
    <section id="avis" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="container-narrow">
        <div className="text-center">
          <p className="section-eyebrow">Elles en parlent</p>
          <h2 className="section-title">Ce que disent nos clientes</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars rating={5} />
            <span className="text-lg font-semibold text-plum">
              {site.rating.value}/5
            </span>
            <span className="text-plum/60">· clientèle fidèle</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-3xl border border-blush-100 bg-cream p-7 shadow-sm"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-plum/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 font-serif text-lg font-semibold text-rose-600">
                  {review.name.charAt(0)}
                </span>
                <span className="font-semibold text-plum">{review.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
