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
  color: #fff;
  gap: 16px;
`;
