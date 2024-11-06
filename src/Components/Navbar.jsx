import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from "../Assets/logos/kasa-nav-logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/Kasa-App/">
        <img src={NavLogo} className="logo-kasa" alt="Logo de Kasa" />
      </NavLink>
      <nav>
        <NavLink to="/Kasa-App/" end>
          Accueil
        </NavLink>
        <NavLink to="/Kasa-App/a-propos" end>
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}
