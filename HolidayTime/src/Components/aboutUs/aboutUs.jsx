import WordsImg from '../../assets/WordsImg.png'
import {
  GeneralDiv,
  ContainerTitle,
  ContainerImg,
  SectionContent,
  ContaineInfo,
} from "./aboutUs.styled";


const AboutUs = () => {
  return (
    <GeneralDiv>
      <ContainerTitle>
        <h2>Про нас</h2>
      </ContainerTitle>
      <SectionContent>
        <ContainerImg>
          <div>
            {/* <h2>HolidayTime</h2>
            <p>
              Відпочинок, емоції, враження, нетипові маршрути, неймовірні
              локації - це все про сільський еко-туризм в Україні
            </p> */}
            <img src={WordsImg} width="1233" alt="WordsImg" />
          </div>
        </ContainerImg>
        <ContaineInfo>
          <p>
            Наша команда зібрала найколоритніші місця нашої країни саме для
            тебе.
          </p>
          <br />
          <p>
            Місія нашої компанії подарувати незабутні враження та показати
            Україну з іншої сторони. Пройти разом з Вами лісовими стежками, щоб
            попоїсти свіжого карпатського сиру. Пірнути у каньйон та побачити
            занурене під товщу років село Бакота. Покататись на гандолах в
            “українській Венеції”
          </p>
          <br />
          <p>Пізнати Україну разом!</p>
        </ContaineInfo>
      </SectionContent>
    </GeneralDiv>
  );
};

export default AboutUs;
