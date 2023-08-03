import React from 'react';
import Slider from 'react-slick';

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <>
      <Slider
        className="card-slider relative md:w-[340px] w-[280px]"
        {...settings}
      >
        <div className="w-full">
          <img src="./assets/images/payments/card-1.svg" alt="card" />
        </div>
        <div className="w-full">
          <img src="./assets/images/payments/card-2.svg" alt="card" />
        </div>
        <div className="w-full">
          <img src="./assets/images/payments/card-3.svg" alt="card" />
        </div>
      </Slider>
    </>
  );
};

export default CardSlider;
