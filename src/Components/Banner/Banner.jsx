// Importation de la bibliothèque React
import React from "react";

// Déclaration du composant Banner
// Ce composant prend deux props : `bg` (lien vers une image) et `title` (texte du titre)
export default function Banner({ bg, title }) {
  return (
    <div className="banner">
      {/* Conteneur principal de la bannière */}

      <img
        src={bg} // Lien vers l'image de fond (passée en prop `bg`)
        className="banner-img" // Classe CSS pour styliser l'image
        alt="nature" // Texte alternatif pour décrire l'image, utile pour l'accessibilité
      />

      <h1 className="banner-title">
        {title} {/* Texte du titre passé en prop `title` */}
      </h1>
    </div>
  );
}
