import { StarshipFullDetailsContainer } from "./styles";

const StarshipFullDetails = ({ name, manufacturer }) => {
  return (
    <StarshipFullDetailsContainer>
      <h2>{name}</h2>
      <h4>{manufacturer}</h4>
    </StarshipFullDetailsContainer>
  );
};

export default StarshipFullDetails;
