import Dog from "./dog";

const DogList = (props) => {
  return (
    <ul>
      {props.Dog.map((dogs) => {
        return (
          <Dog
            id={dogs._id}
            name={dogs.name}
            age={dogs.age}
            specie={dogs.sprecie}
            race={dogs.race}
            gender={dogs.gender}
            description={dogs.description}
            province={dogs.province}
          />
        );
      })}
    </ul>
  );
};

export default DogList;
