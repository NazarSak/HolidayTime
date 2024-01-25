import ThirdGeneral from "../../assets/ThirdGeneral.png";
import Form from "../form/Form";
import Slider from "../slider/Slider";
import ArrayHouses from "../../Helpers/ArrayHouses";
import ArrowTopFunc from "../../Helpers/ArrowTopFunc";
import {
  FirstConatinerImg,
  SecondConatinerImg,
  ThirdConatinerImg,
  InfoThirdCon,
} from "./general.styled";
const General = () => {
  return (
    <main>
      <FirstConatinerImg>
        <div>
          <h2>HolidayTime</h2>
          <p>Автентичний відпочинок серед українського колориту!</p>
        </div>
      </FirstConatinerImg>

      <SecondConatinerImg>
        <Slider ArrayHouses={ArrayHouses} />
      </SecondConatinerImg>

      <ThirdConatinerImg>
        <img src={ThirdGeneral} alt="" />
        <InfoThirdCon>
          <p>
            Активний відпочинок у нетипових лоцаціях. Незаймана природа та
            місцевий колорит подарують Вам незабутні враження.
          </p>
        </InfoThirdCon>
      </ThirdConatinerImg>
      <Form />
      <ArrowTopFunc right="55px" bottom="-752px" />
    </main>
  );
};

export default General;
