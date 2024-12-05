// Importation de la bibliothèque React
import React from "react";
// Importation du logo du footer
// Ce fichier est une image SVG utilisée pour afficher le logo de Kasa dans le pied de page
import LogoFooter from "../../Assets/logos/kasa-footer-logo.svg";

// Déclaration du composant Footer
// Ce composant est utilisé pour afficher le pied de page de l'application
export default function Footer() {
  return (
    <footer>
      {/* Affichage du logo dans le footer */}
      <img
        src={LogoFooter} // Chemin vers l'image du logo, importée plus haut
        className="footer-logo" // Classe CSS pour styliser le logo
        alt="Logo Kasa" // Texte alternatif pour décrire l'image, utile pour l'accessibilité
      />

      {/* Texte du copyright dans le footer */}
      <p className="footer-text">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
