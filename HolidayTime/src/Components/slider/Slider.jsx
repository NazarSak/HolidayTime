import { useState } from "react";
import ArrayHouses from "../../Helpers/ArrayHouses";
import { Section,SectionCon } from "./swiper.styled";
import ArrowLeft from "../../assets/SVG/arrowLeft.svg";
import './swiper.css'


const Slider = () => {
  const [houses, setHouses] = useState(ArrayHouses);
  const [index, setIndex] = useState(0);

  const handlePrevSlide = () => {
    const newIndex = (index + 1) % houses.length;
    setIndex(newIndex);
  };

  return (
    <Section>
      <SectionCon>
        {ArrayHouses.map((house, houseIndex) => {
          const { id, smallImg, details } = house;

          let position = "nextSlide";
          if (houseIndex === index) {
            position = "activeSlide";
          }
          if (
            houseIndex === index - 1 ||
            (index === 0 && houseIndex === houses.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={smallImg} alt="Img" className="img" />
              <p>{details}</p>
              <img
                src={ArrowLeft}
                onClick={handlePrevSlide}
                alt=""
              />
            </article>
          );
        })}
      </SectionCon>
    </Section>
  );
};

export default Slider;
