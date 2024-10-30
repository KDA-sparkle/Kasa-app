import React from "react";
import ReactDOM from "react-dom/client"; // Utilisation de React 18
import App from "./App"; // Importer le composant principal
import "./styles/css/main.css"; // Importer le fichier SCSS principal

const root = ReactDOM.createRoot(document.getElementById("root")); // Créer le point d'entrée

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
