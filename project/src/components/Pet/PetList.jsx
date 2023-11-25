import React from 'react';
import Pet from "./Pet";

const PetList = (props) => {
    return (
        <div>
            {props.pets.map((pet) => (
                <Pet key={pet._id} pet={pet} />
            ))}
        </div>
    );
}

export default PetList;
