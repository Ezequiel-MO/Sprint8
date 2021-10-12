import {
  SignUpContainer,
  SignUpBox,
  SignUpTitle,
  SignUpButton,
  SignUpForm,
  SignUpInputs,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const SignUp = ({ isAuth, setIsAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [registeredEmails, setRegisteredEmails] = useState(
    JSON.parse(localStorage.getItem("registered emails")) || []
  );

  const updateLocalStorage = () =>
    localStorage.setItem("registered emails", JSON.stringify(registeredEmails));

  useEffect(() => {
    isAuth && history.push("/main");
    // eslint-disable-next-line
  }, [isAuth]);

  useEffect(() => {
    updateLocalStorage();
    // eslint-disable-next-line
  }, [registeredEmails]);

  const addEmailToArray = (email) =>
    setRegisteredEmails((prevState) => [...prevState, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailinArray = registeredEmails.some(
      (registeredEmail) => email === registeredEmail
    );
    if (isEmailinArray) {
      alert("This email account already exists, proceed to login");
      history.push("/login");
    } else {
      addEmailToArray(email);
      setIsAuth(true);
    }
  };

  return (
    <SignUpContainer>
      <SignUpBox>
        <SignUpTitle>
          <h2>Welcome to The Sign Up page</h2>
        </SignUpTitle>
        <SignUpForm onSubmit={handleSubmit}>
          <SignUpInputs>
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
          </SignUpInputs>
          <SignUpButton type='submit'>Sign UP </SignUpButton>
        </SignUpForm>
      </SignUpBox>
    </SignUpContainer>
  );
};

export default SignUp;
