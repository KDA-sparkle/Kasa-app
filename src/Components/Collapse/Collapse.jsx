// Importation des bibliothèques nécessaires
import React, { useEffect, useRef, useState } from "react";

// Déclaration du composant Collapse
// Ce composant prend trois props : `title` (titre du panneau), `content` (contenu du panneau), et `index` (clé facultative pour identifier l'élément)
export default function Collapse({ title, content, index }) {
  // État pour gérer si le panneau est actif (ouvert) ou non
  const [isActive, setIsActive] = useState(false);

  // Références pour accéder directement aux éléments DOM du panneau et de son contenu
  const collapseRef = useRef(null); // Référence pour l'élément contenant le panneau
  const contentRef = useRef(null); // Référence pour l'élément contenant le contenu

  // État pour stocker la hauteur de l'élément `content` (calculée dynamiquement)
  const [elHeight, setElHeight] = useState("");

  // useEffect pour définir la hauteur du contenu lorsque le composant est monté
  useEffect(() => {
    setElHeight(contentRef.current.offsetHeight); // Récupère la hauteur du contenu
  }, []); // Exécuté une seule fois à l'initialisation

  // Fonction pour gérer l'ouverture et la fermeture du panneau
  const handleCollapse = () => {
    if (isActive) {
      // Si le panneau est actif (ouvert), on le ferme
      contentRef.current.style.transform = "translateY(-100%)"; // Cache le contenu en le déplaçant vers le haut
      collapseRef.current.style.height = "48px"; // Réinitialise la hauteur au minimum
      setIsActive(false); // Met à jour l'état pour indiquer que le panneau est fermé
    } else {
      // Si le panneau est inactif (fermé), on l'ouvre
      contentRef.current.style.transform = "translateY(0)"; // Réinitialise le déplacement vertical
      collapseRef.current.style.height = `${elHeight + 47}px`; // Ajuste la hauteur pour inclure le contenu
      setIsActive(true); // Met à jour l'état pour indiquer que le panneau est ouvert
    }
  };

  return (
    <div className="collapse" ref={collapseRef}>
      {/* Bouton pour ouvrir/fermer le panneau */}
      <button className="collapse-btn" onClick={() => handleCollapse()}>
        {/* Titre du panneau */}
        <h2 className="collapse-title">{title}</h2>
        {/* Icône qui change en fonction de l'état actif/inactif */}
        {isActive ? (
          <i className="fa-solid fa-chevron-up"></i> // Chevron vers le haut (panneau ouvert)
        ) : (
          <i className="fa-solid fa-chevron-down"></i> // Chevron vers le bas (panneau fermé)
        )}
      </button>

      {/* Contenu du panneau */}
      <div className="collapse-content" ref={contentRef}>
        {content} {/* Contenu dynamique passé en prop */}
      </div>
    </div>
  );
}
