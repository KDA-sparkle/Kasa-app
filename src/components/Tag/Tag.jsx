import React from "react";
import styled from "./tag.module.scss";

const Tag = ({ text }) => {
  return <span className={styled.tag}>{text}</span>;
};

export default Tag;
