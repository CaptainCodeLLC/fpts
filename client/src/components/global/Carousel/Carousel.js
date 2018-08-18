import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import './landing-carousel.css'

import miamiSkyline from './images/miamiSkyline.jpg';
import parkingGarage from './images/parkingGarage.jpg';
import parkingGarage1 from './images/parkingGarage1.jpg';
import rooftop from './images/rooftop.jpg';
import sunrise from './images/sunrise.jpg';
import sunset from './images/sunset.jpg';
import traffic from './images/traffic.jpg';

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
            <Slide img = {miamiSkyline}/>
            <Slide img = {rooftop}/>
            <Slide img = {parkingGarage}/>
            <Slide img = {traffic}/>
            <Slide img = {sunrise}/>
            <Slide img = {parkingGarage1}/>
            <Slide img = {sunset}/>
            
          </Slider>
        </div>
    );
  }
}
