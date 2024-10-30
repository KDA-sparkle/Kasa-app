import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../../public/logements.json";
import styled from "./card.scss";

const Card = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <div>
      {logement ? ( //termaire a noter
        <article className={styled.cadreCard}>
          <img
            className={styled.coverImage}
            src={logement.cover}
            alt={logement.title}
          />
          <h2 className={styled.locationName}>{logement.title}</h2>
          <p>{logement.description}</p>
          <p>Rating: {logement.rating}</p>
        </article>
      ) : (
        <p>Logement non trouvé.</p>
      )}
    </div>
  );
};

export default Card;
