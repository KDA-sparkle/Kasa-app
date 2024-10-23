import React from "react";
import logements from "../../../public/logements.json";
import { Link } from "react-router-dom";
import styled from "./gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styled.gallery}>
      {logements.map((logement) => (
        <Link to={`/Logement/${logement.id}`} key={logement.id}>
          <div className={styled.card}>
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
