import React from "react";
import LogoFooter from "../Assets/logos/kasa-footer-logo.svg";

export default function Footer() {
  return (
    <footer>
      <img src={LogoFooter} className="footer-logo" alt="Logo Kasa" />
      <p className="footer-text">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
