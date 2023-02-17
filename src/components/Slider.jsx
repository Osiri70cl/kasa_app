import React from "react";
import { useState } from "react";

//Style
import arrowLeft from "../assets/img/arrowLeft.svg";
import arrowRight from "../assets/img/arrowRight.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img
              src={arrowLeft}
              alt="image de présentation"
              className="slider__previous-icon"
            />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img
              src={arrowRight}
              alt="image de présentation"
              className="slider__next-icon"
            />
          </div>
          <div className="slider__info">
            <span className="slider__current-slide">{current + 1}</span> /{" "}
            <span className="slider__total-slides">{length}</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
