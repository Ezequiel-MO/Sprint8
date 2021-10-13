import styled from "styled-components";

export const PilotCardContainer = styled.div`
  border-bottom: 2px solid orangered;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;

export const Name = styled.div`
  grid-column: 1/3;
`;
export const Gender = styled.div`
  grid-column: 3/4;
`;
export const HairColor = styled.div`
  grid-column: 5/6;
`;
