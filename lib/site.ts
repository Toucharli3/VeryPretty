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
  email: 'contact@veryprettyquimper.fr',
  facebook: 'https://www.facebook.com/veryprettyquimper',
  maps: {
    // Lien "itinéraire" et embed centrés sur l'adresse de la boutique
    query: '19 Rue du Chapeau Rouge, 29000 Quimper',
    embed:
      'https://www.google.com/maps?q=19%20Rue%20du%20Chapeau%20Rouge%2C%2029000%20Quimper&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=19+Rue+du+Chapeau+Rouge+29000+Quimper',
  },
  rating: {
    value: '4.5',
    count: '30',
  },
} as const;

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

export const brands = [
  'Street One',
  'Vanessa Wu',
  'Grace&Mila',
  'White Stuff',
  'Vero Moda',
  'Orfeo',
  'Geisha',
] as const;

export const reviews = [
  {
    name: 'Sophie L.',
    rating: 5,
    text: "Accueil vraiment chaleureux et de bons conseils. J'y trouve toujours des pièces qui me plaisent, avec de belles marques. Une boutique à recommander à Quimper !",
  },
  {
    name: 'Marie D.',
    rating: 5,
    text: "Une jolie sélection, tendance sans être hors de prix. La vendeuse prend le temps et donne des conseils sincères. On se sent bien dans cette boutique.",
  },
  {
    name: 'Céline P.',
    rating: 4,
    text: "Très belle boutique au centre de Quimper, avec des marques variées et de qualité. Ambiance conviviale, j'y reviens régulièrement.",
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
