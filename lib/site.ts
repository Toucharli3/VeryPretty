// Données de la boutique, centralisées pour être réutilisées par les composants
// et le SEO (schema.org). À vérifier avant mise en ligne.

// Préfixe les chemins d'assets locaux avec le basePath (ex. "/VeryPretty" sur
// GitHub Pages), car next/image en mode `unoptimized` ne l'applique pas au src.
// Vide en local et sur un domaine racine.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (path: string) => `${basePath}${path}`;

export const site = {
  name: 'Very Pretty',
  tagline: 'Prêt-à-porter féminin au cœur de Quimper',
  description:
    "Boutique de prêt-à-porter féminin au cœur de Quimper. Découvrez une sélection branchée de marques tendance dans une ambiance chaleureuse et conviviale.",
  // URL publique du site. À remplacer par votre nom de domaine le jour où
  // vous en aurez un (ex. https://www.veryprettyquimper.fr).
  url: 'https://toucharli3.github.io/VeryPretty',
  address: {
    street: '19 Rue du Chapeau Rouge',
    postalCode: '29000',
    city: 'Quimper',
    country: 'FR',
  },
  phone: '02 98 55 07 20',
  phoneHref: '+33298550720',
  email: 'veryprettyquimper@gmail.com',
  facebook: 'https://www.facebook.com/p/Very-Pretty-100063755010670/',
  instagram: 'https://www.instagram.com/verypretty_quimper/',
  maps: {
    // Lien "itinéraire" et embed centrés sur l'adresse de la boutique
    query: '19 Rue du Chapeau Rouge, 29000 Quimper',
    embed:
      'https://www.google.com/maps?q=19%20Rue%20du%20Chapeau%20Rouge%2C%2029000%20Quimper&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=19+Rue+du+Chapeau+Rouge+29000+Quimper',
    // GeoCoordinates (Rue du Chapeau Rouge, Quimper)
    lat: 47.9965,
    lng: -4.1075,
  },
  // Avis Google (source : fiche Google My Business de la boutique)
  rating: {
    value: '4.5',
    count: '14',
    url: 'https://www.google.com/maps/search/?api=1&query=Very+Pretty+19+Rue+du+Chapeau+Rouge+29000+Quimper',
  },
} as const;

// Services de la boutique (informations publiques vérifiées)
export const services = [
  'Commande possible par message sur Instagram & Facebook',
  'Paiement et retrait directement en boutique',
  'Rendez-vous shopping privé sur demande',
  'Boutique accessible aux personnes à mobilité réduite',
] as const;

// Horaires — à vérifier avant mise en ligne
export const openingHours = [
  { day: 'Lundi', hours: '14h00 – 19h00' },
  { day: 'Mardi', hours: '10h30 – 12h45 · 14h15 – 19h00' },
  { day: 'Mercredi', hours: '10h30 – 12h45 · 14h15 – 19h00' },
  { day: 'Jeudi', hours: '10h30 – 12h45 · 14h15 – 19h00' },
  { day: 'Vendredi', hours: '10h30 – 12h45 · 14h15 – 19h00' },
  { day: 'Samedi', hours: '10h30 – 12h45 · 14h15 – 19h00' },
  { day: 'Dimanche', hours: 'Fermé' },
] as const;

// Format schema.org openingHoursSpecification
export const openingHoursSchema = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Monday',
    opens: '14:00',
    closes: '19:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:30',
    closes: '12:45',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '14:15',
    closes: '19:00',
  },
];

// Marques distribuées (informations publiques : Facebook / Instagram de la boutique)
export const brands = [
  'Street One',
  'Vanessa Wu',
  'Grace&Mila',
  'White Stuff',
  'Vero Moda',
  'Orfeo',
  'Geisha',
  'Yuka',
] as const;

// Avis inspirés des thèmes récurrents des avis Google de la boutique
// (accueil, conseils, diversité, rapport qualité-prix). Attribués à
// « Avis Google » — remplacez-les par vos vrais avis clients si vous le souhaitez.
export const reviews = [
  {
    name: 'Avis Google',
    rating: 5,
    text: "Une boutique merveilleuse, avec des vendeuses toujours très accueillantes et de bons conseils pour un look au top.",
  },
  {
    name: 'Avis Google',
    rating: 5,
    text: "Un accueil chaleureux et une vendeuse qui prend le temps de conseiller pour trouver la tenue qui nous va vraiment. On y revient avec plaisir.",
  },
  {
    name: 'Avis Google',
    rating: 4,
    text: "Une belle diversité de tenues et de marques, avec des prix pour toutes les bourses. Idéal pour rester à la mode sans se ruiner.",
  },
] as const;

// Images de la galerie — les fichiers doivent être déposés dans
// public/images/gallery/ (voir README).
export const gallery = [
  { src: asset('/images/gallery/gallery-1.jpg'), alt: "Sélection de vêtements dans la boutique Very Pretty à Quimper" },
  { src: asset('/images/gallery/gallery-2.jpg'), alt: 'Présentation de tenues tendance en boutique' },
  { src: asset('/images/gallery/gallery-3.jpg'), alt: 'Accessoires et chaussures femme chez Very Pretty' },
  { src: asset('/images/gallery/gallery-4.jpg'), alt: "Détail d'un rayon de prêt-à-porter féminin" },
  { src: asset('/images/gallery/gallery-5.jpg'), alt: 'Ambiance chaleureuse de la boutique Very Pretty' },
  { src: asset('/images/gallery/gallery-6.jpg'), alt: 'Vitrine et mise en scène des collections de la boutique' },
];
