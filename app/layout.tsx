import type { Metadata } from 'next';
import { Playfair_Display, Nunito_Sans } from 'next/font/google';
import { site, openingHoursSchema } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Very Pretty — Prêt-à-porter féminin à Quimper',
  description:
    "Very Pretty, boutique de prêt-à-porter féminin au cœur de Quimper (19 Rue du Chapeau Rouge). Marques tendance, accueil chaleureux et conseils personnalisés. Poussez la porte !",
  keywords: [
    'prêt-à-porter Quimper',
    'boutique vêtements femme Quimper',
    'mode femme Quimper',
    'Very Pretty Quimper',
    'Street One Quimper',
    'vêtements Quimper centre-ville',
  ],
  authors: [{ name: 'Very Pretty' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: site.url,
    siteName: site.name,
    title: 'Very Pretty — Prêt-à-porter féminin à Quimper',
    description:
      "Boutique de prêt-à-porter féminin au cœur de Quimper. Marques tendance et accueil chaleureux.",
    images: [
      {
        // URL absolue (inclut le basePath) : une URL relative serait résolue
        // contre l'origine et perdrait le préfixe /VeryPretty.
        url: `${site.url}/images/og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Very Pretty — prêt-à-porter féminin à Quimper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Very Pretty — Prêt-à-porter féminin à Quimper',
    description:
      "Boutique de prêt-à-porter féminin au cœur de Quimper. Marques tendance et accueil chaleureux.",
    images: [`${site.url}/images/og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  '@id': `${site.url}/#store`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  image: `${site.url}/images/hero.jpg`,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Espèces, Carte de crédit',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.maps.lat,
    longitude: site.maps.lng,
  },
  openingHoursSpecification: openingHoursSchema,
  sameAs: [site.facebook, site.instagram],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${nunito.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
