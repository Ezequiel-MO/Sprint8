import { ActorsCardContainer } from "./styles";
import { useHistory } from "react-router-dom";

const ActorsCard = ({ name, gender }) => {
  const history = useHistory();
  return (
    <ActorsCardContainer onClick={() => history.push(`/actors/${name}`)}>
      <h3>{name?.toUpperCase()}</h3>
      <h4>{gender}</h4>
    </ActorsCardContainer>
  );
};

export default ActorsCard;
