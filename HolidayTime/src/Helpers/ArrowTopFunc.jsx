import ArrowTop from "../assets/SVG/arrowTop.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArrowTopFunc = ({ right, bottom }) => {
  const ArrowTopImg = styled.img`
    position: absolute;
    width: 101px;
    height: 101px;
    right: ${right};
    bottom: ${bottom};
    cursor: pointer;
  `;

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <ArrowTopImg onClick={handleTop} src={ArrowTop} alt="" />;
};

ArrowTopFunc.propTypes = {
  right: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
};

export default ArrowTopFunc;
