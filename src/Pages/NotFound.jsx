import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <Navbar />
      <div className="notfound-content">
        <span className="error-number">404</span>
        <h2 className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <Link to="/Kasa-App" className="goback-home">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
