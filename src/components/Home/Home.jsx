import React from "react";
import Navbar from "../Navigation/Navbar.jsx";
import Banner from "../Navigation/Banner.jsx";
import Footer from "../Navigation/Footer.jsx";
import "../../assets/styles/Home.css";
import icono1 from "../../assets/images/Icono1.png";
import icono2 from "../../assets/images/Icono2.png";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Banner />
      <div className="main-conteiner">
        <div className="section">
          <div className="section-1">
            <div className="section-img">
              <img src={icono1} className="logo" alt="Logo"></img>
            </div>
            <div className="section-title">
              <h2>PON EN ADOPCIÓN</h2>
            </div>
            <div className="section-paragraph">
              <p>
                ¿Buscas a tu compañero de vida perfecto? Nuestra aplicación web
                de adopción de mascotas es tu mejor aliado. Hay muchos
                pequeñines que están buscando un hogar amoroso. Con nuestra
                herramienta puedes encontrar a tu nueva mascota por ubicación
                geográfica, especie, raza y edad, lo que te permite filtrar las
                opciones y asegurarte de que tu nuevo amigo se adapte
                perfectamente a tu estilo de vida. ¡Encuentra a tu compañero
                ideal y bríndale un hogar lleno de amor y cuidado hoy mismo!.
              </p>
            </div>
          </div>
          <div className="section-2">
            <div className="section-img">
              <img src={icono2} className="logo" alt="Logo"></img>
            </div>
            <div className="section-title">
              <h2>PON EN ADOPCIÓN</h2>
            </div>
            <div className="section-paragraph">
              <p>
                Nuestra aplicación web te brinda la oportunidad de hacer una
                diferencia en la vida de un animalito. Puedes poner en adopción
                perros, gatos y animales exóticos de manera sencilla y segura.
                Conecta con amantes de los animales que buscan darles un hogar
                cálido y amoroso. Ayuda a estas adorables criaturas a encontrar
                una nueva familia y un futuro seguro. ¡Únete a nuestra comunidad
                de cuidadores y hagamos juntos un mundo mejor para las mascotas!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
