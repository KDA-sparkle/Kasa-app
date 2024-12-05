// Importation de la bibliothèque React
import React, { useState } from "react";

// Déclaration du composant `Slider`
// Ce composant affiche un carrousel d'images basé sur les données fournies
export default function Slider({ data }) {
  // État pour suivre l'image actuellement affichée dans le carrousel
  const [currentImg, setCurrentImg] = useState(0);

  // Gestionnaire pour passer à l'image précédente
  const handlePrev = () => {
    // Met à jour `currentImg` en revenant à l'image précédente (gestion circulaire)
    setCurrentImg(
      (img) => (img - 1 + data.pictures.length) % data.pictures.length
    );
  };

  // Gestionnaire pour passer à l'image suivante
  const handleNext = () => {
    // Met à jour `currentImg` en avançant à l'image suivante (gestion circulaire)
    setCurrentImg((img) => (img + 1) % data.pictures.length);
  };

  return (
    <div className="slider">
      {/* Affichage de l'image actuelle */}
      <img
        src={data.pictures[currentImg]} // Source de l'image actuelle
        className="slider-img" // Classe CSS pour styliser l'image
        alt={data.title} // Texte alternatif basé sur le titre de l'élément
      />
      {/* Navigation seulement si le carrousel contient plusieurs images */}
      {data.pictures.length > 1 && (
        <>
          {/* Bouton pour l'image précédente */}
          <i
            className="fa-solid fa-chevron-left" // Icône de chevron gauche (FontAwesome)
            onClick={() => handlePrev()} // Action pour passer à l'image précédente
          ></i>
          {/* Bouton pour l'image suivante */}
          <i
            className="fa-solid fa-chevron-right" // Icône de chevron droit (FontAwesome)
            onClick={() => handleNext()} // Action pour passer à l'image suivante
          ></i>
          {/* Affichage du numéro de l'image actuelle */}
          <span className="slider-img-number">
            {currentImg + 1}/{data.pictures.length} {/* Ex. : 1/5 */}
          </span>
        </>
      )}
    </div>
  );
}
