import {
  LoginContainer,
  LoginBox,
  LoginTitle,
  LoginButton,
  LoginForm,
  LoginInputs,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [access, setAccess] = useState(false);
  const [registeredEmails, setRegisteredEmails] = useState(
    JSON.parse(localStorage.getItem("registered emails")) || []
  );

  useEffect(() => {
    access && history.push("/main");
  }, [access]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailinArray = registeredEmails.some(
      (registeredEmail) => email === registeredEmail
    );
    if (isEmailinArray) {
      setAccess(true);
    } else {
      alert("user not found, please register");
      history.push("/");
    }
  };
  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>
          <h2>Sign in to start</h2>
        </LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInputs>
            <input
              type='text'
              placeholder='your user here ...'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='your email here ...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LoginInputs>
          <LoginButton type='submit'>Enter here</LoginButton>
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
