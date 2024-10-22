import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error404">
      <h1>404 - Page non trouvée</h1>
      <p>Oups ! La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default Error404;
