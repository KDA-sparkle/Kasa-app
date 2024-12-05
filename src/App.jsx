// Importation de la bibliothèque React
import React from "react";
// Importation du composant Router
// Ce composant gère la navigation entre les différentes pages de l'application
import Router from "./Router";

// Déclaration du composant principal `App`
// Ce composant est le point d'entrée de l'application React
function App() {
  return (
    <div className="App">
      {/* Le composant Router contient la logique de navigation entre les pages */}
      <Router />
    </div>
  );
}

// Exportation par défaut du composant `App`
// Cela permet de l'importer dans d'autres fichiers, notamment dans `index.js`
export default App;
