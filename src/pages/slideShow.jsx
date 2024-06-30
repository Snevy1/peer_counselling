// Slideshow.jsx
import React from 'react';
import Slider from 'react-slick';

import peer1 from "../assets/peer1.jpg"
import peer2 from "../assets/peer2.jpg"
import peer3 from "../assets/peer3.jpg"
//import peer4 from "../assets/peer4.jpg"
//import peer5 from "../assets/peer5.jpg"
//import peer6 from "../assets/peer6.jpg"

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className='slide'>
        <img src={peer1} alt="Slide 1" />
      </div>
      <div className='slide'>
        <img src={peer2} alt="Slide 2" />
      </div>
      <div className='slide'>
        <img src={peer3} alt="Slide 3 " />
      </div>
    </Slider>
  );
};

export default Slideshow;
