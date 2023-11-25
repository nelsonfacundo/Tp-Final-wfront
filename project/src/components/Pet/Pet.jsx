import React from 'react';
import "../../assets/styles/Pet.css";

const PetCard = ({ pet }) => {
  const {  name, specie, race, gender, age, description, province, status } = pet;

  return (
    <div className="petCard">
      
      <h3>{name}</h3>

      <ul>
        <li>
          <strong>Specie:</strong> {specie}
        </li>
        <li>
          <strong>Race:</strong> {race}
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Age:</strong> {age}
        </li>
      </ul>

      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Province:</strong> {province}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>

    </div>
  );
};

export default PetCard;
