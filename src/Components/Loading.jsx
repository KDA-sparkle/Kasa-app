import NavLogo from "../Assets/logos/kasa-nav-logo.svg";

export default function Loading() {
  return (
    <section className="loading">
      <img src={NavLogo} className="logo-kasa" alt="Logo de Kasa" />
    </section>
  );
}
