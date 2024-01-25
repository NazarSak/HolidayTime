import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  position: relative;
  p {
    color: #202846;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
  }
  h2 {
    color: #353c57;
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 36px;
    font-style: italic;
    font-weight: 700;
  }
`;

export const Li = styled.li`
  width: 1299px;
  height: 300px;
  background: #bdbdc6;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 100px;
  padding: 0 87px 0 103px;
  position: relative;
  img {
    width: 485px;
    height: 244px;
  }
`;

export const DetailsTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LineTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const ConDescription = styled.div`
  width: 664px;
  height: 184px;
  background: #d7d7dd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Line = styled.div`
  width: 712px;
  height: 3px;
  background: #fff;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropdownContainer = styled.div`
  width: 1489px;
  height: 73px;
  background: #e8e8e8;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-right: 14px;
  position: relative;
  label {
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    margin-left: 575px;
    color: rgba(0, 0, 0, 0.61);
    text-align: center;
    font-family: "PT Sans", sans-serif;
    font-size: 28px;
    font-weight: 400;
  }
  .custom-dropdown {
    position: relative;
    display: inline-block;
  }
`;

export const ListHouses = styled.select`
  display: ${(props) => (props.isopen ? "block" : "none")};
  appearance: none;
  padding: 8px;
  font-size: 16px;
  animation: ${fadeIn} 0.3s ease-in-out;
  overflow: hidden;
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 50px;
  right: 5px;
  z-index: 1;
`;

export const ArrowImg = styled.img`
  transform: rotate(${(props) => (props.isopen ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

export const StyledLink = styled(Link)`
  background-color: #202846;
  width: 200px;
  height: 60px;
  color: #fff;
  text-align: center;
  font-family: "PT Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: absolute;
  bottom: 10px;
  right: -48px;
`;
