import { brands } from '@/lib/site';

export default function Brands() {
  return (
    <section id="marques" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="container-narrow text-center">
        <p className="section-eyebrow">Nos marques</p>
        <h2 className="section-title">Une sélection tendance et soignée</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-plum/70">
          Nous travaillons avec des marques que nous aimons, pour vous proposer
          des collections à la fois tendance et faciles à porter.
        </p>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand) => (
            <li
              key={brand}
              className="flex items-center justify-center rounded-2xl border border-blush-100 bg-cream px-6 py-8 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-md"
            >
              <span className="font-serif text-xl text-plum sm:text-2xl">
                {brand}
              </span>
            </li>
          ))}
          <li className="flex items-center justify-center rounded-2xl border border-dashed border-rose-200 bg-rose-50/50 px-6 py-8">
            <span className="text-base font-semibold text-rose-500">
              & bien d’autres…
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
