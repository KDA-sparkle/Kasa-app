// Importation de la bibliothèque React
import React from "react";
// Importation des composants `Routes` et `Route` depuis React Router
// Ces composants permettent de définir et gérer les routes de l'application
import { Routes, Route } from "react-router-dom";
// Importation des pages de l'application
import Home from "./Pages/Home"; // Page d'accueil
import About from "./Pages/About"; // Page "À propos"
import Housing from "./Pages/Housing"; // Page pour afficher les détails d'un logement
import NotFound from "./Pages/NotFound"; // Page 404 pour les routes non trouvées

// Déclaration du composant `router`
// Ce composant définit les différentes routes et leurs composants associés
export default function router() {
  return (
    <Routes>
      {/* Route pour la page "À propos" */}
      <Route
        path="/a-propos" // Chemin de l'URL
        element={<About />} // Composant à afficher pour cette route
      />
      {/* Route pour les détails d'un logement avec un paramètre dynamique `id` */}
      <Route
        path="/logement/:id" // Le `:id` représente un paramètre dynamique
        element={<Housing />} // Composant pour afficher les détails du logement
      />
      {/* Route pour la page d'accueil */}
      <Route
        path="/"
        element={<Home />} // Composant à afficher pour la page d'accueil
      />
      {/* Route par défaut pour gérer les URL non correspondantes */}
      <Route
        path="/*" // Le `*` capture toutes les routes non définies
        element={<NotFound />} // Composant pour afficher une page 404
      />
    </Routes>
  );
}
