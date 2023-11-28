import React, { useState } from "react";
import { getUserId } from "../../lib/Auth";
import "../../assets/styles/Pet.css";
import Constants from "../../lib/Constants.js";
import Message from "../Navigation/Message";

const PetCard = ({ pet, showAdoptButton }) => {
  const [message, setMessage] = useState(""); 
  const { _id, name, specie, race, gender, age, description, status } = pet;

  const adoptar = async () => {
    const userId = getUserId();
    try {
      const response = await fetch(
        `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/adoptions/add-adoption`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            petId: _id,
            adopterId: userId,
          }),
        }
      );
      if (response.ok) {
        setMessage({ text:`Solicitud de adopcion enviada`,type: "success"});
      } else {
        setMessage({ text:"Solicitud de adopcion fallida",type: "error"});
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const rejectAdoption = async () => {
    try {
      const response = await fetch(
        `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/adoptions/reject-adoption/${_id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setMessage({ text:`Adoption rechazada con exito`,type: "success"});
      } else {
        setMessage({ text:"Error al rechazar la adopcion",type: "error"});
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const approveAdoption = async () => {
    try {
      const response = await fetch(
        `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/adoptions/approve-adoption/${_id}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        setMessage({ text:`Adopcion realizada con exito`,type: "success"});
      } else {
        setMessage({ text:"Adopcion fallida",type: "error"});
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const deleteAdoption = async () => {
    try {
      const response = await fetch(
        `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/adoptions/delete-adoption/${_id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setMessage({ text:`Adopcion borrada con exito`,type: "success"});
      } else {
        setMessage({ text:"Fallo el borrar la adopcion",type: "error"});
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="petCard">
      <h3>{name}</h3>

      <ul>
        <li>
          <strong>Especie:</strong> {specie}
        </li>
        <li>
          <strong>Raza:</strong> {race}
        </li>
        <li>
          <strong>Genero:</strong> {gender}
        </li>
        <li>
          <strong>Edad:</strong> {age}
        </li>
      </ul>

      <p>
        <strong>Descripcion:</strong> {description}
      </p>
      <p>
        <strong>Estado de adopcion:</strong> {status}
      </p>
      {showAdoptButton && (
        <>
          <button onClick={() => adoptar(_id)}>Adoptar</button>
          <button onClick={rejectAdoption}>Rechazar</button>
          <button onClick={approveAdoption}>Aprobar</button>
          <button onClick={deleteAdoption}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default PetCard;
