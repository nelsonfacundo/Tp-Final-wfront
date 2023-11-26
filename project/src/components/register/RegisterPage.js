import React from 'react';
import Navbar from '../navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import { useNavigate } from 'react-router-dom';

const RegisterPage = (props) => {
  const navigate = useNavigate();

  const registerHandler = (event) => {
    event.preventDefault(); // 👈 HACE QUE NO SE REFRESQUE LA PÁGINA

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
        navigate('/');
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
        // Aquí puedes agregar más lógica de manejo de errores si es necesario
      });
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={registerHandler}>
        <h2>Creá tu cuenta</h2>
        <label htmlFor='firstName'>Nombre</label>
        <input type='text' name='firstName' /> <br />
        <label htmlFor='lastName'>Apellido</label>
        <input type='text' name='lastName' /> <br />
        <label htmlFor='firstName'>Edad</label>
        <input type='number' name='age' /> <br />
        <label htmlFor='roll'>Función (seleccionar) </label>
        <select name='roll'>
          <option value='user'> Usuario</option>
          <option value='administrador'>Administrador</option>
        </select>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' /> <br />
        <label htmlFor='pasword'>Constraseña</label>
        <input type='password' name='password' /> <br />
        <button type='submit'>Enviar</button>
        <p>¿Aún no tenés una cuenta? Registrate</p>
      </form>
      <Footer />
    </div>
  );
};

export default RegisterPage;
