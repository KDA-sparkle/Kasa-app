import React, { useEffect, useRef, useState } from "react";

export default function Collapse({ title, content, index }) {
  const [isActive, setIsActive] = useState(false);

  const collapseRef = useRef(null);
  const contentRef = useRef(null);

  const [elHeight, setElHeight] = useState("");
  useEffect(() => {
    setElHeight(contentRef.current.offsetHeight);
  }, []);

  const handleCollapse = () => {
    if (isActive) {
      contentRef.current.style.transform = "translateY(-100%)";
      collapseRef.current.style.height = "48px";
      setIsActive(false);
    } else {
      contentRef.current.style.transform = "translateY(0)";
      collapseRef.current.style.height = `${elHeight + 47}px`;
      setIsActive(true);
    }
  };

  return (
    <div className="collapse" ref={collapseRef}>
      <button className="collapse-btn" onClick={() => handleCollapse()}>
        <h2 className="collapse-title">{title}</h2>
        {isActive ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </button>
      <div className="collapse-content" ref={contentRef}>
        {content}
      </div>
    </div>
  );
}
