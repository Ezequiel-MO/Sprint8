import { PilotCardContainer, Name, Gender, HairColor } from "./styles";

const PilotCard = ({ name, gender, hair_color }) => {
  return (
    <PilotCardContainer>
      <Name>
        <strong>Name: </strong>
        {name}
      </Name>
      <Gender>
        <strong>Gender: </strong>
        {gender}
      </Gender>
      <HairColor>
        <strong>Hair Color: </strong>
        {hair_color}
      </HairColor>
    </PilotCardContainer>
  );
};

export default PilotCard;
