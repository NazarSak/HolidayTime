import Map from "../../assets/Map.png";
import {
  ContainerTitle,
  GeneralDiv,
  List,
  Line,
  LongerLine,
  Section,
  ShortLi,
  LongerLi,
} from "./contacts.styled";

const Contacts = () => {
  return (
    <GeneralDiv>
      <ContainerTitle>
        <h2>Контакти</h2>
      </ContainerTitle>
      <Section>
        <List>
          <ShortLi>
            <p>Телефон</p>
            <Line />
            <p>+38(097)119-89-83</p>
          </ShortLi>
          <ShortLi>
            <p>Графік роботи</p>
            <Line />
            <p>пн-пт 08:00-22:00 сб 09:00-21:00 вс 10:00-20:00</p>
          </ShortLi>
          <ShortLi>
            <p>Ел. пошта</p>
            <Line />
            <p>hello@gmail.com</p>
          </ShortLi>
          <LongerLi>
            <p>Адреса офісу</p>
            <LongerLine />
            <p>м.Київ,вул.Малевича,буд. 4</p>
          </LongerLi>
          <li>
            <img src={Map} alt="Map" />
          </li>
        </List>
      </Section>
    </GeneralDiv>
  );
};

export default Contacts;
