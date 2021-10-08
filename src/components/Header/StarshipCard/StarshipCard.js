import { StarshipCardContainer } from "./styles";

const StarshipCard = ({ name, model }) => {
  return (
    <StarshipCardContainer>
      <h3>{name.toUpperCase()}</h3>
      <h4>{model}</h4>
    </StarshipCardContainer>
  );
};

export default StarshipCard;
