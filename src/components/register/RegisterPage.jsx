import React, { useState } from "react";
import Navbar from "../Navigation/Navbar.jsx";
import Footer from "../Navigation/Footer.jsx";
import "../../assets/styles/Register.css";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm.jsx";
import RegisterResult from "./RegisterResult.jsx";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [error, setError] = useState(null);

  const registerHandler = (data) => {
    const registro = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      role: data.role || document.querySelector('select[name="role"]').value,
      email: data.email,
      password: data.password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registro),
    };

    fetch("http://localhost:5000/api/users/register", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        setSolicitudEnviada(true);
        setMostrarFormulario(false);
        console.log(`Repuesta del servidor: ${data}`);
      })
      .catch((error) => {
        console.error("Error al procesar la solicitud:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Error desconocido";
        console.log(errorMessage);
        setError(errorMessage);
        setSolicitudEnviada(true);
        setMostrarFormulario(false);
      });
  };

  return (
    <div>
      <Navbar />

      {mostrarFormulario && <RegisterForm onSubmit={registerHandler} />}

      {solicitudEnviada && (
        <RegisterResult
          success={!error}
          message={
            error
              ? "Error al procesar la solicitud"
              : "Tu solicitud fue recibida con éxito"
          }
          onButtonClick={() => navigate("/")}
        />
      )}

      <Footer />
    </div>
  );
};

export default RegisterPage;
