import { Ellipse } from "../Components/slider/swiper.styled";
import PropTypes from "prop-types";

const SvgElipse = ({ index, activeIndex }) => {
  return (
<Ellipse
  xmlns="http://www.w3.org/2000/svg"
  width="20"  // Set width to 20 pixels
  height="40"  // Set height to 40 pixels
  viewBox="0 0 10 10"
  active={index === activeIndex}
>
  <ellipse cx="5" cy="5" rx="5" ry="5" />
</Ellipse>
  );
};

SvgElipse.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default SvgElipse;
