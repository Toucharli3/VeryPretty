# Images à déposer

Placez ici vos photos aux emplacements et noms **exacts** ci-dessous. Le code
du site les référence déjà via `next/image`.

| Fichier | Emplacement | Usage | Format conseillé |
| --- | --- | --- | --- |
| `hero.jpg` | `public/images/hero.jpg` | Fond du bandeau d'accueil (devanture / vitrine) | Paysage, large — **1920 × 1080 px** minimum |
| `about.jpg` | `public/images/about.jpg` | Section « À propos » (intérieur de la boutique) | Portrait — **1000 × 1250 px** (ratio 4/5) |
| `gallery-1.jpg` … `gallery-6.jpg` | `public/images/gallery/` | Galerie photos (boutique / produits) | Carré — **1000 × 1000 px** (gallery-1 sera l'image mise en avant) |

## Conseils
- Formats acceptés : `.jpg` (recommandé), `.png` ou `.webp` — si vous changez
  l'extension, pensez à mettre à jour les chemins dans `lib/site.ts` (galerie)
  et les composants `Hero.tsx` / `About.tsx`.
- Compressez vos images avant de les déposer (Lighthouse > 90).
  `next/image` génère automatiquement les versions AVIF/WebP optimisées.
- Tant qu'une image est absente, un dégradé pastel s'affiche à sa place :
  le site reste présentable.
