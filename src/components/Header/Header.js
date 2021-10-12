import {
  HeaderContainer,
  UpperHeader,
  HeaderMenu,
  HomeMenu,
  StarshipMenu,
  StyledLink,
} from "./styles";
import logo from "../../assets/StarwarsLogo.jpg";
import { useHistory, Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <UpperHeader>
        <img src={logo} alt='logo' />
        <StyledLink to='/login'>LOG IN </StyledLink>
        <p>//</p>
        <StyledLink to='/'>SIGN UP</StyledLink>
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
