// Importation de la bibliothèque React
import React from "react";
// Importation de ReactDOM pour gérer le rendu dans le DOM
import ReactDOM from "react-dom/client";
// Importation des styles globaux
import "./sass/main/index.css";
// Importation du composant principal de l'application
import App from "./App";
// Importation de BrowserRouter depuis React Router
// BrowserRouter est utilisé pour gérer la navigation entre les pages
import { BrowserRouter } from "react-router-dom";
// Importation du composant de chargement
// Ce composant peut être utilisé pour afficher une animation de chargement
import Loading from "./Components/Loading/Loading";

// Initialisation et rendu de l'application React dans l'élément HTML racine
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Activation du mode strict pour détecter les problèmes potentiels */}
    <BrowserRouter>
      {/* Composant de chargement affiché au démarrage */}
      <Loading />
      {/* Composant principal de l'application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
