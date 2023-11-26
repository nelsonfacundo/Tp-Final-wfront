import React from "react";
import { getUserId } from "../../lib/Auth";
import "../../assets/styles/Pet.css";
import Constants from "../../lib/Constants.js";


const PetCard = ({ pet, showAdoptButton }) => {
	const { _id, name, specie, race, gender, age, description, status } = pet;

	const adoptar = async () => {
		const userId = getUserId();

		try {
			const response = await fetch(
				`${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/add-adoption/${_id}`,
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
				console.log(`Solicitud de adopcion enviada`);
			} else {
				console.error("Solicitud de adopcion fallida");
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
			<p>
				<strong>showAdoptButton:</strong> {showAdoptButton}
			</p>
			{showAdoptButton && (
				<button onClick={() => alert("Adopt button clicked: " + _id)}>
					Adoptar
				</button>
			)}
		</div>
	);
};

export default PetCard;
