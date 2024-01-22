import styled from "styled-components";
import HolidayBack from "../../assets/HolidayBack.png";

export const FirstConatinerImg = styled.div`
  height: 369px;
  width: 1488px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  background-image: url(${HolidayBack});
  margin-top: 53px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 70px;
    font-weight: 700;
  }
  p {
    color: #fff;
    font-family: "PT Sans", sans-serif;
    font-size: 45px;
    font-weight: 700;
  }
`;

export const SecondConatinerImg = styled.div``;

export const ThirdConatinerImg = styled.div`
    width: 1488px;
    height: 412px;
    background: rgba(193, 193, 195, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
  img {
    width: 698px;
    height: 349px;
  }
`;

export const InfoThirdCon = styled.div`
  display: flex;
  width: 632px;
  height: 349px;
  flex-direction: column;
  justify-content: center;
  background: rgba(234, 234, 235, 0.7);
  p {
    color: #202846;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 26px;
    font-weight: 400;
  }
`;
