import React from "react";
import { getUserId, isAdmin, isAuthenticated } from "../../lib/Auth";
import "../../assets/styles/Pet.css";
import Constants from "../../lib/Constants.js";

const PetCard = ({ pet, showAdoptButton }) => {
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
				alert(`Solicitud de adopcion enviada`);
			} else {
				alert("Solicitud de adopcion fallida");
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
				alert(`Adoption rechazada con exito`);
			} else {
				alert("Error al rechazar la adopcion");
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
				alert(`Adopcion realizada con exito`);
			} else {
				alert("Adopcion fallida");
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
				alert(`Adopcion borrada con exito`);
			} else {
				alert("Fallo el borrar la adopcion");
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
			{showAdoptButton && isAuthenticated() && isAdmin() && (
				<>
					<button onClick={rejectAdoption}>Rechazar</button>
					<button onClick={approveAdoption}>Aprobar</button>
					<button onClick={deleteAdoption}>Eliminar</button>
				</>
			)}
			{showAdoptButton && isAuthenticated() && !isAdmin() && (
				<button onClick={() => adoptar(_id)}>Adoptar</button>
			)}
		</div>
	);
};

export default PetCard;
