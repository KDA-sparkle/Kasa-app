// Importation des bibliothèques React nécessaires
import React from "react";
// Importation du composant `Collapse`
// Utilisé pour afficher des sections repliables (description et équipements)
import Collapse from "../Collapse/Collapse";
// Importation du composant `Stars`
// Utilisé pour afficher le système de notation (étoiles)
import Stars from "../Stars/Stars";

// Déclaration du composant `HousingInfos`
// Ce composant affiche les informations principales d'un logement spécifique
export default function HousingInfos({ data }) {
  return (
    <div className="housing-infos">
      {/* Conteneur pour les informations principales (titre, localisation, hôte, etc.) */}
      <div className="top-infos">
        {/* Conteneur pour le titre, la localisation et les tags */}
        <div className="title-location-tags-container">
          {/* Titre du logement */}
          <h2 className="housing-title">{data.title}</h2>
          {/* Localisation du logement */}
          <p className="housing-location">{data.location}</p>
          {/* Liste des tags associés au logement */}
          <div className="tags-box">
            {data.tags.map((tag, index) => (
              <button className="tag" key={"tag-" + index}>
                {tag} {/* Nom du tag */}
              </button>
            ))}
          </div>
        </div>

        {/* Conteneur pour les informations de l'hôte et la notation */}
        <div className="host-stars-container">
          <div className="host-box">
            {/* Nom de l'hôte */}
            <p className="host-name">{data.host.name}</p>
            {/* Photo de l'hôte */}
            <img
              src={data.host.picture} // Image de l'hôte
              className="host-picture" // Classe CSS pour styliser l'image
              alt={data.host.name} // Texte alternatif basé sur le nom de l'hôte
            />
          </div>
          {/* Composant `Stars` pour afficher les étoiles */}
          <Stars data={data} />
        </div>
      </div>

      {/* Conteneur pour les sections repliables (description et équipements) */}
      <div className="collapse-infos">
        {/* Section repliable pour la description */}
        <Collapse
          title={"Description"} // Titre de la section
          content={data.description} // Contenu de la description
        />
        {/* Section repliable pour les équipements */}
        <Collapse
          title={"Equipements"} // Titre de la section
          content={data.equipments.map((equipement, index) => {
            // Chaque équipement est affiché dans un paragraphe
            return (
              <p className="housing-equipment" key={"equipement-" + index}>
                {equipement} {/* Nom de l'équipement */}
              </p>
            );
          })}
        />
      </div>
    </div>
  );
}
