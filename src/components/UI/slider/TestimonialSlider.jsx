import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/Slide1Mer.jpeg";
import ava02 from "../../../assets/images/Silde2Mer.jpeg";
import ava03 from "../../../assets/images/Slide3Mer.jpeg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>

        <div className=" slider__content">
          <img src={ava01} alt="avatar" className=" rounded" />
         
        </div>
      </div>
      <div>

        <div className="slider__content">
          <img src={ava02} alt="avatar" className=" rounded" />
         
        </div>
      </div>
      <div>

        <div className="slider__content">
          <img src={ava03} alt="avatar" className=" rounded" />
          
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
