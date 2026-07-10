import Image from 'next/image';
import { asset, brands, site } from '@/lib/site';

export default function About() {
  return (
    <section id="apropos" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blush-100 to-rose-100 shadow-xl">
          <Image
            src={asset('/images/about.jpg')}
            alt="Intérieur chaleureux de la boutique Very Pretty à Quimper"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="section-eyebrow">La boutique</p>
          <h2 className="section-title">Un cocon mode au cœur de Quimper</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-plum/80">
            <p>
              Poussez la porte de Very Pretty et laissez-vous accueillir comme
              une amie. Ici, on prend le temps de vous conseiller, de dénicher la
              pièce qui vous ressemble et de vous faire passer un vrai bon
              moment.
            </p>
            <p>
              Nichée au 19&nbsp;Rue du Chapeau Rouge, notre boutique réunit une
              sélection branchée de prêt-à-porter féminin&nbsp;: des basiques que
              l’on adore aux pièces plus affirmées, pour toutes les envies et
              toutes les silhouettes.
            </p>
            <p>
              Une ambiance conviviale, des conseils sincères et des marques que
              l’on choisit avec soin&nbsp;: c’est tout l’esprit Very Pretty.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-blush-100 pt-8">
            <div>
              <dt className="text-sm text-plum/60">Note Google</dt>
              <dd className="mt-1 font-serif text-2xl text-rose-500">{site.rating.value}/5</dd>
            </div>
            <div>
              <dt className="text-sm text-plum/60">Marques</dt>
              <dd className="mt-1 font-serif text-2xl text-rose-500">{brands.length}+</dd>
            </div>
            <div>
              <dt className="text-sm text-plum/60">Au cœur de</dt>
              <dd className="mt-1 font-serif text-2xl text-rose-500">Quimper</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
