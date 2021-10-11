import { useParams } from "react-router-dom";

import StarshipFullDetails from "../../components/StarshipFullDetails/StarshipFullDetails";
import { StarshipViewContainer } from "./styles";

const StarshipView = ({ starships }) => {
  const { id } = useParams();
  return (
    <StarshipViewContainer>
      {starships
        .filter((starship) => starship.name === id)
        .map((starship) => (
          <StarshipFullDetails key={starship.name} starship={starship} />
        ))}
    </StarshipViewContainer>
  );
};

export default StarshipView;
