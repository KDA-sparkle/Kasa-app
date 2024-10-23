import React, { useState } from "react";

function Gallery({ pictures }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    <div className="gallery">
      <img src={pictures[current]} alt={`Slide ${current + 1}`} />
      {pictures.length > 1 && (
        <>
          <button onClick={prevImage}>Précédent</button>
          <button onClick={nextImage}>Suivant</button>
        </>
      )}
    </div>
  );
}

export default Gallery;
