// Importation de la fonction `defineConfig` depuis Vite
// Cette fonction permet de définir une configuration avec des suggestions et une complétion automatiques
import { defineConfig } from "vite";
// Importation du plugin React pour Vite
// Ce plugin ajoute un support pour les fichiers React (JSX, HMR, etc.)
import react from "@vitejs/plugin-react";

// Exportation de la configuration Vite
// `defineConfig` simplifie la gestion des options de configuration et améliore la lisibilité
export default defineConfig({
  plugins: [
    react(), // Ajout du plugin React pour gérer les projets React
  ],
});
