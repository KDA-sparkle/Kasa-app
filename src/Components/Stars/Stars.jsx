// Importation de la bibliothèque React
import React from "react";
// Importation des images pour les étoiles
// Une étoile pleine représente une note attribuée, tandis qu'une étoile vide représente l'absence de note
import FullStar from "../../Assets/Stars/full-star.svg";
import EmptyStar from "../../Assets/Stars/empty-star.svg";

// Déclaration du composant `Stars`
// Ce composant affiche une notation par étoiles basée sur la donnée `rating`
export default function Stars({ data }) {
  // Tableau de référence pour générer 5 étoiles
  const rating = [1, 2, 3, 4, 5];

  return (
    <div className="stars-box">
      {/* Itération sur le tableau `rating` pour afficher les étoiles */}
      {rating.map((score, index) =>
        // Si le score est supérieur ou égal à la note (data.rating), afficher une étoile vide
        score > data.rating ? (
          <img
            src={EmptyStar} // Image de l'étoile vide
            key={"star-" + index} // Clé unique pour chaque étoile
            alt="étoile grise" // Texte alternatif pour l'accessibilité
          />
        ) : (
          // Sinon, afficher une étoile pleine
          <img
            src={FullStar} // Image de l'étoile pleine
            key={"star-" + index} // Clé unique pour chaque étoile
            alt="étoile rouge" // Texte alternatif pour l'accessibilité
          />
        )
      )}
    </div>
  );
}
