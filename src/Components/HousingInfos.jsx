import React from "react";
import Collapse from "../Components/Collapse";
import Stars from "./Stars";

export default function HousingInfos({ data }) {
  return (
    <div className="housing-infos">
      <div className="top-infos">
        <div className="title-location-tags-container">
          <h2 className="housing-title">{data.title}</h2>
          <p className="housing-location">{data.location}</p>
          <div className="tags-box">
            {data.tags.map((tag, index) => (
              <button className="tag" key={"tag-" + index}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="host-stars-container">
          <div className="host-box">
            <p className="host-name">{data.host.name}</p>
            <img
              src={data.host.picture}
              className="host-picture"
              alt={data.host.name}
            />
          </div>
          <Stars data={data} />
        </div>
      </div>

      <div className="collapse-infos">
        <Collapse title={"Description"} content={data.description} />
        <Collapse
          title={"Equipements"}
          content={data.equipments.map((equipement, index) => {
            return (
              <p className="housing-equipment" key={"equipement-" + index}>
                {equipement}
              </p>
            );
          })}
        />
      </div>
    </div>
  );
}
