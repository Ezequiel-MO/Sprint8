import { LoginContainer, LoginBox, LoginTitle, LoginButton } from "./styles";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>
          <h1>Welcome to Starwars</h1>
        </LoginTitle>
        <LoginButton onClick={() => history.push("/main")}>
          Enter here
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
