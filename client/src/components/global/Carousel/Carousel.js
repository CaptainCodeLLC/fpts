import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import './landing-carousel.css'

export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      autoplay:true,
      autoplaySpeed:5000,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      fade:true
    };
    return (
        <div>
          <Slider {...settings}>
            <Slide img = "https://s3.amazonaws.com/fpts-images/miamiSkyline.jpg"/>
            <Slide img = "https://s3.amazonaws.com/fpts-images/rooftop.jpg"/>
            <Slide img = 'https://s3.amazonaws.com/fpts-images/parkingGarage2.jpg'/>
            <Slide img = "https://s3.amazonaws.com/fpts-images/sunset.jpg"/>
            <Slide img = "https://s3.amazonaws.com/fpts-images/sunrise.jpg"/>
            <Slide img = 'https://s3.amazonaws.com/fpts-images/parkingGarage.jpg'/>
            <Slide img = 'https://s3.amazonaws.com/fpts-images/traffic.jpg'/>
            
          </Slider>
        </div>
    );
  }
}
