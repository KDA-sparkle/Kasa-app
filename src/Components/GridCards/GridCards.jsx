// Importation de la bibliothèque React
import React from "react";
// Importation des données depuis un fichier JSON
// Ce fichier contient les informations nécessaires pour générer les cartes
import Data from "../../Data/data.json";
// Importation du composant `Card`
// Ce composant est utilisé pour afficher une seule carte avec les données fournies
import Card from "../Card/Card";

// Déclaration du composant GridCards
// Ce composant est responsable de l'affichage d'une grille de cartes
export default function GridCards() {
  return (
    <div className="grid-cards">
      {/* Itération sur les données pour générer une carte pour chaque élément */}
      {Data.map((item, index) => {
        // Chaque élément de Data est passé au composant `Card` via la prop `item`
        return (
          <Card
            item={item} // Les données individuelles (titre, image, etc.)
            key={"card-" + index} // Clé unique pour chaque élément dans la liste
          />
        );
      })}
    </div>
  );
}
