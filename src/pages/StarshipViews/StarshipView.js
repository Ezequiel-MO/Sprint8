import { useParams } from "react-router-dom";
import StarshipFullDetails from "../../components/StarshipFullDetails/StarshipFullDetails";
import { mergeStarshipsWithImages } from "../../utils/utils";
import { StarshipViewContainer } from "./styles";

const StarshipView = ({ starships }) => {
  const { id } = useParams();
  const mergedStarships = mergeStarshipsWithImages(starships);
  return (
    <StarshipViewContainer>
      {mergedStarships
        .filter((starship) => starship.name === id)
        .map((starship) => (
          <StarshipFullDetails key={starship.name} starship={starship} />
        ))}
    </StarshipViewContainer>
  );
};

export default StarshipView;
