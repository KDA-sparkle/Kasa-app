import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importer les éléments de routage
import Home from "./pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> // Route pour la galerie
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App; // Exporter le composant App
