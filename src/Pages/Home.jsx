import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import BackgroundHome from "../Assets/imgs/home-bg.jpg";
import GridCards from "../Components/GridCards";
import Footer from "../Components/Footer";

export default function Home() {
	const title = "Chez vous, partout et ailleurs";
	return (
		<section className="home">
			<Navbar />
			<Banner bg={BackgroundHome} title={title} />
			<GridCards />
			<Footer />
		</section>
	);
}
