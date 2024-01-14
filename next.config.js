/** @type {import('next').NextConfig} */




const withPWA = require("@ducanh2912/next-pwa").default({
  // Répertoire de destination pour les fichiers générés par le service worker .
  dest: "public",
  // Cache tous les <link rel="stylesheet" /> et <script /> sur la navigation frontale.
  // Nécessite cacheOnFrontEndNav être activé.
  aggressiveFrontEndNavCaching: true,
  // Activer la mise en cache de route supplémentaire lorsque 
  //les utilisateurs naviguent à travers les pages avec next/link.
  cacheOnFrontEndNav: true,
  // Activez la mise en cache pour l'URL de démarrage.
  cacheStartUrl: true,
  // Si votre URL de démarrage renvoie un document HTML différent sous différents états 
  //(tels que connecté et non connecté), cette doit être défini sur true si vous utilisez également cacheStartUrl. 
  //En vigueur uniquement lorsque cacheStartUrl est réglé sur true.
  dynamicStartUrl: true,
  // Si votre URL de départ redirige vers une autre route telle que /login,
  // il est recommandé de spécifier cette URL redirigée pour une meilleure expérience utilisateur.
  // Efficace quand dynamicStartUrl est réglé à true.
  dynamicStartUrlRedirect: true,

  disable: false, // Si next-pwa devrait être désactivé.

  reloadOnOnline: true, // Rechargez l'application quand elle est revenue en ligne.
  register: true, // Enregistrement automatique du service worker.

  reloadOnOnline: true, // Recharge la page lorsque la connexion réseau est rétablie après une perte de connexion.
  updateOnReload: true, // Mise à jour du service worker lors du rechargement de la page.

});

const nextConfig = {}
module.exports = withPWA(
  nextConfig
)
