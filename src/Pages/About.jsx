// Importation des bibliothèques React nécessaires
import React from "react";

// Importation des composants utilisés dans la page "À propos"
import Banner from "../Components/Banner/Banner"; // Composant pour afficher une bannière
import Navbar from "../Components/Navbar/Navbar"; // Barre de navigation
import Footer from "../Components/Footer/Footer"; // Pied de page
import Collapse from "../Components/Collapse/Collapse"; // Composant pour les sections repliables

// Importation de l'image d'arrière-plan pour la bannière
import BackgroundAbout from "../Assets/imgs/about-bg.jpg";

// Importation des données JSON pour alimenter les sections repliables
import aboutData from "../Data/about.json";

// Déclaration du composant `About`
// Ce composant affiche la page "À propos" de l'application
export default function About() {
  return (
    <section className="about">
      {/* Barre de navigation affichée en haut de la page */}
      <Navbar />

      {/* Bannière avec une image de fond */}
      <Banner bg={BackgroundAbout} />

      {/* Conteneur pour les sections repliables */}
      <div className="collapse-container">
        {/* Génération dynamique des sections repliables à partir des données JSON */}
        {aboutData.map((item, index) => (
          <Collapse
            key={index} // Clé unique pour chaque section
            title={item.title} // Titre de la section
            content={item.content} // Contenu de la section
          />
        ))}
      </div>

      {/* Pied de page affiché en bas de la page */}
      <Footer />
    </section>
  );
}
