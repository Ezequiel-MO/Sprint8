import { useParams } from "react-router-dom";

import StarshipFullDetails from "../../components/StarshipFullDetails/StarshipFullDetails";
import { StarshipViewContainer } from "./styles";

const StarshipView = ({ starships }) => {
  const { id } = useParams();
  return (
    <StarshipViewContainer>
      {starships
        .filter((starship) => starship.name === id)
        .map(({ name, manufacturer }) => (
          <StarshipFullDetails
            key={name}
            name={name}
            manufacturer={manufacturer}
          />
        ))}
    </StarshipViewContainer>
  );
};

export default StarshipView;
