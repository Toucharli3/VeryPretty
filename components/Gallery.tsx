import Image from 'next/image';
import { gallery } from '@/lib/site';

export default function Gallery() {
  return (
    <section id="galerie" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="container-narrow">
        <div className="text-center">
          <p className="section-eyebrow">La galerie</p>
          <h2 className="section-title">Un aperçu de la boutique</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-plum/70">
            Quelques images de nos rayons et de nos coups de cœur. Le plus beau,
            c’est de venir le voir de vos yeux&nbsp;!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {gallery.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-blush-100 to-rose-100 shadow-sm ${
                i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={i === 0 ? 'aspect-square lg:aspect-[4/3]' : 'aspect-square'}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
