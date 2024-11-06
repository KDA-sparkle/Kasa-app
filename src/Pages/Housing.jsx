import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import HousingInfos from "../Components/HousingInfos";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import data from "../Data/data.json";
import NotFound from "../Pages/NotFound";

export default function Housing() {
  // On récupère l'id dans l'URL
  const { id } = useParams();

  // On vérifie si l'id est présent dans data.json
  const housingData = data.find((housing) => housing.id === id);

  return (
    <>
      {housingData ? (
        <section className="housing">
          <Navbar />
          <Slider data={housingData} />
          <HousingInfos data={housingData} />
          <Footer />
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
}
