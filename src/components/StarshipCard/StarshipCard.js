import { StarshipCardContainer, Title, Model, Manufacturer } from "./styles";

const StarshipCard = ({ name, model, manufacturer }) => {
  return (
    <StarshipCardContainer>
      <Title>
        <strong>Name: </strong>
        {name}
      </Title>
      <Model>
        <strong>Model: </strong>
        {model}
      </Model>
      <Manufacturer>
        <strong>Manufacturer: </strong>
        {manufacturer}
      </Manufacturer>
    </StarshipCardContainer>
  );
};

export default StarshipCard;
