import Image from 'next/image';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Fond dégradé pastel visible tant que la photo n'est pas déposée */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-200 via-rose-100 to-sand" />

      {/* Photo de la vitrine / devanture (format large) */}
      <Image
        src="/images/hero.jpg"
        alt="Devanture de la boutique Very Pretty, 19 Rue du Chapeau Rouge à Quimper"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Voile pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/25 to-plum/40" />

      <div className="container-narrow relative z-10 flex min-h-[100svh] flex-col items-start justify-center pt-20 text-white">
        <p className="section-eyebrow !text-rose-100">Quimper · Centre-ville</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
          Very Pretty
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">
          {site.tagline}. Une sélection tendance et un accueil chaleureux,
          au cœur de Quimper.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#infos" className="btn-primary">
            Nous trouver
          </a>
          <a href="#marques" className="btn-secondary !text-white !border-white/60 !bg-white/10 hover:!bg-white/20">
            Découvrir les marques
          </a>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <span className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </span>
      </div>
    </section>
  );
}
