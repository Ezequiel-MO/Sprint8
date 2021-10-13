import styled from "styled-components";

export const StarshipFullDetailsContainer = styled.div`
  width: 60%;
  height: fit-content;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  background-color: #333;
  padding: 1rem;
  margin: 1rem 0.5rem;
`;

export const MainImage = styled.div`
  grid-column-start: 1;
  grid-column-end: span 5;
  & img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
    border-bottom: 4px solid red;
  }
`;
export const Title = styled.div`
  grid-column-start: 1;
  grid-column-end: span 5;
  grid-row: 2;
`;

export const Description = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: span 5;
  grid-row: 3;
`;

export const Pilots = styled.div`
  grid-column-start: 1;
  grid-column-end: span 5;
  grid-row: 4;
`;

export const Movies = styled.div`
  grid-column-start: 1;
  grid-column-end: span 5;
  grid-row: 5;
`;

export const Left = styled.div`
  grid-column: 1/3;
  grid-row: 6;
`;

export const Right = styled.div`
  grid-column: 4/6;
  grid-row: 6;
`;
