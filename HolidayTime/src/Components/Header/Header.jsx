import { Section,Container, LogoImg, List, StyledLink, Line } from "./Header.styled";
import Globus from "../../assets/SVG/globus.svg";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <Section>
      <Container>
        <LogoImg src={Logo} alt="Logo" />
        <List>
          <li>
            <StyledLink to="/general">ГОЛОВНА</StyledLink>
          </li>
          <Line />
          <li>
            <StyledLink to="/aboutUs">ПРО НАС</StyledLink>
          </li>
          <Line />
          <li>
            <StyledLink to='/reservation'>ЗАБРОНЮВАТИ</StyledLink>
          </li>
          <Line />
          <li>
            <StyledLink to='/contacts'>КОНТАКТИ</StyledLink>
          </li>
          <Line />
          <li>
            <StyledLink to='/personal'>ОСОБИСТИЙ КАБІНЕТ</StyledLink>
          </li>
          <Line />
          <li>
            <img src={Globus} alt="Globus" />
            <h2>UA</h2>
          </li>
        </List>
      </Container>
    </Section>
  );
};

export default Header;
