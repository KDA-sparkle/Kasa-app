import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App est le fichier principal où les routes sont définies
import "./sass/css/main.css"; // Lien vers le fichier CSS compilé

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
