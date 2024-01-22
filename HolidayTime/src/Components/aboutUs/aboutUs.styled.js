import styled from "styled-components";
import AboutUsPict from "../../assets/AboutUsPict.png";

export const GeneralDiv = styled.div`
  width: 100%;
`;

export const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`;

export const ContainerTitle = styled.div`
  height: 140px;
  background: #c6c6dc;
  padding-left: 227px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h2 {
    color: #202846;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 48px;
    font-style: italic;
    font-weight: 400;
  }
`;

export const ContainerImg = styled.div`
  width: 1574px;
  height: 227px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  background-image: url(${AboutUsPict});
  margin-top: 23px;
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
    font-size: 48px;
    font-weight: 700;
  }
  p {
    color: #fff;
    font-family: "PT Sans", sans-serif;
    font-size: 36px;
    font-weight: 700;
  }
`;

export const ContaineInfo = styled.div`
  display: flex;
  width: 1426px;
  height: 380px;
  flex-direction: column;
  justify-content: center;
  background: #cbcbcb;
  padding: 0 74px;
  p {
    color: #202846;
    font-family: "PT Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
  }
`;
