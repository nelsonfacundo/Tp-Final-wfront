import React from "react";
import "../../assets/styles/Pet.css";

const PetCard = ({ pet }) => {
	const { name, specie, race, gender, age, description, status } =
		pet;

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
		</div>
	);
};

export default PetCard;
