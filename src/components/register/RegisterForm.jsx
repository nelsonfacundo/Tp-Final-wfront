import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    firstName: "",
    lastName: "",
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Creá tu cuenta</h2>
      <label htmlFor="firstName">Nombre</label>
      <input
        type="text"
        {...register("firstName", {
          required: "Este campo es obligatorio",
          minLength: {
            value: 2,
            message: "Este campo debe contener al menos 2 caracteres.",
          },
        })}
      />
      <p>{errors.firstName?.message}</p>

      <label htmlFor="lastName">Apellido</label>
      <input
        type="text"
        {...register("lastName", {
          required: "Este campo es obligatorio",
          minLength: {
            value: 2,
            message: "Este campo debe contener al menos 2 caracteres.",
          },
        })}
      />
      <p>{errors.lastName?.message}</p>

      <label htmlFor="age">Edad</label>
      <input
        type="number"
        {...register("age", {
          required: "Este campo es obligatorio",
          min: {
            value: 13,
            message: "La edad debe ser de 13 años o más",
          },
          max: {
            value: 120,
            message: "La edad debe ser menor a 120 años",
          },
        })}
      />
      <p>{errors.age?.message}</p>

      <label htmlFor="role">Función (seleccionar) </label>
      <select name="role">
        <option value="user"> Usuario</option>
        <option value="administrador">Administrador</option>
      </select>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email", { required: "Este campo es obligatorio" })}
      />

      <p>{errors.email?.message}</p>

      <label htmlFor="password">Constraseña</label>
      <input
        type="password"
        {...register("password", {
          required: "Este campo es obligatorio",
          minLength: {
            value: 8,
            message: "Su contraseña debe contener al menos 8 caracteres",
          },
        })}
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Enviar</button>
      <p>¿Aún no tenés una cuenta? Registrate</p>
    </form>
  );
};

export default RegisterForm;
