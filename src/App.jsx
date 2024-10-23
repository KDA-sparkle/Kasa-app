import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importer les éléments de routage
import Gallery from "./components/Gallery/Gallery"; // Composant pour afficher la galerie
import Card from "./components/Card/Card"; // Composant pour afficher les détails d'un logement

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} /> // Route pour la galerie
        <Route path="/Logement/:id" element={<Card />} /> // Route pour les
        détails d'un logement
      </Routes>
    </Router>
  );
};

export default App; // Exporter le composant App
