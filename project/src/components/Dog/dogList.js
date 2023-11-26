import Dog from "./dogs";
import dogs from "./dogs";

const dogList = (props) => {
  return (
    <ul>
      {props.dogList.map((dogs) => {
        return (
          <Dog
            name={dogs.name}
            specie={dogs.specie}
            race={dogs.race}
            gender={dogs.gender}
            age={dogs.age}
            description={dogs.description}
            province={dogs.province}
          />
        );
      })}
    </ul>
  );
};

export default dogList;
