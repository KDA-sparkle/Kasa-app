// Importation des bibliothèques nécessaires
import React from "react";
// Importation de `useParams` depuis React Router pour récupérer les paramètres d'URL
import { useParams } from "react-router-dom";
// Importation des composants
import Footer from "../Components/Footer/Footer"; // Pied de page
import HousingInfos from "../Components/HousingInfos/HousingInfos"; // Informations détaillées du logement
import Navbar from "../Components/Navbar/Navbar"; // Barre de navigation
import Slider from "../Components/Slider/Slider"; // Carrousel d'images
// Importation des données JSON contenant les informations des logements
import data from "../Data/data.json";
// Importation de la page 404 pour les cas où l'identifiant est introuvable
import NotFound from "../Pages/NotFound";

// Déclaration du composant `Housing`
// Ce composant affiche les détails d'un logement spécifique en fonction de l'ID dans l'URL
export default function Housing() {
  // Récupération de l'ID du logement depuis l'URL
  const { id } = useParams();

  // Recherche dans les données pour trouver le logement correspondant à l'ID
  const housingData = data.find((housing) => housing.id === id);

  return (
    <>
      {/* Si le logement existe, on affiche ses détails */}
      {housingData ? (
        <section className="housing">
          {/* Barre de navigation */}
          <Navbar />
          {/* Carrousel d'images avec les données du logement */}
          <Slider data={housingData} />
          {/* Informations détaillées sur le logement */}
          <HousingInfos data={housingData} />
          {/* Pied de page */}
          <Footer />
        </section>
      ) : (
        // Si le logement n'existe pas, on affiche une page 404
        <NotFound />
      )}
    </>
  );
}
