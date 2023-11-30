import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/AgregarMascota.css";
import Constants from "../../lib/Constants.js";
import Message from "../Navigation/Message";
import { useNavigate, useLocation } from "react-router-dom";

const AgregarMascota = () => {
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const [form, setForm] = useState({
		name: "",
		specie: "",
		race: "",
		gender: "",
		age: "",
		description: "",
		province: "",
	});

	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const petId = queryParams.get("id");

		if (petId) {
			// Fetch pet data based on the provided id
			fetch(`${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/${petId}`)
				.then((response) => response.json())
				.then((data) => {
					// Populate form fields with the fetched data
					setForm({
						name: data.name || "",
						specie: data.specie || "",
						race: data.race || "",
						gender: data.gender || "",
						age: data.age || "",
						description: data.description || "",
						province: data.province || "",
					});
					setIsUpdating(true);
				})
				.catch((error) => console.error("Error fetching pet data:", error));
		}
	}, [location.search]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData();
		Object.entries(form).forEach(([key, value]) => {
			formData.append(key, value);
		});

		try {
			const petId = new URLSearchParams(location.search).get("id");

			const response = await fetch(
				`${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/updatePet/${petId}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(form),
				}
			);

			if (response.ok) {
				setMessage({
					text: 'Se logró  ${isUpdating ? "actualizar" : "agregar"} la información de la mascota!',
					type: "success",
				});
				setTimeout(() => {
					navigate("/pets");
				}, 4000);
			} else {
				setMessage({
					text: 'Error ${isUpdating ? "actualizando" : "agregando"} la información de la mascota!',
					type: "error",
				});
			}
		} catch (error) {
			setMessage({
				text: 'Error ${isUpdating ? "actualizando" : "agregando"} la información de la mascota! ${error}' + error,
				type: "error",
			});
			console.error("Error:", error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 4000);
		}
	};

	return (
		<div>
			<h3 className="text-center mt-3">{isUpdating ? "Actualizar" : "Agregar"} Mascota</h3>
			{message && <Message text={message.text} type={message.type} />}

			<form onSubmit={handleSubmit} className="row dar-adoptar-form mt-4">
				<div className="offset-md-3 col-md-6">
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
								maxLength="12"
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
								value={form.gender}
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
							disabled={loading}
						>
							{loading ? "Enviando formulario..." : isUpdating ? "Actualizar Mascota" : "Agregar Mascota"}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AgregarMascota;
