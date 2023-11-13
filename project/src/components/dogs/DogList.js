import Dog from "./dogs";

const DogList = (props) => {
  return (
    <ul>
      {props.Dogs.map((Dog) => {
        return (
          <dogs
            id={Dog._id}
            name={Dog.name}
            age={Dog.age}
            specie={Dog.sprecie}
            race={Dog.race}
            gender={Dog.gender}
            description={Dog.description}
            privince={Dog.privince}
          />
        );
      })}
    </ul>
  );
};

export default DogList;
