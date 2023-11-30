import React from "react";
import Navbar from "../Navigation/Navbar.jsx";
import Footer from "../Navigation/Footer.jsx";
import AgregarMascota from "./AgregarMascota.jsx";

const Administrator = () => {
	return (
		<div className="main">
			<Navbar />
			<div>
				<AgregarMascota />
				<Footer />
			</div>
		</div>
	);
};

export default Administrator;
