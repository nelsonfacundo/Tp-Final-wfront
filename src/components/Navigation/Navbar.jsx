import React from "react";
import "../../assets/styles/Navbar.css";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import Auth, {
  isAdmin,
  isAuthenticated,
  getUserFromToken,
  clearAuthToken,
} from "../../lib/Auth.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthToken();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <img src={Logo} className="logo" alt="Logo"></img>
      <ul className="navbar-links">
        <li></li>
        <li>
          <a href="/">Inicio</a>
        </li>
        {isAuthenticated() && isAdmin() ? (
          <>
            <li>
              <Link to={`/adminadopt`}>Administrar Adopciones</Link>
            </li>
            <li>
              <Link to={`/agregarmascota`}>Agregar Mascota</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to={`/adopt`}>Adoptar</Link>
          </li>
        )}
        <li>
          <Link to={`/pets`}>Mascotas</Link>
        </li>
      </ul>
      {isAuthenticated() ? (
        <ul className="navbar-session-user">
          <li>
            <span>
              Hola {getUserFromToken().firstName} {getUserFromToken().lastName}{" "}
            </span>
          </li>
          <li>
            <button className="home-button" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-session-user">
          <li>
            <Link to={`/register`} className="navbar-register">
              Registrarse
            </Link>
          </li>
          <li>
            <Link to={`/login`}>Iniciar sesion</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
