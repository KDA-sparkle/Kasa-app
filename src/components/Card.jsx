import React from "react";
import { Link } from "react-router-dom";

function Card({ property }) {
  return (
    <Link to={`/property/${property.id}`} className="card">
      <img src={property.cover} alt={property.title} />
      <div className="card-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
      </div>
    </Link>
  );
}

export default Card;
