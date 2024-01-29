import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const Section = styled.section``;

export const SectionInfo = styled.div``;

export const StyledLink = styled(Link)`
  width: 150px;
  height: 30px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "PT Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  background-color: #202846;
  border-radius: 45px;
  text-decoration: none;
  margin: 40px;
  margin-left: 138px;
  color: #fff;
  gap: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  img {
    width: 611px;
    height: 314px;
  }
`;

export const ContainerP = styled.div`
  width: 871px;
  height: 378px;
  background: #c7c7c7;
  p {
    color: #000;
    font-family: "PT Sans", sans-serif;
    font-size: 29px;
    font-weight: 400;
    display: flex;
    width: 687px;
    height: 378px;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
  p {
    color: #000;
    font-family: "PT Sans", sans-serif;
    font-size: 49px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;
