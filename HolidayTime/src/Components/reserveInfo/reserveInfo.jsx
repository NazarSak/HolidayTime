import { useParams } from "react-router-dom";
import ArrayHouses from "../../Helpers/ArrayHouses";
import ArrowBack from "../../assets/SVG/arrowBack.svg";
import {
  ContainerTitle,
  Section,
  SectionInfo,
  StyledLink,
  ContainerP,
  InfoContainer,
  AlertContainer,
} from "./reserveInfo.styled";

const ReserveInfo = () => {
  const { reserveid } = useParams();
  const selectedHouse = ArrayHouses.find(
    (house) => house.id.toString() === reserveid
  );

  const { smallImg, details, reservation } = selectedHouse;

  return (
    <>
      <ContainerTitle>
        <h2>Забронювати будиночок в {reservation}</h2>
      </ContainerTitle>
      <Section>
        <StyledLink to={"/reserve"}>
          <img src={ArrowBack} alt="" />
          Назад
        </StyledLink>
        <SectionInfo>
          <InfoContainer>
            <img src={smallImg} alt="smallImg" />
            <ContainerP>
              <p>{details}</p>
            </ContainerP>
          </InfoContainer>
          <AlertContainer>
            <p>більше інформації про цю місцевість немає</p>
            <p>There is no more information about this area</p>
          </AlertContainer>
        </SectionInfo>
      </Section>
    </>
  );
};

export default ReserveInfo;
