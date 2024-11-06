import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import BackgroundAbout from "../Assets/imgs/about-bg.jpg";
import Collapse from "../Components/Collapse";
import Footer from "../Components/Footer";
import { content } from "../Data/about";

export default function About() {
  return (
    <section className="about">
      <Navbar />
      <Banner bg={BackgroundAbout} />
      <div className="collapse-container">
        {content.map((item, index) => {
          return (
            <Collapse key={index} title={item.title} content={item.content} />
          );
        })}
      </div>
      <Footer />
    </section>
  );
}
