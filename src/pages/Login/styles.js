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
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const LoginTitle = styled.div`
  text-align: center;
`;

export const LoginForm = styled.form`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 10rem;
  & input {
    height: 2rem;
    border-radius: 1rem;
    width: 15rem;
    padding-left: 1rem;
  }
  & input::placeholder {
    padding-left: 1rem;
    font-size: 1rem;
  }
`;

export const LoginButton = styled.button`
  width: 10rem;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  background-color: orange;
  color: #fff;
  cursor: pointer;
  margin-bottom: 1rem;
  &:active {
    transform: scale(1.03);
  }
`;
