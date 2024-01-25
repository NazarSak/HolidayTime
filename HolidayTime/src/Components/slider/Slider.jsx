import { useState, useEffect } from "react";
import ArrayHouses from "../../Helpers/ArrayHouses";
import ArrowLeft from "../../assets/SVG/arrowLeft.svg";
import SvgElipse from "../../Helpers/SvgElipse";
import "./swiper.css";
import {
  Section,
  SectionCon,
  ContainerText,
  HouseImg,
  ArrowRightImg,
  ListElipse,
} from "./swiper.styled";

const Slider = () => {
  const [houses, setHouses] = useState(ArrayHouses);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (houses.length === index) {
      setIndex(0);
    }
  }, [houses, index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevState) => prevState + 1);
      console.log("object");
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
            houseIndex === (index - 1 + houses.length) % houses.length ||
            (index === 0 && houseIndex === houses.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <HouseImg src={smallImg} alt="Img" className="img" />
              <ContainerText>
                <p>{details}</p>
                <ListElipse>
                  {ArrayHouses.map(({ id }) => (
                    <li key={id}>
                      <SvgElipse index={id} activeIndex={index} />
                    </li>
                  ))}
                </ListElipse>
              </ContainerText>
              <ArrowRightImg src={ArrowLeft} onClick={handlePrevSlide} alt="" />
            </article>
          );
        })}
      </SectionCon>
    </Section>
  );
};

export default Slider;
