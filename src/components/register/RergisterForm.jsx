import React from 'react';

const RegisterForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className='form'>
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
);

export default RegisterForm;
