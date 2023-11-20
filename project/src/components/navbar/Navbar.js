import React from "react";
import "../../assets/styles/Navbar.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} className="logo" alt="Logo"></img>
      <ul className="navbar-links">
        <li></li>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/adopt">Adoptar</a>
        </li>
        <li>
          <a href="/about">Poné en adopcións</a>
        </li>
        <li>
          <Link to={`/login`}>Inicio de sesión </Link>
        </li>
      </ul>
      <ul className="navbar-session-user">
        <li>
          <a href="/" className="navbar-register">
            Registrarse
          </a>
        </li>
        <li>
          <a href="/" className="navbar-session">
            Iniciar Sesion
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
