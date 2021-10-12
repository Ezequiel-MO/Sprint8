import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const UpperHeader = styled.div`
  height: 134px;
  border-bottom: 1px solid #686868;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  & img {
    position: absolute;
    height: 5.5rem;
    left: 43.5%;
  }
`;

export const StyledLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
  color: #ccc;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
  &:active {
    border-bottom: 3px solid orangered;
  }
`;

export const HeaderMenu = styled.div`
  height: 38px;
  border-bottom: 1px solid #686868;
  display: flex;
  justify-content: center;
`;

export const HomeMenu = styled.div`
  height: 38px;
  border-left: 1px solid #686868;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
  &:active {
    border-bottom: 3px solid blue;
  }
`;
export const StarshipMenu = styled(HomeMenu)`
  border-right: 1px solid #686868;
`;
