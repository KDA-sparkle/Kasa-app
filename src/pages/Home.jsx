import React from "react";
import logements from "../logements.json";
import Card from "../components/Card";

function Home() {
  return (
    <div className="home">
      <section className="cards">
        {logements.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
}

export default Home;
