import {
  HeaderContainer,
  UpperHeader,
  HeaderMenu,
  HomeMenu,
  StarshipMenu,
} from "./styles";
import logo from "../../assets/StarwarsLogo.jpg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <UpperHeader>
        <img src={logo} alt='logo' />
        <h4>LOG IN // SIGN UP</h4>
      </UpperHeader>
      <HeaderMenu>
        <HomeMenu>HOME</HomeMenu>
        <StarshipMenu onClick={() => history.push("/")}>STARSHIPS</StarshipMenu>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
