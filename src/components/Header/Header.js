import {
  HeaderContainer,
  UpperHeader,
  HeaderMenu,
  HomeMenu,
  StarshipMenu,
  StyledLink,
} from "./styles";
import logo from "../../assets/StarwarsLogo.jpg";
import { useHistory } from "react-router-dom";

const Header = ({ isAuth }) => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <UpperHeader>
        <img src={logo} alt='logo' />
        {isAuth ? (
          <StyledLink to='/login' onClick={(e) => e.preventDefault()}>
            LOG IN
          </StyledLink>
        ) : (
          <StyledLink to='/login'>LOG IN</StyledLink>
        )}
        <p>//</p>
        {isAuth ? (
          <StyledLink to='/' onClick={(e) => e.preventDefault()}>
            SIGN UP
          </StyledLink>
        ) : (
          <StyledLink to='/'>SIGN UP</StyledLink>
        )}
      </UpperHeader>
      <HeaderMenu>
        <HomeMenu>HOME</HomeMenu>
        <StarshipMenu onClick={() => history.push("/main")}>
          STARSHIPS
        </StarshipMenu>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
