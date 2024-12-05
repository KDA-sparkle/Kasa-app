// Importation des bibliothèques nécessaires
import React from "react";
// Importation du composant Navbar pour afficher la barre de navigation
import Navbar from "../Components/Navbar/Navbar";
// Importation de `Link` depuis React Router pour rediriger l'utilisateur
import { Link } from "react-router-dom";

// Déclaration du composant `NotFound`
// Ce composant affiche une page personnalisée pour les URL non trouvées
export default function NotFound() {
  return (
    <section className="notfound">
      {/* Barre de navigation affichée en haut de la page */}
      <Navbar />

      {/* Contenu principal de la page 404 */}
      <div className="notfound-content">
        {/* Numéro d'erreur "404" */}
        <span className="error-number">404</span>
        {/* Message d'erreur indiquant que la page n'existe pas */}
        <h2 className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>

      {/* Lien pour retourner à la page d'accueil */}
      <Link to="/" className="goback-home">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
