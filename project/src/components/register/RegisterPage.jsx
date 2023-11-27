import React, { useState } from 'react';
import Navbar from '../Navigation/Navbar.jsx';
import Footer from '../Navigation/Footer.jsx';
import '../../assets/styles/Register.css';
import RegisterImage from '../../assets/images/Register_user.png';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './RergisterForm.jsx';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const registerHandler = (event) => {
    event.preventDefault();

    const registro = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      age: event.target.age.value,
      roll: event.target.roll.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registro),
    };

    console.log(
      'URL de la solicitud:',
      'http://localhost:5000/api/users/register'
    );

    fetch('http://localhost:5000/api/users/register', requestOptions)
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        console.log('Respuesta del servidor:', data);
        setSolicitudEnviada(true);
        setMostrarFormulario(false);
        //navigate('/');
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  };

  return (
    <div>
      <Navbar />

      {mostrarFormulario && <RegisterForm onSubmit={registerHandler} />}

      {solicitudEnviada && !mostrarFormulario && (
        <div className='confirmation-window'>
          <p>Tu solicitud fue recibida con éxito</p>
          <img src={RegisterImage} alt='Imagen de confirmación' />
          <button className='home-button' onClick={() => navigate('/')}>
            Volver al inicio
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default RegisterPage;
