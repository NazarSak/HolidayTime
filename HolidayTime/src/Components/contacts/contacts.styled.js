import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GeneralDiv = styled.div`
  width: 100%;
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

export const List = styled.ul`
  display: flex;
  gap: 134px;
  width: 1178px;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 63px;
  li {
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: end;
  }
  p {
    color: #000;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
  }
  img {
    width: 580px;
    height: 335px;
  }
`;

export const Line = styled.div`
  width: 244px;
  height: 3px;
  background: #202846;
`;

export const LongerLine = styled.div`
  width: 386px;
  height: 3px;
  background: #202846;
`;

export const ShortLi = styled.li`
  width: 260px;
`;

export const LongerLi = styled.li`
  width: 453px;
`;

