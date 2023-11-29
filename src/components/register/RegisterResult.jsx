import React from "react";
import RegisterImage from "../../assets/images/Register_user.png";
import ErrorImage from "../../assets/images/UserRegisterError.png";

const RegisterResult = ({ success, message, onButtonClick }) => {
  return (
    <div className="confirmation-window">
      {console.log(success)}
      <p>{message}</p>
      <img
        src={success ? RegisterImage : ErrorImage}
        alt={success ? "Registro exitoso" : "Error de registro"}
      />

      <button className="home-button" onClick={onButtonClick}>
        {!success ? "Reintentar" : "Volver al inicio"}
      </button>
    </div>
  );
};

export default RegisterResult;
