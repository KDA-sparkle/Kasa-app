// Importation de la bibliothèque React
import React from "react";
// Importation du composant `Link` de React Router
// `Link` est utilisé pour créer des liens internes dans l'application
import { Link } from "react-router-dom";

// Déclaration du composant Card
// Ce composant prend un objet `item` en prop pour afficher les données d'un logement
export default function Card({ item }) {
  return (
    // Utilisation de Link pour créer un lien vers la page d'un logement spécifique
    <Link
      to={`/logement/${item.id}`} // URL dynamique basée sur l'ID du logement
      state={{ item }} // Transmission de l'objet `item` dans l'état de navigation
      className="card" // Classe CSS pour styliser la carte
    >
      {/* Affichage de l'image de couverture du logement */}
      <img
        src={item.cover} // URL de l'image fournie par la prop `item`
        alt={item.title} // Texte alternatif basé sur le titre du logement
      />

      {/* Affichage du titre du logement */}
      <h2 className="card-title">{item.title}</h2>
    </Link>
  );
}
