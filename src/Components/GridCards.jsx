import React from "react";
import Data from "../Data/data.json";
import Card from "./Card";

export default function GridCards() {
  return (
    <div className="grid-cards">
      {Data.map((item, index) => {
        return <Card item={item} key={"card-" + index} />;
      })}
    </div>
  );
}
