import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
      </nav>
    </header>
  );
}

export default Header;
