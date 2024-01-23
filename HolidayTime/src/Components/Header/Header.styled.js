import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  background: #202846;
  height: 90px;
`;

export const Container = styled.div`
  display: flex;
  padding: 0px 63px 2px 138px;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

export const LogoImg = styled.img`
  width: 180px;
  height: 70px;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 54px;
  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  h2 {
    color: #fff;
    font-family: "PT Sans", sans-serif;
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 59px;
  background: #fff;
  filter: blur(2px);
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-align: center;
  font-family: "PT Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
