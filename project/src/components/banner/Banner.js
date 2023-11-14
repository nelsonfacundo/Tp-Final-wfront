import React from "react";
import BannerImage from "../../assets/images/Banner.png"; // Reemplaza con la ruta correcta de tu imagen
import "../../assets/styles/banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={BannerImage} className="banner"></img>
    </div>
  );
};

export default Banner;
