import React, { useState } from "react";

export default function Slider({ data }) {
  const [currentImg, setCurrentImg] = useState(0);

  const handlePrev = () => {
    setCurrentImg(
      (img) => (img - 1 + data.pictures.length) % data.pictures.length
    );
  };
  const handleNext = () => {
    setCurrentImg((img) => (img + 1) % data.pictures.length);
  };

  return (
    <div className="slider">
      <img
        src={data.pictures[currentImg]}
        className="slider-img"
        alt={data.title}
      />
      {data.pictures.length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => handlePrev()}
          ></i>
          <i
            className="fa-solid fa-chevron-right"
            onClick={() => handleNext()}
          ></i>
          <span className="slider-img-number">
            {currentImg + 1}/{data.pictures.length}
          </span>
        </>
      )}
    </div>
  );
}
