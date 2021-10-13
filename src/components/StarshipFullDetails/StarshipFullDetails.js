import {
  StarshipFullDetailsContainer,
  MainImage,
  Title,
  Pilots,
  Left,
  Right,
} from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
import PilotCard from "../PilotCard/PilotCard";

const StarshipFullDetails = ({
  starship: {
    name,
    manufacturer,
    model,
    cost_in_credits,
    max_atmosphering_speed,
    length,
    crew,
    image,
    pilots,
  },
}) => {
  const [pilotData, setPilotData] = useState([]);

  useEffect(() => {
    console.log("pilot data=>", pilotData);
  }, [pilotData]);

  useEffect(() => {
    const getPilots = () => {
      let responses = pilots.map(async (pilot) => await axios.get(pilot));
      Promise.all(responses).then((values) => setPilotData(values));
    };
    getPilots();
  }, [pilots]);

  return (
    <StarshipFullDetailsContainer>
      <MainImage>
        <img src={image} alt='starship-pic' />
      </MainImage>
      <Title>
        <h2>{name.toUpperCase()}</h2>
      </Title>
      <Pilots>
        <ul>
          {pilotData.map(({ data: { name, gender, hair_color } }) => (
            <PilotCard
              key={name}
              name={name}
              gender={gender}
              hair_color={hair_color}
            />
          ))}
        </ul>
      </Pilots>
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
