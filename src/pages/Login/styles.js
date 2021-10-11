import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  background-color: #333;
  border-radius: 1rem;
  height: 20rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LoginTitle = styled.div`
  text-align: center;
`;

export const LoginButton = styled.button`
  width: 10rem;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  background-color: orange;
  color: #fff;
  cursor: pointer;
  &:active {
    transform: scale(1.03);
  }
`;
