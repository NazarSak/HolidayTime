import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
// import "./swiperStyle.css"; 

const Slider = ({ ArrayHouses }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ArrayHouses.map(({ smallImg,}, index) => (
          <SwiperSlide key={index}>
            <img src={smallImg} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

Slider.propTypes = {
    ArrayHouses: PropTypes.arrayOf(
      PropTypes.shape({
        smallImg: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Slider;
