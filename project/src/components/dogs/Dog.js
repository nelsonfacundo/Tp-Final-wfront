import { Link } from "react-router-dom";

const Dog = (props) => {
  return (
    <li>
      <div>
        <Link to={`/dogs/${props.id}`}>
          <div></div>
          <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h3>{props.specie}</h3>
            <h3>{props.race}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.description}</h3>
            <h3>{props.privince}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Dog;
