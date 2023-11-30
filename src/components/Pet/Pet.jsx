import React, { useState } from "react";
import { getUserId, isAdmin, isAuthenticated } from "../../lib/Auth";
import { useNavigate } from 'react-router-dom';

import "../../assets/styles/Pet.css";
import Constants from "../../lib/Constants.js";
import Message from "../Navigation/Message";

const PetCard = ({ pet, showAdoptButton }) => {
	const [message, setMessage] = useState("");
  const [statusUpdate, setStatus] = useState(pet.status); 
  const [isDeleted, setIsDeleted] = useState(false); 
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
				setMessage({ text: `Solicitud de adopcion enviada`, type: "success" });
			} else {
				setMessage({ text: "Solicitud de adopcion fallida", type: "error" });
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
				setMessage({ text: `Adoption rechazada con exito`, type: "success" });
        setStatus("rejected");


			} else {
				setMessage({ text: "Error al rechazar la adopcion", type: "error" });
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
				setMessage({ text: `Adopcion realizada con exito`, type: "success" });
        setStatus("adopted");

			} else {
				setMessage({ text: "Adopcion fallida", type: "error" });
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
				setMessage({ text: `Adopcion borrada con exito`, type: "success" });
        setIsDeleted(true); 
        setStatus("available");

			} else {
				setMessage({ text: "Fallo el borrar la adopcion", type: "error" });
			}
		} catch (error) {
			console.error("Error: ", error);
		}
	};

  const deletePet = async () => {
    try {
      const response = await fetch(
        `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/deletePet/${_id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setMessage({ text: `Mascota eliminada con éxito`, type: "success" });
        setIsDeleted(true);
      } else {
        setMessage({ text: "Fallo al eliminar la mascota", type: "error" });
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const navigate = useNavigate();

  const editPet = () => {
    navigate(`/agregarmascota?id=${pet._id}`);
  };

	return (
		<div className={`petCard ${isDeleted ? "petCardDeleted" : ""}`}>
		{message && <Message text={message.text} type={message.type} />}
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
				<strong>Estado de adopcion:</strong> {statusUpdate}
			</p>
			{showAdoptButton && isAuthenticated() && isAdmin() && !isDeleted && (
				<>
					<button onClick={rejectAdoption}>Rechazar</button>
					<button onClick={approveAdoption}>Aprobar</button>
					<button onClick={deleteAdoption}>Eliminar (resetear)</button>
				</>
			)}
			{showAdoptButton && isAuthenticated() && !isAdmin() && (
				<button onClick={() => adoptar(_id)}>Adoptar</button>
			)}
      {!showAdoptButton && isAuthenticated() && isAdmin() && !isDeleted && (
				<>
					<button onClick={editPet}>Editar</button>
					<button onClick={deletePet}>Eliminar</button>
				</>
			)}
		</div>
	);
};

export default PetCard;
