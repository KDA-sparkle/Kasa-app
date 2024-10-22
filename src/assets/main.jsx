import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App est ton composant principal
import "./sass/css/main.css"; // Le lien vers ton CSS

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
