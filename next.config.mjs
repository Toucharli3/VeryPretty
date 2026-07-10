/** @type {import('next').NextConfig} */

// Chemin de base pour GitHub Pages (ex. "/VeryPretty").
// Fourni par le workflow via l'action actions/configure-pages ; vide en local.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Export 100 % statique : hébergeable tel quel sur GitHub Pages.
  output: 'export',
  trailingSlash: true,
  images: {
    // GitHub Pages ne peut pas exécuter l'optimiseur d'images de Next.
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
