import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const LoginHandler = (event) => {
    const login = {
      email: event.target.Email.value,
      password: event.target.Password.value,
    };
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };
    fetch("localhost:3000/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        navigate("/");
      })
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      });
  };

  return (
    <div>
      <form onSubmit={LoginHandler}>
        <input type="Email" name="Email" placeholder="Ingrese email" />
        <br />
        <input type="password" name="Password" placeholder="Password" /> <br />
        <button type="submit">iniciar sesión </button>
      </form>
    </div>
  );
};

export default Login;
