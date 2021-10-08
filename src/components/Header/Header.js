import {
  HeaderContainer,
  UpperHeader,
  HeaderMenu,
  HomeMenu,
  StarshipMenu,
} from "./styles";
import logo from "../../assets/StarwarsLogo.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <UpperHeader>
        <img src={logo} alt='logo' />
        <h4>LOG IN // SIGN UP</h4>
      </UpperHeader>
      <HeaderMenu>
        <HomeMenu>HOME</HomeMenu>
        <StarshipMenu>STARSHIPS</StarshipMenu>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
