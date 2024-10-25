import React from "react";
import Slider from "react-slick";
import "../styles/slider.css"

import aPlagueTaleRequiem from "../assets/imgs/aPlagueTaleRequiem.jpg"
import diabloIV from "../assets/imgs/diabloIV.jpg"
import fallGuys from "../assets/imgs/fallguys.jpg"
import gtaVI from "../assets/imgs/grandTheftAutoVI.jpg"
import kofXV from "../assets/imgs/kofXV.jpg"
import marioKartDeluxe8 from "../assets/imgs/marioKartDeluxe8.jpg"

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={aPlagueTaleRequiem} alt="" />
      </div>
      <div>
        <img src={diabloIV} alt="" />
      </div>
      <div>
        <img src={fallGuys} alt="" />
      </div>
      <div>
        <img src={gtaVI} alt="" />
      </div>
      <div>
        <img src={kofXV} alt="" />
      </div>
      <div>
        <img src={marioKartDeluxe8} alt="" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
