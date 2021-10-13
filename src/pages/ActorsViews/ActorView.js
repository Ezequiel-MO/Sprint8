import { useParams } from "react-router-dom";
import ActorFullDetails from "../../components/ActorFullDetails/ActorFullDetails";
import { actorsData } from "../../data/data";
import { mergeWithImages } from "../../utils/utils";
import { ActorViewContainer } from "./styles";

const ActorView = ({ actors }) => {
  const { id } = useParams();
  const mergedActors = mergeWithImages(actors, actorsData);
  return (
    <ActorViewContainer>
      {mergedActors
        .filter((actor) => actor.name === id)
        .map((actor) => (
          <ActorFullDetails key={actor.name} actor={actor} />
        ))}
    </ActorViewContainer>
  );
};

export default ActorView;
