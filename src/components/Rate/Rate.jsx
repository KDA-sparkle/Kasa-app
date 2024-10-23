import React from "react";
import styled from "./rate.module.scss";

const Rate = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span
        key={index}
        className={rating > index ? styled.filledStar : styled.emptyStar}
      >
        ★
      </span>
    );
  });

  return <div className={styled.rate}>{stars}</div>;
};

export default Rate;
