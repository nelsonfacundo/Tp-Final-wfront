import React from 'react';
import Pet from "./Pet";

const PetList = (props) => {
    return (
        <div className="col-right">                 
            {props.pets.map((pet) => (
                <Pet key={pet._id} pet={pet} showAdoptButton={props.showAdoptButton} />
            ))}
        </div>
    );
}

export default PetList;
