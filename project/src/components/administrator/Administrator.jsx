import React from "react";
import Navbar from "../Navigation/Navbar.jsx";
import Footer from "../Navigation/Footer.jsx";
import DarAdoptar from "./DarAdoptar.jsx";

const Administrator = () => {
    return(
    <div className="main">
     <Navbar />
      <DarAdoptar />
      <Footer />
    </div>
    );
};

export default Administrator;