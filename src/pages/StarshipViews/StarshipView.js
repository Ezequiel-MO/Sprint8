import { useParams } from "react-router-dom";
import StarshipFullDetails from "../../components/StarshipFullDetails/StarshipFullDetails";
import { starshipsData } from "../../data/data";
import { mergeWithImages } from "../../utils/utils";
import { StarshipViewContainer } from "./styles";

const StarshipView = ({ starships }) => {
  const { id } = useParams();
  const mergedStarships = mergeWithImages(starships, starshipsData);
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
