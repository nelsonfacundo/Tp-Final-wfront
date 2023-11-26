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
          <Link to={`/adopt`}>Adoptar</Link>
        </li>        
        <li>          
          <Link to={`/pets`}>Mascotas</Link>
        </li>        
      </ul>
      <ul className="navbar-session-user">       
        <li>
          <Link to={`/register`} className="navbar-register">Registrarse</Link>
        </li>
        <li>
          <Link to={`/login`}>Inicio de sesión </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
