import { useNavigate } from "react-router-dom";

const Dog = (props) => {
  const navigate = useNavigate();

  const dogs = {
    name: props.name.value,
    specie: props.specie.value,
    race: props.race.value,
    gender: props.gender.value,
    age: props.age.value,
    description: props.description.value,
    province: props.province.value,
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

  return <div></div>;
};

export default Dog;
