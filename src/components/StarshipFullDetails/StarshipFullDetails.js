import {
  StarshipFullDetailsContainer,
  MainImage,
  Title,
  Description,
  Left,
  Right,
} from "./styles";

const StarshipFullDetails = ({
  starship: {
    name,
    manufacturer,
    model,
    cost_in_credits,
    max_atmosphering_speed,
    length,
    crew,
  },
}) => {
  return (
    <StarshipFullDetailsContainer>
      <MainImage></MainImage>
      <Title>
        <h2>{name.toUpperCase()}</h2>
      </Title>
      <Description>
        <p>asdfasdfasdfasdfsadfasdf</p>
      </Description>
      <Left>
        <h4>model: {model}</h4>
        <h4>cost in credits: {cost_in_credits}</h4>
        <h4>Atmospheric speed: {max_atmosphering_speed}</h4>
      </Left>
      <Right>
        <h4>manufacturer: {manufacturer}</h4>
        <h4>legth: {length}</h4>
        <h4>crew: {crew}</h4>
      </Right>
    </StarshipFullDetailsContainer>
  );
};

export default StarshipFullDetails;
