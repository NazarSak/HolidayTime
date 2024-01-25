import { useState } from "react";
import ArrayHouses from "../../Helpers/ArrayHouses";
import Arrow from "../../assets/SVG/arrow.svg";
import ArrowTopFunc from "../../Helpers/ArrowTopFunc";
import {
  ContainerTitle,
  List,
  Line,
  DetailsTitleCon,
  ConDescription,
  LineTitleCon,
  DropdownContainer,
  ListHouses,
  ArrowImg,
  StyledLink,
  Li,
} from "./reserve.styled";

const Reserve = () => {
  const [selectedHouse, setSelectedHouse] = useState("");
  const [isOpenList, setIsOpenList] = useState(false);

  console.log(selectedHouse);

  const filteredHouse = () => {
    return selectedHouse
      ? ArrayHouses.filter((house) => house.location === selectedHouse)
      : ArrayHouses;
  };

  const handleOpen = () => {
    setIsOpenList(!isOpenList);
  };

  console.log(isOpenList);

  return (
    <>
      <ContainerTitle>
        <h2>Забронювати будиночок</h2>
      </ContainerTitle>
      <DropdownContainer>
        <label>
          <h2 onClick={handleOpen}>Оберіть місцерозташування:</h2>
          <ListHouses
            value={selectedHouse}
            onChange={(e) => setSelectedHouse(e.currentTarget.value)}
            isopen={isOpenList ? 1 : 0}
            size={5}
          >
            <option value="" onClick={handleOpen}>
              Усі місця
            </option>
            <option value="Київ" onClick={handleOpen}>
              Київ
            </option>
            <option value="Хмельницьк" onClick={handleOpen}>
              Хмельницьк
            </option>
            <option value="Одеса" onClick={handleOpen}>
              Одеса
            </option>
            <option value="Карпати" onClick={handleOpen}>
              Карпати
            </option>
          </ListHouses>
          <ArrowImg
            isopen={isOpenList ? 1 : 0}
            onClick={handleOpen}
            src={Arrow}
            alt="arrow"
          />
        </label>
      </DropdownContainer>
      <div>
        <List>
          {filteredHouse().map(({ name, smallImg, details, id }, index) => (
            <Li key={index}>
              <DetailsTitleCon>
                <LineTitleCon>
                  <h2>{name}</h2>
                  <Line />
                </LineTitleCon>
                <ConDescription>
                  <p>{details}</p>
                </ConDescription>
                <StyledLink to={`/reserve/${id}`}>Детальніше</StyledLink>
              </DetailsTitleCon>
              <img src={smallImg} alt="imhHouse" />
            </Li>
          ))}
          <ArrowTopFunc right="55px" bottom="252px" />
        </List>
      </div>
    </>
  );
};

export default Reserve;
