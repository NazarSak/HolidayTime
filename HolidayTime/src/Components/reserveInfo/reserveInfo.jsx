import { useParams } from "react-router-dom";
import ArrayHouses from "../../Helpers/ArrayHouses";
import ArrowBack from "../../assets/SVG/arrowBack.svg";
import {
  ContainerTitle,
  Section,
  SectionInfo,
  StyledLink,
} from "./reserveInfo.styled";

const ReserveInfo = () => {
  const { reserveid } = useParams();
  const selectedHouse = ArrayHouses.find(
    (house) => house.id.toString() === reserveid
  );

  const { id, smallImg, details, reservation, location, name } = selectedHouse;

  return (
    <>
      <ContainerTitle>
        <h2>Забронювати будиночок в {reservation}</h2>
      </ContainerTitle>
      <Section>
        <StyledLink to={'/reserve'}>
          <img src={ArrowBack} alt="" />
          Назад
        </StyledLink>
        <SectionInfo></SectionInfo>
      </Section>
    </>
  );
};

export default ReserveInfo;
