import Navbar from "../navbar/Navbar.js";
import Banner from "../banner/Banner.js";
import Footer from "../footer/Footer.js";
import "../../assets/styles/Home.css";
import PetList from "./PetList";
import React, { useState, useEffect } from "react";

const PetPage = (props) => {
	const [pets, setPets] = useState([]);
	const apiUrl =
		"http://localhost:3001/api/pets/";

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const response = await fetch(apiUrl);
				if (response.ok) {
					const data = await response.json();
					setPets(data);
					console.log(pets);
				} else {
					console.error("Network response was not ok");
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchPets();
	}, [pets]);

	return (
		<div className="main">
			<Navbar />
			<Banner />
			<div>
				<h1>Pets</h1>
				<PetList pets={pets} />
			</div>
			<Footer />
		</div>
	);
};

export default PetPage;
