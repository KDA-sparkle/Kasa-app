// Importation des bibliothèques React nécessaires
import React from "react";

// Importation des composants utilisés dans la page d'accueil
import Banner from "../Components/Banner/Banner"; // Composant pour afficher une bannière
import Navbar from "../Components/Navbar/Navbar"; // Barre de navigation
import BackgroundHome from "../Assets/imgs/home-bg.jpg"; // Image d'arrière-plan pour la bannière
import GridCards from "../Components/GridCards/GridCards"; // Grille de cartes pour afficher les logements
import Footer from "../Components/Footer/Footer"; // Pied de page

// Déclaration du composant `Home`
// Ce composant affiche la page d'accueil de l'application
export default function Home() {
  // Titre qui sera affiché dans la bannière
  const title = "Chez vous, partout et ailleurs";

  return (
    <section className="home">
      {/* Barre de navigation affichée en haut de la page */}
      <Navbar />

      {/* Bannière avec une image de fond et un titre */}
      <Banner
        bg={BackgroundHome} // Image d'arrière-plan passée en prop
        title={title} // Titre de la bannière passé en prop
      />

      {/* Grille de cartes affichant les logements disponibles */}
      <GridCards />

      {/* Pied de page affiché en bas de la page */}
      <Footer />
    </section>
  );
}
