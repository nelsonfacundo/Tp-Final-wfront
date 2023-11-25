import Navbar from "../Navigation/Navbar.jsx";
import Footer from "../Navigation/Footer.jsx";
import "../../assets/styles/Pet.css";
import PetList from "./PetList";
import React, { useState, useEffect } from "react";

const PetPage = (props) => {
	const [pets, setPets] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const apiUrl = `http://localhost:3001/api/pets/adoptables?pageSize=${pageSize}&page=${currentPage}`;

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
	}, []);

	return (
		<div className="main">
			<Navbar />
			<div className="pet-container">
				<div className="col-left">
					<h1>Adoptá</h1>
				</div>
				<PetList pets={pets} />
			</div>
			<Footer />
		</div>
	);
};

export default PetPage;
