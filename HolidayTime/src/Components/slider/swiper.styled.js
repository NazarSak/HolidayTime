import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  width: 1488px;
  height: 604px;
  overflow: hidden;
`;

export const SectionCon = styled.div``;

export const HouseImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ArrowRightImg = styled.img`
  position: absolute;
  width: 50px;
  height: 100px;
  top: 255px;
  right: 30px;
  cursor: pointer;
`;

export const ContainerText = styled.div`
    width: 1112px;
    height: 167px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 26px;
  p {
    color: #202846;
    -webkit-text-stroke-color: #202846;
    font-family: "PT Sans", sans-serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
  }
`;

export const Ellipse = styled.svg`
  transition: fill 0.7s ease;
  fill: ${(props) => (props.active ? "#A5BB4F" : "#215023")};
`;

export const ListElipse = styled.ul`
  display: flex;
  gap: 7px;
  height: 31px;
  position: absolute;
  bottom: 10px;
  left: 621px;
`;
