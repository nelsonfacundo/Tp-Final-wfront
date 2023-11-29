import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/DarAdoptar.css";
import Constants from "../../lib/Constants.js";
import Message from "../Navigation/Message";
import { useNavigate } from "react-router-dom";

const DarAdoptar = () => {
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const [form, setForm] = useState({
		name: "",
		specie: "",
		race: "",
		gender: "",
		age: "",
		description: "",
		province: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		Object.entries(form).forEach(([key, value]) => {
			formData.append(key, value);
		});

		try {
			const response = await fetch(
				`${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/addPet`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(form),
				}
			);

			if (response.ok) {
				setMessage({
					text: "Se logró dar en adopción a la mascota!",
					type: "success",
				});
				setTimeout(() => {
					navigate("/pets");
				}, 3000);
			} else {
				console.error("Error subiendo la mascota");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<h3>Agregar Mascota</h3>
      {message && <Message text={message.text} type={message.type} />}

			<form onSubmit={handleSubmit} className="row dar-adoptar-form mt-4">
				<div className="col-md-9">
					<div className="row">
						<div className="form-group col-md-8">
							<label htmlFor="name">Nombre:</label>
							<input
								type="text"
								id="name"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
                maxlength="12" 
							/>
						</div>

						<div className="form-group col-md-4">
							<label htmlFor="age">Edad:</label>
							<input
								type="number"
								id="age"
								name="age"
								value={parseInt(form.age, 10)}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className="form-group col-md-12">
						<label htmlFor="description">Descripción:</label>
						<textarea
							id="description"
							name="description"
							value={form.description}
							onChange={handleChange}
							required
							rows="5"
						/>
					</div>

					<div className="row">
						<div className="form-group col-md-4">
							<label htmlFor="race">Raza:</label>
							<input
								type="text"
								id="race"
								name="race"
								value={form.race}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group col-md-4">
							<label htmlFor="specie">Especie:</label>
							<input
								type="text"
								id="specie"
								name="specie"
								value={form.specie}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group col-md-4">
							<label htmlFor="gender">Género:</label>
							<input
								type="text"
								id="gender"
								name="gender"
								value={form.gender.toString()}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-4">
							<label htmlFor="province">Provincia:</label>
							<input
								type="text"
								id="province"
								name="province"
								value={form.province}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					{/* Fin Formulario*/}
					<div className="form-group col-md-12">
						<button
							type="submit"
							className="btn btn-secondary col-md-12 cargar-mascotas"
						>
							Cargar Mascota
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default DarAdoptar;
