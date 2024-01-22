import ThirdGeneral from "../../assets/ThirdGeneral.png";
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
      <SecondConatinerImg></SecondConatinerImg>
      <ThirdConatinerImg>
        <img src={ThirdGeneral} alt="" />
        <InfoThirdCon>
          <p>
            Активний відпочинок у нетипових лоцаціях. Незаймана природа та
            місцевий колорит подарують Вам незабутні враження.
          </p>
        </InfoThirdCon>
      </ThirdConatinerImg>
    </main>
  );
};

export default General;
