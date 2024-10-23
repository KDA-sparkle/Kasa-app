import React, { useState } from "react";
import styled from "./collapse.module.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styled.collapse}>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div className={styled.content}>{children}</div>}
    </div>
  );
};

export default Collapse;
