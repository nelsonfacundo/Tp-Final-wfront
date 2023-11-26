import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Pagination from "../Navigation/Pagination";
import "../../assets/styles/Pet.css";
import PetList from "./PetList";
import React, { useState, useEffect } from "react";
import Constants from "../../lib/Constants.js";

const PetPage = (props) => {
	const [pets, setPets] = useState([]);
	const [pageSize, setPageSize] = useState(3);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPets, setTotalPets] = useState(0);

	const apiUrl = `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/adoptables?pageSize=${pageSize}&page=${currentPage}`;

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const response = await fetch(apiUrl);
				if (response.ok) {
					const { pets, totalPets } = await response.json();
					setPets(pets);
					setTotalPets(totalPets);
				} else {
					console.error("Network response was not ok");
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchPets();
	}, [apiUrl, currentPage]);

	const handlePageChange = (newPage) => {
		if (newPage !== currentPage) {
			setCurrentPage(newPage);
		}
	};

	const totalPages = Math.ceil(totalPets / pageSize);

	return (
		<div className="main">
			<Navbar />
			<div className="pet-container">
				<div className="col-left">
					<h1>Adoptá</h1>
				</div>
				<PetList pets={pets} showAdoptButton />
			</div>
			<div className="pet-container">
				<div className="col-left">
					<div>&nbsp;</div>
				</div>
				<div className="col-right">
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PetPage;
