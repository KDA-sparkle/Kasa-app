import React from "react";
import styled from "./user.module.scss";

const User = ({ name, image }) => {
  return (
    <div className={styled.user}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default User;
