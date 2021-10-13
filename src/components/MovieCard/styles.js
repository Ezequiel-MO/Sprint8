import styled from "styled-components";

export const MovieCardContainer = styled.div`
  border-bottom: 2px solid orangered;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;
export const Title = styled.div`
  grid-column: 1/3;
`;
export const Director = styled.div`
  grid-column: 3/5;
`;
export const ReleaseDate = styled.div`
  grid-column: 5/6;
`;
