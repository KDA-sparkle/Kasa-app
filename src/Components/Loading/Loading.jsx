// Importation du logo de navigation
// Ce fichier SVG sera utilisé pour afficher un logo pendant le chargement
import NavLogo from "../../Assets/logos/kasa-nav-logo.svg";

// Déclaration du composant `Loading`
// Ce composant est conçu pour afficher une animation ou un indicateur pendant les opérations de chargement
export default function Loading() {
  return (
    <section className="loading">
      {/* Affichage du logo dans la section de chargement */}
      <img
        src={NavLogo} // Lien vers l'image du logo
        className="logo-kasa" // Classe CSS pour styliser le logo
        alt="Logo de Kasa" // Texte alternatif pour l'accessibilité
      />
    </section>
  );
}
