// Importation des bibliothèques React nécessaires
import React from "react"; // React est utilisé pour créer des composants et gérer l'interface utilisateur
import ReactDOM from "react-dom/client"; // ReactDOM permet de manipuler le DOM dans un projet React

// Importation du composant principal de l'application
import App from "./App"; // Le composant App est le point d'entrée de toute l'application

// Importation du fichier CSS principal
import "./sass/css/main.css"; // main.css contient les styles globaux pour l'application

// Sélection de l'élément HTML racine où l'application sera rendue
const rootElement = document.getElementById("root"); // Cet élément "root" est défini dans le fichier index.html

// Création de la racine React et rendu de l'application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* React.StrictMode est une fonctionnalité qui aide à détecter les problèmes potentiels dans l'application */}
    <App /> {/* Rendu du composant principal App */}
  </React.StrictMode>
);

// À ce stade, tout le contenu de l'application sera affiché dans l'élément HTML avec l'ID "root".
