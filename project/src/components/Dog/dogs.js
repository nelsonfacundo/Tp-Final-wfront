import { useNavigate } from "react-router-dom";

const Dog = (props) => {
  const navigate = useNavigate();
  const LoginHandler = (event) => {
    const dogs = {
      name: event.target.name.value,
      specie: event.target.specie.value,
      race: event.target.race.value,
      gender: event.target.gender.value,
      age: event.target.age.value,
      description: event.target.description.value,
      province: event.target.province.value,
    };
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(dogs),
    };
    fetch("localhost:3000/api/pets/", requestOptions)
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

  return <div></div>;
};

export default Dog;
