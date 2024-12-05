// Importation de la bibliothèque React
import React from "react";
// Importation du composant `NavLink` depuis React Router
// `NavLink` est utilisé pour créer des liens de navigation avec gestion d'état actif
import { NavLink } from "react-router-dom";
// Importation du logo pour la barre de navigation
import NavLogo from "../../Assets/logos/kasa-nav-logo.svg";

// Déclaration du composant `Navbar`
// Ce composant affiche une barre de navigation avec le logo et deux liens principaux
export default function Navbar() {
  return (
    <div className="navbar">
      {/* Logo cliquable qui redirige vers la page d'accueil */}
      <NavLink to="/">
        <img
          src={NavLogo} // URL du logo importé
          className="logo-kasa" // Classe CSS pour styliser le logo
          alt="Logo de Kasa" // Texte alternatif pour l'accessibilité
        />
      </NavLink>

      {/* Section de navigation contenant les liens */}
      <nav>
        {/* Lien vers la page d'accueil */}
        <NavLink
          to="/" // URL cible pour ce lien
          end // Active ce lien uniquement si l'URL correspond exactement
        >
          Accueil
        </NavLink>
        {/* Lien vers la page "À Propos" */}
        <NavLink
          to="/a-propos" // URL cible pour ce lien
          end // Active ce lien uniquement si l'URL correspond exactement
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}
