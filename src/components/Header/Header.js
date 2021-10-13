import {
  HeaderContainer,
  UpperHeader,
  HeaderMenu,
  HomeMenu,
  Menu,
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
        <p>/ - /</p>
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
        <Menu onClick={() => history.push("/main")}>STARSHIPS</Menu>
        <Menu onClick={() => history.push("/actors")}>ACTORS</Menu>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
