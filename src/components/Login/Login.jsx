import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar.jsx";
import Footer from "../Navigation/Footer.jsx";
import Constants from "../../lib/Constants.js";

const Login = (props) => {
	const navigate = useNavigate();
	const LoginHandler = (event) => {
		event.preventDefault();
		const login = {
			email: event.target.Email.value,
			password: event.target.Password.value,
		};
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(login),
		};
		fetch(
			`${Constants.API_BASE_URL}:${Constants.API_PORT}/api/users/login`,
			requestOptions
		)
			.then((response) => {
				if (!response.ok) {
					alert("La solicitud no fue exitosa");
					throw new Error("Network response was not ok");
				}
				return response.json(); // Parse response body as JSON
			})
			.then((data) => {
        console.log(data);
				alert("Respuesta del servidor:", JSON.stringify(data));
			//	navigate("/");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div>
			<Navbar />
			<section className="container">
				<form onSubmit={LoginHandler} className="form">
					<input type="Email" name="Email" placeholder="Ingrese email" />
					<br />
					<input type="password" name="Password" placeholder="Password" />{" "}
					<br />
					<button type="submit">iniciar sesión </button>
				</form>
			</section>
			<Footer />
		</div>
	);
};

export default Login;
