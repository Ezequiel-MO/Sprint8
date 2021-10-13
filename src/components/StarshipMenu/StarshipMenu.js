import { StarshipCardContainer } from "./styles";
import { useHistory } from "react-router-dom";

const StarshipMenu = ({ name, model }) => {
  const history = useHistory();
  return (
    <StarshipCardContainer onClick={() => history.push(`/starships/${name}`)}>
      <h3>{name?.toUpperCase()}</h3>
      <h4>{model}</h4>
    </StarshipCardContainer>
  );
};

export default StarshipMenu;
