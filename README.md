# Very Pretty — Site vitrine

Site vitrine **one-page**, mobile-first, pour la boutique de prêt-à-porter
féminin **Very Pretty** (19 Rue du Chapeau Rouge, 29000 Quimper).

Objectif : donner envie de pousser la porte de la boutique et faciliter la
prise de contact.

## Stack technique

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (palette pastel, typo serif chic + sans-serif lisible)
- Polices via `next/font` (Playfair Display + Nunito Sans)
- SEO local : `title`/`meta` optimisés « prêt-à-porter Quimper », données
  structurées **schema.org `ClothingStore`**, `sitemap.xml` et `robots.txt`
- Images optimisées via `next/image` (lazy loading, AVIF/WebP)
- Déploiement **Vercel**

## Structure de la page

1. **Hero** — nom, accroche, photo de la vitrine en fond, CTA « Nous trouver »
2. **À propos** — ton chaleureux, ambiance boutique
3. **Marques** — Street One, Vanessa Wu, Grace&Mila, White Stuff, Vero Moda,
   Orfeo, Geisha
4. **Galerie** — grille de photos
5. **Avis clients** — témoignages avec étoiles
6. **Infos pratiques** — adresse, téléphone, horaires, carte Google Maps
7. **Footer** — Facebook, mentions

## Démarrage en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres scripts : `npm run build` (build de production), `npm run start`
(serveur de production), `npm run lint`.

## 📸 Images à fournir — IMPORTANT

Les fichiers image **ne sont pas inclus** dans le dépôt : déposez vos propres
photos aux emplacements et noms **exacts** ci-dessous. Le code les référence
déjà. Tant qu'une image est absente, un dégradé pastel s'affiche à sa place
(le site reste présentable).

| Fichier | Chemin exact | Usage | Format conseillé |
| --- | --- | --- | --- |
| `hero.jpg` | `public/images/hero.jpg` | Fond du bandeau d'accueil (vitrine / devanture) | Paysage large, **1920 × 1080 px** min. |
| `about.jpg` | `public/images/about.jpg` | Section « À propos » (intérieur boutique) | Portrait, **1000 × 1250 px** (ratio 4/5) |
| `gallery-1.jpg` | `public/images/gallery/gallery-1.jpg` | Galerie — **image mise en avant** (grande) | Carré, **1000 × 1000 px** |
| `gallery-2.jpg` | `public/images/gallery/gallery-2.jpg` | Galerie | Carré, **1000 × 1000 px** |
| `gallery-3.jpg` | `public/images/gallery/gallery-3.jpg` | Galerie | Carré, **1000 × 1000 px** |
| `gallery-4.jpg` | `public/images/gallery/gallery-4.jpg` | Galerie | Carré, **1000 × 1000 px** |
| `gallery-5.jpg` | `public/images/gallery/gallery-5.jpg` | Galerie | Carré, **1000 × 1000 px** |
| `gallery-6.jpg` | `public/images/gallery/gallery-6.jpg` | Galerie | Carré, **1000 × 1000 px** |

> Compressez vos photos avant de les déposer (Lighthouse > 90) — `next/image`
> génère ensuite les versions AVIF/WebP optimisées.
> Pour utiliser un autre format (`.png`/`.webp`), pensez à mettre à jour les
> chemins dans `lib/site.ts` (galerie), `components/Hero.tsx` et
> `components/About.tsx`.

## ✅ À vérifier avant la mise en ligne

Les informations éditables sont centralisées dans **`lib/site.ts`** :

- **Horaires** (`openingHours` / `openingHoursSchema`) :
  - Lundi : 14h00 – 19h00
  - Mardi à Samedi : 10h30 – 12h45 puis 14h15 – 19h00
  - Dimanche : Fermé
- **Téléphone** : 02 98 55 07 20
- **Adresse** : 19 Rue du Chapeau Rouge, 29000 Quimper
- **`url`** : remplacer par le vrai nom de domaine (utilisé pour le SEO,
  le sitemap et l'Open Graph)
- **`email`** et **`facebook`** : vérifier / remplacer par les vrais liens
- **`geo`** (latitude/longitude dans `app/layout.tsx`) et **`aggregateRating`** :
  affiner si besoin
- **Avis clients** (`reviews`) : remplacer par de vrais témoignages

## 🚀 Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub (déjà fait si vous lisez ceci sur GitHub).
2. Sur [vercel.com](https://vercel.com), cliquez **Add New… → Project** et
   importez le dépôt `VeryPretty`.
3. Vercel détecte automatiquement Next.js — **aucune configuration nécessaire**
   (Build Command `next build`, géré par le framework).
4. Cliquez **Deploy**. Le site est en ligne en quelques minutes.
5. **Domaine** : dans _Project → Settings → Domains_, ajoutez votre nom de
   domaine, puis mettez à jour la valeur `url` dans `lib/site.ts` et
   redéployez pour un SEO correct.

> N'oubliez pas de déposer les images (voir ci-dessus) avant de déployer, puis
> de committer/pousser — chaque push sur la branche de production redéploie
> automatiquement le site.
