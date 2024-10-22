import React from "react";
import { useParams } from "react-router-dom";
import logements from "../logements.json";
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

function Property() {
  const { id } = useParams();
  const property = logements.find((logement) => logement.id === id);

  if (!property) {
    return <p>Annonce non trouvée !</p>;
  }

  return (
    <div className="property">
      <Gallery pictures={property.pictures} />
      <h2>{property.title}</h2>
      <Rating rating={property.rating} />
      <Collapse title="Description" content={property.description} />
      <Collapse title="Équipements" content={property.equipments.join(", ")} />
    </div>
  );
}

export default Property;
